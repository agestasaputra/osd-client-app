<template>
  <section id="osd-cover">
    <div
      class="bottom-[100%] bg-[url('/assets/images/img-bg-2.jpg')] w-full h-[100svh] bg-cover absolute z-10 max-w-[375px] flex flex-col justify-around items-center grayscale text-white"
    >
      <div class="text-center">
        <h4>Wedding Invitation</h4>
        <!-- <h1 v-if="props.brides.length > 0" class="text-[40px] leading-none">Siska & Agesta</h1> -->
        <h1
          v-if="props.userInfo.weddingInfo.brides.length > 0"
          class="text-[40px] leading-none capitalize"
        >
          {{ props.userInfo.weddingInfo.brides[0] }} &
          {{ props.userInfo.weddingInfo.brides[1] }}
        </h1>
        <h4>{{ props.userInfo.weddingInfo.date }}</h4>
      </div>
      <div>
        <button
          class="rounded-full bg-white px-4 py-1 pb-2 text-black shadow-md"
          @click="handleButtonBukaUndangan('out')"
        >
          Buka undangan
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: [],
    required: true,
  },
})
const emit = defineEmits(['handle-animation-osd-cover'])
const { $anime } = useNuxtApp()

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

function handleButtonBukaUndangan(type: 'in' | 'out') {
  $anime({
    targets: '#osd-cover',
    translateY: type === 'in' ? '100vh' : '0vh',
    duration: 800,
    easing: 'easeInOutExpo',
  })
  emit('handle-animation-osd-cover', 'out')
}
</script>

<style scoped></style>
