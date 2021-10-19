<template>
  <router-link class="country-link" :to="{ name: 'country-show', params: {name: country.name}}">
    <li class="flag-item">
      <img class="flag-img" :src="country.flag" :alt="country.name" width="264" height="160"/>

      <div class="flag-info-box">
        <h2 class="flag-name">{{ country.name}}</h2>
        <p class="flag-data">Population: <span>{{ country.population}}</span></p>
        <p class="flag-data">Region: <span>{{ country.region }}</span></p>
        <p class="flag-data">Capital: <span>{{ country.capital}}</span></p>
      </div>
    </li>
  </router-link>
</template>

<script>
  export default {
    props: {
      country: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
.country-link {
  text-decoration: none;
}
.flag-item{
  width: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  background-color: #FFFFFF;
  border-radius: 5px;
  color: #111517;
}
.flag-img{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  object-fit: cover;
}
.flag-info-box{
  padding: 24px;
}
.flag-name{
  margin: 0;
  margin-bottom: 16px;
  font-size: 18px;
}
.flag-data{
  margin-top: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
}
.flag-data:not(:last-child){
  margin-bottom: 8px;
}
.flag-data span{
  opacity: 0.7;
}
</style>