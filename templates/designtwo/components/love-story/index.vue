<template>
  <section class="bg-white px-10 py-[100px] text-center text-black">
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-black" />

    <div class="flex h-fit w-fit">
      <div class="mr-8 w-5 rounded-xl bg-zinc-800"></div>
      <div>
        <div
          v-for="(item, key) in props.userInfo.weddingInfo.loveStory"
          :key="key"
          class="mb-8 rounded-lg bg-zinc-800 pb-6 text-white"
        >
          <!-- Triangle icon  -->
          <!-- License: MIT. Made by radix-ui: https://github.com/radix-ui/icons -->
          <svg
            class="absolute ml-[-25px]"
            width="50px"
            height="50px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 4L9 11L4.5 7.5L9 4Z"
              fill="#262626"
              width="50px"
              height="50px"
            />
          </svg>
          <div
            class="absolute ml-[-55px] mt-2 h-fit w-fit rounded-full bg-[#b5a272] p-[6px]"
          >
            <IconCalendarHeart :size="25" color="black" />
          </div>
          <!-- <div
            class="absolute ml-[-55px] mt-1 h-fit w-fit rounded-full bg-zinc-800 p-[6px]"
          >
            <IconCalendarHeart :size="25" color="#b5a272" />
          </div> -->
          <div class="p-2">
            <div class="flex h-[240px] items-center justify-center bg-zinc-800">
              <img
                :src="item.image"
                alt="Love Story #1"
                class="h-fit max-h-full w-fit max-w-full rounded-lg"
              />
            </div>
          </div>
          <div class="p-4 text-left">
            <h5 class="mb-2 text-xl">{{ item.title }}</h5>
            <p class="text-xs">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'
// import { CalendarHeart } from 'lucide-vue-next'
import { IconCalendarHeart } from '@tabler/icons-vue'

defineOptions({
  name: 'SectionLoveStory',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const state = reactive({
  title: 'Love Story',
})
</script>

<style scoped></style>
