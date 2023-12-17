<template>
    <v-sheet class="overlay">
        <v-sheet class="loader-sheet text-center">
          <h2 class="pb-6">{{ $t('message.sitename') }}</h2>
          <v-progress-linear
            color="deep-orange-darken-4"
            indeterminate
            rounded
            height="7"
          ></v-progress-linear>
        </v-sheet>
    </v-sheet>
</template>

<style scoped>
@import url(../../assets/css/Components/loader.css);

</style>