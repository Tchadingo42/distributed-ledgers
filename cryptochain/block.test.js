const { GENESIS_DATA } = require('./config.js')
const Block = require('./block.js')

describe('Block', () => {
    const timestamp = 'a-date'
    const data = ['blockchain', 'data']
    const hash = 'bar-hash'
    const lastHash = 'foo-hash'
    const block = new Block({ timestamp, data, hash, lastHash })

    it ('has a timestamp, lastHash, hash, and data proterty', () => 
    {
        expect(block.timestamp).toEqual(timestamp)
        expect(block.lastHash).toEqual(lastHash)
        expect(block.hash).toEqual(hash)
        expect(block.data).toEqual(data)
    })

    describe('genesis()', () => 
    {
        const genesisBlock = Block.genesis()

        console.log('genesisBlock', genesisBlock)

        it ('returns a Block instance', () => 
        {
            expect(genesisBlock instanceof Block).toBe(true)
        })
        it ('returns the genesis data', () => 
        {
            expect(genesisBlock).toEqual(GENESIS_DATA)
        })
    })

    describe('mineBlock', () => 
    {
        const lastBlock = Block.genesis()
        const data = "data mined"
        const minedBlock = Block.mineBlock({ lastBlock, data })

        it ('returns a Block of instance', () =>
        {
            expect(minedBlock instanceof Block).toBe(true)
        })

        it ('sets the `lastHash` to be the `hash` of the lastBlock', () => 
        {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash)
        })

        it ('sets the `data`', () => 
        {
            expect(minedBlock.data).toEqual(data)  
        })

        it ('sets the `timestamp`', () => 
        {
            expect(minedBlock.timestamp).not.toEqual(undefined)
        })

    })
})