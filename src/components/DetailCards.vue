<template>
      <section class="s1">
      <h1 class="text-center sectionheader" style="">{{ header }}</h1>
      <v-row class="text-center center-class">   
      <v-col v-for="card in endcards" md="3" lg="2" sm="12" cols="12" class="my-auto ">
      <v-sheet 
      class="my-auto detailcol" 
      >
      <v-sheet
      :rounded="'l'"
      class="mx-auto my-auto text-center detail">
            <h2>{{ card.count }}+</h2>
            <p>{{ card.text }}</p>
      </v-sheet>
      </v-sheet>
      </v-col>
     </v-row>

      </section>
</template>
<script>
export default{
   props :["header","cards"],
   data(){
      return{
            endcards :[]
      }
   },
   mounted(){
     this.init()
   },
   updated(){
     this.init()
   },
   methods:{
      init(){
            this.cards.filter((i)=>this.endcards.push({
            count :i.count>100?i.count-100:0,
            total:i.count,
            text :i.text
      }))
      setInterval(()=>{
         for(var i =0;i<this.endcards.length;i++){
            if(this.endcards[i].count != this.endcards[i].total)
            {
              this.endcards[i].count +=1
            }
         }
        },50)
      }
   }

}


</script>
<style scoped>
@import '../assets/css/detailCards.css';
</style>