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
  background-color: rgba(105, 159, 232, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(180, 205, 238, 0.192);
  border-radius: 10px;
  box-shadow: 6px 6px 8px rgba(0.1, 0.1, 0.1, 0.1);
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
  padding: 25px;
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
