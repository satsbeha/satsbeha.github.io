"use strict";
/* global Account */

/**
 * Current Account class
 * 
 * Owners of a Current Acccount can overdraw their account
 */
class CheckingAccount extends Account {
    /**
     * Constructor for CheckingAccount
     * 
     * @param {number} number the account number
     * @param {number} overdraft the overdraft amount
     */
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    /**
     * Getter for the overdraft amount
     * 
     * @returns {number} overdraft amount
     */
    getOverdraft() {
        return this._overdraft;
    }

    /**
     * Setter for the overdraft amount
     * 
     * @param {number} overdraft The overdraft amount
     * @returns {undefined}
     */
    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    /**
     * Withdraws money from the CheckingAccount, is allowed to overdraw
     * 
     * @param {number} amount that is withdrawn
     * @returns {undefined}
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraft) {
            throw new Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }

    /**
     * @returns {string} representation of this CheckingAccount
     */
    toString() {
        return "CheckingAccount " + this._number + ": balance: " + this._balance +
            " overdraft limit: " + this._overdraft;
    }

    /**
     * At the end of the month check if balance below zero and if so "send letter"
     * @returns {undefined}
     */
    endOfMonth() {
        let message = "";
        if (this._balance < 0) {
            message = "Warning, low balance " + this.toString();
        }
        return message;
    }
}