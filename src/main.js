import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
// import ElementPlus from 'element-plus'
import router from './router'
import { createPinia } from 'pinia'
// import '@/styles/elements/index.scss'
import 'virtual:svg-icons-register'
import svgIcon from './components/SvgIcon/index.vue'
import '@/router/permission'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from '@/i18n/index';
import filters from '@/utils/filters';

const app = createApp(App)
app.use(i18n)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}//注册所有图标

filters(app)
app.use(createPinia())
app.use(router)
app.use(svgIcon)
app.mount('#app')
