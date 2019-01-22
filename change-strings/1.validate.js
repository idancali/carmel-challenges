const expected = {
  title: "string"
}

const main = ({ chai, utils, expected, done }) => {
  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  const introChunkCoverTitle = introChunkConfig.routes.main.cover.title

  chai.expect(introChunkCoverTitle).to.not.equal(expected.title, `Make sure you change the intro cover title to "${expected.title}"`)

  done()
}

module.exports = {
  expected,
  main
}
