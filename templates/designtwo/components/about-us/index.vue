<template>
  <section class="bg-zinc-900 px-10 py-[100px] text-center">
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-white" />
    <div v-dompurify-html="state.desc"></div>

    <!-- The Bride -->
    <div class="mt-12">
      <div class="flex flex-col">
        <div
          :class="{
            'border-8 border-stone-600': true,
            'z-[1]': true,
            'h-[350px]': true,
            'w-[250px]': true,
            'bg-lime-600': true,
            'text-black': true,
            'bg-[url(/assets/images/img-bg-2.jpg)]': true,
            'bg-cover': true,
          }"
        ></div>
        <div
          :class="{
            absolute: true,
            'z-[0]': true,
            'ml-[40px]': true,
            'mt-[40px]': true,
            flex: true,
            'items-end': true,
            'h-[350px]': true,
            'w-[250px]': true,
            'bg-[#b5a272]': true,
            'px-2': true,
            'py-1': true,
            'text-2xl': true,
            'text-black': true,
          }"
        >
          <p class="flex-1 text-right">The Bride</p>
        </div>
      </div>
      <div class="mt-12">
        <div class="flex flex-col items-end text-right">
          <p
            class="my-3 text-3xl font-semibold"
            v-dompurify-html="state.bride.name"
          ></p>
          <p class="text-sm">Putri Dari</p>
          <p
            class="text-sm font-semibold"
            v-dompurify-html="state.bride.father"
          ></p>
          <span class="inline text-sm">
            dan
            <p
              class="inline text-sm font-semibold"
              v-dompurify-html="state.bride.mother"
            ></p>
          </span>
          <nuxt-link :to="state.bride.instagram" target="_blank" class="mt-2">
            <button
              class="h-[30px] rounded-md bg-[#b5a272] px-3 pb-1 text-sm text-zinc-900 shadow-md"
            >
              Instagram
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- The Groom -->
    <div class="">
      <hr class="border-t-1 mx-auto my-12 border-white" />
      <div class="flex flex-col items-end">
        <div
          :class="{
            'border-8 border-stone-600': true,
            'z-[1]': true,
            'h-[350px]': true,
            'w-[250px]': true,
            'bg-lime-600': true,
            'text-black': true,
            'bg-[url(/assets/images/img-bg-2.jpg)]': true,
            'bg-cover': true,
          }"
        ></div>
        <div
          :class="{
            absolute: true,
            'z-[0]': true,
            'mr-[40px]': true,
            'mt-[40px]': true,
            flex: true,
            'items-end': true,
            'h-[350px]': true,
            'w-[250px]': true,
            'bg-[#b5a272]': true,
            'px-2': true,
            'py-1': true,
            'text-2xl': true,
            'text-black': true,
          }"
        >
          <p class="flex-1 text-left">The Groom</p>
        </div>
      </div>
      <div class="mt-12">
        <div class="flex flex-col items-start text-left">
          <p
            class="my-3 text-3xl font-semibold"
            v-dompurify-html="state.groom.name"
          ></p>
          <p class="text-sm">{{ state.groom.desc[0] }}</p>
          <p
            class="text-sm font-semibold"
            v-dompurify-html="state.groom.father"
          ></p>
          <span class="inline text-sm"
            >{{ state.groom.desc[1] }}
            <p
              class="inline text-sm font-semibold"
              v-dompurify-html="state.groom.mother"
            ></p>
          </span>
          <nuxt-link :to="state.groom.instagram" target="_blank" class="mt-2">
            <button
              class="h-[30px] rounded-md bg-[#b5a272] px-3 pb-1 text-sm text-zinc-900 shadow-md"
            >
              Instagram
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'

defineOptions({
  name: 'SectionAboutUs',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const state = reactive({
  title: 'We Found Love',
  desc: `
    <p style="font-size: 12px">Assalamu’alaikum Wr. Wb.</p>
    <p style="font-size: 12px">Dengan memohon rahmat dan ridho Allah
    Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara 
    pernikahan kami :</p>
  `,
  bride: {
    title: 'The Bride',
    name: 'Siska Dwi Putri <br/> Yuliansyah',
    desc: ['Putri dari', 'dan'],
    father: 'Bapak Fulan',
    mother: 'Ibu Fulan',
    instagram: 'https://www.instagram.com/siskadptr',
  },
  groom: {
    title: 'The Groom',
    name: 'Agesta Budy <br/> Saputra',
    desc: ['Putra dari', 'dan'],
    father: 'Bapak Thoriq',
    mother: 'Ibu Fuji',
    instagram: 'https://www.instagram.com/agestasaputra',
  },
})
</script>

<style scoped></style>
