import instance from './client'
import organizations from './organizations'
import users from './users'
import config from '_config'

// let apiMocksREST: any
let apiMocksGraphQL: any

const useMocks = config.api.useMocks || process.env.NODE_ENV === 'test'

if (useMocks) {
  // apiMocksREST = require('./_mocksREST/')
  apiMocksGraphQL = require('./_mocksGraphQL/')
}

const init = async () => {
  if (useMocks) {
    // Remove all SW caches
    const cachesNames = await caches.keys()

    await Promise.all(cachesNames.map((name) => caches.delete(name)))

    // await apiMocksREST.default.init()
    await apiMocksGraphQL.default.init()
  }

  return instance
}

export default { instance, organizations, users, init }
export { init, instance, organizations, users }
