<template>
  <form
    style="transform: translateX(-50%)"
    class="fixed w-10/12 lg:w-4/12 inset-x-1/2 bottom-0 my-8"
    @submit.prevent="addItem"
  >
    <div class="flex">
      <input
        type="text"
        class="item-input mr-3 w-8/12"
        placeholder="Bir Ürün Ekle"
        v-model="title"
      />
      <input
        type="number"
        class="item-input ml-3 w-4/12"
        placeholder="Miktar"
        v-model="count"
      />
    </div>
    <button type="submit" class="btn">Ürün Ekle</button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  setup() {
    const store = useStore();
    let title = ref("");
    let count = ref(1);

    const addItem = () => {
      if (title.value != "" && count.value > 0) {
        const item = {
          id: uuidv4(),
          title: title.value,
          count: count.value,
          check: false,
        };

        store.dispatch("setAddItem", item);

        title.value = "";
        count.value = 1;
      } else {
        alert("Lütfen Geçerli Bir Ürün Giriniz !");
      }
    };

    return {
      title,
      count,
      addItem,
    };
  },
};
</script>
