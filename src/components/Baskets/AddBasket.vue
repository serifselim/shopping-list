<template>
  <form @submit.prevent="setBasket">
    <input
      v-model="basketName"
      class="input"
      type="text"
      placeholder="Yeni Bir Sepet Ekleyin"
    />
    <button type="submit" class="btn">Sepet Ekle</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  setup() {
    const basketName = ref("");
    const { commit } = useStore();

    const setBasket = () => {
      const basket = {
        id: uuidv4(),
        title: basketName.value,
        items: [],
      };
      commit("addBasket", basket);
      basketName.value = "";
    };

    return {
      basketName,
      setBasket,
    };
  },
};
</script>
