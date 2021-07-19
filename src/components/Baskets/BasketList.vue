<template>
  <ul v-for="basket in baskets" :key="basket.id">
    <Basket :basket="basket" />
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
    const { getters } = useStore();

    return {
      baskets: getters.getBaskets,
    };
  },
};
</script>
