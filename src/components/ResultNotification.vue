<template >
    <div class="text-center ma-2">
    <v-snackbar
      :color="color"
      v-model="s"
      text-color="black"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
         @click=" this.$emit('close')"
        >
          بستن
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>

export default{
    props:['text','type','show'],
    data(){
        return{
            color:'',
            s:false
        }
    },
    mounted(){
        this.color = this.type == '0'?'rgb(91, 21, 5)':'success'
        this.s=this.show
    }
}
</script>