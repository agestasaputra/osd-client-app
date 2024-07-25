<template>
  <main class="w-full">
    <DesignTwoCoverComponent
      :user-info="props.userInfo"
      @handle-animation-osd-cover="handleAnimationOsdCover"
    />
    <transition-fade :duration="3000" :delay="1000">
      <DesignTwoBannerComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="1000">
      <DesignTwoInvitationComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="1000">
      <DesignTwoCounterComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import DesignTwoCoverComponent from '~/templates/designtwo/components/cover/index.vue'
import DesignTwoBannerComponent from '~/templates/designtwo/components/banner/index.vue'
import DesignTwoInvitationComponent from '~/templates/designtwo/components/invitation/index.vue'
import DesignTwoCounterComponent from '~/templates/designtwo/components/counter/index.vue'

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: () => ({}),
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
    duration: 1000,
    easing: 'easeInOutExpo',
  })
  isContentVisible.value = type === 'in' ? false : true
}
</script>

<style lang="scss" scoped></style>
