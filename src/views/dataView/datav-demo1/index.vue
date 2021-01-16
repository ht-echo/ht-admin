<template>
  <div id="data-view" style="width:100%;height:56.25vw">
    <!-- <dv-full-screen-container> -->
    <i
      @click="exitPage"
      title="退出"
      class="el-icon-switch-button svg-exit"
    ></i>
    <div class="contentAll">
      <top-header />

      <div class="main-content">
        <digital-flop />

        <div class="block-left-right-content">
          <ranking-board />

          <div class="block-top-bottom-content">
            <div class="block-top-content">
              <rose-chart />

              <water-level-chart />

              <scroll-board />
            </div>

            <cards />
          </div>
        </div>
      </div>
    </div>
    <!-- </dv-full-screen-container> -->
  </div>
</template>

<script>
import topHeader from "./topHeader";
import digitalFlop from "./digitalFlop";
import rankingBoard from "./rankingBoard";
import roseChart from "./roseChart";
import waterLevelChart from "./waterLevelChart";
import scrollBoard from "./scrollBoard";
import cards from "./cards";
import screenfull from "screenfull";

export default {
  name: "DataView",
  components: {
    topHeader,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards
  },
  data() {
    return {};
  },
  methods: {
    exitPage() {
      screenfull.exit();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less">
#data-view {
  background-color: #030409;
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  position: relative;
  .svg-exit {
    cursor: pointer;
    position: absolute;
    z-index: 20;
    right: 250px;
    top: 40px;
    font-size: 40px;
    // color: #bbb;
    color: #ddd;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
  .contentAll {
    flex: 1;
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    padding-top: 6px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>
