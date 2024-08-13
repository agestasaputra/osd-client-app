<template>
  <section class="bg-[#cccbc8] px-10 py-[100px] text-center text-black">
    <h3 class="text-2xl">
      {{ props.userInfo.weddingInfo.liveStreaming.title }}
    </h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-black" />
    <div>
      <!-- <h4 class="my-3 text-3xl font-semibold uppercase">
        {{ props.userInfo.weddingInfo.couples.bride.name }}
      </h4>
      <p class="text-xl">AND</p>
      <h4 class="my-3 text-3xl font-semibold uppercase">
        {{ props.userInfo.weddingInfo.couples.groom.name }}
      </h4> -->
      <div class="mx-auto mt-6 flex w-[80%] flex-col">
        <nuxt-link
          v-for="(item, key) in props.userInfo.weddingInfo.liveStreaming.links"
          class="flex-1"
          :class="
            key === props.userInfo.weddingInfo.liveStreaming.links.length - 1
              ? 'mb-0'
              : 'mb-3'
          "
          :key="key"
          :to="item.url"
          target="_blank"
        >
          <button
            :class="{
              'rounded-full bg-green-600 px-4 py-2 pb-2 text-xs text-white': true,
              'h-[40px] w-full shadow-md shadow-neutral-950/100': true,
            }"
          >
            <p class="mx-auto text-xs">
              {{ item.name }}
            </p>
          </button>
        </nuxt-link>
      </div>
      <p class="mt-12 text-sm">
        {{ props.userInfo.weddingInfo.liveStreaming.desc }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'
defineOptions({
  name: 'SectionLiveStreaming',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})
</script>

<style scoped></style>
