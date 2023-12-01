<template>
  <!--footer-->
  <footer id="site-footer">
    <ul id="site-inner-footer">
      <li class="inner-footer-item">
        <NuxtLink to="/" class="footer-nav-item r-item"> Home </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/bestdeals" class="footer-nav-item r-item">
          BestDeal
        </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/about" class="footer-nav-item r-item">
          AboutUs
        </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/holidaypackages" class="footer-nav-item r-item">
          HolidayPackages
        </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/contact" class="footer-nav-item r-item">
          Contact
        </NuxtLink>
      </li>
      <li class="inner-footer-item">
        <NuxtLink to="/services" class="footer-nav-item r-item">
          Services
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "TravelFooter",
};
</script>

<style lang="scss"></style>
