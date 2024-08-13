<template>
  <section class="bg-zinc-900 px-10 py-[100px] text-center">
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%]" />
    <div
      :class="{
        'min-h-[400px] rounded-b-[80px] rounded-t-[600px] border-[14px] border-double': true,
        'border-stone-600 bg-[#b5a272] text-xs text-black': true,
        'px-2 pb-8 pt-12': true,
      }"
    >
      <!-- AKAD NIKAH -->
      <div>
        <h4 class="text-2xl font-semibold">Akad Nikah</h4>
        <div class="my-6 flex h-[100px]">
          <div class="flex h-full w-[33.3%] flex-col justify-center px-2">
            <p class="text-2xl font-semibold uppercase">
              {{
                getMonth(props.userInfo.weddingInfo.eventDetail.akad.date)
                  .shortMonth
              }}
            </p>
          </div>
          <div
            :class="{
              'flex h-full w-[33.3%] flex-col justify-center': true,
              'border-l-2 border-r-2 border-black text-center': true,
            }"
          >
            <p class="text-md">
              {{
                getDayOfWeek(props.userInfo.weddingInfo.eventDetail.akad.date)
              }}
            </p>
            <p class="text-4xl font-semibold">
              {{
                new Date(
                  props.userInfo.weddingInfo.eventDetail.akad.date,
                ).getDate()
              }}
            </p>
            <p class="text-md">
              {{ props.userInfo.weddingInfo.eventDetail.akad.time }} WIB
            </p>
          </div>
          <div class="flex h-full w-[33.3%] flex-col justify-center px-2">
            <p class="text-2xl font-semibold">
              {{
                new Date(
                  props.userInfo.weddingInfo.eventDetail.akad.date,
                ).getFullYear()
              }}
            </p>
          </div>
        </div>
        <div class="text-center">
          <h5 class="text-lg font-semibold">Lokasi</h5>
          <p class="font-semibold">
            {{ props.userInfo.weddingInfo.eventDetail.akad.location.name }}
          </p>
          <p
            v-dompurify-html="
              props.userInfo.weddingInfo.eventDetail.akad.location.address
            "
          ></p>
          <nuxt-link
            :to="props.userInfo.weddingInfo.eventDetail.akad.location.maps"
            target="_blank"
          >
            <button
              :class="{
                'rounded-full bg-green-600 px-4 py-2 pb-2 text-xs text-white': true,
                'mt-3 shadow-md shadow-neutral-950/100': true,
              }"
            >
              Google maps
            </button>
          </nuxt-link>
        </div>
      </div>
      <hr class="border-t-1 mx-auto my-6 w-[80%] border-black" />

      <!-- RESEPSI -->
      <div>
        <h4 class="text-2xl font-semibold">Reception</h4>
        <div class="my-6 flex h-[100px]">
          <div class="flex h-full w-[33.3%] flex-col justify-center px-2">
            <p class="text-2xl font-semibold uppercase">
              {{
                getMonth(props.userInfo.weddingInfo.eventDetail.reception.date)
                  .shortMonth
              }}
            </p>
          </div>
          <div
            :class="{
              'flex h-full w-[33.3%] flex-col justify-center': true,
              'border-l-2 border-r-2 border-black text-center': true,
            }"
          >
            <p class="text-md">
              {{
                getDayOfWeek(
                  props.userInfo.weddingInfo.eventDetail.reception.date,
                )
              }}
            </p>
            <p class="text-4xl font-semibold">
              {{
                new Date(
                  props.userInfo.weddingInfo.eventDetail.reception.date,
                ).getDate()
              }}
            </p>
            <p class="text-md">
              {{ props.userInfo.weddingInfo.eventDetail.akad.time }} WIB
            </p>
          </div>
          <div class="flex h-full w-[33.3%] flex-col justify-center px-2">
            <p class="text-2xl font-semibold">
              {{
                new Date(
                  props.userInfo.weddingInfo.eventDetail.akad.date,
                ).getFullYear()
              }}
            </p>
          </div>
        </div>
        <div class="text-center">
          <h5 class="text-lg font-semibold">Lokasi</h5>
          <p class="font-semibold">
            {{ props.userInfo.weddingInfo.eventDetail.akad.location.name }}
          </p>
          <p
            v-dompurify-html="
              props.userInfo.weddingInfo.eventDetail.reception.location.address
            "
          ></p>
          <nuxt-link
            :to="props.userInfo.weddingInfo.eventDetail.reception.location.maps"
            target="_blank"
          >
            <button
              :class="{
                'rounded-full bg-green-600 px-4 py-2 pb-2 text-xs text-white': true,
                'mt-3 shadow-md shadow-neutral-950/100': true,
              }"
            >
              Google maps
            </button>
          </nuxt-link>
        </div>
      </div>

      <!-- COUNTDOWN -->
      <div>
        <hr class="border-t-1 mx-auto my-6 w-[80%] border-black" />
        <h4 class="text-2xl font-semibold">
          {{ props.userInfo.weddingInfo.eventDetail.countdown.title }}
        </h4>
        <p class="mx-auto mb-6 mt-2 px-8 text-center text-xs">
          What counts in making a happy marriage is not so much how compatible
          you are, but how you deal with incompatibility.
        </p>
        <vue-countdown
          :time="time"
          v-slot="{ days, hours, minutes, seconds }"
          class="mb-8 mt-4 flex px-4"
        >
          <!-- <div class="flex-1 border-r-2 border-gray-400">
            <p class="text-3xl">{{ days }}</p>
            <p class="text-xs font-thin">Days</p>
          </div>
          <div class="flex-1 border-r-2 border-gray-400">
            <p class="text-3xl">{{ hours }}</p>
            <p class="text-xs font-thin">Hours</p>
          </div>
          <div class="flex-1 border-r-2 border-gray-400">
            <p class="text-3xl">{{ minutes }}</p>
            <p class="text-xs font-thin">Minutes</p>
          </div>
          <div class="flex-1">
            <p class="text-3xl">{{ seconds }}</p>
            <p class="text-xs font-thin">Seconds</p>
          </div> -->

          <div class="mr-2 flex-1 rounded-xl bg-zinc-900 py-5 text-[#cccbc8]">
            <p class="text-3xl">{{ days }}</p>
            <p class="text-xs font-thin">Days</p>
          </div>
          <div class="mr-2 flex-1 rounded-xl bg-zinc-900 py-5 text-[#cccbc8]">
            <p class="text-3xl">{{ hours }}</p>
            <p class="text-xs font-thin">Hours</p>
          </div>
          <div class="mr-2 flex-1 rounded-xl bg-zinc-900 py-5 text-[#cccbc8]">
            <p class="text-3xl">{{ minutes }}</p>
            <p class="text-xs font-thin">Minutes</p>
          </div>
          <div class="flex-1 rounded-xl bg-zinc-900 py-5 text-[#cccbc8]">
            <p class="text-3xl">{{ seconds }}</p>
            <p class="text-xs font-thin">Seconds</p>
          </div>
        </vue-countdown>
        <nuxt-link
          v-if="time && time > 0"
          :to="state.button.link"
          target="_blank"
        >
          <button
            :class="{
              // 'rounded-full bg-zinc-900 px-4 py-2 pb-2 text-xs text-white': true,
              'rounded-full bg-green-600 px-4 py-2 pb-2 text-xs text-white': true,
              // 'rounded-full bg-white px-4 py-2 pb-2 text-xs text-zinc-900': true,
              'shadow-md shadow-neutral-950/100': true,
            }"
          >
            {{ state.button.name }}
          </button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getDayOfWeek, getMonth } from '~/utils'
