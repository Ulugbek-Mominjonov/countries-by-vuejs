<template>
  <input
      @input="updateValue"
    />
</template>

<script>
  export default {
    methods: {
      updateValue(event) {
        console.log(event.target.value);
        this.$store.dispatch('fetchSortCountry', event.target.value)
      }
    }
  }
</script>

<style  scoped>
.search{
  width: 480px;
  padding-left: 76px;
  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  background-position: 32px center;
}
.search::placeholder{
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #848484;
}
@media screen and (max-width: 760px) {
  .search {
    width: 50%;
  }
}
@media screen and (max-width: 530px) {
  .search {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-left: 65px;
  }
}
</style>