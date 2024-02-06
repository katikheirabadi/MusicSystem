<template>
    <v-card class="card">
        <v-card-title class="title mt-3">
            {{ $t('panel.credit.transferttitle') }}
        </v-card-title>
        <h5 class="my-3 mx-5"> {{ $t('panel.credit.transferdesc') }}</h5>
        <v-text-field v-model="amount" class="credit" type="number"  :label="$t('panel.credit.addcreditfield')" required ></v-text-field>
        <v-text-field v-model="natinalcode" class="credit" type="text"  :label="$t('panel.credit.transfernatinal')" required ></v-text-field>

        <v-btn @click="TransferCredit" class="my-3 creditbtn"> {{ $t('panel.credit.transferbtn') }}</v-btn>

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