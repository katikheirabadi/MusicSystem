<template>
     <v-row>
          <v-col v-for="i in 4" cols="12" md="4">
            <v-sheet  class="card">
              <v-sheet class="additional">
                <v-sheet class="product-card">
                  <img src="http://localhost:3000/src/assets/img/pianp.jpg" style="width: 100%; height: 100%;"/>
                  <v-sheet class="text-center info mt-3">
                    <h3 class="mb-1">هارمونیکا{محسن دهقانی یکشنبه}پاییز
                      <v-icon  style="padding-inline-start: 6%;font-size: 15px;" icon="fa fa-ellipsis-h"></v-icon>
                      <!-- <v-icon style="padding-inline-start: 6%;font-size: 15px;" icon="fa fa-ellipsis-h"></v-icon> -->
                    </h3>
                    <v-btn class="info-btn bg-deep-orange-darken-2 mb-1">جلسات</v-btn>
                    <br>
                    <v-btn class="info-btn bg-green-darken-2 mb-1">آزمون ها</v-btn>
                    <br>
                    <v-btn class="info-btn text-white bg-light-blue-darken-3 mb-1">نظرسنجی</v-btn>
                   
                  </v-sheet>
                </v-sheet>            
              </v-sheet>
              <v-sheet class="general text-center mt-auto">
                <h3>هارمونیکا{محسن ده...
                  <v-tooltip
                   activator="parent"
                   location="bottom"
                   >هارمونیکا{محسن دهقانی یکشنبه}پاییز
                  </v-tooltip>
                </h3>
                <v-divider></v-divider>
                <v-sheet class="detail  mt-auto">
                  <p>نام استاد: محسن دهقانی</p>
                  <p>	18:00 تا 18:30	</p>
                  <p>تعداد جلسات : 28</p>
                  <p>نمره : 20 </p>
                </v-sheet>
                
              </v-sheet>
         
            </v-sheet>
      
          </v-col>
          
          </v-row>
</template>
<style scoped>
@import url(../../assets/css/UserPanel/classes.css);
</style>