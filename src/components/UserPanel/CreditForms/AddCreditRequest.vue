<template>
    <v-card class="card center-class">
        <v-card-title class="title mt-3">
           درخواست افزایش اعتبار 
        </v-card-title>
        <h5 class="my-3 mx-4">برای ثبت درخواست افزایش اعتبار، لطفا ابتدا مبلغ مد نظر و عکس رسید پرداختی را آپلود کرده و دکمه ثبت درخواست را بزنید.</h5>
        <v-text-field v-model="amount" class="credit" type="number" label="مبلغ (ریال)" required ></v-text-field>
        <v-file-input class="credit" label=" بارگذاری رسید" variant="outlined"></v-file-input>
        <v-btn @click="AddCreditReq" class="my-3 creditbtn">ثبت درخواست</v-btn>

    </v-card>

</template>
<script>
export default{
data(){
    return{
        amount:0,
        natinalcode:''
    }
},
methods:{
    AddCreditReq(){

    },
    AfterAddCreditReq(param){

    }
}
}
</script>
<style scoped>
@import url(../../../assets/css/UserPanel/Creditforms.css);
</style>   