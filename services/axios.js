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
