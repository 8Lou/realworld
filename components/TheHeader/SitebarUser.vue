<script setup lang="ts">
import { useRoute } from '#imports'
import { authStore } from '~/stores/auth'

const auth = authStore();

const route = useRoute();

const menuItems = [
  { name: 'Главная', href: '/', routeName: 'index' },
  { name: 'Новая статья', href: '/editor/new', routeName: 'editor-new' },
  { name: 'Задачи', href: '/todos', routeName: 'todos-list' },
];
</script>
<template>
	<aside class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidenav" id="drawer-navigation" aria-hidden='true'>
		<div class='overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800'>
			<ul class="space-y-2">
				<li v-for="item in menuItems" :key="item.name">
					<NuxtLink :href="item.href" class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" :class="{ 'text-gray-800': route.name === item.routeName }"><span class='ml-3'>{{ item.name }}</span></NuxtLink>
				</li>
			</ul>
		</div>
	</aside>
</template>