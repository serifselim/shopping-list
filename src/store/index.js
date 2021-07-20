import { createStore } from 'vuex'

export default createStore({
  state: {
    baskets: [],
    index: 0
  },
  getters: {
    getItems({ baskets, index }) {
      return baskets[index].items;
    }
  },

  mutations: {
    addBasket({ baskets }, payload) {
      baskets.push(payload);
    },

    deleteBasket(state, id) {
      state.baskets = state.baskets.filter(basket => basket.id != id);
    },

    setItems(state, id) {
      state.baskets.map((basket, index) => {
        if (basket.id === id) {
          state.index = index;
        }
      })
    },

    addItem({ baskets, index }, payload) {
      baskets[index].items.push(payload);
    },

    deleteItem({ baskets, index }, id) {
      baskets[index].items = baskets[index].items.filter(item => item.id != id);
    }
  },
  actions: {

    setAddItem({ commit }, payload) {
      commit('addItem', payload)
    },

    setDeleteItem({ commit }, id) {
      commit('deleteItem', id)
    }

  },
})
