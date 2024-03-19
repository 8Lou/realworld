<script setup lang="ts">
import { authStore } from '~/stores/auth'
const auth = authStore();
</script>

<template>
  <header class="antialiased bg-gray-50 dark:bg-gray-900">
    <nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div class="flex flex-wrap justify-between items-center mr-4 ml-4">
        <div class='flex justify-start items-center'>
          <TheHeaderAppLogo />
          <TheHeaderSearch v-if="auth.isAuthenticated" />
        </div>
        <div class="flex items-center lg:order-2">
          <div class="menu">
            <TheHeaderMemberMenu v-if="auth.isAuthenticated" />
            <TheHeaderGuestMenu v-else />
          </div>
        </div>
      </div>
    </nav>
  </header>
  <TheHeaderSitebarUser />
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
