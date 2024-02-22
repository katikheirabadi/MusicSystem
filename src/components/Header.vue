<template>
 <div style="position: relative;">
<v-row class="banner">
  <v-img
  :src="img"
  cover=""
  >
  </v-img>
</v-row>
<div class="banner-text">
  <img :src="logo" alt="" style="width: 20%;">
  <h1 style="font-size:30px">{{ header }}</h1>
  <h1 class="mt-1 mb-8" style="font-size:20px;">{{ text }}</h1>
  <router-link  class="bannerbtn" v-for="btn in btns" style="font-weight: bold;color: aliceblue;" :to="btn.link">{{ btn.text }}</router-link>

</div>
</div>

</template>
<script setup>
 const props = defineProps({
  header: String,
  text:String,
  btns:Array,
  img:String,
  logo:String
})
</script>
<style scoped>
@import url(../assets/css/header.css);
</style>
