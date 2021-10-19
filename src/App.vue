<template>
  <div id="app">
    <NavBar/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;800&display=swap');
html {
  box-sizing: border-box;
  height: 100%;
}
*, *::after, *::before {
  box-sizing: inherit;
}
body {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: "Nunito Sans", "Arial", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #111517;
  background-color: #F2F2F2;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.container{
  width: 100%;
  max-width: 1340px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
}

/* dark mode  */
body.dark {
  background-color: #202C36;
}
.dark .site-logo, .dark .toggle-button,.dark main .flag-item, .dark .country-section .back-button {
  color: #fff;
}
.dark .site-header, .dark .input.search, .dark .input.region, .dark main .flag-item, .dark .country-section .back-button, .dark .borders-list > li {
  background-color: #2B3844;
}
.dark .input.search::placeholder, .dark .input.region, .dark select option, .dark .country-info__title, .dark .country-info__item, .dark .country-info__border-title, .dark .borders-list > li {
  color: #fff !important;
}
.dark .input.search {
  background-image: url("./assets/search_dark.svg");
}
.dark .toggle-button::before {
  background-image: url(./assets/dark.png);
}
.dark main, .dark .country-section {
  background: #202C36 !important;
}
/* .dark {
  background-image: url(./assets/search_dark.svg);
} */
.dark .country-section .back-button::before {
  background-image: url("./assets/back_dark.png");
}

</style>
