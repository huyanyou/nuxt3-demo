export default defineEventHandler((event => {
    // appendHeader(event, "test", "222")
    /**
     * 返回错误处理
     */
    navigateTo('/cyuo')
    return {
        hello: 'hello word'
    }
}))