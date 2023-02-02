// import { createRouter, defineEventHandler, useBase } from 'h3'
const router = createRouter()
router.get('/test', defineEventHandler((handler) => {
    const params = getRouterParams(handler)
    return '222'
}))
export default useBase('/api/hello', router.handler)