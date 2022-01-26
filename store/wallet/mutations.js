/* eslint-disable no-console */
export default {
  saveLogin(state, payload) {
    state.name = payload.name
  },
  saveWallet(state, { wallet }) {
    state.wallet = wallet
  },
  saveTokenSupply(state, { tsupply }) {
    console.log(`supply`, { tsupply })
    state.tSupply = tsupply
  },
  saveHistoricalPriceTokens(state, historicalPrice) {
    state.historicalPrice = historicalPrice.data
  },
  savePriceVolatility(state, { data }) {
    console.log(data)
    state.priceVolatility = data
  },
}
