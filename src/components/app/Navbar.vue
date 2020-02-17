<template>
  <div id="nav">
    <div class="container">
      <div class="nav">
        <div class="nav__logo">
          <router-link to="/">
            <img src="@/assets/images/layout/main/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="nav__block">
          <div class="nav__link">
            <router-link to="/">{{$t('navServices')}}</router-link>
            <router-link to="/work">{{$t('navWork')}}</router-link>
            <router-link to="/customers">{{$t('navCustomers')}}</router-link>
            <router-link to="/contacts">{{$t('navContacts')}}</router-link>
          </div>
          <div class="nav__flag">
            <a href="#" @click="setLocale('ru')">
              <flag iso="ru"></flag>
            </a>
            <a href="#" @click="setLocale('en')">
              <flag iso="us"></flag>
            </a>
          </div>
        </div>

        <div class="modil__menu">
          <div class="fade_menu" @click="show = !show" v-bind:class="{ fade_clear: show }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <transition name="fade">
          <ul v-if="show">
            <li>qweqwe</li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Navbar',
  data: () => ({
    show: false
  }),
  methods: {
    setLocale(locale) {
      import(`../../locales/${locale}.json`).then(msgs => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
  }
}
</script>

<style>
</style>
