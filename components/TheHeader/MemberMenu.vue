<script setup lang="ts">
import { useRoute } from '#imports'
import { authStore } from '~/stores/auth'
const auth = authStore();

const route = useRoute();

const menuItems = [
  { name: 'Настройки', href: '/user/settings', routeName: 'user-settings' },
  {
    name: auth.currentUser?.username,
    href: '/@' + auth.currentUser?.username,
    routeName: '@' + auth.currentUser?.username,
  },
];
</script>

<template>
  <ul class="list-none">
    <li
      v-for="item in menuItems"
      :key="item.name"
      class="float-left text-sm ml-4"
    >
      <NuxtLink
        :href="item.href"
        class="block py-1 px-2 text-gray-400 hover:text-gray-500"
        :class="{ 'text-gray-600': route.name === item.routeName }"
      >
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
