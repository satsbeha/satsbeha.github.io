"use strict";
/* global Account */
/* global SavingsAccount */
/* global CheckingAccount */


/**
 * The Bank class 
 * 
 * Holds an array of accounts
 */

class Bank {
    /**
     * Constructor for the Bank class
     */
    constructor() {
        this._accounts = [];
    }
    /**
     * Adds a regular account
     * @returns {number} the number of the created account
     */
    addAccount() {
        let number = Bank.nextNumber++;
        this._accounts.push(new Account(number));
    }
    /**
     * Adds a SavingsAccount
     * @param {number} interest interest
     * @returns {number} the number of the created account
     */
    addSavingsAccount(interest) {
        let number = Bank.nextNumber++;
        this._accounts.push(new SavingsAccount(number, interest));
    }
    /**
     * Adds a CheckingAccount
     * @param {number} overdraft overdraft amount
     * @returns {number} the number of the created account 
     */
    addCheckingAccount(overdraft) {
        let number = Bank.nextNumber++;
        this._accounts.push(new CheckingAccount(number, overdraft));
    }

    /**
     * Closes an account
     * 
     * @param {number} number of the account to be closed
     * @returns {undefined}
     */
    closeAccount(number) {
        let idx = this._accounts.findIndex((element) => {
            return element.getNumber() === number;
        });
        this._accounts.splice(idx, 1);
    }

    /**
     * Prints an accounts report
     * @returns {string} the report
     */
    accountReport() {
        let report = "";
        for (const act of this._accounts) {
            report += act.toString() + "\n";
        }
        return report;
    }

    /**
     * Calls endOfMonth on all accounts
     * @returns {string} the report
     */
    endOfMonth() {
        let report = "";
        for (const act of this._accounts) {
            let msg = act.endOfMonth();
            if (msg !== "") {
                report += msg + "\n";
            }
        }
        return report;
    }
}

Bank.nextNumber = 1;