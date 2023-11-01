<template>
    <banner/>
    <div v-if="status" class="successmain center-class">
        <v-sheet class="result text-center center-class" >
                <img src="../../assets/img/icons8-success-96.png" alt="">
                <h2 >پرداخت موفق</h2>
                <v-row style="margin-top: 2%;font-size: 120%;">
                    <v-col cols="12" sm="2"></v-col>
                    <v-col cols="12" sm="4" class="text-center">شماره تراکنش:</v-col>
                    <v-col cols="12" sm="5" class="text-center"> <span>1258</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 120%;">
                    <v-col cols="12" sm="2"></v-col>
                    <v-col cols="12" sm="4" class="text-center">شماره پیگیری:</v-col>
                    <v-col cols="12" sm="5" class="text-center"> <span>2321656525</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 120%;">
                    <v-col cols="12" sm="2"></v-col>
                    <v-col cols="12" sm="4"  class="text-center"> مبلغ:</v-col>
                    <v-col cols="12" sm="5" class="text-center"> <span>25,000,000 ریال</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 120%;">
                    <v-col cols="12" sm="2"></v-col>
                    <v-col cols="12" sm="4" class="text-center">وضعیت :</v-col>
                    <v-col cols="12" sm="5" class="text-center"> <span>موفق</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 120%;">
                  <v-col cols="12" class="center-class">
                    <router-link class="back" to="/">بازگشت به کاروساز</router-link>
                  </v-col>
                </v-row>
        </v-sheet>
    </div> 
    <div v-if="!status" class="faildmain center-class">
        <v-sheet class="result text-center pt-3 center-class" >
                <img src="../../assets/img/icons8-fail-96.png" alt="">
                <h2 style="color: red;" >پرداخت ناموفق</h2>
                <v-row style="margin-top: 2%;font-size: 100%;">
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4" class="text-center">شماره تراکنش:</v-col>
                    <v-col cols="12" md="5" class="text-center"> <span>1258</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4" class="text-center">شماره پیگیری:</v-col>
                    <v-col cols="12" md="5" class="text-center"> <span>2321656525</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4"  class="text-center"> مبلغ:</v-col>
                    <v-col cols="12" md="5" class="text-center"> <span>25,000,000 ریال</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4" class="text-center">وضعیت :</v-col>
                    <v-col cols="12" md="5" class="text-center"> <span>ناموفق</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                  <v-col cols="12" class="center-class">
                    <router-link class="back" style="background-color: red;" to="/">بازگشت به کاروساز</router-link>
                  </v-col>
                </v-row>
        </v-sheet>
        
    </div> 
    <myfooter/> 
</template>
<script setup>
import banner from '@/components/Banner.vue'
import myfooter from '@/components/Footer.vue'
import { ref } from 'vue';
let status = ref(false)
</script>
<style scoped>
.successmain{
    width: 100%;
    min-height: 80vh !important;
    background-color: rgba(46, 154, 46, 0.418) !important;
}
.faildmain{
    width: 100%;
    min-height: 80vh !important;
    background-color: rgba(239, 40, 40, 0.308) !important;
}
.result{
    min-width: 30%;
    min-height: 100% !important;
    margin-top: 2%;
    margin-bottom: 2%;
    line-height: 2.5;
    border-radius: 10px;
}
.result h2{
    color: green;
}
.back{
    text-decoration: none;
    background-color: rgb(46, 154, 46);
    padding: 1.5%;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-bottom: 2%;
    color: white;
    border-radius: 25px;
}
</style>