<script setup>
import { store } from '@/store/store'
import { computed } from 'vue'

const token = computed(() => store.value)
</script>

<template>
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="#" class="logo">
          <i class="fas fa-pen-nib"></i>
          <span>БлогПлатформа</span>
        </a>
        <ul class="nav-links">
          <li>
            <RouterLink to="/" exact-active-class="active"
              ><i class="fas fa-home"></i> Главная</RouterLink
            >
          </li>
          <li>
            <RouterLink exact-active-class="active" to="/profile"
              ><i class="fas fa-user"></i> Мой профиль</RouterLink
            >
          </li>
          <li>
            <RouterLink v-if="token" exact-active-class="active" to="/create-post"
              ><i class="fas fa-plus-circle"></i> Создать пост</RouterLink
            >
          </li>
        </ul>
        <div class="user-actions" v-if="!token">
          <RouterLink exact-active-class="active" to="login" class="btn btn-outline"
            ><i class="fas fa-sign-in-alt"></i> Войти</RouterLink
          >
          <RouterLink exact-active-class="active" to="/register" class="btn"
            ><i class="fas fa-user-plus"></i> Регистрация</RouterLink
          >
        </div>
      </nav>
    </div>
  </header>
</template>
