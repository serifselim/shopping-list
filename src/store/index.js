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
    getLocalStorage(state, payload) {
      state.baskets = payload;
    },

    setLocalStorage(state) {
      localStorage.setItem('baskets', JSON.stringify(state.baskets));
    },

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

    setAddBasket({ commit }, payload) {
      commit('addBasket', payload);
      commit('setLocalStorage');
    },

    setDeleteBasket({ commit }, id) {
      commit('deleteBasket', id);
      commit('setLocalStorage');
    },

    setAddItem({ commit }, payload) {
      commit('addItem', payload);
      commit('setLocalStorage');
    },

    setDeleteItem({ commit }, id) {
      commit('deleteItem', id);
      commit('setLocalStorage');
    }

  },
})
