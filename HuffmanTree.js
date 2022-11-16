// -----------------------------------
// AUTHOR            : Fisayo Olofin
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'

let Dictionary = require('./Dictionary.js');
let StringHash = require('./StringHash.js');
let TreeNode = require('./TreeNode.js');


class HuffmanTree{
    #root
    #weight

    constructor(weight, char, root){

        if(arguments.length == 2){
            this.#root = new TreeNode(char);
            this.#weight = weight;
        }
        else{
            this.#root = root;
            this.#weight = weight;
        }

    }

    //combine: combines 2 trees into 1
    combine(tree2){
        let newWeight = this.weight + tree2.weight;
        let newRoot = new TreeNode(null);
        newRoot.left = this.#root;
        newRoot.right = tree2.root;
        let newTree = new HuffmanTree(newWeight,null,newRoot);
        return newTree;
    }//end combine

    //compareTo: compares the weights of 2 trees
    compareTo(other){
        let result = 0;

        if(this.weight === other.weight){
            let minCharThis = this.getMinChar(this.#root);
            let minCharOther = this.getMinChar(other.#root);
            
            if(minCharThis < minCharOther){
                result = -1;
            }

            else if(minCharThis > minCharOther){
                result = 1;
            }

        }
        
        else if(this.weight < other.weight){
            result =  -1;
        }

        else if(this.weight > other.weight){
            result =  1;
        }

        return result
    }//end compareTo

    getPath(length){
        let codes = new Dictionary(length);
        this.traverse(codes, '',this.#root)
        return codes;
    }//end getPath

    //traverse: uses inorder traversal to get paths of each character
    traverse(dict, code , node){
        if(node){
            this.traverse(dict, code + '0', node.left);
            if(node.data){
                let key = new StringHash(node.data)
                dict.put(key, code);
            }
            this.traverse(dict, code + '1', node.right);
        }
    }


    getMinChar(node){
        if(node.data === null){
            let minLeft = this.getMinChar(node.left);
            let minRight = this.getMinChar(node.right);
            if (minLeft <= minRight)
                return minLeft;
            else
                return minRight;
        }

        return node.data;
    }//end getMinChar

    //Accessors
    get weight(){
        return this.#weight;
    }

    get root(){
        return this.#root;
    }

}

module.exports = HuffmanTree;
