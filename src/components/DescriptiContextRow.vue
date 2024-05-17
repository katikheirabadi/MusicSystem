<template>
  <section class="brown-bg-light px-15 mt-10 ">
    <v-row>
      <v-col cols="12" md="6" class="my-auto text-center">
        <h2 class="mb-1 mt-4">{{ title }}</h2>
        <p class="pt-3 mb-9 brown-color-light f-mediom lh-sm"  v-html="text"></p>
        <router-link v-if="showbtn==1" class="text-white rounded rounded-xl px-5 py-3 brown-bg f-small mt-5"
          :to="{ name: 'Academies' }">{{$t('home.showallacademies')}}</router-link>
      </v-col>
      <v-col cols="12" md="6" class="">
        <img src="/src/assets/img/context.png" class="w-100" alt="">
      </v-col>
    </v-row>
  </section>
</template>
<script setup>
var props = defineProps({
  title: String,
  text: String,
  showbtn : Number 
});
</script>
<style scoped>
@import '../assets/css/description.css';
</style>