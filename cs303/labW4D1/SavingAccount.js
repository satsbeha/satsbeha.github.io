"use strict";
/* global Account */

/**
 * Saving Account class
 * 
 */

class Saving extends Account{
    constructor(interest,number){
    super(number);
    this._interest= interest;
    }
    getInterest(){
        return this._interest;
    }
    addInterest() {
        let getBalance= this.getBalance()*this._interest/100;
        this.deposit(getBalance);
    }
   
    setInterest(value){
        this._interest =value;
        
    }
    toString() {
        return super.toString + "interest"+this._interest;
    }
}
let save = new Saving(10,1234);
//save.deposit(100);
save.getInterest();