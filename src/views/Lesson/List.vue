<template>
    <banner/>
    <myheader :img="lessonimg"
    :header="'درس های آموزشگاه '+this.company.name"
    :text="'در این قسمت لیست تمامی درس های آموزشگاه را مشاهده می کنید. با انتخاب هر کدام اطلاعات دوره های درس برای شما نمایش داده می شود.'"
    :btns="[{text:'بازگشت به خانه',link:'/'}]"
    :logo="company.logo"
    />
    <!-- Class Cards  -->
    <section>
      <h1 class="text-center sectionheader">{{ $t('message.section2_title') }}</h1>
      <v-container>
        <v-row >
        <v-col v-for="myclass in classes" :key="myclass.id" cols="12" sm="6" md="4" xl="3">
        <v-card 
           class="mx-auto mt-5 classcard" 
            >
          <v-img
          cover=""
          height="200"
          :src="myclass.img"
          alt="karosaz"
          ></v-img>

          <v-card-item >
          <v-card-title >{{ myclass.name }}</v-card-title>  
          </v-card-item>
          <v-row class="text-center">
                        <v-col cols="6">
                            <v-icon icon="fa fa-eye"></v-icon>
                            <h4>بازدید</h4>
                            <p>{{ myclass.visit }}</p>
                        </v-col>
                        <v-col cols="6">
                            <v-icon icon="fa fa-cube"></v-icon>
                            <h4>دوره ها</h4>
                            <p>{{ myclass.productcount }}</p>
                        </v-col>
           </v-row>

          <v-card-actions class="actions">
             <router-link
                 :to="{name:'lessondetail',
                 params:{lessonname:myclass.name,
                        academy:this.$route.params.academy,
                        lessonid:myclass.id}}"
                class="ma-2 mybtn"
                >
                {{ $t('message.detail') }} &nbsp
                  <v-icon
                    start
                    icon="fa fa-external-link"
                  ></v-icon>
              </router-link>

          </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
      </v-container>
   
    </section>
    <myfooter style="margin-top: 0;"/>
</template>
<script>
import banner from '@/components/Banner.vue'
import myheader from '@/components/Header.vue'
import myfooter from '@/components/Footer.vue'

import { Callaxios } from '@/assets/composable/CallAxus'
import Store from '@/store/Store'
export default{
components:{
  banner,myfooter,myheader
},
data(){
  return {
    classes:[],
    company:{
      name:'',
      logo:''
    },
    lessonimg:window.location.origin + '/src/assets/img/lesson.jpg'
  }
},
mounted(){
  var input ={
  "Name": "",
  "CategoryId": parseInt( this.$route.params.category),
  "OrderBy": 0,
  "Desc": 0,
  "PageIndex": 0,
  "PageSize": 0,
  "CompanyId": 3
}
  Callaxios('Lesson/GetList','post',input,this.aftergetlessons)
  Callaxios('Frant/GetCompany/'+this.$route.params.academyId,'get',undefined,this.adtergetdetail)
},
methods:{
  aftergetlessons(params){
    console.log(params.Data)
    params.Data.filter((i)=> this.classes.push({
      id:i.Id,
      img: i.Image=='no'?this.lessonimg:Store.state.backuploadurl+i.Image,
      name :i.Name,
      visit : i.VisitingCount,
      productcount: i.ProductCount
    }))
    console.log(this.classes)
  },
  adtergetdetail(param){
    this.company.name =param.Data.name
    this.company.logo = param.Data.value == '' ?'': Store.state.backuploadurl + param.Data.value

  }
}
}
</script>
<style scoped>
 @import url(../../assets/css/Views/Lesson/list.css);
 
</style>