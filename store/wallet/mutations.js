/* eslint-disable no-console */
export default {
  saveLogin(state, payload) {
    state.name = payload.name
  },
  saveWallet(state, { wallet }) {
    state.wallet = wallet
  },
}
