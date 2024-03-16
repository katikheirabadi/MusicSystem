<template>
    <banner/>
    <myheader 
    img="src/assets/img/homeheader.jpg" 
    :header="$t('home.sitename')" 
    :text="$t('home.header_sub')"
    :btns="[{text:$t('home.showallacademies'),link:{name:'Academies'}}]"/>
    <v-container>
     <!-- system details -->
    <section class="s1">
    <detail v-if="items.length>0" :header="$t('home.resume')" :cards="items"/>
    </section>
    </v-container>

    <!-- System description  -->
    <Descripti9ontextRow :title="$t('home.section1_header')" :text=" $t('home.section1_detail') "/>

    <v-container >
    <!-- Academies Cards -->
    <section >
     <h1 class="text-center sectionheader">{{ $t('home.Accademiessection_title') }}</h1>
     <v-row >
       <v-col cols="12" md="4" lg="3" v-for="academy in showacademies" :key="academy.id" >
         <v-card 
         class="mx-auto mt-5 academy" 
         >
        <img :src="academy.logo">

       <v-card-item >
       <v-card-title class="text-center" >
        {{ academy.name }}
       </v-card-title>
       </v-card-item>

       <v-card-text>
       <div class="text-center">{{ academy.addres }} <br> {{ academy.phone }}
        <v-tooltip
        activator="parent"
        location="bottom"
        style="font-family: 'IRANSANS';"
        >{{ academy.showAddress }} 
        </v-tooltip>
      </div>
       </v-card-text>
       <v-card-actions class="d-flex justify-end">
       <router-link
       :to="{name:'Academy',params:{academy:academy.id}}"
       class=" mybtn"
       >
       {{ $t('home.details') }} &nbsp
      <v-icon
       start
       icon="fa fa-external-link"
     ></v-icon>
     </router-link>

     </v-card-actions>
     </v-card>
       
       </v-col>
      </v-row>
      <v-pagination :length="showlen" v-model="current"  @click="onPageChange(current)" style="margin-top: 3%;margin-bottom: 2%;" id="1">
     </v-pagination>
   </section>



</v-container>

<!-- options -->
<section class="s4 mx-auto"> 
  <h1 class="text-center text-white pt-10" style="font-size: 30px;">{{ $t('home.optionheader') }}</h1>
   <v-row>
    <v-col class="mx-auto" cols="12" md="3">
       <v-sheet class="mx-auto text-center"
        rounded='xl'
        :elevation="20"
        v-html="$t('home.optionone')"
      ></v-sheet>
    </v-col>
    <v-col class="mx-auto" cols="12" md="3">
       <v-sheet class="mx-auto text-center"
         rounded='xl'
        :elevation="20"
        v-html="$t('home.optiontwo')"
      ></v-sheet>
   </v-col>
   <v-col class="mx-auto text-center" cols="12" md="3">
    <v-sheet class="mx-auto text-center"
         rounded='xl'
        :elevation="20"
        v-html="$t('home.optionthree')"
      ></v-sheet>
  
   </v-col>
   <v-col class="mx-auto text-center" cols="12" md="3">
    <v-sheet class="mx-auto text-center"
         rounded='xl'
         v-html="$t('home.optionfour')"
      ></v-sheet>
   </v-col>
   </v-row>
</section>

<!-- footer -->
 <myfooter style="margin-top: -10px;"/>

 
</template>

<script>
  import { VSheet } from 'vuetify/lib/components/index.mjs'
  import banner from '../components/Banner.vue'
  import myheader from '../components/Header.vue'
  import myfooter from '../components/Footer.vue'
  import detail from '@/components/DetailCards.vue'
  import Descripti9ontextRow from '@/components/Descripti9ontextRow.vue'

  import { Callaxios } from '@/assets/composable/CallAxus'
  import {shorttext} from '@/assets/helper/heper'
  import Store from '@/store/Store'
  export default {
    data(){
      return{
        items:[],
        academies :[],
        showacademies :[],
        total : 0,
        current :0,
        showcount:4,
        showlen:0
      }
    },
    components:{
    banner, myheader,myfooter,
    VSheet,detail,Descripti9ontextRow
    },
    mounted(){
      Callaxios('Frant/SiteStatics','get',undefined,this.aftergetstatics);
      Callaxios('Frant/GetAllCompanies','get',undefined,this.aftergtallacademies)
    },
    methods: {
      aftergetstatics(param){
        var  data = param.Data
        this.items.push(
          {
            id:'allusers',
            count:data.Companies,
            text:this. $t('home.academies')
          },
          {
            id:'allusers',
            count:data.Users,
            text:this. $t('home.allusers')
          },
          {
            id:'allusers',
            count:data.Teachers,
            text:this. $t('home.teachers')
          },
          {
            id:'allusers',
            count:data.Graduates,
            text:this. $t('home.gratuateds')
          }
        )
      },
      aftergtallacademies(param){
        this.academies = []
        this.total = param.Data.length
        if(this.total> this.showcount){
          var len= this.total%this.showcount==0
          this.showlen = len?this.total / this.showcount:(this.total / this.showcount)+1
        }else{
          this.showlen = 1
        }
      //  this.showlen = this.total > this.showcount ? this.total / this.showcount : 1
        param.Data.filter((i)=> this.academies.push({
          id : i.Id,
          name : i.Name,
          addres : shorttext(i.Location,30),
          showAddress : i.Location,
          phone : i.Phone,
          count : i.CourseCount,
          logo : i.Logo == null? window.location.origin+'/src/assets/img/academy.png' :Store.state.backuploadurl+ i.Logo
        }))
        this.onPageChange(1)
      },
      onPageChange(page) {
      this.showacademies = []
      for(var i=(page* this.showcount )-this.showcount; i< (page*this.showcount) && i < this.total;i++){
        this.showacademies.push(this.academies[i])
      }
    },
    }
  }
</script>
<style scoped>
@import '@/assets/css/Views/home.css';
</style>