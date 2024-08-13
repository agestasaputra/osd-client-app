<template>
  <section class="bg-[#cccbc8] px-10 py-[100px] text-center text-black">
    <h3 class="text-2xl">{{ props.userInfo.weddingInfo.arRum.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-black" />
    <p class="text-xs">{{ props.userInfo.weddingInfo.arRum.desc }}</p>
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
</script>

<style scoped></style>
