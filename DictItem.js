// -----------------------------------
// AUTHOR            : Fisayo Olofin
// STUDENT NUMBER  : 7812316
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'

class DictItem{

    #key;
    #value;

    constructor(key,value){
        this.#key = key;
        this.#value =value;
    }

    get value(){
        return this.#value;
    }

    get key(){
        return this.#key;
    }

    set value(value){
        this.#value = value;
    }
}

module.exports = DictItem;