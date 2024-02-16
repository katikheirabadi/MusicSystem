<template>
  <v-banner align-start >
    <v-row justify="center" class="d-xs-none d-sm-none d-lg-flex row1">
    <v-col class="menuitemparent" md="2"  lg="1" >
        <router-link class="my-auto menuitem" to="/">{{ $t('banner.home') }}</router-link>
    </v-col>
    <v-col class="menuitemparent" md="2"  lg="1">
        <router-link class="my-auto menuitem" :to="{name:'Academies'}">{{ $t('banner.academies') }}</router-link>
    </v-col>

    <v-col class="menuitemparent" md="2"  lg="1">
      <!-- <router-link class="my-auto menuitem" @click="َAlert" :to=null>{{ $t('banner.certificate') }}</router-link> -->
      <p class="my-auto menuitem" @click="Alert">{{ $t('banner.certificate') }}</p>

    </v-col>
    <v-col class="menuitemparent" md="2"  lg="1">
      <!-- <router-link class="my-auto menuitem" @click="َAlert" :to=null>{{ $t('banner.about') }}</router-link> -->
      <p class="my-auto menuitem" @click="Alert">{{ $t('banner.about') }}</p>

    </v-col>
  
    <v-col v-if="Name == ''" md="3" lg="6" class="banner-logo">
      <img src="../assets/img/logo.png" alt="karosaz">
      <router-link class="signinbtn" :to="{name:'welcome'}">{{ $t('banner.sign') }}</router-link>     
    </v-col>
    <v-col v-if="Name != ''" md="3" lg="6" class="banner-logo">
      <h3 class="pt-3 pe-2 text-brown">{{Name  }}</h3><span class="pt-3 pe-2"></span>
      <a class="signinbtn me-1"  @click="this.$router.push({name:'panel'})">
        <v-icon icon="fa fa-user" >
        </v-icon>
        <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >{{ $t('banner.account') }}
        </v-tooltip>
      </a> 
      <a class="signinbtn me-1"  @click="this.$router.push({name:'bag'})">
        <v-badge :content="Bags"
          color="green"> 
          <v-icon  icon="fa fa-shopping-bag">
          </v-icon> 
        </v-badge>
        <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >{{ $t('banner.shoppingbag') }}
        </v-tooltip>
      </a>  
      <a class="signinbtn" @click="Logout()">
        <v-icon icon="fa fa-sign-out">
        </v-icon>
        <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >{{ $t('banner.exit') }}
        </v-tooltip>
       </a>     
   
    </v-col>
    </v-row>

    <v-row class="d-lg-none row2" style="">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          :prepend-avatar="logo"
          :title="$t('home.sitename')"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item 
          prepend-icon="fa fa-home" 
          :title=" $t('banner.home')" 
          @click="this.$router.push({ name: 'Home' })">
        </v-list-item>

        <v-list-item 
        prepend-icon="fa fa-institution"
        :title=" $t('banner.academies')"
        @click="this.$router.push({ name: 'Academies' })">
        </v-list-item>

        <v-list-item
        prepend-icon="fa fa-certificate"
        @click="Alert"
        :title="$t('banner.certificate')">
        </v-list-item>

       <v-list-item 
       style="background-color: #851313;color: aliceblue;" 
       prepend-icon="fa fa-sign-in"
       :title="$t('banner.sign')"
       @click="this.$router.push({ name: 'welcome' })"></v-list-item>
       </v-list>
      </v-navigation-drawer>
      <v-main style="margin-bottom: 20px;margin-inline: 1.5%;">
        <div class="d-flex justify-space-between">
          <v-btn
          icon="fa fa-ellipsis-h"
          class="menuopen"
          @click.stop="drawer = !drawer"
        ></v-btn>
        <div>
        <v-btn class="signinbtn me-1" v-if="Name !=''"  @click="this.$router.go({name:'bag'})">
        <v-badge  :content="Bags"
          color="green"> 
          <v-icon  icon="fa fa-shopping-bag">
          </v-icon> 
        </v-badge>
        <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >{{ $t('banner.shoppingbag') }}
        </v-tooltip>
        </v-btn>  
          <v-btn
          icon="fa fa-sign-in"
            @click.stop="this.$router.go({ name: 'welcome' })"
            class="signinbtn"
          > 
          
          <v-icon  v-if="Name !=''" icon="fa fa-sign-out"></v-icon>
          <v-icon  v-else icon="fa fa-sign-in"></v-icon>
          <v-tooltip v-if="Name !=''"
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >{{ $t('banner.exit') }}
        </v-tooltip>
        <v-tooltip v-else
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >{{ $t('banner.sign') }}
        </v-tooltip>
          </v-btn>
        </div>
        </div>
      </v-main>
    </v-layout>

    </v-row>
  </v-banner>

</template>
<script>
import Store from '@/store/Store';
import { Callaxios } from '@/assets/composable/CallAxus';
import Swal from 'sweetalert2';
import router from '@/router';
export default {
    data () {
      return {
        drawer: null,
        logo : window.location.origin + '/src/assets/img/academy.png',
        Name:'',
        Bags:0
      }
    },
    mounted(){
      if(Object.entries(Store.state.profile).length != 0){
        this.Name = Store.state.profile.FName + ' ' + Store.state.profile.LName
        this.Bags= Store.state.profile.BagsCount
    }else{
      this.Name = ''
    }
  },
  methods:{
    Logout(){
      Callaxios('Auth/Logout','post',undefined,this.afterlogout)
    },
    afterlogout(param){
      localStorage.removeItem('token')
      location.reload()
    },
    Alert(){
      Swal.fire({
      icon: "info",
      title: 'توجه کنید....',
    text: 'این قسمت هنوز پیاده سازی نشده است',
    confirmButtonColor:'cadetblue',
    confirmButtonText:'متوجه شدم'
  });
    }
  }
  }
</script>
<style scoped>
@import url(../assets/css/Components/banner.css);
</style>