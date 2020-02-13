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
          </div>
          <div class="switch">
            <label>
              eng
              <input type="checkbox" />
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
// import { mapGetters } from "vuex";
export default {
  // data: () => ({
  //   name: ''
  // }),
  
  // // mounted() {
  // //   this.name = this.info.name
  // //   setTimeout(() => {
  // //     M.updateTextFields()
  // //   })
  // // },
  // computed: {
  //   ...mapGetters(['info'])
  // }
};
</script>

<style>
/* ---------------------------------- home ---------------------------------- */
/* ---------------------------------- Work ---------------------------------- */
/* --------------------------------- Клиенты -------------------------------- */
/* -------------------------------- Контакты -------------------------------- */
/* ----------------------------------- Ru ----------------------------------- */
/* ---------------------------- Связаться с нами ---------------------------- */
</style>
