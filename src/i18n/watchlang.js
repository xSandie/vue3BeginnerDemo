import { watch } from 'vue'
import {useUserStore} from '@/stores/userStore';

export const watchLang = (...cbs) => {
    const userStore = useUserStore()
    watch(()=>userStore.lang,()=>{
            cbs.forEach((cb)=>{
                cb(userStore.lang)
            })
    }, {deep:true})
}