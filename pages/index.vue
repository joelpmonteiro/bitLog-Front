<template>
  <div class="wrapper">
    <header-Top></header-Top>
    <wrapper-layout></wrapper-layout>
    <modal />
  </div>
</template>

<script>
/* eslint-disable no-console */
import { mapActions } from 'vuex'
import { tokenCirculatingSupply } from '../services/axios'
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
  data() {
    return {
      supplyContract: [],
      csupplyContract: [],
      // priceVolatility: [],
      priceTokens: [],
    }
  },
  async mounted() {
    await this.tSupply()
    setTimeout(async () => {
      await this.historicalPrice()
    }, 800)
    setTimeout(async () => {
      await this.priceVolatility()
    }, 1200)
    await this.tokenCirculatingSupply()
  },
  methods: {
    ...mapActions({
      tSupply: 'wallet/tokenSupplyContract',
      historicalPrice: 'wallet/getHistoricalPriceTokens',
      priceVolatility: 'wallet/getPriceVolatility',
    }),
    // async tokenSupplyContract() {
    //   try {
    //     const supply = await tokenSupplyContractAddress(this.$axios, {
    //       token: `0xf3147987a00d35eecc10c731269003ca093740ca`,
    //     })
    //     console.log(supply) // ddados da api
    //     if (supply.status === 200) this.supplyContract = supply.data
    //   } catch (error) {
    //     console.log(error)
    //     if (error.response !== undefined) {
    //       if (error.response.status === 404) alert(error.response.data.msg)
    //       if (error.response.status === 500) alert(error.response.data.msg)
    //     } else alert(`Erro Grave no sistema`)
    //   }
    // },
    async tokenCirculatingSupply() {
      try {
        const csupply = await tokenCirculatingSupply(this.$axios, {
          token: `0xf3147987a00d35eecc10c731269003ca093740ca`,
        })
        console.log(csupply) // ddados da api
        if (csupply.status === 200) this.csupplyContract = csupply.data
      } catch (error) {
        console.log(error)
        if (error.response !== undefined) {
          if (error.response.status === 404) alert(error.response.data.msg)
          if (error.response.status === 500) alert(error.response.data.msg)
        } else alert(`Erro Grave no sistema`)
      }
    },
    // async getHistoricalPriceTokens() {
    //   try {
    //     const priceTokens = await getHistoricalPriceTokens(this.$axios, {
    //       token: `0x7746470733738eBA82357A9E38ACFF69a21BE8A2`,
    //     })
    //     console.log(`historicalPriceTokens: `, priceTokens) // ddados da api
    //     if (priceTokens.status === 200) this.priceTokens = priceTokens.data
    //   } catch (error) {
    //     console.log(error)
    //     if (error.response !== undefined) {
    //       if (error.response.status === 404) alert(error.response.data.msg)
    //       if (error.response.status === 500) alert(error.response.data.msg)
    //     } else alert(`Erro Grave no sistema`)
    //   }
    // },
    // async getPriceVolatility() {
    //   try {
    //     const priceVolatility = await getPriceVolatility(this.$axios)
    //     console.log(`priceVolatility: `, priceVolatility) // ddados da api
    //     if (priceVolatility.status === 200)
    //       this.priceVolatility = priceVolatility.data
    //   } catch (error) {
    //     console.log(error.response)
    //     if (error.response !== undefined) {
    //       if (error.response.status === 404) alert(error.response.data.msg)
    //       if (error.response.status === 500) alert(error.response.data.msg)
    //     } else alert(`Erro Grave no sistema`)
    //   }
    // },
  },
  // fetch({ redirect }) {
  //   redirect('/login')
  // },
}
</script>
