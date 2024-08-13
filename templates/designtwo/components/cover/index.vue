<template>
  <section
    id="osd-cover"
    :class="{
      'absolute z-10 flex h-[100vh]': true,
      'w-[100vw] min-w-[350px] max-w-[480px]': true,
      'flex-col items-center justify-around': true,
      'bg-cover text-white grayscale': true,
    }"
    class="bg-[url('/assets/images/img-bg-2.jpg')]"
  >
    <div class="text-center">
      <h4>{{ state.title }}</h4>
      <!-- v-if="props.userInfo.weddingInfo.brides.length > 0" -->
      <h1 class="text-[40px] capitalize leading-none">
        {{ props.userInfo.weddingInfo.couples.bride.name }} &
        {{ props.userInfo.weddingInfo.couples.groom.name }}
      </h1>
      <h4>{{ date }}</h4>
    </div>
    <div>
      <!-- class="rounded-full bg-white px-4 py-1 pb-2 text-black shadow-md" -->
      <button
        :class="{
          'rounded-full bg-white px-4 py-1 pb-2 text-sm': true,
          'text-black shadow-md shadow-neutral-950/100': true,
        }"
        @click="handleButtonBukaUndangan"
      >
        {{ state.button }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'

defineOptions({
  name: 'SectionCover',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: [],
    required: true,
  },
})
const emit = defineEmits(['handle-animation-osd-cover'])

const state = reactive({
  title: 'Wedding Invitation',
  button: 'Buka undangan',
})

const date = computed(() => {
  try {
    const akadDate = new Date(props.userInfo.weddingInfo.eventDetail.akad.date)
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    const result = akadDate.toLocaleDateString('id-ID', options)
    return result
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error)
    return
  }
})

function handleButtonBukaUndangan() {
  emit('handle-animation-osd-cover', 'out')
}
</script>

<style scoped></style>
