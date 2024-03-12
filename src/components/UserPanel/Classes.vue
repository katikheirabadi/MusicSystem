<template>
  <v-row class="mt-10 ma-2">
    <v-col v-for="myclass in classes" cols="12" md="3" :key="myclass.ProductAvailableId">
      <v-sheet class="card">

        <v-sheet class="d-flex justify-center head">

          <v-sheet class="title d-flex justify-space-between">
            <div class="d-flex justify-start align-center pt-2 pb-2" style="width: 80%;">
              <img src="../../assets/img/classacademy.png" alt="">
              <h4 class="text-white text-center">{{ myclass.CompanyName }}</h4>
            </div>
            <v-sheet  class="setting d-flex align-center">
               <v-menu location="bottom">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" icon="fa fa-gear"></v-icon>
                </template>
                <v-list class="text-center">
                  <v-list-item @click="upselected=myclass.userProductId;showsuggestionmodal=true">
                   <p class="d-flex justify-space-between"> ثبت نظرات 
                   <v-icon icon="fa fa-commenting"></v-icon>
                  </p>
                  </v-list-item>
                  <v-list-item @click="upselected=myclass.userProductId;deleteproductname=myclass.ProductName;selectedpas=myclass.ProductAvailableId;showdeletemodal=true">
                    <p  class="d-flex justify-space-between"> 
                       انصراف از دوره
                      <v-icon icon="fa fa-caret-square-left"></v-icon>
                    </p>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-sheet>
          </v-sheet>
        </v-sheet>

        <v-sheet class="content ma-2">
          <h4 class="text-center">{{ myclass.ProductName }}</h4>
          <hr class="mt-1 mb-2">
          <h5 class="text-center"><strong>تاریخ شروع: </strong>{{ myclass.startDate }}</h5>
          <h5 class="mt-2 text-center"><strong> استاد: </strong>{{ myclass.TeacherFName }} {{ myclass.TeacherLName }}</h5>
          <h5 class="mt-2 text-center"><strong>تعداد جلسات: </strong>{{ myclass.SessionsCount }} از {{
            myclass.SessionsNumber }}</h5>
          <h5 class="mt-2 text-center"><strong>روز های برگزاری: </strong>{{ myclass.SessionDays }}</h5>
          <h5 class="mt-2 text-center"><strong>ساعت برگزاری</strong> {{ myclass.Hour }}</h5>
          <h5 class="mt-2 text-center mb-2"><strong>نمره: </strong>{{ myclass.Grade }}</h5>

          <hr />
          <v-row class="d-flext justify-space-between">
            <v-col class="d-flex justify-center" cols="6">
              <v-btn v-if="myclass.IsLock == null" block class="classbtn session"
                @click="getAllsessions(myclass.ProductAvailableId)">جلسات</v-btn>
              <v-btn v-else block class="classbtn bg-grey-darken-2">------</v-btn>
            </v-col>
            <v-col class="d-flex justify-center" cols="6">
              <v-btn block class="classbtn surveis" @click="showsurvey(myclass.userProductId,myclass.ProductName)">نظرسنجی</v-btn>
            </v-col>
          </v-row>


        </v-sheet>

      </v-sheet>
    </v-col>

  </v-row>
  <!-- surveys -->
  <v-dialog width="50%" v-model="showserveymodal">
    <v-card :subtitle="' نظرسنجی های دوره ی' + productname">
      <v-sheet class="mt-5 mb-5" style="font-family: 'IRANSANS';">
        <v-row>
          <v-col cols="12" md="6" class="text-center bg-orange-darken-4 column">نام نظرسنجی</v-col>
          <v-col cols="12" md="6" class="text-center bg-orange-darken-4 column">ورد به نظرسنجی </v-col>
        </v-row>
        <v-row v-for="survey in surveis" :key="survey.PackageId">
          <v-col cols="12" md="6" class="text-center">
            <strong>{{ survey.PackageName }}- {{ survey.PackageType }}</strong> 
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <v-btn class="text-center bg-orange-darken-2">ورود به نظرسنجی</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="بستن" @click="showserveymodal = false"></v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
  <v-dialog class="d-block d-md-none" v-model="showserveymodal">
    <v-card :subtitle="' نظرسنجی های دوره ی' + productname">
      <v-sheet class="mt-5 mb-5 d-none d-md-block" style="font-family: 'IRANSANS';">
        <v-row>
          <v-col cols="12" md="6" class="text-center bg-orange-darken-4 column">نام نظرسنجی</v-col>
          <v-col cols="12" md="6" class="text-center bg-orange-darken-4 column">ورد به نظرسنجی </v-col>
        </v-row>
        <v-row v-for="survey in surveis" :key="survey.PackageId">
          <v-col cols="12" md="6" class="text-center">
            <strong>{{ survey.PackageName }}- {{ survey.PackageType }}</strong> 
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <v-btn class="text-center bg-orange-darken-2">ورود به نظرسنجی</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
      <v-sheet class="mt-5 mb-5 d-block d-md-none" style="font-family: 'IRANSANS';">
        <v-sheet v-for="survey in surveis" :key="survey.PackageId" class="text-center" style="border-radius: 10px;box-shadow: 4px 4px 10px orange;margin-inline: 10%;">
         
          <h4 class="pb-2 pt-2">{{ survey.PackageName }}- {{ survey.PackageType }}</h4> 
          <v-btn class="text-center bg-orange-darken-2 mt-2 mb-2">ورود به نظرسنجی</v-btn>
        </v-sheet>
      </v-sheet>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="بستن" @click="showserveymodal = false"></v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
  <!-- sessions -->
  <v-dialog  
             transition="dialog-bottom-transition" 
             v-model="showsessions" 
             width="70%"
             >
    <v-card   style="background-color: #ffffff;" title="جلسات دوره شما">
      <v-sheet class="mt-5  mb-5 ">

        <v-row class="d-sm-none d-md-flex">
          <v-col md="1" class="text-center bg-yellow-darken-2 column">*</v-col>
          <v-col md="1" class="text-center bg-yellow-darken-2 column">حضور شما</v-col>
          <v-col md="2" class="text-center bg-yellow-darken-2 column">تاریخ جلسه</v-col>
          <v-col md="2" class="text-center bg-yellow-darken-2 column">کلاس آنلاین </v-col>
          <v-col md="2" class="text-center bg-yellow-darken-2 column">محتوای جلسه</v-col>
          <v-col md="2" class="text-center bg-yellow-darken-2 column">تکالیف </v-col>
          <v-col md="2" class="text-center bg-yellow-darken-2 column">نمره شما در جلسه</v-col>
        </v-row>
        <v-row v-for="(session, index) in sessions" :key="session.Id" class="sessions" :class="{ 'sessionrow': index % 2 != 0 },
          { 'bg-red-lighten-1': session.isactive != 1 }
          , { 'bg-purple-lighten-2': session.isactive == 5 }">
          <v-tooltip location="top" activator="parent" class="text-center" v-if="session.isactive != 1">
            <strong v-if="session.isactive == 2">لغو شده توسط اموزشگاه </strong>
            <strong v-if="session.isactive == 4">لغو شده توسط استاد </strong>
            <strong v-if="session.isactive == 5">جلسه حذف شده و جلسه جبرانی برای آن تعیین شده است</strong>
            <br>
            ({{ session.desc }})
          </v-tooltip>
          <v-col md="1" class="text-center column">{{ index + 1 }}</v-col>
          <v-col md="1" class="text-center column">
            <v-tooltip v-if="session.status == 1 && session.isactive == 1" activator="parent" location="top">حضور خورده
              اید</v-tooltip>
            <v-icon v-if="session.status == 1 && session.isactive == 1" class="text-success"
              icon="fa fa-check-circle"></v-icon>

            <v-tooltip v-if="session.status == 0 && session.isactive == 1" activator="parent" location="top">غیبت خورده
              اید</v-tooltip>
            <v-icon v-if="session.status == 0 && session.isactive == 1" color="red" icon="fa fa-close"></v-icon>

            <v-tooltip v-if="session.status == -1 && session.isactive == 1" activator="parent" location="top">حضور غیاب نشده
              اید</v-tooltip>
            <v-icon v-if="session.status == -1 && session.isactive == 1" color="gold"
              icon="fa fa-exclamation-triangle"></v-icon>

          </v-col>
          <v-col md="2" class="text-center column">{{ session.date }} </v-col>
          <v-col md="2" class="text-center column">
            <p v-if="session.msco == ''" class="negetive" :class="{ 'text-white': session.isactive != 1 }">-----</p>
            <v-btn v-else block class="bg-deep-purple-lighten-1"
              @click="gotoonlineclass(session.Id, session.msco, session.platform)">ورود به کلاس آنلاین</v-btn>
          </v-col>
          <v-col md="2" class="text-center column">
            <v-btn v-if="session.isactive == 1" class="bg-green-darken-1" block>محتواهای جلسه</v-btn>
          </v-col>
          <v-col md="2" class="text-center column">
            <p v-if="session.HavePractice != 1" class="negetive" :class="{ 'text-white': session.isactive != 1 }">-----</p>
            <v-btn v-else block class="bg-teal-darken-1">مشاهده تکالیف</v-btn>
          </v-col>
          <v-col md="2" class="text-center column">{{ session.mark }}</v-col>
        </v-row>
      </v-sheet>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn  text="بستن" @click="showsessions = false"></v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
  <!-- add suggestion -->
  <v-dialog
        transition="dialog-top-transition"
        v-model="showsuggestionmodal"
        width="50%"
      >  
          <v-card>
            <v-toolbar
              color="teal-darken-1"
              title="ثبت نظرات شما (انتقاد،پیشنهاد و اعتراض)"
            ></v-toolbar>
            <v-card-text>
              <v-select
              :items="suggestiontypes"
              :item-title="(i)=> i.name"
              :item-value="(i)=> i.value"
              v-model="suggestiontype"
              style="color:#06514a !important"
              >
              </v-select>
              <p class="negetive mb-2" v-if="suggestiontype!=2">متاسفیم امکانات آموزشی مناسبی ارائه نکردیم
                 <br>لطفا نظر خود را برای ما بنویسید.</p>
              <v-textarea v-model="suggestionText" label="متن شما ...." variant="solo-filled"></v-textarea>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                class="bg-green-darken-1"
                @click="addsuggestion"
              > <v-icon icon="fa fa-check"></v-icon>ارسال نظر</v-btn>
              <v-btn
                class="bg-red-darken-1"
                @click="showsuggestionmodal = false"
              > <v-icon icon="fa fa-close"></v-icon>بستن</v-btn>
            </v-card-actions>
          </v-card>
        
  </v-dialog>
  <!-- add deleteuprequest -->
  <v-dialog
        transition="dialog-top-transition"
        v-model="showdeletemodal"
        width="50%"
      >  
          <v-card>
            <v-toolbar
              color="blue-darken-1"
              title="درخواست انصراف از دوره"
            ></v-toolbar>
            <v-card-text>
              <h3>شرایط انصراف</h3>
              <br>
              <p>شما درخواست حذف دوره &nbsp<strong class="text-info">{{ deleteproductname  }} </strong>&nbspرا دارید. در صورت اطمینان متن در خواست خود را به همراه شماره کارت به همراه نام صاحب کارت نوشته و دکمه ثبت را بزنید</p>
              <br>
              <v-textarea v-model="deletetext" label="متن درخواست شما ...." variant="solo-filled"></v-textarea>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field type="text" v-model="deletecreditnumber" :rules="deleterules" label="شماره کارت" ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">

                  <v-text-field type="text" v-model="deletecredituser" :rules="deleterules" label="نام و نام خانوادگی صاحب کارت" ></v-text-field>
                </v-col>
              </v-row>
            

            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                class="bg-blue-darken-4"
                @click="adddeleterequest"
              > <v-icon icon="fa fa-check"></v-icon>ثبت درخواست</v-btn>
              <v-btn
                class="bg-red-darken-1"
                @click="showdeletemodal = false"
              > <v-icon icon="fa fa-close"></v-icon>بستن</v-btn>
            </v-card-actions>
          </v-card>
        
  </v-dialog>
  <notif v-if="snackbar" :type="snackbartype" :text="snackbarmessage" :show="snackbar" @close="snackbar=false"/>
