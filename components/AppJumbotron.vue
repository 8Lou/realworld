<script setup lang="ts">
import { APP_NAME } from '~/constants';
const title = APP_NAME.toLowerCase();
</script>

<template>
  <div
    class="w-full flex justify-center items-center text-center p-4 overflow-auto text-gray-400 shadow-inner"
  >
    <TheContainer>
      <h1 class="text-6xl font-extrabold text-center pb-4">
        {{ title }}
      </h1>
      <p class="font-thin text-xl pb-4">
        CRM система для управления недвижимостью.
      </p>
    </TheContainer>
  </div>
</template>

<style scoped>
.text-shadow {
}

.jumbotron {
}
</style>
