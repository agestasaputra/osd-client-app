<template>
  <section class="bg-zinc-900 px-10 py-[100px] text-center">
    <!-- <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1D1D1D"
            fill-opacity="1"
            d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,181.3C1120,181,
            1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,
            640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div> -->
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr
      v-if="state.title"
      class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-white"
    />
    <!-- <div v-dompurify-html="state.desc"></div> -->
    <p class="mb-1 text-sm font-semibold">{{ state.desc.title }}</p>
    <p class="text-xs">{{ state.desc.desc }}</p>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'

defineOptions({
  name: 'SectionInvitation',
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const state = reactive({
  title: '',
  desc: {
    // title: 'السلام عليكم ورحمة الله وبركاته',
    title: 'Assalamu’alaikum Wr. Wb.',
    desc: `Kami mengundang Anda untuk merayakan hari ketika kami mengambil langkah besar berikutnya dalam hubungan ini. 
    Kami berjanji kepada Anda bahwa pernikahan itu akan luar biasa. Kami akan sangat berterima kasih
    jika Anda datang untuk merayakan cinta kami bersama kami`,
  },
  // desc: `
  //   <p style="font-size: 22px">السلام عليكم ورحمة الله وبركاته</p>
  //   <p style="font-size: 12px"> We are inviting you to celebrate the day when
  //   we take our next large step in the relationship. We promise you that
  //   the wedding will be magnificent. We would be incredibly grateful
  //   if you came to celebrate our love together with us! </p>
  //   <br />
  //   <br />
  //   <br />
  //   <p style="font-size: 16px"> - Siska & Agesta - </p>
  // `,
})
</script>

<style scoped></style>
