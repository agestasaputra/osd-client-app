<template>
  <section
    id="osd-cover"
    class="absolute bottom-[100%] z-10 flex h-[100vh] w-[100vw] min-w-[350px] max-w-[480px] flex-col items-center justify-around bg-[url('/assets/images/img-bg-2.jpg')] bg-cover text-white grayscale"
  >
    <div class="text-center">
      <h4>{{ state.title }}</h4>
      <h1
        v-if="props.userInfo.weddingInfo.brides.length > 0"
        class="text-[40px] capitalize leading-none"
      >
        {{ props.userInfo.weddingInfo.brides[0] }} &
        {{ props.userInfo.weddingInfo.brides[1] }}
      </h1>
      <h4>{{ date }}</h4>
    </div>
    <div>
      <button
        class="rounded-full bg-white px-4 py-1 pb-2 text-black shadow-md"
        @click="handleButtonBukaUndangan('out')"
      >
        {{ state.button }}
      </button>
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
    akad: {
      date: string // YYYY/MM/DD
      time: string // HH:MM
    }
    reception: {
      date: string // YYYY/MM/DD
      time: string // HH:MM
    }
    endTime: {
      date: string // YYYY/MM/DD
      time: string // HH:MM
    }
    location: {
      name: string
      address: string
    }
  }
}

const { $anime } = useNuxtApp()
const state = reactive({
  title: 'Wedding Invitation',
  button: 'Buka undangan',
})

const date = computed(() => {
  try {
    const akadDate = new Date(props.userInfo.weddingInfo.akad.date)
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    const result = akadDate.toLocaleDateString('id-ID', options)
    return result
  } catch (error) {
    console.error('Error:', error)
    return 0
  }
})

function handleButtonBukaUndangan(type: 'in' | 'out') {
  $anime({
    targets: '#osd-cover',
    translateY: type === 'in' ? '100vh' : '0vh',
    duration: 1000,
    easing: 'easeInOutSine',
  })
  emit('handle-animation-osd-cover', 'out')
}
</script>

<style scoped></style>
