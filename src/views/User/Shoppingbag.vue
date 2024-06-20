<template>
  <banner />
  <myheader img="src/assets/img/options.jpeg" :header='"شناسه سبد خرید شما " + bagid'
    text="اضافه کردن کلاس/کالا به سبد خرید به منزله رزرو نمی باشد .(درصورتی که ظرفیت کلاس پر شود کلاس به طور اتوماتیک از سبد خرید حذف میگردد)"
    :btns="[{ text: 'بازگشت به صفحه کاربری', link: '/Hello!' }]" />
  <v-container class="mt-10 mb-10" v-if="bagproducts.length != 0">
    <section class="w-100 m-auto">
      <h1>لیست کلاس ها</h1>

      <v-sheet class="d-none d-md-block">
        <v-row class="mt-5 text-center d-flex justify-center">
          <v-col class="d-flex justify-center brown-bg align-center" cols="3">
            <h5>نام کلاس</h5>
          </v-col>
          <v-col class="d-flex justify-center brown-bg align-center" cols="1">
            <h5>نوع</h5>
          </v-col>
          <v-col class="d-flex justify-center brown-bg align-center" cols="1">
            <h5>جلسات باقی مانده</h5>
          </v-col>
          <v-col class="d-flex justify-center brown-bg align-center" cols="1">
            <h5>جلسه</h5>
          </v-col>
          <v-col class="d-flex justify-center brown-bg align-center" cols="1">
            <h5>قیمت اصلی</h5>
          </v-col>
          <v-col class="d-flex justify-center brown-bg align-center" cols="1" >
            <h5>قیمت با تخفیف باشگاه</h5>
          </v-col>
          <!-- <v-col class="d-flex justify-center brown-bg align-center" cols="1">
            <h5>{{ endprice }}</h5>
          </v-col>
          <v-col class="d-flex justify-center brown-bg align-center" cols="1" v-if="creditplace != ''">
            <h5>{{ creditplace }}</h5>
          </v-col> -->
          <!-- <v-col class="d-flex justify-center brown-bg align-center" cols="1">
            <h5>تخفیف باشگاه</h5>
          </v-col> -->
          <v-col class="d-flex justify-center brown-bg align-center" cols="2" v-if="takhfif != ''">
            <h5>{{ takhfif }}</h5>
          </v-col>
          <v-col v-if="0 == 1" class="d-flex justify-center brown-bg align-center" cols="1">
            <h5>بن آموزشگاه</h5>
          </v-col>
          <v-col class="d-flex justify-center brown-bg align-center" cols="1" >
            <h5>مبلغ نهایی</h5>
          </v-col>
          <v-col cols="1" class="brown-bg"></v-col>
        </v-row>

        <v-row v-for="(bagproduct, i) in bagproducts" class="text-center d-flex justify-center "
          :class="{ 'brown-bg-light': i % 2 != 0 }">
          <v-col cols="3" class="br-brown-sm d-flex align-center justify-center">
            <h5>{{ bagproduct.name }}</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <h5>{{ bagproduct.ProType }}</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <h5>{{ bagproduct.SessionsCount }}</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <h5> {{ bagproduct.Hour }}</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <h5>{{ bagproduct.MainPrice }} ریال</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <h5>{{ bagproduct.Price }} ریال</h5>
          </v-col>
          <!-- <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <h5>{{ bagproduct.price }} ریال</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center" v-if="creditplace != ''">
            <h5>{{ bagproduct.credit }} ریال</h5>
          </v-col> -->
          <!-- <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <h5>{{ bagproduct.TakhfifeCloop }} ریال</h5>
          </v-col> -->
          <v-col cols="2" class="br-brown-sm d-flex align-center justify-center" v-if="takhfif != ''">
            <h5>{{ bagproduct.takhfif }} ریال</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center" v-if="0 == 1">
            <h5>{{ bagproduct.charge }} %</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <h5>{{ bagproduct.EndRecordPrice }} ریال</h5>
          </v-col>
          <v-col cols="1" class="br-brown-sm d-flex align-center justify-center">
            <v-btn @click="remove(bagproduct.productId, bagproduct.bagId)"
              icon="fa fa-trash" color="red"></v-btn></v-col>
        </v-row>

      </v-sheet>
      <v-sheet class="d-md-none">
        <v-row class="me-2 ms-2" v-for="bagproduct in bagproducts">
          <v-row class="mt-5 text-center mobilecontent d-flex justify-center">
            <v-col cols="12">
              <h3>{{ bagproduct.name }}</h3>
            </v-col>
            <v-col class="d-flex justify-center align-center" cols="6">
              <h5>نوع</h5>
            </v-col>
            <v-col cols="6">
              <h5>{{ bagproduct.ProType }}</h5>
            </v-col>
            <v-col class="d-flex justify-center align-center" cols="6">
              <h5>جلسات باقی مانده</h5>
            </v-col>
            <v-col cols="6">
              <h5>{{ bagproduct.SessionsCount }} جلسه</h5>
            </v-col>
            <v-col class="d-flex justify-center align-center" cols="6">
              <h5>جلسه</h5>
            </v-col>
            <v-col cols="6">
              <h5> {{ bagproduct.Hour }}</h5>
            </v-col>
            <v-col class="d-flex justify-center align-center" cols="6">
              <h5>قیمت اصلی</h5>
            </v-col>
            <v-col cols="6">
              <h5>{{ bagproduct.MainPrice }} ریال</h5>
            </v-col>
            <v-col class="d-flex justify-center align-center" cols="6">
              <h5>قیمت با تخفیف باشگاه</h5>
            </v-col>
            <v-col cols="6">
              <h5>{{ bagproduct.Price }} ریال</h5>
            </v-col>
            <!-- <v-col class="d-flex justify-center align-center" cols="6">
              <h5>{{ endprice }}</h5>
            </v-col>
            <v-col cols="6">
              <h5>{{ bagproduct.price }} ریال</h5>
            </v-col>
            <v-col class="d-flex justify-center align-center" cols="6" v-if="creditplace != ''">
              <h5>{{ creditplace }}</h5>
            </v-col>
            <v-col cols="6" v-if="creditplace != ''">
              <h5>{{ bagproduct.credit }} ریال</h5>
            </v-col> -->

            <!-- <v-col class="d-flex justify-center align-center" cols="6">
              <h5>تخفیف باشگاه</h5>
            </v-col>
            <v-col cols="6">
              <h5>{{ bagproduct.TakhfifeCloop }} ریال</h5>
            </v-col> -->

            <v-col class="d-flex justify-center align-center" cols="6" v-if="takhfif != ''">
              <h5>{{ takhfif }}</h5>
            </v-col>
            <v-col cols="6" v-if="takhfif != ''">
              <h5>{{ bagproduct.takhfif }} ریال</h5>
            </v-col>
            <v-col v-if="0 == 1" class="d-flex justify-center align-center" cols="6">
              <h5>بن آموزشگاه</h5>
            </v-col>
            <v-col class="d-flex justify-center align-center" cols="6">
              <h5>قیمت نهایی</h5>
            </v-col>
            <v-col cols="6">
              <h5>{{ bagproduct.EndRecordPrice }} ریال</h5>
            </v-col>
            <v-col cols="12"><v-btn @click="remove(bagproduct.productId, bagproduct.bagId)" icon="fa fa-trash"
                color="red"></v-btn></v-col>
          </v-row>
        </v-row>
      </v-sheet>
    </section>
    <section class="mt-10" style="width: 100%;margin: auto;">
      <v-row class="d-flex justify-center">
        <!-- <v-col cols="12" md="4" class="justify-center">
          <v-sheet>
            <v-row class="positivecredit">
              <v-col cols="8">
                <h5>موجودی فعلی نقدی شما :</h5>
              </v-col>
              <v-col cols="4">
                <h5>{{ CartDetail.UserCredit }} ریال</h5>
              </v-col>
            </v-row>
            <v-row class="positivecredit">
              <v-col cols="8">
                <h5>اعتبار فعلی آموزشی شما :</h5>
              </v-col>
              <v-col cols="4">
                <h5>{{ CartDetail.UserCharge }} ریال</h5>
              </v-col>
            </v-row>
            <v-row class="positivecredit" v-if="CartDetail.CreditDiscount > 0">
              <v-col cols="8">
                <h5>مجموع اعتبار نقدی هدیه بابت این خرید :</h5>
              </v-col>
              <v-col cols="4">
                <h5>{{ CartDetail.CreditDiscount }} ریال</h5>
              </v-col>
            </v-row>
            <v-row class="positivecredit" v-if="CartDetail.Discounts > 0">
              <v-col cols="8">
                <h5>مجموع اعتبار آموزشی هدیه بابت این خرید:</h5>
              </v-col>
              <v-col cols="4">
                <h5>{{ CartDetail.Discounts }} ریال</h5>
              </v-col>
            </v-row>
            <v-row class="negativecredit">
              <v-col cols="8">
                <h5>مانده اعتبار نقدی پس از خرید :</h5>
              </v-col>
              <v-col cols="4">
                <h5> {{ CartDetail.CreditAfter }} ریال</h5>
              </v-col>
            </v-row>
            <v-row class="negativecredit">
              <v-col cols="8">
                <h5>مانده اعتبار آموزشی پس از خرید :</h5>
              </v-col>
              <v-col cols="4">
                <h5> {{ CartDetail.ChargeAfter }} ریال</h5>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col> -->
        <!-- <v-col class="d-none d-md-block"></v-col> -->
        <v-col class="ma-1 " cols="12" md="4">
          <h3 class="mb-5 text-center">فاکتور شما</h3>
          <v-sheet class="">
            <v-row class="factorrow d-flex justify-center">
              <v-col cols="8">
                <h5>تعداد کل کلاس/کالا های شما</h5>
              </v-col>
              <v-col cols="4">
                <h5>{{ bagcount }}</h5>
              </v-col>
            </v-row>
            <v-row class="factorrow">
              <v-col cols="8">
                <h5>مجموع قیمت با احتساب تخفیف باشگاه</h5>
              </v-col>
              <v-col cols="4">
                <h5>{{ CartDetail.CompletePrice }} ریال</h5>
              </v-col>
            </v-row>
            <v-row class="factorrow">
              <v-col cols="8">
                <h5>اعتبار شما</h5>
              </v-col>
              <v-col cols="4">
                <h5> {{ CartDetail.CurrentTotalCredit }} ریال</h5>
              </v-col>
            </v-row> 
            <v-row class="factorrow">
              <v-col cols="8">
                <h5>تخفیف سامانه </h5>
              </v-col>
              <v-col cols="4">
                <h5> {{ CartDetail.Discounts }} ریال</h5>
              </v-col>
            </v-row>
            <v-row class="factorrow">
              <v-col cols="8"><v-text-field v-model="serialnumber" label="کد هدیه دارید؟وارد کنید..."></v-text-field>
              </v-col>
              <v-col cols="4"><v-btn class="code" @click="adduserserial" append-icon="fa fa-credit-card">اعمال
                  کد</v-btn></v-col>
            </v-row>
            <v-row class="factorrow">
              <v-col cols="8">
                <h5>مبلغ قابل پرداخت</h5>
              </v-col>
              <v-col cols="4">
                <h5> {{ CartDetail.BankPay }} ریال</h5>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </section>
    <v-row class="mt-5 d-flex justify-center">
      <v-btn color="green-darken-4" rounded="0" append-icon="fa fa-arrow-left" @click="gobank()">ادامه خرید</v-btn>
    </v-row>
  </v-container>
  <v-container class="mt-10 mb-10" v-else>
    <div class="d-flex justify-center mb-2">
      <img src="../../assets/img/icons8-shopping-cart-100.png" alt="">
    </div>
    <h2 style="color: #B2550A;" class="text-center">کلاس ای در سبد خرید شما نیست</h2>
  </v-container>
  <myfooter style="margin-top: -6px;" />


  <ResultNotification v-if="snackbar" :show="snackbar" :location="'top right'" :type="snackbartype" :text="snackbartext"
    @close="snackbar = false" />

