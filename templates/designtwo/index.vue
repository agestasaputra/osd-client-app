<template>
  <main>
    <section
      class="bg-[url('assets/images/img-bg-2.jpg')] bg-[center_top_-17rem] bg-cover w-full h-svh"
    ></section>
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="absolute bottom-[-1px]"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L120,208C240,192,480,160,720,160C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="absolute bottom-0"
      >
        <path
          fill="#FFF"
          fill-opacity="1"
          d="M0,224L120,202.7C240,181,480,139,720,138.7C960,139,1200,181,1320,202.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> -->
    </section>
    <section class="px-[200px]">
      <h3 class="text-center text-3xl mb-10 font-semibold">Locations</h3>
      <div
        v-if="photos && photos.length"
        class="w-full grid grid-cols-3 grid-rows-1 gap-5"
      >
        <template v-for="(photo, key) in photos" :key="key">
          <figure class="h-[220px]">
            <img
              :src="photo.src"
              :alt="photo.title"
              class="w-full h-full object-cover rounded-lg"
            />
          </figure>
        </template>
      </div>
    </section>

    <section class="px-[200px] mt-24">
      <h3 class="text-2xl mb-5 font-semibold">Feature venues</h3>
      <div class="flex rounded-xl shadow-md h-[400px]">
        <div
          class="rounded-l-xl w-[28%] bg-[url('assets/images/img-card.jpg')] bg-cover object-cover overflow-hidden"
        ></div>
        <div class="flex-1 px-24 py-8">
          <h3 class="text-3xl mb-5 font-semibold">Feature venues</h3>
          <p class="mb-5">
            The whole complex consists of two residential buildings, a church,
            and a portico (known as Loggia Durini) that can host weddings and
            events in a truly unique setting.
          </p>
          <p>
            But the special feature of Villa Balbianello is above all the vast
            garden that surrounds the dwellings, with magnificent holm oaks
            pruned into an umbrella shape so as to offer a splendid view of Lake
            Como from inside the
          </p>
        </div>
      </div>
    </section>

    <section>
      <br />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import imgBg from '@/assets/images/img-bg-2.jpg'
interface IPhoto {
  title: string
  src: string
}
const photos = ref<IPhoto[] | undefined>(undefined)
onMounted(() => {
  photos.value = [
    {
      title: 'Photo 1',
      src: imgBg,
    },
    {
      title: 'Photo 2',
      src: imgBg,
    },
    {
      title: 'Photo 3',
      src: imgBg,
    },
    {
      title: 'Photo 1',
      src: imgBg,
    },
    {
      title: 'Photo 2',
      src: imgBg,
    },
    {
      title: 'Photo 3',
      src: imgBg,
    },
  ]
})
</script>

<style lang="scss" scoped></style>
