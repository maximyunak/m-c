<script setup>
import { setToken } from '@/store/store'
import $fetch from '@/utils/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const submit = async (event) => {
  const res = await $fetch('/login', 'post', new FormData(event.target))

  if (res.credentials) {
    setToken(res.credentials.token)
    router.push('/')
  }
}
</script>

<template>
  <div class="form-container">
    <h2 class="form-title">С возвращением!</h2>
    <form id="login-form" @submit.prevent="submit">
      <div class="form-group">
        <label for="login-email">Email</label>
        <input
          type="email"
          name="email"
          id="login-email"
          class="form-control"
          placeholder="Введите ваш email"
        />
      </div>
      <div class="form-group">
        <label for="login-password">Пароль</label>
        <input
          name="password"
          type="password"
          id="login-password"
          class="form-control"
          placeholder="Введите ваш пароль"
        />
      </div>
      <button type="submit" class="btn btn-block"><i class="fas fa-sign-in-alt"></i> Войти</button>
      <div class="text-center mt-3">
        <RouterLink to="/login">Нет аккаунта? Зарегистрируйтесь</RouterLink>
      </div>
    </form>
  </div>
</template>
