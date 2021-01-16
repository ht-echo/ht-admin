<template>
  <div class="storageVideo">
    <!-- <el-button
      icon="el-icon-arrow-left"
      size="small"
      type="primary"
      @click="goBack"
      class="page-title"
    >
      返回
    </el-button> -->
    <PlanTable class="page-title" />
    <div class="storage-info">
      <div class="chooseDay">
        <el-date-picker
          v-model="chooseDay"
          value-format="yyyy-MM-dd"
          type="date"
          @change="dateChage"
          placeholder="选择日期"
        ></el-date-picker>
      </div>
      <StorageVideoDemo
        style="width: 56vw;height: 31.5vw;"
        class="livePlayerAll"
        ref="livePlayerAll"
        @getVideos="getVideos"
        @playBack="playBack"
        @playBackOnce="playBackOnce"
      />
      <div class="cortorlBar">
        <div class="cortorlBar-left">
          <div class="cortorlBar-left-info">
            <el-button
              @click="clickPlay"
              :title="isPlay ? '暂停' : '播放'"
              class="cortorlBar-btn"
              type="info"
              size="small"
              :icon="isPlay ? 'iconfont icon-stop' : 'iconfont icon-play'"
            ></el-button>
            <el-button
              @click="clickStopPlayback"
              title="停止"
              class="cortorlBar-btn"
              type="info"
              size="small"
              icon="iconfont icon-reset"
            ></el-button>
            <el-button
              @click="clickPlaySlow"
              title="慢放"
              class="cortorlBar-btn"
              type="info"
              size="small"
              icon="iconfont icon-speedDown"
            ></el-button>
            <el-button
              @click="clickPlayFast"
              title="快进"
              class="cortorlBar-btn"
              type="info"
              size="small"
              icon="iconfont icon-speedUp"
            ></el-button>
            <span class="showMsg">
              <span>当前倍速：</span>
              <span class="speedNow">
                {{ speedNow >= 1 ? speedNow : speedOther }}
              </span>
            </span>
          </div>
        </div>
        <el-button
          @click="clickFullScreen"
          title="全屏"
          class="cortorlBar-btn full-btn"
          type="info"
          size="small"
          icon="el-icon-rank"
        ></el-button>
      </div>
      <CloudRecordTimeRule
        :videos="videos"
        class="videoRule"
        :minutesPerUnit="1"
        @timeChange="onTimeChange"
        ref="timeRule"
        v-loading="loadingRecords"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      ></CloudRecordTimeRule>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import StorageVideoDemo from "@/components/rePlayPlugin/index";
