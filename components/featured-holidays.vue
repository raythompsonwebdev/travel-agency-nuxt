<template>
  <!--Featured Holiday Package-->
  <section id="holiday-offers" v-if="featuredholidayitems">
    <h2 id="holiday-offers-title">Featured Holiday Package</h2>

    <div
      v-for="featuredholiday in featuredholidayitems"
      :key="featuredholiday.id"
      class="offer-item-div"
    >
      <figure class="offer-item">
        <img
          :src="featuredholiday.url"
          :alt="'images'"
          class="offer-item-img"
        />

        <figcaption class="offer-item-caption">
          <p class="offer-item-text">{{ featuredholiday.text }}</p>
          <p class="offer-item-text">
            from only
            <span class="offer-item-price">{{ featuredholiday.price }}</span>
            per person
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="clearfix" />
  </section>
</template>

<script>
export default {
  name: "featured-holidays",
  props: {
    featuredholidayitems: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      // featuredholidayitems,
    };
  },
  computed: {
    holidayImage(url) {
      // eslint-disable-next-line no-undef
      return require(`${url}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
