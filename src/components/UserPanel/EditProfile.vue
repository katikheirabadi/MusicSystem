<template v-if="reloadComponent">
<h2 class="text-center mt-10 title">{{ $t('panel.editprofile.infotitle') }} </h2>
<v-container class="bg-white mt-4">
    <v-row>
        <v-col cols="12" md="5" >
            <div  class="d-flex justify-center mb-2">
                <img height="190px" width="300px" :src="img" alt="">
            </div>
            <div>
                <v-file-input class="credit" @change="uploadimg" :label="$t('panel.editprofile.uploadimg')" v-model="newpro" variant="outlined"></v-file-input>
            </div>

        </v-col>
    <v-col cols="12" md="7" >
     <v-row >
        <v-col cols="0" md="6">
            <v-text-field type="text" v-model="name" :label="$t('panel.editprofile.name')" required ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field type="text" v-model="familyname" :label="$t('panel.editprofile.familyname')"  required ></v-text-field>
        </v-col>
    </v-row>
    <v-row >
        <v-col cols="12" md="6">
            <v-text-field type="text" v-model="phone" :label="$t('panel.editprofile.phone')" required ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field type="email" v-model="email" :label="$t('panel.editprofile.email')"  required ></v-text-field>
        </v-col>
            </v-row>
            <v-row >
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="4">
            <v-radio-group inline  v-model="gender" >
                <v-radio
                :label="$t('panel.editprofile.female')"
                color="rgb(109, 5, 5)"
                :value="0"
               
              ></v-radio>
              <v-radio
              :label="$t('panel.editprofile.male')"
                color="rgb(109, 5, 5)"
                :value="1"  
              ></v-radio>
            </v-radio-group>
        </v-col>
        <v-col class="d-flex align-center" cols="12" md="4" >
            <v-btn class="editbtn" @click="updateInfo" block>{{ $t('panel.editprofile.updateinfobtn') }}  </v-btn>
        </v-col> <v-col cols="12" md="1"></v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
<h2 class="text-center mt-5  title">{{ $t('panel.editprofile.passtitle') }} </h2>
<v-container class="bg-white mt-6 mb-5">
    <v-form ref="form">

  
<v-row>
    <v-col cols="12" md="4">
        <v-text-field type="password" v-model="odlpassword" :rules="oldpassrules" :label="$t('panel.editprofile.oldpass')" ></v-text-field>
    </v-col>
    <v-col cols="12" md="4">
        <v-text-field type="password" v-model="password" :rules="passrules" :label="$t('panel.editprofile.pass')" ></v-text-field>
    </v-col>
    <v-col cols="12" md="4">
        <v-text-field type="password" v-model="confirm" :rules="confirmpassrules" :label="$t('panel.editprofile.confirmpass')" ></v-text-field>
    </v-col>
</v-row>
<v-row>
    <v-btn @click="updatepass" class="mb-5 editbtn">{{ $t('panel.editprofile.updatepassbtn') }}</v-btn>
</v-row>
</v-form>
</v-container>
<ResultNotification v-if="snackbar" :type="mtype" :text="message" :show="snackbar" @close="snackbar=false"/>

</template>
<script>
import { Callaxios } from '@/assets/composable/CallAxus';
import Swal from 'sweetalert2';
import Store from '@/store/Store';
import i18n from '@/locales/i18n.js'
import config from '../../../public/config.json'

import ResultNotification from '../ResultNotification.vue';
export default{
    data(){
        return{
            snackbar:false,
            reloadComponent:true,
            img:'',
            name:'',
            familyname:'',
            phone:'',
            email:'',
            gender:0,
            imgaddress:'',
            odlpassword:'',
            password:'',
            confirm:'',
            message:'',
            mtype:0,
            newpro:'',
            oldpassrules:[
            v => !!v || i18n.global.t('panel.editprofile.required')
            ],
            passrules:[
            v => !!v || i18n.global.t('panel.editprofile.required'),
            v => v.length >= 8 || i18n.global.t('panel.editprofile.passlen'),
            ],
            confirmpassrules:[
            v => !!v || i18n.global.t('panel.editprofile.required'),
             v => v === this.password || i18n.global.t('panel.editprofile.confirm'),
            ],
        }
    },
    components:{ResultNotification},
    methods:{
        aftergetinfo(param){
            this.img = param.Image==''?window.location.origin + '/src/assets/img/profile3.png':Store.state.backuploadurl + param.Image
            this.imgaddress = param.Image==''? '':param.Image
            this.name = param.FName
            this.familyname = param.LName
            this.phone = param.PhoneNumber
            this.email = param.EmailAddress
            this.gender = param.Gender
            Store.state.profile.Name = this.name
            Store.state.profile.Image = config.backuploadurl+ this.imgaddress
        },
        updateInfo(){
            var input={
                FirstName:this.name,
                LastName:this.familyname,
                PhoneNumber:this.phone,
                Email:this.email,
                ProfileImage: this.imgaddress,
                Gender:this.gender,
                OldPass:'',
                RealPass:''
            }
            Callaxios('User/UpdateUserProfileDetails','post',input,this.afterupdateInfo)
        },
        afterupdateInfo(param){
            this.message = param.Data.Message
            if(param.Data.Result == 1){
                this.mtype = '1'
            }else{
                this.mtype = '0'
            }
            this.snackbar = true
        },
        updatepass(){
            if (this.odlpassword=='' ||
                this.password=='' ||
                this.confirm ==''||
                this.confirm != this.password){
           this.message=i18n.global.t('panel.editprofile.passvaliderror')
           this.mtype='0'
           this.snackbar=true
        }else{
            var input={
                FirstName:this.name,
                LastName:this.familyname,
                PhoneNumber:this.phone,
                Email:this.email,
                ProfileImage: this.imgaddress,
                Gender:this.gender,
                OldPass:this.odlpassword,
                RealPass:this.password
            }
            Callaxios('User/UpdateUserProfileDetails','post',input,this.afterupdateInfo)
        }
        },
        reload() {
        this.reloadComponent = false;
          this.$nextTick(() => {
          this.reloadComponent = true;
         });
        },
        uploadimg(){
            var form = new FormData();
            if (this.newpro.length > 0) {
                   form.append("fileName", this.newpro[0]);
             }
            Callaxios('Upload/UploadFiles','post',form,this.afterupload)
        },
        afterupload(param){
           this.imgaddress = param.replace('Temp/','')
           this.img = 'http://www.sina.local'+param
        }
       
    },
    mounted(){
        Callaxios('User/GetUserBaseInfo','get',undefined,this.aftergetinfo)
    }
}
</script>
<style scoped>
@import url(../../assets/css/UserPanel/editprofile.css);
</style>