// import '@babel/polyfill'
// import 'mutationobserver-shim'
// import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import SmartTable from 'vuejs-smart-table'


loadFonts()
createApp(App)
  .use(vuetify)
  // .use(SmartTable)
  // .use(BootstrapVue)
  // .use(IconsPlugin)
  .mount('#app')
