// -----------------------------------
// AUTHOR            : Fisayo Olofin
// CLASS          : Comp 2150
// 
// 
// -----------------------------------

'use strict'
let HuffmanTree = require('./HuffmanTree');
let Dictionary = require('./Dictionary');
let fs = require('fs');
let StringHash = require('./StringHash');



class HuffmanEncoder{
    #weights;//dictionary to hold the charcters and weights
    #characters;//array to hold each charcter without duplicates
    #inputText; //input from file
    #length;    //length of inputText

    constructor(fileName){
        this.#inputText  = fs.readFileSync(fileName, 'utf8');
        this.#length = this.#inputText.length;
        this.#weights = new Dictionary(this.#length);
        this.#characters = new Array();

        this.fill();
    }

    fill(){
        let index = 0;
        //fill the dictionary;
        for(let i = 0; i < this.#length; i++){
            
            let key = new StringHash(this.#inputText[i]);
            let value = 1;
            if(this.#weights.contains(key)){
                value += this.#weights.get(key)
            }
            else{
                this.#characters[index++]=this.#inputText[i];
            }
            this.#weights.put(key, value)
        }

        //calculate and update to percentages
        for(let c of this.#characters){
            let key = new StringHash(c);
            let newValue = this.#weights.get(key)/this.#length
            this.#weights.put(key,newValue);
        }


    }

    encode(fileName){

        let trees = [];

        //make single trees
        this.makeTrees(trees);

        //combine trees to a single tree
        let finalTree = this.combineTrees(trees);

        //get a dictionary containg all the binary codes for the input text
        let codes = finalTree.getPath(this.#inputText.length);

        let encodedChar = '';
        for(let char of this.#inputText){
            let key = new StringHash(char)
            encodedChar += codes.get(key) + ' ';
        }

        fs.writeFileSync(fileName+'.huff', encodedChar.trim() + '\n');
    }

    //making single trees for each character
    makeTrees(trees){
        for(let char of this.#characters){
            let weight = this.#weights.get(new StringHash(char));
            let hufTree = new HuffmanTree(weight, char);

            trees.push(hufTree);
        }
    }//end makeTress

    combineTrees(trees){
        while(trees.length > 1){
            trees.sort((a, b) => a.compareTo(b));
            let tree1 = trees.shift();
            let tree2 = trees.shift();
            let combined = tree1.combine(tree2);

            trees.push(combined);
        }
        return trees[0];
    }//end combineTrees

}

module.exports = HuffmanEncoder;
