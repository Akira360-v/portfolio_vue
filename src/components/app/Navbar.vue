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
          <div class="cross__menu" @click="show = !show" v-bind:class="{ cross__clear: show }">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="nav__link" v-bind:class="{ mobil__menu: show }">
            <router-link to="/">{{$t('navServices')}}</router-link>
            <router-link to="/work">{{$t('navWork')}}</router-link>
            <router-link to="/skill">{{$t('navSkill')}}</router-link>
            <router-link to="/contacts">{{$t('navContacts')}}</router-link>
            <div class="nav__flag">
              <a href="#" @click="setLocale('ru')">
                <flag iso="ru"></flag>
              </a>
              <a href="#" @click="setLocale('en')">
                <flag iso="us"></flag>
              </a>
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
