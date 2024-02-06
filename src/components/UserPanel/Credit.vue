<template> 
<v-container>
   <!-- cards -->
    <v-row class="mt-1 d-flex justify-center" >
            <v-col cols="12" sm="6" md="3">
              <v-sheet
              class="px-4 py-2 creditcard"
               >
              <v-row>
                <v-col class="creditcardimg d-flex justify-center" cols="5">
                  <img src="../../assets/img/credit.png" alt="">
                </v-col>
                <v-col cols="7" class="my-auto text-center text-white">
                  <h2>20,000 {{ $t('panel.credit.priceunit') }}</h2> 
                  
                  <h4 class="mt-3">{{ $t('panel.credit.mycredir') }} </h4>
                </v-col>
              </v-row>
              
              </v-sheet>
            </v-col>
            <v-col cols="12"  sm="6" md="3">
              <v-sheet
              class="px-4 py-1 d-flex justify-center chargecard"
               >
              <v-row>
                <v-col cols="5" class="chargecardimg">
                  <img src="../../assets/img/charge.png" alt="" >
                </v-col>
                <v-col cols="7" class="my-auto text-center text-white">
                  <h2>450,000 {{ $t('panel.credit.priceunit') }}</h2>
                  <h4 class="mt-3">{{ $t('panel.credit.mycharge') }}</h4>
                </v-col>
              </v-row>
              
              </v-sheet>
            </v-col>
    </v-row>
    <!-- forms -->
    <v-row>
      <v-col cols="12" md="4" class="d-flex justify-center">
          <addcredit/>
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center">
        <transferCredit/>
      </v-col >
      <v-col cols="12" md="4" class="d-flex justify-center"> 
        <addcreditreq/>
      </v-col>
    </v-row>
 
    <!-- credits -->
  <v-row class="d-flex justify-center pb-5 mt-5">
    <h2 class="text-center" style="color: #912909;">تراکنش های اعتباری شما</h2>
    <v-card class="mt-5 table" width="90%">

      <v-row class="pt-2 pb-2"  style="background-color: #912909;color: aliceblue;">
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">تاریخ</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">توضیحات</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">نام دوره</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">مبلغ(ریال)</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">مانده حساب(تجمیعی)</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">نوع تراکنش</h4></v-col>
      </v-row>
 
      <v-row v-for="(credit,index) in credits" class="py-3 tablerow" :class="{'tablerowdark':index%2==1}" >
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ credit.date }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ credit.desc }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ credit.product }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ credit.amount }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ credit.nouaount }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ credit.type }} </h4></v-col>
      </v-row>
    </v-card>
    <div class="text-center my-2">
    <v-pagination
      v-model="page"
      :length="10"
      :total-visible="5"
    ></v-pagination>
  </div>
  </v-row>
  
  <!-- charges -->
  <v-row class="d-flex justify-center pb-5 mt-6">
    <h2 class="text-center" style="color: #912909;">تراکنش های اعتبار آموزشی شما</h2>
    <v-card class="mt-5 table" width="90%">
      <v-row class="pt-2 pb-2"  style="background-color: #912909;color: aliceblue;">
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">تاریخ</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">توضیحات</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">نام دوره</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">مبلغ(ریال)</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">مانده حساب(تجمیعی)</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">نوع تراکنش</h4></v-col>
      </v-row>
      
      <v-row v-for="(charge,index) in charges" class="py-3 tablerow" :class="{'tablerowdark':index%2==1}" >
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ charge.date }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ charge.desc }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ charge.product }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ charge.amount }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ charge.nouaount }}</h4></v-col>
        <v-col md="2" cols="12" class="d-flex justify-center"><h4 class="text-center">{{ charge.type }} </h4></v-col>
      </v-row>
      
    </v-card>
    <div class="text-center my-2">
    <v-pagination
      v-model="page"
      :length="10"
      :total-visible="5"
    ></v-pagination>
  </div>
  </v-row>
</v-container> 
  </template>
  <script>
  import addcredit from '@/components/UserPanel/CreditForms/AddCredit.vue'
  import transferCredit from './CreditForms/TransferCredit.vue';
  import addcreditreq from './CreditForms/AddCreditRequest.vue'
    export default {
      data: () => ({
        page:1,
       credits:[
        {
            date:'1402/12/11',
            desc:'بابت دوره استعدادسنجی - برای : خرید دوره',
            product:'------------',
            amount:'	٢٤,٠٠٠,٠٠٠ ریال	',
            nouaount:'٢٤,٠٠١,٠٠٠ ریال',
            type:'	افزایش اعتبار	'
        },{
          date:'1402/12/11',
            desc:'بابت دوره بوتکمپ پروژه محور برنامه نویسی پایتون - برای : خرید دوره',
            product:'آمادگی پیش از بوت‌کمپ: Pre-Bootcamp',
            amount:'	٢٤,٠٠٠,٠٠٠ ریال	',
            nouaount:'٢٤,٠٠١,٠٠٠ ریال',
            type:'	افزایش اعتبار	'
        }
       ],
       charges:[
        {
            date:'1402/12/11',
            desc:'------------',
            product:'آمادگی بوتکمپ های برنامه نویسی و استعدادسنجی',
            amount:'	٢٤,٠٠٠,٠٠٠ ریال	',
            nouaount:'٢٤,٠٠١,٠٠٠ ریال',
            type:'برای دوره'
        },{
          date:'1402/12/11',
            desc:'------------',
            product:'آمادگی پیش از بوت‌کمپ: Pre-Bootcamp',
            amount:'	٢٤,٠٠٠,٠٠٠ ریال	',
            nouaount:'٢٤,٠٠١,٠٠٠ ریال',
            type:'برای دوره'
        }
       ]
      }),
      components:{
        addcredit,transferCredit,addcreditreq
      },
      methods:{
       
      }
    }
  </script>
  <style scoped>
@import url(../../assets/css/UserPanel/credit.css);
</style>