/**
 * For the demo purposes we'll be using this predefined JWT token as the token of the signed in user
 * https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Db8fjZU7MkBZoJDjmjuvv2EeDgG9RSaZ1xKm__qHelw
 */

import store from 'store'
import config from '../_config'

const sampleToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Db8fjZU7MkBZoJDjmjuvv2EeDgG9RSaZ1xKm__qHelw'

export type AuthService = {
  token?: string
  init(): void
  auth(token: string): void
  unauth(): void
  isAuthenticated(): boolean
  getToken(): string | undefined
}

const authService: AuthService = {
  token: undefined,
  init() {
    if (config.api.useMocks) {
      this.token = sampleToken
    } else {
      // Read the token from local storage
      this.token = store.get('token') || undefined
    }
  },
  auth(token) {
    store.set('token', token)
  },
  unauth() {
    store.remove('token')
  },
  isAuthenticated() {
    return !!this.token
  },
  getToken() {
    return this.token
  },
}

export default authService
