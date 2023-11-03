<template>
    <banner/>
    <myheader img="http://localhost:3000/src/assets/img/wp5464254-wallpaper-full-hd-musica.png"
    :header="'آمورشگاهای سامانه کاروساز'"
    :text="'در این قسمت لیست تمامی آموزشگاهای فعال در سامانه را مشاهده می کنسد. با انتخاب هر کدام اطلاعات آموزشگاه برای شما نمایش داده می شود.'"
    :btns="[{text:'بازگشت به خانه',link:'/'}]"
    />
    <v-container style="margin-bottom: 3%;">

 
    <v-row>
          <v-col cols="12" md="4" v-for="academy in academies" :key="academy.id" >
            <v-card 
           class="mx-auto academy" 
            >
          <v-img
          style="height: 55%;"
          cover=""
          src="../../assets/img/wp5464254-wallpaper-full-hd-musica.png"
          ></v-img>

          <v-card-item >
          <v-card-title >{{ academy.name }}</v-card-title>
          </v-card-item>

          <v-card-text>
          <div>{{ academy.addres }} - {{ academy.phone }}</div>
          </v-card-text>
          <v-card-actions style="  display: flex;justify-content: end;">
          <router-link
          :to="{name:'Academy',params:{academy:academy.name}}"
          class="ma-2 mybtn"
          scroll-behavior="auto"
          >
          {{ $t('message.details') }} &nbsp
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
    <myfooter style="margin-top: 0;"/>
</template>
<script setup>
import banner from '@/components/Banner.vue'
import myheader from '@/components/Header.vue'
import myfooter from '@/components/Footer.vue'

let academies=[
          {
            id:1,
            name:'چگامه فردیس',
            addres:'کرج - فردیس، فلکه سوم خیابان ۳۳ جدید، پلاک 29',
            phone:'02636503521'
          },
          {
            id:2,
            name:'می ر سی',
            addres:'تهران - شیخ بهایی جنوبی، بلوار آزادگان، انتهای خیابان ۲۴ غربی، مجموعه فرهنگی ورزشی آفتاب',
            phone:'02188332195'
          },
          {
            id:4,
            name:'چگامه فرمانیه',
            addres:'تهران - فرمانیه بلوار اندرزگو نبش کوچه عبدالهی جنوبی پ 72 واحد 17',
            phone:'02122210307'
          },
          {
            id:6,
            name:'چگامه فردیس',
            addres:'کرج - فردیس، فلکه سوم خیابان ۳۳ جدید، پلاک 29',
            phone:'02636503521'
          },
          {
            id:8,
            name:'می ر سی',
            addres:'تهران - شیخ بهایی جنوبی، بلوار آزادگان، انتهای خیابان ۲۴ غربی، مجموعه فرهنگی ورزشی آفتاب',
            phone:'02188332195'
          },
          {
            id:88,
            name:'چگامه فرمانیه',
            addres:'تهران - فرمانیه بلوار اندرزگو نبش کوچه عبدالهی جنوبی پ 72 واحد 17',
            phone:'02122210307'
          }
          
        ]
</script>
<style scoped>
.academy{
  box-shadow: 5px 10px 20px #564e4e;
  border-radius: 5% !important;
  width: 100%;
  height:100%;
  background-color: #ebc18dad;
}
.academy:hover{
  box-shadow: 10px 15px 15px hsl(0, 6%, 16%);
}
.mybtn{
    background-color: #5b3405 !important;
    width: 100%;
    text-decoration: none;
    text-align: center;
    padding: 3% !important;
    color: aliceblue;
    border-radius: 15px;
  }
</style>