</template>
<script>
import banner from '@/components/Banner.vue';
import myheader from '@/components/Header.vue';
import myfooter from '@/components/Footer.vue'
import ResultNotification from '@/components/ResultNotification.vue'
import { Callaxios } from '@/assets/composable/CallAxus';

import { ToRial } from '@/assets/helper/heper';
export default {
  data() {
    return {
      shopdialog: false,
      endprice: '',
      creditplace: '',
      takhfif: '',
      bagproducts: [],
      bagid: 0,
      snackbar: false,
      snackbartype: '',
      snackbartext: '',
      CartDetail: {},
      bagcount: 0,
      serialnumber: ''
    }
  },
  components: {
    banner, myheader, myfooter, ResultNotification
  },
  mounted() {
    Callaxios('ShoppingBag/LoadCart', 'post', undefined, this.afterloadcard)
  },
  methods: {
    afterloadcard(param) {
      this.bagproducts = []
      for (var i = 0; i < param.Data.length; i++) {
        var type = ''
        this.bagid = param.Data[i].id
        if (param.Data[i].type == 3 && param.Data[i].ProType != 1) {
          type = 'پیش ثبت نام'
        } else if (param.Data[i].type == 1 && param.Data[i].ProType != 1) {
          type = 'کلاس'
        } else if (param.Data[i].type == 2 && param.Data[i].ProType != 1) {
          type = 'کلاس با تخفیف'
        } else if (aram.Data[i].ProType == 1) {
          type = 'کالا'
        }

        var price = param.Data[i].price - param.Data[i].SystemShare

        if (param.Data[i].SystemShare > 0 && this.endprice == '') {
          this.endprice = 'بخش نقدی'
        } else {
          this.endprice = 'قیمت پس از تخفیف'
        }

        if (param.Data[i].SystemShare > 0 && this.creditplace == '') {
          this.creditplace = 'بخش اعتباری'
        }

        if (param.Data[i].TakhfifNaghdi + param.Data[i].TakhfifSabteNam  > 0 && this.takhfif == '') {
          this.takhfif = 'هدیه خرید نقدی و ثبت نام(اعتبار)'
        }
        console.log(param.Data)
        this.bagproducts.push({
          name: param.Data[i].name,
          ProType: type,
          Hour: param.Data[i].Hour,
          // MainPrice: param.Data[i].MainPrice,
          price: ToRial(price),
          TakhfifeCloop: ToRial(param.Data[i].TakhfifeCloop),
          credit: param.Data[i].SystemShare,
          takhfif: ToRial(param.Data[i].TakhfifNaghdi + param.Data[i].TakhfifSabteNam ),
          charge: param.Data[i].UserCharge ?? 0,
          productId: param.Data[i].ProductId,
          bagId: param.Data[i].id,
          SessionsCount: param.Data[i].SessionsCount,
          MainPrice: ToRial(param.Data[i].MainPrice),
          Price :ToRial( param.Data[i].price),
          EndRecordPrice :ToRial(param.Data[i].price - param.Data[i].TakhfifNaghdi -param.Data[i].TakhfifSabteNam)
        })
        this.bagcount = this.bagcount + 1
      }
      Callaxios('UserProduct/UserProductsCalc', 'post', [], this.aftercalc)

    },
    aftercalc(param) {
      this.CartDetail = param.Data
      this.CartDetail.UserCredit = ToRial(this.CartDetail.UserCredit)
      this.CartDetail.CompletePrice = ToRial(this.CartDetail.CompletePrice)
      this.CartDetail.BankPay = ToRial(this.CartDetail.BankPay)
      this.CartDetail.UserCharge = ToRial(this.CartDetail.UserCharge)
      this.CartDetail.CreditDiscount = ToRial(this.CartDetail.CreditDiscount)
      this.CartDetail.Discounts = ToRial(this.CartDetail.Discounts)
      this.CartDetail.CreditAfter = ToRial(this.CartDetail.CreditAfter)
      this.CartDetail.ChargeAfter = ToRial(this.CartDetail.ChargeAfter)
      this.CartDetail.CurrentTotalCredit = ToRial(this.CartDetail.CurrentTotalCredit)


    },
    remove(pid, bid) {
      var input = {
        id: bid,
        productId: pid
      }
      Callaxios('ShoppingBag/RemovefromCart', 'post', input, this.afterremove)
    },
    afterremove(param) {
      this.snackbartext = param.Data
      this.snackbartype = 'success'
      this.snackbar = true
      window.location.reload()
    },
    gobank() {
      Callaxios('Online/CheckBank', 'post', { isCredit: 100, sb: {  } }, this.aftercheck)
    },
    aftercheck(param) {
      window.open(param.Data)
    },
    adduserserial() {
      Callaxios('SerialNumbers/GetSerialNumberContent/' + this.serialnumber, 'get', undefined, this.afteraddserialnumber)
    },
    afteraddserialnumber(param) {
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.mobilecontent {
  border: 5px solid rgba(148, 58, 25, 0.71);
}


.positivecredit {
  background-color: rgba(194, 153, 31, 0.454);
}

.positivecredit .v-col {
  border: 1px solid rgba(194, 153, 31, 0.454);
}

.negativecredit {
  background-color: rgba(225, 102, 61, 0.514);
}

.negativecredit .v-col {
  border: 1px solid #dbd5d5;
}

.factorrow .v-col {
  border: 1px solid #dbd5d5;

}

.v-text-field {
  margin: 0% !important;
  margin-bottom: -5% !important;
}

.code {
  margin-top: 5%;
  font-family: 'IRANSANS' !important;
  width: 100%;
  height: 70% !important;
  background-color: rgb(148, 146, 146);
}
</style>