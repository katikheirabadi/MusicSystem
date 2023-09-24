<template>
 <div style="position: relative;">
<v-row class="h" style="z-index: -1;justify-content: start;">
</v-row>
<v-row style="top: 0%;z-index: 1;position: absolute;width: 100%;" >
    <v-col sm="3" md="2" lg="1">
        <v-btn color="white" block variant="outlined" rounded="xl" size="x-large">{{ $t('message.academies') }}</v-btn>
    </v-col>
    <v-col sm="3" md="2"  lg="1">
        <v-btn color="white" block variant="outlined" rounded="xl" size="x-large">{{ $t('message.classes') }}</v-btn>
    </v-col>
    <v-col sm="3" md="2"  lg="1">
        <v-btn color="white" block variant="outlined" rounded="xl" size="x-large">{{ $t('message.contact') }}</v-btn>
    </v-col>
    <v-col sm="3" md="2"  lg="1">
        <v-btn color="white" block variant="outlined" rounded="xl" size="x-large">
            {{ $t('message.about') }}</v-btn>
    </v-col>
    <v-col sm="3" md="4"  lg="8" style="display: flex;justify-content:end;">
        <v-btn color="white" style="font-weight: bold;" rounded="xl" size="x-large">
            <router-link :to="{name:'welcome',params:{lang:this.$route.lang}}" style=" text-decoration: none;color: black;font-weight: bold;">{{ $t('message.sign') }}</router-link>
        </v-btn>
    </v-col>
</v-row>
<div class="bg-text">
  <h1 style="font-size:50px">{{ $t('message.sitename') }}</h1>
  <h1 style="font-size:20px">{{ $t('message.header_sub') }}</h1>
</div>
</div>

</template>
<script setup>
 
</script>
<style scoped>
.h{
    background-image: url('../assets/img/1.jpg');
    filter: blur(5px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 750px;
}
.bg-text {
  background-color: rgba(15, 15, 15, 0.518);
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 50%;
  padding: 20px;
  text-align: center;
}
</style>