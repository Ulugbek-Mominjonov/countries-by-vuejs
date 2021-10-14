import Vue from 'vue'
import Vuex from 'vuex'
import CountriesService from '@/services/CountriesService.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    sortedCountries: [],
    countriesTotal: 0,
    country: {},
    filtered: false,
    seached: false
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries
      state.sortedCountries = countries
    },
    SEARCH_COUNTRIES(state, countries) {
      state.sortedCountries = countries
    },
    SET_COUNTRIES_TOTAL(state, countriesTotal) {
      state.countriesTotal = countriesTotal
    },
    SET_COUNTRY(state, countryName) {
      state.country = countryName
    }
  },
  actions: {
    fetchCountries({commit}) {
      return CountriesService.getEvents()
        .then(response => {
          console.log(response.data);
          commit('SET_COUNTRIES', response.data)
        }) 
    },
    fetchSortCountry({ commit, state, getters }, name) {
      let countries = getters.searchCountries(name) 
      if(name === ''){
        commit('SET_COUNTRIES', state.countries)
      } else {
        commit('SEARCH_COUNTRIES', countries)
      }
    },
    fetchFilterCountry({ commit, state, getters}, region) {
      let countries = getters.filterByRegion(region)
      if(region === '') {
        commit('SET_COUNTRIES', state.countries)
      } else {
        commit('SEARCH_COUNTRIES', countries)
      }
    },
    fetchNameCountry({ commit }, name) {
      return CountriesService.getSearchName(name)
        .then(response => {
          console.log(response.data[0]);
          commit('SET_COUNTRY', response.data[0])
        })
    }
  },  
  modules: {
  },
  getters: {
    searchCountries: state => name => {
      let regex = new RegExp(`${name}`, 'i')
      return state.countries.filter(country => regex.test(country.name))
    },
    filterByRegion: state => region => {
      return state.countries.filter(country => country.region === region)
    }
  }
})
