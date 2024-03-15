<template>
  <div class="about">
    <button id="side-bar-btn" @click="aboutPageFunction">SIDE</button>

    <side-banner />

    <main id="page-content">
      <h2 class="page-content-title">Lorem Ipsum Dolor Sit Amet</h2>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim odit sequi
        voluptatem esse doloribus libero commodi ea debitis id nostrum nostrum
        odio velit impedit vitae tenetur voluptates vero beatae excepturi. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit.Enim odit dolor sequi
        voluptatem esse doloribus libero commodi ea debitis id nostrum odio
        velit impedit vitae tenetur voluptates vero beatae excepturi.
      </p>
      <h3 class="page-content-title">Proin vehucula rutrum hendrerit.</h3>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <h3 class="page-content-title">
        Pellentsque ut ellit sagittis fringilla.
      </h3>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <h3 class="page-content-title">
        Lorem ipsum dolor sit amet consectetur.
      </h3>

      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim
        odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <h3 class="page-content-title">
        Mosecenas suscioit fringilla nibh a interdum.
      </h3>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <h3 class="page-content-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h3>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <p class="page-content-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
    </main>
  </div>
</template>

<script>
export default {
  name: "about-page",

  methods: {
    aboutPageFunction(event) {
      event.preventDefault();

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
