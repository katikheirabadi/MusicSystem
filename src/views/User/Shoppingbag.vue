<template>
    <banner/>
    <myheader img="http://localhost:3000/src/assets/img/options.jpeg" header="شناسه سبد خرید شما 2564"  text="اضافه کردن دوره/کالا به سبد خرید به منزله رزرو نمی باشد .(درصورتی که ظرفیت کلاس پر شود دوره به طور اتوماتیک از سبد خرید حذف میگردد)" :btns="[{text:'بازگشت به صفحه کاربری',link:'/'}]"/>
     <v-container class="mt-10 mb-10">
        <section style="width: 80%;margin: auto;">
            <h1>لیست دوره ها</h1>
            
            <v-sheet  >
              <v-row class="mt-5 text-center content">
                  <v-col cols="3"><strong>نام دوره</strong></v-col>
                  <v-col cols="1"><strong>نوع</strong></v-col>
                  <v-col cols="2"><strong>جلسه</strong></v-col>
                  <v-col cols="2"><strong>قیمت اصلی</strong></v-col>
                  <v-col cols="2"><strong>قیمت پس از تخفیف</strong></v-col>
                  <v-col cols="1"><strong>تخفیف باشگاه</strong></v-col>
                  <v-col cols="1"></v-col>
                </v-row>
                <v-row class="text-center content">
                  <v-col cols="3"><strong>بوتکمپ برنامه نامه نویسی React js</strong></v-col>
                  <v-col cols="1"><strong>دوره</strong></v-col>
                  <v-col cols="2"><strong> ١٨:٠٠ تا ٢١:٠٠</strong></v-col>
                  <v-col cols="2"><strong>٤٢,٥٠٠,٠٠٠ ریال</strong></v-col>
                  <v-col cols="2"><strong>0 ریال</strong></v-col>
                  <v-col cols="1"><strong>0 %</strong></v-col>
                  <v-col cols="1"><v-btn icon="fa fa-trash" color="red"></v-btn></v-col>
                </v-row>
                <v-row class="text-center content">
                  <v-col cols="3"><strong>بوتکمپ برنامه نامه نویسی React js</strong></v-col>
                  <v-col cols="1"><strong>دوره</strong></v-col>
                  <v-col cols="2"><strong> ١٨:٠٠ تا ٢١:٠٠</strong></v-col>
                  <v-col cols="2"><strong>٤٢,٥٠٠,٠٠٠ ریال</strong></v-col>
                  <v-col cols="2"><strong>0 ریال</strong></v-col>
                  <v-col cols="1"><strong>0 %</strong></v-col>
                  <v-col cols="1"><v-btn icon="fa fa-trash" color="red"></v-btn></v-col>
                </v-row>
            </v-sheet>
        </section>
        <!-- mobile classes -->

        <section class="mt-10" style="width: 80%;margin: auto;">
          <v-row>
            <v-col cols="6">
              <v-sheet>
                <v-row class="positivecredit">
                  <v-col cols="8"><strong>موجودی فعلی نقدی شما :</strong></v-col>
                  <v-col cols="4"><strong>٣١٦,١٠٠,٠٠٠ ریال</strong></v-col>
                </v-row>
                <v-row class="positivecredit">
                  <v-col cols="8"><strong>اعتبار فعلی آموزشی شما :</strong></v-col>
                  <v-col cols="4"><strong>0 ریال</strong></v-col>
                </v-row>
                <v-row class="negativecredit">
                  <v-col cols="8"><strong>مانده اعتبار نقدی پس از خرید :</strong></v-col>
                  <v-col cols="4"><strong>	٠ ریال</strong></v-col>
                </v-row>
                <v-row class="negativecredit">
                  <v-col cols="8"><strong>مانده اعتبار آموزشی پس از خرید :</strong></v-col>
                  <v-col cols="4"><strong>	٠ ریال</strong></v-col>
                </v-row>
              </v-sheet>
            </v-col>
            <v-col style="margin-inline-start: 5%;" cols="5">
              <h3 class="mb-5">فاکتور شما</h3>
              <v-sheet>
                <v-row class="factorrow">
                  <v-col cols="8"><strong>تعداد کل دوره/کالا های شما</strong></v-col>
                  <v-col cols="4"><strong>2</strong></v-col>
                </v-row>
                <v-row class="factorrow">
                  <v-col cols="8"><strong>مجموع قیمت با احتساب تخفیف باشگاه</strong></v-col>
                  <v-col cols="4"><strong>0 ریال</strong></v-col>
                </v-row>
                <v-row class="factorrow">
                  <v-col cols="8"><strong>قابل پرداخت از محل اعتبار آموزشی</strong></v-col>
                  <v-col cols="4"><strong>	٠ ریال</strong></v-col>
                </v-row>
                <v-row class="factorrow">
                  <v-col cols="8"><v-text-field label="کد هدیه دارید؟وارد کنید..."></v-text-field>
                  </v-col>
                  <v-col cols="4"><v-btn class="code" append-icon="fa fa-credit-card">اعمال کد</v-btn></v-col>
                </v-row>
                <v-row class="factorrow">
                  <v-col cols="8"><strong>مبلغ قابل پرداخت</strong></v-col>
                  <v-col cols="4"><strong>	٠ ریال</strong></v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </section>
        <v-row style="justify-content: end;display: flex;margin-top: 3%;margin-inline-end: 5%;">
          <v-btn   color="green-darken-4"
            rounded="0"
            variant="outlined" append-icon="fa fa-arrow-left" @click="shopdialog=true" >ادامه خرید</v-btn>
        </v-row>
     </v-container>  
    <myfooter/>

     <v-dialog
      v-model="shopdialog"
      scrollable
      style="width: 45%;"
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
            color="green-darken-1"
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
<script setup>
import banner from '@/components/Banner.vue';
import myheader from '@/components/Header.vue';
import myfooter from '@/components/Footer.vue'
import { ref } from 'vue';
let shopdialog = ref(false)
</script>

<style>
.content {
  border: 1px solid #e6e5e5;
}
.content .v-col{
  border: 1px solid #dbd5d5;
}
.positivecredit{
  background-color: rgba(153, 255, 179, 0.664);
}
.positivecredit .v-col{
  border: 1px solid #dbd5d5;
}
.negativecredit{
  background-color: rgba(255, 153, 153, 0.664);
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