</template>
<script>
import { Callaxios } from '@/assets/composable/CallAxus'
import { ToPersionDate } from '@/assets/helper/heper'

import notif from '@/components/ResultNotification.vue'
export default {
  data() {
    return {
      showserveymodal: false,
      surveis:[],
      productname:'',
      upselected: 0,
      classes: [],
      sessions: [],
      showsessions: false,
      showsuggestionmodal:false,
      suggestiontypes:[
        {name:'انتقاد',value:1},
        {name:'پیشنهاد',value:2},
        {name:'اعتراض',value:3},
      ],
      suggestiontype:2,
      suggestionText:'',
      snackbar:false,
      snackbartype:'',
      snackbarmessage:'',
      showdeletemodal:false,
      deleteproductname:'',
      deletetext:'',
      deletecreditnumber:'',
      deletecredituser:'',
      deleterules:[
            v => !!v || 'پر کردن این فیلد اجباری است',
            ],
      selectedpas:0
    }
  },
  components:{
    notif
  },
  mounted() {
    Callaxios('UserProduct/UserCourses', 'post', {}, this.aftergetcourses)
  },
  methods: {
    aftergetcourses(param) {
      this.classes = param.Data
    },
    showsurvey(up,name) {
      this.upselected = up
      this.productname = name
      Callaxios('Survey/GetAllSurveysForProduct','post',{UserProductId:up},this.aftergetallsurveys)
     
    },
    aftergetallsurveys(param){
      this.surveis = param.Data
      this.showserveymodal = true
    },
    getAllsessions(pasId) {
      Callaxios('UserSession/GetUserProductSessions', 'post', { ProductAvailableSessionId: pasId }, this.aftergetallsessions)
    },
    aftergetallsessions(param) {
      this.sessions = []
      // this.sessions= param.Data
      for (var i = 0; i < param.Data.length; i++) {
        var desc = ''
        if (param.Data[i].Description == '') {
          desc = '-----'
        } else {
          desc = param.Data[i].Description
        }
        var mark = ''
        if (param.Data[i].Mark == -1) {
          mark = '-----'
        }
        else {
          mark = param.Data[i].Mark
        }
        this.sessions.push({
          Id: param.Data[i].SessionId,
          desc: desc,
          status: param.Data[i].Status,
          date: ToPersionDate(param.Data[i].Date),
          mark: mark,
          isactive: param.Data[i].IsActive,
          practice: param.Data[i].HavePractice,
          msco: param.Data[i].MscoId,
          platform: param.Data[i].PlatformId
        })
      }
      this.showsessions = true
    },
    gotoonlineclass(sessionId, mscoId, platformId) {
      if (platformId == 0) {
        Callaxios("UserSession/GetUrlByMscoId/" + sessionId + "/" + mscoId, 'get', undefined, this.getUrlByMscoIdSucces);
      }

      if (platformId == 1) {
        var input = {
          RoomId: mscoId
        }

        Callaxios("SkyRoom/GoToRoom", 'post', input, this.getUrlByMscoIdSucces)
      }
    },
    getUrlByMscoIdSucces(param) {
      window.open(param.Data, '_blank')
    },
    addsuggestion(){
      var input={
        Text:this.suggestionText,
        IsNegetive: this.suggestiontype !=2 ?true:false,
        IsComplaint:this.suggestiontype !=3 ?false:true,
        UserProductId:this.upselected
      }
      Callaxios('UserSuggestion/AddUserSuggestion','post',input,this.afteraddsuggestion)
    },
    afteraddsuggestion(param){
      this.snackbarmessage = param.Data
      this.snackbartype = 'success'
      this.snackbar=true
      this.suggestionText =''
      this.suggestiontype=2
      this.showsuggestionmodal = false

    },
    adddeleterequest(){
      var input={
        Text:this.deletetext + '\n' + this.deletecredituser + ":" + this.deletecreditnumber,
        ProductAvalableSessionId:this.selectedpas,
        UserProductId:this.upselected
      }
      Callaxios('UserRequest/AddRequest','post',input,this.afteradddeleterequest)
    },
    afteradddeleterequest(param){
      this.snackbarmessage = param.Data
      this.snackbartype = 'success'
      this.snackbar=true
      this.showdeletemodal=false
      this.deletetext =''
      this.deletecreditnumber=''
      this.deletecredituser = ''
    }
  },
  computed: {
    iconContent() {
      return `<v-icon icon="fa fa-check-circle"></v-icon>`;
    },
  }
}
</script>
<style scoped>
@import url(../../assets/css/UserPanel/classes.css);
</style>