/* eslint-disable no-console */
import Web3 from 'web3'

export default ({ app }, inject) => {
    const web3 = new Web3(window.ethereum)
    // web3.eth.getAccounts((err, data) => {
    //     console.error('erro: ',err)
    //     console.log('getAccounts: ',data)
    // })

  // Inject $hello(msg) in Vue, context and store.
  inject('web3', web3)
}

