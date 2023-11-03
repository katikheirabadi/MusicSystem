<template>
    <banner/>
    <myheader img="http://localhost:3000/src/assets/img/pianp.jpg"
    :header="'درس های آموزشگاه '+this.$route.params.academy"
    :text="'در این قسمت لیست تمامی درس های آموزشگاه را مشاهده می کنید. با انتخاب هر کدام اطلاعات دوره های درس برای شما نمایش داده می شود.'"
    :btns="[{text:'بازگشت به خانه',link:'/'}]"
    />
    <!-- Class Cards  -->
    <section class="s3" >
      <h1 class="text-center sectionheader" style="font-size:30px;">{{ $t('message.section2_title') }}</h1>
      <v-container>
        <v-row 
       style="margin-bottom: 5%;">
      <v-col v-for="myclass in classes" :key="myclass.id" cols="12" sm="6" md="4" lg="4">
        <v-card 
           class="mx-auto mt-5 classcard" 
            >
          <v-img
          cover=""
          height="200"
          :src="myclass.img"
          ></v-img>

          <v-card-item >
          <v-card-title >{{ myclass.name }}</v-card-title>
          <v-card-subtitle>{{ myclass.price }}</v-card-subtitle>
          </v-card-item>

          <v-card-text>
          <div>{{ myclass.description }}</div>
          </v-card-text>
          <v-card-actions style="  display: flex;justify-content: end;">
          <router-link
          :to="{name:'lessondetail',params:{lessonname:myclass.name,academy:this.$route.params.academy,lessonid:myclass.id}}"
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
    <myfooter/>
</template>
<script setup>
import banner from '@/components/Banner.vue'
import myheader from '@/components/Header.vue'
import myfooter from '@/components/Footer.vue'
let  classes =[
          {
            id:1,
            name:'پیانو',
            price:'100,000,000 ریال',
            img: window.location.origin +'/src/assets/img/piano.jpg',
            description: 'دوره شامل 15 جلسه 1 ساعته با ...'
          },
           {
            id:2,
            name:'گیتار',
            price:'150,000,000 ریال',
            img: window.location.origin +'/src/assets/img/gituar.jpg',
            description: '  دوره شامل 10 جلسه 1 ساعته با رایج ترین تخصص ها ...'
          },
           {
            id:3,
            name:'ویالون',
            price:'500,000,000,000 ریال',
            img: window.location.origin +'/src/assets/img/vialon.jpg',
            description: '  دوره شامل 10 جلسه 1 ساعته با رایج ترین تزبافباباددرالبا  ...'
          },
          {
            id:1,
            name:'پیانو',
            price:'100,000,000 ریال',
            img: window.location.origin +'/src/assets/img/piano.jpg',
            description: 'دوره شامل 15 جلسه 1 ساعته با ...'
          },
           {
            id:2,
            name:'گیتار',
            price:'150,000,000 ریال',
            img: window.location.origin +'/src/assets/img/gituar.jpg',
            description: '  دوره شامل 10 جلسه 1 ساعته با رایج ترین تخصص ها ...'
          },
           {
            id:3,
            name:'ویالون',
            price:'500,000,000,000 ریال',
            img: window.location.origin +'/src/assets/img/vialon.jpg',
            description: '  دوره شامل 10 جلسه 1 ساعته با رایج ترین تزبافباباددرالبا  ...'
          }
        ]
</script>
<style>
 .sectionheader{
    font-size:30px;
    margin-top: 3%;
    color: #5b1505;
  }
   .classcard{
    box-shadow: 5px 10px 20px #564e4e;
    border-radius: 5% !important;
    width: 100%;
    height: 95%;
    animation-duration: 3s;
    animation-name: bounceIn;
    animation-direction: alternate; 
    background-color:#bd301050;
  }
  .classcard:hover{
    box-shadow: 10px 15px 15px hsl(0, 6%, 16%);
  }
  .mybtn{
    background-color: #5b1505 !important;
    width: 100%;
    text-decoration: none;
    text-align: center;
    padding: 3% !important;
    color: aliceblue;
    border-radius: 15px;
  }
</style>