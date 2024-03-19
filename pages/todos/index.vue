<script setup lang="ts">
// Импорт необходимых функций и компонентов из библиотек
// Импорт константы API_BASE_URL из фаimport { computed, useFetch, useRoute } from '#imports'
import { API_BASE_URL } from '~/constants'
// Импорт запроса статей из библиотек
import { GetTodosResponse } from '~/lib/api/todo'
// Импорт запроса тегов из библиотек
import { GetTagsResponse } from '~/lib/api/tag'

// Использование маршрута из Vue Router
const route = useRoute();

// Формирование URL для запроса статей
const apiUrl = computed(() => {
  const url = new URL(`${API_BASE_URL}/todos`);
  url.searchParams.append('limit', '10');
  if (route.query.offset) {
    url.searchParams.append('offset', route.query.offset as string);
  }
  return url.toString();
});

// Запрос статей и с использованием useFetch
const { data: todoData, pending: todoPending } =
  useFetch<GetTodosResponse>(apiUrl, {
    method: 'GET',
  });

// Запрос и тегов с использованием useFetch
const { data: tagData, pending: tagPending } = useFetch<GetTagsResponse>(
  new URL(`${API_BASE_URL}/tags`).toString(),
  {
    method: 'GET',
  }
);


// Добавляем лог в консоль для проверки данных в todoData
console.log('todoData:', todoData.value);

</script>

<template>
  <!-- Главный контейнер страницы -->
  <div class='p-4 md:ml-64 h-auto pt-20'>
    <!-- Заголовок страницы -->
    <Head>
      <title>Задачи — {{ APP_NAME }}</title>
    </Head>

    <!-- Контейнер для основного контента -->
    <TheContainer>
      <!-- Разделение контейнера на две колонки -->
      <div class="flex md:space-x-4">
        <!-- Левая колонка -->
        <div class="md:w-3/4 mr-4">

          <!-- Отображение состояния загрузки статей -->
          <p v-if="todoPending">Loading todos...</p>
          <!-- Отображение статей или сообщения о их отсутствии -->
          <div v-else>
            <!-- Проверка наличия статей -->
            <p
              v-if="
                todoData &&
                todoData.todos &&
                todoData.todos.length === 0
              "
            >
              Здесь нет статей... пока.
            </p>
            <!-- Отображение списка статей и пагинации -->
            <div v-else-if="todoData && todoData.todos">
              <TodosList :todos="todoData.todos" />
              <CustomPagination
                :base-url="`/`"
                :entity-count="todoData.todosCount"
              />
            </div>
          </div>
        </div>
        
        <!-- Правая колонка (сайдбар) -->
        <div class="md:w-1/4 mt-2">
          <!-- Блок с популярными тегами -->
          <div class="sidebar p-3 rounded bg-gray-800">
            <p class="mb-2 text-sm font-medium text-gray-400">Популярные теги</p>
            
          </div>
        </div>
      </div>
    </TheContainer>
  </div>
</template>
