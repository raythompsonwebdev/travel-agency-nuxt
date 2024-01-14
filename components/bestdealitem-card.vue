<template>
  <article class="bestdeal-details">
    <figure v-if="bestdealitem" class="bestdeal-details-item">
      <NuxtImg
        :src="bestdealitem.url"
        class="bestdeal-details-img"
        :alt="bestdealitem.title"
        width="150"
        height="120"
      />
      <figcaption class="bestdeal-details-caption">
        <h1 class="bestdeal-details-title">{{ bestdealitem.title }}</h1>

        <span class="bestdeal-details-price">
          From
          <span class="bestdeal-offer">{{ bestdealitem.price }}</span>
        </span>
        <p class="bestdeal-text">Location: {{ bestdealitem.location }}.</p>
        <p class="bestdeal-text">Available: {{ bestdealitem.month }}.</p>
        <NuxtLink to="/best-deals/1" class="bestdeal-link">
          View Details
        </NuxtLink>
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  name: "bestdeal-card",
  props: {
    bestdealitem: {
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
};
</script>

<style lang="scss"></style>
