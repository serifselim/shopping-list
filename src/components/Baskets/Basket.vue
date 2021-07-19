<template>
  <li class="flex justify-between items-center my-5">
    <a class="action-btn" @click.prevent="deleteBasket">
      <img src="../../assets/icon_cancel.svg" alt="" />
    </a>
    <span class="text-white font-bold text-xl">{{ title }}</span>
    <router-link to="/details" @click="setIndex" class="action-btn">
      <img src="../../assets/icon_go.svg" alt="" />
    </router-link>
  </li>
</template>
<script>
import { useStore } from "vuex";

export default {
  props: ["title", "index"],

  setup({ index }) {
    const { commit, dispatch } = useStore();

    const setIndex = () => {
      commit("changeIndex", index);
    };

    const deleteBasket = () => {
      dispatch("setDeleteBasket", index);
    };

    return {
      setIndex,
      deleteBasket,
    };
  },
};
</script>
