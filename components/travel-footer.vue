<template>
  <!--footer-->
  <footer id="site-footer">
    <ul id="site-inner-footer">
      <li class="inner-footer-item">
        <NuxtLink to="/" class="footer-nav-item r-item"> Home </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/best-deals" class="footer-nav-item r-item">
          BestDeal
        </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/holiday-packages" class="footer-nav-item r-item">
          HolidayPackages
        </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/about-page" class="footer-nav-item r-item">
          AboutUs
        </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/contact-page" class="footer-nav-item r-item">
          Contact
        </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/services-page" class="footer-nav-item r-item">
          Services
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "travel-footer",
};
</script>

<style lang="scss"></style>
