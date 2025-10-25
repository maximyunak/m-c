<script setup>
import { store } from '@/store/store'
import $fetch from '@/utils/api'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const posts = ref([])

const token = computed(() => store.value)

const route = useRoute()

const search = ref("");

const get = async () => {
  posts.value = await $fetch(`/posts`, 'get', {
    page: route.query.page || 1,
    search: search.value
  })
}

const debounceGet = () => {
  setTimeout(() => {
    get();
  }, 500);
}

const like = async (id, liked_it) => {
  if (liked_it) {
    $fetch(`/posts/${id}/like`, 'delete')
  } else {
    $fetch(`/posts/${id}/like`, 'post')
  }
  get()
}
onMounted(() => get())
watch(
  [() => route.query.page,
  search],
  () => debounceGet(),
)
</script>

<template>
  <div id="home-page" class="page">
    <div class="hero">
      <h1>Поделитесь своими мыслями с миром</h1>
      <p>
        Присоединяйтесь к сообществу авторов и читателей. Находите вдохновение, делитесь идеями и
        открывайте новые горизонты.
      </p>
      <RouterLink
        fsddfto="/create-post"
        :to="`/${token ? 'create-post' : 'login'}`"
        class="btn btn-secondary"
        ><i class="fas fa-pen-fancy"></i>
        {{ token ? 'Начать писать' : 'Войти чтобы начать писать' }}</RouterLink
      >
    </div>

    <div class="search-container">
      <i class="fas fa-search search-icon"></i>
      <input v-model="search" type="text" class="search-input" placeholder="Поиск по заголовку..." />
    </div>

    <div class="posts-grid">
      <!-- Пример публикации 1 -->
      <div class="post-card" v-for="post in posts" :key="post.id">
        <img :src="post?.img" alt="Изображение публикации" class="post-image" />
        <div class="post-content">
          <h3 class="post-title">{{ post?.title }}</h3>
          <p class="post-text">
            {{ post?.description }}
          </p>
          <div class="post-meta">
            <span class="post-date"><i class="far fa-calendar"></i>{{ post?.created_at }}</span>
            <span class="post-likes"><i class="fas fa-heart"></i> {{ post?.count_likes }}</span>
          </div>
          <div class="post-actions">
            <button
              v-if="token"
              class="like-btn"
              :class="{ liked: post.liked_it }"
              @click="like(post?.id, post?.liked_it)"
            >
              <i class="far fa-heart"></i> {{ post?.liked_it ? 'Убрать лайк' : 'Лайк' }}
            </button>
            <RouterLink :to="`/profile/${post?.post_maker_id}`" class="author-btn">
              <i class="fas fa-user-edit"></i> Автор
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Пагинация -->
    <ul class="pagination">
      <li v-for="item in [1, 2, 3, 4]">
        <RouterLink
          :to="`/?page=${item}`"
          :class="{
            active: Number(route.query.page || 1) === item,
          }"
          >{{ item }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>
