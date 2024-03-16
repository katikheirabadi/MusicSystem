<template>
    <banner/>
    <div v-if="status" class="successmain center-class">
        <v-sheet class="result text-center" >
                <img src="../../assets/img/icons8-success-96.png" alt="">
                <h2 >پرداخت موفق</h2>
                <v-row style="margin-top: 2%;font-size: 120%;">
                    <v-col cols="12" sm="2"></v-col>
                    <v-col cols="12" sm="4" class="text-center">شماره تراکنش:</v-col>
                    <v-col cols="12" sm="5" class="text-center"> <span>{{ online }}</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 120%;">
                    <v-col cols="12" sm="2"></v-col>
                    <v-col cols="12" sm="4" class="text-center">شماره پیگیری:</v-col>
                    <v-col cols="12" sm="5" class="text-center"> <span>{{  trannumber}}</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 120%;">
                    <v-col cols="12" sm="2"></v-col>
                    <v-col cols="12" sm="4"  class="text-center"> مبلغ:</v-col>
                    <v-col cols="12" sm="5" class="text-center"> <span>{{ price }}ریال</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 120%;">
                    <v-col cols="12" sm="2"></v-col>
                    <v-col cols="12" sm="4" class="text-center">وضعیت :</v-col>
                    <v-col cols="12" sm="5" class="text-center"> <span>{{  desc}}</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                  <v-col cols="12" class="center-class">
                    <router-link class="back" to="/">بازگشت به کاروساز</router-link>
                  </v-col>
                </v-row>
        </v-sheet>
    </div> 
    <div v-if="!status" class="faildmain center-class">
        <v-sheet class="result text-center pt-3" >
                <img src="../../assets/img/icons8-fail-96.png" alt="">
                <h2 style="color: red;" >پرداخت ناموفق</h2>
                <v-row style="margin-top: 2%;font-size: 100%;">
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4" class="text-center">شماره تراکنش:</v-col>
                    <v-col cols="12" md="5" class="text-center"> <span>{{ online }}</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4" class="text-center">شماره پیگیری:</v-col>
                    <v-col cols="12" md="5" class="text-center"> <span>{{  trannumber}}</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4"  class="text-center"> مبلغ:</v-col>
                    <v-col cols="12" md="5" class="text-center"> <span>{{  price}} ریال</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                    <v-col cols="12" md="2"></v-col>
                    <v-col cols="12" md="4" class="text-center">وضعیت :</v-col>
                    <v-col cols="12" md="5" class="text-center"> <span>{{  desc}}</span></v-col>
                </v-row>
                <v-row style="margin-top: 2%;font-size: 100%;">
                  <v-col cols="12" class="center-class">
                    <router-link class="back" style="background-color: red;" to="/">بازگشت به کاروساز</router-link>
                  </v-col>
                </v-row>
        </v-sheet>
        
    </div> 
    <myfooter style="margin-top: 0%;"/> 
</template>
<script>
import banner from '@/components/Banner.vue'
import myfooter from '@/components/Footer.vue'

import { Callaxios } from '@/assets/composable/CallAxus'
export default{
    data(){
        return {
            status:false,
            online:0,
            trannumber:0,
            desc:'',
            price:0
        }
    },
    components:{
        banner,myfooter
    },
    mounted(){
        var onlineid = parseInt(window.location.href.split('?OnlineID=')[1])
       Callaxios('Online/ResultBank/'+onlineid,'get',undefined,this.aftergetdetail)
    },
    methods:{
        aftergetdetail(param){
           this.status = param.Data.status
            this.desc =param.Data.Description
            this.trannumber = param.Data.TransactionNo
            this.online = param.Data.id
            this.price = param.Data.tranceAmount
        }
    }
}
</script>
<style scoped>
@import url(../../assets/css/Views/Bank/result.css);
</style>