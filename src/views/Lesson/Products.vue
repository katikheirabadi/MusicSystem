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
            <v-col cols="12" sm="12" md="5" style="height: 50vh;">
                <v-img
                class="lessonimg"
                :src="data.img"
                cover=""
                ></v-img>
            </v-col>
            <v-col cols="12" sm="12" md="7" class="more">
                <v-container class="detail_desc " style="padding-inline-start: 5% !important;">
                    <h1 class="text-center">{{ data.name }}</h1>
                   
                    <p class="text-center" v-html="data.desc"></p>
                   
                    <br>
                    <v-row class="text-center">
                        <v-col cols="6">
                            <v-icon icon="fa fa-eye"></v-icon>
                            <p>{{ data.visit }}</p>
                        </v-col>
                        <v-col cols="6">
                            <v-icon icon="fa fa-edit"></v-icon>
                            <p>{{ data.modify }}</p>
                        </v-col>
                    </v-row>
                    <h4 v-if="data.tags.length != 0" class="text-center mb-3 mt-3">{{ $t('lesson.home_tags') }}</h4>
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
                    <h4 v-if="data.concepts.length != 0" class="text-center mb-3 mt-3">{{ $t('lesson.home_tagsDescs') }}</h4>
                    <ul >
                        <li class="tag" v-for="concept in data.concepts">
                            
                            <v-chip
                            color="brown"
                            >
                             {{ concept.name }}
                            </v-chip>
                        </li>
                    </ul>
                    
                    
                </v-container>
            </v-col>
           </v-row>
           <v-row>
            
           </v-row>
           <br>
           <!-- product -->
           <h1 class="text-center mt-5" v-if="data.products.length !=0">{{ $t('lesson.home_products') }}</h1>
           <v-row class="center-class" v-if="data.products">
            <v-col cols="12" sm="6" md="4" xl="3" v-for="product in data.products">
                <v-sheet class="product-image text-center">
                  <div class="title-posision">
                    <h2 class="title text-center">
                      {{ product.Product.ProductName }}
                      <br>
                      <h4>{{ product.Product.TeacherName }}</h4>
                      <h6 class="start">{{ $t('lesson.home_startdate') }}: {{ product.Product.stringstartdate }}</h6>
                    </h2>
                  </div>
                    
                    <img class="img" :src="data.img" alt="">
                    <v-sheet class="info" >
                      
                      <h2 class="mb-3">{{ $t('lesson.home_info') }}</h2>
                        
                          <ul class="mb-2" style="">
		                          <li><strong>{{ $t('lesson.home_price') }}: </strong>{{ product.Product.price }} {{ $t('lesson.home_priceunit') }}</li>
		                          <li><strong>{{ $t('lesson.home_discount') }}: </strong>%{{ product.Product.Discount }}</li>
		                          <li><strong>{{ $t('lesson.home_days') }} : </strong>{{ product.Product.stringday }}</li>
                              <!-- <li><strong>{{ $t('lesson.home_hour') }} :</strong>{{ product.Product.ProductAvailableSessions[0].Hour }}</li> -->
                              <li><strong>{{ $t('lesson.home_sessioncount') }} : </strong>{{ product.Product.SessionsNumber }}</li>
                              <li><strong>{{ $t('lesson.home_sessionsumHours') }} : </strong>{{ product.Product.ClassHour }}</li>
		                          <li><strong>{{ $t('lesson.home_endprice') }} : </strong>{{ product.Product.payable }} {{ $t('lesson.home_priceunit') }}</li>
	                        </ul>
                       
	                       
                     <v-btn class="buy" color="green" @click="registrationmodal(product.Id)">{{ $t('lesson.home_buy') }} </v-btn>
                     <v-btn class="moshavere" color="orange" @click="courseadvise()">{{ $t('lesson.home_councelling') }}</v-btn>
                    </v-sheet>
                </v-sheet>
            </v-col>
            

           </v-row>
           <v-sheet v-if="data.products.length ==0"
           color="red"
           class="text-center mt-5 mb-5 pt-5 pb-5"
           >
           <h3>{{ $t('lesson.home_noproducts') }}</h3>
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
        <v-card-title class="dialog_title">{{ $t('lesson.home_registertitle') }}</v-card-title>
        <v-divider></v-divider>
            <p class="mt-5 حس-2" style="font-family: 'IRANSANS';"> 
            {{ $t('lesson.home_registertext') }}
            <br> <br> 
        </p>
        <v-select 
        :label="$t('lesson.home_registerpastitle')"
        v-model="selectpas"
        :items="registratiiontimes"
        :item-title="item=>item.time"
        :item-value="item=>item.id"
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
          {{ $t('lesson.home_modalclose') }}
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="flat"
            append-icon="fa fa-check"
            @click="gotobag()"
          >
          {{ $t('lesson.home_gotobag') }}
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
            :items="appointments"
            :item-title="item=>item.Time"
            :item-value="item=>item.Id"
            v-model="selectappointment"
            variant="outlined"
            class="selectclass"
        ></v-select></v-col>
            <v-col cols="6"> <v-select 
            no-transition
            label="روز"
            :items="days"
            :item-title="item=>item.name"
            :item-value="item=>item.id"
            v-model="selectday"
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
            @click="addadvise()"
          >
           ثبت درخواست مشاوره
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-dialog>

    </v-row>

