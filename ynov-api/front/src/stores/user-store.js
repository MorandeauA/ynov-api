import { defineStore } from 'pinia'
import { LocalStorage, SessionStorage } from 'quasar'
import { register, login, user } from 'src/services/users'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {}
  }),
  getters: {
  },
  actions: {
    getJwtToken () {
      return LocalStorage.getItem('token') || SessionStorage.getItem('token')
    },
    async handleRegister (params) {
      try {
        const res = await register(params)
        LocalStorage.set('token', res.data.token)
        const userData = await user(res.data.token)
        this.user = userData
      } catch (e) {
        LocalStorage.clear()
        throw new Error(e)
      }
    },
    async handleLogin (params) {
      try {
        const res = await login(params)
        LocalStorage.set('token', res.data.token)
        const userData = await user(res.data.token)
        this.user = userData
      } catch (e) {
        LocalStorage.clear()
        throw new Error(e)
      }
    },
    async loadUser () {
      try {
        const userData = await user()
        this.user = userData
      } catch (e) {
        throw new Error(e)
      }
    }
  }
})
