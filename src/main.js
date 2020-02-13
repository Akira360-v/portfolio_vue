import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/index.sass'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

firebase.initializeApp = {
  apiKey: "AIzaSyDhdVQEqO9ys0ekUkrOwdGYVQ_XSUTKjos",
  authDomain: "akira360-v.firebaseapp.com",
  databaseURL: "https://akira360-v.firebaseio.com",
  projectId: "akira360-v",
  storageBucket: "akira360-v.appspot.com",
  messagingSenderId: "418197468305",
  appId: "1:418197468305:web:795cc66ad9a27e2099bb30",
  measurementId: "G-FKYT8BRHL2"
};




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
