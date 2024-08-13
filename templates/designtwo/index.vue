<template>
  <main class="w-full">
    <!-- Cover -->
    <transition-fade :duration="5000" :delay="500">
      <DesignTwoCoverComponent
        v-if="isCoverVisible"
        :user-info="props.userInfo"
        @handle-animation-osd-cover="handleAnimationOsdCover"
      />
    </transition-fade>

    <!-- Banner -->
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoBannerComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>

    <!-- Invitation -->
    <!-- <transition-fade :duration="3000" :delay="2000">
      <DesignTwoInvitationComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade> -->

    <!-- About Us -->
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoAboutUsComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>

    <!-- Ar-Rum -->
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoArRumComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>

    <!-- Countdown -->
    <!-- <transition-fade :duration="3000" :delay="2000">
      <DesignTwoCountdownComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade> -->

    <!-- Event Detail -->
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoEventDetailComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>

    <!-- Live Streaming -->
    <!-- <transition-fade :duration="3000" :delay="2000">
      <DesignTwoLiveStreamingComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade> -->

    <!-- Wedding Gift -->
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoWeddingGiftComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>

    <!-- Gallery -->
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoGalleryComponent
        v-if="isContentVisible"
        :user-info="props.userInfo"
      />
    </transition-fade>

    <!-- Love Story -->
    <transition-fade :duration="3000" :delay="2000">
      <DesignTwoLoveStoryComponent
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
// import DesignTwoInvitationComponent from '~/templates/designtwo/components/invitation/index.vue'
// import DesignTwoCountdownComponent from '~/templates/designtwo/components/countdown/index.vue'
import DesignTwoAboutUsComponent from '~/templates/designtwo/components/about-us/index.vue'
import DesignTwoArRumComponent from '~/templates/designtwo/components/ar-rum/index.vue'
import DesignTwoEventDetailComponent from '~/templates/designtwo/components/event-detail/index.vue'
// import DesignTwoLiveStreamingComponent from '~/templates/designtwo/components/live-streaming/index.vue'
import DesignTwoLoveStoryComponent from '~/templates/designtwo/components/love-story/index.vue'
import DesignTwoWeddingGiftComponent from '~/templates/designtwo/components/wedding-gift/index.vue'
import DesignTwoGalleryComponent from '~/templates/designtwo/components/gallery/index.vue'

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
