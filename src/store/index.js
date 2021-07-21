import { createStore } from 'vuex'

export default createStore({
  state: {
    baskets: [],
    index: 0,
    changeItem: {
      id: "",
      title: "",
      count: 0
    },
    isChange: false
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
    },

    checkItem(state, id) {
      state.baskets[state.index].items.map(basket => {
        if (basket.id === id) {
          basket.check = !basket.check;
        }
      })
    },

    changeTrigger(state) {
      state.isChange = !state.isChange;
    },

    getChangeItem({ baskets, index, changeItem }, id) {
      baskets[index].items.map(basket => {
        if (basket.id === id) {
          changeItem.id = basket.id;
          changeItem.title = basket.title;
          changeItem.count = basket.count;
        }
      })
    },

    setChangeItem({ baskets, index }, payload) {
      baskets[index].items.map(basket => {
        if (basket.id === payload.value.id) {
          basket.title = payload.value.title;
          basket.count = payload.value.count;
        }
      })
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
    },

    getChangeItem({ commit }, id) {
      commit('changeTrigger');
      commit('getChangeItem', id);
    },

    setChangeItem({ commit }, payload) {
      commit('changeTrigger');
      commit('setChangeItem', payload);
      commit('setLocalStorage');
    }

  },
})
