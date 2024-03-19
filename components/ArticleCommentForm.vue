<script setup lang="ts">
import * as zod from 'zod'
//import { defineProps, defineEmits } from 'vue';
import { ref } from '#imports'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { createArticleComment } from '~/lib/api/article'
import { User } from '~/types'

const props = defineProps({
  author: {
    type: Object as () => User,
    required: true,
  },
  articleSlug: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['create:articleComment']);

const isSubmitting = ref(false);

const validationSchema = toTypedSchema(
  zod.object({
    body: zod.string().nonempty('This is required'),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: body } = useField('body');

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;

  try {
    await createArticleComment(
      props.author.token,
      props.articleSlug,
      values.body
    );

    console.log(createArticleComment)

    emit('create:articleComment');
  } catch (error) {
    alert(error);
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <form @submit="onSubmit">
    <fieldset class="w-full p-0 m-0 border-0">
      <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <textarea
            v-model="body"
            name="body"
            placeholder="Write a comment..."
            rows="4"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            :class="{ 'opacity-50 pointer-events-none': isSubmitting }"
          ></textarea>
          <span class="text-red-500">{{ errors.body }}</span>
        </div>
      </div>
        <button :disabled="isSubmitting" type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" :class="{ 'bg-gray-300 cursor-not-allowed': isSubmitting }">
            Опубликовать
        </button>
    </fieldset>
  </form>
</template>
