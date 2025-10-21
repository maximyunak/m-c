import { ref } from 'vue'

export const store = ref(localStorage.getItem('token') ?? null)

export const setToken = (token) => {
  localStorage.setItem('token', token)
  store.value = token
}
