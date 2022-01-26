/* eslint-disable no-console */
import {
  tokenSupplyContractAddress,
  getHistoricalPriceTokens,
  getPriceVolatility,
} from '../../services/axios'
export default {
  async tokenSupplyContract({ commit }) {
    try {
      const supply = await tokenSupplyContractAddress(this.$axios, {
        token: `0xf3147987a00d35eecc10c731269003ca093740ca`,
      })
      console.log(`chamada do actions: `, supply) // ddados da api
      if (supply.status === 200)
        commit('saveTokenSupply', { tsupply: supply.data })
    } catch (error) {
      console.log(error)
      if (error.response !== undefined) {
        if (error.response.status === 404) alert(error.response.data.msg)
        if (error.response.status === 500) alert(error.response.data.msg)
      } else alert(`Erro Grave no sistema`)
    }
  },
  async getHistoricalPriceTokens({ commit }) {
    try {
      const priceTokens = await getHistoricalPriceTokens(this.$axios, {
        token: `0xf3147987a00d35eecc10c731269003ca093740ca`,
        from: `2021-12-26`,
        to: `2022-01-26`,
      })
      console.log(`historicalPriceTokens: `, priceTokens) // ddados da api
      if (priceTokens.status === 200)
        commit(`saveHistoricalPriceTokens`, { ...priceTokens.data })
      // {
      //   historicalPrice: priceTokens.data,
      // }
    } catch (error) {
      console.log(error)
      if (error.response !== undefined) {
        if (error.response.status === 404) alert(error.response.data.msg)
        if (error.response.status === 500) alert(error.response.data.msg)
      } else alert(`Erro Grave no sistema`)
    }
  },
  async getPriceVolatility({ commit }) {
    try {
      const priceVolatility = await getPriceVolatility(this.$axios)
      if (priceVolatility.status === 200)
        commit(`savePriceVolatility`, { ...priceVolatility.data })
    } catch (error) {
      console.log(error.response)
      if (error.response !== undefined) {
        if (error.response.status === 404) alert(error.response.data.msg)
        if (error.response.status === 500) alert(error.response.data.msg)
      } else alert(`Erro Grave no sistema`)
    }
  },
}
