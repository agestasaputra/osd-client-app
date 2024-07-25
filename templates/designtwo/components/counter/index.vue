<template>
  <section class="px-10 py-[100px] text-center bg-white text-black">
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="mx-auto mt-3 mb-6 w-[50%] border-t-1 border-black" />
    <div class="text-xs" v-dompurify-html="state.desc"></div>
    <div class="flex my-8">
      <div class="flex-1 border-r-2 border-gray-400">
        <p class="text-3xl">{{ state.countdown.days }}</p>
        <p class="text-xs">Days</p>
      </div>
      <div class="flex-1 border-r-2 border-gray-400">
        <p class="text-3xl">{{ state.countdown.hours }}</p>
        <p class="text-xs">Hours</p>
      </div>
      <div class="flex-1 border-r-2 border-gray-400">
        <p class="text-3xl">{{ state.countdown.minutes }}</p>
        <p class="text-xs">Minutes</p>
      </div>
      <div class="flex-1">
        <p class="text-3xl">{{ state.countdown.seconds }}</p>
        <p class="text-xs">Seconds</p>
      </div>
    </div>
    <button
      class="rounded-full bg-black px-4 py-2 pb-2 text-white shadow-md text-xs"
    >
      {{ state.button }}
    </button>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

interface UserInfo {
  profile: {
    name: string
    email: string
  }
  package: {
    name: string
  }
  weddingInfo: {
    brides: string[]
    date: string
    location: {
      name: string
      address: string
    }
  }
}

const state = reactive({
  title: 'Count The Date',
  desc: `What counts in making a happy marriage is not so much how compatible you are, but how you deal with incompatibility. A great marriage is not when the perfect couple comes together. It is when an imperfect couple learns to enjoy their differences.`,
  countdown: {
    days: 1,
    hours: 10,
    minutes: 10,
    seconds: 10,
  },
  button: 'Save the date',
})
</script>

<style scoped></style>
