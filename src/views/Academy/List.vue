<template>
  <banner />
  <myheader :img="header" :header="$t('home.sitename')" :text="$t('academy.list_header_subtitle')"
    :btns="[{ text: $t('academy.list_back'), link: '/' }]" />
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" md="4" xl="3" v-for="academy in academies" :key="academy.id">

        <v-card class="academy rounded rounded-xl position-relative">
         
            <div class="d-flex justify-center bgimage" :style="{ backgroundImage: `url(${academy.logo})` }">
            </div>
            <div class="mb-10 rounded rounded-lg d-flex justify-center" style="position: absolute;left: 50%;transform: translate(-50%,-50%);">
              <img class="rounded rounded-xl w-75" src="/src/assets/img/academylogo2.png" alt="">
            </div>
      
          <div class="pt-10 mt-4">
            <h3 class="f-mediom brown-color-dark text-center mb-3">{{ academy.name }}</h3>
            <div class="mb-3 brown-color f-small text-center"><span>{{ academy.addres }}</span></div>
            <div class="mb-8 brown-color f-small text-center"><span>{{ $t('academy.list_phone') }} : {{ academy.phone
                }}</span></div>

          </div>
         
        </v-card>
        <div class="d-flex justify-center" style="transform: translate(0%,-50%);">
          <router-link class="brown-bg text-center py-3 px-2 action rounded rounded-lg f-small"
            :to="{ name: 'Academy', params: { academy: academy.id } }" scroll-behavior="auto">
            {{ $t('academy.btn') }}
          </router-link>

        </div>
      </v-col>
    </v-row>
  </v-container>
  <myfooter />
</template>
<script>
import banner from '@/components/Banner.vue'
import myheader from '@/components/Header.vue'
import myfooter from '@/components/Footer.vue'
import { Callaxios } from '@/assets/composable/CallAxus'
import { shorttext } from '@/assets/helper/heper'
import Store from '@/store/Store'
export default {
  components: {
    banner, myheader, myfooter
  },
  data() {
    return {
      academies: [],
      header: window.location.origin + '/src/assets/img/academy3.jpg'
    }
  }, mounted() {
    Callaxios('Front/GetAllCompanies', 'get', undefined, this.aftergtallacademies)
  },
  methods: {
    aftergtallacademies(param) {
      this.academies = []
      param.Data.filter((i) => this.academies.push({
        id: i.Id,
        name: i.Name,
        addres: shorttext(i.Location, 40),
        showAddress: i.Location,
        phone: i.Phone,
        count: i.CourseCount,
        logo: i.Logo == null ? window.location.origin + '/src/assets/img/academy3.jpg' : Store.state.backuploadurl + i.Logo
      }))
    }
  }
}
</script>
<style scoped>
@import url(../../assets/css/Views/Academy/list.css);
</style>