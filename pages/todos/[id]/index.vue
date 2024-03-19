<script setup lang="ts">
import { ref, useFetch, useRoute, watchEffect } from '#imports'
import { API_BASE_URL } from '~/constants'
import {	
  GetTodoCommentsResponse,
  GetTodoResponse
} from '~/lib/api/todo'
import { authStore } from '~/stores/auth'

const route = useRoute();
const id = route.params.id as string;
const auth = authStore();

const commentsData = ref<GetTodoCommentsResponse | null>(null);

const fetchComments = () => {
  const { data } = useFetch<GetArticleCommentsResponse>(
    new URL(`${API_BASE_URL}/todos/${id}/comments`).toString(),
    {
      method: 'GET',
    }
  );

  watchEffect(() => {
    commentsData.value = data.value;
  });
};

fetchComments();

const { data: todoData, pending: todoPending } =
  useFetch<GetTodoResponse>(
    new URL(`${API_BASE_URL}/todos/${id}`).toString(),
    {
      method: 'GET',
    }
  );

const handleCommentCreate = () => {
  fetchComments();
};
</script>

<template>
  <div>
    <Head>
      <title>
        {{
          todoData && todoData.todo
            ? todoData.todo.title
            : 'Loading the todo...'
        }}
      </title>
    </Head>

    <TodoJumbotron
      v-if="todoData && todoData.todo"
      :todo="todoData.todo"
    />

    <TheContainer>
      <section class="bg-white dark:bg-gray-900">
        <p v-if="todoPending" class="mb-8">Loading the todo...</p>
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16" v-else-if="todoData && todoData.todo">
          <p class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">

            <a :href="`/@${encodeURIComponent(todoData.todo.author.username)}`">
              <img
                :data-src="todoData.todo.author.image"
                :src="todoData.todo.author.image"
                alt="изображение профиля автора"
                class="inline-block align-middle h-8 w-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                />
          @{{ todoData.todo.author.username }}
            </a>
          </p>
          <h2 class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">{{ todoData.todo.title }}</h2>
          <dl>
            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Описание</dt>
            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ todoData.todo.body }}</dd>
          </dl>
          <dl class="flex items-center space-x-6">
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Дата создания</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{new Date(todoData.todo.createdAt).toDateString()}}</dd>
            </div>
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Дата обновления</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{new Date(todoData.todo.updatedAt).toDateString()}}</dd>
            </div>
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Начать с :</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{new Date(todoData.todo.startTimedAt).toDateString()}}</dd>
            </div>
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Завершить до :</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{new Date(todoData.todo.endTimedAt).toDateString()}}</dd>
            </div>
          </dl>
          <dl class="flex items-center space-x-6">
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Задача выполнена</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ todoData.todo.is_complete }}</dd>
            </div>
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Задача удалена</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ todoData.todo.is_deleted }}</dd>
            </div>
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Задача активная</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ todoData.todo.is_active }}</dd>
            </div>
          </dl>
          <dl class="flex items-center space-x-6">
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Статус</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ todoData.todo.status }}</dd>
            </div>
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Приоритет</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ todoData.todo.priority }}</dd>
            </div>
          </dl>

          <ul v-if="todoData.todo.tagList" class="mb-12 space-x-1">
            <li
              v-for="tag in todoData.todo.tagList"
              :key="tag"
              class="inline"
              >
              <AppTag :name="tag" />
            </li>
          </ul>
          <div class="flex items-center space-x-4">
            <button type="button" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
              Изменить
            </button>   
            <button type="button" class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
              <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
              Удалить
            </button> 
          </div>

          <hr class="my-4 border-t border-gray-200" />

          <div
            v-if="
          todoData &&
          todoData.todo &&
          auth.isAuthenticated &&
          auth.currentUser
        "
            class="comments w-full md:w-2/3 md:mx-auto mb-12 mt-12"
            >
            <TodosCommentForm
              :author="auth.currentUser"
              :todo-id="todoData.todo.id"
              @create:todo-comment="handleCommentCreate"
              />
          </div>
          <div
            v-if="commentsData && commentsData.comments.length > 0"
            class="comments w-full md:w-2/3 md:mx-auto"
            >
            <ArticleComment
              v-for="comment in commentsData.comments"
              :key="comment.id"
              class="comment mb-4"
              :article-comment="comment"
              />
          </div>
          <p v-else>There are no comments yet...</p>
        </div>
      </section>
    </TheContainer>
  </div>
</template>
