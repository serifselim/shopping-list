import { createStore } from 'vuex'

export default createStore({
  state: {
    baskets: [],
    index: 0
  },
  getters: {
    getItems({ baskets, index }) {
      return baskets[index].items;
    },
  },
  mutations: {
    addBasket({ baskets }, payload) {
      baskets.push(payload);
    },

    deleteBasket({ baskets }, value) {
      baskets.splice(value, 1);
    },

    changeIndex({ index }, payload) {
      index = payload;
    },

    addItem({ baskets, index }, payload) {
      baskets[index].items.push(payload);
    },

    deleteItem({ baskets, index }, id) {
      baskets[index].items = baskets[index].items.filter(item => item.id != id);
    }
  },
  actions: {

    setAddBasket({ commit }, payload) {
      commit('addBasket', payload);
    },

    setDeleteBasket({ commit }, value) {
      commit('deleteBasket', value)
    },

    setAddItem({ commit }, payload) {
      commit('addItem', payload)
    },

    setDeleteItem({ commit }, id) {
      commit('deleteItem', id)
    }

  },
})
