import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import installElementPlus from './plugins/element'
import "./assets/css/initial.css"

const app = createApp(App)
installElementPlus(app)
app.use(ElementPlus)
app.use(router).mount('#app')