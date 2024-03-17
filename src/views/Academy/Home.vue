<template>
     <banner/>
     <myheader
     :img="img" 
     :header="$t('category.headertitle')+this.description.title" 
     :text="$t('category.headertext')" :btns="[]"
     :logo="description.logo"
     />
     <detail :header=" $t('category.resume') +this.description.title" :cards="details"/>
     <description :title="description.title" :text="description.desc"/>
     <v-container>
      <!-- categories -->
      <section v-if="categories">
      <h1 class="sectionheader">{{  $t('academy.home_categories') }}</h1>
      <v-row  id="cats">
        <v-col class="center-class" sm="12" md="6" lg="4" cols="12" 
        v-for="category in categories" 
        :key="category.id">
            <v-card class="card" >
                <v-sheet class="img-hover-zoom img-hover-zoom--zoom-n-rotate">
                  <img class="categoryimg" :src="category.img" alt="">
                </v-sheet>
                <v-sheet
                 class="card-body"
                 >
                 <h6 class="card-title">
					     	 {{ category.name }}
					       </h6>
					
                  <router-link 
                  :to="{name:'lessons',
                        params:{academy:description.title,
                                category:category.id,
                                academyId:this.$route.params.academy}}" class="btn hvr-bounce-to-bottom">{{ $t('category.gotocourses') }}</router-link>
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
import Store from '@/store/Store'
export default{
    data(){
        return {
          img: window.location.origin+ '/src/assets/img/academydefult.jpg',
          categories:[],
          details:[],
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
      this.description.title = param.Data.name
      this.description.desc = param.Data.describle == ''? `${param.Data.address} <br> شماره تماس : ${param.Data.Phone}`:''
      this.description.logo = param.Data.value == '' ?'': Store.state.backuploadurl + param.Data.value
      this.details.push(
        {
              id:'allusers',
              count:param.Data.users,
              text: this. $t('academy.allusers')
            },
            {
              id:'teachers',
              count:param.Data.teachers,
              text: this.$t('academy.teachers')
            },
            {
              id:"gratuateds",
              count:param.Data.gratuateds,
              text: this.$t('academy.gratuateds')
            },
            {
              id:"products",
              count:param.Data.products,
              text: this.$t('academy.products')
            }
      )
      var input ={
             "id": 0,
             "name": "",
             "Type": 0
            }
        Callaxios('Category/GetCategories','post',input,this.adtergetcategories)
    },
    adtergetcategories(param){
      console.log(param.Data)
      param.Data.filter((i)=> this.categories.push({
        name:i.name,
        img : i.Image == null ?this.img: Store.state.backuploadurl+i.Image,
        id:i.id
      }))
    }
   }
}
</script>
<style scoped>
@import url(../../assets/css/Views/Academy/home.css);
</style> 