<template>
  <div class="container-bg">
    <div class="container-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container-bg {
  position: relative; /* Установка позиции */
  margin: 1.5rem;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgba(105, 159, 232, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}

.container-content {
  position: relative;
  z-index: 2;
  /* background-color: rgba(
    105,
    159,
    232,
    0.1
  ); */
  border-radius: 8px;
}

@media (min-width: 544px) {
  .container {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 940px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
