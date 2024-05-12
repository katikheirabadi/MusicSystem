<template>
  <v-container>
  <v-row class="mt-1">
    <v-col cols="12" md="4" xl="3" v-for="cert in certs" :key="cert.UserProductId">
      <v-sheet class="text-center certcard" :class="{'redcertcard':cert.Result==0}">
        <div class="mt-2">
          <img v-if="cert.Result==0" src="../../assets/img/dontseecert.png" alt="">
          <img v-if="cert.Result==1" src="../../assets/img/canseecert.png" alt="">
        </div>
      <h4 class="mb-2 mt-2 px-2">{{ cert.ProductName }}</h4>
      <h5 class="mb-4">{{ cert.TeacherFullName }}</h5>
      <v-btn class="mb-5" v-if="cert.Result==1" color="green" @click="getcertdetail(cert.UserProductId)">نمایش گواهینامه</v-btn>
      <v-btn class="mb-5" v-if="cert.Result==0" color="red" @click="message= cert.Message,seeerror=true"> غیرمجاز</v-btn>
    </v-sheet>
    </v-col>
  </v-row></v-container>
<!-- error -->
<v-dialog v-model="seeerror" width="auto">
<v-card 
class="text-center"
title="غیر مجاز" 
subtitle="شما به دلایل زیر نمیتوانید گواهینامه این کلاس را مشاهده کنید" >
<div class="font" v-html="message"></div>
<v-card-actions>
<v-spacer></v-spacer>
<v-btn class="bg-red" text="بستن" @click="seeerror = false"></v-btn>
 </v-card-actions>
</v-card>
</v-dialog>
<!-- detail -->
<v-dialog v-model="showdetail" width="70%">
  <v-sheet>
    <v-container>
    <h2 class="text-center font certtitle">فایل گواهینامه</h2>
    <h3 class="text-center font mt-3 mb-6 certsubtitle">کلاس {{ certdetail.ProductName }}</h3>
    <v-row>
      <v-col md="3"></v-col>
      <v-col cols="12" md="3">
        <v-btn v-if="certdetail.IsLock==0" color="amber-lighten-2" block @click="acceptcert(certdetail.CertId)">تایید گواهینامه</v-btn>
        <v-btn v-else color="green-darken-1" block :href="certdetail.CertImageUrl" donlowaf>دانلود فایل دیجیتال</v-btn>
      </v-col>
      <v-col cols="12" md="3">
        <v-btn v-if="certdetail.IsLock==0" color="orange-lighten-1" block @click="gotoedit">ویرایش مشخصات</v-btn>
        <v-btn v-else color="cyan-darken-2" block @click="">درخواست فیزیکی گواهینامه</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1" md="1"></v-col>
      <v-col cols="10" md="10">
        <img :src="certdetail.CertImageUrl" alt="" class="certimg"> 
      </v-col>
      <v-col cols="1" md="1"></v-col>
    </v-row>
  </v-container>
  </v-sheet>
</v-dialog>
<notif :show="show" v-if="show" :text="text" :type="type" :location="'top right'"  @close="show = false" />
</template>
<script>
import { Callaxios } from '@/assets/composable/CallAxus';
import Store from '@/store/Store';

import notif from '@/components/ResultNotification.vue'
export default{
    data(){
        return {
            certs:[],
            message:'',
            seeerror:false,
            certdetail:{},
            showdetail:false,
            show:false,
            type:'',
            text:''
        }
    },
    components:{
      notif
    },
    mounted(){
      Callaxios('Certifications/GetAllForUser','get',undefined,this.aftergetallserts)
    },
    methods:{
      aftergetallserts(param){
        this.certs = []
        this.certs = param.Data
      },
      getcertdetail(up){
        Callaxios('Certifications/AddOrUpdateUserCertification/'+up,'get',undefined,this.aftergetdetail)
      },
      aftergetdetail(param){
        this.certdetail.ProductName = param.Data.ProductName
        this.certdetail.CertImageUrl = Store.state.backuploadurl + param.Data.CertImageUrl
        this.certdetail.CertId = param.Data.CertId
        this.certdetail.IsLock = param.Data.IsLock
        this.showdetail= true
      },
      gotoedit(){
        this.$emit('calleditprofile');
      },
      acceptcert(cert){
        Callaxios('Certifications/AcceptCertDetail','post',{CertId:cert},this.afteraccept)
      },
      afteraccept(param){
         this.certdetail.IsLock = 1
         this.text='گواهینامه شما با موفقست تایید شد'
         this.type='success'
         this.show=true
      }
    }
}
</script>
<style scoped>
.certcard{
border: 3px solid rgb(15, 155, 89);
}
.redcertcard{
  border: 3px solid rgb(216, 40, 16);
}
.font{
  font-family: 'IRANSANS'
}
.certimg{
  width: 100%;
}
.v-card-item__content{
  display: flex !important;
  justify-content: center !important
}
.certsubtitle{
  color: gray
}
</style>