<template>
  <v-sheet class="login mx-auto">
    <div class="form d-none d-md-block" style="">
      <article>
        <div class="container" :class="{ 'sign-up-active': signUp }">
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-right" v-if="signUp">
                <h2>{{ $t('login.login_signup_signinheader') }}</h2>
                <p>{{ $t('login.login_signup_signinmessage') }}</p>
                <button class="invert" id="signIn" @click="signUp = !signUp">{{ $t('login.login_login_loginbtn')
                  }}</button>
              </div>
              <div class="overlay-left" v-else>
                <h2>{{ $t('login.login_login_signupheader') }}</h2>
                <p>{{ $t('login.login_login_signupmessage') }}</p>
                <button class="invert" id="signUp" @click="signUp = !signUp">{{ $t('login.login_login_signupbtn')
                  }}</button>
              </div>
            </div>
          </div>
          <v-form class="sign-up">
            <h2>{{ $t('login.login_signup_header') }}</h2>
            <v-row class="signup_row">
              <v-col cols="12">
                <v-select class="field1" 
                :label="$t('login.loginacademies')" 
                :items="companies"
                :item-title="item=>item.key"
                :item-value="item=>item.value"
                v-model="selectcompany"
                no-transition></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field block 
                class="field1"
                :label="$t('login.login_signup_name')"
                v-model="name"
                required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                class="field1"
                :label="$t('login.login_signup_lastname')"
                v-model="lastname"
                required></v-text-field>
              </v-col>
              <v-col cols="12" >
                <v-text-field
                class="field1"
                :label="$t('login.login_signup_natinalcode')"
                v-model="natinalcode"
                required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                class="field1"
                :label="$t('login.login_signup_PhoneNumber')"
                v-model="phonenumber"
                required></v-text-field>
              </v-col>
              <v-col class="d-flex justify-center mt-5" cols="12">
                <v-btn @click="register" class="form-btn2">{{ $t('login.login_login_signupbtn') }}</v-btn>
              </v-col>
            </v-row>
          </v-form>
          <v-form class="sign-in">
            <v-img width="300" src="../../assets/img/logo.png"></v-img>
            <h4>{{ $t('login.login_login_header') }}</h4>
            <v-row class="center-class signin_Username">
              <v-col cols="12" class="my-auto">
                <v-text-field class='field1' 
                v-model="loginusername" 
                :label="$t('login.login_login_username')"
                required 
                block>
                </v-text-field>
              </v-col>

              <v-col class="signin_pass" cols="12">
                <v-text-field 
                type="password"
                 class='field1'
                 v-model="loginpass"
                 :label="$t('login.login_login_pass')"
                  required block></v-text-field>
              </v-col>
              <v-col class="center-class" cols="12">
                <v-btn @click="login" class="form-btn">{{ $t('login.login_login_loginbtn') }}</v-btn>
              </v-col>
            </v-row>

          </v-form>
        </div>
      </article>
    </div>
    <div class="smallform d-md-none">
      <article>
        <div class="container mx-auto" :class="{ 'sign-up-active2': signUp }">
          <v-form class="sign-up">
            <h2>{{ $t('login.login_signup_header') }}</h2>
            <v-row style="width: 100%;">
              <v-col cols="12">
                <v-select class="field1" 
                :label="$t('login.loginacademies')" 
                :items="companies"
                :item-title="item=>item.key"
                :item-value="item=>item.value"
                v-model="selectcompany"
                no-transition></v-select>
              </v-col>
              <v-col cols="12" style="height: fit-content;">
                <v-text-field 
                block 
                class="field1"
                :label="$t('login.login_signup_name')"
                v-model="name"
                 required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                class="field1"
                :label="$t('login.login_signup_lastname')"
                required
                v-model="lastname">
              </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                class="field1"
                :label="$t('login.login_signup_natinalcode')" 
                v-model="natinalcode"
                required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field 
                class="field1"
                :label="$t('login.login_signup_PhoneNumber')"
                v-model="phonenumber"
                required></v-text-field>
              </v-col>             
              <v-col class="d-flex justify-center mt-5" cols="12">
                <v-btn @click="register" class="form-btn2">{{ $t('login.login_login_signupbtn') }}</v-btn>
              </v-col>
              <v-col cols="12" class="link">
                <router-link to="" class="link" @click="signUp = !signUp">{{ $t('login.loginbtn') }} </router-link>
              </v-col>
            </v-row>
          </v-form>
          <v-form class="sign-in d-flex justify-center">
            <v-img width="300" src="../../assets/img/logo.png"></v-img>
            <h4>{{ $t('login.login_login_header') }}</h4>
            <v-row style="width: 90%;" class="d-flex justify-center">
              <v-col cols="12" class="my-auto">
                <v-text-field class='field1' 
                v-model="loginusername"
               :label="$t('login.login_login_username')"
                required block></v-text-field>
              </v-col>

              <v-col cols="12" class="smallpass" style="">
                <v-text-field 
                type="password"
                class='field1'
                v-model="loginpass"
                :label="$t('login.login_login_pass')"
                required block></v-text-field>
              </v-col>
              <v-col class="d-flex justify-center smalloginbtn"  cols="12" >
                <v-btn @click="login" class="form-btn">{{ $t('login.login_login_loginbtn') }}</v-btn>

              </v-col>
              <v-col cols="12">
                <router-link to="" class="link" @click="signUp = !signUp"> {{ $t('login.registerbtn') }} </router-link>
              </v-col>
            </v-row>

          </v-form>
        </div>
      </article>
    </div>
  </v-sheet>

</template>
<script>
import { Callaxios } from '@/assets/composable/CallAxus';
import Store from '@/store/Store';
export default {
  data() {
    return {
      signUp: false,
      loginusername: '',
      loginpass: '',
      companies: [],
      selectcompany:0,
      name:'',
      lastname:'',
      natinalcode:'',
      phonenumber:'',
      

    }
  },
  mounted() {
    Callaxios('Company/GetAllCompanyForSelect', 'get', undefined, this.aftergetallcompanies)
  },
  methods: {
    aftergetallcompanies(param) {
      this.companies = param.Data
      this.selectcompany = param.Data[0].value
    },
    register(){
      var input ={
        fName:this.name,
        lName:this.lastname,
        nationalCode:this.natinalcode,
        phoneNumber:this.phonenumber,
        password:this.natinalcode,
        confirmPass:this.natinalcode,
        emailAddress:'',
        gender:0,
        Captcha:'',
        FriendNationalCode:'',
        status:0,
        UserProfiles:[],
        companyId:this.selectcompany
      }
      alert(this.selectcompany)
      Callaxios('User/Register','post',input,this.afterlogin)
    },
    login() {
      var input = {
        Username: this.loginusername,
        Password: this.loginpass,
        Captcha: ''
      }
      Callaxios('Auth/Login', 'post', input, this.afterlogin)
    },
    afterlogin(param) {
      localStorage.setItem('token', param.Data.Token)
      this.$router.replace(Store.state.backurl)
    }
  }
} 
</script>
<style scoped>
@import '../../assets/css/Views/Sign/login.css';
</style>