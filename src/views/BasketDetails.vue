<template>
  <Header />
  <Return />
  <ItemList />
  <AddItem />
</template>
<script>
import { Return, ItemList, Header, AddItem } from "../components";
export default {
  components: {
    Header,
    Return,
    ItemList,
    AddItem,
  },
};
</script>