import CloudRecordTimeRule from "@/components/timeRule/index";
import LivePlayer from "@liveqing/liveplayer";
import PlanTable from "@/components/planTable";
export default {
  components: {
    // LivePlayer,
    CloudRecordTimeRule,
    StorageVideoDemo,
    PlanTable
  },
  data() {
    return {
      speedOther: 1,
      speedNow: 1,
      g_iWndIndex: 0,
      isPlay: false,
      chooseDayPick: "",
      dayParams: {},
      chooseDay: "",
      videos: [],
      loadingRecords: false,
      cameraParams: {}
    };
  },
  async created() {
    // this.cameraParams = this.$store.state.Code.cameraParams;
    this.cameraParams = {
      carmeStartTime: moment(new Date()).format("YYYY-MM-DD"),
      isEvent: false
    };
    if (this.cameraParams.carmeStartTime) {
      this.chooseDay = this.cameraParams.carmeStartTime;
    }
  },
  mounted() {
    // let mmt = moment();
    // let n = mmt.diff(mmt.clone().startOf("day"), "minutes");
    // console.log(n);
    // n -= 10;
    // // 播放十分钟前的视频
    // if (n < 0) n = 0;
    // this.$refs.timeRule.clickMinute(0);
    let startTime = "",
      endTime = "";
    if (this.cameraParams.isEvent) {
      startTime =
        moment(this.cameraParams.carmeStartTime)
          .subtract(5, "minutes")
          .format("YYYY-MM-DDTHH:mm:ss") + "Z";
      endTime =
        moment(this.cameraParams.carmeStartTime)
          .add(5, "minutes")
          .format("YYYY-MM-DDTHH:mm:ss") + "Z";
      let nowMoment = moment(this.cameraParams.carmeStartTime);
      let nowTime =
        parseInt(nowMoment.format("HH") * 60) +
        parseInt(nowMoment.format("mm"));
      this.updateVideos(startTime, endTime);
      setTimeout(() => {
        this.$refs.timeRule.clickMinute(nowTime);
      }, 100);
    } else {
      let startTime = this.cameraParams.carmeStartTime + "T00:00:00Z",
        endTime = this.cameraParams.carmeStartTime + "T23:59:59Z";
      this.updateVideos(startTime, endTime);
    }
  },
  computed: {},
  beforeDestroy() {},
  methods: {
    clickPause() {
      let oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.g_iWndIndex);
      if (oWndInfo != null) {
        WebVideoCtrl.I_Pause({
          success: function() {
            console.log("暂停成功！");
          },
          error: function() {
            console.log("暂停失败！");
          }
        });
      }
    },
    clickResume() {
      let oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.g_iWndIndex);
      if (oWndInfo != null) {
        WebVideoCtrl.I_Resume({
          success: function() {
            console.log("恢复播放成功！");
          },
          error: function() {
            console.log("恢复播放失败！");
          }
        });
      }
    },
    clickPlaySlow() {
      var oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.g_iWndIndex);
      if (oWndInfo != null) {
        WebVideoCtrl.I_PlaySlow({
          success: () => {
            if (this.speedNow > 1) {
              this.speedNow = this.speedNow * 0.5;
            } else {
              this.speedNow = this.speedNow * 0.5;
              console.log("this.speedNow", this.speedNow);
              let speedNowNew = 1 / this.speedNow;
              this.speedOther = "1/" + speedNowNew;
            }
            console.log("慢放成功！");
          },
          error: function() {
            console.log("慢放失败！");
          }
        });
      }
    },
    // 快放
    clickPlayFast() {
      let oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.g_iWndIndex);
      if (oWndInfo != null) {
        WebVideoCtrl.I_PlayFast({
          success: () => {
            this.speedNow = this.speedNow * 2;
            if (this.speedNow < 1) {
              let speedNowNew = 1 / this.speedNow;
              this.speedOther = "1/" + speedNowNew;
            }
            console.log("快放成功！");
          },
          error: function() {
            console.log("快放失败！");
          }
        });
      }
    },
    clickStopPlayback() {
      let oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.g_iWndIndex);
      if (oWndInfo != null) {
        WebVideoCtrl.I_Stop({
          success: function() {
            console.log("停止回放成功！");
          },
          error: function() {
            console.log("停止回放失败！");
          }
        });
      }
    },
    clickFullScreen() {
      WebVideoCtrl.I_FullScreen(true);
    },
    clickPlay() {
      console.log("this.isPlay", this.isPlay);
      if (this.isPlay) {
        this.clickPause();
      } else {
        this.clickResume();
      }
      this.isPlay = !this.isPlay;
    },
    getOChannels(oChannels) {
      // console.log(oChannels);
    },
    playBackOnce() {
      this.isPlay = true;
    },
    playBack(currentTime) {
      // console.log("触发playBack", currentTime);
      this.$nextTick(() => {
        this.loadingRecords = false;
        let nowTime =
          parseInt(moment(currentTime).format("HH") * 60) +
          parseInt(moment(currentTime).format("mm"));
        // console.log("nowTime", nowTime);
        this.$refs.timeRule.clickMinute(nowTime, false);
      });
    },
    dateChage(val) {
      this.$refs.livePlayerAll.clearPlayBackTime();
      let startTime = val + "T00:00:00Z",
        endTime = val + "T23:59:59Z";
      if (val != null) {
        this.updateVideos(startTime, endTime);
      }
      this.chooseDayPick = val;
    },
    onTimeChange(video, loadingRecords) {
      console.log("触发onTimeChange", video);
      if (video == null) {
        return;
      }
      setTimeout(() => {
        this.loadingRecords = true;
      }, 0);
      // console.log("103", video);
      let startTime =
          moment(video.startTime, "YYYYMMDDHHmmss")
            .add(video.currentTime, "seconds")
            .format("YYYY-MM-DDTHH:mm:ss") + "Z",
        endtTime = this.cameraParams.carmeStartTime + "T59:59:59Z";
      this.$refs.livePlayerAll.clickStartPlayback(startTime, endtTime);
    },
    updateVideos(startTime, endTime) {
      console.log("updateVideos", startTime, endTime);
      //   this.loadingRecords = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.livePlayerAll.clickLogin();
        }, 600);
        setTimeout(() => {
          this.$refs.livePlayerAll.searchRecord(startTime, endTime);
        }, 1000);
      });
    },
    getVideos(video) {
      this.videos = video;
      this.loadingRecords = false;
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.storageVideo {
  display: flex;
  padding: 10px;
  position: relative;
  height: 100%;
  width: 100%;
  .storage-left {
    // width: 200px;
    height: 100%;
  }
  .storage-info {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-title {
    position: absolute;
    left: 50px;
    top: 30px;
    font-size: 15px;
  }
  .chooseDay {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  // .videoRule {
  //   width: 90%;
  // }
  .livePlayerAll {
    margin: 60px 0 0;
    margin-left: -70px;
  }
  .cortorlBar {
    width: 56vw;
    height: 40px;
    margin-left: -70px;
    padding-right: 5px;
    margin-bottom: 30px;
    background: #979797;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .full-btn {
      font-size: 16px;
      color: #666;
    }
    .showMsg {
      font-weight: bold;
      padding-left: 5px;
      .speedNow {
        display: inline-block;
        min-width: 50px;
      }
    }
    .cortorlBar-btn {
      margin-left: 2px;
      background: #dadada;
      color: #666;
      border: 1px solid #616161;
      &:hover {
        background: #c6c6c6;
      }
    }
    .cortorlBar-left {
      width: 80%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
