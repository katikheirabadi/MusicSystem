<template >
    <div class="text-center ma-2">
    <v-snackbar
      :color="color"
      v-model="s"
      text-color="black"
      :location="location"
      :timeout="timeout"
    >
    <h3 style="font-family: 'IRANSANS' !important;" v-if="type=='success'">موفقیت</h3>
    <h3 style="font-family: 'IRANSANS' !important;" v-else>خطا</h3>
    <h4 style="font-family: 'IRANSANS' !important;">
        {{ text }}
    </h4>

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
    props:['text','type','show','title','location'],
    data(){
        return{
            color:'',
            s:false,
            timeout:8000
        }
    },
    mounted(){
        this.color = this.type == 'error'?'red':'success'
        this.s=this.show
        setTimeout(() => { this.$emit("close"); },this.timeout);
    }
}
</script>