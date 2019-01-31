const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true
  expect(carmel.utils.productDependenciesExist(), `Looks like you didn't install the dependencies yet`).to.be.true

  done()
}
