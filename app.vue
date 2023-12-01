<template>
  <!--wrapper-->
  <div id="wrapper">
    <travelheader />
    <travelnav />    
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
  </div>  
  <travelfooter />
</template>


<style lang="scss">
//@import "assets/scss/main";
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
.page-enter-active,
.page-leave-active  {
    animation: coming 0.5s;
    animation-delay: 0.5s;
    opacity: 0;
}
.page-enter-from,
.page-leave-to {
    animation: going 0.5s;
}
</style>