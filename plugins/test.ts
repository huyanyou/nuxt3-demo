export default defineNuxtPlugin((nuxtApp) => {
    addRouteMiddleware('named-test', () => {
        // console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
        // const event = nuxtApp.ssrContext?.event
        // console.log('cookie', event?.context)
    })
})