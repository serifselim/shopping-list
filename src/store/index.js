import { createStore } from 'vuex'

export default createStore({
  state: {
    baskets: [],
    index: 0
  },
  getters: {
    getBaskets({ baskets }) {
      return baskets;
    },

    getItems({ baskets, index }) {
      return baskets[index].items;
    },
  },
  mutations: {
    addBasket({ baskets }, payload) {
      baskets.push(payload);
    },

    deleteBasket({ baskets }, id) {
      baskets = baskets.filter(basket => basket.id != id);
      // baskets.splice(value, 1);
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

    setDeleteBasket({ commit }, id) {
      commit('deleteBasket', id)
    },

    setAddItem({ commit }, payload) {
      commit('addItem', payload)
    },

    setDeleteItem({ commit }, id) {
      commit('deleteItem', id)
    }

  },
})
