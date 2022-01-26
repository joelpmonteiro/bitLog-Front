// import { state, mutations, actions, getters } from './wallet'
import getUser from './getters.js'
import actionsMethods from './actions.js'
// import { saveLogin } from './mutations.js'

export const state = () => ({
  wallet: '',
  name: '',
  tSupply: [],
  historicalPrice: [],
  priceVolatility: {},
})

// export const mutations = {
//   saveLogin(state, name) {
//     state.name = name
//   },
// }

export const actions = {
  ...actionsMethods,
}

export const getters = {
  ...getUser,
}
