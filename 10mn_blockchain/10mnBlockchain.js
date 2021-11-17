const lightningHash = (data) => 
{
    return data + "*"
}

class Block
{
    constructor(data, hash, lastHash)
    {
        this.data = data
        this.hash = hash
        this.lastHash = lastHash
    }
}

class Blockchain
{
    constructor()
    {
        const genesis = new Block('data-gen', 'hash-gen', 'lastHash-gen')
        this.chain = [genesis]
    }

    addBlock(data)
    {
        const lastHash = this.chain[this.chain.length - 1].hash
        const hash = lightningHash(data + lastHash)
        const block =  new Block(data, hash, lastHash)

        this.chain.push(block)
    }
}

const myBlockchain = new Blockchain

myBlockchain.addBlock('one')
myBlockchain.addBlock('two')
myBlockchain.addBlock('three')

console.log(myBlockchain)