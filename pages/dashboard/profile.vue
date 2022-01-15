<template>
  <div class="wrapper">
    <header-layout></header-layout>
    <wrapper-layout></wrapper-layout>
    <modal />
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { mapMutations } from 'vuex'
import headerLayout from '@/components/header/headerLayout.vue'
import wrapperLayout from '@/components/wrapper/wrapperLayout.vue'
import modal from '@/components/modal/modal.vue'

export default {
  name: 'ProfileLayout',
  components: {
    headerLayout,
    wrapperLayout,
    modal,
  },
  data() {
    return { wallet: '' }
  },

  // beforeDestroy() {
  //   document.removeEventListener()
  // },
  mounted() {
    if (localStorage.getItem('name')) {
      this.save({ name: localStorage.getItem('name') })
    }

    // this.$web3.eth.requestAccounts(async (err, data) => {
    //   console.error('erro: ', err)
    //   // const balance = await this.$web3.eth.getBalance(
    //   //   '0x7746470733738eBA82357A9E38ACFF69a21BE8A2'
    //   // )
    //   // console.log(balance / Math.pow(10, 18))
    //   // Math.pow(10, 18)
    // })
  },
  methods: {
    ...mapMutations({ save: 'wallet/saveLogin' }),
  },
}
</script>
