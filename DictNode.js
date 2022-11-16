// -----------------------------------
// AUTHOR            : Fisayo Olofin
// STUDENT NUMBER  : 7812316
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'

class DictNode{
    #item;
    #next;

    // Constructor
    constructor(newItem){
        this.#item = newItem;
        this.#next = null;
    }

    //Mutators
    set next(nextNode){
        this.#next = nextNode;
    }

    //Accessors
    get next(){
        return this.#next;
    }

    get item(){
        return this.#item;
    }
}

module.exports = DictNode;