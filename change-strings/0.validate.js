const expected = {
  title: "string"
}

const main = ({ chai, utils, expected, done }) => {
  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  const introChunkTitle = introChunkConfig.routes.main.title

  chai.expect(introChunkTitle).to.not.equal(expected.title, `Make sure you change the intro page title to "${expected.title}"`)

  done()
}

module.exports = {
  expected,
  main
}
