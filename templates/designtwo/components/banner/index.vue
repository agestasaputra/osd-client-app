<template>
  <transition-fade :duration="3000" :delay="1000">
    <div v-if="props.isContentVisible">
      <!-- BANNER VUEPERSLIDES -->
      <section>
        <vueper-slides
          :bullets="false"
          autoplay
          fade
          touchable
          fixedHeight="100svh"
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
            v-for="(slide, key) in slides"
            :key="key"
            :image="slide.image"
          >
          </vueper-slide>
        </vueper-slides>
      </section>

      <!-- BANNER TEXT -->
      <section class="absolute w-full max-w-[375px] bottom-[-1px]">
        <div class="text-right px-7">
          <div class="flex flex-row items-center">
            <div
              class="bg-[#fff] w-full h-[2px] text-[#fff] inline-block flex-1"
            ></div>
            <h3 class="text-white ml-2">The Wedding Of</h3>
          </div>
          <div
            v-if="props.userInfo.weddingInfo.brides.length > 0"
            class="flex flex-col my-4"
          >
            <h1 class="text-[60px] leading-none text-white uppercase shadow-sm">
              {{ props.userInfo.weddingInfo.brides[0] }} &
            </h1>
            <h1 class="text-[60px] leading-none text-white uppercase shadow-sm">
              {{ props.userInfo.weddingInfo.brides[1] }}
            </h1>
          </div>
          <div class="flex flex-row items-center">
            <div
              class="bg-[#fff] w-full h-[2px] text-[#fff] inline-block flex-1"
            ></div>
            <h3 class="text-[14px] text-white ml-2">
              Minggu, 27 Desember 2024
            </h3>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1D1D1D"
              fill-opacity="1"
              d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  </transition-fade>
</template>

<script setup lang="ts">
import imgBanner1 from '@/assets/images/img-banner-1.jpg'
import imgBanner2 from '@/assets/images/img-banner-2.jpg'
import imgBanner3 from '@/assets/images/img-banner-3.jpg'

const props = defineProps({
  isContentVisible: { type: Boolean, required: true },
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: [],
    required: true,
  },
})

interface IPhoto {
  title: string
  image: string
}
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

const slides = ref<IPhoto[]>([
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
])

onMounted(() => {
  setTimeout(() => {
    handleHideArrowBanner()
  }, 1)
})

function handleHideArrowBanner() {
  const dom: HTMLElement | null = document.querySelector(
    '.vueperslides__arrow--next',
  )
  dom && dom.click()
}
</script>

<style scoped></style>
