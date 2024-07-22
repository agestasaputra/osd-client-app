<template>
  <div>
    <template v-if="isLoading">
      <p>Loading...</p>
    </template>
    <template v-if="!isLoading">
      <main class="mobile-wrapper w-[375px] mx-auto">
        <DesignOne
          v-if="userInfo && userInfo.package.name === 'design-one'"
          :user-info="userInfo"
        />
        <DesignTwo
          v-if="userInfo && userInfo.package.name === 'design-two'"
          :user-info="userInfo"
        />
      </main>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from '#imports'
import DesignOne from '~/templates/designone/index.vue'
import DesignTwo from '~/templates/designtwo/index.vue'
import { $fetch } from 'ofetch'
import { useRoute } from 'vue-router'

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

const isLoading = ref<boolean>(true)
const userInfo = ref<UserInfo>()
const hasQuery = ref<boolean>(false)
const route = useRoute()

onMounted(() => {
  try {
    setTimeout(() => {
      hasQuery.value = route.query.guest ? true : false
      setLoading(false)
      fetchUserInfo()
        .then()
        .catch(() => {
          throw new Error('Error fetching user info')
        })
    }, 1000)
  } catch (error) {
    console.log(error)
  }
})
async function fetchUserInfo() {
  try {
    const response: UserInfo = await $fetch(
      'https://api.restful-api.dev/objects',
      {
        method: 'GET',
      },
    )
    const res = {
      profile: {
        name: 'Agesta',
        email: 'asd@asd.com',
      },
      package: {
        name: 'design-two',
      },
      weddingInfo: {
        brides: [],
        date: '12/11/2021',
        location: {
          name: `Masjid Jami' Al-Falaah`,
          address: `Jl. Aup Bar RT 03/ RW 10 Pasar Minggu Pasar Minggu, Jakarta Selatan, DKI Jakarta 12540`,
        },
      },
    }
    handleAssignBrides(res)
    userInfo.value = res
    console.log('res:', res)
    console.log('response:', response)
  } catch (error) {
    console.log(error)
  }
}
function handleAssignBrides(res: UserInfo) {
  const brides = (route.params.username as string).split('-')
  res.weddingInfo.brides = brides
  userInfo.value = res
}
function setLoading(value: boolean) {
  isLoading.value = value
}
</script>

<style lang="scss" scoped></style>
