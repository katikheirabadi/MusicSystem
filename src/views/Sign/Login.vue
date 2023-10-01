<template> 
  <v-sheet class="login mx-auto">
    <div class="mx-auto form" style="">
   
  <article class="">
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay" >
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
      <form class="sign-up"  style="background: url('http://localhost:3000/src/assets/img/1.png') !important;">
        <h2 style="color: aliceblue;">{{ $t('message.login_signup_header') }}</h2>
        <v-row style="width: 100%;">
          <v-col cols="6" sm="12" md="6" style="height: fit-content !important;">
            <v-text-field :label="$t('message.login_signup_lastname') " required ></v-text-field>
          </v-col>
          <v-col cols="6" sm="12" md="6">
            <v-text-field class="field" :label="$t('message.login_signup_name') " required ></v-text-field>
          </v-col>
        </v-row>
        <v-row style="width: 100%;margin-top: -30%;">
          <v-col sm="12" md="6">
            <v-text-field class="field" :label="$t('message.login_signup_PhoneNumber') " required ></v-text-field>
          </v-col>
          <v-col sm="12" md="6">
            <v-text-field class="field" :label="$t('message.login_signup_natinalcode') " required ></v-text-field>
          </v-col>
        </v-row>
        <v-row style="width: 100%;margin-top: -30%;">
          <v-col sm="12" md="6">
            <v-text-field class="field" :label="$t('message.login_signup_Confirmpass') " required ></v-text-field>
          </v-col>
          <v-col sm="12" md="6">
            <v-text-field class="field" :label="$t('message.login_signup_pass') " required ></v-text-field>
          </v-col>
          <v-col sm="12" md="12" class="center-class" cols="12">
            <v-btn  @click="login" class="form-btn2" >{{ $t('message.login_login_signupbtn') }}</v-btn>
          </v-col>
        </v-row>
      </form>
      <form class="sign-in" action="#" style="background: url('http://localhost:3000/src/assets/img/1.png') !important;">
        <h2>{{ $t('message.login_login_header') }}</h2>
        <v-row style="width: 50%;" class="center-class">
          <v-col cols="12" class="my-auto" style="margin-top: 20% !important;height: fit-content;">
            <v-text-field v-model="loginusername" :label="$t('message.login_login_username') " required block ></v-text-field>
          </v-col>
          <v-col cols="12" style="margin-top: -20% !important;height: fit-content;">
            <v-text-field v-model="loginpass" :label="$t('message.login_login_pass') " required block ></v-text-field>
          </v-col>
          <v-col class="center-class" cols="12">
            <v-btn @click="login" class="center-class form-btn">{{ $t('message.login_login_loginbtn') }}</v-btn>
          </v-col>
        </v-row>
      </form>
    </div>
  </article>
        </div>
  
  </v-sheet>

</template>
<script>
import '../../assets/css/login.css'
import axios from 'axios'
export default{
  data(){
    return {
      signUp :false,
      loginusername:'',
      loginpass:''
    }
  },updated(){
    var lang = this.$route.params.lang
    this.$vuetify.locale.current = lang
      this.$i18n.locale=lang
      
  },
  mounted(){
    var lang = this.$route.params.lang
    this.$vuetify.locale.current = lang
      this.$i18n.locale=lang

      //const axios = require('axios');
let data = JSON.stringify({
  "UserName": "2282961862",
  "Password": "2282961862"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://www.sina.local/api/Auth/Login',
  headers: { 
    'Content-Type': 'application/json', 
  },
  data : data,
  withCredentials: true // Add this line
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});


//     //axios.get('https://jsonplaceholder.typicode.com/posts').then(Response => console.log(Response))
//     axios.post('http://www.sina.local/api/Auth/Login',{
//   UserName: "2282961862",
//   Password: "2282961862"
// }).then(Response => console.log(Response))
  },

  methods:{
    login(){
     // axios.post('https://edutourism.mcth.ir/api/Organs/ByParent/1').then(reaponse => console.log(reaponse))
     
    }
  }
}
</script>