<template>
  <article class="holiday-pkg-details">
    <h1 class="holiday-pkg-title">{{ holidaypackages.title }}</h1>
    <span class="holiday-pkg-price">
      <span class="holiday-pkg-offer">{{ holidaypackages.price }}</span>
    </span>
    <figure class="holiday-pkg-item">
      <NuxtImg
        :src="holidaypackages.url"
        :alt="holidaypackages.title"
        class="holiday-pkg-img"
        width="188"
        height="152"
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
  data() {
    return {
      // eslint-disable-next-line no-undef
      //bestdealitem,
    };
  },
  flushCom() {
    this.$router.go();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss"></style>
