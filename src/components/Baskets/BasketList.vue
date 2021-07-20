<template>
  <ul v-for="basket in baskets" :key="basket.id">
    <Basket :basket="basket" />
  </ul>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Basket from "./Basket.vue";

export default {
  components: {
    Basket,
  },
  setup() {
    const { state } = useStore();

    console.log(computed(() => state.baskets));

    return {
      baskets: computed(() => state.baskets),
    };
  },
};
</script>
