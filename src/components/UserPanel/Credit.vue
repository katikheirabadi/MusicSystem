<template>
  <v-container>
    <v-row class="mt-5 d-flex justify-center">
      <v-col cols="12" md="4">
        <v-select no-transition :label="$t('panel.credit.selectcompany')" :items="companies"
          :item-title="item => item.key" :item-value="item => item.value" v-model="selectcompany" variant="outlined"
          class="selectclass"></v-select>
      </v-col>
      <v-col cols="12" md="2">
        <v-btn class="creditcardbtn text-white" style="height: 70%;" @click="changeactiveCompany">{{ $t('panel.credit.changeActivcompany') }}</v-btn>
      </v-col>

    </v-row>

    <!-- cards -->
    <v-row class="mt-1 d-flex justify-center">
      <v-col cols="12" sm="6" md="3">
        <v-sheet class="px-4 py-2 creditcard">
          <v-row>
            <v-col class="creditcardimg d-flex justify-center" cols="5">
              <img src="../../assets/img/credit.png" alt="">
            </v-col>
            <v-col cols="7" class="my-auto text-center text-white">
              <h2>{{ amount }} {{ $t('panel.credit.priceunit') }}</h2>

              <h4 class="mt-3">{{ $t('panel.credit.mycredir') }} </h4>
            </v-col>
          </v-row>

        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-sheet class="px-4 py-1 d-flex justify-center chargecard">
          <v-row>
            <v-col cols="5" class="chargecardimg">
              <img src="../../assets/img/charge.png" alt="">
            </v-col>
            <v-col cols="7" class="my-auto text-center text-white">
              <h2>{{ charge }} {{ $t('panel.credit.priceunit') }}</h2>
              <h4 class="mt-3">{{ $t('panel.credit.mycharge') }}</h4>
            </v-col>
          </v-row>

        </v-sheet>
      </v-col>
    </v-row>

    <!-- forms -->
    <v-row>
      <v-col cols="12" md="4" class="d-flex justify-center">
        <addcredit :companyId="selectcompany"/>
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center">
        <transferCredit :companyId="selectcompany" />
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center">
        <addcreditreq :companyId="selectcompany"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <!-- credits -->
        <v-row class="d-flex justify-center pb-5  mt-5">
          <h2 class="text-center creditreprttitle">{{ $t('panel.credit.creditreprttitle') }}</h2>
          <v-card class="mt-5 table" width="95%">
            <v-row class="pt-5 pb-2 creditreportcol">
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reportdate') }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reqdesc') }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reqproductname') }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{  $t('panel.credit.reqprice') }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{  $t('panel.credit.reqnow') }} </h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center"> {{ $t('panel.credit.reqtype') }}</h4>
              </v-col>
            </v-row>
            <v-row v-if="showcredit.length == 0" class="py-3 tablerow">
              <v-col>
                <h3 class="text-center">{{  $t('panel.credit.reqno') }}</h3>
              </v-col>
            </v-row>
            <v-row v-if="showcredit.length > 0" v-for="(credit, index) in showcredit" 
              class="pt-3 pb-5 tablerow"
              :class="{ 'tablerowdark': index % 2 == 1 }">
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ credit.date }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center" >{{ credit.shortdesc }}
                 <v-tooltip activator="parent" location="top">{{
                  credit.desc }}</v-tooltip>
                </h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ credit.product }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center" :class="{'decrees':credit.amount.includes('-')}">
                  {{ credit.amount }}
                </h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center" :class="{'decrees':credit.nouaount.includes('-')}">
                  {{ credit.nouaount }}
                </h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center" :class="{'decrees':credit.amount.includes('-')}">
                  {{ credit.type }} 
                </h4>
              </v-col>
            </v-row>
          </v-card>
          <div v-if="showcredit.length > 0" class="text-center my-2">
            <v-pagination :length="creditlen" :total-visible="5" v-model="currentcredit"
              @click="onCreditPageChange(currentcredit)"></v-pagination>
          </div>

        </v-row>

      </v-col>
      <v-col cols="12" md="6">
        <!-- charges -->
        <v-row class="d-flex justify-center pb-5 mt-6">
          <h2 class="text-center creditreprttitle">{{  $t('panel.credit.chargereporttitle') }}</h2>
          <v-card class="mt-5 table" width="95%">
            <v-row class="pt-5 pb-2 creditreportcol">
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reportdate') }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reqdesc') }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reqproductname') }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reqprice') }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reqnow') }} </h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ $t('panel.credit.reqtype') }}</h4>
              </v-col>
            </v-row>
            <v-row v-if="showcharge.length == 0" class="py-3 tablerow">
              <v-col>
                <h3 class="text-center">{{ $t('panel.credit.reqno') }}</h3>
              </v-col>
            </v-row>
            <v-row v-if="showcharge.length > 0" v-for="(charge, index) in showcharge" class="py-3 tablerow"
              :class="{ 'tablerowdark': index % 2 == 1 }">
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ charge.date }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ charge.shortdesc }}<v-tooltip activator="parent" location="top">{{
                  charge.desc }}</v-tooltip></h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center">{{ charge.product }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center" :class="{'decrees':charge.amount.includes('-')}">{{ charge.amount }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center" :class="{'decrees':charge.nouaount.includes('-')}">{{ charge.nouaount }}</h4>
              </v-col>
              <v-col md="2" cols="12" class="d-flex justify-center">
                <h4 class="text-center" :class="{'decrees':charge.amount.includes('-')}">{{ charge.type }} </h4>
              </v-col>
            </v-row>

          </v-card>
          <div v-if="showcharge.length > 0" class="text-center my-2">
            <v-pagination :length="chargelen" :total-visible="show" v-model="currentcharge"
              @click="onchargePageChange(currentcharge)"></v-pagination>
          </div>
        </v-row>
      </v-col>
    </v-row>


  </v-container>
</template>
<script>
import addcredit from '@/components/UserPanel/CreditForms/AddCredit.vue'
import transferCredit from './CreditForms/TransferCredit.vue';
import addcreditreq from './CreditForms/AddCreditRequest.vue'
import i18n from '@/locales/i18n'

import { Callaxios } from '@/assets/composable/CallAxus';
import { shorttext, ToRial } from '@/assets/helper/heper.js'
export default {
  data: () => ({
    show: 2,
    options: { year: 'numeric', month: 'long', day: 'numeric' },
    credits: [],
    showcredit: [],
    totalcredit: 0,
    currentcredit: 0,
    charges: [],
    showcharge: [],
    totalcharge: 0,
    currentcharge: 0,
    selectcompany: -1,
    companies: [],
    amount: 0,
    charge: 0,
    chargelen: 1,
    creditlen: 1
  }),
  components: {
    addcredit, transferCredit, addcreditreq
  },
  methods: {
    aftergetallcompanies(param) {
      this.companies = param.Data
      Callaxios('Company/GetActiveCompany', 'get', undefined, this.aftergetactivecompany)
    },
    aftergetactivecompany(param) {
      if (param.Data.companyId == 0) {
        this.selectcompany = undefined
      } else {
        this.selectcompany = param.Data.companyId
      }
      Callaxios('Company/GetUserCompanyDetail/' + this.selectcompany, 'get', undefined, this.afterfetusercompany)
    },
    changeactiveCompany() {
      Callaxios('Company/Changeactivecompany/', 'post', { companyId: this.selectcompany }, this.afterchangecompany)
    },
    afterchangecompany(param) {
      Callaxios('Company/GetUserCompanyDetail/' + this.selectcompany, 'get', undefined, this.afterfetusercompany)
    },
    afterfetusercompany(param) {
      this.amount = param.Data.TotalAmount
      this.charge = param.Data.TotalCharge
      Callaxios('UserCredit/GetFinancialReport', 'post', { IsAdmin: false, cerditType: 1, CompanyId: this.selectcompany }, this.aftergettransactions)
      Callaxios('UserCredit/GetFinancialReport', 'post', { IsAdmin: false, CompanyId: this.selectcompany }, this.aftercharges)

    },
    aftergettransactions(param) {
      this.credits = []
      this.totalcredit = param.Data.length
      this.creditlen = this.totalcredit > this.show ? this.totalcredit / this.show : 1
      if (this.totalcredit % this.show > 0 && this.totalcredit > this.show) {
        this.creditlen = this.creditlen + 1

      }
      param.Data.filter((i) => this.credits.push({
        date: new Date(i.CreationDate).toLocaleDateString('fa-IR', this.options),
        desc: i.Description,
        shortdesc: shorttext(i.Description, 10),
        product: i.productname == '' ? '--------' : i.productname,
        amount: ToRial(i.TransactionAmount) + i18n.global.t('message.unit'),
        nouaount: ToRial(i.TotalAmount) + i18n.global.t('message.unit'),
        type: i.CrediRoot
      }))

      this.onCreditPageChange(1)
    },
    onCreditPageChange(page) {
      this.showcredit = []
      for (var i = (page * this.show) - this.show; i < (page * this.show) && i < this.totalcredit; i++) {
        this.showcredit.push(this.credits[i])
      }
    },
    aftercharges(param) {
      this.charges = []
      this.totalcharge = param.Data.length
      this.chargelen = this.totalcharge > this.show ? this.totalcharge / this.show : 1
      if (this.totalcharge % this.show > 0 && this.totalcharge > this.show) {
        this.chargelen = this.chargelen + 1

      }
      param.Data.filter((i) => this.charges.push({
        date: new Date(i.CreationDate).toLocaleDateString('fa-IR', this.options),
        desc: i.Description,
        shortdesc: shorttext(i.Description, 10),
        product: i.productname == '' ? '--------' : i.productname,
        amount: ToRial(i.TransactionAmount) +i18n.global.t('message.unit'),
        nouaount: ToRial(i.TotalAmount) + i18n.global.t('message.unit'),
        type: i.CrediRoot
      }))
      this.onchargePageChange(1)
    },
    onchargePageChange(page) {
      this.showcharge = []
      for (var i = (page * this.show) - this.show; i < (page * this.show) && i < this.totalcharge; i++) {
        this.showcharge.push(this.charges[i])
      }
    },
  },
  mounted() {
    Callaxios('Company/GetAllCompanyForSelect', 'get', undefined, this.aftergetallcompanies)
  }
}
</script>
<style scoped>@import url(../../assets/css/UserPanel/credit.css);</style>