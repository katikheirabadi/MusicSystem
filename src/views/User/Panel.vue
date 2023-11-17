<template>
 <v-card>
    <v-layout>
      <v-navigation-drawer  permanent>
        <v-list-item
        @click="showupdateprofilemenue = !showupdateprofilemenue"
          nav
          class="center-class"
        >
        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Hello" style="border-radius: 50%;">
        <h4 class="text-center" style="color: #912909;">محسن پوریخت 
        
        </h4>
       
        </v-list-item>

        <v-list-item style=";color: #d54b21;" v-if="showupdateprofilemenue" nav class="center-class " prepend-icon="fa fa-edit" title="ویرایش مشخصات" value="ویرایش مشخصات"></v-list-item>

        <v-list nav>
          <v-list-item  style="color: #FF3D00;" prepend-icon="	fa fa-calendar" title="برنامه امروز" value="برنامه امروز" @click="classescomp=true"></v-list-item>
          <v-list-item  style="color: #FF3D00;" prepend-icon="	fa fa-calendar" title="کلاس های من" value="کلاس های من" @click="classescomp=true"></v-list-item>
          <v-list-item style="color: #FF3D00;" prepend-icon="fa fa-certificate" title="گواهینامه ها" value="گواهینامه ها" @click="classescomp=false"></v-list-item>
          <v-list-item style="color: #FF3D00;" prepend-icon="	fa fa-calculator" title="مدیریت اعتبار" value="مدیریت اعتبار" @click="classescomp=false"></v-list-item>
          <v-list-item style="color: #FF3D00;" prepend-icon="	fa fa-address-book" title="معرفی به دوستان" value="معرفی به دوستان" @click="classescomp=false"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        color="deep-orange-darken-4">
        <v-spacer></v-spacer>
      <v-btn variant="text" @click="this.$router.replace({name:'bag'})" >
        <v-badge content="5"
        color="green"> 
          <v-icon  icon="fa fa-shopping-bag">
          </v-icon> </v-badge>
         <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >سبد خرید شما
        </v-tooltip>
        </v-btn>

        <v-btn variant="text"  @click="this.$router.replace({name:'welcome'})" >
          <v-icon icon="fa fa-sign-out">
          </v-icon> 
         <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >خروج
        </v-tooltip>
        </v-btn>
      </v-app-bar>
      <v-main style="min-height: 100vh;background-color: rgba(226, 148, 148, 0.454);margin-inline-start: 1%;padding-inline-end: 2%;">
        <classes v-if="classescomp"/>
         
        
   
    
      </v-main>
    </v-layout>
  </v-card>

</template>
<script setup>
import { ref } from 'vue';
import classes from '@/components/UserPanel/Classes.vue'
import { fa } from 'vuetify/lib/iconsets/fa.mjs';
let showupdateprofilemenue = ref(false)
let classescomp = ref(true)
</script>
