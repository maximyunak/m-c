<script setup></script>

<template>
  <div id="home-page" class="page">
    <div class="hero">
      <h1>Поделитесь своими мыслями с миром</h1>
      <p>
        Присоединяйтесь к сообществу авторов и читателей. Находите вдохновение, делитесь идеями и
        открывайте новые горизонты.
      </p>
      <a href="#" class="btn btn-secondary"><i class="fas fa-pen-fancy"></i> Начать писать</a>
    </div>

    <div class="search-container">
      <i class="fas fa-search search-icon"></i>
      <input type="text" class="search-input" placeholder="Поиск по заголовку..." />
    </div>

    <div class="posts-grid">
      <!-- Пример публикации 1 -->
      <div class="post-card">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Изображение публикации"
          class="post-image"
        />
        <div class="post-content">
          <h3 class="post-title">Искусство минимализма в веб-дизайне</h3>
          <p class="post-text">
            Минимализм продолжает доминировать в современных тенденциях веб-дизайна. В этой статье
            мы рассмотрим ключевые принципы и лучшие практики...
          </p>
          <div class="post-meta">
            <span class="post-date"><i class="far fa-calendar"></i> 15 мая 2023</span>
            <span class="post-likes"><i class="fas fa-heart"></i> 24</span>
          </div>
          <div class="post-actions">
            <button class="like-btn"><i class="far fa-heart"></i> Лайк</button>
            <a href="#" class="author-btn"> <i class="fas fa-user-edit"></i> Автор </a>
          </div>
        </div>
      </div>

      <!-- Пример публикации 2 -->
      <div class="post-card">
        <div class="post-content">
          <h3 class="post-title">Путешествие как способ самопознания</h3>
          <p class="post-text">
            Как изменилось наше восприятие путешествий после пандемии? Личный опыт и размышления о
            том, что значит быть путешественником в современном мире...
          </p>
          <div class="post-meta">
            <span class="post-date"><i class="far fa-calendar"></i> 12 мая 2023</span>
            <span class="post-likes"><i class="fas fa-heart"></i> 15</span>
          </div>
          <div class="post-actions">
            <button class="like-btn liked"><i class="fas fa-heart"></i> Убрать лайк</button>
            <a href="#" class="author-btn"> <i class="fas fa-user-edit"></i> Автор </a>
          </div>
        </div>
      </div>

      <!-- Пример публикации 3 -->
      <div class="post-card">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Изображение публикации"
          class="post-image"
        />
        <div class="post-content">
          <h3 class="post-title">Нейросети в творчестве: друг или враг художника?</h3>
          <p class="post-text">
            С развитием искусственного интеллекта многие творческие профессии оказались под
            вопросом. Но так ли страшны нейросети, как их малюют?
          </p>
          <div class="post-meta">
            <span class="post-date"><i class="far fa-calendar"></i> 10 мая 2023</span>
            <span class="post-likes"><i class="fas fa-heart"></i> 42</span>
          </div>
          <div class="post-actions">
            <button class="like-btn"><i class="far fa-heart"></i> Лайк</button>
            <a href="#" class="author-btn"> <i class="fas fa-user-edit"></i> Автор </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Пагинация -->
    <ul class="pagination">
      <li><a href="#" class="active">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
    </ul>
  </div>
</template>
