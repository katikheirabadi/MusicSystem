<template>
    <v-sheet class="overlay">
        <v-sheet class="loader-sheet text-center d-none d-md-block">
          <img src="../../assets/img/logo.png" alt="">
          <v-progress-linear
            color="deep-orange-darken-4"
            indeterminate
            rounded
            height="7"
          ></v-progress-linear>
        </v-sheet>
        <div class="text-center d-block d-md-none">

          <v-progress-circular
          indeterminate
          :size="200"
          :width="15"
          color="deep-orange-darken-1"
          style="margin-top:50vh;z-index: 3000;"
          >
         <h3>{{ $t('home.sitename') }}</h3> 
        </v-progress-circular>
        </div>

    </v-sheet>
</template>

<style scoped>
@import url(../../assets/css/Components/loader.css);

</style>