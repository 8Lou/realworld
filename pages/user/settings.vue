<script setup lang="ts">
import { navigateTo } from 'nuxt/app'
import { APP_NAME } from '~/constants'
import { authStore } from '~/stores/auth'

// TODO: use a middleware
const auth = authStore();

if (!auth.isAuthenticated) {
  await navigateTo('/');
}

const onLogoutButtonClick = async () => {
  auth.signOut();
  await navigateTo('/');
};
</script>

<template>
  <div>
    <Head>
      <title>Настройки профиля — {{ APP_NAME }}</title>
    </Head>

    <TheContainer>
      <div class="w-full md:w-1/2 md:mx-auto mt-20">
        <h1 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Настройки профиля</h1>
        <SettingForm class="mb-5" />
        <hr class="mb-5" />
        <button
          class="text-red-600 border-white inline-block text-center no-underline align-middle cursor-pointer p-2 text-base rounded hover:border-red-600 border"
          @click="onLogoutButtonClick"
        >
          Нажмите кнопку для выхода.
        </button>
      </div>
    </TheContainer>
  </div>
</template>
