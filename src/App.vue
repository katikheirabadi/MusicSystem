<template>
 <div class="main" :class="{'FARSI':this.$i18n.locale == 'fa'}">
  <router-view />
</div>
</template>

<script>
export default {
  data(){
    return {
      lang :'fa'
    }
  },
  mounted(){
    this.$vuetify.locale.current = this.lang
    this.$i18n.locale=this.lang
    // if( window.location.href.split('/')[3]){
    //   this.lang = window.location.href.split('/')[3]
    //   localStorage.setItem('lang',this.lang)
    // }else {
    //   this.lang = localStorage.getItem('lang')
    // }
    // this.$vuetify.locale.current = this.lang
    // this.$i18n.locale=this.lang
  }
}
</script>
<style>
.FARSI{
font-family: 'IRANSANS' !important;
direction: rtl !important;
}
</style>