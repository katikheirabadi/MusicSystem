<template>
     <banner/>
     <myheader
     img="http://localhost:3000/src/assets/img/wp12166234-yamaha-piano-wallpapers.jpg" 
     :header="$t('category.headertitle')+this.description.title" 
     :text="$t('category.headertext')" :btns="[{text:$t('category.headerbtn'),link:'/'}]">
    <template slot="logo">
      <img  v-if="description.logo!=''" :src="description.logo" alt="" style="width: 20% !important;">
    </template>
    </myheader>
     <detail :header=" $t('category.resume') +this.description.title" :cards="details"/>
     <description :title="description.title" :text="description.desc"/>
     <v-container>
      <!-- categories -->
      <section>
        <h1 class="sectionheader" style="">دسته بندی های آموزشگاه</h1>
     <v-row  >
        <v-col class="center-class" sm="12" md="6" lg="4" cols="12" v-for="category in categories" :key="category.id">
            <v-card class="card" >
                <v-sheet class="img-hover-zoom img-hover-zoom--zoom-n-rotate">
                  <img  style="display: flex;height: 300px !important;width: 100%;" :src="category.img" alt="">
                </v-sheet>
                <v-sheet
                class="card-body"
                >
                <h5 class="card-title">
					     	{{ category.name }}
					     </h5>
					
                <router-link :to="{name:'lessons',params:{academy:this.$route.params.academy}}" class="btn hvr-bounce-to-bottom">{{ $t('category.gotocourses') }}</router-link>
                </v-sheet>
            </v-card>           
        </v-col>
        
     </v-row>
      </section>
     </v-container>
 <myfooter/>
</template>
<script >
import banner from '@/components/Banner.vue'
import myheader from '@/components/Header.vue'
import detail from '@/components/DetailCards.vue'
import description from '@/components/Descripti9ontextRow.vue'
import myfooter from '@/components/Footer.vue'

import { Callaxios } from '@/assets/composable/CallAxus'
export default{
    data(){
        return {
          items: [
        {
          color: 'red-darken-3',
          icon: 'fa fa-hourglass-start',
          title:'شروع کار',
          desc:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'red-darken-3',
          icon: 'fa fa-graduation-cap',
          title:'خدمان آموزشگاه',
          desc:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        },
        {
          color: 'red-darken-3',
          icon: '	fa fa-key',
          title:'هم اکنون',
          desc:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        }
          ],
          categories:[],
          details:[
            {
              count:523,
              text: this. $t('message.allusers')
            },
            {
              count:154,
              text: this.$t('message.teachers')
            },
            {
              count:90,
              text: this.$t('message.gratuateds')
            }
          ],
          description:{
            title: '',
            desc: '',
            logo:''
          }
               
        }
    },
    components:{
        banner,myheader,detail,description,myfooter
    },
    mounted(){
        Callaxios('Frant/GetCompany/'+this.$route.params.academy,'get',undefined,this.adtergetdetail)
    }
   ,methods:{
    adtergetdetail(param){
      console.log(param.Data)
      this.description.title = param.Data.name
      this.description.desc = param.Data.describle == ''? `${param.Data.address} <br> شماره تماس : ${param.Data.Phone}`:''
      this.description.logo = param.Data.value == '' ?'': 'https://tms.bamdad.co/' + param.Data.value
    }
   }
}
</script>
<style scoped>
@import url(../../assets/css/academy.css);
</style> 