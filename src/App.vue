<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./assets/styles/common.css"; //引入全局樣式

export default {
  name: "App"
};
</script>

<style lang="less" scoped>
body {
  margin: 0;
  font-size: 14px;
}
// html,
// body,
// #app {
//   width: 100%;
//   height: 100%;
// }
</style>
