<template>
 <div style="position: relative;">
<v-row class="banner">
</v-row>
<div class="banner-text">
  <h1 style="font-size:30px">{{ header }}</h1>
  <h1 style="font-size:20px">{{ text }}</h1>
    <router-link to="/" class="bannerbtn" v-for="btn in btns" style="font-weight: bold;color: aliceblue;" :to="btn.link">{{ btn.text }}</router-link>

</div>
</div>

</template>
<script setup>
 import '../assets/css/header.css'
 const props = defineProps({
  header: String,
  text:String,
  btns:Array
})
</script>
