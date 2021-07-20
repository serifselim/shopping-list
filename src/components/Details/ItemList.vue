<template>
  <ul
    class="w-10/12 mx-auto mt-12"
    v-for="basketItem in basketItems"
    :key="basketItem.id"
  >
    <Item :basketItem="basketItem" :index="index" />
  </ul>
</template>
<script>
import { computed } from "vue";
import Item from "./Item.vue";
import { useStore } from "vuex";
export default {
  components: {
    Item,
  },
  setup() {
    const { getters } = useStore();

    return {
      basketItems: computed(() => getters.getItems),
    };
  },
};
</script>
