<template>
    <banner/>
    <myheader 
    :img="header"
    :header="$t('home.sitename')"
    :text="$t('academy.list_header_subtitle')"
    :btns="[{text: $t('academy.list_back'),link:'/'}]"
    />
    <v-container class="mt-5" style="margin-bottom: 3%;">
    <v-row>
          <v-col cols="12" md="4" xl="3" v-for="academy in academies" :key="academy.id" >
          <v-card 
          class="mx-auto academy" 
          >
          <img :src="academy.logo">

          <v-card-item >
          <v-card-title >{{ academy.name }}</v-card-title>
          </v-card-item>

          <v-card-text>
          <div><span>{{ academy.addres }}</span></div>
          <div><span>{{ $t('academy.list_phone') }}  : {{ academy.phone }}</span></div>
          </v-card-text>
          <v-card-actions class="action">
          <router-link
          :to="{name:'Academy',params:{academy:academy.id}}"
          class="ma-2 mybtn"
          scroll-behavior="auto"
          >
          {{ $t('academy.btn') }} &nbsp
         <v-icon
          start
          icon="fa fa-external-link"
        ></v-icon>
        </router-link>

       </v-card-actions>
            </v-card>
          
          </v-col>
    </v-row>
    </v-container>
    <myfooter/>
</template>
<script>
import banner from '@/components/Banner.vue'
import myheader from '@/components/Header.vue'
import myfooter from '@/components/Footer.vue'
import { Callaxios } from '@/assets/composable/CallAxus'
import {shorttext} from '@/assets/helper/heper'

export default{
  components:{
    banner,myheader,myfooter
  },
  data(){
    return {
      academies :[],
      header : window.location.origin+'/src/assets/img/academydefult.png'
    }
  },mounted(){
    Callaxios('Frant/GetAllCompanies','get',undefined,this.aftergtallacademies)
  },
  methods:{
    aftergtallacademies(param){
      this.academies = []
      param.Data.filter((i)=> this.academies.push({
          id : i.Id,
          name : i.Name,
          addres : shorttext(i.Location,50),
          showAddress : i.Location,
          phone : i.Phone,
          count : i.CourseCount,
          logo : window.location.origin+'/src/assets/img/academydefult.png'
         }))
    }
  }
}
</script>
<style scoped>
@import url(../../assets/css/Views/Academy/list.css);
</style>