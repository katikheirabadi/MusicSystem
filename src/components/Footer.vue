<template>
    <v-row class="foot">
        <v-container>
            <v-row class="mt-3 mb-6">
                <v-col cols="12" md="4">
                    <v-row class="footer_line1">
                        <img src="../assets/img/phone.png">
                        <v-tooltip activator="parent" location="bottom" style="font-family: 'IRANSANS';">{{
                            $t('footer.phonetitle') }} </v-tooltip>

                        <div v-html="$t('footer.phone')"></div>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4">
                    <v-row class="footer_line1">
                        <img src="/src/assets/img/email.png">
                        <v-tooltip activator="parent" location="bottom" style="font-family: 'IRANSANS';">{{
                            $t('footer.emailtitle') }} </v-tooltip>

                        <div v-html="$t('footer.email')"></div>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4">
                    <v-row class="footer_line1">
                        <img src="../assets/img/address.png">
                        <v-tooltip activator="parent" location="bottom" style="font-family: 'IRANSANS';">{{
                            $t('footer.addresstitle') }} </v-tooltip>

                        <div v-html="$t('footer.address')"></div>
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
                <v-col cols="12" md="4">
                    <v-row class="center-class">
                        <h3 class="text-white">{{ $t('footer.sicialmediatitle') }} </h3>
                    </v-row>
                    <v-row class="center-class">
                        <v-col class="center-class" cols="3" md="2">
                            <img src="../assets/img/instagram.png" class="media">
                            <v-tooltip activator="parent" location="top" style="font-family: 'IRANSANS';"
                                class="text-center">{{ $t('footer.imstagram') }}: <br> karosaz@</v-tooltip>
                        </v-col>
                        <v-col class="center-class" cols="3" md="2">
                            <img src="../assets/img/telegram.png" class="media">
                            <v-tooltip activator="parent" location="top" style="font-family: 'IRANSANS';"
                                class="text-center">{{ $t('footer.telegram') }}: <br> karosaz@</v-tooltip>
                        </v-col>
                    </v-row>
                    <v-row class="center-class socialmedia_line2">
                        <v-col class="center-class" cols="3" md="2">
                            <img src="../assets/img/facebook.png" class="media">
                            <v-tooltip activator="parent" location="top" style="font-family: 'IRANSANS';"
                                class="text-center">{{ $t('footer.facebook') }}: <br> karosaz_1400@</v-tooltip>
                        </v-col>
                        <v-col class="center-class" cols="3" md="2">
                            <img src="../assets/img/youtube.png" class="media">
                            <v-tooltip activator="parent" location="top" style="font-family: 'IRANSANS';"
                                class="text-center">{{ $t('footer.youtube') }}: <br> karosaz_1400@</v-tooltip>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="text-white center-class mb-3 text-center">
                        <h3 class="text-center">{{ $t('footer.etemad') }}</h3>
                    </div>
                    <div class="etemad">
                        <a referrerpolicy='origin' target='_blank'
                            href='https://trustseal.enamad.ir/?id=473538&Code=FZS3ERUqcxyIWBrmfWsj6iBc3e66t77E'><img
                                referrerpolicy='origin'
                                src='https://trustseal.enamad.ir/logo.aspx?id=473538&Code=FZS3ERUqcxyIWBrmfWsj6iBc3e66t77E'
                                alt='' style='cursor:pointer;width: 100% !important;'
                                Code='FZS3ERUqcxyIWBrmfWsj6iBc3e66t77E'></a>
                        <!-- <script src="https://cdn.zarinpal.com/trustlogo/v1/trustlogo.js" type="text/javascript"></script> -->
                    </div>
                </v-col>

            </v-row>
        </v-container>
    </v-row>
</template>
<style scoped>
@import url(../assets/css/Components/footer.css);
</style>