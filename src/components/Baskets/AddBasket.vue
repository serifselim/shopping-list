<template>
  <form @submit.prevent="setBasket">
    <input
      v-model="basketName"
      class="input"
      type="text"
      placeholder="Yeni Bir Sepet Ekleyin"
    />
    <button type="submit" class="btn bg-main">Sepet Ekle</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  setup() {
    const basketName = ref("");
    const { dispatch } = useStore();

    const setBasket = () => {
      if (basketName.value != "") {
        const basket = {
          id: uuidv4(),
          title: basketName.value,
          items: [],
        };
        dispatch("setAddBasket", basket);
        basketName.value = "";
      } else {
        alert("Lütfen Bir Sepet Giriniz !");
      }
    };

    return {
      basketName,
      setBasket,
    };
  },
};
</script>
