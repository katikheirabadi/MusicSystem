<template>
    <v-sheet class="survey pt-5">
        <div class="content">
            <div class="d-flex justify-center">
                <v-sheet class="suerveytitle text-center">
                    <img src="../../assets/img/survey1.jpg" class="surveyimg pt-4" alt="">
                    <h2 class="pt-3 mb-2 title"> {{ title }}</h2>
                    <h4 class="pb-2">{{ $t('survey.subtitle') }}</h4>
                </v-sheet>
            </div>
            <div class="d-flex justify-center">
                <v-sheet class="surveydetail mt-3">
                    <div v-for="data in detail" :key="data.CategoryId">
                        <h4 class="bg-purple-darken-1 py-2 px-2">{{ data.CategoryName }}</h4>
                        <v-row class="mt-2 mb-1" :ref="question.QuestionId" v-for="question in data.Questions"
                            :key="question.QuestionId">
                            <v-col cols="12">
                                <h4 class="text-center">{{ question.QuestionText }}</h4>
                            </v-col>
                            <v-col cols="12" class="d-flex justify-center">
                                <div style="width: 100%;">
                                    <v-radio-group v-model="selcted[question.QuestionId]" inline
                                        color="purple-lighten-1" class="d-flex justify-center">
                                        <v-radio v-for="option in question.Options" :key="option.Id"
                                            :label="option.Text" :value="option.Id"></v-radio>
                                    </v-radio-group>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-sheet>

            </div>
            <div class="d-flex justify-center">
                <v-btn @click="sendsurvey" class="bg-purple-darken-1 py-2 px-2 mt-2 sendsurvey mb-2">{{ $t('survey.btn')
                    }}</v-btn>
            </div>

        </div>


    </v-sheet>


    <notif v-if="show" :show="show" :type="type" :text="text" location="top right" @close="show=false" />
</template>
<script>
import notif from '@/components/ResultNotification.vue';
import { Callaxios } from '@/assets/composable/CallAxus';
import i18n from '@/locales/i18n';
export default {
    data() {
        return {
            title: '',
            detail: [],
            selcted: [],
            show: false,
            type: '',
            text: ''
        }
    },
    components: {
        notif
    },
    mounted() {
        var input = {
            UserProductId: this.$route.params.Up,
            PackageId: this.$route.params.pack
        }
        Callaxios('Survey/GetSurveysDetail', 'post', input, this.aftergetdetail)
    },
    methods: {
        aftergetdetail(param) {
            this.detail = param.Data
            Callaxios('Survey/GetProductNameForSurvey', 'post', { UserProductId: this.$route.params.Up }, this.aftergetname)
        },
        aftergetname(param) {
            this.title = param
        },
        sendsurvey() {
            var refs = Object.entries(this.$refs)
            var counter = 0
            this.selcted.filter((i) => counter = counter + 1)
            var dif = refs.length - counter
            if (dif != 0) {
                this.type = 'error'
                this.text = i18n.global.t('survey.notcomplete')
                this.show = true
            }
            else {
                var input = {
                    PackageType: this.$route.params.type,
                    UserProductId: this.$route.params.Up,
                    Answers: []
                }
                refs.filter((i) => input.Answers.push({
                    QuestionId: parseInt(i[0]),
                    OptionId: this.selcted[parseInt(i[0])]
                }))
                Callaxios('Survey/AddUserSurveyAnswer', 'post', input,this.afteraddanswers)
            }
        },
        afteraddanswers(param) {
            this.type = 'success'
            this.text = i18n.global.t('survey.send')
            this.show = true
            setTimeout(() => {
                this.$router.push({name:'panel'})
            }, 2000);
        }
    }
}

</script>
<style scoped>
@import url(../../assets/css/Views/survey.css);
</style>
