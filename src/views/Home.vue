<template>
   <banner/>
   <myheader img="src/assets/img/123.jpg" :header="$t('message.sitename')" :text="$t('message.header_sub')" :btns="[{text:$t('message.showallcourses'),link:'/'}]"/>

   <v-container>

      <!-- system details -->
      <section class="s1">
      <h1 class="text-center sectionheader" style="">{{ $t('message.resume') }}</h1>
      <v-row class="text-center">   
        <v-col cols="2" class="d-xs-none d-md-none d-lg-flex"></v-col>   
      <v-col md="3" lg="2" sm="12" cols="12" class="my-auto ">
      <v-sheet 
      class="my-auto detailcol" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>+25</h2>
            <p>{{ $t('message.academies') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
      <v-col  md="3" lg="2" sm="12" cols="12" class="my-auto ">
      <v-sheet 
      class="my-auto" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto mx-auto my-auto text-center detail">
            <h2>+450</h2>
            <p>{{ $t('message.allusers') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
      <v-col md="3" lg="2" sm="12" cols="12" class="my-auto ">
      <v-sheet 
      class="my-auto" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>+66</h2>
            <p>{{ $t('message.teachers') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
     <v-col  md="3" lg="2" sm="12" cols="12" class="my-auto " >
      <v-sheet 
      class="my-auto" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>+256</h2>
            <p>{{ $t('message.gratuateds') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>

     </v-row>

      </section>
 
    </v-container>

     <!-- System description  -->
    <section class="s2">
      <v-row>
      <v-col sm="12" md="12" lg="12" class="my-auto s1text">
        <h1 style="padding-inline-start: 3%;font-size: 28px;color: aliceblue;">{{ $t('message.section1_header') }}</h1>
        <p style="font-size: 18px; color:aliceblue;">{{ $t('message.section1_detail') }}</p>

      </v-col>
      </v-row>
    </section>

    <v-container>
      <!-- Academies Cards -->
      <section>
        <h1 class="text-center sectionheader" style="font-size:30px;">{{ $t('message.Accademiessection_title') }}</h1>
        <v-row>
          <v-col cols="12" md="4" lg="4" v-for="academy in academies" :key="academy.id" >
            <v-card 
           class="mx-auto mt-5 academy" 
            >
          <v-img
          height="150"
          src="../assets/img/icons8-music-96.png"
          ></v-img>

          <v-card-item >
          <v-card-title >{{ academy.name }}</v-card-title>
          </v-card-item>

          <v-card-text>
          <div>{{ academy.addres }} - {{ academy.phone }}</div>
          </v-card-text>
          <v-card-actions style="  display: flex;justify-content: end;">
          <router-link
          :to="{name:'AcademyHome',params:{academy:academy.name}}"
          class="ma-2 mybtn"
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
        <v-pagination :length="4" style="margin-top: 3%;margin-bottom: 2%;">
        </v-pagination>
      </section>


    <!-- Class Cards  -->
    <!-- <section class="s3" >
      <h1 class="text-center sectionheader" style="font-size:30px;">{{ $t('message.section2_title') }}</h1>

      <v-row 
       style="margin-bottom: 5%;">
      <v-col v-for="myclass in classes" :key="myclass.id" cols="12" sm="6" md="4" lg="4">
        <v-card 
           class="mx-auto mt-5 classcard" 
            >
          <v-img
          cover=""
          height="200"
          :src="myclass.img"
          ></v-img>

          <v-card-item >
          <v-card-title >{{ myclass.name }}</v-card-title>
          <v-card-subtitle>{{ myclass.price }}</v-card-subtitle>
          </v-card-item>

          <v-card-text>
          <div>{{ myclass.description }}</div>
          </v-card-text>
          <v-card-actions style="  display: flex;justify-content: end;">
          <router-link
          to="/"
          class="ma-2 mybtn"
          >
          {{ $t('message.detail') }} &nbsp
        <v-icon
          start
          icon="fa fa-external-link"
        ></v-icon>
        </router-link>

       </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
    </section> -->

  </v-container>

  <!-- options -->
  <section class="s4 mx-auto">
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
<!-- 
      <v-col class="mx-auto" cols="12" md="4" lg="4">
        <v-sheet class="mx-auto"
         :height="200"
         :width="250"
         rounded='xl'
        ></v-sheet>
      </v-col>

      <v-col class="mx-auto" cols="12" md="4" lg="4">
        <v-sheet class="mx-auto"
         :height="200"
         :width="250"
        rounded='xl'
        ></v-sheet>
      </v-col> -->
      </v-row>
  </section>
<router-link to="/Lessons/1">جزئیات</router-link>

<!-- PRODUCTS -->
<!-- <h1 class=" sectionheader" style="font-size:30px;">محبوب ترین ساز ها</h1>
<v-row>
  <v-col class="center-class" cols="3" v-for="i in (1,2,3,4)">
    <div class="card">
    <h2>پیانو</h2>
    <div class="details">
      <ul class="text-center">
        <li><i class="fas fa-check"></i>Single Domain</li>
        <li><i class="fas fa-check"></i>10GB Disk Space</li>
        <li><i class="fas fa-check"></i>Single Domain</li>
        <li><i class="fas fa-check"></i>10GB Disk Space</li>
      </ul>
    </div>
    <p style="margin-inline-start: 15%;"><span>200,000,0000</span>ریال</p>
    <button style="margin-inline-start: 5%;">افزودن به سبد خرید</button>
  </div>

  </v-col>
</v-row> -->

  <!-- footer -->
    <!-- <myfooter/> -->

</template>

<script>
  import { VSheet } from 'vuetify/lib/components/index.mjs'
  import banner from '../components/Banner.vue'
  import myheader from '../components/Header.vue'
  import myfooter from '../components/Footer.vue'
  import config from '@/locales/config'
  
  export default {
    data(){
      return{
        classes :[
          {
            id:1,
            name:'پیانو',
            price:'100,000,000 ریال',
            img: window.location.origin +'/src/assets/img/piano.jpg',
            description: 'دوره شامل 15 جلسه 1 ساعته با ...'
          },
           {
            id:2,
            name:'گیتار',
            price:'150,000,000 ریال',
            img: window.location.origin +'/src/assets/img/gituar.jpg',
            description: '  دوره شامل 10 جلسه 1 ساعته با رایج ترین تخصص ها ...'
          },
           {
            id:3,
            name:'ویالون',
            price:'500,000,000,000 ریال',
            img: window.location.origin +'/src/assets/img/vialon.jpg',
            description: '  دوره شامل 10 جلسه 1 ساعته با رایج ترین تزبافباباددرالبا ها ...'
          }
        ]
        ,academies :[
          {
            id:1,
            name:'چگامه فردیس',
            addres:'کرج - فردیس، فلکه سوم خیابان ۳۳ جدید، پلاک 29',
            phone:'02636503521'
          },
          {
            id:2,
            name:'می ر سی',
            addres:'تهران - شیخ بهایی جنوبی، بلوار آزادگان، انتهای خیابان ۲۴ غربی، مجموعه فرهنگی ورزشی آفتاب',
            phone:'02188332195'
          },
          {
            id:1,
            name:'چگامه فرمانیه',
            addres:'تهران - فرمانیه بلوار اندرزگو نبش کوچه عبدالهی جنوبی پ 72 واحد 17',
            phone:'02122210307'
          }
          
        ]
      }
    },
    components:{
    banner, myheader,myfooter,
    VSheet
}
  }
</script>
<style scoped>
 
@import '../assets/css/home.css';
</style>