const expected = {
  subtitle: "string"
}

const main = ({ chai, utils, expected, done }) => {
  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  const introChunkCoverSubtitle = introChunkConfig.routes.main.cover.subtitle

  chai.expect(introChunkCoverSubtitle).to.not.equal(expected.subtitle, `Make sure the cover subtitle is "${expected.subtitle}"`)

  done()
}

module.exports = {
  expected,
  main
}
