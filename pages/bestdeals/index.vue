<template>
  <div class="BestDeals">
    <filternav
      :seasons="seasons"
      :prices="prices"
      :locations="locations"
      :ratings="ratings"
      @seasonClick="itemsSearched"
    />
    <main id="holiday-items">
      <!-- <transition-group name="fade" tag="div"> -->
        <div v-for="bestdealitem in filteredPacks" :key="bestdealitem.id">
          <bestdealitemcard :bestdealitem="bestdealitem" />
        </div>
      <!-- </transition-group> -->
    </main>


  </div>
</template>

<script>


import bestdealitems from "@/assets/json/bestdeals.json";
import {locations, prices, ratings, seasons} from "@/assets/json/filternav.json";



export default {
  name: "bestdeals", 
  data() {
    return {
      seasons,
      ratings,
      locations,
      prices,
      selected: " ",
      //bestdealitems: [],
      bestdealitems,
    };
  },
  computed: {
    filteredPacks() {
      if (!this.selected) {
        return this.bestdealitems;
      } else if (
        "winter" === this.selected ||
        "summer" === this.selected ||
        "spring" === this.selected ||
        "autumn" === this.selected
      ) {
        return this.bestdealitems.filter(
          (bestdealitem) => bestdealitem.season === this.selected
        );
      } else if (
        "london" === this.selected ||
        "paris" === this.selected ||
        "madrid" === this.selected ||
        "dubai" === this.selected ||
        "rome" === this.selected ||
        "goldcoast" === this.selected ||
        "singapore" === this.selected ||
        "toronto" === this.selected ||
        "tajmahal" === this.selected
      ) {
        return this.bestdealitems.filter(
          (bestdealitem) => bestdealitem.location === this.selected
        );
      } else if (
        "one" === this.selected ||
        "two" === this.selected ||
        "three" === this.selected ||
        "four" === this.selected ||
        "five" === this.selected
      ) {
        return this.bestdealitems.filter(
          (bestdealitem) => bestdealitem.rating === this.selected
        );
      } else if (
        "$399 - $499" === this.selected ||
        "$499 - $599" === this.selected ||
        "$599 - $699" === this.selected ||
        "$699 - $999" === this.selected ||
        "$999 +" === this.selected
      ) {
        return this.bestdealitems.filter(
          (bestdealitem) => bestdealitem.price === this.selected
        );
      } else {
        return this.bestdealitems;
      }
    },
  },
  // async created() {
  //   // const result = await axios.get("/api/bestdeals");
  //   // const { data } = result;
  //   this.bestdealitems = data;
  // },
 
  
  methods: {
    itemsSearched(id) {
      this.selected = id;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

</style>