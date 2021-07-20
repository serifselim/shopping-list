<template>
  <li class="flex justify-between items-center my-5">
    <a class="action-btn" @click.prevent="deleteBasket">
      <img src="../../assets/icon_cancel.svg" />
    </a>
    <span class="text-white font-bold text-xl">{{ title }}</span>
    <router-link to="/details" @click.prevent="setItems" class="action-btn">
      <img src="../../assets/icon_go.svg" />
    </router-link>
  </li>
</template>
<script>
import { useStore } from "vuex";

export default {
  props: ["basket"],
  setup({ basket }) {
    const { dispatch, commit } = useStore();

    const deleteBasket = () => {
      dispatch("setDeleteBasket", basket.id);
    };

    const setItems = () => {
      commit("setItems", basket.id);
    };

    return {
      title: basket.title,
      deleteBasket,
      setItems,
    };
  },
};
</script>
