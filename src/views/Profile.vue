<script setup>
import $fetch from '@/utils/api'
import { onMounted, ref, watch, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const user = ref()
const likes = ref()
const route = useRoute()

const get = async () => {
  const currentPage = route.query.page
  const data = await $fetch(`/user/${route.params.id}`, 'get', {
    page: currentPage || 1,
  })
  user.value = data
  if (data.posts) {
    likes.value = data.posts.reduce((acc, value) => {
      return acc + value.count_likes
    }, 0)
  }
}

watch(
  () => route.query.page,
  () => get(),
)

const like = async (id, liked_it) => {
  if (liked_it) {
    $fetch(`/posts/${id}/like`, 'delete')
  } else {
    $fetch(`/posts/${id}/like`, 'post')
  }
  get()
}

const deletePost = async (id) => {
  await $fetch(`/posts/${id}`, 'delete')
  get()
}

onMounted(() => get())
</script>

<template>
  <div class="profile-header">
    <img
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
      alt="Аватар пользователя"
      class="profile-avatar"
    />
    <h2 class="profile-username">{{ user?.nickname }}</h2>
    <div class="profile-stats">
      <div class="stat">
        <div class="stat-value">{{ user?.posts.length }}</div>
        <div class="stat-label">Публикации</div>
      </div>
      <div class="stat">
        <div class="stat-value">{{ likes }}</div>
        <div class="stat-label">Лайки</div>
      </div>
      <div class="stat">
        <div class="stat-value">356</div>
        <div class="stat-label">Подписчики</div>
      </div>
    </div>
  </div>
  <div class="posts-grid">
    <!-- Пример публикации пользователя 1 -->
    <div class="post-card" v-for="post in user?.posts">
      <img :src="post.img" alt="Изображение публикации" class="post-image" />
      <div class="post-content">
        <h3 class="post-title">{{ post?.title }}</h3>
        <p class="post-text">
          {{ post?.description }}
        </p>
        <div class="post-meta">
          <span class="post-date"><i class="far fa-calendar"></i> {{ post?.created_at }}</span>
          <span class="post-likes"><i class="fas fa-heart"></i> {{ post?.count_likes }}</span>
        </div>
        <div class="post-actions">
          <button
            class="like-btn"
            :class="{ liked: post.liked_it }"
            @click="like(post?.id, post?.liked_it)"
          >
            <i class="far fa-heart"></i> {{ post?.liked_it ? 'Убрать лайк' : 'Лайк' }}
          </button>
          <RouterLink
            :to="`/edit-post/${post?.id}?title=${post?.title}&description=${post?.description}`"
            class="btn btn-outline"
            ><i class="fas fa-edit"></i> Редактировать</RouterLink
          >
          <button @click="deletePost(post?.id)" class="btn btn-danger">
            <i class="fas fa-trash"></i> Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
  <ul class="pagination">
    <li v-for="item in [1, 2, 3, 4]">
      <RouterLink
        :to="`/profile/${route.params.id}?page=${item}`"
        :class="{
          active: Number(route.query.page || 1) === item,
        }"
        >{{ item }}</RouterLink
      >
    </li>
  </ul>
</template>
