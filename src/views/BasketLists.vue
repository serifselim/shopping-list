<template>
  <Header />
  <section class="max-w-80-persent flex flex-col mx-auto">
    <Add />
    <List />
  </section>
</template>
<script>
import { Add, List, Header } from "../components";

export default {
  components: {
    Add,
    Header,
    List,
  },
};
</script>
