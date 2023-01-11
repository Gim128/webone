import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
// import messages from './lang';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;
Vue.use(VueI18n);

// export const i18n = new VueI18n({
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages
// });

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
