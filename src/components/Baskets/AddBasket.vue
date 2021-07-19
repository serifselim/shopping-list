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
export default {
  setup() {
    const basketName = ref("");
    const store = useStore();

    const setBasket = () => {
      const basket = {
        title: basketName.value,
        items: [],
      };
      store.dispatch("setAddBasket", basket);
    };

    return {
      basketName,
      setBasket,
    };
  },
};
</script>
