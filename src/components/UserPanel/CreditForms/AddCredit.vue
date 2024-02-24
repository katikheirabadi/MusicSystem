<template>
    <v-card class="card">
        <v-card-title class="title mt-3">
            {{ $t('panel.credit.addcredittitle') }}
        </v-card-title>
        <h5 class="my-3 mx-5">{{ $t('panel.credit.addcreditdesc') }}</h5>
        <v-text-field v-model="amount" class="credit" type="number" :label="$t('panel.credit.addcreditfield')"
            required></v-text-field>
        <v-btn @click="AddCredit" class="my-3 creditbtn">{{ $t('panel.credit.addcreditbtn') }}</v-btn>

    </v-card>
</template>
<script>
export default {
    props: ['company'],
    data() {
        return {
            amount: 0
        }
    },
    methods: {
        AddCredit() {

        },
        AfterAdd(param) {

        }
    }
}
</script>
<style scoped>
@import url(../../../assets/css/UserPanel/Creditforms.css);
</style>   