<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" temporary @click="rail = false">
        <v-list-item nav class="center-class" style="display: flex;">
          <img :src="Img" alt="Hello" class="profile-img">
          <h4 class="text-center" style="color: #912909;">{{ Name }}
          </h4>
          <v-btn v-if="Profile.RoleId ==2 || Profile.RoleId ==1" class="mt-2 bg-red-darken-4" block :href="admin">پنل مدیریت</v-btn>
          <v-btn v-if="Profile.RoleId ==10" class="mt-2 bg-red-darken-4" block :href="admin">پنل کارشناس آموزش</v-btn>
          <v-btn v-if="Profile.RoleId ==4" class="mt-2 bg-red-darken-4" block :href="admin">پنل استاد</v-btn>
          <v-btn v-if="Profile.RoleId ==12" class="mt-2 bg-red-darken-4" block :href="admin">پنل مالی</v-btn>
        </v-list-item>
        <v-list nav>
           <v-list-item class="panellist" prepend-icon="fa fa-calendar" title="داشبورد" value="0"
            @click="gotoDashboard"></v-list-item>
          <v-list-item class="panellist" prepend-icon="fa fa-home" title="خانه" value="1"
            @click="gotohome"></v-list-item>
            <v-list-item class="panellist" prepend-icon="fa fa-calendar" title="کلاس های من" value="1"
            @click="gotoclasses"></v-list-item>
          <v-list-item class="panellist" prepend-icon="fa fa-certificate" title="گواهینامه ها" value="2"
            @click="gototcertificates"></v-list-item>
          <v-list-item class="panellist" prepend-icon="fa fa-calculator" title="مدیریت اعتبار" value="3"
            @click="gotocredit"></v-list-item>
          <v-list-item class="panellist" prepend-icon="fa fa-edit" title="ویرایش مشخصات" value="4"
            @click="gotoeditprofile"></v-list-item>
          <v-list-item class="panellist" prepend-icon="fa fa-book" title="مدیریت درخواست ها" value="5"
            @click="gotorequests"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar color="#5b1505" style="display: flex;
        justify-content: space-between !important;">
        <v-icon v-if="!drawer" @click.stop="drawer = !drawer" icon="fa fa-bars"
          style="margin-inline-start: 1%;"></v-icon>
        <v-spacer></v-spacer>
        <div>
          <v-btn variant="text" @click="this.$router.replace({ name: 'bag' })">
            <v-badge :content="Profile.BagsCount" color="green">
              <v-icon icon="fa fa-shopping-bag">
              </v-icon>
            </v-badge>
            <v-tooltip style="font-family: 'IRANSANS';" activator="parent" location="bottom">سبد خرید شما
            </v-tooltip>
          </v-btn>

          <v-btn variant="text" @click="this.$router.replace({ name: 'welcome' })">
            <v-icon icon="fa fa-sign-out">
            </v-icon>
            <v-tooltip style="font-family: 'IRANSANS';" activator="parent" location="bottom">خروج
            </v-tooltip>
          </v-btn>
        </div>
      </v-app-bar>
      <v-main style="min-height: 100vh;background-color: #ee8f8f3b;margin-inline-start: 0%;padding-inline-end: 0%;">
        <classes v-if="classescomp" />
        <credit v-if="credit" />
        <certificate v-if="certificate" @calleditprofile="gotoeditprofile"/>
        <editProfile v-if="editProfile" />
        <dashboard v-if="dashboardcom" @openclasses="gotoclasses" @opencerts="gototcertificates" @opencredit="gotocredit" />
        <Request v-if="requestscomp"/>
      </v-main>
    </v-layout>
  </v-card>

</template>
<script>
import classes from '@/components/UserPanel/Classes.vue'
import Credit from '@/components/UserPanel/Credit.vue';
import certificate from '@/components/UserPanel/Certificate.vue'
import editProfile from '@/components/UserPanel/EditProfile.vue';
import dashboard from '@/components/UserPanel/Dashbord.vue'
import Request from '@/components/UserPanel/Requests'

import Store from '@/store/Store';
import config from '../../../public/config.json'
export default {
  data() {
    return {
      requestscomp:false,
      classescomp: false,
      dashboardcom: true,
      credit: false,
      certificate: false,
      editProfile: false,
      rail: true,
      drawer: false,
      Name: '',
      Img: '',
      Profile: {},
      admin:''
    }
  },
  components: {
    classes, Credit, certificate, editProfile, dashboard,Request
  },
  mounted() {
    this.Name = Store.state.profile.FName + ' ' + Store.state.profile.LName
    this.Profile = Store.state.profile;
    this.admin = config.admin
    this.Img = Store.state.profile.Image == "" ? window.location.origin + '/src/assets/img/profile.png' : config.backuploadurl + Store.state.profile.Image
  },
  methods:{
    gotohome(){
      this.$router.push({ name: 'Home',params:{lang:localStorage.getItem('lang')}})
    },
    gotoDashboard(){
      this.classescomp = false
      this.requestscomp = false
      this.credit =false
      this.certificate = false
      this.editProfile =false
      this.dashboardcom = true
    },
    gotocredit(){
      this.classescomp = false
      this.requestscomp = false
      this.certificate = false
      this.dashboardcom = false
      this.editProfile =false
      this.credit =true
    },
    gotoclasses(){
      this.requestscomp = false
      this.credit =false
      this.certificate = false
      this.dashboardcom = false
      this.editProfile =false
      this.classescomp = true
    },
    gotoeditprofile(){
      this.requestscomp = false
      this.credit =false
      this.certificate = false
      this.dashboardcom = false
      this.classescomp = false
      this.editProfile =true
    },
    gotorequests(){
      this.credit =false
      this.certificate = false
      this.dashboardcom = false
      this.editProfile =false
      this.classescomp = false
      this.requestscomp = true
    },
    gototcertificates(){
      this.credit =false
      this.dashboardcom = false
      this.editProfile =false
      this.classescomp = false
      this.requestscomp = false
      this.certificate = true
    }

  }
}

</script>
<style scoped>
* {
  list-style: none;
  outline: none;
}

.panellist {
  color: #9c280e;
}

.profile-img {
  border-radius: 50%;
  width: 150px !important;
  margin-top: 10%;
  height: 150px;
}
</style>