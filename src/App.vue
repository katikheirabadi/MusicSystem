<template>
 <div class="main" :class="{'english':this.$i18n.locale == 'fa'}">
  <router-view />
</div>
</template>

<script>

</script>
<style>

.english{
font-family: 'IRANSANS' !important;
}
</style>