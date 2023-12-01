<template>
  <article class="holiday-pkg-details">
    <h1 class="holiday-pkg-title">{{ holidaypackages.title }}</h1>
    <span class="holiday-pkg-price">
      <span class="holiday-pkg-offer">{{ holidaypackages.price }}</span>
    </span>
    <figure class="holiday-pkg-item">
      <img
        :src="holidaypackages.url"
        :alt="holidaypackages.title"
        class="holiday-pkg-img"
      />
      <figcaption class="holiday-pkg-caption">
        <p class="holiday-pkg-txt">
          Location :
          {{ holidaypackages.location }} Available :
          {{ holidaypackages.available }}
        </p>
        <p class="holiday-pkg-txt">{{ holidaypackages.text }}</p>
        <NuxtLink to="/holidaypackages/" class="holiday-pkg-link">
          View Details
        </NuxtLink>
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  name: "holidaypackage-card",
  props: {
    holidaypackages: {
      type: Object,
      default: null,
    },
  },

  flushCom() {
    this.$router.go();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss"></style>
