<script setup lang='ts'>
const counter = useState('counter')
const color = useColor()
const tttt = useCounter()
</script>
<template>
    <div>
        ssss <br />
        {{ counter }}
        <br>
        {{ color }}
        <br>
        <div @click="tttt++">
            {{ tttt }}
        </div>
    </div>
</template>
<style scoped>

</style>