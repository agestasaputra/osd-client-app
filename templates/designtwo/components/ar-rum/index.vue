<template>
  <section class="bg-[#cccbc8] px-10 py-[100px] text-center text-black">
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-black" />
    <div class="text-xs" v-dompurify-html="state.desc"></div>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'
defineOptions({
  name: 'SectionArRum',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const state = reactive({
  title: 'Q.S Ar-Rum: 21',
  desc: `
    <p>"Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup
    dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang
    di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi
    orang-orang yang berpikir." </p>
  `,
})
</script>

<style scoped></style>
