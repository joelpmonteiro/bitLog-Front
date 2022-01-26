export default {
  getWallet: (state) => state.wallet,
  getName: (state) => state.name,
  getSupply: (state) => state.tSupply,
  getHistoricalPrice: (state) => state.historicalPrice,
  getPriceVolatility: (state) => state.priceVolatility,
}
