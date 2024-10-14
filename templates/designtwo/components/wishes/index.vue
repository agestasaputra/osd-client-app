<template>
  <section class="bg-zinc-900 px-10 py-[100px]">
    <h3 class="text-center text-2xl">
      {{ props.userInfo.weddingInfo.wishes.title }}
    </h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-white" />
    <p class="text-center text-xs">
      {{ props.userInfo.weddingInfo.wishes.desc }}
    </p>

    <!-- Form -->
    <div
      class="mt-6 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
    >
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

    <!-- Comment list -->
    <div
      v-if="props.userInfo.weddingInfo.wishes.comments.datas.length > 0"
      class="mt-6 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
    >
      <div
        :class="[
          'flex rounded-t-lg border-b border-gray-200',
          'bg-gray-50 py-2 text-center text-gray-500 dark:border-gray-700',
          'dark:bg-gray-800 dark:text-gray-400',
        ]"
      >
        <h5 class="text-md w-full font-semibold">
          {{ props.userInfo.weddingInfo.wishes.comments.total }}
          {{
            `comment${
              props.userInfo.weddingInfo.wishes.comments.total > 1 ? 's' : ''
            }`
          }}
        </h5>
      </div>

      <div class="max-h-[35vw] overflow-auto px-2 py-4">
        <div
          v-for="(item, key) in props.userInfo.weddingInfo.wishes.comments
            .datas"
          :key="key"
          class="flex items-start gap-2.5 p-2"
        >
          <img
            class="mt-1 h-8 w-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Jese image"
          />
          <div
            class="leading-1.5 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-2 dark:bg-gray-700"
          >
            <div
              class="flex items-center justify-between space-x-2 rtl:space-x-reverse"
            >
              <span class="text-xs font-semibold text-gray-900 dark:text-white">
                {{ item.name }}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{
                  new Date(item.createdAt).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                }}
              </span>
            </div>
            <span
              class="py-2.5 text-sm font-normal text-gray-900 dark:text-white"
              v-dompurify-html="item.comment"
            ></span>
            <p class="text-right text-xs text-gray-500 dark:text-gray-400">
              {{
                new Date(item.createdAt).toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              }}
            </p>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            :class="[
              'mt-2 rounded-lg bg-green-700 px-3 py-2 text-xs font-medium text-white',
              'hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300',
              'dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
            ]"
          >
            {{ props.userInfo.weddingInfo.wishes.comments.button.label }}
          </button>
        </div>
      </div>
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
