<template>
    <v-card class="card">
        <v-card-title class="title mt-3">
            {{ $t('panel.credit.transferttitle') }}
        </v-card-title>
        <h5 class="my-3 mx-5"> {{ $t('panel.credit.transferdesc') }}</h5>
        <v-text-field ref="amount" v-model="amount" :error="amounterror" :error-messages="amounterrormessage" class="credit"
            type="number" :rules="amountrules" :label="$t('panel.credit.addcreditfield')" required>
        </v-text-field>
        <v-text-field ref="natinal" v-model="natinalcode" :error="natinalcodeerror"
            :error-messages="natinalcodeerrormessage" class="credit" :rules="natinalrules" type="text"
            :label="$t('panel.credit.transfernatinal')" required>
        </v-text-field>

        <v-btn @click="TransferCredit" class="my-3 creditbtn"> {{ $t('panel.credit.transferbtn') }}</v-btn>

    </v-card>
    <notif v-if="show" :show="show" :text="notiftext" :type="notiftype" :location="location" @close="show = false" />
</template>
<script>
import notif from '@/components/ResultNotification.vue'
import { Callaxios } from '@/assets/composable/CallAxus'
import Swal from 'sweetalert2'
import i18n from '@/locales/i18n'

export default {
    props: ['companyId'],
    data() {
        return {
            amount: 0,
            amounterror: false,
            amounterrormessage: '',
            natinalcode: '',
            natinalcodeerror: false,
            natinalcodeerrormessage: '',
            notiftype: '',
            show: false,
            notiftext: '',
            location: 'top right',
            natinalrules: [
                v => !!v || i18n.global.t('panel.credit.natinalfull'),
                v => v.length == 10 || i18n.global.t('panel.credit.natinallen'),
            ],
            amountrules: [
                v => v > 0 ||i18n.global.t('panel.credit.amountfull'),
            ],
        }
    },
    components: {
        notif
    },
    methods: {
        TransferCredit() {
            if (this.$refs.amount.validate() && this.$refs.natinal.validate() && this.companyId !=-1) {
                Callaxios('UserCredit/ValidateTransferData', 'post', {
                    CompanyId: this.companyId,
                    TransactionAmount: this.amount,
                    NatinalCode: this.natinalcode
                }, this.afterValidate)
            }else if(this.companyId == -1){
                this.show = true
                this.notiftype='error'
                this.notiftext=i18n.global.t('panel.credit.selectcompany')
            }
        },
        afterValidate(param) {
            if (param.Data.Result != 1) {
                this.show = true
                this.notiftype = 'error'
                this.notiftext = param.Data.Message
            } else {
                Swal.fire({
                    title: `<strong>${i18n.global.t('panel.credit.transferttitle')}</strong>`,
                    text: param.Data.Message,
                    icon: "info",
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonColor: '#00b1ff',
                    cancelButtonColor: 'red',
                    confirmButtonText: i18n.global.t('message.ok'),
                    cancelButtonText:i18n.global.t('message.cancel'),
                }).then((result) => {
                    if (result.isConfirmed) {
                        Callaxios('UserCredit/Transfer', 'post',param.Data, this.afterTransfer)
                    }
                });
            }
        },
        afterTransfer(param){
            this.show = true
            this.notiftype = 'success'
            this.notiftext = param.Data.Message
        }
    }
}
</script>
<style scoped>
@import url(../../../assets/css/UserPanel/Creditforms.css);
</style>   