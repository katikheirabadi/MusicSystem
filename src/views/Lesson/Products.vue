<template>
  <banner/>
  <div class="all">
        <v-container>
        <v-sheet
        :rounded="'xl'"
        class="mx-auto my-auto detail"
        >
            <!-- base -->
           <v-row>
            <v-col cols="12" sm="12" md="6" >
                <v-img
                class="lessonimg"
                :src="data.img"
                cover=""
                ></v-img>
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <v-container class="detail_desc">
                    <h1 class="text-center">{{ data.name }}</h1>
                    <p class="text-center">{{ data.desc }}</p>
                    <br>
                    <v-row class="text-center">
                        <v-col cols="6">
                            <v-icon icon="fa fa-eye"></v-icon>
                            <p>250</p>
                        </v-col>
                        <v-col cols="6">
                            <v-icon icon="fa fa-edit"></v-icon>
                            <p>1402/12/01 12:30</p>
                        </v-col>
                    </v-row>
                    <h4 class="text-center mb-3 mt-3">{{ $t('lesson.home_title') }}</h4>
                    <v-row class="center-class">
                        <v-col class="tag" v-for="tag in data.tags">
                            
                            <v-chip
                             color="brown"
                             variant="outlined"
                            >
                             {{ tag }}
                            </v-chip>
                        </v-col>
                    </v-row>
                    <br>
                    <h4 class="text-center mb-3 mt-3">{{ $t('lesson.home_tagsDescs') }}</h4>
                    <v-row class="center-class">
                        <v-col class="tag" v-for="concept in data.concepts">
                            
                            <v-chip
                            color="brown"
                            >
                             {{ concept.name }}
                            </v-chip>
                        </v-col>
                    </v-row>
                    
                    
                </v-container>
            </v-col>
           </v-row>
           <br>
           <!-- product -->
           <h1 class="text-center mt-5" v-if="data.products">{{ $t('lesson.home_products') }}</h1>
           <v-row class="center-class" v-if="data.products">
            <v-col cols="12" sm="6" md="4" xl="3" v-for="product in data.products[0].Product">
                <v-sheet class="product-image text-center">
                  <div class="title-posision">
                    <h2 class="title text-center">
                      {{ product.ProductName }}
                      <br>
                      <h4>{{ product.TeacherName }}</h4>
                      <h6 class="start">{{ $t('lesson.home_startdate') }}: {{ product.stringstartdate }}</h6>
                    </h2>
                  </div>
                    
                    <img class="img" :src="data.img" alt="">
                    <v-sheet class="info" >
                      
                      <h2 class="mb-3">{{ $t('lesson.home_info') }}</h2>
                        
                          <ul class="mb-2" style="">
		                          <li><strong>{{ $t('lesson.home_price') }}: </strong>{{ product.price }} {{ $t('lesson.home_priceunit') }}</li>
		                          <li><strong>{{ $t('lesson.home_discount') }}: </strong>%{{ product.Discount }}</li>
		                          <li><strong>{{ $t('lesson.home_days') }} : </strong>{{ product.stringday }}</li>
                              <li><strong>{{ $t('lesson.home_hour') }} :</strong>{{ product.ProductAvailableSessions[0].Hour }}</li>
                              <li><strong>{{ $t('lesson.home_sessioncount') }} : </strong>{{ product.SessionsNumber }}</li>
                              <li><strong>{{ $t('lesson.home_sessionsumHours') }} : </strong>{{ product.ClassHour }}</li>
		                          <li><strong>{{ $t('lesson.home_endprice') }} : </strong>{{ product.payable }} {{ $t('lesson.home_priceunit') }}</li>
	                        </ul>
                       
	                       
                     <v-btn class="buy" color="green" @click="regiaterdialog = true">{{ $t('lesson.home_buy') }} </v-btn>
                     <v-btn class="moshavere" color="orange" @click="advisedialog=true">{{ $t('lesson.home_councelling') }}</v-btn>
                    </v-sheet>
                </v-sheet>
            </v-col>
            

           </v-row>
           <v-sheet v-if="!data.products"
           color="red"
           class="text-center mt-5 mb-5 pt-5 pb-5"
           >
           <h1>{{ $t('lesson.home_noproducts') }}</h1>
           </v-sheet>
        </v-sheet>
        </v-container>
        <myfooter style="margin-top: 1.5%;"/>
    </div>


    <v-row justify="center">
      <v-dialog
      v-model="regiaterdialog"
      scrollable
      class="dialog"
    >
      <v-sheet>
        <v-card-title class="dialog_title">ثبت نام</v-card-title>
        <v-divider></v-divider>
            <p class="mt-5" style="font-family: 'IRANSANS';"> توجه کنید
            <br>
             ساعت مورد نظر جهت ثبت نام انتخاب کرده و برای افزودن به سبد خرید دکمه مربوطه را کلیک کنید<br>
            <br> 
         
        </p>
        <v-select 
        label="زمان ثبت نام"
        :items="['8:30', '10:30', '12:30']"
        variant="outlined"
        class="selectclass"
        no-transition
        ></v-select>
        <v-divider></v-divider>

        <v-card-actions class="action">
          <v-btn
            color="red-darken-2"
            variant="flat"
            @click="regiaterdialog = false"
            append-icon="fa fa-close"
          >
            بستن
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="flat"
            append-icon="fa fa-check"
            @click="this.$router.replace({name:'bag'})"
          >
           افزودن به سبد خرید
          </v-btn>
        </v-card-actions>
      </v-sheet>
     </v-dialog>

     <v-dialog
      v-model="advisedialog"
      scrollable
      class="dialog"
    >
      <v-sheet>
        <v-card-title class="dialog_title">مشاوره </v-card-title>
        <v-divider></v-divider>
     
            <p class="mt-5" style="font-family: 'IRANSANS';">در تاریخ انتخاب شده، کارشناسان ما با شما تماس خواهند گرفت.<br>
