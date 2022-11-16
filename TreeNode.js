// -----------------------------------
// AUTHOR            : Fisayo Olofin
// STUDENT NUMBER  : 7812316
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'

class TreeNode{
    #data;
    #left;
    #right;

    constructor(data){
        this.#data = data;
        this.#left = null;
        this.#right = null;
    }

    //Accessors
    get data(){
        return this.#data;
    }

    get left(){
        return this.#left;
    }

    get right(){
        return this.#right;
    }

    //Mutators
    set left(left){
        this.#left = left;
    }

    set right(right){
        this.#right = right;
    }
}

module.exports = TreeNode;