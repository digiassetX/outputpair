/**
 * Creates an address amount pair for transaction output
 * @param {string}  address
 * @param {int|BigInt} amountSats
 * @return {Object}
 */
module.exports=test=(address,amountSats)=>{
    let temp={}
    let amountString=amountSats.toString().padStart(9,'0'); //convert amountSats to a string with at least 9 characters
    let index=amountString.length-8;                          //where to place the .
    amountString=amountString.substr(0,index)+"."+amountString.substr(index);//add the .
    temp[address] = amountString                            //create an object containing value
    return temp;
}