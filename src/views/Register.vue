<script setup>
import api from '@/utils/api'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const nickname = ref('')

const submit = async () => {
  const res = api.post('/register', {
    email: email.value,
    password: password.value,
    nickname: nickname.value,
  })

  console.log(res)
}
</script>

<template>
  <div class="form-container">
    <h2 class="form-title">Присоединяйтесь к нам!</h2>
    <form @submit.prevent="submit" id="register-form">
      <div class="form-group">
        <label for="register-email">Email</label>
        <input
          v-model="email"
          type="email"
          id="register-email"
          class="form-control"
          placeholder="Введите ваш email"
        />
        <div v-if="email.length === 0" class="error-message">
          <i class="fas fa-exclamation-circle"></i> Ошибка валидации
        </div>
      </div>
      <div class="form-group">
        <label for="register-username">Никнейм</label>
        <input
          v-model="nickname"
          type="text"
          id="register-username"
          class="form-control"
          placeholder="Введите ваш никнейм"
        />
        <div v-if="nickname.length === 0" class="error-message">
          <i class="fas fa-exclamation-circle"></i> Ошибка валидации
        </div>
      </div>
      <div class="form-group">
        <label for="register-password">Пароль</label>
        <input
          v-model="password"
          type="password"
          id="register-password"
          class="form-control"
          placeholder="Придумайте надежный пароль"
        />
        <div v-if="password.length === 0" class="error-message">
          <i class="fas fa-exclamation-circle"></i> Ошибка валидации
        </div>
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
