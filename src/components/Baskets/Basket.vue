<template>
  <li class="flex justify-between items-center my-5">
    <a class="action-btn">
      <img src="../../assets/icon_cancel.svg" alt="" />
    </a>
    <span class="text-white font-bold text-xl">{{ title }}</span>
    <router-link to="/details" @click="setIndex(index)" class="action-btn">
      <img src="../../assets/icon_go.svg" alt="" />
    </router-link>
  </li>
</template>
<script>
import { useStore } from "vuex";

export default {
  props: ["title", "index"],

  setup() {
    const store = useStore();

    const setIndex = (index) => {
      store.commit("changeIndex", index);
    };

    return {
      setIndex,
    };
  },
};
</script>
