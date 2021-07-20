<template>
  <router-view />
</template>
<script>
import { useStore } from "vuex";
export default {
  setup() {
    const { commit } = useStore();
    const data = JSON.parse(localStorage.getItem("baskets"));

    if (data) {
      commit("getLocalStorage", data);
    }
  },
};
</script>