</template>

<script >
import { storeKey } from 'vuex'
import banner from '../../components/Banner.vue'
import myfooter from '../../components/Footer.vue'

import { Callaxios } from '@/assets/composable/CallAxus'
import Store from '@/store/Store'
export default{
  data(){
    return {
      regiaterdialog:false,
      advisedialog:false,
      data : {
                id:0,
                name:'',
                img: '',
                desc:'',
                visit:0,
                modify:'',
                tags:[],
                products :[],
                concepts:[]
            },
      registratiiontimes:[],
      selectpas :0,
      appointments:[],
      selectappointment:1,
      days:[
        {
          name:'امروز',
          id:0
        },
        {
          name:'فردا',
          id:1
        },
        {
          name:'پس فردا',
          id:2
        }
      ],
      selectday:0

    }
  },
  components:{
    banner,myfooter
  },
  mounted(){
    Callaxios('Lesson/GetLessonDetail/'+this.$route.params.lessonid,'get',undefined,this.aftergetdetail )
    
  },
  methods:{
    aftergetdetail(param){
      this.data.name = param.Data.Name
      this.data.img = param.Data.Image ==''?window.location.origin + '/src/assets/img/piano.jpg': Store.state.backuploadurl+ param.Data.Image
      this.data.desc = param.Data.Describle.replaceAll('/UploadFile',Store.state.backuploadurl + '/UploadFile')
      this.data.visit = param.Data.VisitingCount
      this.data.modify = new Date(param.Data.ModifiedDate).toLocaleDateString('fa', {  year: "numeric", month: "short", day: "numeric"});
      this.data.tags.push(param.Data.Tag)
      this.data.concepts = JSON.parse(param.Data.Concepts)
      param.Data.LessonProducts.filter((i)=> this.data.products.push(i))
     
    },
    registrationmodal(productId){
      this.registratiiontimes =[]
      this.data.products.filter((i)=> i.Id == productId)[0].Product.ProductAvailableSessions.filter((i) => this.registratiiontimes.push({
        time:i.Hour,
        id:i.Id
      }))
      this.regiaterdialog = true
    },
    courseadvise(){
      if(Store.state.userId != -1)
      {
        Callaxios('CourseAdvice/GetAppointments','get',undefined,this.aftercourseadvise )
      }else{
        Store.commit('backurl',window.location.href)
        this.$router.replace({name:'welcome'})
      }
    },
    aftercourseadvise(param){
      this.appointments = []
      param.Data.filter((i)=> this.appointments.push(i))
      this.advisedialog=true
    },
    gotobag(){
      alert(this.selectpas)
    }
  }
}

</script>
<style scoped>
@import url(../../assets/css/Views/Lesson/home.css);
</style>