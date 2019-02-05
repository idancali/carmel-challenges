const REQUIREMENTS = [
  `an existing product`,
  `that the product dependencies be installed first`,
  `at least a chunk with a route that contains a cover image`,
  `a logo image`
]

const validRoute = (route) => {
  return route && route.title && route.cover && route.cover.image
}

const findChunksWithValidRoutes = (product) => {
  return product.chunks.map(chunk => {
    if (!chunk.config.routes) {
      return
    }

    const validRoutes = Object.keys(chunk.config.routes).map(route => validRoute(chunk.config.routes[route]) ? route : false)
    return (validRoutes && validRoutes.length > 0) ? Object.assign({}, chunk, { validRoutes }) : false
  })
}

const init = (carmel) => new Promise((resolve, reject) => {
  if (!carmel.utils.productExists()) {
    reject(new Error(`This challenge requires ${REQUIREMENTS[0]}`))
    return
  }

  if (!carmel.utils.productDependenciesExist()) {
    reject(new Error(`This challenge requires ${REQUIREMENTS[1]}`))
    return
  }

  // Load up the product
  carmel.utils.loadProduct().then((product) => {

    // Let's look up chunks with at least a route that contains a cover image
    const chunks = findChunksWithValidRoutes(product)

    if (!chunks || chunks.length === 0) {
      // This challenge needs a route that contains cover image
      reject(new Error(`This challenge requires ${REQUIREMENTS[2]}`))
      return
    }

    // Let's take the first of these
    const chunk = chunks[0]

    // And let's also take its first valid route
    const routeName = chunk.validRoutes[0]

    // Fetch the entire route
    const route = chunk.config.routes[routeName]

    // Compute file hashes
    const coverHash = carmel.utils.fileHash(carmel.utils.asset(route.cover.image))
    const logoHash = carmel.utils.fileHash(carmel.utils.asset(product.config.theme.logoImage))
    const logoLightHash = carmel.utils.fileHash(carmel.utils.asset(product.config.theme.logoLightImage))

    resolve({
      chunkName: chunk.name,
      route,
      routeName,
      coverHash,
      logoImage: product.config.theme.logoImage,
      logoLightImage: product.config.theme.logoLightImage,
      logoHash,
      logoLightHash
    })
  })
})

module.exports = init
