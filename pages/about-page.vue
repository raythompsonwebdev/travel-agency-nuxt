<template>
  <div class="about" v-if="show">
    <button id="side-bar-btn" @click="aboutPageFunction">SIDE</button>

    <side-banner />

    <main id="page-content">
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim odit dolor
        sequi voluptatem esse doloribus libero commodi ea debitis id nostrum
        odio velit impedit vitae tenetur voluptates vero beatae excepturi. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit.Enim odit dolor sequi
        voluptatem esse doloribus libero commodi ea debitis id nostrum odio
        velit impedit vitae tenetur voluptates vero beatae excepturi.
      </p>
      <h3>Lorem Ipsum Dolor Sit Amet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim
        odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <h3>Lorem Ipsum Dolor Sit Amet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim
        odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Enim
        odit dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <h3>Lorem Ipsum Dolor Sit Amet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>

      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
        dolor sequi voluptatem esse doloribus libero commodi ea debitis id
        nostrum odio velit impedit vitae tenetur voluptates vero beatae
        excepturi.
      </p>
    </main>
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
useHead({
  title: "Travel Agency | About",
});

export default {
  name: "about-page",

  data() {
    return {
      show: "true",
    };
  },
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
