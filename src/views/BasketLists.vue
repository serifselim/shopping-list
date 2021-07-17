<template>
  <Header />
  <section class="max-w-80-persent flex flex-col mx-auto">
    <AddBasket />
  </section>
</template>
<script>
import { AddBasket, Header } from "../components";

export default {
  components: {
    AddBasket,
    Header,
  },
};
</script>
