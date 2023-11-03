<template>
  <v-banner align-start >
    <v-row justify="center" class="d-xs-none d-sm-none d-lg-flex row1" style=";">
    <v-col class="menuitemparent" md="1"  lg="1" style="width: fit-content !important;">
        <router-link class="my-auto menuitem" to="/">{{ $t('message.home') }}</router-link>
    </v-col>
    <v-col class="menuitemparent" md="2"  lg="1">
        <router-link class="my-auto menuitem" :to="{name:'Academies'}">{{ $t('message.academies') }}</router-link>
    </v-col>

    <v-col class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" to="/">{{ $t('message.certificate') }}</router-link>
    </v-col>

    <v-col class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" :to="{name:'about'}">
            {{ $t('message.about') }}</router-link>
    </v-col>
  
    <v-col md="3" lg="6" style="display: flex;justify-content:end;">
      <img src="../assets/img/logo.png" alt="karosaz" style="height: 60%;margin-top: auto;margin-bottom: auto;width: 20%;">
      <router-link class="signinbtn" :to="{name:'welcome'}">{{ $t('message.sign') }}</router-link>
        
    </v-col>
    </v-row>

    <v-row class="d-lg-none row2" style="">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="http://localhost:3000/src/assets/img/icons8-music-96.png"
          :title="$t('message.sitename')"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="fa fa-home" :title=" $t('message.home')" @click="this.$router.replace({ name: 'Home' })"></v-list-item>
          <v-list-item prepend-icon="fa fa-institution" :title=" $t('message.academies')"  @click="this.$router.replace({ name: 'Academies' })"></v-list-item>
          <v-list-item prepend-icon="fa fa-certificate" :title="$t('message.certificate')"></v-list-item>
          <v-list-item prepend-icon="fa fa-address-book" :title="$t('message.about')" @click="this.$router.replace({ name: 'about' })"></v-list-item>
          <v-list-item style="background-color: #851313;color: aliceblue;" prepend-icon="fa fa-sign-in" :title="$t('message.sign')" @click="this.$router.replace({ name: 'welcome' })"></v-list-item>
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
import '../assets/css/banner.css'
export default {
    data () {
      return {
        drawer: null,
      }
    },
  }
</script>