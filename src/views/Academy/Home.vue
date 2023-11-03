<template>
     <banner/>
     <myheader img="http://localhost:3000/src/assets/img/wp12166234-yamaha-piano-wallpapers.jpg" :header="$t('category.headertitle')+this.$route.params.academy" :text="$t('category.headertext')" :btns="[{text:$t('category.headerbtn'),link:'/'}]"/>
     <detail :header=" $t('category.resume') +this.$route.params.academy" :cards="details"/>
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
import banner from '../../components/Banner.vue'
import myheader from '../../components/Header.vue'
import detail from '@/components/DetailCards.vue'
import description from '@/components/Descripti9ontextRow.vue'
import myfooter from '@/components/Footer.vue'
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
          categories:[
                {
                    name:'پیانو',
                    img:window.location.origin + '/src/assets/img/pianp.jpg',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti suscipit sapiente laboriosam eveniet itaque sequi rerum animi minima ab nihil, molestiae similique asperiores, veniam obcaecati.',
                    id:1
                },
                {
                    name:'ویالون',
                    img:window.location.origin + '/src/assets/img/p2.jpg',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti suscipit sapiente laboriosam eveniet itaque sequi rerum animi minima ab nihil, molestiae similique asperiores, veniam obcaecati.',
                    id:2
                },
                {
                    name:'گیتار',
                    img:window.location.origin + '/src/assets/img/g.jpg',
                    text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti suscipit sapiente laboriosam eveniet itaque sequi rerum animi minima ab nihil, molestiae similique asperiores, veniam obcaecati.',
                    id:3
                }
          ],
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
            title: this.$route.params.academy,
            desc: 'لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صلورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحهفحه'
          }
               
        }
    },
    components:{
        banner,myheader,detail,description,myfooter
    }
   
}
</script>
<style scoped>
@import url(../../assets/css/academy.css);
</style> 