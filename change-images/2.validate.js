const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true
  expect(carmel.utils.productDependenciesExist(), `Looks like you didn't install the dependencies yet`).to.be.true

  expect(carmel.original, "Missing original values").to.exist

  expect(carmel.original.logoImage, "Missing original logo image").to.exist
  expect(carmel.utils.assetExists(carmel.original.logoImage), "Missing original logo image file").to.be.true

  expect(carmel.original.logoLightImage, "Missing original logo light image").to.exist
  expect(carmel.utils.assetExists(carmel.original.logoLightImage), "Missing original logo light image file").to.be.true

  expect(carmel.original.logoHash, "Please replace the logo image").to.not.equal(state.logoHash)
  expect(carmel.original.logoLightHash, "Please replace the logo light image").to.not.equal(state.logoLightHash)
  
  done()
}
