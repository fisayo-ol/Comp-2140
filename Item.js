'use strict'

class Item{
    #key
    #value

    constructor(key,value){
        this.#key = key;
        this.#value = value;
    }

    get key(){
        return this.#key;
    }

    get value(){
        return this.#value;
    }
}

module.exports = Item;