class Block
{
    constructor({ timestamp, data, hash, lastHash })
    {
        this.timestamp = timestamp
        this.data = data
        this.hash = hash
        this.lastHash = lastHash
    }
}
/*
const FirstBlock = new Block
({
    timestamp:'01/01/01', 
    data:'foo-data',
    hash:'foo-hash',
    lastHash: 'foo-lastHash'
})

console.log('FirstBlock', FirstBlock)
*/

module.exports = Block