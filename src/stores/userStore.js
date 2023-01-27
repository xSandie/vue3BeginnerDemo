import { defineStore } from 'pinia'
import route from '@/router/index';
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('useUserStore', {
    state: () => ({ 
        token:localStorage.getItem('token') || "",
        sideBarHide: false,
        lang: localStorage.getItem('lang') || "zh"
    }),
    getters: {
    //   double: (state) => state.count * 2,
    },
    actions: {
      setToken(token) {
        this.token = token
        localStorage.setItem('token',token)
      },
      toggleSideBar(){
        this.sideBarHide = !this.sideBarHide
      },
      logout(){
        this.token = ''
        localStorage.removeItem('token')
        route.replace('/login')
      },
      setLang(lang) {
        this.lang = lang
        localStorage.setItem("lang", lang)
      }
    },
})
