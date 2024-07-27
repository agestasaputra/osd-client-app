<template>
  <main class="w-full">
    <DesignTwoCoverComponent
      :user-info="props.userInfo"
      @handle-animation-osd-cover="handleAnimationOsdCover"
    />
    <transition-fade :duration="3000" :delay="1500">
      <DesignTwoBannerComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="1500">
      <DesignTwoInvitationComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="1500">
      <DesignTwoCounterComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="1500">
      <DesignTwoAboutUsComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import type { UserInfo } from '~/shared/interfaces.ts'
import DesignTwoCoverComponent from '~/templates/designtwo/components/cover/index.vue'
import DesignTwoBannerComponent from '~/templates/designtwo/components/banner/index.vue'
import DesignTwoInvitationComponent from '~/templates/designtwo/components/invitation/index.vue'
import DesignTwoCounterComponent from '~/templates/designtwo/components/counter/index.vue'
import DesignTwoAboutUsComponent from '~/templates/designtwo/components/about-us/index.vue'

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: () => ({}),
    required: true,
  },
})

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
    easing: 'easeInOutSine',
  })
  isContentVisible.value = type === 'in' ? false : true
}
</script>

<style lang="scss" scoped></style>
