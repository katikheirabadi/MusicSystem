<template>
    <v-card class="card">
        <v-card-title class="title mt-3">
            {{ $t('panel.credit.addcredittitle') }}
        </v-card-title>
        <h5 class="my-3 mx-5">{{ $t('panel.credit.addcreditdesc') }}</h5>
        <v-text-field 
        :rules="amountrules"
         v-model="amount"
        class="credit"
        type="number"
        ref="amount"
        :label="$t('panel.credit.addcreditfield')"
        required>
        </v-text-field>
        <v-btn @click="AddCredit" class="my-3 creditbtn">{{ $t('panel.credit.addcreditbtn') }}</v-btn>

    </v-card>
    <notif v-if="show" :show="show" :text="notiftext" :type="notiftype" :location="location" @close="show = false" />

</template>
<script>
import notif from '@/components/ResultNotification.vue'
import { Callaxios } from '@/assets/composable/CallAxus'
import i18n from '@/locales/i18n'

export default {
    props: ['companyId'],
    data() {
        return {
            amount: 0,
            amountrules: [
                v => v > 1000 || i18n.global.t('panel.credit.amountfull'),
            ],
            notiftype: '',
            show: false,
            notiftext: '',
            location: 'top right'
        }
    },
    components: {
        notif
    },
    methods: {
        AddCredit() {
            if(this.$refs.amount.validate() && this.companyId !=-1) {
                Callaxios('UserCredit/IncreaseByUser','post',{
                    TransactionAmount:this.amount,
                    ComponyId:this.companyId
                },this.afterAdd)
            }else if (this.companyId == -1){
                this.notiftext = i18n.global.t('panel.credit.selectcompany')
                this.notiftype ='error'
                this.location =''
                this.show = true
            }
        },
        afterAdd(param) {
            window.open(param.Data)
        }
    }
}
</script>
<style scoped>
@import url(../../../assets/css/UserPanel/Creditforms.css);
</style>   