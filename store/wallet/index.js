// import { state, mutations, actions, getters } from './wallet'
import getUser from './getters.js'
import actUser from './actions.js'
// import { saveLogin } from './mutations.js'

export const state = () => ({
  wallet: '',
  name: '',
})

export const mutations = {
  saveLogin(state, name) {
    state.name = name
  },
}

export const actions = {
  ...actUser,
}

export const getters = {
  ...getUser,
}
// export default {
//   state: () => ({
//     id: '0x7746470733738eBA82357A9E38ACFF69a21BE8A2',
//     name: '',
//   }),
//   actions,
//   mutations,
//   getters,
// }
