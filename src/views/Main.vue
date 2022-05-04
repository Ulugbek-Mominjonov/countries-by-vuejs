<template>
  <main>
    <div class="container main-container">
      <form class="search-form" method="GET">
        <BaseInput class="input search" type="text" placeholder="Search for a country"/>
        <SelectInput name="region-select"/>
      </form>
      <section class="flags">
        <ul class="flag-list">
          <CountryCard v-for="country in sortedCountries" :key="country.name" :country="country"/>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
// import store from '@/store/index';
import CountryCard from '@/components/CountryCard.vue';
import SelectInput from '@/components/SelectInput.vue';

  export default {
    components: {
      CountryCard,
      SelectInput
    },
    created() {
      this.$store.dispatch('fetchCountries')
    },
    computed: {
      ...mapState(['sortedCountries'])
    }
  }
</script>

<!--style -->
<style scoped>
.main-container {
  padding-top: 48px;
  padding-bottom: 48px;
}
.search-form{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  margin-bottom: 48px;
}
.input{
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 18px;
  border: none;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
}
.flag-list{
  display: grid;
  grid-template-columns: repeat(auto-fit, 264px);
  gap: 70px;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

@media screen and (max-width: 530px) {
  .search-form {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 440px) {
  .input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 14px;
  border: none;
  background: #FFFFFF;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
}
}
</style>
