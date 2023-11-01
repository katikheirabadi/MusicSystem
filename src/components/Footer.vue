<template>

<v-row class="foot">
    <v-sheet class="foothead" height="90">
        <h2>
        سامانه آموزشگاه محور کاروساز
         </h2>
    </v-sheet>
<v-container style="margin-top: -2%;" class="d-dm-none d-md-flex">
    <v-row>
        <v-col cols="12" md="4" class="">
            <v-sheet style="background-color: black;">
                <h3 style="color: aliceblue;">ما را در شبکه های اجتماعی دنبال کنید.</h3>
                <v-row class="center-class mt-5">
                    <v-col cols="2" md="3">
                        <v-img src="../assets/img/pintrest.png">
                         <v-tooltip
                         activator="parent"
                         location="bottom"
                         >karosaz</v-tooltip>
                        </v-img>
                    </v-col>
                    <v-col cols="2" md="3"><v-img src="../assets/img/telegram.png">
                        <v-tooltip
                     activator="parent"
                     location="bottom"
                    >karosaz@</v-tooltip>
                    </v-img></v-col>
                    <v-col cols="2" md="3"><v-img src="../assets/img/instagram.png">
                        <v-tooltip
                     activator="parent"
                     location="bottom"
                    >karosaz@</v-tooltip>
                    </v-img></v-col>
                    <v-col cols="2" md="3"><v-img src="../assets/img/facebook.png">
                        <v-tooltip
                     activator="parent"
                     location="bottom"
                    >karosaz@</v-tooltip>
                    </v-img></v-col>
                </v-row>
              
            </v-sheet>
        </v-col>
        <v-col cols="12" md="5" class="text-center">
            <h2 class="text-center" style="color: aliceblue;">ارتباط با ما</h2>
            <v-row class="mt-5">
                <v-col cols="12" md="3" >
                    <v-sheet style="background-color: black;" class="center-class">
                        <v-img width="80" src="../assets/img/phone.png" style="margin-inline-start: auto;margin-inline-end: auto;"></v-img>
                        <h5 class="text-white text-center">0212230042</h5>
                        <v-tooltip
                         activator="parent"
                         location="bottom"
                         style="font-family: 'IRANSANS';"
                         >تماس تلفنی</v-tooltip>
                    </v-sheet>
                    
                </v-col>
                <v-col cols="12" md="3" style="height: fit-content;">
                    <v-img width="78" src="../assets/img/email.png" style="margin-inline-start: auto;margin-inline-end: auto;"></v-img>
                    <h5 class="text-white text-center">info@karosaz.com</h5>
                    <v-tooltip
                         activator="parent"
                         location="bottom"
                         style="font-family: 'IRANSANS';"
                         >ایمیل</v-tooltip>
                </v-col>
                <v-col cols="12" md="3" style="height: fit-content;">
                    <v-img width="80" src="../assets/img/address.png" style="margin-inline-start: auto;margin-inline-end: auto;"></v-img>
                    <h5 class="text-white text-center">کرج ،فردیس ،فلکه سوم ،خیابان ٢٣ ،پلاک ٢٩</h5>
                    <v-tooltip
                         activator="parent"
                         location="top"
                         style="font-family: 'IRANSANS';"
                         >آدرس</v-tooltip>
                </v-col>
                <v-col cols="12" md="3" style="height: fit-content;">
                    <v-img width="80" src="../assets/img/phone.png" style="margin-inline-start: auto;margin-inline-end: auto;"></v-img>
                    <h5 class="text-white text-center">karosaz.com</h5>
                    <v-tooltip
                         activator="parent"
                         location="bottom"
                         style="font-family: 'IRANSANS';"
                         >سایت</v-tooltip>
                </v-col>

            </v-row>
        </v-col>
        <v-col cols="12" md="3" class="text-center">
            <h2 style="color: aliceblue;margin-bottom: 5%;">نماد اعتماد</h2>
            <v-img width="80" src="../assets/img/1.svg" style="margin-inline-start: auto;margin-inline-end: auto;"></v-img>
        </v-col>
    </v-row>
</v-container>
</v-row>
</template>
<style scoped>
.foothead{
    background-color: #5b1505;
    text-align: center;
    color: aliceblue;
    border-radius: 30% 0;
    margin-top: -3%;
    margin-inline-start: 2%;
    /* padding-top: 3% !important; */
    z-index: 2;
    padding-top: 1.5%;
    padding-left: 1%;
    padding-right: 1%;
}
.foot{
    background-color: rgb(0, 0, 0);
    min-height: 300px;
}
</style>