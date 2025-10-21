<script setup>
import $fetch from '@/utils/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const submit = async (event) => {
  const res = await $fetch('/register', 'post', new FormData(event.target))

  if (res.user) {
    router.push('/login')
  }
}
</script>

<template>
  <div class="form-container">
    <h2 class="form-title">Присоединяйтесь к нам!</h2>
    <form @submit.prevent="submit" id="register-form">
      <div class="form-group">
        <label for="register-email">Email</label>
        <input type="email" name="email" class="form-control" placeholder="Введите ваш email" />
      </div>
      <div class="form-group">
        <label for="register-username">Никнейм</label>
        <input type="text" name="nickname" class="form-control" placeholder="Введите ваш никнейм" />
      </div>
      <div class="form-group">
        <label for="register-password">Пароль</label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="Придумайте надежный пароль"
        />
      </div>
      <button type="submit" class="btn btn-block">
        <i class="fas fa-user-plus"></i> Зарегистрироваться
      </button>
      <div class="text-center mt-3">
        <RouterLink to="/login">Уже есть аккаунт? Войдите</RouterLink>
      </div>
    </form>
  </div>
</template>
