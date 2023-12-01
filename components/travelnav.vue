<template>
  <nav id="site-navigation">
    <button id="toggle-menu" @click="naviFunction">Menu</button>
    <ul id="site-inner-nav" class="hide">
      <li class="site-inner-nav-item">
        <NuxtLink
          to="/"
          class="nav-item r-item"
         
        >
          Home
        </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink
          to="/holidaypackages"
          class="nav-item r-item"
          
        >
          Holiday Packages
        </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink
          to="/bestdeals"
          class="nav-item r-item"
          
        >
          Best Deal
        </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink
          to="/services"
          class="nav-item r-item"
        >
          Service
        </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink
          to="/about"
          class="nav-item r-item"
         
        >
          About
        </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink
          to="/contact"
          class="nav-item r-item"
       
        >
          Contact
        </NuxtLink>
      </li>
    </ul>

    <languageselect />

  </nav>
</template>

<script>

export default {
  name: "travelnav",

  methods: {
    naviFunction(e) {
      e.preventDefault();
      const slideoutNav = document.getElementById("site-inner-nav");
      if (slideoutNav.classList.contains("show")) {
        slideoutNav.setAttribute("class", "hide");
      } else {
        slideoutNav.setAttribute("class", "show");
      }
    },
    InlineMenuButtonClickHandler() {
      const slideoutMenu = document.getElementById("site-inner-nav");

      const box = slideoutMenu.getAttribute("class");
      if (box === "hide") {
        slideoutMenu.setAttribute("class", "show");
      } else {
        slideoutMenu.setAttribute("class", "hide");
      }
    },
  },
};
</script>

<style lang="scss"></style>
