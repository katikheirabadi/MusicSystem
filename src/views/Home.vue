<template>
   <banner/>
   <myheader :header="$t('message.sitename')" :text="$t('message.header_sub')" :btns="[{text:$t('message.showallcourses'),link:'/'}]"/>

   <v-container>

      <!-- system details -->
      <section class="s1">
      <h1 class="text-center sectionheader" style="">سوابق کاروساز...</h1>
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
    <!-- Class Cards  -->
    <section class="s3" >
      <h1 class="text-center sectionheader" style="font-size:30px;">{{ $t('message.section2_title') }}</h1>

      <v-row 
       style="margin-bottom: 5%;">
      <v-col v-for="myclass in classes" :key="myclass.id" cols="6" sm="6" md="4" lg="4">
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
          جزئیات &nbsp
        <v-icon
          start
          icon="mdi-arrow-left"
        ></v-icon>
        </router-link>

       </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
    </section>
  </v-container>

  <!-- options -->
  <section class="s4 mx-auto my-auto">
      <v-row>
        <v-col class="mx-auto" cols="12" md="4" lg="4">
          <v-sheet class="mx-auto text-center"
         :height="200"
         :width="300"
         rounded='xl'
         style="color: black;"
        >
        <v-icon style="font-size: 100px;" icon="	fa fa-motorcycle" />
            </v-sheet>
      </v-col>

      <v-col class="mx-auto" cols="12" md="4" lg="4">
        <v-sheet class="mx-auto"
         :height="200"
         :width="300"
         rounded='xl'
        ></v-sheet>
      </v-col>

      <v-col class="mx-auto" cols="12" md="4" lg="4">
        <v-sheet class="mx-auto"
         :height="200"
         :width="300"
        rounded='xl'
        ></v-sheet>
      </v-col>
      </v-row>
  </section>
<br><br><br>



  <!-- footer -->
 <myfooter/>

</template>

<script>
  import { VSheet } from 'vuetify/lib/components/index.mjs'
  import banner from '../components/Banner.vue'
  import myheader from '../components/Header.vue'
  import myfooter from '../components/Footer.vue'
  import '../assets/css/home.css'
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
      }
    },
    components:{
    banner, myheader,myfooter,
    VSheet
},
    updated(){
    var lang = this.$route.params.lang
    this.$vuetify.locale.current = lang
      this.$i18n.locale=lang
      
  },
  mounted(){
    var lang = this.$route.params.lang
    this.$vuetify.locale.current = lang
      this.$i18n.locale=lang
      
  }
  }
</script>

