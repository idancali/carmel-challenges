const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true
  expect(carmel.utils.productDependenciesExist(), `Looks like you didn't install the dependencies yet`).to.be.true

  expect(carmel.original, "Missing original values").to.exist
  expect(carmel.original.route, "Missing original route").to.exist
  expect(carmel.original.route.cover, "Missing original route cover").to.exist
  expect(carmel.original.route.cover.title, "Missing original route cover title").to.exist

  expect(state.route, `Missing the expected route`).to.exist
  expect(state.route.cover, `Missing the expected route cover`).to.exist
  expect(state.route.cover.title, `Missing the expected route cover title`).to.exist
  expect(carmel.original.route.cover.title, `Change the route cover title to something other than "${state.route.cover.title}"`).to.not.equal(state.route.cover.title)

  done()
}
