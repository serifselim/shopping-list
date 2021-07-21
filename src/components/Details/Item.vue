<template >
  <li class="flex items-center my-6">
    <a class="action-btn mr-3" @click.prevent="deleteItem">
      <img src="../../assets/icon_cancel.svg" />
    </a>
    <span
      :class="[basketItem.check ? 'line-through text-main' : '']"
      class="text-white text-2xl"
      >{{ basketItem.title }} (<span class="text-main font-bold"
        >+{{ basketItem.count }}</span
      >)</span
    >

    <a class="action-btn ml-auto" @click.prevent="setChangeTrigger">
      <img src="../../assets/icon_option.svg" />
    </a>

    <a
      v-if="!basketItem.check"
      class="action-btn ml-3"
      @click.prevent="checkItem"
    >
      <img src="../../assets/icon_check.svg" />
    </a>
    <a v-else class="action-btn ml-3" @click.prevent="checkItem">
      <img src="../../assets/icon_reverse.svg" />
    </a>
  </li>
</template>
<script>
import { useStore } from "vuex";

export default {
  props: ["basketItem"],
  setup({ basketItem }) {
    const { dispatch, commit } = useStore();

    const deleteItem = () => {
      dispatch("setDeleteItem", basketItem.id);
    };

    const checkItem = () => {
      commit("checkItem", basketItem.id);
      commit("setLocalStorage");
    };

    const setChangeTrigger = () => {
      dispatch("getChangeItem", basketItem.id);
    };

    return {
      deleteItem,
      checkItem,
      setChangeTrigger,
    };
  },
};
</script>
