<template>
  <v-banner >
    <v-row justify="center" class="d-xs-none d-sm-none d-md-flex" style=";">
    <v-col class="menuitemparent" md="2" lg="1">
        <router-link class="my-auto menuitem" to="/">{{ $t('message.academies') }}</router-link>
    </v-col>
    <div style="font-size: 35px;margin-top: 1.5%;color: black !important;">|</div>
  
    <v-col  class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" to="/">{{ $t('message.classes') }}</router-link>
    </v-col>
    <div style="font-size: 35px;margin-top: 1.5%;color: black !important;">|</div>

    <v-col class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" to="/">{{ $t('message.contact') }}</router-link>
    </v-col>
    <div style="font-size: 35px;margin-top: 1.5%;color: black !important;">|</div>

    <v-col class="menuitemparent" md="2"  lg="1">
      <router-link class="my-auto menuitem" to="/">
            {{ $t('message.about') }}</router-link>
    </v-col>
  
    <v-col md="4" lg="6" style="display: flex;justify-content:end;">
      <img src="../assets/img/logo.png" alt="karosaz" height="47">
      <router-link class="signinbtn" :to="{name:'welcome',params:{lang:this.$route.lang}}">{{ $t('message.sign') }}</router-link>
        
    </v-col>
</v-row>
     
  </v-banner>
 
</template>
<script>
import '../assets/css/banner.css'
</script>