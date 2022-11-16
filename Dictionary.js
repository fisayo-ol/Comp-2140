// -----------------------------------
// AUTHOR            : Fisayo Olofin
// STUDENT NUMBER  : 7812316
// CLASS          : Comp 2150
// 
// 
// -----------------------------------


'use strict'
let LinkedList = require('./LinkedList.js');
let DictItem = require('./DictItem.js');
let Hashable = require("./Hashable");

class Dictionary{
    //Instance variables
    #count     //keep track of entries into the dictionary
    #size       //size of hashArray
    #hashArray     //Array to store all the entries into HashTable

    constructor(size){
        this.#count = 0;
        this.#size = size;
        this.#hashArray = new Array(size);
        this.#hashArray.fill(new LinkedList());
    }//end constructor


    //put: insert the key-value pair into the dictionary
    put(k,v){
        if(! k instanceof Hashable){
            throw new Error("Invalid type of parameter");
        }

        let newItem = new DictItem(k,v);
        if(this.#hashArray[k.hashVal()%this.#size].insert(newItem)){
            this.#count++;
        }
        
    }//end put

    //get: returns an item with the given key
    get(k){
        if(! k instanceof Hashable){
            throw new Error("Invalid type of parameter");
        }

        let listToSearch = this.#hashArray[k.hashVal()%this.#size];
        return listToSearch.get(k);
    }//end get

    //Contains: checks if a key is in the dictionary
    contains(k){
        if(! k instanceof Hashable){
            throw new Error("Invalid type of parameter");
        }

        let listToSearch = this.#hashArray[k.hashVal()%this.#size];
        return listToSearch.search(k);
    }//end contains


    //isEmpty
    isEmpty(){
        return this.#count == 0;
    }//end isEmpty
    
}//end Dictionary


module.exports = Dictionary;