<script setup>
import { APP_NAME } from '~/constants'
const title = APP_NAME.toLocaleLowerCase();
</script>

<template>
  <NuxtLink href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <!--img src="#" class="h-8" alt="Logo"-->
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ title }}</span>
  </NuxtLink>
  <!--h1 class="font-titillium text-custom-green font-bold text-2xl">
    <NuxtLink href="/">{{ title }}</NuxtLink>
  </h1-->
</template>
