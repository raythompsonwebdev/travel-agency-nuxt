<template>
  <div class="Home page">
    <button id="side-bar-btn" @click="sideBarFunction">SIDE</button>

    <aside id="home-page-sidebar" class="hide">
      <searchform />
      <!-- <destinations destinations="destinations" /> -->
      <destinations />
    </aside>

    <main id="home-page-content">
      <figure id="banner">
        <img :src="bannerImage" :alt="'banner-image'" id="banner-img" />
      </figure>

      <!-- <featuredholidays :featuredholidayitems="featuredholidayitems" /> -->
       <featuredholidays />
    </main>

    <div class="clearfix" />
  </div>
</template>

<script>

import bannerImage from "@/assets/images/travel-agency-website-banner-image.jpg";

export default {
  name: "HomePage",
  data() {
    return {
      show: true,
      bannerImage,
    };
  },
//   async created() {
//     const result = await axios.get("/api/home");
//     const { data } = result;
//     const { destinationitems } = data[0];
//     const { featuredholidayitems } = data[0];
//     this.destinationitems = destinationitems;
//     this.featuredholidayitems = featuredholidayitems;
//   },
  methods: {
    sideBarFunction(event) {
      event.preventDefault();
      const el = document.getElementById("home-page-sidebar");
      const box = el.getAttribute("class");
      if (box === "hide") {
        el.setAttribute("class", "show");
      } else {
        el.setAttribute("class", "hide");
      }
    },
  },
};
</script>

<style lang="scss"></style>