import { dayjs } from 'element-plus'

const filterTimes = (val, format = "YYYY-MM-DD") => {
    if (!isNull(val)) {
        val = parseInt(val) * 1000
        return dayjs(val).format(format)
    } else {
        return '--'
    }
}

export const isNull = (val) => {
    if (!val) return true
    if (JSON.stringify(val) === '{}') return true
    if (JSON.stringify(val) === '[]') return true
    return false
}

export default app => {
    app.config.globalProperties.$filters = {
        filterTimes:filterTimes
    }
}