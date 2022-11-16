// -----------------------------------
// AUTHOR            : Fisayo Olofin
// STUDENT NUMBER  : 7812316
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'
let Hashable = require('./Hashable.js');

class StringHash extends Hashable{
    #data
    constructor(input){
        super();
        this.#data = input;
    }//end constructor
    
    //hashVal: returns hashCode.
    hashVal(){
        let length = this.#data.length;
        let prime = 27;
        let value = 0;
        for(let i = 0; i < length; i++){
            value += this.#data.charCodeAt(i)*(prime**(length-i-1));
        }
        return value;
    }//end hashVal

    equals(other){
        return other instanceof StringHash && this.hashVal() === other.hashVal();
    }//end equals
}

module.exports = StringHash;