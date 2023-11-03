<template>
    <section class="s2">
      <v-row>
      <v-col sm="12" md="12" lg="12" class="my-auto s1text">
        <h1 style="font-size: 28px;color: aliceblue;">{{ title }}</h1>
        <p class="pt-3" style="font-size: 18px; color:aliceblue;line-height: 2;">{{  text }}</p>
      </v-col>
      </v-row>
    </section>
</template>
<script setup>
var props = defineProps({
    title:String,
    text:String
});
</script>
<style scoped>
@import '../assets/css/description.css';
</style>