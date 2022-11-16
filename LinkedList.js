// -----------------------------------
// AUTHOR            : Fisayo Olofin
// STUDENT NUMBER  : 7812316
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'
let DictNode = require('./DictNode.js');

class LinkedList{
    #top
    #end

    // Constructor
    constructor(){
        this.#top = null;
        this.#end = null;
    }

    insert(newItem){
        let newNode = new DictNode(newItem);

		if (this.#top === null) {
			this.#top = newNode;
			this.#end = newNode;
		}

		else {
			if (!this.search(newItem.key)) {
				this.#end.next = newNode;
				this.#end = newNode;
			} else {
                this.replace(newItem)
				return false;
			}
		}
		return true;
    }//end insert

    search(key){
        let curr = this.#top;
        while(curr !== null){
            if(curr.item.key.equals(key)){
                return true;
            }
            curr = curr.next;
        }
        return false;
    }//end search


    get(key){
        let curr = this.#top;
        while(curr !== null){
            if(curr.item.key.equals(key)){
                return curr.item.value;
            }
            curr = curr.next;
        }
        return undefined;
    }//end get

    replace(newItem){
        let curr = this.#top;
        while(curr !== null){
            if(curr.item.key.equals(newItem.key)){
                curr.item.value = newItem.value;
            }
            curr = curr.next;
        }
    }//end replace


    isEmpty(){
        return this.#top === null;
    }//end isEmpty

}

module.exports = LinkedList;