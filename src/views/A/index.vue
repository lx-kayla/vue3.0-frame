<template>
    <div>
        <p>我是 {{a}}.vue 页面</p>
    </div>
</template>

<script>
export default {
    name: 'A',
    data(){
        return{
            a: 'a'
        }
    }
}
</script>