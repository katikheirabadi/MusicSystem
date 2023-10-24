<template>
    <banner/>
    <div style="background-color:rgba(250, 149, 149, 0.582);min-height:90vh;min-width:100%;">
        <v-container>
        <v-sheet
        :rounded="'xl'"
        class="mx-auto my-auto"
        style="min-height:84vh;max-width:150vh; "
        >
            <!-- base -->
           <v-row>
            <v-col cols="12" sm="12" md="6" >
                <v-img
                class="lessonimg"
                :src="data.img"
                style=""
                ></v-img>
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <v-container style="margin-top: 25%;">
                    <h1 class="text-center">{{ data.name }}</h1>
                    <p class="text-center" style="margin-top:3%;">{{ data.desc }}</p>
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
                    <h4 class="text-center mb-3 mt-3">کلمات کلیدی</h4>
                    <v-row class="center-class" style="margin-inline-start: 3%;">
                        <v-col v-for="tag in data.tags" style="max-width: fit-content;">
                            
                            <v-chip
                             color="brown"
                             variant="outlined"
                            >
                             {{ tag }}
                            </v-chip>
                        </v-col>
                    </v-row>
                    <br>
                    <h4 class="text-center mb-3 mt-3">موضوعات کلیدی</h4>
                    <v-row class="center-class" style="margin-inline-start: 3%;">
                        <v-col v-for="concept in data.concepts" style="max-width: fit-content;">
                            
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
           <h1 class="text-center" v-if="data.products">دوره های فعال</h1>
           <v-row class="center-class" v-if="data.products" style="margin-inline-start: 2.5%;margin-top: 2%;margin-inline-end: 2.5%;">
            <v-col cols="12" sm="12" md="4" v-for="product in data.products[0].Product">
                <v-sheet class="product-image text-center">
                    <h2 class="title" style="z-index: 1;position: absolute;color: rgb(246, 234, 221);margin-top: 40%;margin-inline-start: 5%;">{{ product.ProductName }}<br><h3>{{ product.TeacherName }}</h3><h6 style="margin-top: 5%;">تاریخ شروع: {{ product.stringstartdate }}</h6></h2>
                    <img class="img" style="z-index: 0;filter: blur(5px);" :src="data.img" alt="">
                    <v-sheet class="info" >
                        <h2 style="margin-top: 10%;">جزئیات</h2>
	                <ul style="margin-top: 2%;margin-bottom: 5%;">
		            <li><strong>مبلغ: </strong>{{ product.price }} ریال</li>
		            <li><strong>تخفیف: </strong>%{{ product.Discount }}</li>
		            <li><strong>روزهای هفته: </strong>{{ product.stringday }}</li>
                    <li><strong>ساعت :</strong>{{ product.ProductAvailableSessions[0].Hour }}</li>
                    <li><strong>تعداد جلسات: </strong>{{ product.SessionsNumber }}</li>
                    <li><strong>مجموع ساعت: </strong>{{ product.ClassHour }}</li>
		            <li><strong>مبلغ پرداختی: </strong>{{ product.payable }} ریال</li>
	                </ul>
                    <v-btn style="margin-inline-end: 2.5%;" color="green" @click="regiaterdialog=true">ثبت نام</v-btn>
                    <v-btn color="orange" @click="advisedialog=true">مشاوره</v-btn>
                    </v-sheet>
                </v-sheet>
              
	
	       
            </v-col>
            

           </v-row>
           <v-sheet v-if="!data.products"
           color="red"
           class="text-center mt-5 mb-5 pt-5 pb-5"
           >
           <h1>کلاسی برای این دوره فعال نمی باشد</h1>
           </v-sheet>
        </v-sheet>
        </v-container>
    </div>


    <v-row justify="center">
    <v-dialog
      v-model="regiaterdialog"
      scrollable
      style="width: 40%;"
    >
      <v-sheet style="height: auto;padding: 3%;">
        <v-card-title style="font-family: 'IRANSANS';display: flex; justify-content: start !important;font-size: x-large;">ثبت نام</v-card-title>
        <v-divider></v-divider>
     
            <p class="mt-5 english"> توجه کنید
        <br>
         ساعت مورد نظر جهت ثبت نام انتخاب کرده و برای افزودن به سبد خرید دکمه مربوطه را کلیک کنید<br>
         <br> 
         
        </p>
        <v-select 
        label="زمان ثبت نام"
        :items="['8:30', '10:30', '12:30']"
        variant="outlined"
        style="font-family: 'IRANSANS';font-size: x-large;"
        no-transition
        ></v-select>
        <v-divider></v-divider>
        <v-card-actions style="font-family: 'IRANSANS';display: flex; justify-content: end !important;">
          <v-btn
            color="red-darken-2"
            variant="flat"
            @click="regiaterdialog = false"
            append-icon="fa fa-close"
            style="font-family: 'IRANSANS';display: flex; justify-content: start !important;"
          >
            بستن
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="flat"
            append-icon="fa fa-check"
            @click="dialog = false"
            style="font-family: 'IRANSANS';display: flex; justify-content: start !important;"
          >
           افزودن به سبد خرید
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-dialog>

    <v-dialog
      v-model="advisedialog"
      scrollable
      style="width: 40%;"
    >
      <v-sheet style="height: auto;padding: 3%;">
        <v-card-title style="font-family: 'IRANSANS';display: flex; justify-content: start !important;font-size: x-large;">مشاوره </v-card-title>
        <v-divider></v-divider>
     
            <p class="mt-5 english">در تاریخ انتخاب شده، کارشناسان ما با شما تماس خواهند گرفت.<br>
