// -----------------------------------
// AUTHOR            : Fisayo Olofin
// STUDENT NUMBER  : 7812316
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'

class Hashable{

    constructor(){
        if(this.constructor === Hashable){
            throw new Error("Can't create an abstract class.");
        }
    }//end constructor

    //hashVal
    hashVal(){
        throw new Error("Missing hashVal method in StringHash/IntHash class");
    }//end hashVal

    //equals
    equals(){
        throw new Error("Missing equals method in StringHash/IntHash class");
    }//end equals
}

module.exports = Hashable;