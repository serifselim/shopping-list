import { createStore } from 'vuex'

export default createStore({
  state: {
    baskets: [],
  },

  mutations: {
    addBasket({ baskets }, payload) {
      baskets.push(payload);
    },

    deleteBasket(state, id) {
      console.log(id);
      state.baskets = state.baskets.filter(basket => basket.id != id);
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
