<template>
   <banner/>
   <myheader :header="$t('message.sitename')" :text="$t('message.header_sub')" :btns="[{text:$t('message.showallcourses'),link:'/'}]"/>

   <v-container>

    
    <!-- System description  -->
    <section>
      <v-row>
        <v-col lg="1" class="d-sm-none d-xs-none d-md-none d-lg-flex"></v-col>
        <v-col sm="12" md="7" lg="7" class="text-center my-auto s1text">
          <h1 style="font-size: 30px;">{{ $t('message.section1_header') }}</h1>
          <p style="font-size: 18px;">{{ $t('message.section1_detail') }}</p>
      
        </v-col>
        <v-col sm="12" md="5" lg="4" class="mx-auto">
          <v-img class="s1img"
          src="../assets/img/3.jpg"
          >
          </v-img>
        </v-col>
      </v-row>
    </section>
    <v-img 
      src="../assets/img/devider.png"
      width="100%"
      height="3+200"
      class="mx-auto mt-5"
      ></v-img>


    <!-- system details -->
     <section>
      <h1 class="text-center" style="font-size:30px;margin-bottom: 1%;">سوابق کاروساز...</h1>
      <v-row>      
      <v-col md="2" lg="2" sm="12" class="my-auto mx-auto">
      <v-sheet 
      class="my-auto" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>+25</h2>
            <p>{{ $t('message.academies') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
      <v-col  md="2" lg="2" sm="12" class="my-auto mx-auto">
      <v-sheet 
      class="my-auto" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>+450</h2>
            <p>{{ $t('message.allusers') }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
      <v-col md="2" lg="2" sm="12" class="my-auto mx-auto">
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
     <v-col  md="2" lg="2" sm="12" class="my-auto mx-auto" >
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
 

    <!-- <v-img
    src="../assets/img/22.png"
    width="60%"
    class="mx-auto  mt-9"
    ></v-img>
     -->
     <v-img 
      src="../assets/img/devider.png"
      width="100%"
      height="3+200"
      class="mx-auto mb-5 mt-15"
      ></v-img>
    <!-- Class Cards  -->
   

    <section >
      <h1 class="text-center" style="font-size:30px;margin-bottom: 1%;">{{ $t('message.section2_title') }}</h1>

      <v-row 
       style="margin-bottom: 5%;">
      <v-col v-for="myclass in classes" :key="myclass.id" sm="6" md="4" lg="4">
        <v-card 
           class="mx-auto mt-10 classcard" 
            >
          <v-img
          cover=""
          height="250"
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

    <v-img 
      src="../assets/img/devider.png"
      width="100%"
      height="3+200"
      class="mx-auto mb-5"
      ></v-img>


  </v-container>

 

  <v-img
    src="../assets/img/22.png"
    width="60%"
    class="mx-auto mt-9"
  ></v-img>

<!-- footer -->
</template>

<script>
  import { VSheet } from 'vuetify/lib/components/index.mjs'
  import banner from '../components/Banner.vue'
  import myheader from '../components/Header.vue'
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
    banner, myheader,
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

