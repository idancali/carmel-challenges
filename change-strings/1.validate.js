const expected = {
  title: "string",
  chunk: "string"
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



const expected = {
  title: "string",
  chunk: "auth"
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
