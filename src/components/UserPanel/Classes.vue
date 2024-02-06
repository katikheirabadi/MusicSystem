<template>
     <v-row class="mt-10 ma-2">
          <v-col v-for="i in 5" cols="12" md="3">
            <v-sheet class="card">
              <v-sheet class="setting">...
              </v-sheet>
              <v-sheet class="d-flex justify-center">
                <v-sheet class="title">
                  <div class="d-flex justify-center">
                    <img src="../../assets/img/classacademy.png" alt="">
                  </div>
                  <div class="d-flex justify-center">
                    <h10 class="text-white text-center">دانش و فناوری بامداد</h10>
                  </div>
                </v-sheet>
              </v-sheet>
              
              <v-sheet class="content ma-2">
                <h3 class="text-center">دف نوازی سنتی</h3>
                <p class="text-center">1402/12/23</p>
                <h4 class="mt-2 text-center">کتایون خیرآبادی</h4>
                <h4 class="mt-2 text-center">5 جلسه</h4>
                <h4 class="mt-2 text-center">شنبه و دوشنبه</h4>
                <h4 class="mt-2 text-center">ساعت 12:45</h4>
                <h4 class="mt-2 text-center mb-2">نمره شما 20 از 100 است</h4>
                
                <hr/>
                <v-row class="d-flext justify-space-between">
                  <v-col class="d-flex justify-center" cols="6">
                    <v-btn class="classbtn session">جلسات</v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="6">
                    <v-btn class="classbtn surveis" @click="ShowSurvey(2)">نظرسنجی</v-btn>
                  </v-col>
                </v-row>
                
                
              </v-sheet>
   
            </v-sheet>
          </v-col>
          
      </v-row>

    <v-dialog width="30%" v-model="showserveymodal">
    <v-card subtitle="نظرسنجی های دوره">
      <v-sheet class="mt-5 mb-5">
       <v-row>
        <v-col cols="12" md="6" class="text-center bg-orange-darken-4 column">نام نظرسنجی</v-col>
        <v-col cols="12" md="6" class="text-center bg-orange-darken-4 column">ورد به نظرسنجی </v-col>
       </v-row>
       
      </v-sheet>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="بستن"
          @click="showserveymodal = false"
        ></v-btn>
      </v-card-actions>
    </v-card>

</v-dialog>

</template>
<script>
export default{
  data(){
    return{
      showserveymodal:false,
      upselected :0
    }
  },
  methods:{
    ShowSurvey(up){
      this.upselected = up
      this.showserveymodal = true
    }
  }
}
</script>
<style scoped>
@import url(../../assets/css/UserPanel/classes.css);
</style>