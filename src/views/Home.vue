<template>
    <banner/>
    <myheader img="src/assets/img/homeheader.jpg" :header="$t('message.sitename')" :text="$t('message.header_sub')" :btns="[{text:$t('message.showallacademies'),link:{name:'Academies'}}]"/>
    <v-container>
     <!-- system details -->
    <section class="s1">
    <detail :header="$t('home.resume')" :cards="[{count:companies,text:$t('home.academies')},{count:users,text:$t('home.allusers')},{count:teachers,text:$t('home.teachers')},{count:graduates,text:$t('home.gratuateds')}]"/>
    </section>
   
    </v-container>

    <!-- System description  -->
    <section class="s2">
    <v-row>
     <v-col sm="12" md="12" lg="12" class="my-auto s1text">
     <h1 style="padding-inline-start: 3%;font-size: 28px;color: aliceblue;">{{ $t('home.section1_header') }}</h1>
     <p style="font-size: 18px; color:aliceblue;">{{ $t('home.section1_detail') }}</p>

    </v-col>
    </v-row>
    </section>

    <v-container >
    <!-- Academies Cards -->
    <section >
     <h1 class="text-center sectionheader" style="font-size:30px;">{{ $t('message.Accademiessection_title') }}</h1>
     <v-row >
       <v-col cols="12" md="3" lg="3" v-for="academy in showacademies" :key="academy.id" >
         <v-card 
        class="mx-auto mt-5 academy" 
         >
       <img :src="academy.logo" style="margin-inline-start: 27%;width: 45% !important;max-height: 30% !important;">

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
       <v-card-actions style="  display: flex;justify-content: end;">
       <router-link
       :to="{name:'Academy',params:{academy:academy.name}}"
       class=" mybtn"
       >
       {{ $t('message.details') }} &nbsp
     <v-icon
       start
       icon="fa fa-external-link"
     ></v-icon>
     </router-link>

    </v-card-actions>
   </v-card>
       
       </v-col>
     </v-row>
     <v-pagination :length="total/showcount" v-model="current"  @click="onPageChange(current)" style="margin-top: 3%;margin-bottom: 2%;" id="1">
     </v-pagination>
   </section>



</v-container>

<!-- options -->
<section class="s4 mx-auto mb-8">
   <v-row>
     <v-col class="mx-auto" cols="12" md="3" lg="3">
       <v-sheet class="mx-auto text-center"
      :height="100"
      :width="100"
      :elevation="5"
      rounded='xl'
     >
     <v-img
     src="../assets/img/icons8-teacher-100.png"
     ></v-img>
     </v-sheet>
     <p class="text-center text-white" style="margin-top: 5%;">آموزشگاه های متفاوت در شهر های متفاوت <br/>آموزشگاهای متفاوتی دارد اینجااااا</p>

   </v-col>
   <v-col class="mx-auto" cols="12" md="3" lg="3">
       <v-sheet class="mx-auto text-center"
      :height="100"
      :width="100"
      :elevation="5"
      rounded='xl'
     >
     <v-img
     src="../assets/img/icons8-department-100.png"
     ></v-img>
     </v-sheet>
     <p class="text-center text-white" style="margin-top: 5%;">آموزشگاه های متفاوت در شهر های متفاوت <br/>آموزشگاهای متفاوتی دارد اینجااااا</p>

   </v-col>
   <v-col class="mx-auto" cols="12" md="3" lg="3">
       <v-sheet class="mx-auto text-center"
      :height="100"
      :width="100"
      :elevation="5"
      rounded='xl'
     >
     <v-img
     src="../assets/img/icons8-acoustic-100 (1).png"
     ></v-img>
     </v-sheet>
     <p class="text-center text-white" style="margin-top: 5%;">آموزشگاه های متفاوت در شهر های متفاوت <br/>آموزشگاهای متفاوتی دارد اینجااااا</p>

   </v-col>
   <v-col class="mx-auto" cols="12" md="3" lg="3">
       <v-sheet class="mx-auto text-center"
      :height="100"
      :width="100"
      :elevation="5"
      rounded='xl'
     >
     <v-img
     src="../assets/img/icons8-user-groups-64.png"
     ></v-img>
     </v-sheet>
     <p class="text-center text-white" style="margin-top: 5%;">آموزشگاه های متفاوت در شهر های متفاوت <br/>آموزشگاهای متفاوتی دارد اینجااااا</p>

   </v-col>
   </v-row>
</section>

<!-- footer -->
 <myfooter/>

 
</template>

<script>
  import { VSheet } from 'vuetify/lib/components/index.mjs'
  import banner from '../components/Banner.vue'
  import myheader from '../components/Header.vue'
  import myfooter from '../components/Footer.vue'
  import detail from '@/components/DetailCards.vue'

  import { Callaxios } from '@/assets/composable/CallAxus'
  import {shorttext} from '@/assets/helper/heper'
  export default {
    data(){
      return{
        users:0,
        teachers:0,
        companies : 0,
        graduates:0,
        academies :[],
        showacademies :[],
        total : 0,
        current :0,
        showcount:4
      }
    },
    components:{
    banner, myheader,myfooter,
    VSheet,detail
    },
    mounted(){
      Callaxios('Home/SiteStatics','get',undefined,this.aftergetstatics);
      Callaxios('Home/GetAllCompanies','get',undefined,this.aftergtallacademies)
    },
    methods: {
      aftergetstatics(param){
        var  data = param.Data
        setInterval(()=>{
          if(this.users < data.Users)
          {
            this.users ++;
          }
          if(this.teachers < data.Teachers)
          {
            this.teachers ++;
          }
          if(this.companies < data.Companies)
          {
            this.companies ++;
          }
          if(this.graduates < data.Graduates)
          {
            this.graduates ++;
          }
        },80)
      },
      aftergtallacademies(param){
        this.academies = []
        this.total = param.Data.length
        param.Data.filter((i)=> this.academies.push({
          id : i.Id,
          name : i.Name,
          addres : shorttext(i.Location,30),
          showAddress : i.Location,
          phone : i.Phone,
          count : i.CourseCount,
          logo : i.Logo == null? window.location.origin+'/src/assets/img/academy.png' :'https://tms.bamdad.co/'+ i.Logo
        }))
        this.onPageChange(1)
      },
      onPageChange(page) {
      this.showacademies = []
      for(var i=(page* this.showcount )-this.showcount; i< (page*this.showcount);i++){
        this.showacademies.push(this.academies[i])
      }
    },
    }
  }
</script>
<style scoped>
@import '@/assets/css/Views/home.css';
</style>