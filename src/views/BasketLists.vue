<template>
  <Header />
  <section class="w-10/12 flex flex-col mx-auto">
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
