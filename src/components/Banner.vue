<template>
  <v-banner align-start style="" >
    <v-row justify="center" class="d-xs-none d-sm-none d-lg-flex row1">
    <v-col class="menuitemparent" md="2"  lg="1" >
        <router-link class="my-auto menuitem" to="/">{{ $t('banner.home') }}</router-link>
    </v-col>
    <v-col class="menuitemparent" md="2"  lg="1">
        <router-link class="my-auto menuitem" :to="{name:'Academies'}">{{ $t('banner.academies') }}</router-link>
    </v-col>

    <v-col class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" to="/">{{ $t('banner.certificate') }}</router-link>
    </v-col>
  
    <v-col v-if="Name == ''" md="3" lg="6" class="banner-logo">
      <img  src="../assets/img/logo.png" alt="karosaz">
      <router-link class="signinbtn" :to="{name:'welcome'}">{{ $t('banner.sign') }}</router-link>     
    </v-col>
    <v-col v-if="Name != ''" md="3" lg="6" class="banner-logo">
      <h3 class="pt-3 pe-2 text-brown">{{Name  }}</h3><span class="pt-3 pe-2">خوش آمدید</span>
      <a class="signinbtn me-1"  @click="this.$router.replace({name:'panel'})">
        <v-icon icon="fa fa-user" >
        </v-icon>
        <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >{{ $t('banner.account') }}
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
          :title="$t('message.sitename')"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="fa fa-home" :title=" $t('banner.home')" @click="this.$router.replace({ name: 'Home' })"></v-list-item>
          <v-list-item prepend-icon="fa fa-institution" :title=" $t('banner.academies')"  @click="this.$router.replace({ name: 'Academies' })"></v-list-item>
          <v-list-item prepend-icon="fa fa-certificate" :title="$t('banner.certificate')"></v-list-item>
          <v-list-item style="background-color: #851313;color: aliceblue;" prepend-icon="fa fa-sign-in" :title="$t('banner.sign')" @click="this.$router.replace({ name: 'welcome' })"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main >
        <div style="display: flex; justify-content: space-between !important;">
          <v-btn
          icon="fa fa-ellipsis-h"
            @click.stop="drawer = !drawer"
          ></v-btn>
      
          <v-btn
          icon="fa fa-sign-in"
            @click.stop="this.$router.replace({ name: 'welcome' })"
            class="signinbtn"
          >
          </v-btn>
        </div>
      </v-main>
    </v-layout>

    </v-row>
  </v-banner>

</template>
<script>
import Store from '@/store/Store';
import { Callaxios } from '@/assets/composable/CallAxus';
export default {
    data () {
      return {
        drawer: null,
        logo : window.location.origin + '/src/assets/img/academy.png',
        Name:''
      }
    },
    mounted(){
      if(Object.entries(Store.state.profile).length != 0){
        this.Name = Store.state.profile.fName + ' ' + Store.state.profile.lName

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
    }
  }
  }
</script>
<style scoped>
@import url(../assets/css/Components/banner.css);
</style>