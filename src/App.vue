<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>我是首页爸爸，下面 HelloWorld 是我捡来的儿子！</div>
    <HelloWorld/>
    <div>
      下面是路由跳转：
      <!-- <p>
        <router-link to="./a">A</router-link>
        <router-link to="./b">B</router-link>
        <router-view/>
      </p> -->

      <div @click="jumpA">我会跳转到 A</div>
      <div @click="jumpB">我会跳转到 B</div>

    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {}
  },
  methods: {
    jumpA(){
       this.$router.push({
        path: './a',
       })
    },
    jumpB(){
      this.$router.push({
        path: './b',
       })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
