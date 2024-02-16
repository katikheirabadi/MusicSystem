<template>
    <banner/>
    <myheader 
    img="src/assets/img/options.jpeg" 
    :header='"شناسه سبد خرید شما " +bagid'
    text="اضافه کردن دوره/کالا به سبد خرید به منزله رزرو نمی باشد .(درصورتی که ظرفیت کلاس پر شود دوره به طور اتوماتیک از سبد خرید حذف میگردد)" 
    :btns="[{text:'بازگشت به صفحه کاربری',link:'/Hello!'}]"/>
     <v-container class="mt-10 mb-10" v-if="bagproducts.length !=0">
        <section style="width: 100%;margin: auto;">
            <h1>لیست دوره ها</h1>
            
            <v-sheet class="d-none d-md-block" >
              <v-row  class="mt-5 text-center content contentheader d-flex justify-center">
                  <v-col class="d-flex justify-center align-center" cols="2"><strong>نام دوره</strong></v-col>
                  <v-col class="d-flex justify-center align-center" cols="1"><strong>نوع</strong></v-col>
                  <v-col class="d-flex justify-center align-center"  cols="1"><strong>جلسات باقی مانده</strong></v-col>
                  <v-col class="d-flex justify-center align-center"  cols="1"><strong>جلسه</strong></v-col>
                  <v-col class="d-flex justify-center align-center"  cols="1"><strong>قیمت اصلی</strong></v-col>
                  <v-col class="d-flex justify-center align-center"  cols="1"><strong >{{ endprice }}</strong></v-col>
                  <v-col class="d-flex justify-center align-center" cols="1" v-if="creditplace!=''"><strong >{{ creditplace }}</strong></v-col>
                  <v-col class="d-flex justify-center align-center" cols="1"><strong>تخفیف باشگاه</strong></v-col>
                  <v-col class="d-flex justify-center align-center" cols="2" v-if="takhfif!=''"><strong >{{ takhfif }}</strong></v-col>
                  <v-col v-if="0==1" class="d-flex justify-center align-center" cols="1"><strong>بن آموزشگاه</strong></v-col>
                  <v-col cols="1"></v-col>
                </v-row>
               
                <v-row v-for="(bagproduct,i) in bagproducts" class="text-center content d-flex justify-center" :class="{'contentrow':i%2!=0}">
                  <v-col cols="2"><strong>{{ bagproduct.name }}</strong></v-col>
                  <v-col cols="1"><strong>{{ bagproduct.ProType }}</strong></v-col>
                  <v-col cols="1"><strong>{{ bagproduct.SessionsCount }}</strong></v-col>
                  <v-col cols="1"><strong> {{ bagproduct.Hour }}</strong></v-col>
                  <v-col cols="1"><strong>{{ bagproduct.MainPrice }} ریال</strong></v-col>
                  <v-col cols="1"><strong>{{ bagproduct.price }} ریال</strong></v-col>
                  <v-col cols="1" v-if="creditplace!=''"><strong>{{ bagproduct.credit }} ریال</strong></v-col>
                  <v-col cols="1"><strong>{{ bagproduct.TakhfifeCloop }} %</strong></v-col>
                  <v-col cols="2" v-if="takhfif!=''"><strong>{{ bagproduct.takhfif }} ریال</strong></v-col>
                  <v-col cols="1" v-if="0==1"><strong>{{ bagproduct.charge }} %</strong></v-col>
                  <v-col cols="1"><v-btn @click="remove(bagproduct.productId,bagproduct.bagId)" icon="fa fa-trash" color="red"></v-btn></v-col>
                </v-row>

            </v-sheet>
            <v-sheet class="d-md-none">
              <v-row class="me-2 ms-2" v-for="bagproduct in bagproducts">
                <v-row  class="mt-5 text-center mobilecontent d-flex justify-center">
                  <v-col class="d-flex justify-center align-center" cols="12">
                    <h3>نام دوره</h3>
                  </v-col>
                  <v-col cols="12"><h3>{{ bagproduct.name }}</h3></v-col>
                  <v-col class="d-flex justify-center align-center" cols="6">
                    <strong>نوع</strong>
                  </v-col>
                  <v-col cols="6"><strong>{{ bagproduct.ProType }}</strong></v-col>
                  <v-col class="d-flex justify-center align-center"  cols="6">
                    <strong>جلسات باقی مانده</strong></v-col>
                  <v-col cols="6"><strong>{{ bagproduct.SessionsCount }} جلسه</strong></v-col>
                  <v-col class="d-flex justify-center align-center"  cols="6">
                    <strong>جلسه</strong></v-col>
                  <v-col cols="6"><strong> {{ bagproduct.Hour }}</strong></v-col>
                  <v-col class="d-flex justify-center align-center"  cols="6"><strong>قیمت اصلی</strong></v-col>
                  <v-col cols="6"><strong>{{ bagproduct.MainPrice }} ریال</strong></v-col>
                  <v-col class="d-flex justify-center align-center"  cols="6"><strong >{{ endprice }}</strong></v-col>
                  <v-col cols="6"><strong>{{ bagproduct.price }} ریال</strong></v-col>
                  <v-col class="d-flex justify-center align-center" cols="6" v-if="creditplace!=''"><strong >{{ creditplace }}</strong></v-col>
                  <v-col cols="6" v-if="creditplace!=''"><strong>{{ bagproduct.credit }} ریال</strong></v-col>

                  <v-col class="d-flex justify-center align-center" cols="6"><strong>تخفیف باشگاه</strong></v-col>
                  <v-col cols="6"><strong>{{ bagproduct.TakhfifeCloop }} %</strong></v-col>

                  <v-col class="d-flex justify-center align-center" cols="6" v-if="takhfif!=''"><strong >{{ takhfif }}</strong></v-col>
                  <v-col cols="6" v-if="takhfif!=''"><strong>{{ bagproduct.takhfif }} ریال</strong></v-col>
                  <v-col v-if="0==1" class="d-flex justify-center align-center" cols="6"><strong>بن آموزشگاه</strong></v-col>
                  <v-col cols="12"><v-btn @click="remove(bagproduct.productId,bagproduct.bagId)" icon="fa fa-trash" color="red"></v-btn></v-col>
                </v-row>
              </v-row>
            </v-sheet>
        </section>
        <section class="mt-10" style="width: 100%;margin: auto;">
          <v-row>
            <v-col cols="12" md="4" class="justify-center">
              <v-sheet>
                <v-row class="positivecredit">
                  <v-col cols="8"><strong>موجودی فعلی نقدی شما :</strong></v-col>
                  <v-col cols="4"><strong>{{ CartDetail.UserCredit }} ریال</strong></v-col>
                </v-row>
                <v-row class="positivecredit">
                  <v-col cols="8"><strong>اعتبار فعلی آموزشی شما :</strong></v-col>
                  <v-col cols="4"><strong>{{ CartDetail.UserCharge }} ریال</strong></v-col>
                </v-row>
                <v-row class="positivecredit" v-if="CartDetail.CreditDiscount>0">
                  <v-col cols="8"><strong>مجموع اعتبار نقدی هدیه بابت این خرید  :</strong></v-col>
                  <v-col cols="4"><strong>{{ CartDetail.CreditDiscount }} ریال</strong></v-col>
                </v-row>
                <v-row class="positivecredit" v-if="CartDetail.Discounts>0">
                  <v-col cols="8"><strong>مجموع اعتبار آموزشی هدیه بابت این خرید:</strong></v-col>
                  <v-col cols="4"><strong>{{ CartDetail.Discounts }} ریال</strong></v-col>
                </v-row>
                <v-row class="negativecredit">
                  <v-col cols="8"><strong>مانده اعتبار نقدی پس از خرید :</strong></v-col>
                  <v-col cols="4"><strong>	{{ CartDetail.CreditAfter }} ریال</strong></v-col>
                </v-row>
                <v-row class="negativecredit">
                  <v-col cols="8"><strong>مانده اعتبار آموزشی پس از خرید :</strong></v-col>
                  <v-col cols="4"><strong>	{{ CartDetail.ChargeAfter }} ریال</strong></v-col>
                </v-row>
              </v-sheet>
            </v-col>
            <v-col class="d-none d-md-block"></v-col>
            <v-col class="ma-1 " cols="12" md="4">
              <h3 class="mb-5 text-center">فاکتور شما</h3>
              <v-sheet class="">
                <v-row class="factorrow d-flex justify-center">
                  <v-col cols="8"><strong>تعداد کل دوره/کالا های شما</strong></v-col>
                  <v-col cols="4"><strong>{{ bagcount }}</strong></v-col>
                </v-row>
                <v-row class="factorrow">
                  <v-col cols="8"><strong>مجموع قیمت با احتساب تخفیف باشگاه</strong></v-col>
                  <v-col cols="4"><strong>{{ CartDetail.CompletePrice }} ریال</strong></v-col>
                </v-row>
                <v-row class="factorrow">
                  <v-col cols="8"><strong>قابل پرداخت از محل اعتبار آموزشی</strong></v-col>
                  <v-col cols="4"><strong>	{{ CartDetail.SysShare }} ریال</strong></v-col>
                </v-row>
                <!-- <v-row class="factorrow">
                  <v-col cols="8"><v-text-field label="کد هدیه دارید؟وارد کنید..."></v-text-field>
                  </v-col>
                  <v-col cols="4"><v-btn class="code" append-icon="fa fa-credit-card">اعمال کد</v-btn></v-col>
                </v-row> -->
                <v-row class="factorrow">
                  <v-col cols="8"><strong>مبلغ قابل پرداخت</strong></v-col>
                  <v-col cols="4"><strong>	{{ CartDetail.BankPay }} ریال</strong></v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </section>
        <v-row class="mt-5 d-flex justify-end">
          <v-btn color="green-darken-4"
            rounded="0"
           append-icon="fa fa-arrow-left" @click="shopdialog=true" >ادامه خرید</v-btn>
        </v-row>
     </v-container>  
     <v-container class="mt-10" v-else>
      <h2 class="text-center">دوره ای در سبد خرید شما نیست</h2>
     </v-container>
    <myfooter style="margin-top: -6px;"/>


    <ResultNotification v-if="snackbar" :show="snackbar" :location="'top right'" :type="snackbartype" :text="snackbartext" @close="snackbar=false"/>
     <v-dialog
      v-model="shopdialog"
      scrollable
      style="width: 60%;"
    >
      <v-sheet style="height: auto">
        <v-card-title style="font-family: 'IRANSANS';display: flex; justify-content: start !important;font-size: x-large;">شرایط و قوانین ثبت نام دوره/کالا  </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="" style="padding-inline-start: 8% !important;font-family: 'IRANSANS'">
          <h3>قوانین و مقررات آموزشگاه بامداد</h3>
    <h5>مهارت جویان می توانند پیش از ثبت نام در صورت نیاز، از مشاوره رایگان با مدرسین و مسئولین آموزشگاه بهره مند گردند.</h5>
    <ol>
        <li>۱در صورت وجود هرگونه ابهام و سوال در خصوص شرایط آموزشی و ثبت نام، مهارت جویان پیش از تکمیل فرآیند ثبت نام میتوانند با استفاده از امکان درخواست مشاوره در زمان تعیین شده در آموزشکاه حضور پیدا کرده و مسئولین آموزشگاه کلیه اطلاعات لازم را در اختیار مهارت جویان و مراجعین قرار خواهند داد .</li>
        <li>برابر قوانین کشوری، ثبت نام مهارت جویان زیر هجده سال منوط به رضایت کتبی والدین و یا سرپرست قانونی مهارت جو خواهد بود .</li>
        <li>مهارت جو موظف به رعایت کلیه شئونات اخلاقی و انضباطی برابر با قوانین جاری کشور و عرف میباشد.</li>
        <li>مهارت جویان موظفند در محیط آموزشگاه و دیگر اماکن مرتبط مانند تور، گروهای مجازی و&hellip; در کلیه موارد،رعایت احترام مدرسین، مهارت جویان دیگر و مسولین را داشته باشند .</li>
        <li>&nbsp;احترام به حقوق شهروندی و رعایت حال دیگران الزامی میباشد لذا از ایجاد هرگونه مزاحمت برای سایرین مانند تجمع و ایجاد سر و صدا در راهروها و راه پله آموزشگاه جدا خودداری فرمایید</li>
        <li>به دلیل حفظ امنیت و اطمینان خاطر مهارت جویان و آرامش خانواده ها، آموزشگاه مجهز به دوربینهای نظارتی میباشد .</li>
        <li>&nbsp;استعمال دخانیات در کلیه اماکن ساختمان آموزشگاه ممنوع میباشد .</li>
        <li>&nbsp;ثبت نام قطعی پس از تسویه حساب کامل امکانپذیر میباشد .</li>
        <li>&nbsp;مهارت جو موظف است پس از ثبت نام حداقل یک هفته قبل از شروع دوره انصراف خود را کتباً به آموزشگاه اعلام نماید.</li>
        <li>تشکیل کلاسها در هر دوره منوط به احراز حد نصاب لازم جهت تشکیل کلاس در همان دوره بوده و درصورت نیاز برگزاری کلاس از طرف آموزشگاه تا موعد مقرر به تعویق خواهد افتاد.</li>
        <li>تغییر ساعات، تاریخ و استادان، کلاسها و دوره ها با نظر آموزشگاه میباشد .</li>
        <li>در صورت عدم برگزاری ساعت آموزش به دلیل تعطیلات رسمی و یا عدم حضور مدرس، جلسه جبرانی آن کلاس برگزار خواهد گردید .</li>
        <li>&nbsp;ضبط جلسات تدریس بصورت ویدیویی اکیدا ممنوع بوده و ضبط صوتی فقط با هماهنگی استاد و تایید آموزشگاه امکانپذیر خواهد بود.</li>
        <li>مهارت جویان بایستی در حفظ تجهیزات کمک آموزشی کوشا باشند. بدیهی است در صورت آسیب رسیدن به تجهیزات، تادیه خسارت برعهده مهارت جو خواهد بود.</li>
        <li>مهارت جویان نباید خارج از برنامه های آموزشی اعلام گردیده آموزشگاه انتظار و تقاضایی از مسولین آموزشگاه داشته و بایستی کلیه آیین نامه ها و دستورالعملهای اجرایی ابلاغ شده از سوی مراجع بالادستی را رعایت نمایند .</li>
        <li>مهارت جو به آموزشگاه اختیار میدهد تا روند اطلاع رسانی پیرامون فعالیتهای آموزشگاه از طریق پیامک روی تلفن همراه و همچنین پست الکترونیکی درج گردیده در فرم ثبت نام را دریافت نماید. لذا در صورت عدم تمایل نیز کافی است آموزشگاه را از طریق پیامک اختصاصی، پست الکترونیک و یا تماس تلفنی مطلع نماید .</li>
        <li>دریافت گواهینامه های آموزشی منوط به حضور مهارت جو در کلاس و شرکت در آزمون پایان دوره میباشد. صدور گواهینامه آموزشگاه فاقد هزینه می باشد .</li>
        <li>
            سایت آموزشگاه همواره بروز بوده و هرگونه خبر و تغییر برنامه بر روی آن قابل مشاهده میباشد. لذاخواهشمندیم همواره از طریق سایت و خبرنامه الکترونیکی با ما در ارتباط باشید . ضوابط استرداد شهریه آموزشگاه موظف است تحت شرایط مندرج در زیر و در صورت درخواست متقاضی وجه ثبت نام را تماماً به متقاضی باز پس دهد.
            <ul>
                <li>تغییر یا تعویض زمان شروع کلاس ها</li>
                <li>&nbsp;برگزار نشدن کلاس مورد نظر</li>
                <li>تغییر مربی توافق شده در هنگام ثبت نام</li>
                <li>انصراف متقاضی تا یک هفته پیش از شروع کلاس ها</li>
            </ul>
        </li>
    </ol>
      </v-card-text>
        <v-card-actions style="display: flex; justify-content: end !important;">
          <v-btn
            color="green-darken-4"
            variant="flat"
            append-icon="fa fa-check"
            @click="this.$router.replace({name:'bank'})"
            style="font-family: 'IRANSANS';display: flex; justify-content: end !important;"
          >
          پذیرش قوانین و پرداخت
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-dialog>
</template>
<script>
import banner from '@/components/Banner.vue';
import myheader from '@/components/Header.vue';
import myfooter from '@/components/Footer.vue'
import ResultNotification from '@/components/ResultNotification.vue'
import { Callaxios } from '@/assets/composable/CallAxus';

