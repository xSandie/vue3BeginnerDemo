import { TOKEN_TIME_KEY, TOKEN_TIME_VALUE } from "./constant"

export const setTokenTime = () => {
    localStorage.setItem(TOKEN_TIME_KEY, Date.now())
}

// 获取
export const getTokenTime = () => {
    return localStorage.getItem(TOKEN_TIME_KEY)
}

// 是否已经过期
export const diffTokenTime = () => {
    const currentTime = Date.now()
    const tokenTime = getTokenTime()
    return currentTime - tokenTime > TOKEN_TIME_VALUE
}