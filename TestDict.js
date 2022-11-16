// -----------------------------------
// AUTHOR            : Fisayo Olofin
// CLASS          : Comp 2150
// 
// Testing the dictionary class
// -----------------------------------

'use strict'
let assert = require('assert');
let Dictionary = require('./Dictionary.js');
let IntHash = require('./IntHash.js');
let StringHash = require('./StringHash.js');

function main() {
    console.log("Testing started... ");
    test1();
    console.log("Test 1 passed.");
    test2();
    console.log("Test 2 passed.");
    test3();
    console.log("Test 3 passed.");
    test4();
    console.log("Test 4 passed.");
    test5();
    console.log("Test 5 passed.");
    console.log("All Tests passed !");
}

function test1() { 
    let dict1 = new Dictionary(4);

    assert(dict1.isEmpty());
    //should be true

    //adding keys
    let key = new IntHash(6);
    dict1.put(key, "6");

    assert(!dict1.isEmpty()); 
    // should be false 
}


//Testing add 1 key
function test2() {

    let dict1 = new Dictionary(5);

    //add
    let key1 = new IntHash(1);
    let key2 = new IntHash(2);

    dict1.put(key1, "One");

    assert(dict1.contains(key1));
    assert(!dict1.contains(key2));

    assert(dict1.get(key1) === "One");

}

//Testing adding multiple keys
function test3() {


    let dict1 = new Dictionary(5); 

    let key1 = new IntHash(1);
    dict1.put(key1, "One");
    let key2 = new IntHash(1);//using the same key

    assert(dict1.contains(key1));
    assert(dict1.contains(key2));
}

//Testing replacing an existing key
function test4() {

    let dict1 = new Dictionary(5);

    let key1 = new IntHash(1);
    let key2 = new IntHash(1);//same keys


    dict1.put(key1, "One");
    dict1.put(key2, "Two");

    assert(dict1.get(key1) !== "One");
    assert(dict1.get(key1) === "Two");

    dict1.put(key1, "One");

    assert(dict1.get(key2) === "One");
    assert(dict1.contains(key2));
}

function test5(){
    let dict = new Dictionary(10);
    let right = new StringHash('key1');
    let wrong = new StringHash('key2');

    dict.put(right, 'value');
    
    assert(dict.contains(wrong) === false);
    assert(dict.get(wrong) === undefined);
}


main();