export default{
  data(){
    return{
      shopdialog:false,
      endprice:'',
      creditplace:'',
      takhfif:'',
      bagproducts :[],
      bagid:0,
      snackbar:false,
      snackbartype:'',
      snackbartext:'',
      CartDetail:{},
      bagcount:0
    }
  },
  components:{
    banner,myheader,myfooter,ResultNotification
  },
  mounted(){
    Callaxios('ShoppingBag/LoadCart','post',undefined,this.afterloadcard)
  },
  methods:{
    afterloadcard(param){
      this.bagproducts=[]
      for(var i=0;i<param.Data.length;i++){
        var type = ''
        this.bagid = param.Data[i].id
        if(param.Data[i].type ==3 && param.Data[i].ProType !=1){
          type='پیش ثبت نام'
        }else if(param.Data[i].type ==1 && param.Data[i].ProType !=1){
          type='دوره'
        }else if(param.Data[i].type ==2 && param.Data[i].ProType !=1){
          type='دوره با تخفیف'
        }else if(aram.Data[i].ProType ==1){
          type='کالا'
        }

        var price = param.Data[i].price - param.Data[i].SystemShare

        if(param.Data[i].SystemShare>0 && this.endprice=='')
        {
          this.endprice = 'بخش نقدی'
        }else{
          this.endprice = 'قیمت پس از تخفیف'
        }

        if(param.Data[i].SystemShare>0 && this.creditplace==''){
          this.creditplace='بخش اعتباری'
        }

        if(param.Data[i].TakhfifNaghdi + param.Data[i].TakhfifSabteNam >0 && this.takhfif==''){
          this.takhfif='هدیه خرید نقدی و ثبت نام آنلاین(اعتبار)'
        }

        this.bagproducts.push({
          name:param.Data[i].name,
          ProType:type,
          Hour:param.Data[i].Hour,
          MainPrice:param.Data[i].MainPrice,
          price:price,
          TakhfifeCloop:param.Data[i].TakhfifeCloop,
          credit:param.Data[i].SystemShare,
          takhfif:param.Data[i].TakhfifNaghdi + param.Data[i].TakhfifSabteNam,
          charge:param.Data[i].UserCharge??0,
          productId:param.Data[i].ProductId,
          bagId:param.Data[i].id,
          SessionsCount:param.Data[i].SessionsCount
        })
        this.bagcount = this.bagcount+1
      }
      Callaxios('UserProduct/UserProductsCalc','post',[],this.aftercalc)

    },
    aftercalc(param){
      this.CartDetail = param.Data
    },
    remove(pid,bid){
      var input={
        id:bid,
        productId:pid
      }
      Callaxios('ShoppingBag/RemovefromCart','post',input,this.afterremove)
    },
    afterremove(param){
      this.snackbartext=param.Title
      this.snackbartype='success'
      this.snackbar=true
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.mobilecontent{
  border: 5px solid rgba(148, 58, 25, 0.71);
}
.content .v-col{
  border: 1.5px solid rgba(79, 30, 10, 0.71);
}
.contentheader{
  background-color: rgb(79, 30, 10) !important;
  color: white;
}
.contentrow{
  background-color:  rgba(79, 30, 10, 0.279) !important;
}
.positivecredit{
  background-color: rgba(194, 153, 31, 0.454);
}
.positivecredit .v-col{
  border: 1px solid  rgba(194, 153, 31, 0.454);
}
.negativecredit{
  background-color: rgba(225, 102, 61, 0.514);
}
.negativecredit .v-col{
  border: 1px solid #dbd5d5;
}
.factorrow .v-col {
  border: 1px solid #dbd5d5;

}
.v-text-field{
  margin: 0% !important;
  margin-bottom: -5% !important;
}
.code{
  margin-top: 5%;
  font-family: 'IRANSANS' !important;
  width: 100%;
  height: 70% !important;
  background-color: rgb(148, 146, 146);
}
</style>