import {createI18n} from 'vue-i18n';
import EN from './en';
import ZH from './zh';
const messages = {
    en:{
        ...EN
    },
    zh:{
        ...ZH
    }
}

const getCurrentLanguage = () => {
    //js中有一个对象叫 navigator,navigator 对象包含有关浏览器的信息
    const UAlang = navigator.language // zh-CN
    const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
    localStorage.setItem('lang', langCode)
    return langCode
}

// 通过选项创建 VueI18n 实例
const i18n = createI18n({
    legacy: false,
    locale: getCurrentLanguage() || 'zh', // 设置地区
    messages, // 设置地区信息
  })

export default i18n