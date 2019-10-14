
<template>
    <div>
        <p>我是 {{b}}.vue 页面</p>
    </div>
</template>

<script>
export default {
    name: 'B',
    data(){
        return{
            b: 'b'
        }
    }
}
</script>