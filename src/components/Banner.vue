<template>
  <v-banner >
    <v-row justify="center" class="d-xs-none d-sm-none d-md-flex row1" style=";">
    <v-col class="menuitemparent" md="2" lg="1">
        <router-link class="my-auto menuitem" to="/">{{ $t('message.academies') }}</router-link>
    </v-col>

    <v-col  class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" to="/">{{ $t('message.classes') }}</router-link>
    </v-col>

    <v-col class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" to="/">{{ $t('message.contact') }}</router-link>
    </v-col>

    <v-col class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" to="/">
            {{ $t('message.about') }}</router-link>
    </v-col>
  
    <v-col md="3" lg="6" style="display: flex;justify-content:end;">
      <img src="../assets/img/logo.png" alt="karosaz" style="height: 60%;margin-top: auto;margin-bottom: auto;width: 20%;">
      <router-link class="signinbtn" :to="{name:'welcome'}">{{ $t('message.sign') }}</router-link>
        
    </v-col>
    </v-row>

    <v-row class="d-md-none row2" style="">
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
          <v-list-item prepend-icon="	fa fa-institution" :title=" $t('message.academies')" @click="this.$router.replace({ name: 'welcome' })"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
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