const expected = {
  title: "string",
  chunk: "string"
}

const main = ({ chai, utils, expected, done }) => {
  const chunkConfig = utils.readFile(`chunks/${expected.chunk}/chunk.json`)
  const chunkTitle = chunkConfig.routes.main.title

  chai.expect(chunkTitle).to.not.equal(expected.title, `Make sure you change the intro page title to "${expected.title}"`)

  done()
}

module.exports = {
  expected,
  main
}
