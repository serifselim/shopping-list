<template>
  <div>
    <Header />
    <Return />
    <ItemList />
    <div v-if="!isChange">
      <AddItem />
    </div>
    <div v-else>
      <ChangeItem />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { Return, ItemList, Header, AddItem, ChangeItem } from "../components";
import { useStore } from "vuex";
export default {
  components: {
    Header,
    Return,
    ItemList,
    AddItem,
    ChangeItem,
  },
  setup() {
    const { state } = useStore();

    return {
      isChange: computed(() => state.isChange),
    };
  },
};
</script>
