<template>
  <v-container>
    <!-- cards -->
    <v-row>
      <v-col class="center-class" cols="12" md="4" @click="this.$emit('openclasses')">
        <v-sheet class="px-4 py-3 center-class"
          style="width:100% !important;height: fit-content;border-radius: 10px;border: #113e99 4px solid;background-color:#113e99;">
          <v-row>
            <v-col cols="6" style="padding-inline-end: 0px !important;">
              <img src="../../assets/img/icons8-course-100.png" alt="">
            </v-col>
            <v-col cols="6" class="text-center text-white d-flex align-center justify-center">

              <h3>کلاس های من</h3>
            </v-col>
          </v-row>

        </v-sheet>
      </v-col>
      <v-col class="center-class" cols="12" md="4" @click="this.$emit('opencerts')">
        <v-sheet class="px-4 py-3 center-class"
          style="width:100% !important;height:fit-content !important;border-radius: 10px;border: rgb(0, 128, 100) 4px solid;background-color :rgb(0, 128, 100)">
          <v-row>
            <v-col cols="6" style="padding-inline-end: 0px !important;">
              <img src="../../assets/img/icons8-certificate-100.png" alt="">
            </v-col>
            <v-col cols="6" class="my-auto text-center text-white">
              <h3>گواهینامه ها</h3>
            </v-col>
          </v-row>

        </v-sheet>
      </v-col>
      <v-col class="center-class" cols="12" md="4" @click="this.$emit('opencredit')">
        <v-sheet class="px-4 py-3 center-class"
          style="width:100% !important;height:fit-content!important;border-radius: 10px;border: #b50606 4px solid;background-color:#b50606;">
          <v-row>
            <v-col cols="5" style="padding-inline-end: 0px !important;">
              <img src="../../assets/img/icons8-credit-100.png" alt="">
            </v-col>
            <v-col cols="7" class="my-auto text-center text-white">
              <h3>اعتبار من</h3>
            </v-col>
          </v-row>

        </v-sheet>
      </v-col>
    </v-row>
    <!--  -->
    <div class="container my-5">
      <div class="calendar">
        <div class="front">
          <div class="current-date">
            <h1> 6 آذر</h1>
          </div>

          <div class="current-month">
            <ul class="week-days">
              <li>شنبه</li>
              <li>یکشنبه</li>
              <li>دوشنبه</li>
              <li>سه شنبه</li>
              <li>چهارشنبه</li>
              <li>پنجشنبه</li>
              <li>جمعه</li>
            </ul>

            <div class="weeks">
              <div class="first">
                <span class="last-month">28</span>
                <span class="last-month">29</span>
                <span class="last-month">30</span>
                <span class="last-month">31</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
              </div>

              <div class="second">
                <span>04</span>
                <span>05</span>
                <span class="event">06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
              </div>

              <div class="third">
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span class="event">15</span>
                <span>16</span>
                <span>17</span>
              </div>

              <div class="fourth">
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
              </div>

              <div class="fifth">
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
              </div>
            </div>
          </div>
        </div>

        <div class="back">
          <v-row>
            <v-col cols="12">
              <v-sheet class="px-6 py-5" style="width: 100%;;overflow-y: auto;min-height: 400px;max-height: 400px;">
                <h3>جلسات امروز</h3>
                <v-row class="mt-2 mb-5 text-center"
                  style="border-radius: 5px;background-color:  rgb(2, 83, 90);;color: aliceblue;">
                  <v-col cols="1"><strong>* </strong></v-col>
                  <v-col cols="3"><strong>نام کلاس</strong></v-col>
                  <v-col cols="3"><strong>نام استاد</strong></v-col>
                  <v-col cols="2"><strong>ساعت شروع</strong></v-col>
                  <v-col cols="3"><strong>کلاس آنلاین</strong></v-col>
                </v-row>
                <!-- <v-row v-for="i in 10" class="mt-5 mb-3 text-center">
                  <v-col cols="1"><strong>{{ i }} </strong></v-col>
                  <v-col cols="3"><strong>گیتار</strong></v-col>
                  <v-col cols="3"><strong>محسن پوربخت</strong></v-col>
                  <v-col cols="2"><strong>12:35</strong></v-col>
                  <v-col cols="3" class=""><router-link class="joinbtn" to="/">ورود به جلسه </router-link></v-col>
                  <hr>
                </v-row> -->
              </v-sheet>

            </v-col>
          </v-row>
          <div class="actions">
            <button class="save">
              بازگشت
            </button>
          </div>
        </div>

      </div>
    </div>
  </v-container>
