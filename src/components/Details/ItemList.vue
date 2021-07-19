<template>
  <ul
    class="w-10/12 mx-auto mt-12"
    v-for="(basketItem, index) in basketItems"
    :key="index"
  >
    <Item :basketItem="basketItem" :index="index" />
  </ul>
</template>
<script>
import Item from "./Item.vue";
import { useStore } from "vuex";
export default {
  components: {
    Item,
  },
  setup() {
    const { state } = useStore();

    return {
      basketItems: state.baskets[state.index].items,
    };
  },
};
</script>
