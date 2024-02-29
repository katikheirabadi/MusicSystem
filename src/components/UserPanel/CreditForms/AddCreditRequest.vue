<template v-if="reloadComponent">
    <v-card class="card center-class">
        <v-card-title class="title mt-3">
            {{ $t('panel.credit.addreqtitle') }}
        </v-card-title>
        <h5 class="my-3 mx-4">{{ $t('panel.credit.addreqdesc') }}</h5>
        <v-text-field 
        v-model="amount"
        :rules="amountrules"
        class="credit"
        ref="amount"
        type="number" 
        :label="$t('panel.credit.addcreditfield')"
        required>
        </v-text-field>
        <v-file-input 
        class="credit"
        :label="$t('panel.credit.addreqimg')" 
        variant="outlined"
        v-model="reqimg"
        :rules="reqrules"
        ref="req"
        @change="uploadimg"
        >
        </v-file-input>
        <v-btn @click="AddCreditReq"  class="my-3 creditbtn">{{ $t('panel.credit.addreqbtn') }}</v-btn>

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
                v => v > 0 || i18n.global.t('panel.credit.amountfull'),
            ],
            reqrules: [
                v => v != '' || i18n.global.t('panel.credit.reqfull'),
            ],
            reqimg:'',
            img:'',
            notiftype: '',
            show: false,
            notiftext: '',
            location: 'top right',
            reloadComponent:true
        }
    },
    components: {
        notif
    },
    methods: {
        uploadimg(){
            var form = new FormData();
            if (this.newpro.length > 0) {
                   form.append("fileName", this.newpro[0]);
             }
            Callaxios('Upload/UploadFiles','post',form,this.afterupload)
        },
        afterupload(param){
           this.img = param
        },
        reload() {
        this.reloadComponent = false;
          this.$nextTick(() => {
          this.reloadComponent = true;
         });
        },
        AddCreditReq() {
            if (this.$refs.amount.validate() && this.$refs.req.validate() && this.companyId !=-1) {
                Callaxios('AddCreditRequest/AddCredit','post',{
                    TransActionAmount:parseInt(this.amount),
                    ImageUrl:this.img
                },this.afterAddCreditReq)
            }else if(this.companyId == -1){
                this.show = true
                this.notiftype='error'
                this.notiftext=i18n.global.t('panel.credit.selectcompany')
            }
        },
        afterAddCreditReq(param) {
            this.reload()
            this.show = true
            this.notiftype='success'
            this.notiftext=i18n.global.t('panel.credit.successreq')
        }
    }
}
</script>
<style scoped>
@import url(../../../assets/css/UserPanel/Creditforms.css);
</style>   