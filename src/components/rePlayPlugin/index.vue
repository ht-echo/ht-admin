<template>
  <div class="divPluginBox">
    <a
      v-show="downloadFileShow"
      href="/WebComponents.exe"
      download
      ref="downloadFile"
      class="downloadFileLink"
    >
      请点击此处下载插件，安装时请关闭浏览器
    </a>
    <!-- <Demo  style="width:1000px;height:600px" /> -->
    <div id="divPlugin" class="plugin" style="width:100%;height:100%;"></div>
    <span class="downloadFile" v-show="videoTextShow">无视频</span>
    <!-- <el-button class="btn2" @click="clickStartRealPlay">开始预览</el-button> -->
    <!-- <el-button class="btn" @click="clickRecordSearch(0)">搜索</el-button> -->
    <!-- <el-button class="btn2" @click="clickStartPlayback()">开始回放</el-button> -->
  </div>

  <!-- <div id="searchdiv" class="searchdiv">
        <table
          id="searchlist"
          class="searchlist"
          cellpadding="0"
          cellspacing="0"
          border="0"
        ></table>
      </div> -->
</template>

<script>
import moment from "moment";
export default {
  components: {
    // Demo,
  },
  props: {},
  data() {
    return {
      videoLoading: false,
      videos: [],
      videoTextShow: false,
      downloadFileShow: false,
      companyVideoData: {},

      plugin: true,
      iWidth: "100%",
      iHeight: "100%",
      webVideo: {},
      iStreamType: 1, //1是主码流，2是子码流
      iProtocol: 1,
      bZeroChannel: false, //是否是0通道，0通道没有录像功能
      xmlDocData: {},
      g_iWndIndex: 0, //可以不用设置这个变量，有窗口参数的接口中，不用传值，开发包会默认使用当前选择窗口
      g_iSearchTimes: 0,
      szStartTime: "2020-11-05 00:00:00", //录像开始查询时间
      szEndTime: "2020-11-05 23:59:59", //录像结束查询时间
      bChecked: false, //是否启用转码
      iChannelID: 1 // 视频对应id，默认一个视频
    };
  },
  created() {
    // if (this.$store.state.Code.cameraParams.nvrIp) {
    // this.companyVideoData = this.$store.state.Code.cameraParams;
    // }
    this.companyVideoData = {
      nvrIp: "192.168.1.190",
      account: "admin",
      password: "sc123456",
      channelId: 1
    };
  },
  mounted() {
    this.nvrIp = this.companyVideoData.nvrIp;
    // this.port = this.companyVideoData.nvrPort;
    this.port = 80;
    this.account = this.companyVideoData.account;
    this.password = this.companyVideoData.password;
    this.iChannelID = this.companyVideoData.channelId;
    // this.iChannelID = 1;
    this.$nextTick(() => {
      setTimeout(() => {
        this.videoInitPlugin();
      }, 10);
    });
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      WebVideoCtrl.I_Resize(
        $(".divPluginBox").width(),
        $(".divPluginBox").height()
      );
    };
  },
  beforeDestroy() {
    clearInterval(this.playBackTimeID);
  },
  methods: {
    clearPlayBackTime() {
      clearInterval(this.playBackTimeID);
    },
    videoInitPlugin() {
      this.iRet = window.WebVideoCtrl.I_CheckPluginInstall();
      if (-1 == this.iRet) {
        this.downloadFileShow = true;
        this.videoTextShow = false;
        console.log("未安装过插件");
        return;
      } else {
        this.downloadFileShow = false;
        this.videoTextShow = true;
        console.log("安装过插件");
      }
      this.initPlugin();
    },
    // 插件初始化
    initPlugin() {
      let that = this;
      WebVideoCtrl.I_InitPlugin("100%", "100%", {
        bWndFull: true, //是否支持单窗口双击全屏，默认支持 true:支持 false:不支持
        iPackageType: 2,
        //szColorProperty:"plugin-background:0000ff; sub-background:0000ff; sub-border:00ffff; sub-border-select:0000ff",   //2:PS 11:MP4
        iWndowType: 1,
        bNoPlugin: true,
        cbSelWnd: function(xmlDoc) {
          that.g_iWndIndex = parseInt(
            $(xmlDoc)
              .find("SelectWnd")
              .eq(0)
              .text(),
            10
          );
        },
        cbInitPluginComplete: function() {
          that.$nextTick(() => {
            setTimeout(() => {
              WebVideoCtrl.I_InsertOBJECTPlugin("divPlugin");
            }, 20);
          });
        }
      });
      // this.clickLogin(this.companyVideoData);
    },
    clickLogin() {
      let that = this;
      WebVideoCtrl.I_Login(
        this.nvrIp,
        1,
        this.port,
        this.account,
        this.password,
        {
          success: function(xmlDoc) {
            console.log("开始预览"); //不能删除
            that.getChannelInfo(this.nvrIp);
          },
          error: function(xmlDoc) {
            console.log("login error");
          }
        }
      );
    },
    //获取通道
    getChannelInfo(ip) {
      console.log("获取通道");
      let that = this;
      // 模拟通道
      WebVideoCtrl.I_GetAnalogChannelInfo(ip, {
        async: false,
        success: function(xmlDoc) {
          let oChannels = $(xmlDoc).find("VideoInputChannel");
          let nAnalogChannel = oChannels.length;
          console.log("获取模拟通道成功！");
        },
        error: function() {
          console.log("获取模拟通道失败！");
        }
      });
      // 数字通道
      WebVideoCtrl.I_GetDigitalChannelInfo(ip, {
        async: false,
        success: function(xmlDoc) {
          console.log("获取数字通道成功！");
          let oChannels = $(xmlDoc).find("InputProxyChannelStatus");
          // that.initPlay();
          // that.clickStartPlayback();
          that.$emit("getOChannels", oChannels); //获取数字通道传给父组件
        },
        error: function() {
          WebVideoCtrl.I_GetLastError();
          console.log("获取数字通道失败！");
        }
      });
      // 零通道
      WebVideoCtrl.I_GetZeroChannelInfo(ip, {
        async: false,
        success: function(xmlDoc) {
          let oChannels = $(xmlDoc).find("ZeroVideoChannel");
        },
        error: function() {
          console.log("获取零通道失败！");
        }
      });
    },
    //初始化视频，为了让用户进来就可以看到视频播放
    initPlay() {
      let szIP = this.companyVideoData.nvrIp; //ip地址
      let iStreamType = 1;
      //循环16次是因为插件分屏最大为4x4（可以根据情况而定）
      for (let i = 0; i < 1; i++) {
        let iChannelID = parseInt(i + 1, 10);
        WebVideoCtrl.I_StartRealPlay(szIP, {
          iStreamType: iStreamType,
          iChannelID: iChannelID,
          iWndIndex: i
        });
      }
    },
    // 搜索录像
    searchRecord(startTime, endTime) {
      this.videos = [];
      this.clickRecordSearch(0, startTime, endTime);
    },
    clickRecordSearch(iType, startTime, endTime) {
      let nvrIp = this.nvrIp,
        iChannelID = this.iChannelID,
        iStreamType = this.iStreamType,
        szStartTime = startTime,
        szEndTime = endTime;
      console.log(
        "clickRecordSearch",
        nvrIp,
        iChannelID,
        iStreamType,
        szStartTime,
        szEndTime
      );
      if (szEndTime != null || szStartTime != null) {
        if (
          Date.parse(szEndTime.replace(/-/g, "/")) -
            Date.parse(szStartTime.replace(/-/g, "/")) <
          0
        ) {
          console.log("开始时间大于结束时间");
          return;
        }
      }
      if (null == nvrIp) {
        return;
      }
      if (0 == iType) {
        // 首次搜索
        this.g_iSearchTimes = 0;
      }
      WebVideoCtrl.I_RecordSearch(nvrIp, iChannelID, szStartTime, szEndTime, {
        iStreamType: iStreamType,
        iSearchPos: this.g_iSearchTimes * 40,
        success: xmlDoc => {
          console.log("进入搜索录像");
          if (
            "MORE" ===
            $(xmlDoc)
              .find("responseStatusStrg")
              .eq(0)
              .text()
          ) {
            for (
              let i = 0, nLen = $(xmlDoc).find("searchMatchItem").length;
              i < nLen;
              i++
            ) {
              let szPlaybackURI = $(xmlDoc)
                .find("playbackURI")
                .eq(i)
                .text();
              if (szPlaybackURI.indexOf("name=") < 0) {
                break;
              }
              let szStartTime = $(xmlDoc)
                .find("startTime")
                .eq(i)
                .text();
              let szEndTime = $(xmlDoc)
                .find("endTime")
                .eq(i)
                .text();
              let duration =
                moment(szEndTime).unix() - moment(szStartTime).unix();
              this.videos.push({
                startTime: moment(szStartTime)
                  .subtract(8, "hours")
                  .format("YYYYMMDDHHmmss"),
                // endTime: moment(szEndTime)
                //   .subtract(8, "hours")
                //   .format("YYYYMMDDHHmmss"),
                duration
              });
            }
            this.g_iSearchTimes++;
            this.clickRecordSearch(1, startTime, endTime); // 继续搜索
            console.log("继续搜索");
          } else if (
            "OK" ===
            $(xmlDoc)
              .find("responseStatusStrg")
              .eq(0)
              .text()
          ) {
            let iLength = $(xmlDoc).find("searchMatchItem").length;
            for (let i = 0; i < iLength; i++) {
              let szPlaybackURI = $(xmlDoc)
                .find("playbackURI")
                .eq(i)
                .text();
              if (szPlaybackURI.indexOf("name=") < 0) {
                break;
              }
              let szStartTime = $(xmlDoc)
                .find("startTime")
                .eq(i)
                .text();
              let szEndTime = $(xmlDoc)
                .find("endTime")
                .eq(i)
                .text();
              let duration =
                moment(szEndTime).unix() - moment(szStartTime).unix();
              this.videos.push({
                startTime: moment(szStartTime)
                  .subtract(8, "hours")
                  .format("YYYYMMDDHHmmss"),
                // endTime: moment(szEndTime)
                //   .subtract(8, "hours")
                //   .format("YYYYMMDDHHmmss"),
                duration
              });
            }
            this.$emit("getVideos", this.videos);
            console.log("ok");
          } else if (
            "NO MATCHES" ===
            $(xmlDoc)
              .find("responseStatusStrg")
              .eq(0)
              .text()
          ) {
            setTimeout(() => {
              this.$emit("playBack", false);
              this.$message({
                duration: 1800,
                type: "info",
                message: "没有录像文件",
                showClose: true
              });
            }, 50);
          }
        },
        error: (status, xmlDoc) => {
          this.$emit("playBack", false);
          this.$message({
            duration: 1800,
            type: "info",
            message: "搜索录像失败",
            showClose: true
          });
        }
      });
    },
    // 开始回放
    clickStartPlayback(szStartTime, szEndTime) {
      console.log("触发clickStartPlayback", szStartTime, szEndTime);
      let oWndInfo = WebVideoCtrl.I_GetWindowStatus(this.g_iWndIndex),
        nvrIp = this.companyVideoData.nvrIp,
        iChannelID = this.iChannelID,
        that = this;
      if (null == nvrIp) {
        return;
      }
      let startPlayback = function() {
        WebVideoCtrl.I_StartPlayback(nvrIp, {
          iRtspPort: 554,
          iStreamType: that.iStreamType,
          iChannelID: that.iChannelID,
          szStartTime,
          szEndTime,
          success: function() {
            console.log("开始回放成功！");
            that.$emit("playBackOnce");
            that.playBackTimeID = setInterval(() => {
              WebVideoCtrl.I_GetOSDTime({
                iWndIndex: 0,
                success: function(currentTime) {
                  if (currentTime != "error") {
                    if (moment(currentTime).format("YYYY") != 1970) {
                      that.$emit("playBack", currentTime);
                    }
                  } else {
                    clearInterval(that.playBackTimeID);
                  }
                },
                error: function() {
                  console.log("startPlayback error");
                  clearInterval(that.playBackTimeID);
                }
              });
            }, 1000);
          },
          error: function(status, xmlDoc) {
            console.log("xmlDoc", xmlDoc);
            // let xmlResult = that.toXMLStr(xmlDoc);
            // if (undefined != xmlDoc) {
            //   let oSerializer = new XMLSerializer();
            //   let xmlResult = oSerializer.serializeToString(xmlDoc);
            //   console.log("xmlResult", `--${xmlResult}--`);
            // }

            if (403 === status) {
              console.log("设备不支持Websocket取流！");
              that.$message({
                duration: 1800,
                type: "info",
                message: "设备不支持Websocket取流！",
                showClose: true
              });
            } else {
              console.log("开始回放失败", "进入error");
              let iErrorValue = WebVideoCtrl.I_GetLastError();
              console.log("开始回放失败", status, iErrorValue);
              that.$notify({
                title: "错误信息",
                message: `底层错误码：${iErrorValue}`,
                duration: 3000
              });
              that.$message({
                duration: 1800,
                type: "info",
                message: "开始回放失败",
                showClose: true
              });
            }
            that.$emit("playBack", false);
          }
        });
      };

      if (oWndInfo != null) {
        // 已经在播放了，先停止
        WebVideoCtrl.I_Stop({
          success: function() {
            startPlayback();
          }
        });
      } else {
        startPlayback();
      }
    },
    // 将xml对象转换成字符串
    toXMLStr(oXmlDoc) {
      let szXmlDoc = "";
      let oSerializer = new XMLSerializer();
      szXmlDoc = oSerializer.serializeToString(oXmlDoc);
      if (szXmlDoc.indexOf("<?xml") == -1) {
        szXmlDoc = "<?xml version='1.0' encoding='utf-8'?>" + szXmlDoc;
      }

      return szXmlDoc;
    }
  }
};
</script>

<style lang="less" scoped>
.divPluginBox {
  position: relative;
  z-index: 1;
  .plugin {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .downloadFileLink {
    position: absolute;
    top: -30px;
    left: 30%;
    color: red;
  }
  .downloadFile {
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3000;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  a {
    &:hover {
      color: #3a88fd;
    }
  }
}
</style>
