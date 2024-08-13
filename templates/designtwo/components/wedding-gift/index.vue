<template>
  <section
    v-if="props.userInfo.weddingInfo.banks.length > 0"
    class="bg-[#cccbc8] px-10 py-[100px] text-center text-black"
  >
    <!-- LIVE STREAMING -->
    <div class="mb-16">
      <h3 class="text-2xl">
        {{ props.userInfo.weddingInfo.liveStreaming.title }}
      </h3>
      <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-black" />
      <div>
        <p class="mb-6 text-sm">
          {{ props.userInfo.weddingInfo.liveStreaming.desc }}
        </p>
        <!-- <h4 class="my-3 text-3xl font-semibold uppercase">
        {{ props.userInfo.weddingInfo.couples.bride.name }}
      </h4>
      <p class="text-xl">AND</p>
      <h4 class="my-3 text-3xl font-semibold uppercase">
        {{ props.userInfo.weddingInfo.couples.groom.name }}
      </h4> -->
        <div class="mx-auto mt-6 flex w-[80%] flex-col">
          <nuxt-link
            v-for="(item, key) in props.userInfo.weddingInfo.liveStreaming
              .links"
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
      </div>
    </div>

    <!-- WEDDING GIFT -->
    <div>
      <h3 class="text-2xl">{{ state.title }}</h3>
      <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-black" />
      <p class="text-xs">{{ state.desc }}</p>

      <nuxt-link>
        <button
          :class="{
            'rounded-full bg-green-600 px-4 py-2 pb-2 text-xs': true,
            'mx-auto mt-4 w-[80%] text-white shadow-md shadow-neutral-950/100': true,
          }"
          @click="giftButtonClicked"
        >
          {{ state.button.name }}
        </button>
      </nuxt-link>

      <div class="mt-16" v-if="state.isShowBankCard">
        <div
          v-for="(item, key) in props.userInfo.weddingInfo.banks"
          :key="key"
          class="mb-8 rounded-xl px-4 pb-3 pt-2 shadow-md shadow-neutral-950/100"
          :class="{
            'bg-zinc-900': key % 2 === 0,
            'bg-[#ba913b]': key % 2 !== 0,
          }"
        >
          <div class="text-right">
            <img
              class="inline-block"
              :src="dynamicBankIcon(item.bank)"
              width="70px"
            />
          </div>
          <div class="h-[120px] text-left">
            <img class="inline-block" src="assets/icon/chip.png" width="35px" />
            <p class="text-md text-white">{{ item.number }}</p>
            <p class="text-sm capitalize text-white">
              {{ item.name }}
            </p>
          </div>
          <div class="text-right">
            <img
              class="inline-block"
              src="assets/icon/mastercard.png"
              width="50px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'
defineOptions({
  name: 'SectionWeddingGift',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const state = reactive({
  title: 'Wedding Gift',
  desc: `Doa restu anda merupakan karunia yang Sngat berarti bagi kami, dan 
  yang ingin memberikan tanda kasih untuk kami, dapat melalui:`,
  button: {
    icon: '',
    name: 'Klik disini',
    link: 'https://www.google.com',
  },
  isShowBankCard: false,
})

function dynamicBankIcon(bank: string) {
  return new URL(`/assets/icon/${bank.toLowerCase()}.png`, import.meta.url).href
}

function giftButtonClicked() {
  state.isShowBankCard = !state.isShowBankCard
}
</script>

<style scoped></style>
