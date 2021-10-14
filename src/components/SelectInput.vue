<template>
  <select class="input region" @input="updateValue">
    <option value="">Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</template>

<script>
  export default {
    methods: {
      updateValue(event) {
        console.log(event.target.value);
        this.$store.dispatch('fetchFilterCountry', event.target.value)
      }
    }
  }
</script>

<style scoped>
.region{
  width: 200px;
  padding-left: 24px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #111517;
  color: #848484;
}
option {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #848484;
}
@media screen and (max-width: 530px) {
  .region {
    width: 60%;
    margin: 0 auto;
  }
}
</style>