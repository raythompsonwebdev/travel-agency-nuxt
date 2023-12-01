<template>
    <!--wrapper-->
    <div id="wrapper">
        <travelheader />
        <travelnav />     
        <div>
            <slot />
        </div>       
  
    </div>
  
    <footer id="site-footer">
        <ul id="site-inner-footer">
        <li class="inner-footer-item">
            <NuxtLink to="/" class="footer-nav-item r-item"> Home </NuxtLink>
        </li>
        <li class="inner-footer-item">
            <NuxtLink to="/BestDeal" class="footer-nav-item r-item">
            BestDeal
            </NuxtLink>
        </li>
        <li class="inner-footer-item">
            <NuxtLink to="/AboutUs" class="footer-nav-item r-item">
            AboutUs
            </NuxtLink>
        </li>
        <li class="inner-footer-item">
            <NuxtLink to="/HolidayPackages" class="footer-nav-item r-item">
            HolidayPackages
            </NuxtLink>
        </li>
        <li class="inner-footer-item">
            <NuxtLink to="/Contact" class="footer-nav-item r-item">
            Contact
            </NuxtLink>
        </li>
        <li class="inner-footer-item">
            <NuxtLink to="/Services" class="footer-nav-item r-item">
            Services
            </NuxtLink>
        </li>
        </ul>
    </footer>
    
  </template>

  <script>
  
  export default {
    name: "App",
  };
  </script>

  <style lang="scss">
    @import "assets/scss/main";
    @keyframes coming {
        from {
        transform: translateX(-200px);
        opacity: 0;
        }
        to {
        transform: translateX(0px);
        opacity: 1;
        }
    }
    @keyframes going {
        from {
        transform: translateX(0);
        opacity: 1;
        }
        to {
        transform: translateX(-200px);
        opacity: 0;
        }
    }
    .anim-enter-active {
        animation: coming 0.5s;
        animation-delay: 0.5s;
        opacity: 0;
    }
    .anim-leave-active {
        animation: going 0.5s;
    }
  </style>
  