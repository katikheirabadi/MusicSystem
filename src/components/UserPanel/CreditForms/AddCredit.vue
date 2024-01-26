<template>
    <v-card class="card">
        <v-card-title class="title mt-3">
            افزایش اعتبار از طریق بانک
        </v-card-title>
        <h5 class="my-3 mx-5">برای افزایش اعتبار از طریق بانک، لطفا ابتدا مبلغ مد نظر را نوشته و دکمه پرداخت را بزنید.</h5>
        <v-text-field v-model="amount" class="credit" type="number" label="مبلغ (ریال)" required ></v-text-field>
        <v-btn @click="AddCredit" class="my-3 creditbtn">پرداخت</v-btn>

    </v-card>

</template>
<script>
export default{
data(){
    return{
        amount:0
    }
},
methods:{
    AddCredit(){

    },
    AfterAdd(param){

    }
}
}
</script>
<style scoped>
@import url(../../../assets/css/UserPanel/Creditforms.css);
</style>   