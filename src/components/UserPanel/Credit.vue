<template>  
   <!-- cards -->
    <v-row class="mt-6 center-class" >
            <v-col cols="12" sm="6" md="3">
              <v-sheet
              class="px-4 py-2 creditcard"
               >
              <v-row>
                <v-col class="creditcardimg center-class" cols="5">
                  <img src="../../assets/img/icons8-credit-64.png" alt="">
                </v-col>
                <v-col cols="7" class="my-auto text-center text-white">
                  <h2>20,000 ریال</h2> 
                  
                  <h4 class="mt-3">گواهینامه ها</h4>
                </v-col>
              </v-row>
              
              </v-sheet>
            </v-col>
            <v-col cols="12"  sm="6" md="3">
              <v-sheet
              class="px-4 py-1 center-class chargecard"
               >
              <v-row>
                <v-col cols="5" class="chargecardimg">
                  <img src="../../assets/img/icons8-card-exchange-80.png" alt="" >
                </v-col>
                <v-col cols="7" class="my-auto text-center text-white">
                  <h2>450,000 ریال</h2>
                  <h4 class="mt-3">شارژ من</h4>
                </v-col>
              </v-row>
              
              </v-sheet>
            </v-col>
    </v-row>
    <!-- forms -->
    <v-row>
      <v-col cols="12" md="4" class="center-class">
          <addcredit/>
      </v-col>
      <v-col cols="12" md="4" class="center-class">
        <transferCredit/>
      </v-col >
      <v-col cols="12" md="4" class="center-class"> 
        <addcreditreq/>
      </v-col>
    </v-row>
 
    <!-- credits -->
    <v-row class="center-class">
    <v-card class="mt-5" width="90%">
      <v-toolbar
        color="#912909"
      >
        <v-toolbar-title>تراکنش های اعتباری شما</v-toolbar-title>
      </v-toolbar>
      <v-row class="pt-2 pb-2">
        <v-col cols="2" class="center-class"><h3 class="text-center">تاریخ</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">توضیحات</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">نام دوره</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">مبلغ(ریال)</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">مانده حساب(تجمیعی)</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">نوع تراکنش</h3></v-col>
      </v-row>
    </v-card>
    </v-row>
  <!-- charges -->
  <v-row class="center-class">
    <v-card class="mt-5" width="90%">
      <v-toolbar
        color="#912909"
      >
        <v-toolbar-title>تراکنش های شارژ شما</v-toolbar-title>
      </v-toolbar>
      <v-row class="pt-2 pb-2">
        <v-col cols="2" class="center-class"><h3 class="text-center">تاریخ</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">توضیحات</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">نام دوره</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">مبلغ(ریال)</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">مانده حساب(تجمیعی)</h3></v-col>
        <v-col cols="2" class="center-class"><h3 class="text-center">نوع تراکنش</h3></v-col>
      </v-row>
    </v-card>
  </v-row>

  </template>
  <script>
  import addcredit from '@/components/UserPanel/CreditForms/AddCredit.vue'
  import transferCredit from './CreditForms/TransferCredit.vue';
  import addcreditreq from './CreditForms/AddCreditRequest.vue'
    export default {
      data: () => ({
       
      }),
      components:{
        addcredit,transferCredit,addcreditreq
      },
      methods:{
       
      }
    }
  </script>
  <style scoped>
.creditcard{
    width:100% !important;
    min-height:50% !important;
    border-radius: 10px;
    border: rgb(205, 163, 25) 4px solid;
    background-color :rgb(205, 163, 25)
}
.creditcardimg{
    padding-inline-end: 0% !important;
}
.creditcardimg img {
    width: 80%;height: 90% !important;
}
.chargecard{
    width:100% !important;
    min-height:50% !important;
    border-radius: 10px;
    border:  rgba(215, 87, 36, 0.797)  4px solid;
    background-color :  rgba(215, 87, 36, 0.797) 
}
.chargecardimg{
    padding-inline-end: 0% !important;
}
.chargecardimg img {
    width: 80%;height: 90% !important;
}
*{
  overflow-y: auto !important;
}
</style>