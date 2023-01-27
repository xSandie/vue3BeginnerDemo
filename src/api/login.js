import request from './request'
import {useUserStore} from '@/stores/userStore'

export const login = (data) =>{
    const {username, password} = data
    let newData = {
        "email":username,
        "password":password
    }

    return request({
        url: '/login',
        method: "POST",
        data:newData
    })
}
