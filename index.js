/**
 * Creates an address amount pair for transaction output
 * @param {string}  address
 * @param {int} amountSats
 * @return {Object}
 */
module.exports=(address,amountSats)=>{
    let temp={}
    temp[address]=(amountSats/100000000).toFixed(8);
    return temp;
}