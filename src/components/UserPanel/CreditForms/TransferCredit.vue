<template>
    <v-card class="card">
        <v-card-title class="title mt-3">
           انتقال اعتبار
        </v-card-title>
        <h5 class="my-3 mx-5">برای انتقال اعتبار، لطفا ابتدا مبلغ مد نظر و کد ملی دوستتان را نوشته و دکمه انتقال را بزنید.</h5>
        <v-text-field v-model="amount" class="credit" type="number" label="مبلغ (ریال)" required ></v-text-field>
        <v-text-field v-model="natinalcode" class="credit" type="text" label="کدملی" required ></v-text-field>

        <v-btn @click="TransferCredit" class="my-3 creditbtn">انتقال</v-btn>

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
    TransferCredit(){

    },
    AfterTransferCredit(param){

    }
}
}
</script>
<style scoped>
@import url(../../../assets/css/UserPanel/Creditforms.css);
</style>   