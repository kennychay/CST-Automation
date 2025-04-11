import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { library } from '@fortawesome/fontawesome-svg-core'
// Solid icons (non-brand)
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// Brand icons (including WhatsApp)
import { faWhatsapp, faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add icons to library
library.add(
  // Solid icons
  faMapMarkerAlt, faPhone, faEnvelope,
  // Brand icons
  faWhatsapp, faLinkedin, faTwitter, faFacebook, faInstagram
)

const app = createApp(App)
app.use(Antd)
app.component('font-awesome-icon', FontAwesomeIcon) // Register component before mounting
app.mount('#app')