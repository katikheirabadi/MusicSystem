<template>
    <banner/>
    <v-sheet class="aboutmain center-class">
        <v-sheet class="aboutcard my-auto center-class">
            <h1 class="text-center">آشنایی با سامانه کاروساز</h1>
            <!-- <v-img src="../assets/img/logo.png" class="img"></v-img> -->
            <p class="text-center mx-auto mt-8" style="width: 50%;">پس از سالها آموزش موسیقی در مجموعه های خود(آموزشگاه موسیقی چگامه در کرج و آموزشگاه های موسیقی چگامه و می ر سی در تهران)بر آن شدیم تا با ایجاد سامانه ائی پویا امکان ارائه کلاس های آموزشی به تمام نقاط کشور و حتی خارج را داشته باشیم. این سامانه کلیه فعالیت های درون سازمانی آموزشگاه ها را نیز پوشش می‌دهد و قابل استفاده برای تمامی آموزشگاه داران عزیز است. سامانه کار و ساز با هدف جذب نیروهای توانمند و جویای کار در زمینه تدریس موسیقی و آموزش به علاقمندان این رشته راه اندازی شده است.</p>
        </v-sheet>
    </v-sheet>
</template>
<script setup>
import banner from '@/components/Banner.vue'
</script>
<style>
.aboutmain{
    width: 100% !important;
    min-height: 91.8vh !important;
    background-color: rgba(246, 184, 153, 0.833);
    display: flex;
}
.aboutcard{
    width: 70% !important;
    min-height: 80vh !important;
    border-radius: 10px;
}
.aboutcard h1 {
    margin-top: 5%;
        color: #af4d32;
    }
.img{
    width: 29%;
margin: auto;
padding-top: 5%;
}
</style>