<template>
  <ul v-for="(basket, index) in baskets" :key="index">
    <Basket :title="basket.title" :index="index" />
  </ul>
</template>
<script>
import { useStore } from "vuex";
import Basket from "./Basket.vue";

export default {
  components: {
    Basket,
  },
  setup() {
    const { state } = useStore();

    return {
      baskets: state.baskets,
    };
  },
};
</script>
