<template>
    <v-container>
      <v-sheet
      class="mx-auto"
      elevation="8"   
    >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-info"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 3"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          @click="toggle"
          style="width: 250px;height: 150px;"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="fa fa-check"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
      </v-sheet>
  </v-container>
</template>
<script>
export default{
    data(){
        return {
            model:null
        }
    }
}
</script>