"use strict";
/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { treeWalk,treeFind, isValueInTree,runIsValueInTree,treeModifier} //



// create nodes with values
const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");

// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

/**
 *  recurses through tree and logs the value of each node to console
 * @param {object} node is the root of a tree
 * @returns {undefined} by default
 */
function treeWalk(node) {
    console.log(node.value);
    let childNodes = node.descendents;
    if (childNodes) {

        childNodes.forEach(treeWalk); //loop through all children

    }
}
treeWalk(abe);

/**
 * 2.  Searches through tree until find the target as the value of a node
 * @param {object} node that is the root of a tree or subtree
 * @param {string} target value that i am searching for in the tree
 * @returns {boolean} true if the target is in the tree, else false
 */
function treeFind(node, target) {

    if (node.value === target) {
        return true;
    }
    if (node.descendents === null) {
        return false;
    } else {
        let childNodes = node.descendents;
        for (let anode of childNodes) {
            if (treeFind(anode, target)) {
                return true;
            }
        }
    }
    return false;
}

console.log(treeFind(abe, "Lisa"));
console.log(treeFind(abe, "Crusty"));


/**
 * @param {object} treeNode is root of a tree or subtree
 * @param {string} searchValue is the target to match
 * @returns {boolean} true if found else false
 * */
function isValueInTree(treeNode, searchValue) {
    if (treeNode.value === searchValue) {
        return true;
    }
    if (treeNode.descendents.length == 0) {
        return false;
    } else {
        // eslint-disable-next-line id-length
        for (let i = 0; i < treeNode.descendents.length; i++) {
            if (isValueInTree(treeNode.descendents[i], searchValue)) {
                return true;
            }
        }
    }
    return false;
}
/**
 * Helper function to test exercise
 * @returns {undefined}
 */
function runIsValueInTree() {
    console.log(`Lisa is in the tree: ${isValueInTree(abe, "Lisa")}`);
    console.log(`Crusty is in the tree: ${isValueInTree(abe, "Crusty")}`);
}

runIsValueInTree();
/**
 * 5.  Walk through the tree and apply the function to each node  
 * @param {object} node that is the root of a tree or subtree
 * @param {string} modifierFunc is a function to be applied to each node
 * @returns {undefined} no explicit return
 */
function treeModifier(node, modifierFunc) {
    modifierFunc(node); //the function is assumed to modify the node
    if (node.descendents.length > 0) {
        for (let anode of node.descendents) {
            treeModifier(anode, modifierFunc);
        }
    }
}

/**
 * puts *** around the value of an object with a value property
 * @param {object} node is an object that has a value property
 * @returns {undefined} no return since it modifies the object
 */
function addStars(node) {
    node.value = "***" + node.value + "***";
}

treeModifier(abe, addStars);
treeWalk(abe);

/**
 * 3.	Given a target value, return the subtree with the found node as it’s root or null if no match.  
 * @param {object} node that is the root of a tree or subtree
 * @param {string} target value that i am searching for in the tree
 * @returns {boolean} node at the root of the subtree if find target value, else null
 */
function findSubtree(node, target) {

    if (node.value === target) {
        return node;
    }
    if (node.descendents.length === 0) {
        return null;
    } else {
        let childNodes = node.descendents;
        for (let anode of childNodes) {
            let found = findSubtree(anode, target);
            if (found !== null) {
                return found;
            }
        }
    }
    return null;
}

console.log("findSubtree should be Lisa node: ");
console.log(findSubtree(abe, "***Lisa***"));
console.log("findSubtree should be Homer node: ");
console.log(findSubtree(abe, "***Homer***"));
console.log("findSubtree should be null: " + findSubtree(abe, "Crusty"));


/**
 * 4.	Create a new class ListNode (based on TreeNode below) that generates a linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.
 */
class ListNode {
    /**
     * 
     * @param {string} value to be given to value property
     * @param {object} link is object for the next link inlist
     */
    constructor(value, link) {
        this.value = value;
        this.next = link;
    }
}

// create nodes with values
const maggiel = new ListNode("Maggie", null);
const lisal = new ListNode("Lisa", maggiel);
const bartl = new ListNode("Bart", lisal);
const homerl = new ListNode("Homer", bartl);
const abel = new ListNode("Abe", homerl);

/**
 * 5.	Given a target value in the list, return the node that contains the target value or null if no match. 
 * @param {object} node that is the head of a list
 * @param {string} target value that i am searching for in the list
 * @returns {boolean} node in the list that matches the target, else null
 */
function findListNode(node, target) {
    if (node.value === target) {
        return node;
    }
    if (node.next === null) {
        return null;
    } else {
        let found = findListNode(node.next, target);
        if (found !== null) {
            return found;
        }
    }
    return null;
}

console.log("findListNode should be Lisa node: ");
console.log(findListNode(abel, "Lisa"));
console.log("findListNode should be Homer node: ");
console.log(findListNode(abel, "Homer"));
console.log("findListNode should be null: " + findListNode(abel, "Crusty"));

