const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true

  done()
}
