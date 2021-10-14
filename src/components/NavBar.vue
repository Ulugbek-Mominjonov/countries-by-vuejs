<template>
  <header class="site-header">
    <div class="container site-header__container">
      <router-link to="/" class="site-logo">Where in the world?</router-link>
      <button class="toggle-button" type="button">Dark Mode</button>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.site-header {
  z-index: 1;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
}
.site-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;
}
.site-logo {
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: #111517;
  text-decoration: none;
}
.toggle-button {
  display: flex;
  align-items: center;
  font-family: "Nunito Sans", "Arial", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.toggle-button::before {
  content: "";
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url(../assets/light_moon.svg);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center center;
}

@media screen and (max-width: 440px) {
  .site-header__container {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .site-logo {
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
  }
}
</style>