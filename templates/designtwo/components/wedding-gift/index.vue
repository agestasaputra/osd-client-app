<template>
  <section
    v-if="props.userInfo.weddingInfo.banks.length > 0"
    class="bg-[#cccbc8] px-10 py-[100px] text-center text-black"
  >
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-black" />
    <p class="text-xs">{{ state.desc }}</p>

    <nuxt-link>
      <button
        :class="{
          'rounded-full bg-zinc-900 px-4 py-2 pb-2 text-xs': true,
          'mt-4 text-white shadow-md shadow-neutral-950/100': true,
        }"
        @click="giftButtonClicked"
      >
        {{ state.button.name }}
      </button>
    </nuxt-link>

    <div class="mt-12" v-if="state.isShowBankCard">
      <div
        v-for="(item, key) in props.userInfo.weddingInfo.banks"
        :key="key"
        class="mb-4 rounded-xl px-4 pb-3 pt-2 shadow-md shadow-neutral-950/100"
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
