<template>
  <div
    :class="{
      'h-fit min-h-[100vh]': true,
      'bg-neutral-950 text-white':
        userInfo && userInfo.package.name === 'design-two',
    }"
  >
    <template v-if="isLoading">
      <p>Loading...</p>
    </template>
    <template v-if="!isLoading">
      <div
        class="mobile-wrapper mx-auto w-[100vw] min-w-[350px] max-w-[480px] shadow-inner"
      >
        <DesignOne
          v-if="userInfo && userInfo.package.name === 'design-one'"
          :user-info="userInfo"
        />
        <DesignTwo
          v-if="userInfo && userInfo.package.name === 'design-two'"
          :user-info="userInfo"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable no-console */
import { ref, onMounted } from '#imports'
import DesignOne from '~/templates/designone/index.vue'
import DesignTwo from '~/templates/designtwo/index.vue'
import { $fetch } from 'ofetch'
import { useRoute } from 'vue-router'
import type { UserInfo } from '~/shared/interfaces.ts'

defineOptions({
  name: 'SectionUsername',
})

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
        timeout: 3000,
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
        couples: {
          bride: {
            name: 'Siska',
            fullName: 'Siska Dwi Putri Yuliansyah',
            parents: {
              father: 'Lontang',
              mother: 'Lantung',
            },
          },
          groom: {
            name: 'Agesta',
            fullName: 'Agesta Budy Saputra',
            parents: {
              father: 'Thoriq',
              mother: 'Fuji',
            },
          },
        },
        akad: {
          date: '2024/08/25',
          time: '13:00',
          location: {
            name: `Masjid Jami' Al-Falaah`,
            address: `Jl. Aup Bar RT 03/ RW 10 Pasar Minggu,
          Jakarta Selatan, DKI Jakarta 12540`,
            maps: 'https://maps.app.goo.gl/P6v2EhcSwnZ5Dk9KA',
          },
        },
        reception: {
          date: '2024/08/25',
          time: '15:00',
          location: {
            name: `Masjid Jami' Al-Falaah`,
            address: `Jl. Aup Bar RT 03/ RW 10 Pasar Minggu,
          Jakarta Selatan, DKI Jakarta 12540`,
            maps: 'https://maps.app.goo.gl/P6v2EhcSwnZ5Dk9KA',
          },
        },
        endTime: {
          date: '2024/08/25',
          time: '17:00',
        },
        loveStory: [
          {
            date: '2022/09/12',
            image: {
              url: 'https://hi.momenkita.id/wp-content/uploads/2024/03/BRIDE-1--768x512.jpg',
              template: 'horizontal', // 'horizontal' | 'vertical'
            },
            title: 'Awal Bertemu',
            desc: 'Kami bertemu di sebuah acara yang diadakan oleh teman kami.',
          },
          {
            date: '2022/09/12',
            image: {
              url: 'https://hi.momenkita.id/wp-content/uploads/2024/03/FOOTER-1--768x512.jpg',
              template: 'horizontal', // 'horizontal' | 'vertical'
            },
            title: 'Melamarku',
            desc: `Setelah sekian tahun cerita panjang kita, tepat pada tanggal 30
            april 2023 dia datang dengan niat serius membawa keluarganya untuk melamarku.`,
          },
          {
            date: '2022/09/12',
            image: {
              url: 'https://hi.momenkita.id/wp-content/uploads/2024/03/BRIDE-1--768x512.jpg',
              template: 'horizontal', // 'horizontal' | 'vertical'
            },
            title: 'Mengikat Janji',
            desc: `Di tanggal 30 September 2023 di mulainya awal cerita bersama
            sebagai keluarga. Semoga langkah kami sellau diridhoi oleh Allah SWT.`,
          },
        ],
        banks: [
          {
            bank: 'BCA', // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
            number: '0035994426',
            name: 'Agesta Budy Saputra',
          },
          {
            bank: 'BRI', // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
            number: '0035994426',
            name: 'Siska Dwi Putri Yuliansyah',
          },
          {
            bank: 'BNI', // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
            number: '0035994426',
            name: 'Agesta Budy Saputra',
          },
          {
            bank: 'JENIUS', // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
            number: '0035994426',
            name: 'Siska Dwi Putri Yuliansyah',
          },
        ],
        gallery: {
          template: 'template-6',
          images: [
            [
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-3.png',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-banner-1-compressed.jpg',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-6.png',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-4.png',
              },
            ],
            [
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-3.png',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-banner-1-compressed.jpg',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-6.png',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-4.png',
              },
            ],
          ],
        },
      },
    }
    // handleAssignBrides(res)
    userInfo.value = res

    console.log('res:', res)
    console.log('response:', response)
  } catch (error) {
    console.log(error)
    const res = {
      profile: {
        name: 'Agesta',
        email: 'asd@asd.com',
      },
      package: {
        name: 'design-two',
      },
      weddingInfo: {
        couples: {
          bride: {
            name: 'Siska',
            fullName: 'Siska Dwi Putri Yuliansyah',
            parents: {
              father: 'Lontang',
              mother: 'Lantung',
            },
          },
          groom: {
            name: 'Agesta',
            fullName: 'Agesta Budy Saputra',
            parents: {
              father: 'Thoriq',
              mother: 'Fuji',
            },
          },
        },
        akad: {
          date: '2024/08/25',
          time: '13:00',
          location: {
            name: `Masjid Jami' Al-Falaah`,
            address: `Jl. Aup Bar RT 03/ RW 10 Pasar Minggu,
            Jakarta Selatan, DKI Jakarta 12540`,
            maps: 'https://maps.app.goo.gl/P6v2EhcSwnZ5Dk9KA',
          },
        },
        reception: {
          date: '2024/08/25',
          time: '15:00',
          location: {
            name: `Masjid Jami' Al-Falaah`,
            address: `Jl. Aup Bar RT 03/ RW 10 Pasar Minggu,
            Jakarta Selatan, DKI Jakarta 12540`,
            maps: 'https://maps.app.goo.gl/P6v2EhcSwnZ5Dk9KA',
          },
        },
        endTime: {
          date: '2024/08/25',
          time: '17:00',
        },
        loveStory: [
          {
            date: '2022/09/12',
            image: {
              url: 'https://hi.momenkita.id/wp-content/uploads/2024/03/BRIDE-1--768x512.jpg',
              template: 'horizontal', // 'horizontal' | 'vertical'
            },
            title: 'Awal Bertemu',
            desc: 'Kami bertemu di sebuah acara yang diadakan oleh teman kami.',
          },
          {
            date: '2022/09/12',
            image: {
              url: 'https://hi.momenkita.id/wp-content/uploads/2024/03/FOOTER-1--768x512.jpg',
              template: 'vertical', // 'horizontal' | 'vertical'
            },
            title: 'Melamarku',
            desc: `Setelah sekian tahun cerita panjang kita, tepat pada tanggal 30
            april 2023 dia datang dengan niat serius membawa keluarganya untuk melamarku.`,
          },
          {
            date: '2022/09/12',
            image: {
              url: 'https://hi.momenkita.id/wp-content/uploads/2024/03/BRIDE-1--768x512.jpg',
              template: 'horizontal', // 'horizontal' | 'vertical'
            },
            title: 'Mengikat Janji',
            desc: `Di tanggal 30 September 2023 di mulainya awal cerita bersama
            sebagai keluarga. Semoga langkah kami sellau diridhoi oleh Allah SWT.`,
          },
        ],
        banks: [
          {
            bank: 'BCA', // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
            number: '0035994426',
            name: 'Agesta Budy Saputra',
          },
          {
            bank: 'BRI', // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
            number: '0035994426',
            name: 'Siska Dwi Putri Yuliansyah',
          },
          {
            bank: 'BNI', // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
            number: '0035994426',
            name: 'Agesta Budy Saputra',
          },
          {
            bank: 'JENIUS', // 'BCA' | 'BNI' | 'BRI' | 'Mandiri'
            number: '0035994426',
            name: 'Siska Dwi Putri Yuliansyah',
          },
        ],
        gallery: {
          template: 'template-6',
          images: [
            [
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-3.png',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-banner-1-compressed.jpg',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-6.png',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-4.png',
              },
            ],
            [
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-3.png',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-banner-1-compressed.jpg',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-6.png',
              },
              {
                url: 'https://raw.githubusercontent.com/agestasaputra/osd-assets/master/siska-agesta/img-gallery-4.png',
              },
            ],
          ],
        },
      },
    }
    // handleAssignBrides(res)
    userInfo.value = res
    console.log('res:', res)
  }
}
// function handleAssignBrides(res: UserInfo) {
//   const brides = (route.params.username as string).split('-')
//   res.weddingInfo.brides = brides
//   res.weddingInfo.couples.bride.name = brides[0]
//   res.weddingInfo.couples.groom.name = brides[1]
//   userInfo.value = res
// }
function setLoading(value: boolean) {
  isLoading.value = value
}
</script>

<style lang="scss" scoped></style>
