<template>
  <div id="app">
    <router-link to="/hello">上传文件</router-link>
    <br/>
    <router-link to="/cartoon">内置过渡动画</router-link>
    <br/>
    <router-link to="/game">轮播图</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  color: blue;
  margin-top: 60px;
}
</style>
