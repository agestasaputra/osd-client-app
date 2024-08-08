<template>
  <section class="bg-zinc-900 px-10 py-[100px] text-center">
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%]" />
    <div
      :class="{
        'min-h-[400px] rounded-b-[80px] rounded-t-[600px] border-[14px] border-double': true,
        // 'border-stone-600 bg-[#e5c064] text-xs text-black': true,
        'border-stone-600 bg-[#b5a272] text-xs text-black': true,
        // 'border-stone-600 bg-white text-xs text-black': true,
        'px-6 pb-8 pt-12': true,
      }"
    >
      <!-- AKAD NIKAH -->
      <div>
        <h4 class="text-2xl">Akad Nikah</h4>
        <div class="my-6 flex h-[100px]">
          <div class="flex h-full w-[33.3%] flex-col justify-center px-2">
            <p class="text-2xl font-semibold uppercase">
              {{ getMonth(props.userInfo.weddingInfo.akad.date).shortMonth }}
            </p>
          </div>
          <div
            :class="{
              'flex h-full w-[33.3%] flex-col justify-center': true,
              'border-l-2 border-r-2 border-black px-2 text-center': true,
            }"
          >
            <p class="text-md">
              {{ getDayOfWeek(props.userInfo.weddingInfo.akad.date) }}
            </p>
            <p class="text-4xl font-semibold">
              {{ new Date(props.userInfo.weddingInfo.akad.date).getDate() }}
            </p>
            <p class="text-md">
              {{ props.userInfo.weddingInfo.akad.time }} WIB
            </p>
          </div>
          <div class="flex h-full w-[33.3%] flex-col justify-center px-2">
            <p class="text-2xl font-semibold">
              {{ new Date(props.userInfo.weddingInfo.akad.date).getFullYear() }}
            </p>
          </div>
        </div>
        <div class="text-center">
          <h5 class="text-lg font-semibold">Lokasi</h5>
          <p class="font-semibold">
            {{ props.userInfo.weddingInfo.akad.location.name }}
          </p>
          <p
            v-dompurify-html="props.userInfo.weddingInfo.akad.location.address"
          ></p>
          <nuxt-link
            :to="props.userInfo.weddingInfo.akad.location.maps"
            target="_blank"
            class="mt-2"
          >
            <button
              class="mt-3 h-[30px] rounded-md bg-zinc-900 px-3 pb-1 text-xs text-white shadow-md"
            >
              Maps
            </button>
          </nuxt-link>
        </div>
      </div>
      <hr class="border-t-1 mx-auto my-6 w-[80%] border-black" />
      <!-- RESEPSI -->
      <div>
        <h4 class="text-2xl">Reception</h4>
        <div class="my-6 flex h-[100px]">
          <div class="flex h-full w-[33.3%] flex-col justify-center px-2">
            <p class="text-2xl font-semibold uppercase">
              {{
                getMonth(props.userInfo.weddingInfo.reception.date).shortMonth
              }}
            </p>
          </div>
          <div
            :class="{
              'flex h-full w-[33.3%] flex-col justify-center': true,
              'border-l-2 border-r-2 border-black px-2 text-center': true,
            }"
          >
            <p class="text-md">
              {{ getDayOfWeek(props.userInfo.weddingInfo.reception.date) }}
            </p>
            <p class="text-4xl font-semibold">
              {{
                new Date(props.userInfo.weddingInfo.reception.date).getDate()
              }}
            </p>
            <p class="text-md">
              {{ props.userInfo.weddingInfo.akad.time }} WIB
            </p>
          </div>
          <div class="flex h-full w-[33.3%] flex-col justify-center px-2">
            <p class="text-2xl font-semibold">
              {{ new Date(props.userInfo.weddingInfo.akad.date).getFullYear() }}
            </p>
          </div>
        </div>
        <div class="text-center">
          <h5 class="text-lg font-semibold">Lokasi</h5>
          <p class="font-semibold">
            {{ props.userInfo.weddingInfo.akad.location.name }}
          </p>
          <p
            v-dompurify-html="
              props.userInfo.weddingInfo.reception.location.address
            "
          ></p>
          <nuxt-link
            :to="props.userInfo.weddingInfo.reception.location.maps"
            target="_blank"
            class="mt-2"
          >
            <button
              class="mt-3 h-[30px] rounded-md bg-zinc-900 px-3 pb-1 text-xs text-white shadow-md"
            >
              Maps
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getDayOfWeek, getMonth } from '~/utils'
import type { UserInfo } from '~/shared/interfaces.ts'
defineOptions({
  name: 'SectionEventDetail',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const state = reactive({
  title: 'Event Detail',
})
</script>

<style scoped></style>
