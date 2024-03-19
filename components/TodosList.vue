<script setup lang="ts">
//import { defineProps } from 'vue';
import { Todo } from '~/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  todos: Todo[];
}>();
</script>

<template>
  <div>
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                     Автор
                </th>
                <th scope="col" class="px-6 py-3">
                    Задача
                </th>
                <th scope="col" class="px-6 py-3">
                    Дата создания
                </th>
              <th scope="col" class="px-6 py-3">
                    Дата выполнения
              </th>
              <th scope="col" class="px-6 py-3">
                    Статус
              </th>
              <th scope="col" class="px-6 py-3">
                    Приоритет
              </th>
                <th scope="col" class="px-6 py-3">
                    Действие
                </th>
            </tr>
        </thead>
          <tbody
            v-for="todo in todos"
            :key="todo.id"
            class="border-t border-gray-200 py-6"
            >
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div class="mb-4">
                      <img
                        :data-src="todo.author.image"
                        :src="todo.author.image"
                        alt="изображение профиля автора"
                        class="inline-block align-middle h-8 w-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                        />
                    <div class="inline-block align-middle mr-6 ml-1">
                        <span>{{ todo.author.username }}</span>
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">
                    <h1 class="font-bold text-lg mb-1 text-gray-700">{{ todo.title }}</h1>
                </td>
                <td class="px-6 py-4">
                  <span class="date block text-gray-400 text-xs">{{new Date(todo.createdAt).toDateString()}}</span>
                </td>
              <td class="px-6 py-4">
                <span class="date block text-gray-400 text-xs">{{new Date(todo.endTimedAt).toDateString()}}</span>
              </td>
              <td class="px-6 py-4">
                <span class="date block text-gray-400 text-xs">{{ todo.status }}</span>
              </td>
              <td class="px-6 py-4">
                <span class="date block text-gray-400 text-xs">{{ todo.priority }}</span>
              </td>
                <td class="px-6 py-4">
                  <a
                    :href="`/todos/${todo.id}`"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ><span class="text-xs font-light text-gray-400">Подробнее.{{ todo.id }}</span></a>
                </td>
            </tr>
        </tbody>
    </table>
</div> 
    </div>
  </div>
</template>
