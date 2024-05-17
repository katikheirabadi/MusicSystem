<template>
   <section class="my-1">
      <h2 class="text-center my-5 brown-color f-bold">{{ header }}</h2>
      <v-row class="text-center d-flex justify-center">
         <v-col v-for="card in endcards" md="3" lg="2" sm="12" cols="12" class="my-auto ">
            <v-sheet class="my-auto">
               <v-sheet class="mx-auto my-auto text-center br-brown rounded rounded-lg">
                  <h2 class="brown-color-light mt-3">{{ card.count }}+</h2>
                  <p class="brown-color mb-3">{{ card.text }}</p>
               </v-sheet>
            </v-sheet>
         </v-col>
      </v-row>

   </section>
</template>
<script>
export default {
   props: ["header", "cards"],
   data() {
      return {
         endcards: []
      }
   },
   mounted() {
      this.init()
   },
   updated() {
      this.init()
   },
   methods: {
      init() {
         this.endcards = []
         this.cards.filter((i) => this.endcards.push({
            count: i.count > 100 ? i.count - 100 : 0,
            total: i.count,
            text: i.text
         }))
         setInterval(() => {
            for (var i = 0; i < this.endcards.length; i++) {
               if (this.endcards[i].count != this.endcards[i].total) {
                  this.endcards[i].count += 1
               }
            }
         }, 50)
      }
   }

}
</script>
