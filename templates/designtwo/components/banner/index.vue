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
    <div class="absolute min-w-[350px] w-[100vw] max-w-[480px] bottom-[-1px]">
      <div class="text-right px-7 pb-6">
        <div class="flex flex-row items-center">
          <div
            class="bg-[#fff] w-full h-[2px] text-[#fff] inline-block flex-1"
          ></div>
          <h3 class="text-white ml-2">{{ state.bannerText.title }}</h3>
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
            {{ date }}
          </h3>
        </div>
      </div>
      <!-- <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1D1D1D"
              fill-opacity="1"
              d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import imgBanner1 from '@/assets/images/img-banner-1.jpg'
import imgBanner2 from '@/assets/images/img-banner-2.jpg'
import imgBanner3 from '@/assets/images/img-banner-3.jpg'

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
    return 0
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
