import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './config/components'
import Layout from './layout/main.vue'
import './config/element-variables.scss'

const app = createApp(App)
app.component(Layout.name,Layout)
components.forEach( comp => app.component(comp.name, comp) )

app.use(store)
app.use(router)
app.mount('#app')
