<template >
  <li class="flex items-center my-6">
    <a class="action-btn mr-3">
      <img src="../../assets/icon_cancel.svg" />
    </a>
    <span class="text-white text-2xl"
      >{{ basketItem.title }} (<span class="text-main font-bold"
        >+{{ basketItem.count }}</span
      >)</span
    >

    <a class="action-btn ml-auto">
      <img src="../../assets/icon_option.svg" />
    </a>
    <a class="action-btn ml-3">
      <img src="../../assets/icon_check.svg" />
    </a>
  </li>
</template>
<script>
export default {
  props: ["basketItem", "index"],
  setup({ basketItem, index }) {
    return {
      basketItem,
      index,
    };
  },
};
</script>
