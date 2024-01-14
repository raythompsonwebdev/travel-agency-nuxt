<template>
  <div>
    <resultlist :products="searchResult" />
  </div>
</template>

<script>
import axios from "axios";
import resultlist from "@/components/result-list.vue";
export default {
  name: "result-page",
  props: ["results"],
  components: {
    resultlist,
  },
  data() {
    return {
      title: "Result page",
      cartItems: {},
      searchQuery: " ",
    };
  },

  computed: {
    searchResult() {
      if (this.cartItems) {
        return this.cartItems.filter((item) => item);
      } else {
        return this.cartItems;
      }
    },
  },

  async created() {
    const result = await axios.get("/api/bestdeals");
    const { data } = result;
    this.cartItems = data;
  },

  methods: {
    itemsSearched(id) {
      this.product = id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