همچنین شما می‌توانید برای کسب اطلاعات بیشتر و دریافت مشاوره با شماره تلفن روبه رو تماس حاصل فرمایید: ٠٢١٩١٣٠٠٩١٩ داخلی ١
        </p>
        <br>
        <v-row>
            <v-col cols="6"> <v-select 
        no-transition
            label="ساعت مشاوره"
            :items="['8:30', '10:30', '12:30']"
            variant="outlined"
            style="font-family: 'IRANSANS';font-size: x-large;"
        ></v-select></v-col>
            <v-col cols="6"> <v-select 
        no-transition
            label="روز"
            :items="['امروز', 'فردا', 'پس فردا']"
            variant="outlined"
            style="font-family: 'IRANSANS';font-size: x-large;"
        ></v-select></v-col>
        </v-row>
       
        <v-divider></v-divider>
        <v-card-actions style="display: flex; justify-content: end !important;">
          <v-btn
            color="red-darken-2"
            variant="flat"
            @click="advisedialog = false"
            append-icon="fa fa-close"
            style="font-family: 'IRANSANS';display: flex; justify-content: end !important;"
          >
            بستن
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="flat"
            append-icon="fa fa-check"
            @click="dialog = false"
            style="font-family: 'IRANSANS';display: flex; justify-content: end !important;"
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

let regiaterdialog =ref(false)
let advisedialog = ref(false)
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
<style>
.lessonimg{
    width: 100%;height: 100%;border-radius: 20% 0px;margin: 3%;background-size: cover;
}
.product-image {
	transition: all 0.3s ease-out;
    background-size: cover;
	position: relative;
	overflow: hidden;
	height: 100%;
	width: 100%;
}
.img {width: 100%;height: 100%;}
.info {
    background: rgba(27, 26, 26, 0.9);
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.7;
    font-size: 100%;
    cursor: no-drop;
    color: #FFF;
    height: 100%;
    width: 100%;
    top: 0;
}
ul {
  list-style-type: none;
}
.v-select .v-select__slot {
  transition: none !important;
}
.info h2 {text-align: center}
.product-image:hover .info{transform: translateX(0);}
.product-image:hover .title{display: none;}
.info ul li{transition: 0.3s ease;}
.info ul li:hover{transform: translateX(20px) scale(1.3);}

.product-image:hover img {transition: all 0.3s ease-out;} 
 .product-image:hover img {transform: scale(1.2, 1.2);} 

 @media all and (min-width:1700px) {
    .info {
    line-height: 1.9;
    font-size: 120%;
}
}
@media all and (max-width:800px) {
    .info {
    line-height: 220%;
    }
    .info ul li{transition: 0.3s ease;}
.lessonimg{
    width: 95%;height: 100%;border-radius: 20% 0px;margin: 3%;background-size: cover;
    margin-bottom: 0%;
}
.v-container{
    margin: 0% !important;
}
.v-container h1{
    font-size: 25px;
    font-weight: bold;
}
.info h2 {text-align: center;font-size: 100%;}
.info ul li{font-size: 90%;}
.title{
    margin-top: 35% !important;
    font-size: 150%;
}
.info li{
    font-size: 50%;
}
}


</style>