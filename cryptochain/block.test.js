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
})

