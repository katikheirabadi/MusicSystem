<template>
<v-row class="foot">
    <v-container>
        <v-row class="mt-3 mb-6">
            <v-col cols="12" md="4"  >
                <v-row class="footer_line1">
                    <img src="../assets/img/phone.png"  >
                        <v-tooltip
                         activator="parent"
                         location="bottom"
                         style="font-family: 'IRANSANS';"
                         >{{ $t('footer.phonetitle') }} </v-tooltip>
                 
                    <h4 class="text-white text-center"  >09102150135 <br> 021-2230041</h4>
                </v-row>          
            </v-col>
            <v-col cols="12" md="4"  >
                <v-row class="footer_line1">
                    <img src="../assets/img/email.png" >
                        <v-tooltip
                         activator="parent"
                         location="bottom"
                         style="font-family: 'IRANSANS';"
                         >{{ $t('footer.emailtitle') }}  </v-tooltip>
                 
                    <h3 class="text-white text-center ps-3"  >info@karosaz.com</h3>
                </v-row>          
            </v-col>
            <v-col cols="12" md="4"  >
                <v-row class="footer_line1">
                    <img src="../assets/img/address.png" >
                        <v-tooltip
                         activator="parent"
                         location="bottom"
                         style="font-family: 'IRANSANS';"
                         >{{ $t('footer.addresstitle') }}  </v-tooltip>
                 
                    <h4 class="text-white text-center"  >کرج ،فردیس ،فلکه سوم <br>،خیابان ٢٣ ،پلاک ٢٩</h4>
                </v-row>          
            </v-col>
        </v-row>
    </v-container>
    <v-divider class="border-opacity-50" :thickness="5" color="#FC7219"></v-divider>
    <v-container>
        <v-row class="mt-3 mb-6">
            <v-col cols="12" md="4" class="text-white center-class">
                <v-row class="mx-2">
                    <h2 class="detailtitle">{{ $t('footer.detailtitle') }} </h2>
                    <p>{{ $t('footer.detail') }} </p>
                </v-row>
            </v-col>
            <v-col cols="12" md="4"  >
               <v-row class="center-class">
                <h3 class="text-white">{{ $t('footer.sicialmediatitle') }} </h3>
               </v-row>   
               <v-row class="center-class">
                <v-col class="center-class"  cols="3" md="2">
                    <img src="../assets/img/instagram.png" class="media">
                    <v-tooltip
                     activator="parent"
                     location="top"
                     style="font-family: 'IRANSANS';"
                     class="text-center"
                    >{{ $t('footer.imstagram') }}: <br> karosaz@</v-tooltip>
                </v-col>
                <v-col class="center-class" cols="3" md="2">
                    <img src="../assets/img/telegram.png" class="media">
                    <v-tooltip
                     activator="parent"
                     location="top"
                     style="font-family: 'IRANSANS';"
                     class="text-center"
                    >{{  $t('footer.telegram') }}: <br> karosaz@</v-tooltip>
                </v-col>
               </v-row> 
               <v-row class="center-class socialmedia_line2">
                <v-col class="center-class" cols="3" md="2">
                    <img src="../assets/img/facebook.png" class="media">
                    <v-tooltip
                     activator="parent"
                     location="top"
                     style="font-family: 'IRANSANS';"
                     class="text-center"
                    >{{  $t('footer.facebook') }}: <br> karosaz_1400@</v-tooltip>
                </v-col>
                <v-col class="center-class" cols="3" md="2">
                    <img src="../assets/img/youtube.png" class="media">
                    <v-tooltip
                     activator="parent"
                     location="top"
                     style="font-family: 'IRANSANS';"
                     class="text-center"
                    >{{  $t('footer.youtube') }}: <br> karosaz_1400@</v-tooltip>
                </v-col>
               </v-row>  
            </v-col>
            <v-col cols="12" md="4"  >
                <v-row class="text-white center-class mb-3" >
                    <h3 class="text-center">{{   $t('footer.etemad') }}</h3>
                </v-row>         
                <v-row class="etemad">
                    <img src="../assets/img/etemad.svg">
                    <v-tooltip
                    activator="parent"
                    location="bottom"
                    style="font-family: 'IRANSANS';"
                    >{{   $t('footer.etemad') }} </v-tooltip>
                    
                </v-row> 
            </v-col>
           
        </v-row>
    </v-container>
</v-row>
</template>
<style scoped>
@import url(../assets/css/Components/footer.css);
</style>