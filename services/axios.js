export const login = async (axios, data) => {
  const login = await axios.post('/login', data)
  if (login.status === 200) return login
  return login
}

export const register = async (axios, data) => {
  const register = await axios.post('/createUser', data)
  if (register.status === 200) return register
  return register
}

export const addWallet = async (axios, data) => {
  const wallet = await axios.post('/cardWallet', data)
  if (wallet.status === 200) return wallet
  return wallet
}

export const tokenSupplyContractAddress = async (axios, { token }) => {
  const supply = await axios.get(`/tokenSupplyContractAddress/${token}`)
  if (supply.status === 200) return supply
  return supply
}

export const tokenCirculatingSupply = async (axios, { token }) => {
  const csupply = await axios.get(`/TokenCirculatingSupply/${token}`)
  if (csupply.status === 200) return csupply
  return csupply
}

export const getHistoricalPriceTokens = async (axios, { token, from, to }) => {
  let url = ''
  console.log(from)
  if (from !== undefined && to !== undefined) {
    url = `/getHistoricalPriceTokens/${token}/${from}/${to}`
  } else {
    url = `/getHistoricalPriceTokens/${token}`
  }
  const hist = await axios.get(url)
  if (hist.status === 200) return hist
  return hist
}

export const getPriceVolatility = async (axios) => {
  const price = await axios.get(`/getPriceVolatility/`)
  if (price.status === 200) return price
  return price
}
