<template>
  <div v-if="singleholidaypackage" class="singleholidaypackage">
    <article class="single-item-details">
      <h2 class="single-item-title">{{ singleholidaypackage[0].title }}</h2>
      <h2 class="single-item-title">{{ id }}</h2>
      <span class="single-item-price">
        from
        <span class="single-item-offer">{{
          singleholidaypackage[0].price
        }}</span>
      </span>
      <p class="single-item-text">{{ singleholidaypackage[0].text }}</p>

      <figure class="single-item">
        <img
          class="single-item-img"
          :src="singleholidaypackage[0].url"
          :alt="singleholidaypackage[0].title"
        />
        <figcaption class="single-item-caption">
          <h3 class="single-item-location">
            Location : {{ singleholidaypackage[0].location }}
          </h3>
          <p class="single-item-rating">
            Rating: {{ singleholidaypackage[0].rating }} Star
          </p>
        </figcaption>
      </figure>
    </article>
  </div>
</template>

<!-- <script setup lang="ts">
const route = useRoute()
const { data: mountain } = await useFetch(`/api/mountains/${route.params.slug}`)
</script> -->

<script setup>
// eslint-disable-next-line no-undef
const { id } = useRoute().params;
</script>

<script>
import singleholidaypackage from "@/assets/json/holidaypackages.json";

export default {
  name: "holiday--package",
  title: "Holiday Package Page",
  data() {
    return {
      singleholidaypackage,
      id,
    };
  },
  methods: {
    // async initData() {
    //   const result = await axios.get(
    //     `/api/holidaypackage/${parseInt(this.itemid)}`
    //   );
    //   const { data } = result;
    //   this.singleholidaypackage = data;
    // },

    initData() {
      const result = singleholidaypackage.filter((single) => single.id === id);
      this.singleholidaypackage = result;
    },
  },
  created() {
    this.initData();
  },
  beforeRouteUpdate(to, from, next) {
    this.initData();
    next();
  },
};
</script>

<style lang="scss">
.singleholidaypackage {
  border: 2px #ededeb solid;
  margin: 2em auto;
  display: block;
  width: 90%;
  padding: 0.5em;
}

.single-item-details {
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}
.single-item-title {
  text-align: center;
  display: block;
  line-height: 50px;
  color: #1485c9;
  font-size: 1.4em;
  margin: 0;
}
.single-item-text {
  margin: 0;
  width: 100%;
  line-height: 1.6em;
  font-size: 1em;
  align-self: flex-start;
  text-align: center;
}
.single-item-price {
  font-size: 1.1em;
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #9e9e9e;
}
.single-item-offer {
  display: inline-block;
  font-weight: bold;
  color: #ff6d00;
}
.single-item {
  margin: 0;
}
.single-item-img {
  width: auto;
  display: block;
  margin: 0.5em auto;
}
.single-item-caption {
  width: 100%;
  display: inline-block;
  margin-bottom: 0.5em;
}
.single-item-location {
  margin: 0;
  width: 100%;
  line-height: 40px;
  font-size: 1em;
  text-align: center;
  color: #1485c9;
}
.single-item-rating {
  font-size: 0.9em;
  margin: 0;
  line-height: 35px;
  color: #9e9e9e;
  text-transform: capitalize;
}
.single-item-button {
  width: 80%;
  text-align: center;
  color: #ffffff;
  height: auto;
  font-size: 1em;
  text-decoration: none;
  padding: 0;
  margin: 0 auto;
  line-height: 45px;
  border: 1px solid #ffffff;
  display: block;
  &:hover {
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
