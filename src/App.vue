<template>
 <div class="main" style="position: relative;" :class="{'FARSI':this.$i18n.locale == 'fa'}">
  <router-view />
</div>
</template>
<script>
export default{
  mounted(){
    var lang = localStorage.getItem('lang');
    this.$vuetify.locale.current = lang;
    this.$i18n.locale = lang;
  },
  updated(){
    if(window.location.href.split('/')[3] == 'fa' || window.location.href.split('/')[3] == 'en'){
      localStorage.setItem('lang',window.location.href.split('/')[3]);
      var lang = window.location.href.split('/')[3]
      this.$vuetify.locale.current = lang;
      this.$i18n.locale = lang;
    }
  }
}
</script>
<style>
.FARSI{
font-family: 'IRANSANS' !important;
direction: rtl !important;
}
</style>