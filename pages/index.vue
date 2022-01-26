<template>
  <div class="wrapper">
    <header-Top></header-Top>
    <wrapper-layout></wrapper-layout>
    <modal />
  </div>
</template>

<script>
import headerTop from '@/components/header/headerTop.vue'
import wrapperLayout from '@/components/wrapper/wrapperLayout.vue'
import modal from '@/components/modal/modal.vue'
export default {
  name: 'IndexPage',
  components: {
    headerTop,
    wrapperLayout,
    modal,
  },
  // fetch({ redirect }) {
  //   redirect('/login')
  // },
}
</script>
