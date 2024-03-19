<script setup>
import { APP_NAME } from '~/constants'
const title = APP_NAME.toLocaleLowerCase();
</script>
<template>
  <footer class="justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10">
    <div class="container mx-auto px-4">
      <hr class="my-8 border-gray-200 dark:border-gray-700 lg:my-12">
      <span
        class="block font-normal text-center text-gray-600 dark:text-gray-400"
      >
        © {{ title }} 2024. Новое интерактивное приложение
        <a href="#" class="text-custom-green no-underline">
          we.property.ru</a>.
      </span>
    </div>
  </footer>
</template>

<style scoped>
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
