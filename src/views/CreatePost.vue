<template>
  <div class="post-form">
    <h2 class="form-title">Создание публикации</h2>
    <form id="create-post-form">
      <div class="form-group">
        <label for="post-title">Заголовок</label>
        <input type="text" id="post-title" class="form-control" placeholder="Введите заголовок" />
        <div class="error-message"><i class="fas fa-exclamation-circle"></i> Ошибка валидации</div>
      </div>
      <div class="form-group">
        <label for="post-text">Текст публикации</label>
        <textarea
          id="post-text"
          class="form-control"
          rows="5"
          placeholder="Введите текст публикации"
        ></textarea>
        <div class="error-message"><i class="fas fa-exclamation-circle"></i> Ошибка валидации</div>
      </div>
      <div class="form-group">
        <label for="post-image">Изображение (опционально)</label>
        <div class="file-upload">
          <input type="file" id="post-image" accept="image/*" />
          <label for="post-image" class="file-upload-label">
            <i class="fas fa-cloud-upload-alt"></i>
            <span>Перетащите изображение сюда или нажмите для выбора</span>
          </label>
        </div>
        <div class="error-message"><i class="fas fa-exclamation-circle"></i> Ошибка валидации</div>
      </div>
      <div class="form-group text-right">
        <button type="button" class="btn btn-outline"><i class="fas fa-times"></i> Отмена</button>
        <button type="submit" class="btn"><i class="fas fa-paper-plane"></i> Опубликовать</button>
      </div>
    </form>
  </div>
</template>
