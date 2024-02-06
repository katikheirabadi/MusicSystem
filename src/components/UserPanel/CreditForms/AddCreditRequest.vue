<template>
    <v-card class="card center-class">
        <v-card-title class="title mt-3">
            {{ $t('panel.credit.addreqtitle') }}
        </v-card-title>
        <h5 class="my-3 mx-4">{{ $t('panel.credit.addreqdesc') }}</h5>
        <v-text-field v-model="amount" class="credit" type="number" :label="$t('panel.credit.addcreditfield')" required ></v-text-field>
        <v-file-input class="credit" :label="$t('panel.credit.addreqimg')" variant="outlined"></v-file-input>
        <v-btn @click="AddCreditReq" class="my-3 creditbtn">{{ $t('panel.credit.addreqbtn') }}</v-btn>

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