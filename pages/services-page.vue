<template>
  <div class="services">
    <button id="side-bar-btn" @click="servicePageFunction">SIDE</button>

    <side-banner />

    <main id="page-content">
      <h2 class="page-content-title">Lorem Ipsum Dolor Sit Amet</h2>

      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Enim odit dolor sequi voluptatem esse doloribus libero commodi ea
        debitis id nostrum odio velit impedit vitae tenetur voluptates vero
        beatae excepturi.
      </p>
      <br />
      <div class="services-card">
        <h3 class="services-card-title">Nunc quis purus sed lorem</h3>
        <figure class="services-card-item">
          <img
            class="service-box-img"
            :src="customerService"
            :alt="'travel-agency-website-customer-service-image'"
          />
          <figcaption class="services-card-caption">
            <p class="services-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>
            <a :href="'http://www.google.com'" class="services-card-link"
              >Learn More</a
            >
          </figcaption>
        </figure>
      </div>

      <div class="services-card">
        <h3 class="services-card-title">Nunc quis purus sed lorem</h3>
        <figure class="services-card-item">
          <img
            class="service-box-img"
            :src="busTours"
            :alt="'travel-agency-website-bus-tours-image'"
          />

          <figcaption class="services-card-caption">
            <p class="services-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>

            <a :href="'http://www.google.com'" class="services-card-link"
              >Learn More</a
            >
          </figcaption>
        </figure>
      </div>

      <div class="services-card">
        <h3 class="services-card-title">Nunc quis purus sed lorem</h3>
        <figure class="services-card-item">
          <img
            class="service-box-img"
            :src="hotelRoom"
            :alt="'travel-agency-website-hotel-room-image'"
          />
          <figcaption class="services-card-caption">
            <p class="services-card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit dolor sequi voluptatem esse doloribus libero commodi ea
              debitis id nostrum odio velit impedit vitae tenetur voluptates
              vero beatae excepturi.
            </p>
            <a :href="'http://www.google.com'" class="services-card-link"
              >Learn More</a
            >
          </figcaption>
        </figure>
      </div>

      <div class="clearfix" />
      <br />
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Enim odit dolor sequi voluptatem esse doloribus libero commodi ea
        debitis id nostrum odio velit impedit vitae tenetur voluptates vero
        beatae excepturi.
      </p>

      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Enim odit dolor sequi voluptatem esse doloribus libero commodi ea
        debitis id nostrum odio velit impedit vitae tenetur voluptates vero
        beatae excepturi
      </p>
    </main>
  </div>
</template>

<script>
import customerService from "@/assets/images/service/travel-agency-website-customer-service-image.jpg";
import busTours from "@/assets/images/service/travel-agency-website-bus-tours-image.jpg";
import hotelRoom from "@/assets/images/service/travel-agency-website-hotel-room-image.jpg";

export default {
  name: "service-page",
  data() {
    return {
      show: "true",
      customerService,
      busTours,
      hotelRoom,
    };
  },
  methods: {
    servicePageFunction() {
      // event.preventDefault();
      const el = document.getElementById("about-page-banner");
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
