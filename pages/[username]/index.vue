<template>
  <div>
    <template v-if="isLoading">
      <p>Loading...</p>
    </template>
    <template v-if="!isLoading">
      <DesignOne v-if="user && user.package === 'design-one'" />
      <DesignTwo v-if="user && user.package === 'design-two'" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from '#imports'
import DesignOne from '~/templates/designone/index.vue'
import DesignTwo from '~/templates/designtwo/index.vue'
import { $fetch } from 'ofetch'
import { useRoute } from 'vue-router'
const isLoading = ref<boolean>(true)
const user = ref<UserInfo>()
const hasQuery = ref<boolean>(false)
const route = useRoute()
interface UserInfo {
  name: string
  email: string
  package: string
}
onMounted(() => {
  try {
    console.log('route.query.tosssss:', route.query.to)
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
    const userInfo = {
      name: 'John Doe',
      email: 'johndue@gmail.com',
      package: 'design-two',
    }
    user.value = userInfo
    console.log('responsess:', response)
  } catch (error) {
    console.log(error)
  }
}
function setLoading(value: boolean) {
  isLoading.value = value
}
</script>

<style lang="scss" scoped></style>
