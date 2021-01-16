<template>
  <div class="multiScreen">
    <el-container>
      <el-main class="multiScreen-main">
        <div class="head">
          <el-button-group>
            <el-button
              @click="activeIndex = index"
              :type="activeIndex == index ? 'primary' : ''"
              :title="item.title"
              v-for="(item, index) in headArr"
              :key="item.num"
              >{{ item.title }}</el-button
            >
            <el-button
              @click="full"
              title="全屏"
              icon="el-icon-rank"
            ></el-button>
          </el-button-group>
        </div>
        <div class="content">
          <div class="content-info" ref="videoBox">
            <el-row class="content-row" >
              <el-col
                class="content-col"
                :span="24 / Math.sqrt(playerArr.length)"
                v-for="(player, i) in playerArr"
                :key="i"
              >
                <LivePlayer
                  :videoUrl="player.url"
                  :poster="playerPoster"
                  live
                  muted
                  v-loading="playerLoading"
                  element-loading-text="加载中..."
                  element-loading-background="#000"
                ></LivePlayer
              ></el-col>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LivePlayer from "@liveqing/liveplayer";
import screenfull from "screenfull";
export default {
  components: {
    LivePlayer
  },
  data() {
    return {
      playerLoading: false,
      playerPoster: "",
      activeIndex: 1,
      headArr: [
        { num: 1, title: "单屏" },
        { num: 4, title: "四分屏" },
        { num: 9, title: "九分屏" },
        { num: 16, title: "十六分屏" }
      ]
    };
  },
  computed: {
    playerArr() {
      let newPlayerArr = [];
      for (let index = 0; index < this.headArr[this.activeIndex].num; index++) {
        newPlayerArr.push({
          url: ""
        });
      }
      return newPlayerArr;
    }
  },
  mounted() {
    console.log(this.playerArr);
  },
  methods: {
    full() {
      screenfull.request(this.$refs.videoBox);
    }
  }
};
</script>

<style lang="less" scoped>
.multiScreen {
  height: 100%;
  width: 100%;
  display: flex;
  .multiScreen-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    .head,
    .content {
      display: flex;
      justify-content: center;
    }
    .head {
      height: 50px;
      margin-bottom: 20px;
      align-items: center;
    }
    .content {
      flex: 1;
      display: flex;
      align-items: flex-start;
      .content-info {
        width: 80%;
        // overflow: hidden;
        .content-row {
          width: calc(100% + 1px);
          height: calc(100% + 1px);
          .content-col {
            border-right: 1px solid #fff;
            border-bottom: 1px solid #fff;
          }
        }
      }
    }
  }
}
</style>
