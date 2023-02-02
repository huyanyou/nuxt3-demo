let count = 0
export default () => {
    // 2s延时
    // https://v3.nuxtjs.org/docs/directory-structure/api#async-await
    let num = 0
    // 阻塞2s
    for (let i = 0; i < 1000000000; i++) {
        num++
    }
    count++
    return {
        count,
    }
}