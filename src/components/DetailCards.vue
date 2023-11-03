<template>
      <section class="s1">
      <h1 class="text-center sectionheader" style="">{{ header }}</h1>
      <v-row class="text-center center-class">   
      <v-col v-for="card in cards" md="3" lg="2" sm="12" cols="12" class="my-auto ">
      <v-sheet 
      class="my-auto detailcol" 
      >
      <v-sheet
      :rounded="'xl'"
      class="mx-auto my-auto text-center detail">
            <h2>{{ card.count }}+</h2>
            <p>{{ card.text }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
     </v-row>

      </section>
</template>
<script setup>
 const props = defineProps({
  header: String,
  cards:Array
})
</script>
<style scoped>
@import '../assets/css/detailCards.css';
</style>