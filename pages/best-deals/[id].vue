<template>
  <!-- <transition name="fade" tag="div"> -->
    <div v-if="singlebestdeal" class="singlebestdeal" key="/best">
      <article class="single-best-details">
        <h1 class="single-best-title">{{ singlebestdeal[0].title }}</h1>        
        <h1 class="single-best-title">{{ id }}</h1> 
        <span class="single-best-price">
          from
          <span class="single-best-offer">{{ singlebestdeal[0].price }}</span>
        </span>
        <p class="single-best-txt">{{ singlebestdeal[0].text }}</p>

        <figure class="single-best-item">
          <img
            :src="singlebestdeal[0].url"
            :alt="singlebestdeal[0].title"
            class="single-best-img"
          />
          <figcaption class="single-best-caption">
            <h3 class="single-best-location">
              Location : {{ singlebestdeal[0].location }}
            </h3>
            <p class="single-best-rating">
              Rating: {{ singlebestdeal[0].rating }} Star
            </p>
          </figcaption>
        </figure>
      </article>
    </div>

  <!-- </transition> -->
</template>


<!-- <script setup lang="ts">
const route = useRoute()
const { data: mountain } = await useFetch(`/api/mountains/${route.params.slug}`)
</script> -->

<!-- <script setup>
  const { id } = useRoute().params
</script> -->

<script>

import singlebestdeal from "@/assets/json/bestdeals.json";
const { id } = useRoute().params

  export default {
    name: "bestdeal",
    data() {
      return {
        singlebestdeal,
        id,
      };
    },
    methods: {
      // async initData() {
      //   const result = await axios.get(`/api/bestdeal/${parseInt(this.itemid)}`);
      //   const { data } = result;
      //   this.singlebestdeal = data;
      // },

      initData() {
      const result = singlebestdeal.filter((single)=>{
        return single.id === id;        
      }); 
      this.singlebestdeal = result;
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.singlebestdeal {
  border: 2px #ededeb solid;
  margin: 2em auto;
  display: block;
  width: 90%;
  padding: 0.5em;
}
.single-best-details {
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}
.single-best-title {
  text-align: center;
  display: block;
  line-height: 50px;
  color: #1485c9;
  font-size: 1.4em;
  margin: 0;
}
.single-best-txt {
  margin: 0;
  width: 100%;
  line-height: 1.6em;
  font-size: 1em;
  align-self: flex-start;
  text-align: center;
}
.single-best-price {
  font-size: 1.1em;
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #9e9e9e;
}
.single-best-offer {
  display: inline-block;
  font-weight: bold;
  color: #ff6d00;
}

.single-best-item {
  margin: 0;
}
.single-best-img {
  width: auto;
  display: block;
  margin: 0.5em auto;
}
.single-best-caption {
  width: 100%;
  display: inline-block;
  margin-bottom: 0.5em;
}
.single-best-location {
  margin: 0;
  width: 100%;
  line-height: 40px;
  font-size: 1em;
  text-align: center;
  color: #1485c9;
}
.single-best-rating {
  font-size: 0.9em;
  margin: 0;
  line-height: 35px;
  color: #9e9e9e;
  text-transform: capitalize;
}
.single-best-submit {
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