import type { UserInfo } from '~/shared/interfaces.ts'
defineOptions({
  name: 'SectionEventDetail',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const state = reactive({
  title: 'Event Detail',
  button: {
    name: 'Save the date',
    link: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Day+(${props.userInfo.weddingInfo.couples.bride.name}+%26+${props.userInfo.weddingInfo.couples.groom.name})&dates=${props.userInfo.weddingInfo.eventDetail.akad.date.replaceAll('/', '')}T${convertTimeToUTC7(props.userInfo.weddingInfo.eventDetail.akad.date, props.userInfo.weddingInfo.eventDetail.akad.time).time.replaceAll(':', '')}00Z/${props.userInfo.weddingInfo.eventDetail.akad.date.replaceAll('/', '')}T${convertTimeToUTC7(props.userInfo.weddingInfo.eventDetail.countdown.endTime.date, props.userInfo.weddingInfo.eventDetail.countdown.endTime.time).time.replaceAll(':', '')}00Z&details=Merayakan+pernikahan+${props.userInfo.weddingInfo.couples.bride.name}+dan+${props.userInfo.weddingInfo.couples.groom.name}&location=Jl.+Kebahagiaan+No.123,+Jakarta`,
  },
})

const time = computed(() => {
  try {
    const today = new Date()
    const targetDayDate = new Date(
      props.userInfo.weddingInfo.eventDetail.akad.date,
    )
    const targetDayHours = props.userInfo.weddingInfo.eventDetail.akad.time

    const targetDay = new Date(
      targetDayDate.getFullYear(),
      targetDayDate.getMonth(),
      targetDayDate.getDate(),
      +targetDayHours.split(':')[0],
      +targetDayHours.split(':')[1],
    )
    return targetDay.getTime() - today.getTime() || null
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error:', err)
  }
})

onMounted(() => {
  convertTimeToUTC7(
    props.userInfo.weddingInfo.eventDetail.akad.date,
    props.userInfo.weddingInfo.eventDetail.akad.time,
  )
})

function convertTimeToUTC7(date: string, time: string) {
  // convert date to UTC-7, because the date and time is in UTC+7
  const targetDay = new Date(`${date} ${time}`)
  targetDay.setHours(targetDay.getHours() - 7)

  // get new date from targetDay (YYYY/MM/DD)
  const newYear = targetDay.getFullYear()
  const newMonth = (targetDay.getMonth() + 1).toString().padStart(2, '0')
  const newDate = targetDay.getDate().toString().padStart(2, '0')
  const newFullDate = `${String(newYear)}/${String(newMonth)}/${String(newDate)}`

  // get new time from targetDay (HH:MM)
  const newHours = targetDay.getHours().toString().padStart(2, '0')
  const newMinutes = targetDay.getMinutes().toString().padStart(2, '0')
  const newFullTime = `${String(newHours)}:${String(newMinutes)}`

  return {
    date: newFullDate,
    time: newFullTime,
  }
}
</script>

<style scoped></style>
