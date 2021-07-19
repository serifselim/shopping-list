<template>
  <ul class="w-10/12 mx-auto mt-12" v-for="(item, index) in items" :key="index">
    <Item :item="item" :index="index" />
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
    const store = useStore();

    return {
      items: store.state.baskets[store.state.index].details,
    };
  },
};
</script>
