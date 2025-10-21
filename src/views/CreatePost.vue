<script setup>
import $fetch from '@/utils/api'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const postId = ref(route.params.id || null)

const router = useRouter()
const goBack = () => {
  router.back()
}

const submit = async (event) => {
  if (postId.value !== null) {
    const form = event.target
    const title = form.title.value
    const description = form.description.value

    const data = {
      title,
      description,
    }

    const res = await fetch(`https://gsuppriigehp.buymysite.ru/api-of/posts/${postId.value}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } else {
    const data = new FormData(event.target)
    for (const [key, value] of data.entries()) {
      console.log(key, value)
    }
    const res = await $fetch('/posts', 'post', new FormData(event.target))
  }
  router.back()
}

onMounted(() => {
  const form = document.getElementById('create-post-form')

  form.title.value = route.query.title ?? ''
  form.description.value = route.query.description ?? ''
})
</script>

<template>
  <div class="post-form">
    <h2 class="form-title">Создание публикации</h2>
    <form id="create-post-form" @submit.prevent="submit">
      <div class="form-group">
        <label for="post-title">Заголовок</label>
        <input
          name="title"
          type="text"
          id="post-title"
          class="form-control"
          placeholder="Введите заголовок"
        />
        <!-- <div class="error-message"><i class="fas fa-exclamation-circle"></i> Ошибка валидации</div> -->
      </div>
      <div class="form-group">
        <label for="post-text">Текст публикации</label>
        <textarea
          name="description"
          id="post-text"
          class="form-control"
          rows="5"
          placeholder="Введите текст публикации"
        ></textarea>
        <!-- <div class="error-message"><i class="fas fa-exclamation-circle"></i> Ошибка валидации</div> -->
      </div>
      <div class="form-group">
        <label for="post-image">Изображение (опционально)</label>
        <div class="file-upload">
          <input name="img" type="file" id="post-image" accept="image/*" />
          <label for="post-image" class="file-upload-label">
            <i class="fas fa-cloud-upload-alt"></i>
            <span>Перетащите изображение сюда или нажмите для выбора</span>
          </label>
        </div>
        <!-- <div class="error-message"><i class="fas fa-exclamation-circle"></i> Ошибка валидации</div> -->
      </div>
      <div class="form-group text-right">
        <button type="button" class="btn btn-outline" @click="goBack">
          <i class="fas fa-times"></i> Отмена
        </button>
        <button type="submit" class="btn">
          <i class="fas fa-paper-plane"></i> {{ postId ? 'Редактировать' : 'Опубликовать' }}
        </button>
      </div>
    </form>
  </div>
</template>
