<template>
  <section class="bg-zinc-900 px-10 py-[100px]">
    <h3 class="text-center text-2xl">
      {{ props.userInfo.weddingInfo.wishes.title }}
    </h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-white" />
    <!-- <p class="mb-1 text-sm font-semibold">{{ state.desc.title }}</p> -->
    <p class="text-center text-xs">
      {{ props.userInfo.weddingInfo.wishes.desc }}
    </p>

    <div
      class="mt-6 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
    >
      <div
        :class="[
          'flex rounded-t-lg border-b border-gray-200',
          'bg-gray-50 py-2 text-center text-gray-500 dark:border-gray-700',
          'dark:bg-gray-800 dark:text-gray-400',
        ]"
      >
        <h5 class="text-md w-full font-semibold">0 comments</h5>
      </div>

      <form
        v-if="forms.fields.length > 0 && forms.button.length > 0"
        class="mx-auto max-w-sm p-5"
        @submit.prevent="handleSubmit"
      >
        <template v-for="(field, index) in forms.fields" :key="index">
          <div class="mb-5">
            <label
              :for="field.name"
              class="mb-2 inline-block text-sm font-medium text-gray-900 dark:text-white"
              >{{ field.title }} </label
            ><span v-if="field.required" class="text-red-600">&nbsp;*</span>
            <input
              v-if="field.type !== 'textarea'"
              v-model="field.value"
              :id="field.name"
              :type="field.type"
              :class="[
                'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm',
                'focus:border-blue-500 focus:ring-blue-500',
                'dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light',
                'dark:focus:border-blue-500 dark:focus:ring-blue-500',
              ]"
              :placeholder="field.placeholder"
              :required="field.required"
            />
            <textarea
              v-else
              v-model="field.value"
              :id="field.name"
              :rows="field.rows"
              :cols="field.cols"
              :placeholder="field.placeholder"
              :class="[
                'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm',
                'focus:border-blue-500 focus:ring-blue-500',
                'dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light',
                'dark:focus:border-blue-500 dark:focus:ring-blue-500',
              ]"
              :required="field.required"
            />
          </div>
        </template>
        <template v-for="(item, index) in forms.button" :key="index">
          <button
            :type="handleButtonType(item.type)"
            :class="[
              'w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white',
              'hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300',
              'dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
            ]"
          >
            {{ item.label }}
          </button>
        </template>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo, Forms } from '~/shared/interfaces.ts'

defineOptions({
  name: 'SectionWishes',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const forms = ref<Forms>({
  fields: [],
  button: [],
})

watch(
  () => props.userInfo.weddingInfo.wishes.comments.forms,
  (newForms) => {
    if (newForms.fields.length > 0 && newForms.button.length > 0) {
      forms.value = {
        fields: newForms.fields.map((field) => ({
          value: '',
          ...field,
        })),
        button: [...newForms.button],
      }
    }
  },
  {
    immediate: true,
    deep: true,
  },
)

function handleSubmit() {
  try {
    const payload = forms.value.fields.map((field) => ({
      [field.name]: field.value,
    }))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newPayload = payload.reduce((acc, curr) => {
      const [key, value] = Object.entries(curr)[0]
      acc[key] = value
      return acc
    }, {})
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[handleSubmit] error:', error)
  }
}

function handleButtonType(type: string) {
  return type as 'button' | 'submit' | 'reset'
}
</script>

<style scoped></style>
