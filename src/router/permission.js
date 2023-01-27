import router from './index'
import {useUserStore} from '@/stores/userStore';

// 不登录也能进入的页面
const whiteList = ['/login']

router.beforeEach((to, from, next)=>{
    const userStore = useUserStore()
    // console.log(userStore.token);
    if(userStore.token){
        if (to.path === '/login') {
            next('/')
        }else{
            next()
        }
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else{
            next('/login')
        }
    }
})