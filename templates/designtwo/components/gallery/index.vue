<template>
  <section class="bg-zinc-900 px-8 py-[100px] text-center">
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-white" />

    <div
      v-for="(itemLevelOne, keyLevelOne) in props.userInfo.weddingInfo.gallery
        .images"
      :key="keyLevelOne"
    >
      <!-- Template #1 -->
      <div v-if="props.userInfo.weddingInfo.gallery.template === 'template-1'">
        <div
          v-for="(itemLevelTwo, keyLevelTwo) in itemLevelOne"
          :key="keyLevelTwo"
          class="mb-2 h-[200px] rounded-xl bg-cover"
          :style="{ backgroundImage: `url(${itemLevelTwo.url})` }"
        ></div>
      </div>

      <!-- Template #2 -->
      <div v-if="props.userInfo.weddingInfo.gallery.template === 'template-2'">
        <div
          class="mb-2 h-[200px] rounded-xl bg-cover"
          :style="{
            backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][0].url})`,
          }"
        ></div>
        <div class="mb-2 flex h-[250px] flex-row">
          <div
            class="mr-2 flex-1 rounded-xl bg-cover"
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][1].url})`,
            }"
          ></div>
          <div
            class="flex-1 rounded-xl bg-cover"
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][2].url})`,
            }"
          ></div>
        </div>
      </div>

      <!-- Template #3 -->
      <div v-if="props.userInfo.weddingInfo.gallery.template === 'template-3'">
        <div class="mb-2 flex h-[250px] flex-row">
          <div
            class="mr-2 flex-1 rounded-xl bg-cover"
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][0].url})`,
            }"
          ></div>
          <div
            class="flex-1 rounded-xl bg-cover"
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][1].url})`,
            }"
          ></div>
        </div>
        <div class="mb-2 flex h-[250px] flex-row">
          <div
            class="mr-2 flex-1 rounded-xl bg-cover"
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][2].url})`,
            }"
          ></div>
          <div
            class="flex-1 rounded-xl bg-cover"
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][3].url})`,
            }"
          ></div>
        </div>
      </div>

      <!-- Template #4 -->
      <div v-if="props.userInfo.weddingInfo.gallery.template === 'template-4'">
        <div
          :style="{
            backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][0].url})`,
          }"
          class="mb-2 h-[200px] rounded-xl bg-cover"
        ></div>
        <div class="mb-2 flex h-[200px] flex-row">
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][1].url})`,
            }"
            class="mr-2 w-[38%] rounded-xl bg-cover"
          ></div>
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][2].url})`,
            }"
            class="flex-1 rounded-xl bg-cover"
          ></div>
        </div>
      </div>

      <!-- Template #5 -->
      <div v-if="props.userInfo.weddingInfo.gallery.template === 'template-5'">
        <div class="mb-2 flex h-[250px] flex-row">
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][0].url})`,
            }"
            class="mr-2 flex-1 rounded-xl bg-cover"
          ></div>
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][1].url})`,
            }"
            class="flex-1 rounded-xl bg-cover"
          ></div>
        </div>
        <div
          class="mb-2 flex h-[200px]"
          :class="keyLevelOne % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
        >
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][2].url})`,
            }"
            class="w-[38%] rounded-xl bg-cover"
            :class="keyLevelOne % 2 === 0 ? 'mr-2' : 'ml-2'"
          ></div>
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][3].url})`,
            }"
            class="flex-1 rounded-xl bg-cover"
          ></div>
        </div>
      </div>

      <!-- Template #6 -->
      <div v-if="props.userInfo.weddingInfo.gallery.template === 'template-6'">
        <div
          :style="{
            backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][0].url})`,
          }"
          class="mb-2 h-[200px] rounded-xl bg-cover"
        ></div>
        <div class="mb-2 flex h-[250px] flex-row">
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][1].url})`,
            }"
            class="mr-2 flex-1 rounded-xl bg-cover"
          ></div>
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][2].url})`,
            }"
            class="flex-1 rounded-xl bg-cover"
          ></div>
        </div>
        <div
          class="mb-2 flex h-[200px]"
          :class="keyLevelOne % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
        >
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][3].url})`,
            }"
            class="w-[38%] rounded-xl bg-cover"
            :class="keyLevelOne % 2 === 0 ? 'mr-2' : 'ml-2'"
          ></div>
          <div
            :style="{
              backgroundImage: `url(${props.userInfo.weddingInfo.gallery.images[keyLevelOne][3].url})`,
            }"
            class="flex-1 rounded-xl bg-cover"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'

defineOptions({
  name: 'SectionGallery',
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
  title: 'Gallery',
})
</script>

<style scoped></style>
