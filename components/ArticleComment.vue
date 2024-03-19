<script setup lang="ts">
//import { defineProps } from 'vue';
import { ArticleComment } from '~/types'
import { formatLongDate } from '~/utils/dateUtils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  articleComment: ArticleComment;
}>();
</script>

<template>
  <div class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">{{ articleComment.body }}</p>
    <div class="flex items-center">
      <UserAvatar :image="articleComment.author.image" class="mr-2 w-6 h-6 rounded-full" />
      <div class="comment-meta text-xs">
        <ul class="list-inside list-disc inline">
          <li class="text-sm text-gray-700 dark:text-gray-500">{{ articleComment.author.username }}</li>
          <li class="text-sm text-gray-600 dark:text-gray-400">
            {{ formatLongDate(articleComment.createdAt) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>