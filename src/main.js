import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
