<template>
  <section class="country-section">
    <div class="container country-container">
      <router-link class="back-link" to="/"><button class="back-button">Back</button></router-link>
      <div class="country-info">
        <img class="country-info__img" :src="country.flag" :alt="country.area" width="506" height="401">
        <div class="country-info__text">
          <h2 class="country-info__title">{{ country.name}}</h2>
          <div class="country-info__details">
            <ul class="country-info__list country-info__list--left">
              <li class="country-info__item"><span>Native Name: </span>{{ country.nativeName}}</li>
              <li class="country-info__item"><span>Population: </span>{{ country.population}}</li>
              <li class="country-info__item"><span>Region: </span>{{ country.region}}</li>
              <li class="country-info__item"><span>Sub Region: </span>{{ country.subregion}}</li>
              <li class="country-info__item"><span>Capital: </span>{{ country.capital}}</li>
            </ul>

            <ul class="country-info__list country-info__list--right">
              <li class="country-info__item"><span>Top Level Domain: </span>
                <ul class="sub-list">
                  <li v-for="item in country.topLevelDomain" :key="item">{{ item }}</li>
                </ul>
              </li>
              <li class="country-info__item"><span>Currencies: </span>
                <ul class="sub-list">
                  <li v-for="item in country.currencies" :key="item.name">{{ item.name }}</li>
                </ul>
              </li>
              <li class="country-info__item"><span>Languages: </span>
                <ul class="sub-list">
                  <li v-for="item in country.languages" :key="item.name">{{ item.name }}</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="country-info__border-countries">
            <strong class="country-info__border-title">Border Countries:</strong>
            <ul class="borders-list">
                <li v-for="item in country.borders" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    props: ['name'],
    created () {
      this.$store.dispatch('fetchNameCountry', this.name)
    },
    computed: {
      ...mapState(['country'])
    }
  }
</script>

<style scoped>
.country-section {
  flex-grow: 1;
  background-color: #fff;
}
.country-container{
  padding-top: 50px;
  margin-bottom: 300px;
}
.back-link {
  text-decoration: none;
}
.back-button{
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Nunito Sans", "Arial", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #111517;
  border: none;
  background: transparent;
}
.back-button::before {
  content: "";
  width: 14px;
  height: 14px;
  margin-right: 10px;
  background-image: url("../assets/back.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.country-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
}
.country-info__img {
  margin-right: 30px;
}
.country-info__text {
  width: 600px;
}
.country-info__title {
  margin-top: 0;
  margin-bottom: 23px;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  color: #111517;
}
.country-info__details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 65px;
}
.country-info__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.country-info__item {
  display: flex;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #111517;
}
.country-info__item > span {
  font-weight: 800;
  margin-right: 7px;
}
.sub-list {
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.sub-list > li {
  margin-right: 3px;
}
.sub-list > li:not(:last-child)::after {
  content: ",";
}
.country-info__border-countries {
  display: flex;
}
.country-info__border-title{
  white-space: nowrap;
  margin-right: 7px;
}
.borders-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.borders-list > li {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 23px;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #111517;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
}
</style>