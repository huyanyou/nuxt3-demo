<script setup lang='ts'>
// const counter = useState('counter', () => Math.round(Math.random() * 1000))
const color = useColor()
const tttt = useCounter()
const hello = inject("hello")
const { test = '22' } = defineProps<{
    test: string
}>()
</script>
<template>
    <!-- <div>
        Counter: {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div> -->
    <br>
    <br>
    {{ color }}
    <br>
    {{ test }}
    <div @click="tttt++">
        {{ tttt }}
    </div>
    <div>
        test <br>
        {{ hello }}<br>
        ===
    </div>
</template>
<style scoped>

</style>