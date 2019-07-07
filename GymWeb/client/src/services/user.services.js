import route from './_connection'

export default {
  getAllUser () {
    return route().get('/users')
  },
  getDetailUser  (params) {
    return route().get('/users/' + params.id)
  },
  addUser (body) {
    return route().post('/users', body)
  },
  updateUser (params, body) {
    return route().put('/users/' + params.id, body)
  },
  deleteUser (id) {
    return route().delete('users/' + id)
  }
}
