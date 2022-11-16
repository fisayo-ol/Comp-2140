// -----------------------------------
// AUTHOR            : Fisayo Olofin
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'
let Hashable = require('./Hashable.js');

class IntHash extends Hashable{
    #data
    constructor(input){
        super();
        this.#data = input;
    }//end constructor
    
    hashVal(){
        return this.#data;
    }//end hashVal

    equals(other){
        return other instanceof IntHash && this.hashVal() === other.hashVal();
    }//end equals

}

module.exports = IntHash;
