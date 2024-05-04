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
            <v-col cols="12" sm="12" md="5" >
                <v-img
                class="lessonimg"
                :src="data.img"
                cover=""
                ></v-img>
            </v-col>
            <v-col cols="12" sm="12" md="7" class="more">
                <v-container class="detail_desc " style="padding-inline-start: 5% !important;">
                    <h2 class="text-center">{{ data.name }}</h2>
                   
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
           <br>
           <!-- product -->
           <h1 class="text-center mt-5" v-if="data.products.length !=0">{{ $t('lesson.home_products') }}</h1>
           <v-container  v-if="data.products">
           <v-row class="center-class">
            <v-col cols="12" sm="6" md="6" lg="4" v-for="product in data.products">
                <v-sheet class="product-image text-center">
                  <div class="title-posision">
                    <h3 class="title text-center">
                      {{ product.Product.name }}
                      <br>
                      <h4>{{ product.Product.TeacherName }}</h4>
                      <h6 class="start">{{ $t('lesson.home_startdate') }}: {{ product.Product.stringstartdate }}</h6>
                    </h3>
                  </div>
                    
                    <img class="img" :src="data.img" alt="">
                    <v-sheet class="info" >
                      
                      <h2 class="mb-3">{{ $t('lesson.home_info') }}</h2>
                        
                          <ul class="mb-2" style="">
		                          <li><strong>{{ $t('lesson.home_price') }}: </strong>{{ product.Product.price }} {{ $t('lesson.home_priceunit') }}</li>
		                          <li><strong>{{ $t('lesson.home_discount') }}: </strong>%{{ product.Product.Discount }}</li>
		                          <li><strong>{{ $t('lesson.home_days') }} : </strong>{{ product.Product.stringday }}</li>
                              <li><strong>{{ $t('lesson.home_sessioncount') }} : </strong>{{ product.Product.SessionsNumber }}</li>
                              <li><strong>{{ $t('lesson.home_sessionsumHours') }} : </strong>{{ product.Product.ClassHour }}</li>
		                          <li><strong>{{ $t('lesson.home_endprice') }} : </strong>{{ product.Product.payable }} {{ $t('lesson.home_priceunit') }}</li>
	                        </ul>
                       
	                       
                     <v-btn class="buy" color="green" @click="registrationmodal(product.ProductId)">{{ $t('lesson.home_buy') }} </v-btn>
                     <v-btn class="moshavere" color="orange" @click="courseadvise(product.ProductId)">{{ $t('lesson.home_councelling') }}</v-btn>
                    </v-sheet>
                </v-sheet>
            </v-col>
            
          </v-row>
        </v-container>
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
        :error-messages="bagerror"
        :error="bagerror !=''"
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
        <v-card-title class="dialog_title">{{ $t('lesson.home_advise') }}</v-card-title>
        <v-divider></v-divider>
     
        <p class="mt-5" style="font-family: 'IRANSANS';">
          {{ $t('lesson.home_advisetext') }}
        </p>
        <br>
        <v-row>
            <v-col cols="6"> <v-select 
            no-transition
            :label="$t('lesson.home_advisehour')"
            :items="appointments"
            :item-title="item=>item.Time"
            :item-value="item=>item.Id"
            v-model="selectappointment"
            :error="adviseeroor!=''"
            :error-messages="adviseeroor"
            variant="outlined"
            class="selectclass"
        ></v-select></v-col>
            <v-col cols="6"> <v-select 
            no-transition
            :label="$t('lesson.home_adviseday')"
            :items="days"
            :item-title="item=>item.name"
            :item-value="item=>item.id"
            :error="advisedayeroor!=''"
            :error-messages="advisedayeroor"
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
          {{$t('lesson.home_adviseclose')}}
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="flat"
            append-icon="fa fa-check"
            @click="addadvise()"
          >
          {{$t('lesson.home_adviseadd')}}
          </v-btn>
        </v-card-actions>
      </v-sheet>
    </v-dialog>

    <notif v-if="snackbar" :show="snackbar" :location="'top right'" :text="snackbartext" :type="snackbartype" @close="snackbar=false"/>
    </v-row>

</template>

<script >
import banner from '../../components/Banner.vue'
import myfooter from '../../components/Footer.vue'
import notif from '../../components/ResultNotification.vue'