همچنین شما می‌توانید برای کسب اطلاعات بیشتر و دریافت مشاوره با شماره تلفن روبه رو تماس حاصل فرمایید: ٠٢١٩١٣٠٠٩١٩ داخلی ١
        </p>
        <br>
        <v-row>
            <v-col cols="6"> <v-select 
            no-transition
            label="ساعت مشاوره"
            :items="['8:30', '10:30', '12:30']"
            variant="outlined"
            class="selectclass"
        ></v-select></v-col>
            <v-col cols="6"> <v-select 
            no-transition
            label="روز"
            :items="['امروز', 'فردا', 'پس فردا']"
            variant="outlined"
            class="selectclass"
        ></v-select></v-col>
        </v-row>
       
        <v-divider></v-divider>
        <v-card-actions class="action">
          <v-btn
            color="red-darken-2"
            variant="flat"
            @click="advisedialog = false"
            append-icon="fa fa-close"
          >
            بستن
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="flat"
            append-icon="fa fa-check"
            @click="dialog = false"
          >
           ثبت درخواست مشاوره
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-dialog>

    </v-row>

</template>

<script setup>
import { ref } from 'vue';
import banner from '../../components/Banner.vue'
import myfooter from '../../components/Footer.vue'
var regiaterdialog =ref(false)
var advisedialog = ref(true)
let data = {
    name:"کلاس پیانو",
    img: window.location.origin + '/src/assets/img/piano.jpg',
    desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
    ,
    visit:235,
    modify:'1402/02/3',
    tags:['پیانو','آکوستیک','بهترین استاد','بهترین آموزشگاه','دیجیتال','کلاس'],
    products :[{"Id":310,"ProductId":317,"LessonId":95,"CreationDate":"2023-09-04T14:13:00","Product":[{"RemainCapacity":11,"id":317,"ProductName":"بوتکمپ برنامه نامه نویسی React js","name":"بوتکمپ برنامه نامه نویسی React js - حضوری و آنلاین","describle":"","price":42500000,"image":"\/img\/Default-course.jpg","SessionsNumber":17,"stringstartdate":"01 آذر 1402 ","startDate":"2023-11-22T00:00:00","endDate":"2023-12-30T00:00:00","expire":0,"sellCount":14,"Discount":0.000000000000000e+000,"Day":"[{\"DayId\":\"0\",\"StartTime\":\"۱۸:۰۰\",\"EndTime\":\"۲۱:۰۰\"},{\"DayId\":\"2\",\"StartTime\":\"۱۸:۰۰\",\"EndTime\":\"۲۱:۰۰\"},{\"DayId\":\"4\",\"StartTime\":\"۱۸:۰۰\",\"EndTime\":\"۲۱:۰۰\"}]","stringday":"شنبه و دوشنبه و چهارشنبه","SellType":1,"IsShown":1,"count":25,"tag":"برنامه نویسی,طراحی سایت,Front end,فرانت اند,ریکت,جاوااسکریپت,React","SessionCapacity":25,"RegisterType":1,"DiscountPercent":0.00,"Concepts":"","RemainSession":17,"payable":42500000,"TeacherName":"پویا هراتی زاده","ClassGendre":"3","MinimumCapacity":"10","ClassHour":"50","CertType":1,"CertTemplate":1,"MinAbsenceAllowed":5,"MinMark":60,"CourseType":6,"CategoryID":1,"CategoryName":"برنامه نویسی","CompanyID":3,"CompanyName":"دانش و فناوری بامداد","CompanyParent":2,"RegisterDis":"0","CashDis":"0","SemesterName":"پاییز1402","SemesterStartDate":"2022-09-23","SemesterEndDate":"2022-10-22","TeacherId":3014,"TeacherPercent":0.000000000000000e+000,"ProductAvailableSessions":[{"Id":444,"ProductId":317,"Hour":"18:00 تا 21:00","IsActive":1,"Status":1,"CreationDate":"2023-09-04T14:13:00","Capacity":25}]},{"RemainCapacity":11,"id":317,"ProductName":"بوتکمپ برنامه نامه نویسی React js","name":"بوتکمپ برنامه نامه نویسی React js - حضوری و آنلاین","describle":"","price":42500000,"image":"\/img\/Default-course.jpg","SessionsNumber":17,"stringstartdate":"01 آذر 1402 ","startDate":"2023-11-22T00:00:00","endDate":"2023-12-30T00:00:00","expire":0,"sellCount":14,"Discount":0.000000000000000e+000,"Day":"[{\"DayId\":\"0\",\"StartTime\":\"۱۸:۰۰\",\"EndTime\":\"۲۱:۰۰\"},{\"DayId\":\"2\",\"StartTime\":\"۱۸:۰۰\",\"EndTime\":\"۲۱:۰۰\"},{\"DayId\":\"4\",\"StartTime\":\"۱۸:۰۰\",\"EndTime\":\"۲۱:۰۰\"}]","stringday":"شنبه و دوشنبه و چهارشنبه","SellType":1,"IsShown":1,"count":25,"tag":"برنامه نویسی,طراحی سایت,Front end,فرانت اند,ریکت,جاوااسکریپت,React","SessionCapacity":25,"RegisterType":1,"DiscountPercent":0.00,"Concepts":"","RemainSession":17,"payable":42500000,"TeacherName":"پویا هراتی زاده","ClassGendre":"3","MinimumCapacity":"10","ClassHour":"50","CertType":1,"CertTemplate":1,"MinAbsenceAllowed":5,"MinMark":60,"CourseType":6,"CategoryID":6,"CategoryName":"فرانت","CompanyID":3,"CompanyName":"دانش و فناوری بامداد","CompanyParent":2,"RegisterDis":"0","CashDis":"0","SemesterName":"پاییز1402","SemesterStartDate":"2022-09-23","SemesterEndDate":"2022-10-22","TeacherId":3014,"TeacherPercent":0.000000000000000e+000,"ProductAvailableSessions":[{"Id":444,"ProductId":317,"Hour":"18:00 تا 21:00","IsActive":1,"Status":1,"CreationDate":"2023-09-04T14:13:00","Capacity":25}]}]}],
    concepts:[{"name":"مقدمات و مفاهیم رابط و تجربه کاربری","describle":"آشنایی با اسکچ، وایرفریم، پروتوتایپ، طراحی گرافیک، استراتژی UX و ..."},{"name":"اصول طراحی المان‌ها در رابط کاربری (روانشناسی رنگ، طراحی منو، طراحی فرم، اصول طراحی اپلیکیشن موبایل و ...)","describle":""},{"name":"کار با نرم‌افزار Adobe XD","describle":""},{"name":"طراحی پروژه وب‌سایت","describle":""},{"name":"طراحی پروژه موبایل","describle":""}]
}
</script>
<style scoped>
@import url(../../assets/css/Views/Lesson/home.css);
</style>