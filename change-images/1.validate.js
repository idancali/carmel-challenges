const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true
  expect(carmel.utils.productDependenciesExist(), `Looks like you didn't install the dependencies yet`).to.be.true

  expect(carmel.original, "Missing original values").to.exist
  expect(carmel.original.route, "Missing original route").to.exist
  expect(carmel.original.route.cover, "Missing original cover").to.exist
  expect(carmel.original.route.cover.image, "Missing original cover image").to.exist
  expect(carmel.original.coverHash, "Missing original cover hash").to.exist

  expect(carmel.utils.assetExists(carmel.original.route.cover.image), "Missing original cover image file").to.be.true
  expect(carmel.original.coverHash, "Please replace the cover image").to.not.equal(state.coverHash)
  
  done()
}
