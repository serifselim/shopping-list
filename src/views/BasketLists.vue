<template>
  <Header />
  <section class="max-w-80-persent flex flex-col mx-auto">
    <AddBasket />
    <BasketList />
  </section>
</template>
<script>
import { AddBasket, BasketList, Header } from "../components";

export default {
  components: {
    AddBasket,
    Header,
    BasketList,
  },
};
</script>
