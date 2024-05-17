<template>
  <banner />
  <myheader img="src/assets/img/homeheader.jpg" :header="$t('home.sitename')" :text="$t('home.header_sub')"
    :btns="[{ text: $t('home.showallacademies'), link: { name: 'Academies' } }]" />
  <v-container>
    <!-- system details -->
    <section>
      <detail v-if="items.length > 0" :header="$t('home.resume')" :cards="items" />
    </section>
  </v-container>

  <!-- System description  -->
  <DescriptiContextRow :title="$t('home.section1_header')" :text="$t('home.section1_detail')" :showbtn="1" />

  <v-container>
    <!-- Academies Cards -->
    <section>
      <h1 class="text-center brown-color mt-7 mb-7">{{ $t('home.Accademiessection_title') }}</h1>
      <v-row>
        <v-col cols="12" md="4" lg="3" v-for="academy in showacademies" :key="academy.id">
          <v-card class="academy rounded rounded-xl position-relative">
            <div>
              <div class="d-flex justify-center bgimage" :style="{ backgroundImage: `url(${academy.logo})` }">
              </div>

              <div class="mb-10 rounded rounded-lg" style="position: absolute;transform: translate(-100%,-40%);">
                <img class="rounded rounded-xl w-66" src="/src/assets/img/academylogo2.png" alt="">
              </div>
            </div>
            <div class="pt-10 mt-3">
              <h3 class="f-mediom brown-color-dark text-center mb-4">{{ academy.name }}</h3>
              <div class="mb-3 brown-color f-small text-center"><span>{{ academy.addres }}</span> <v-tooltip
                  activator="parent" location="bottom" >{{
                    academy.showAddress
                  }}
                </v-tooltip></div>
              <div class="mb-8 brown-color f-small text-center"><span>{{ $t('academy.list_phone') }} : {{ academy.phone
                  }}</span></div>

            </div>

          </v-card>
          <div style="transform: translate(-40%,-50%);">
            <router-link class="brown-bg text-center w-100 py-3 px-2 action rounded rounded-lg f-small btn"
              :to="{ name: 'Academy', params: { academy: academy.id } }" scroll-behavior="auto">
              {{ $t('academy.btn') }}
            </router-link>

          </div>

        </v-col>
      </v-row>
      <v-pagination class="mt-3 brown-color f-small" :length="showlen" v-model="current" @click="onPageChange(current)">
      </v-pagination>
    </section>
  </v-container>

  <!-- options -->
  <section class="mx-auto brown-bg py-3 pb-10">
    <h1 class="text-center text-white pt-5">{{ $t('home.optionheader') }}</h1>
    <v-row class="mx-auto mt-3">
      <v-col class="mx-auto" cols="12" md="3">
        <v-sheet class="mx-auto text-center" rounded='xl' :elevation="20" v-html="$t('home.optionone')"></v-sheet>
      </v-col>
      <v-col class="mx-auto" cols="12" md="3">
        <v-sheet class="mx-auto text-center" rounded='xl' :elevation="20" v-html="$t('home.optiontwo')"></v-sheet>
      </v-col>
      <v-col class="mx-auto text-center" cols="12" md="3">
        <v-sheet class="mx-auto text-center" rounded='xl' :elevation="20" v-html="$t('home.optionthree')"></v-sheet>

      </v-col>
      <v-col class="mx-auto text-center" cols="12" md="3">
        <v-sheet class="mx-auto text-center" rounded='xl' v-html="$t('home.optionfour')"></v-sheet>
      </v-col>
    </v-row>
  </section>

  <!-- footer -->
  <myfooter style="margin-top: -10px;" />


</template>

<script>
import { VSheet } from 'vuetify/lib/components/index.mjs'
import banner from '../components/Banner.vue'
import myheader from '../components/Header.vue'
import myfooter from '../components/Footer.vue'
import detail from '@/components/DetailCards.vue'
import DescriptiContextRow from '@/components/DescriptiContextRow.vue'

import { Callaxios } from '@/assets/composable/CallAxus'
import { shorttext } from '@/assets/helper/heper'
import Store from '@/store/Store'
export default {
  data() {
    return {
      items: [],
      academies: [],
      showacademies: [],
      total: 0,
      current: 0,
      showcount: 4,
      showlen: 0
    }
  },
  components: {
    banner, myheader, myfooter,
    VSheet, detail, DescriptiContextRow
  },
  mounted() {
    Callaxios('Front/SiteStatics', 'get', undefined, this.aftergetstatics);
    Callaxios('Front/GetAllCompanies', 'get', undefined, this.aftergtallacademies)
  },
  methods: {
    aftergetstatics(param) {
      var data = param.Data
      this.items.push(
        {
          id: 'allusers',
          count: data.Companies,
          text: this.$t('home.academies')
        },
        {
          id: 'allusers',
          count: data.Users,
          text: this.$t('home.allusers')
        },
        {
          id: 'allusers',
          count: data.Teachers,
          text: this.$t('home.teachers')
        },
        {
          id: 'allusers',
          count: data.Graduates,
          text: this.$t('home.gratuateds')
        }
      )
    },
    aftergtallacademies(param) {
      this.academies = []
      this.total = param.Data.length
      if (this.total > this.showcount) {
        var len = this.total % this.showcount == 0
        this.showlen = len ? this.total / this.showcount : (this.total / this.showcount) + 1
      } else {
        this.showlen = 1
      }
      //  this.showlen = this.total > this.showcount ? this.total / this.showcount : 1
      param.Data.filter((i) => this.academies.push({
        id: i.Id,
        name: i.Name,
        addres: shorttext(i.Location, 30),
        showAddress: i.Location,
        phone: i.Phone,
        count: i.CourseCount,
        logo: i.Logo == null ? window.location.origin + '/src/assets/img/academy3.jpg' : Store.state.backuploadurl + i.Logo
      }))
      this.onPageChange(1)
    },
    onPageChange(page) {
      this.showacademies = []
      for (var i = (page * this.showcount) - this.showcount; i < (page * this.showcount) && i < this.total; i++) {
        this.showacademies.push(this.academies[i])
      }
    },
  }
}
</script>
<style scoped>
@import '@/assets/css/Views/home.css';
</style>