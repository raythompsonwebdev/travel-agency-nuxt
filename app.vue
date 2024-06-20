<template>
  <!--wrapper-->
  <div id="wrapper">
    <travel-header />
    <travel-nav />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <travel-footer />
</template>

<style lang="scss">
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
.layout-enter-active,
.layout-leave-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}
.layout-enter-from,
.layout-leave-to {
  animation: going 0.5s;
}
</style>
