<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body,#cesiumContainer{
  width: 100%;
  height: 100%;
  margin:0;
  padding:0;
}

ul,li{
  list-style: none;
}
body{
  background:url(/static/images/bg_body.jpg) repeat;
  color:#fff;
  font-size:16px;
}
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  margin:0;
  padding:0;
}
</style>
