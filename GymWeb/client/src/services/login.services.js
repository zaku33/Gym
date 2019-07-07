/* eslint-disable */
import route from './_connection'

export default {
  UserLogin(body) {
    return route().post('/login', body)
  }
}
