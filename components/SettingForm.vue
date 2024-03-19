<script setup lang="ts">
import { navigateTo, ref } from '#imports'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import * as zod from 'zod'
import { updateUser } from '~/lib/api/user'
import { authStore } from '~/stores/auth'

const auth = authStore();

const isSubmitting = ref(false);

const validationSchema = toTypedSchema(
  zod.object({
    image: zod.string().optional(),
    username: zod
      .string()
      .nonempty('This is required')
      .min(4, { message: 'Too short' }),
    bio: zod.string().optional(),
    email: zod
      .string()
      .nonempty('This is required')
      .email({ message: 'Must be a valid email' }),
    password: zod.string().optional(),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: image } = useField('image', undefined, {
  initialValue: auth.currentUser?.image,
});
const { value: username } = useField('username', undefined, {
  initialValue: auth.currentUser?.username,
});
const { value: bio } = useField('bio', undefined, {
  initialValue: auth.currentUser?.bio,
});
const { value: email } = useField('email', undefined, {
  initialValue: auth.currentUser?.email,
});
const { value: password } = useField('password');

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;

  try {
    const { user } = await updateUser(auth.jwtToken || '', { user: values });
    auth.currentUser = user;

    // TODO: redirect to `/@{username}`
    await navigateTo('/');
  } catch (error) {
    alert(error);
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <form class="space-y-4" @submit.prevent="onSubmit">
    <fieldset :disabled="isSubmitting" class="flex flex-col space-y-2">
      <input
        v-model="image"
        name="image"
        type="url"
        placeholder="URL of profile picture"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
      <span class="text-red-500">{{ errors.image }}</span>
    </fieldset>
    <fieldset :disabled="isSubmitting" class="flex flex-col space-y-2">
      <textarea
        v-model="bio"
        name="bio"
        placeholder="Short bio about you"
        rows="8"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-y"
      />
      <span class="text-red-500">{{ errors.bio }}</span>
    </fieldset>
    <fieldset :disabled="isSubmitting" class="flex flex-col space-y-2">
      <input
        v-model="username"
        name="username"
        type="text"
        placeholder="Username"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
      <span class="text-red-500">{{ errors.username }}</span>
    </fieldset>
    <fieldset :disabled="isSubmitting" class="flex flex-col space-y-2">
      <input
        v-model="email"
        name="email"
        type="email"
        placeholder="Email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
      <span class="text-red-500">{{ errors.email }}</span>
    </fieldset>
    <fieldset :disabled="isSubmitting" class="flex flex-col space-y-2">
      <input
        v-model="password"
        name="password"
        type="password"
        placeholder="New Password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      />
      <span class="text-red-500">{{ errors.password }}</span>
    </fieldset>
    <div class="flex justify-end">
      <button
        :disabled="isSubmitting"
        class="float-right px-6 py-3 text-base text-white bg-custom-green border border-custom-green rounded-md hover:bg-green-600"
        :class="{ 'bg-gray-300 cursor-not-allowed': isSubmitting }"
      >
        Update Settings
      </button>
    </div>
  </form>
</template>

<style scoped>
.bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 {
  @apply block w-full py-3 px-4 text-base leading-normal bg-white text-gray-700 border border-gray-300 rounded;
}

fieldset:disabled {
  @apply opacity-50 pointer-events-none;
}
</style>
