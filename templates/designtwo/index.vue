<template>
  <main class="w-full">
    <transition-fade :duration="5000" :delay="500">
      <DesignTwoCoverComponent
        v-if="isCoverVisible"
        :user-info="props.userInfo"
        @handle-animation-osd-cover="handleAnimationOsdCover"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoBannerComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoInvitationComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoCounterComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoAboutUsComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoArRumComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoEventDetailComponent
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
import DesignTwoArRumComponent from '~/templates/designtwo/components/ar-rum/index.vue'
import DesignTwoEventDetailComponent from '~/templates/designtwo/components/event-detail/index.vue'

defineOptions({
  name: 'SectionTemplateDesign',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: () => ({}),
    required: true,
  },
})

let isCoverVisible = ref<boolean>(false)
let isContentVisible = ref<boolean>(false)
const { $anime } = useNuxtApp()

onMounted(() => {
  setTimeout(() => {
    isCoverVisible.value = true
  }, 10)
})

function handleAnimationOsdCover() {
  $anime({
    targets: '#osd-cover',
    translateY: '-100vh',
    duration: 2000,
    easing: 'easeInOutSine',
  })
  isContentVisible.value = true
}
</script>

<style lang="scss" scoped></style>
