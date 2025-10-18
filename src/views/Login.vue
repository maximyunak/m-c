<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <div class="form-container">
    <h2 class="form-title">С возвращением!</h2>
    <form id="login-form">
      <div class="form-group">
        <label for="login-email">Email</label>
        <input type="email" id="login-email" class="form-control" placeholder="Введите ваш email" />
        <div class="error-message"><i class="fas fa-exclamation-circle"></i> Ошибка валидации</div>
      </div>
      <div class="form-group">
        <label for="login-password">Пароль</label>
        <input
          type="password"
          id="login-password"
          class="form-control"
          placeholder="Введите ваш пароль"
        />
        <div class="error-message"><i class="fas fa-exclamation-circle"></i> Ошибка валидации</div>
      </div>
      <button type="submit" class="btn btn-block"><i class="fas fa-sign-in-alt"></i> Войти</button>
      <div class="text-center mt-3">
        <RouterLink to="/login">Нет аккаунта? Зарегистрируйтесь</RouterLink>
      </div>
    </form>
  </div>
</template>
