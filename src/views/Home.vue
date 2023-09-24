<template>
   <banner/>
   <myheader/>

   <v-container>
    <!-- System description  -->
    <section>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" class="text-center my-auto">
          <h1 style="font-size: 50px;">{{ $t('message.section1_header') }}</h1>
          <p style="font-size: 20px;">{{ $t('message.section1_detail') }}</p>
      
        </v-col>
        <v-col cols="12" sm="4" md="6" lg="6" class="mx-auto">
          <v-img
          src="../assets/img/3.jpg"
          >
          </v-img>
        </v-col>
      </v-row>
    </section>

    <v-img
    src="../assets/img/22.png"
    width="60%"
    class="mx-auto"
    ></v-img>
    
    <!-- Class Cards  -->
    <section >
      <v-sheet
      class="rounded-shaped text-center pt-3"
      max-width="250"
      elevation="15"
      height="60"
      width="100%"
      style="transform: translate(10%,20%);border: 3px solid black;"
    >
  <h1 style="font-weight: bold;">{{ $t('message.section2_title') }}</h1>
  </v-sheet>
      <v-row elevation="15" style="border: solid 2px gray;border-radius: 60px; box-shadow: 3px 15px 15px 15px hsla(0, 1%, 55%, 0.701);margin-bottom: 5%;">
      <v-col cols="12" sm="6" md="4">
        <v-card 
          :loading="loading"
           class="mx-auto my-12 classcard "  >

    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="3"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover=""
      height="250"
      src="../assets/img/piano.jpg"
    ></v-img>

    <v-card-item >
      <v-card-title >Piano</v-card-title>
      <v-card-subtitle>5,000,000 IRR</v-card-subtitle>
    </v-card-item>

    <v-card-text>
    <div>Small plates, salads & sandwiches - an ...</div>
    </v-card-text>
    

    <v-card-actions>
      <v-btn
        class="ma-2 mybtn"
        color="white"
              >
        <v-icon
          start
          icon="mdi-arrow-left"
        ></v-icon>
        Back
      </v-btn>

    </v-card-actions>
  </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card 
          :loading="loading"
           class="mx-auto my-12 classcard "  >

    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="3"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover=""
      height="250"
      src="../assets/img/vialon.jpg"
    ></v-img>

    <v-card-item >
      <v-card-title >Piano</v-card-title>
      <v-card-subtitle>5,000,000 IRR</v-card-subtitle>
    </v-card-item>

    <v-card-text>
    <div>Small plates, salads & sandwiches - an ...</div>
    </v-card-text>
    

    <v-card-actions>
      <v-btn
        class="ma-2 mybtn"
        color="white"      >
        <v-icon
          start
          icon="mdi-arrow-left"
        ></v-icon>
        Back
      </v-btn>

    </v-card-actions>
  </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card 
          :loading="loading"
           class="mx-auto my-12 classcard "  >

    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="3"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover=""
      height="250"
      src="../assets/img/gituar.jpg"
    ></v-img>

    <v-card-item >
      <v-card-title >Piano</v-card-title>
      <v-card-subtitle>5,000,000 IRR</v-card-subtitle>
    </v-card-item>

    <v-card-text>
    <div>Small plates, salads & sandwiches - an ...</div>
    </v-card-text>
    

    <v-card-actions>
      <v-btn
        class="ma-2 mybtn"
        color="white"
      >
        <v-icon
          start
          icon="mdi-arrow-left"
        ></v-icon>
        Back
      </v-btn>

    </v-card-actions>
  </v-card>
      </v-col>
    </v-row>
    </section>

    <v-img
    src="../assets/img/22.png"
    width="60%"
    class="mx-auto"
    ></v-img>
    
  </v-container>

  <!-- system details -->
  <v-row class="mx-auto" style="background-image: url('http://localhost:3000/src/assets/img/bg.webp');background-repeat: repeat;height: auto;padding-top:4.5%;padding-bottom: 4.5%;">
   <v-col cols="3" md="3" sm="12" class="mx-auto my-auto">
    <v-hover v-slot="{ isHovering, props }">
    <v-sheet v-bind="props" 
    :class="{'bg-darken-2':isHovering}" 
    :rounded="'xl'"
     class="d-flex bg-grey-lighten-3 text-h2  mx-auto my-auto v-card--reveal" 
     :height="200" 
     :width="300"
     
     >
      <v-fab-transition>
            <v-sheet
           v-if="isHovering"
              :rounded="'xl'"
              class="d-flex transition-fast-in-fast-out bg-grey-lighten-3 text-h2  mx-auto my-auto text-center v-card--reveal p-3"
              style="height: 100%;padding-top: 25%;"
            >
             <h2>+25</h2>
            </v-sheet>
            <v-sheet
              :rounded="'xl'"
              class="d-flex transition-fast-in-fast-out bg-grey-lighten-3 text-h2  mx-auto my-auto text-center v-card--reveal p-3"
              style="height: 100%;padding-top: 25%;font-family: 'IRANSANS';"
            >
            <h5>فارع التحصیلان </h5>
           </v-sheet>
          </v-fab-transition>
          <!-- <h2></h2> -->
    </v-sheet>
  </v-hover>
  </v-col>

  <v-col cols="3" md="3" sm="12" class="mx-auto my-auto">
    <v-hover v-slot="{ isHovering, props }">
    <v-sheet v-bind="props" 
    :class="{'bg-darken-2':isHovering}" 
    :rounded="'xl'"
     class="d-flex bg-grey-lighten-3 mx-auto my-auto v-card--reveal" 
     :height="200" 
     :width="300"
     
     >
      <v-fab-transition>
            <v-sheet
           v-if="isHovering"
              :rounded="'xl'"
              class="d-flex transition-fast-in-fast-out bg-grey-lighten-3 text-h2  mx-auto my-auto text-center v-card--reveal p-3"
              style="height: 100%; padding: 18%;padding-top: 25%;"
            >
             <h2>+56</h2>
            </v-sheet>
            <v-sheet
              :rounded="'xl'"
              class="d-flex transition-fast-in-fast-out bg-grey-lighten-3 text-h2  mx-auto my-auto text-center v-card--reveal p-3"
              style="height: 100%; padding: 18%;padding-top: 25%;font-weight: bold;"
            >
            <h5>کل کاربران</h5>
           </v-sheet>
          </v-fab-transition>
          <!-- <h2></h2> -->
    </v-sheet>
  </v-hover>
  </v-col>

  <v-col cols="3" md="3" sm="12" class="mx-auto my-auto">
    <v-hover v-slot="{ isHovering, props }">
    <v-sheet v-bind="props" 
    :class="{'bg-darken-2':isHovering}" 
    :rounded="'xl'"
     class="d-flex bg-grey-lighten-3 text-h2  mx-auto my-auto v-card--reveal" 
     :height="200" 
     :width="300"
     
     >
      <v-fab-transition>
            <v-sheet
           v-if="isHovering"
              :rounded="'xl'"
              class="d-flex transition-fast-in-fast-out bg-grey-lighten-3 text-h2  mx-auto my-auto text-center v-card--reveal p-3"
              style="height: 100%; padding: 18%;padding-top: 25%;"
            >
             <h2>+10</h2>
            </v-sheet>
            <v-sheet
              :rounded="'xl'"
              class="d-flex transition-fast-in-fast-out bg-grey-lighten-3 text-h2  mx-auto my-auto text-center v-card--reveal p-3"
              style="height: 100%;padding-top: 25%;"
            >
            <h5>اساتید</h5>
           </v-sheet>
          </v-fab-transition>
          <!-- <h2></h2> -->
    </v-sheet>
  </v-hover>
  </v-col>

  <v-col cols="3" md="3" sm="12" class="mx-auto my-auto">
    <v-hover v-slot="{ isHovering, props }">
    <v-sheet v-bind="props" 
    :class="{'bg-darken-2':isHovering}" 
    :rounded="'xl'"
     class="d-flex bg-grey-lighten-3 text-h2  mx-auto my-auto v-card--reveal" 
     :height="200" 
     :width="300"
     
     >
      <v-fab-transition>
            <v-sheet
           v-if="isHovering"
              :rounded="'xl'"
              class="d-flex transition-fast-in-fast-out bg-grey-lighten-3 text-h2  mx-auto my-auto text-center v-card--reveal p-3"
              style="height: 100%; padding: 18%;padding-top: 25%;"
            >
             <h2>+15</h2>
            </v-sheet>
            <v-sheet
              :rounded="'xl'"
              class="d-flex transition-fast-in-fast-out bg-grey-lighten-3 mx-auto my-auto text-center v-card--reveal"
              style="height: 100%; padding-top: 25%;font-family: 'IRANSANS';"
            >
            <h5>{{ $t('message.site_report_1') }} </h5>
           </v-sheet>
          </v-fab-transition>
          <!-- <h2></h2> -->
    </v-sheet>
  </v-hover>
  </v-col>
  </v-row>

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
  export default {
    props:['isHovering'],
    components:{
    banner, myheader,
    VSheet
},
    data(){
      return {
        a:true
      }
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
<style>
.classcard{
  box-shadow: 5px 10px #c9c5c5;
  border: solid 6px hsla(0, 0%, 8%, 0.934)!important; 
  border-radius: 10% !important;
}
.classcard:hover{
  box-shadow: 10px 15px hsla(0, 0%, 0%, 0.459);
}
.mybtn{
  background-color: black !important;
}
</style>
