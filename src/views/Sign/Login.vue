<template> 
  <v-sheet class="login mx-auto">
  <div class="form d-none d-md-block" style="">
  <article >
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay " >
            <div class="overlay-right" v-if="signUp">
            <h2>{{ $t('message.login_signup_signinheader') }}</h2>
            <p>{{ $t('message.login_signup_signinmessage') }}</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">{{ $t('message.login_login_loginbtn') }}</button>
          </div>
          <div class="overlay-left" v-else>
            <h2>{{ $t('message.login_login_signupheader') }}</h2>
            <p>{{ $t('message.login_login_signupmessage') }}</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">{{ $t('message.login_login_signupbtn') }}</button>
          </div>
        </div>
      </div>
      <v-form class="sign-up">
        <h2>{{ $t('message.login_signup_header') }}</h2>
     
        <v-row style="width: 100%;">
          <v-col cols="12">
            <v-select 
             label="زمان ثبت نام"
             :items="['8:30', '10:30', '12:30']"
             no-transition
        ></v-select>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="6">
            <v-text-field  block class="field1" :label="$t('message.login_signup_name')" required ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="6" style="">
            <v-text-field class="field1" :label="$t('message.login_signup_lastname') " required ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="6">
            <v-text-field class="field1" :label="$t('message.login_signup_natinalcode') " required ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="6">
            <v-text-field class="field1" :label="$t('message.login_signup_PhoneNumber') " required ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="6">
            <v-text-field class="field1" :label="$t('message.login_signup_pass') " required ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="6">
            <v-text-field class="field1" :label="$t('message.login_signup_Confirmpass') " required ></v-text-field>
          </v-col>
          <v-col sm="12" md="12" class="center-class" cols="12">
            <v-btn  @click="login" class="form-btn2" >{{ $t('message.login_login_signupbtn') }}</v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-form class="sign-in">
        <v-img
        width="300"
        src="../../assets/img/logo.png"></v-img>
        <h4>{{ $t('message.login_login_header') }}</h4>
        <v-row style="width: 60%;" class="center-class">
          <v-col cols="12" class="my-auto">
            <v-text-field 
              class='field1'
              v-model="loginusername"
              :label="$t('message.login_login_username') "
              required
              block >
              </v-text-field>
          </v-col>
          
          <v-col cols="12" style="margin-top: -20% !important;">
            <v-text-field 
               type="password"
               class='field1'
               v-model="loginpass" 
              :label="$t('message.login_login_pass')"
               required 
               block 
               ></v-text-field>
          </v-col>
          <v-col class="center-class" cols="12">
            <v-btn @click="login" class="form-btn">{{ $t('message.login_login_loginbtn') }}</v-btn>
          </v-col>
        </v-row>

      </v-form>
    </div>
  </article>
  </div>
  <div class="smallform d-md-none" style="">
  <article>
    <div class="container mx-auto" :class="{'sign-up-active2' : signUp}">
      <v-form class="sign-up">
        <h2>{{ $t('message.login_signup_header') }}</h2>
        <v-row style="width: 100%;">
          <v-col cols="12" style="height: fit-content;">
            <v-text-field  block class="field1" :label="$t('message.login_signup_name')" required ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field class="field1" :label="$t('message.login_signup_lastname') " required ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field class="field1" :label="$t('message.login_signup_natinalcode') " required ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field class="field1" :label="$t('message.login_signup_PhoneNumber') " required ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field class="field1" :label="$t('message.login_signup_pass') " required ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field class="field1" :label="$t('message.login_signup_Confirmpass') " required ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field class="field1" :label="$t('message.login_signup_Confirmpass') " required ></v-text-field>
          </v-col>
          <v-col class="center-class" cols="12" style="margin-top: 10%;">
            <v-btn  @click="login" class="form-btn2" >{{ $t('message.login_login_signupbtn') }}</v-btn>
          </v-col>
          <v-col cols="12" style="color: brown !important;">
             <router-link to="" style="color: brown;" @click="signUp = !signUp">ورود به سامانه</router-link>
         </v-col>
        </v-row>
      </v-form>
      <v-form class="sign-in center-class">
        <v-img
        width="300"
        src="../../assets/img/logo.png"></v-img>
        <h4>{{ $t('message.login_login_header') }}</h4>
        <v-row style="width: 90%;" class="center-class">
          <v-col cols="12" class="my-auto">
            <v-text-field class='field1' v-model="loginusername" :label="$t('message.login_login_username') " required block ></v-text-field>
          </v-col>
          
          <v-col cols="12" style="margin-top: -10% !important;">
            <v-text-field type="password" class='field1' v-model="loginpass" :label="$t('message.login_login_pass') " required block ></v-text-field>
          </v-col>
          <v-col class="center-class" cols="12" style="margin-top: 10% !important;">
            <v-btn @click="login" class="form-btn">{{ $t('message.login_login_loginbtn') }}</v-btn>
            
          </v-col>
         <v-col cols="12" style="color: brown !important;">
             <router-link to="" style="color: brown;">فراموشی رمز عبور</router-link>/
             <router-link to="" style="color: brown;" @click="signUp = !signUp">ثبت نام </router-link>
         </v-col>
        </v-row>

      </v-form>
    </div>
  </article>
  </div>
  </v-sheet>

</template>
<script setup>
import { ref } from 'vue';
var signUp =  ref(false)
var loginusername = ref('')
var loginpass=ref('')
import { useRouter } from 'vue-router';
const router = useRouter()
function login(){
  router.replace({ name: 'panel' })
}
</script>
<style scoped>
@import '../../assets/css/login.css';

</style>