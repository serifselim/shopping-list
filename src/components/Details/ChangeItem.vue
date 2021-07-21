<template>
  <form
    style="transform: translateX(-50%)"
    class="fixed w-10/12 lg:w-4/12 inset-x-1/2 bottom-0 my-8"
    @submit.prevent="setChangeItem"
  >
    <div class="flex">
      <input
        type="text"
        class="item-input mr-3 w-8/12"
        placeholder="Bir Ürün Ekle"
        v-model="item.title"
      />
      <input
        type="number"
        class="item-input ml-3 w-4/12"
        placeholder="Miktar"
        v-model="item.count"
      />
    </div>
    <button type="submit" class="btn">Ürünü Değiştir</button>
  </form>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const { state, dispatch } = useStore();
    const item = ref({
      id: "",
      title: "",
      count: 0,
    });

    item.value = state.changeItem;

    const setChangeItem = () => {
      dispatch("setChangeItem", item);
    };

    return {
      item,
      setChangeItem,
    };
  },
};
</script>
