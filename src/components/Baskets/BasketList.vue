<template>
  <ul v-for="(basket, index) in baskets" :key="index">
    <Basket :title="basket.title" :index="index" />
  </ul>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Basket from "./Basket.vue";

export default {
  components: {
    Basket,
  },
  setup() {
    const store = useStore();

    return {
      baskets: computed(() => store.state.baskets),
    };
  },
};
</script>
<style lang="">
</style>