<template>
  <!--Destinations-->
  <section class="holiday-search-sidebar">
    <h2 id="holiday-search-title">Top Destinations</h2>
    <div
      v-for="destination in destinations[0].destinations"
      :key="destination.id"
      class="destinations"
    >
      <figure class="destination">
        <img
          class="destination-img"
          :src="destination.url"
          :alt="`Destination : ${destination.country}`"
        />

        <figcaption class="destination-caption">
          <h3 class="destination-title">{{ destination.city }}</h3>
          <p class="destination-txt">{{ destination.country }}</p>
          <p class="destination-txt">{{ destination.hotels }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
import destinations from "@/assets/json/destinations.json";
export default {
  name: "destinations",
  // setup(props) {
  //   // setup() receives props as the first argument.
  //   console.log(props.destinations)
  // },
  data() {
    return {
      destinations,
    };
  },
};
</script>

<style lang="scss"></style>
