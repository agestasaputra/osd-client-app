<template>
  <section class="bg-[#cccbc8] px-10 py-[100px] text-center text-black">
    <h3 class="text-2xl">{{ state.title }}</h3>
    <hr class="border-t-1 mx-auto mb-6 mt-3 w-[50%] border-black" />
    <div class="text-xs" v-dompurify-html="state.desc"></div>
    <vue-countdown
      :time="time"
      v-slot="{ days, hours, minutes, seconds }"
      class="my-8 flex"
    >
      <div class="flex-1 border-r-2 border-gray-400">
        <p class="text-3xl">{{ days }}</p>
        <p class="text-xs">Days</p>
      </div>
      <div class="flex-1 border-r-2 border-gray-400">
        <p class="text-3xl">{{ hours }}</p>
        <p class="text-xs">Hours</p>
      </div>
      <div class="flex-1 border-r-2 border-gray-400">
        <p class="text-3xl">{{ minutes }}</p>
        <p class="text-xs">Minutes</p>
      </div>
      <div class="flex-1">
        <p class="text-3xl">{{ seconds }}</p>
        <p class="text-xs">Seconds</p>
      </div>
    </vue-countdown>
    <nuxt-link v-if="time && time > 0" :to="state.button.link" target="_blank">
      <button
        :class="{
          'rounded-full bg-green-600 px-4 py-2 pb-2 text-xs': true,
          'text-white shadow-md shadow-neutral-950/100': true,
        }"
      >
        {{ state.button.name }}
      </button>
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
import type { UserInfo } from '~/shared/interfaces.ts'

defineOptions({
  name: 'SectionCountdown',
})

const props = defineProps({
  userInfo: {
    type: Object as PropType<UserInfo>,
    default: {},
    required: true,
  },
})

const state = reactive({
  title: 'Count The Date',
  desc: `What counts in making a happy marriage is not so much 
  how compatible you are, but how you deal with incompatibility. 
  A great marriage is not when the perfect couple comes together.
  It is when an imperfect couple learns to enjoy their differences.`,
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
