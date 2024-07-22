<template>
  <main>
    <DesignTwoCoverComponent
      :user-info="props.userInfo"
      @handle-animation-osd-cover="handleAnimationOsdCover"
    />
    <DesignTwoBannerComponent
      :user-info="props.userInfo"
      :is-content-visible="isContentVisible"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import DesignTwoCoverComponent from '~/templates/designtwo/components/cover/index.vue'
import DesignTwoBannerComponent from '~/templates/designtwo/components/banner/index.vue'

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: [],
    required: true,
  },
})

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

let brides = ref<string[]>([])
let isContentVisible = ref<boolean>(false)
const { $anime } = useNuxtApp()

onMounted(() => {
  setTimeout(() => {
    handleAnimationOsdCover('in')
  }, 1)
})

function handleAnimationOsdCover(type: 'in' | 'out') {
  $anime({
    targets: '#osd-cover',
    translateY: type === 'in' ? '100vh' : '0vh',
    duration: 800,
    easing: 'easeInOutExpo',
  })
  isContentVisible.value = type === 'in' ? false : true
}
</script>

<style lang="scss" scoped></style>
