// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // nuxt3配置自动导入第三方组件
    // https://v3.nuxtjs.org/docs/directory-structure/components#auto-importing-components
    components: [{
        // 匹配文件名
        // https://v3.nuxtjs.org/docs/directory-structure/components#auto-importing-components
        //
        path: '~/components',
    }],
    runtimeConfig: {
        public: {
            // 服务端渲染时，会自动注入到页面中
        }
    },
    router: {
        options: {}
    }
})
