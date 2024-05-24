<template>
  <div style="position: relative;">
    <v-row class="banner">
      <v-img :src="img" cover="">
      </v-img>
    </v-row>
    <div class="banner-text px-2 f-bold text-white text-center w-100">
      <img :src="logo" alt="" style="width: 10%;">
      <h2 class="py-5">{{ header }}</h2>
      <h4 class="mb-10">{{ text }}</h4>
      <router-link class="text-white rounded rounded-xl px-5 py-3 brown-bg f-small" v-for="btn in btns" :to="btn.link">{{
        btn.text }}</router-link>

    </div>
  </div>

</template>
<script setup>
const props = defineProps({
  header: String,
  text: String,
  btns: Array,
  img: String,
  logo: String
})
</script>
<style scoped>
@import url(../assets/css/header.css);
</style>
