<script setup lang="ts">
import { APP_NAME } from "~/constants";
const title = APP_NAME.toLowerCase();
</script>

<template>
  <div
    class="w-full flex justify-center items-center text-center p-4 overflow-auto text-gray-400 shadow-inner"
  >
    <TheContainer>
      <h1 class="text-6xl font-extrabold text-center pb-4 text-shadow">
        {{ title }}
      </h1>
      <p class="font-thin text-xl pb-4 text-shadow">
        CRM система для управления недвижимостью.
      </p>
    </TheContainer>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px 10px rgba(208, 105, 120, 0.9);
}

.jumbotron {
}

h1 {
  color: #7fbfed;
}
p {
  color: #7fbfed;
}
</style>
