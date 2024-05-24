<template>
    <div class="bg-orange-darken-3" style="height: 30px;"></div>
    <v-row class="bg-grey-darken-4">
        <v-col cols="12" md="4">
            <v-row>
                <h3 class="text-white mt-7 ms-9">{{ $t('footer.detailtitle') }} </h3>
                <p class="text-white f-small mt-3 ms-9 mb-5 lh-md">{{ $t('footer.detail') }} </p>
            </v-row>
        </v-col>
        <v-col cols="12" md="5">
            <h3 class="text-white text-center mt-4 mb-3">{{ $t('footer.etemad') }} </h3>
            <div class="d-flex justify-center">
                <a referrerpolicy='origin' target='_blank'
                            href='https://trustseal.enamad.ir/?id=473538&Code=FZS3ERUqcxyIWBrmfWsj6iBc3e66t77E'><img
                                referrerpolicy='origin'
                                src='https://trustseal.enamad.ir/logo.aspx?id=473538&Code=FZS3ERUqcxyIWBrmfWsj6iBc3e66t77E'
                                alt='' style='cursor:pointer;width: 100% !important;'
                                Code='FZS3ERUqcxyIWBrmfWsj6iBc3e66t77E'></a>
            </div> 

        </v-col>
        <v-col cols="12" md="3">
            <h3 class="text-white mt-4 mb-3">تماس با ما</h3>
            <div class="d-flex align-center mb-3">
                <img src="../assets/img/phone.png" class="ertebat">
                <h5 class="text-white ms-9" v-html="$t('footer.phone')"></h5>
            </div>
            <div class="d-flex align-center mb-3">
                <img src="../assets/img/email.png" class="ertebat">
                <h5 class="text-white ms-9" v-html="$t('footer.email')"></h5>
            </div>
            <div class="d-flex align-center mb-3">
                <img src="../assets/img/address.png" class="ertebat">
                <h6 class="text-white ms-9" v-html="$t('footer.address')"></h6>
            </div>
        </v-col>
    </v-row>
</template>
<style scoped>
@import url(../assets/css/Components/footer.css);
</style>