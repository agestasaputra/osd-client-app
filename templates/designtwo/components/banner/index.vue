<template>
  <section>
    <!-- BANNER VUEPERSLIDES -->
    <div>
      <vueper-slides
        :bullets="false"
        autoplay
        infinite
        fade
        touchable
        fixedHeight="100vh"
        ref="vueperSlide"
        class="grayscale"
      >
        <template #arrow-left>
          <div class="opacity-0">kiri</div>
        </template>
        <template #arrow-right>
          <div class="opacity-0">kanan</div>
        </template>
        <vueper-slide
          v-for="(slide, key) in state.slides"
          :key="key"
          :image="slide.image"
        >
        </vueper-slide>
      </vueper-slides>
    </div>

    <!-- BANNER TEXT -->
    <div class="absolute bottom-[-1px] w-[100vw] min-w-[350px] max-w-[480px]">
      <div class="px-7 pb-6 text-right">
        <div class="flex flex-row items-center">
          <div
            class="inline-block h-[2px] w-full flex-1 bg-[#fff] text-[#fff]"
          ></div>
          <h3 class="ml-2 text-white">{{ state.bannerText.title }}</h3>
        </div>
        <div
          v-if="props.userInfo.weddingInfo.brides.length > 0"
          class="my-4 flex flex-col"
        >
          <h1 class="text-[60px] uppercase leading-none text-white shadow-sm">
            {{ props.userInfo.weddingInfo.brides[0] }} &
          </h1>
          <h1 class="text-[60px] uppercase leading-none text-white shadow-sm">
            {{ props.userInfo.weddingInfo.brides[1] }}
          </h1>
        </div>
        <div class="flex flex-row items-center">
          <div
            class="inline-block h-[2px] w-full flex-1 bg-[#fff] text-[#fff]"
          ></div>
          <h3 class="ml-2 text-[14px] text-white">
            {{ date }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import imgBanner1 from '@/assets/images/img-banner-1-compressed.jpg'
import imgBanner2 from '@/assets/images/img-banner-2-compressed.jpg'
import imgBanner3 from '@/assets/images/img-banner-3-compressed.jpg'
import type { UserInfo } from '~/shared/interfaces.ts'

defineOptions({
  name: 'SectionBanner',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: [],
    required: true,
  },
})

const state = reactive({
  slides: [
    {
      title: 'Photo 1',
      image: imgBanner1,
    },
    {
      title: 'Photo 2',
      image: imgBanner2,
    },
    {
      title: 'Photo 3',
      image: imgBanner3,
    },
  ],
  bannerText: {
    title: 'The Wedding Of',
  },
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
    return
  }
})

onMounted(() => {
  setTimeout(() => {
    handleHideArrowBanner()
  }, 100)
})

function handleHideArrowBanner() {
  const dom: HTMLElement | null = document.querySelector(
    '.vueperslides__arrow--next',
  )
  dom && dom.click()
}
</script>

<style scoped></style>
