// -----------------------------------
// AUTHOR            : Fisayo Olofin
// CLASS          : Comp 2150
// 
// 
// -----------------------------------



let HuffmanEncoder = require('./HuffmanEncoder');

if(process.argv.length != 3){
    throw new Error('Path to text file is not provided!');
}

let endcoder = new HuffmanEncoder(process.argv[2]);

endcoder.encode(process.argv[2]);
