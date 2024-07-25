<template>
  <section class="px-10 py-[100px] text-center">
    <!-- <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1D1D1D"
            fill-opacity="1"
            d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div> -->
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="mx-auto mt-3 mb-6 w-[50%] border-t-1 border-white" />
    <div v-dompurify-html="state.desc"></div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
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

const state = reactive({
  title: 'Invitation',
  desc: `
    <p style="font-size: 22px">السلام عليكم ورحمة الله وبركاته</p>
    <p style="font-size: 12px"> We are inviting you to celebrate the day when we take our next large step in the relationship. We promise you that the wedding will be magnificent. We would be incredibly grateful if you came to celebrate our love together with us! </p>
    <br />
    <br />
    <br />
    <p style="font-size: 16px"> - Siska & Agesta - </p>
  `,
})
</script>

<style scoped></style>
