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
            <router-link to="/">{{$t('navServices')}}</router-link>
            <router-link to="/about1">{{$t('navWork')}}</router-link>
            <router-link to="/about2">{{$t('navCustomers')}}</router-link>
            <router-link to="/about3">{{$t('navContacts')}}</router-link>
            <div class="nav__flag">
              <a href="#" @click="setLocale('ru')"><flag iso="ru"></flag></a>
              <a href="#" @click="setLocale('en')"><flag iso="us"></flag></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    setLocale(locale){
      import(`../../locales/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
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
