<template>
  <div class="flex items-center max-w-80-persent mx-auto my-4">
    <router-link to="/lists" class="action-btn mr-4">
      <img src="../../assets/icon_return.svg" alt="" />
    </router-link>
    <h1 class="text-white text-3xl font-bold -mt-1">{{ basket.title }}</h1>
  </div>
</template>
<script>
// import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const basket = store.state.baskets[store.state.index];

    return {
      basket,
    };
  },
};
</script>
