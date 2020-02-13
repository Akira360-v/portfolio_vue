<template>
  <div id="nav">
    <div class="container">
      <div class="nav">
        <div class="nav__logo">
          <figure>
            <img src="@/assets/images/layout/main/logo.png" alt="logo" />
          </figure>
        </div>
        <div class="nav__block">
          <div class="nav__link">
            <router-link to="/">Услуги</router-link>
            <router-link to="/about">Работы</router-link>
            <router-link to="/about">Клиенты</router-link>
            <router-link to="/about">Контакты</router-link>
            <router-link to="/about">{{'proName'}}</router-link>
          </div>
          <div class="switch">
            <label>
              eng
              <input type="checkbox" />
              <input type="checkbox" v-model="isRuLocale" />
              <span class="lever"></span>
              rus
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '@/filters/localize.filter.js'

// import { mapGetters } from "vuex";
export default {
  data: () => ({
    name: '',
    isRuLocale: true
  }),
  computed: {
    // locale() {
    //   return 'ru-RU'
    // }
  },

  mounted() {
    // this.isRuLocale = this.info.locale === 'ru-RU'
    // this.isRuLocale = true === 'ru-RU'
  },
  methods: {
    // locale:this.isRuLocale ? "ru-RU" : 'en-US'
    // locale: this.isRuLocale ? 'ru-RU' : 'en-US'
  }
}
</script>

<style>
/* ---------------------------------- home ---------------------------------- */
/* ---------------------------------- Work ---------------------------------- */
/* --------------------------------- Клиенты -------------------------------- */
/* -------------------------------- Контакты -------------------------------- */
/* ----------------------------------- Ru ----------------------------------- */
/* ---------------------------- Связаться с нами ---------------------------- */
</style>
