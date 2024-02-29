<template>
     <v-row class="mt-10 ma-2">
          <v-col v-for="i in 5" cols="12" md="3">
            <v-sheet class="card">
             
              <v-sheet class="d-flex justify-center" style="border-radius: 10px;">
               
                <v-sheet class="title d-flex justify-space-between">
                    <div class="d-flex justify-start align-center pt-2 pb-2" style="width: 80%;">
                    <img src="../../assets/img/classacademy.png" alt="">
                    <h5 class="text-white text-center">دانش و فناوری بامداد</h5>
                    </div> 
                    <v-sheet class="setting d-flex align-center">...
                    </v-sheet>
                </v-sheet>
              </v-sheet>
              
              <v-sheet class="content ma-2">
                <h4 class="text-center">دف نوازی سنتی</h4>
                <p class="text-center"><strong class="text-black">تاریخ شروع: </strong>1402/12/23</p>
                <p class="mt-2 text-center"><strong class="text-black">استاد : </strong>کتایون خیرآبادی</p>
                <p class="mt-2 text-center"><strong class="text-black">تعداد جلسات : </strong>5 جلسه</p>
                <p class="mt-2 text-center"><strong class="text-black">روزهای هفته : </strong>شنبه و دوشنبه</p>
                <p class="mt-2 text-center"><strong class="text-black">ساعت برگزاری : </strong> 12:45</p>
                <p class="mt-2 text-center mb-2">نمره شما 20 از 100 است</p>
                
                <hr/>
                <v-row class="d-flext justify-space-between">
                  <v-col class="d-flex justify-center" cols="6">
                    <v-btn block class="classbtn session">جلسات</v-btn>
                  </v-col>
                  <v-col class="d-flex justify-center" cols="6">
                    <v-btn block="" class="classbtn surveis" @click="ShowSurvey(2)">نظرسنجی</v-btn>
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
        <v-col cols="12" md="6" class="text-center bg-blue-darken-4 column">نام نظرسنجی</v-col>
        <v-col cols="12" md="6" class="text-center bg-blue-darken-4 column">ورد به نظرسنجی </v-col>
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
import { Callaxios } from '@/assets/composable/CallAxus'
export default{
  data(){
    return{
      showserveymodal:false,
      upselected :0,
      courses:[]
    }
  },
  mounted(){
    Callaxios('UserProduct/UserCourses','post',undefined,)
  },
  methods:{
    ShowSurvey(up){
      this.upselected = up
      this.showserveymodal = true
    },
    aftergetproducts(param){
      this.courses=[]
      param.Data.filter((i)=> this.courses.push({
       
      }))
    }
  }
}
</script>
<style scoped>
@import url(../../assets/css/UserPanel/classes.css);
</style>