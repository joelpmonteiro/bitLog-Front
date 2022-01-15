/* eslint-disable import/no-named-as-default-member */
// import Vuex from 'vuex'
// import wallet from './wallet/index.js'

// const store = () => {
//   return new Vuex.Store({
//     namespaced: false,
//     modules: {
//       wallet,
//     },
//   })
// }
export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

// export const modules = {
//   namespaced: true,
//   wallet,
// }

/* eslint-disable no-undef */
// export const state = () => ({
//   fruits: [],
// })

// export const mutations = {
//   addFruit(state, fruit) {
//     state.fruits.push(fruit)
//   },
//   removeFruit(state, fruitId) {
//     state.fruits = state.fruits.filter((fruit) => fruit.id !== fruitId)
//   },
// }

// export const actions = {
//   addFruit(context, fruit) {
//     const slicedFruit = sliceFruit(fruit)
//     context.commit(slicedFruit)
//   },
// }

// export const getters = {
//   getApples: (state) => {
//     return state.fruits.filter((fruit) => fruit.type === 'Apple')
//   },
// }
