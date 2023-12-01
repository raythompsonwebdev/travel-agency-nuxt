<template>
  <nav id="site-navigation">
    <button id="toggle-menu" @click="naviFunction">Menu</button>
    <ul id="site-inner-nav" class="hide">
      <li class="site-inner-nav-item">
        <NuxtLink to="/" class="nav-item r-item"> Home </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink to="/holiday-packages" class="nav-item r-item">
          Holiday Packages
        </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink to="/best-deals" class="nav-item r-item">
          Best Deal
        </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink to="/services-page" class="nav-item r-item">
          Service
        </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink to="/about-page" class="nav-item r-item"> About </NuxtLink>
      </li>
      <li class="site-inner-nav-item">
        <NuxtLink to="/contact-page" class="nav-item r-item">
          Contact
        </NuxtLink>
      </li>
    </ul>

    <language-select />
  </nav>
</template>

<script>
export default {
  name: "travel-nav",

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
