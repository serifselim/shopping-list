import { createStore } from 'vuex'

export default createStore({
  state: {
    baskets: [
    ],
    index: 0
  },
  mutations: {
    addBasket(state, payload) {
      state.baskets.push(payload);
    },
    changeIndex(state, payload) {
      state.index = payload;
    },
    addItem(state, payload) {
      state.baskets[state.index].items.push(payload)
    }
  },
  actions: {
    setAddBasket({ commit }, payload) {
      commit('addBasket', payload);
    },
    setAddItem({ commit }, payload) {
      commit('addItem', payload)
    }
  },
})
