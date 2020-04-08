const generateUniqueId = require('../../src/utils/generateUniqueId')
describe('Gnerate unique id', () => {
  it('should generate in inique id', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8)
  })
})