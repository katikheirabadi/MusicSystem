<template>
  <div class="d-flex justify-center">
    <v-card class='fullwidth'>
      <v-tabs v-model="tab" align-tabs="center" color="pink-darken-4">
        <v-tab :value="1">درخواست های انصراف</v-tab>
        <v-tab :value="2">انتقاد و پیشنهادات</v-tab>
      </v-tabs>
      <v-window v-model="tab" class="content">
        <v-window-item :value="1">
          <div class="d-none d-md-block mt-5 fullwidth">
            <v-container>
              <v-row class="text-center bg-pink-darken-3">
                <v-col cols="1">*</v-col>
                <v-col cols="4">نام دوره</v-col>
                <v-col cols="2">ساعت برگزاری</v-col>
                <v-col cols="3">تاریخ درخواست</v-col>
                <v-col cols="2">وضعیت</v-col>
              </v-row>
              <v-row v-for="(del, i) in deleterequests" class="text-center">
                <v-col cols="1">{{ i + 1 }}</v-col>
                <v-col cols="4">{{ del.ProductName }}</v-col>
                <v-col cols="2">{{ del.Hour }} </v-col>
                <v-col cols="3">{{ del.CreateDate }} </v-col>
                <v-col cols="2">{{ del.State }}</v-col>
              </v-row>
            </v-container>
          </div>
          <div class="d-block d-md-none fullwidth">
            <v-sheet class="mt-1 mb-1 reqbodysmall reqbody" v-for="del in deleterequests">
              <v-row class="mt-3">
                <v-col class="text-center" cols="4"><strong>نام دوره</strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ del.ProductName }}</strong></v-col>
              </v-row>
              <v-row>
                <v-col class="text-center" cols="4"><strong>ساعت برگزاری </strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ del.Hour }}</strong></v-col>
              </v-row>
              <v-row>
                <v-col class="text-center" cols="4"><strong>تاریخ درخواست</strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ del.CreateDate }}</strong></v-col>
              </v-row>
              <v-row class="mb-2">
                <v-col class="text-center" cols="4"><strong>وضعیت </strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ del.State }}</strong></v-col>
              </v-row>

            </v-sheet>
          </div>
        </v-window-item>
        <v-window-item :value="2">
          <div class="d-none d-md-block mt-5 fullwidth">
            <v-container>
              <v-row class="text-center bg-blue-darken-3">
                <v-col cols="2">نام دوره</v-col>
                <v-col cols="2">ساعت برگزاری</v-col>
                <v-col cols="2">تاریخ درخواست</v-col>
                <v-col cols="2">نوع درخواست</v-col>
                <v-col cols="2">متن درخواست</v-col>
                <v-col cols="2">جواب درخواست</v-col>
              </v-row>
              <v-row v-for="(sug, i) in suggestions" class="text-center">
                <v-col cols="2">{{ sug.ProductName }}</v-col>
                <v-col cols="2">{{ sug.Hour }}</v-col>
                <v-col cols="2">{{ sug.Createsuggestion }} </v-col>
                <v-col cols="2">{{ sug.Type }} </v-col>
                <v-col cols="2">{{ sug.MinText }}
                  <v-tooltip activator="parent" location="bottom">
                    {{ sug.Suggesttext }}
                  </v-tooltip>
                </v-col>
                <v-col cols="2">{{ sug.Comment }} </v-col>
              </v-row>
            </v-container>
          </div>
          <div class="d-block d-md-none  ">
            <v-sheet class="mt-1 mb-1 reqbodysmall reqbody sugbody"
              v-for="sug in suggestions">
              <v-row class="mt-3">
                <v-col class="text-center" cols="4"><strong>نام دوره</strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ sug.ProductName }}</strong></v-col>
              </v-row>
              <v-row>
                <v-col class="text-center" cols="4"><strong>ساعت برگزاری </strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ sug.Hour }}</strong></v-col>
              </v-row>
              <v-row>
                <v-col class="text-center" cols="4"><strong>تاریخ درخواست</strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ sug.Createsuggestion }}</strong></v-col>
              </v-row>
              <v-row>
                <v-col class="text-center" cols="4"><strong>نوع درخواست</strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ sug.Type }}</strong></v-col>
              </v-row>
              <v-row>
                <v-col class="text-center" cols="4"><strong>متن درخواست</strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ sug.MinText }}</strong> 
                  <v-tooltip activator="parent" location="bottom">
                    {{ sug.Suggesttext }}
                  </v-tooltip></v-col>
              </v-row>
              <v-row>
                <v-col class="text-center" cols="4"><strong>جواب درخواست</strong></v-col>
                <v-col class="text-center" cols="8"><strong>{{ sug.Comment }}</strong></v-col>
              </v-row>
            </v-sheet>
          </div>
        </v-window-item>

      </v-window>
    </v-card>
  </div>
 
</template>
<script>
import { Callaxios } from '@/assets/composable/CallAxus';
import { shorttext } from '@/assets/helper/heper';
export default {
  data() {
    return {
      tab: null,
      deleterequests: [],
      suggestions: [],
      showdialog: false,
      dialogtext: ''
    }
  },
  mounted() {
    Callaxios('UserRequest/GetAllRequests', 'post', { ProductAvalableSessionId: 0, UserProductId: 0 }, this.aftergetalldeleterequests)
  },
  methods: {
    aftergetalldeleterequests(param) {
      this.deleterequests = param.Data
      Callaxios('UserSuggestion/ShowAllUserSuggestion', 'post', { UserProductId: 0 }, this.aftergetallsuggestions)
    },
    aftergetallsuggestions(param) {
      this.suggestions = param.Data
      this.suggestions.filter((i) => i.MinText = shorttext(i.Suggesttext, 10))
    }
  }
}
</script>
<style scoped>
@import url(../../assets/css/UserPanel/requests.css);
</style>