</template>
<script>
import { Callaxios } from '@/assets/composable/CallAxus';
export default {
  data() {
    return {
      container: null,
      calendar: null,
      days: null,
      form: null,
      input: null,
      buttons: null,
      calenderhtml:''
    }
  },
  mounted() {
Callaxios('Front/GetThisMonthCalender','get',undefined,)
  
  },
  methods: {
    aftergetcalender(param){
this.calenderhtml = param.Data
      this.container = document.getElementsByClassName('calendar')[0];
    this.calendar = document.getElementsByClassName('front')[0];
    this.days = document.querySelectorAll('.weeks span');
    this.form = document.getElementsByClassName('back')[0];
    this.input = document.querySelectorAll('.back input');
    this.buttons = document.querySelectorAll('.back button');
    this.bindUIActions();
    },
    swap(currentSide, desiredSide) {
      this.container.classList.toggle('flip');
      currentSide.style.display = 'none';
      desiredSide.style.display = 'block';
    },
    bindUIActions() {
      this.days.forEach(day => {
        day.addEventListener('click', () => {
          this.swap(this.calendar, this.form);
          this.input.focus();
        });
      });
      this.buttons.forEach(button => {
        button.addEventListener('click', () => {
          this.swap(this.form, this.calendar);
        });
      });
    }
  }
}

</script>
<style scoped>
.container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
}

.calendar {
  background: rgb(14, 93, 101);
  ;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .3);
  height: 510px;
  perspective: 1000;
  transition: .9s;
  transform-style: preserve-3d;
  width: 100%;
}

/* Front - Calendar */
.front {
  transform: rotateY(0deg);
}

.current-date {
  border-bottom: 1px solid rgba(73, 114, 133, .6);
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
}

.current-date h1 {
  color: #dfebed;
  font-size: 1.4em;
  font-weight: 300;
}

.week-days {
  color: #dfebed;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding: 30px 40px;
}

.days {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.weeks {
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
}

.weeks div {
  display: flex;
  font-size: 1.2em;
  font-weight: 300;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
}

.last-month {
  opacity: .3;
}

.weeks span {
  padding: 10px;
}

.weeks span.active {
  background: #f78536;
  border-radius: 50%;
}

.weeks span:not(.last-month):hover {
  cursor: pointer;
  font-weight: 600;
}

.event {
  position: relative;
}

.event:after {
  content: '•';
  color: #f78536;
  font-size: 1.4em;
  position: absolute;
  right: -4px;
  top: -4px;
}

/* Back - Event form */

.back {
  height: 100%;
  transform: rotateY(180deg);
}

.back input {
  background: none;
  border: none;
  border-bottom: 1px solid rgba(73, 114, 133, .6);
  color: #dfebed;
  font-size: 1.4em;
  font-weight: 300;
  padding: 30px 40px;
  width: 100%;
}

.info {
  color: #dfebed;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.2em;
  padding: 30px 40px;
}

.info div:not(.observations) {
  margin-bottom: 40px;
}

.info span {
  font-weight: 300;
}

.info .date {
  display: flex;
  justify-content: space-between;
}

.info .date p {
  width: 50%;
}

.info .address p {
  width: 100%;
}

.actions {
  bottom: 0;
  border-top: 1px solid rgba(73, 114, 133, .6);
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.actions button {
  background: none;
  border: 0;
  color: #fff;
  font-weight: 600;
  letter-spacing: 3px;
  margin: 0;
  padding: 30px 0;
  text-transform: uppercase;
  width: 50%;
}

.actions button:first-of-type {
  border-right: 1px solid rgba(73, 114, 133, .6);
}

.actions button:hover {
  background: #497285;
  cursor: pointer;
}

a {
  text-decoration: none;
}


.actions button:active {
  background: #5889a0;
  outline: none;
}

/* Flip animation */

.flip {
  transform: rotateY(180deg);
}

* {
  list-style: none;
  outline: none;
}

.panellist {
  color: #9c280e;
}

.joinbtn {
  text-decoration: none;
  background-color: rgb(18, 121, 130);
  padding: 8%;
  color: aliceblue;
}

.questionbtn {
  text-decoration: none;
  background-color: rgb(145, 113, 8);
  padding: 10%;
  color: aliceblue;
}

.joinexambtn {
  text-decoration: none;
  background-color: rgb(125, 62, 202);
  padding: 7%;
  color: aliceblue;
}

.front,
.back {
  backface-visibility: hidden;
}
</style>