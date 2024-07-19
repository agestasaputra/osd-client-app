<template>
  <div>
    <template v-if="isLoading">
      <p>Loading...</p>
    </template>
    <template v-if="!isLoading">
      <DesignOne v-if="user && user.package === 'design-one'"/>
      <DesignTwo v-if="user && user.package === 'design-two'"/>
    </template>
  </div>
</template>

<script setup>
  import DesignOne from '~/templates/designone/index.vue'
  import DesignTwo from '~/templates/designtwo/index.vue'
  const isLoading = ref(true)
  const user = ref(null)
  const hasQuery = ref('')
  const route = useRoute()
  onMounted(() => {
    console.log('route.query.to:', route.query.to)
    fetch
    setTimeout(() => {
      hasQuery.value = route.query && route.query.guest ? true : false
      setLoading(false)
      fetchUserInfo()
    }, 1000);
  })
  async function fetchUserInfo() {
    try {
      const response = await $fetch('https://api.restful-api.dev/objects', {
        method: 'GET',
      })
      if (response) {
        const userInfo = {
          name: 'John Doe',
          email: 'johndue@gmail.com',
          package: 'design-two'
        }
        user.value = userInfo
      }
      console.log('response:', response)
    } catch (error) {
      console.log(error)
    }
  }
  function setLoading(value) {
    isLoading.value = value
  }
</script>

<style lang="scss" scoped>
</style>