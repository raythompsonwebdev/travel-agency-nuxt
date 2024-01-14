<template>
  <div class="HolidayPackages">
    <filter-nav
      :seasons="seasons"
      :prices="prices"
      :locations="locations"
      :ratings="ratings"
      @seasonClick="itemsSearched"
    />

    <!---main content-->
    <main id="holiday-items">
      <!--HolidayPackage Item component -->
      <!-- <transition-group name="fade" tag="div"> -->
      <div v-for="holidaypackage in filteredPacks" :key="holidaypackage.id">
        <holidaypackage-card :holidaypackages="holidaypackage" />
      </div>
      <!-- </transition-group> -->
    </main>
  </div>
</template>

<script>
import holidaypackages from "@/assets/json/holidaypackages.json";
import {
  locations,
  prices,
  ratings,
  seasons,
} from "@/assets/json/filternav.json";

export default {
  name: "holiday-packages",
  data() {
    return {
      seasons,
      ratings,
      locations,
      prices,
      selected: " ",
      holidaypackages,
      count: 10,
    };
  },
  computed: {
    filteredPacks() {
      if (!this.selected) {
        return this.holidaypackages;
      } else if (
        "winter" === this.selected ||
        "summer" === this.selected ||
        "spring" === this.selected ||
        "autumn" === this.selected
      ) {
        return this.holidaypackages.filter(
          (holidaypackageitem) => holidaypackageitem.season === this.selected,
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
        return this.holidaypackages.filter(
          (holidaypackageitem) => holidaypackageitem.location === this.selected,
        );
      } else if (
        "one" === this.selected ||
        "two" === this.selected ||
        "three" === this.selected ||
        "four" === this.selected ||
        "five" === this.selected
      ) {
        return this.holidaypackages.filter(
          (holidaypackageitem) => holidaypackageitem.rating === this.selected,
        );
      } else if (
        "$399 - $499" === this.selected ||
        "$499 - $599" === this.selected ||
        "$599 - $699" === this.selected ||
        "$699 - $999" === this.selected ||
        "$999 +" === this.selected
      ) {
        return this.holidaypackages.filter(
          (holidaypackageitem) => holidaypackageitem.price === this.selected,
        );
      } else {
        return this.holidaypackages;
      }
    },
  },
  // async created() {
  //   // const result = await axios.get("/api/holidaypackages");
  //   // const { data } = result;
  //   this.holidaypackageitems = navdata;
  // },
  methods: {
    itemsSearched(id) {
      this.selected = id;
    },
  },
};
</script>

<style lang="scss"></style>