import i18n from '@/locales/i18n'
import { Callaxios } from '@/assets/composable/CallAxus'
import Store from '@/store/Store'
export default{
  data(){
    return {
      bagerror:'',
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
                concepts:[],
                
            },
      registratiiontimes:[],
      selectpas :0,
      selectproduct:0,
      appointments:[],
      selectappointment:0,
      days:[
        {
          name:i18n.global.t('lesson.today'),
          id:0
        },
        {
          name:i18n.global.t('lesson.tomorrow'),
          id:1
        },
        {
          name:i18n.global.t('lesson.twodaylater'),
          id:2
        }
      ],
      snackbar:false,
      snackbartype:'',
      snackbartext:'',
      selectday:0,
      adviseeroor:'',
      advisedayeroor:''

    }
  },
  components:{
    banner,myfooter,notif
  },
  mounted(){
    Callaxios('Lesson/GetLessonDetail/'+this.$route.params.lessonid+'/'+this.$route.params.academyId,'get',undefined,this.aftergetdetail )
    
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
      if(Object.entries(Store.state.profile).length != 0)
      {
        this.selectproduct = productId
        Callaxios('ProductAvailableSession/GetHours/'+productId,'get',undefined,this.aftergethours )
      }else{
        Store.commit('backurl',{name:'lessondetail',params:{lessonid:this.$route.params.lessonid}})
        this.$router.replace({name:'welcome'})
      }
     
    },
    aftergethours(param){
      this.selectpas=0
      this.bagerror=''
      this.registratiiontimes =[]
      param.Data.filter((i) => this.registratiiontimes.push({
        time:i.Hour,
        id:i.Id
      }))
      this.regiaterdialog = true
    },
    courseadvise(productId){
      if(Object.entries(Store.state.profile).length != 0)
      {
        this.selectproduct = productId
        Callaxios('CourseAdvice/GetAppointments','get',undefined,this.aftercourseadvise )
      }else{
        Store.commit('backurl',{name:'lessondetail',params:{lessonid:this.$route.params.lessonid,academyId:this.$route.params.academyId}})
        this.$router.replace({name:'welcome'})
      }
    },
    aftercourseadvise(param){
      this.appointments = []
      param.Data.filter((i)=> this.appointments.push(i))
      this.selectappointment = this.appointments[0].Id
      this.advisedialog=true
    },
    gotobag(){
      if(this.selectpas==0)
      {
        this.bagerror = 'باید یک ساعت انتخاب کنید'
      }else{
        var input={
          ProductId:this.selectproduct,
          ProductAvailableSessionId:this.selectpas,
          CompanyId:this.$route.params.academyId
        }
        this.regiaterdialog = false
        Callaxios('ShoppingBag/ValidateForAddToCart','post',input,this.aftervalidate)
      }
    }
    ,aftervalidate(param){
      if(param.Data.Result==0){
        this.snackbartext=param.Data.Message
      this.snackbartype='error'
      this.snackbar=true
      }else{
        var input={
          ProductId:this.selectproduct,
          ProductAvailableSessionId:this.selectpas,
          Count:1
        }
        Callaxios('ShoppingBag/AddToCartWithCompany','post',input,this.afteraddtocard)
      }
    },
    afteraddtocard(param){
      if(param.Data.Result==0){
        this.snackbartext=param.Data.Message
      this.snackbartype='error'
      this.snackbar=true
      }else{
        this.regiaterdialog=false
        this.$router.push({name:'bag'})
      }
    },
    addadvise(){
      if(this.selectappointment ==0){
        this.adviseeroor = i18n.global.t('lesson.adviseeroor')
      }else
      if(this.selectday ==-1){
        this.advisedayeroor =i18n.global.t('lesson.advisedayeroor')
      }else{
        var input={
          ProductId:this.selectproduct,
          AddDay:this.selectday,
          AppointmentId:this.selectappointment
        }
        this.advisedialog=false
        Callaxios('CourseAdvice/Add','post',input,this.afteraddadvise)
      }

    },afteraddadvise(param){
        if(param.TypeInt ==1){
          this.snackbartext=param.Data
          this.snackbartype='error'
          this.snackbar=true
        } else{
          this.snackbartext=param.Data
          this.snackbartype='success'
          this.snackbar=true
        } 
      }
    
  }
}

</script>
<style scoped>
@import url(../../assets/css/Views/Lesson/home.css);
</style>