<template>
  <div class="dashboard-container">
    <div class="dashboard-info">
      <p class="title">后台管理系统首页</p>
      <p>
        gitee-page：
        <a href="http://ht-echo.gitee.io">http://ht-echo.gitee.io</a>
      </p>
      <p>
        github-page：
        <a href="http://ht-echo.github.io">http://ht-echo.github.io</a>
      </p>
      <p>
        github：
        <a href="http://ht-echo.github.io">https://github.com/ht-echo</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style lang="less" scoped>
.dashboard-container {
  width: 100%;
  padding: 30px;
  .dashboard-info {
    padding: 20px;
    background: #f7f7f7;
    border: 1px solid #f6f6f6;
    border-radius: 3px;
    .title {
      font-size: 22px;
      font-weight: 500;
    }
    p {
      line-height: 40px;
      a {
        text-decoration: underline;
        color: rgb(100, 100, 145);
        &:hover {
          color: #aaa;
        }
      }
    }
  }
}
</style>
