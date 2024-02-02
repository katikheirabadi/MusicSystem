<template>
<h2 class="text-center mt-10 title">مشخصات فردی</h2>
<v-container class="bg-white mt-4">
    <v-row>
        <v-col cols="12" md="5" >
            <div  class="d-flex justify-center ">
                <img height="190px" src="../../assets/img/profile3.png" alt="">
            </div>
            <div>
                <v-file-input class="credit" label=" بارگذاری تصویر جدید" variant="outlined"></v-file-input>
            </div>

        </v-col>
    <v-col cols="12" md="7" >
     <v-row >
        <v-col cols="0" md="6">
            <v-text-field type="text" label="نام" required ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field type="text" label=" نام خانوادگی"  required ></v-text-field>
        </v-col>
    </v-row>
    <v-row >
        <v-col cols="12" md="6">
            <v-text-field type="text" label="شماره همراه" required ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field type="email" label="ایمیل"  required ></v-text-field>
        </v-col>
            </v-row>
            <v-row >
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="4">
            <v-radio-group inline >
                <v-radio
                label="زن"
                color="rgb(109, 5, 5)"
                value="0"
              ></v-radio>
              <v-radio
                label="مرد"
                color="rgb(109, 5, 5)"
                value="1"
              ></v-radio>
            </v-radio-group>
        </v-col>
        <v-col class="d-flex align-center" cols="12" md="4" >
            <v-btn class="editbtn" block>ویرایش اطلاعات فردی</v-btn>
        </v-col> <v-col cols="12" md="1"></v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
<h2 class="text-center mt-5  title">ویرایش رمز عبور </h2>
<v-container class="bg-white mt-6 mb-5">
<v-row>
    <v-col cols="12" md="6">
        <v-text-field type="password" label="رمز عبور جدید" ></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
        <v-text-field type="password" label="تکرار رمز عبور جدید" ></v-text-field>
    </v-col>
</v-row>
<v-row>
    <v-btn class="mb-5 editbtn">ویرایش  رمز عبور</v-btn>
</v-row>
</v-container>
</template>
<script>
import { Callaxios } from '@/assets/composable/CallAxus';
import Store from '@/store/Store';
export default{
    data(){},
    methods:{},
    mounted(){

    }
}
</script>
<style scoped>
.title{
    color:rgb(109, 5, 5) 
}
.v-container{
    width: 70%;
}
.editbtn{
    background-color:rgb(109, 5, 5) ;
    color: aliceblue;
    padding-inline: 5% !important;
    margin-inline: auto !important;
    display: flex;
}
.v-text-field,.v-file-input{
    color:rgb(109, 5, 5) ;  
}
</style>