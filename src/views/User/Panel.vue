<template>
 <v-card>
    <v-layout>
      <v-navigation-drawer  permanent>
        <v-list-item 
          nav
          class="center-class"
        >
        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Hello" style="border-radius: 50%;">
        <h4 class="text-center" style="color: #912909;">محسن پوریخت 
        
        </h4>
       
        </v-list-item>
        <v-list nav>
          <v-list-item  style="color: #9c280e;" prepend-icon="	fa fa-calendar" title="داشبورد" value="داشبورد" @click="classescomp=false,dashbord=true"></v-list-item>
          <v-list-item  style="color: #9c280e;" prepend-icon="	fa fa-calendar" title="کلاس های من" value="کلاس های من" @click="classescomp=true,dashbord=false"></v-list-item>
          <v-list-item style="color: #9c280e;" prepend-icon="fa fa-certificate" title="گواهینامه ها" value="گواهینامه ها" @click="classescomp=false,dashbord=false"></v-list-item>
          <v-list-item style="color: #9c280e;" prepend-icon="	fa fa-calculator" title="مدیریت اعتبار" value="مدیریت اعتبار" @click="classescomp=false,dashbord=false"></v-list-item>
          <v-list-item style="color: #9c280e;" prepend-icon="	fa fa-address-book" title="معرفی به دوستان" value="معرفی به دوستان" @click="classescomp=false,dashbord=false"></v-list-item>
          <v-list-item style=";color: #9c280e;"  prepend-icon="fa fa-edit" title="ویرایش مشخصات" value="ویرایش مشخصات"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        color="#5b1505">
        <v-spacer></v-spacer>
      <v-btn variant="text" @click="this.$router.replace({name:'bag'})" >
        <v-badge content="5"
          color="green"> 
          <v-icon  icon="fa fa-shopping-bag">
          </v-icon> 
        </v-badge>
         <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >سبد خرید شما
        </v-tooltip>
        </v-btn>

        <v-btn variant="text"  @click="this.$router.replace({name:'welcome'})" >
          <v-icon icon="fa fa-sign-out">
          </v-icon> 
         <v-tooltip
         style="font-family: 'IRANSANS';"
          activator="parent"
          location="bottom"
          >خروج
        </v-tooltip>
        </v-btn>
      </v-app-bar>
      <v-main style="min-height: 100vh;background-color: #761d083b;margin-inline-start: 1%;padding-inline-end: 2%;">
        <classes v-if="classescomp"/>
         <v-container v-if="dashbord">
          <!-- cards -->
          <v-row >
            <v-col class="center-class" cols="12" md="4">
              <v-sheet
              class="px-4 py-3 center-class"
               style="width:100% !important;height: 180px !important;border-radius: 10px;border: #113e99 4px solid;background-color:#113e99;"
               >
              <v-row>
                <v-col cols="5" style="padding-inline-end: 0px !important;" >
                  <img src="../../assets/img/icons8-course-100.png" alt="" style="width: 90%;height: 90% !important;padding-top:8% ;">
                </v-col>
                <v-col cols="7" class="my-auto text-center text-white">
                  <h1>25</h1>
                  <h2>دوره های من</h2>
                </v-col>
              </v-row>
              
              </v-sheet>
            </v-col>
            <v-col class="center-class" cols="12" md="4">
              <v-sheet
              class="px-4 py-3 center-class"
              style="width:100% !important;height: 180px !important;border-radius: 10px;border: rgb(0, 128, 100) 4px solid;background-color :rgb(0, 128, 100)"
               >
              <v-row>
                <v-col cols="5" style="padding-inline-end: 0px !important;">
                  <img src="../../assets/img/icons8-certificate-100.png" alt="" style="width: 90%;height: 100% !important;">
                </v-col>
                <v-col cols="7" class="my-auto text-center text-white">
                  <h1>20</h1>
                  <h2>گواهینامه های من</h2>
                </v-col>
              </v-row>
              
              </v-sheet>
            </v-col>
            <v-col class="center-class" cols="12" md="4">
              <v-sheet
              class="px-4 py-3 center-class"
              style="width:100% !important;height: 180px !important;border-radius: 10px;border: #e01b1b 4px solid;background-color:#e01b1b;"
               >
              <v-row>
                <v-col cols="5" style="padding-inline-end: 0px !important;">
                  <img src="../../assets/img/icons8-card-exchange-80.png" alt="" style="width: 90%;height: 100% !important;">
                </v-col>
                <v-col cols="7" class="my-auto text-center text-white">
                  <h1>450,000 ریال</h1>
                  <h2>اعتبار من</h2>
                </v-col>
              </v-row>
              
              </v-sheet>
            </v-col>
          </v-row>
           <!-- exams -->
           <v-row>
            <v-col cols="12">
              <v-sheet class="px-6 py-5" 
              style="width: 100%;height: 40vh;overflow-y: auto;border-radius: 10px;"
              >
              <h3>آزمون های امروز</h3>
              <v-row class="mt-2 mb-5 text-center" style="border-radius: 5px;background-color:  rgb(86, 32, 120);;color: aliceblue;">
                <v-col cols="1"><strong>*</strong></v-col>
                <v-col cols="1"><strong>نام دوه</strong></v-col>
                <v-col cols="2"><strong>نام آزمون</strong></v-col>
                <v-col cols="1"><strong>مدت زمان </strong></v-col>
                <v-col cols="4"><strong>زمان آزمون</strong></v-col>
                <v-col cols="1"><strong>دفعات </strong></v-col>
                <v-col cols="2"><strong>ورود</strong></v-col>
              </v-row>
              <v-row class="mt-2 mb-5 text-center" v-for="i in 4">
                <v-col cols="1"><strong>{{ i}}</strong></v-col>
                <v-col cols="1"><strong>گیتار</strong></v-col>
                <v-col cols="2"><strong>آزمون پاپ </strong></v-col>
                <v-col cols="1"><strong>30 دقیقه  </strong></v-col>
                <v-col cols="4"><strong>از (١١:٠٠) ١٤٠١/١٠/٠٤ تا (٠٧:٠٠) ١٤٠١/١٠/٠٤ </strong></v-col>
                <v-col cols="1"><strong>1 بار </strong></v-col>
                <v-col cols="2"><router-link class="joinexambtn"
                  to="/">ورود به آزمون </router-link></v-col>
              </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        <!-- sessions and homeworks -->
          <v-row>
            <v-col cols="12" md="6">
              <v-sheet class="px-6 py-5" style="width: 100%;height: 60vh;border-radius: 15px;overflow-y: auto;">
                <h3>جلسات امروز</h3>
                <v-row class="mt-2 mb-5 text-center" style="border-radius: 5px;background-color:  rgb(2, 83, 90);;color: aliceblue;">
                  <v-col cols="3"><strong>* </strong></v-col>
                  <v-col cols="2"><strong>نام دوره</strong></v-col>
                  <v-col cols="3"><strong>ساعت شروع</strong></v-col>
                  <v-col cols="4"><strong>کلاس آنلاین</strong></v-col>
                </v-row>
                <v-row v-for="i in 4" class="mt-4 mb-3 text-center">
                  <v-col cols="3"><strong>{{i}} </strong></v-col>
                  <v-col cols="2"><strong>گیتار</strong></v-col>
                  <v-col cols="3"><strong>12:35</strong></v-col>
                  <v-col cols="4" class=""><router-link class="joinbtn"
                  to="/">ورود به جلسه </router-link></v-col>
                  <hr>
                </v-row>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6">
              <v-sheet class="px-6 py-5" style="width: 100%;height: 60vh;border-radius: 15px;overflow-y: auto;">
                <h3>تکالیف باقی مانده </h3>
                <v-row class="mt-2 text-center" style="border-radius: 5px;background-color:  rgb(90, 69, 2);;color: aliceblue;">
                  <v-col cols="2"><strong>* </strong></v-col>
                  <v-col cols="2"><strong>نام دوره</strong></v-col>
                  <v-col cols="3"><strong>سوال </strong></v-col>
                  <v-col cols="5"><strong>بارگذاری جواب</strong></v-col>
                </v-row>
                <v-row v-for="i in 4" class="text-center">
                  <v-col cols="2" class="mt-4"><strong>{{i}} </strong></v-col>
                  <v-col cols="2" class="mt-4"><strong>گیتار</strong></v-col>
                  <v-col cols="3" class="mt-4"><router-link class="questionbtn"
                  to="/">دانلود سوال</router-link></v-col>
                  <v-col cols="5" class=""><v-file-input label="بارگذاری فایل" variant="outlined"></v-file-input></v-col>
                  <hr>
                </v-row>
            </v-sheet>
            </v-col>
          </v-row>
         
         </v-container>
        
   
    
      </v-main>
    </v-layout>
  </v-card>

</template>
<script setup>
import { ref } from 'vue';
import classes from '@/components/UserPanel/Classes.vue'
import { fa } from 'vuetify/lib/iconsets/fa.mjs';
let dashbord = ref(true)
let classescomp = ref(false)
</script>
<style>
.joinbtn{
text-decoration: none;
background-color: rgb(18, 121, 130);
padding: 8%;
color: aliceblue;
}
.questionbtn{
text-decoration: none;
background-color: rgb(145, 113, 8);
padding: 10%;
color: aliceblue;
}
.joinexambtn{
text-decoration: none;
background-color: rgb(125, 62, 202);
padding: 7%;
color: aliceblue;
}
</style>