<template>
  <div
    class="homepage-container"
    style="width:100%;height:56.25vw;overflow-x:hidden"
  >
    <div class="homepage-smartPark">
      <el-container class="smartPark-container">
        <el-header class="header">
          <div class="header-left">
            <img class="logoImg" :src="logoImg" alt="" />
            <div class="header-title">
              <p class="header-titl-zh">{{ pageAll.titleZh }}</p>
              <span class="header-titl-en">
                {{ pageAll.titleEn }}
              </span>
            </div>
          </div>
          <!-- <svg-icon class="svg-exit" icon-class="exit" /> -->
          <i
            @click="exitPage"
            title="退出"
            class="el-icon-switch-button svg-exit"
          ></i>
          <div class="header-time">{{ datenow }}</div>
        </el-header>
        <el-main class="main" style="overflow:hidden">
          <el-container>
            <el-aside class="aside">
              <div class="aside-top">
                <div class="echarts-info aside-top-echarts">
                  <CommonTitle :commonTitle="commonTitle.titleRecord" />
                  <el-progress
                    class="el-progress"
                    :format="format"
                    :percentage="50"
                    color="#828a8f"
                  ></el-progress>
                </div>
              </div>
              <div class="aside-bottom">
                <div class="equipments echarts-demo">
                  <div class="echarts-info">
                    <CommonTitle :commonTitle="commonTitle.equipment" />
                    <el-progress
                      class="el-progress"
                      :format="format"
                      :percentage="60"
                      color="#519600"
                    ></el-progress>
                  </div>
                </div>
                <div class="camera echarts-demo">
                  <div class="echarts-info">
                    <!-- <div class="cameraEchart" ref="cameraEchart"></div> -->
                    <Charts
                      class="cameraEchart"
                      :seriesData="cameraSeriesData"
                      :extraOption="cameraExtraOption"
                      :xAxisData="xDataCamera"
                      :axis="cameraAxis"
                      :axisLineShow="false"
                    ></Charts>
                    <CommonTitle
                      class="cameraTitle"
                      :commonTitle="commonTitle.camera"
                    />
                  </div>
                </div>
                <div class="people echarts-demo">
                  <div class="echarts-info">
                    <CommonTitle :commonTitle="commonTitle.manNum" />
                    <CommonTitle :commonTitle="commonTitle.womanNum" />
                  </div>
                </div>
                <div class="aboutCar echarts-demo">
                  <div class="echarts-info">
                    <CommonTitle :commonTitle="commonTitle.carAndPerson" />
                    <Charts
                      :seriesData="carAndPersonSeriesData"
                      :extraOption="carAndPersonExtraOption"
                      :xAxisData="xDataCarAndPerson"
                    ></Charts>
                  </div>
                </div>
                <div class="aboutEvent echarts-demo">
                  <div class="echarts-info">
                    <CommonTitle :commonTitle="commonTitle.eventInfo" />
                    <!-- <div ref="chartsEvent" class="chartsEvent"></div> -->
                    <!-- <div class="emptyBox" v-if="isSeriesEmpty">
                      <img :src="emptyImg" alt="" />
                      <span>暂无数据</span>
                    </div> -->
                    <Charts
                      :seriesData="eventSeriesData"
                      :extraOption="eventExtraOption"
                      :xAxisData="xDataEvent"
                    ></Charts>
                  </div>
                </div>
              </div>
            </el-aside>
            <el-container class="right-container">
              <el-header class="right-header">
                <div class="header-top">
                  <div class="numEcharts">
                    <div class="rightTop-echarts">
                      <CommonTitle
                        :commonTitle="commonTitle.people"
                        :letterOutIsShow="commonTitle.letterOutIsShow"
                      />
                    </div>
                    <div class="rightTop-echarts">
                      <CommonTitle
                        :commonTitle="commonTitle.car"
                        :letterOutIsShow="commonTitle.letterOutIsShow"
                      />
                    </div>
                    <div class="rightTop-echarts">
                      <CommonTitle
                        :commonTitle="commonTitle.device"
                        :letterOutIsShow="commonTitle.letterOutIsShow"
                      />
                    </div>
                    <div class="rightTop-echarts">
                      <CommonTitle
                        :commonTitle="commonTitle.eventDay"
                        :letterOutIsShow="commonTitle.letterOutIsShow"
                      />
                    </div>
                  </div>
                  <div class="right-icons">
                    <i class="iconfont icon-round"></i>
                    <i class="iconfont icon-round"></i>
                  </div>
                </div>
                <div class="header-bottom">
                  <div class="floor">
                    <div
                      class="floor-info"
                      v-for="(item, index) in 7"
                      :key="index"
                    >
                      {{ `大门${item}` }}
                    </div>
                  </div>
                  <div class="search">search</div>
                </div>
              </el-header>
              <el-main class="right-main">
                <div class="video">
                  <LivePlayer
                    class="livePlayerAll"
                    ref="livePlayerAll"
                    :poster="posterUrl"
                    :videoUrl="videoUrl"
                    :controls="false"
                    :stretch="false"
                    fluent
                    live
                    muted
                    v-loading="aLoading"
                    :loading.sync="aLoading"
                    element-loading-background="#000"
                  />
                </div>
                <div class="scrollBoard">
                  <div class="scrollBoard-title">
                    <CommonTitle
                      class="eventListTitle"
                      :commonTitle="commonTitle.eventListTitle"
                    />
                  </div>
                  <dv-scroll-board
                    class="scrollBoard-info"
                    :config="scrollBoarCconfig"
                  />
                </div>
              </el-main>
              <el-footer class="right-footer">
                <div class="footer-main">
                  <div class="footer-header">
                    <div class="header-left">
                      <div
                        class="header-info"
                        v-for="(item, index) in 3"
                        :key="index"
                      >
                        {{ `${item}号楼` }}
                      </div>
                    </div>
                    <div class="header-more">more</div>
                  </div>
                  <div class="footer-envetCharts">
                    <CommonTitle
                      class="eventTrend-title"
                      :commonTitle="commonTitle.eventTrend"
                    />

                    <Charts
                      class="eventTrend-ecahrtsBox"
                      :seriesData="eventTrendSeriesData"
                      :extraOption="eventTrendExtraOption"
                      :xAxisData="xDataEventTrend"
                      :style="{
                        height: eventTrendHeight,
                        width: eventTrendWidth
                      }"
                    ></Charts>
                  </div>
                  <div class="footer-carSotpState">
                    <CommonTitle
                      class="carSotpState-title"
                      :commonTitle="commonTitle.carStopState"
                    />
                    <Charts
                      class="chartsParking"
                      :seriesData="parkingSeriesData"
                      :extraOption="parkingExtraOption"
                      :xAxisData="xDataParking"
                      :xAxisShow="false"
                      :yAxisShow="false"
                      yAxisType="category"
                    ></Charts>
                  </div>
                </div>
                <div class="footer-last">
                  <div class="last-head"></div>
                  <div class="last-info">
                    <div
                      class="last-content"
                      v-for="(item, index) in lastEcharts"
                      :key="index"
                    >
                      <CommonTitle
                        class="last-commonTitle"
                        :commonTitle="item.title"
                      />
                      <div class="last-content-top">
                        <div class="line"></div>
                        <div class="progress-circle">
                          <div class="progress-info" ref="progressInfo">
                            <el-progress
                              type="circle"
                              :width="progressWidth"
                              :stroke-width="strokeWidth"
                              :percentage="25"
                            ></el-progress>
                          </div>
                        </div>
                      </div>
                      <div class="last-content-bottom">
                        <div class="bottom-info"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-footer>
            </el-container>
          </el-container>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import LivePlayer from "@liveqing/liveplayer";
import CommonTitle from "@/components/common-title/Common-title";
import { isEmpty } from "lodash";
import Charts from "@/components/charts/Index";
import "@/assets/iconfont/iconfont.css";
import screenfull from "screenfull";
export default {
  components: {
    CommonTitle,
    LivePlayer,
    Charts
  },
  props: Charts.props,
  data() {
    return {
      eventSeriesData: [],
      eventExtraOption: {
        series: [
          {
            type: "bar",
            barWidth: "40%"
          }
        ]
      },
      xDataEvent: [],

      carAndPersonSeriesData: [],
      carAndPersonExtraOption: {
        series: [
          {
            type: "line",
            smooth: true
          },
          {
            type: "line",
            smooth: true
          }
        ]
      },
      xDataCarAndPerson: [],

      eventTrendSeriesData: [],
      eventTrendExtraOption: {
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false
          }
        ]
      },
      xDataEventTrend: [],
      // xAxisTypeEventTrend: "time",

      parkingSeriesData: [],
      parkingExtraOption: {
        series: [
          {
            name: "Punch Card",
            type: "scatter",
            symbolSize: function(val) {
              return val[2] * 0.7;
            },
            animationDelay: function(idx) {
              return idx * 5;
            }
          }
        ]
      },
      xDataParking: [],

      cameraSeriesData: [],
      cameraExtraOption: {
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "100%",
            center: ["50%", "50%"],

            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
              normal: {
                position: "inner",
                show: false
              }
            },
            labelLine: {
              normal: {
                length: 0
              },

              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      },
      xDataCamera: [],
      cameraAxis: {
        tooltip: {
          trigger: "item",
          position: ["60%", "10%"],
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        }
      },

      emptyImg: require("@/assets/imgs/empty.png"),
      strokeWidth: 4,
      progressWidth: 0,
      eventTrendHeight: "",
      eventTrendWidth: "",
      scrollBoarCconfig: {
        header: ["列1", "列2", "列3", "列4", "列5"],
        data: [
          ["行1列1", "行1列2", "行1列3", "行1列3", "行1列3"],
          ["行2列1", "行2列2", "行2列3", "行1列3", "行1列3"],
          ["行3列1", "行3列2", "行3列3", "行1列3", "行1列3"],
          ["行4列1", "行4列2", "行4列3", "行1列3", "行1列3"],
          ["行5列1", "行5列2", "行5列3", "行1列3", "行1列3"],
          ["行6列1", "行6列2", "行6列3", "行1列3", "行1列3"],
          ["行7列1", "行7列2", "行7列3", "行1列3", "行1列3"],
          ["行8列1", "行8列2", "行8列3", "行1列3", "行1列3"]
          // ["行9列1", "行9列2", "行9列3", "行1列3", "行1列3"],
          // ["行10列1", "行10列2", "行10列3", "行1列3", "行1列3"],
        ],
        index: true,
        headerBGC: "#5b5b5c",
        oddRowBGC: "#282829",
        evenRowBGC: "#313132",
        columnWidth: [50],
        align: ["center"],
        rowNum: 8,
        indexHeader: "",
        headerHeight: this.fontSize(0.35)
      },
      aLoading: false,
      videoUrl: "",
      posterUrl: "",
      datenow: "",
      logoImg: require("@/assets/imgs/logo.png"),
      pageAll: {
        titleZh: "ht-echo的demo",
        titleEn: "ht-echo's demo "
      },
      commonTitle: {
        titleRecord: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "10000"
        },
        equipment: {
          name: "信息展示",
          num: "3260",
          en: "some message",
          bottomName: ""
        },
        camera: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: ""
        },
        manNum: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "",
          iconClass: "round"
        },
        womanNum: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "",
          iconClass: "round"
        },
        carAndPerson: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: ""
        },

        eventInfo: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: ""
        },
        people: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "",
          iconClass: "letter_a",
          iconFontSize: "0.30rem",
          fontColor: "#aecd92",
          letterOutIsShow: true
        },
        car: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "",
          iconClass: "letter_a",
          iconFontSize: "0.30rem",
          fontColor: "#3bd6ea",
          letterOutIsShow: true
        },
        device: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "",
          iconClass: "letter_a",
          iconFontSize: "0.30rem",
          fontColor: "#2eaf62",
          letterOutIsShow: true
        },

        eventDay: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "",
          iconClass: "letter_a",
          iconFontSize: "0.30rem",
          fontColor: "#f6f23b",
          letterOutIsShow: true
        },
        eventTrend: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "",
          iconClass: ""
        },
        carStopState: {
          name: "信息展示",
          num: "",
          en: "some message",
          bottomName: "",
          iconClass: ""
        },
        eventListTitle: {
          name: "信息展示",
          num: "",
          en: "",
          bottomName: ""
        }
      },
      lastEcharts: {
        left: {
          title: {
            name: "left",
            num: "",
            en: "",
            bottomName: ""
          },
          mainNum: 1
        },
        center: {
          title: {
            name: "center",
            num: "",
            en: "",
            bottomName: ""
          },
          mainNum: 2
        },
        right: {
          title: {
            name: "right",
            num: "",
            en: "",
            bottomName: ""
          },
          mainNum: 3
        }
      }
    };
  },
  created() {
    this.topTime = setInterval(() => {
      this.datenow = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
    this.xDataEvent = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.xDataCarAndPerson = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.eventSeriesData = [{ data: [120, 200, 150, 80, 70, 110, 130] }];
    this.carAndPersonSeriesData = [
      { data: [1000, 500, 700, 1000, 1200, 800, 550] },
      { data: [500, 800, 901, 600, 1000, 1330, 800] }
    ];
    this.eventSeriesData = [{ data: [120, 200, 150, 80, 70, 110, 130] }];

    this.eventTrendSeriesData = [{ data: [120, 200, 150, 80, 70, 110, 130] }];
    this.xDataEventTrend = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    let parkingData = [
      [0, 0, 5],
      [0, 1, 1],
      [0, 2, 0],
      [0, 3, 0],
      [0, 4, 0],
      [0, 5, 0],
      [0, 6, 0],
      [0, 7, 0],
      [0, 8, 0],
      [0, 9, 0],
      [0, 10, 0],
      [0, 11, 2],
      [0, 12, 4],
      [0, 13, 1],
      [0, 14, 1],
      [0, 15, 3],
      [0, 16, 4],
      [0, 17, 6],
      [0, 18, 4],
      [0, 19, 4],
      [0, 20, 3],
      [0, 21, 3],
      [0, 22, 2],
      [0, 23, 5],
      [1, 0, 7],
      [1, 1, 0],
      [1, 2, 0],
      [1, 3, 0],
      [1, 4, 0],
      [1, 5, 0],
      [1, 6, 0],
      [1, 7, 0],
      [1, 8, 0],
      [1, 9, 0],
      [1, 10, 5],
      [1, 11, 2],
      [1, 12, 2],
      [1, 13, 6],
      [1, 14, 9],
      [1, 15, 11],
      [1, 16, 6],
      [1, 17, 7],
      [1, 18, 8],
      [1, 19, 12],
      [1, 20, 5],
      [1, 21, 5],
      [1, 22, 7],
      [1, 23, 2],
      [2, 0, 1],
      [2, 1, 1],
      [2, 2, 0],
      [2, 3, 0],
      [2, 4, 0],
      [2, 5, 0],
      [2, 6, 0],
      [2, 7, 0],
      [2, 8, 0],
      [2, 9, 0],
      [2, 10, 3],
      [2, 11, 2],
      [2, 12, 1],
      [2, 13, 9],
      [2, 14, 8],
      [2, 15, 10],
      [2, 16, 6],
      [2, 17, 5],
      [2, 18, 5],
      [2, 19, 5],
      [2, 20, 7],
      [2, 21, 4],
      [2, 22, 2],
      [2, 23, 4],
      [3, 0, 7],
      [3, 1, 3],
      [3, 2, 0],
      [3, 3, 0],
      [3, 4, 0],
      [3, 5, 0],
      [3, 6, 0],
      [3, 7, 0],
      [3, 8, 1],
      [3, 9, 0],
      [3, 10, 5],
      [3, 11, 4],
      [3, 12, 7],
      [3, 13, 14],
      [3, 14, 13],
      [3, 15, 12],
      [3, 16, 9],
      [3, 17, 5],
      [3, 18, 5],
      [3, 19, 10],
      [3, 20, 6],
      [3, 21, 4],
      [3, 22, 4],
      [3, 23, 1],
      [4, 0, 1],
      [4, 1, 3],
      [4, 2, 0],
      [4, 3, 0],
      [4, 4, 0],
      [4, 5, 1],
      [4, 6, 0],
      [4, 7, 0],
      [4, 8, 0],
      [4, 9, 2],
      [4, 10, 4],
      [4, 11, 4],
      [4, 12, 2],
      [4, 13, 4],
      [4, 14, 4],
      [4, 15, 14],
      [4, 16, 12],
      [4, 17, 1],
      [4, 18, 8],
      [4, 19, 5],
      [4, 20, 3],
      [4, 21, 7],
      [4, 22, 3],
      [4, 23, 0],
      [5, 0, 2],
      [5, 1, 1],
      [5, 2, 0],
      [5, 3, 3],
      [5, 4, 0],
      [5, 5, 0],
      [5, 6, 0],
      [5, 7, 0],
      [5, 8, 2],
      [5, 9, 0],
      [5, 10, 4],
      [5, 11, 1],
      [5, 12, 5],
      [5, 13, 10],
      [5, 14, 5],
      [5, 15, 7],
      [5, 16, 11],
      [5, 17, 6],
      [5, 18, 0],
      [5, 19, 5],
      [5, 20, 3],
      [5, 21, 4],
      [5, 22, 2],
      [5, 23, 0],
      [6, 0, 1],
      [6, 1, 0],
      [6, 2, 0],
      [6, 3, 0],
      [6, 4, 0],
      [6, 5, 0],
      [6, 6, 0],
      [6, 7, 0],
      [6, 8, 0],
      [6, 9, 0],
      [6, 10, 1],
      [6, 11, 0],
      [6, 12, 2],
      [6, 13, 1],
      [6, 14, 3],
      [6, 15, 4],
      [6, 16, 0],
      [6, 17, 0],
      [6, 18, 0],
      [6, 19, 0],
      [6, 20, 1],
      [6, 21, 2],
      [6, 22, 2],
      [6, 23, 6]
    ];
    parkingData = parkingData.map(function(item) {
      return [item[1], item[0], item[2]];
    });
    this.parkingSeriesData = [{ data: parkingData }];
    this.cameraSeriesData = [
      {
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 274, name: "联盟广告" },
          { value: 235, name: "视频广告" },
          { value: 400, name: "搜索引擎" }
        ].sort(function(a, b) {
          return a.value - b.value;
        })
      }
    ];
  },
  mounted() {
    // 页面开始加载时修改font-size
    let html = document.getElementsByTagName("html")[0];
    let oWidth =
      document.body.clientWidth || document.documentElement.clientWidth;
    // 这里的1920是指设计图的大小,自己根据实际情况改变
    html.style.fontSize = (oWidth / 1920) * 100 + "px";
    console.log("rem:", html.style.fontSize);

    this.progressWidth = this.$refs.progressInfo[0].offsetHeight;
    let cameraOption = {
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "80%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 274, name: "联盟广告" },
            { value: 235, name: "视频广告" },
            { value: 400, name: "搜索引擎" }
          ].sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)",
            normal: {
              position: "inner",
              show: false
            }
          },
          labelLine: {
            normal: {
              length: 0
            },

            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          },

          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function(idx) {
            return Math.random() * 200;
          }
        }
      ]
    };
  },
  computed: {
    isSeriesEmpty() {
      return (
        isEmpty(this.seriesData) || this.seriesData.every(item => !item.data)
      );
    }
  },
  methods: {
    exitPage() {
      screenfull.exit();
      this.$router.replace("/");
    },
    format(percentage) {
      if (percentage) {
        return "";
      }
    },
    fontSize(res) {
      let docEl = document.documentElement,
        clientWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
      if (!clientWidth) return;
      let fontSize = 100 * (clientWidth / 1920);
      return res * fontSize;
    }
  },
  beforeDestroy() {
    let html = document.getElementsByTagName("html")[0];
    html.style.fontSize = 14 + "px";

    clearInterval(this.topTime);
  }
};
</script>

<style lang="less" scoped>
@color-444547: #444547;
.homepage-container {
  display: flex;
}
.homepage-smartPark {
  font-size: 0.14rem;
  width: 100%;
  height: 100%;
  display: flex;
  background: #242021;
  .el-main {
    padding: 0;
  }
  .smartPark-container {
    width: 100%;
    height: 100%;
    .header {
      position: relative;
      height: 8% !important;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .header-left {
        display: flex;
        align-items: center;
        .logoImg {
          box-sizing: border-box;
          padding: 0.1rem 0.1rem 0.1rem 0;
          width: 1rem;
          height: 1rem;
          color: #fff;
        }
        .header-title {
          .header-titl-zh {
            font-size: 0.22rem;
          }
          .header-titl-en {
            font-size: 0.14rem;
          }
        }
      }
      .svg-exit {
        position: absolute;
        right: 200px;
        font-size: 0.4rem;
        // color: #bbb;
        color: #ddd;
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
      .header-time {
        font-size: 0.16rem;
      }
    }
    .main {
      display: flex;
      box-shadow: 0.02rem 0.12rem 0 #565457;
      .aside {
        color: #fff;
        overflow: hidden;
        width: 20% !important;
        display: flex;
        flex-direction: column;
        border-right: 0.01rem solid #3f3f41;
        margin-right: 0.1rem;
        .echarts-info {
          width: 100%;
          height: 100%;
          padding: 0.1rem;
          box-sizing: border-box;
          background: #242021;
        }
        .aside-top {
          height: 14%;
          .aside-top-echarts {
            background: @color-444547;
            .el-progress {
              /deep/ .el-progress-bar__outer {
                background: transparent;
                border-bottom: 0.02rem solid #5d6060;
                border-right: 0.02rem solid #5d6060;
              }
            }
          }
        }
        .aside-bottom {
          background: #3f3f40;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .echarts-demo {
            display: flex;
            // flex: 1;
            padding-bottom: 0.06rem;
            &:last-child {
              padding-bottom: 0rem;
            }
          }
          .equipments {
            height: 20%;
            .el-progress {
              /deep/ .el-progress-bar__outer {
                background: #c1fd65;
              }
            }
          }
          .camera {
            display: flex;
            height: 15%;
            .echarts-info {
              display: flex;
              .cameraEchart {
                width: 36%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .cameraTitle {
                flex: 1;
              }
            }
          }
          .people {
            height: 13%;
            .echarts-info {
              display: flex;
              align-items: center;
              justify-content: space-around;
            }
          }
          .aboutCar,
          .aboutEvent {
            height: 25%;
            .echarts-info {
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              .emptyBox {
                flex: 1;
                display: flex;
                justify-content: center;
                align-self: center;
                img {
                  width: 40%;
                }
                span {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 0.12rem;
                }
              }
            }
            .carAndPerson,
            .chartsEvent {
              flex: 1;
            }
          }
        }
      }
      .right-container {
        .right-header {
          padding: 0;
          height: 14% !important;
          background: @color-444547;
          color: #fff;
          box-sizing: content-box;
          display: flex;
          flex-direction: column;
          .header-top {
            padding: 0 0.2rem;
            height: 64%;
            display: flex;
            align-items: center;
            .numEcharts {
              width: 90%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              .rightTop-echarts {
                flex: 1;
              }
            }
            .right-icons {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: space-around;
              i {
                font-size: 0.5rem;
              }
            }
          }
          .header-bottom {
            flex: 1;
            display: flex;
            border-top: 0.05rem solid #333638;
            border-bottom: 0.08rem solid #5a5a5b;
            box-sizing: border-box;
            .floor {
              width: 64%;
              display: flex;
              justify-content: space-around;
              background: #383b3b;
              // padding: 0 0.20rem;
              .floor-info {
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .search {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .right-main {
          display: flex;
          .video {
            width: 64%;
            .livePlayerAll {
              height: 100%;
              /deep/ .video-wrapper {
                padding: 0 !important;
                height: 100%;
              }
            }
          }
          .scrollBoard {
            padding-left: 0.05rem;
            box-sizing: border-box;
            flex: 1;
            border-left: 0.01rem solid #353535;
            display: flex;
            flex-direction: column;
            .scrollBoard-title {
              height: 0.3rem;
              display: flex;
              align-items: center;
              padding-left: 0.1rem;
            }
            .scrollBoard-info {
              height: calc(100% - 0.3rem);
              /deep/ .header {
                font-size: 0.17rem;
              }
              /deep/ .row-item {
                font-size: 0.15rem;
                .index {
                  padding: 0 0.02rem;
                }
              }
            }
          }
        }
        .right-footer {
          color: #fff;
          height: 30% !important;
          display: flex;
          padding: 0;
          .footer-main {
            width: 64%;
            display: flex;
            flex-direction: column;
            .footer-header {
              background: #484d4c;
              align-items: center;
              height: 0.3rem;
              display: flex;
              justify-content: space-between;
              margin-bottom: 0.05rem;
              .header-left {
                width: 60%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: #38414d;
                height: 100%;
                .header-info {
                  display: flex;
                  justify-content: center;
                }
              }
              .header-more {
                flex: 1;
                display: flex;
                justify-content: flex-end;
              }
            }
            .footer-envetCharts {
              height: 45%;
              background: @color-444547;
              padding-left: 0.1rem;
              margin-right: 0.1rem;
              display: flex;
              .eventTrend-title {
                width: 2rem;
              }
              .eventTrend-ecahrtsBox {
                flex: 1;
                height: 100%;
              }
            }
            .footer-carSotpState {
              box-sizing: border-box;
              margin-right: 0.1rem;
              flex: 1;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-left: 0.1rem;
              border-top: 0.05rem solid #416e4c;
              border-bottom: 0.05rem solid #416e4c;
              .carSotpState-title {
                width: 1.6rem;
              }
              .chartsParking {
                flex: 1;
                height: 100%;
              }
            }
          }
          .footer-last {
            flex: 1;
            margin-left: 0.05rem;
            display: flex;
            flex-direction: column;
            .last-head {
              width: 100%;
              height: 0.3rem;
              background: #4b4b4c;
            }
            .last-info {
              flex: 1;
              display: flex;
              justify-content: space-between;
              background: #36393b;
              .last-content {
                flex: 1;
                padding-right: 0.1rem;
                display: flex;
                flex-direction: column;
                &:last-child {
                  padding-right: 0;
                }
                .last-commonTitle {
                  display: flex;
                  justify-content: center;
                }
                .last-content-top {
                  background: #313132;
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  .line {
                    height: 0.1rem;
                    background: #585859;
                    border-radius: 0.04rem;
                  }
                  .progress-circle {
                    box-sizing: border-box;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.1rem;
                    .progress-info {
                      width: 100%;
                      height: 100%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }
                  }
                }
                .last-content-bottom {
                  flex: 1;
                  background: #1f1f20;
                  padding-top: 0.1rem;
                  box-sizing: border-box;
                  .bottom-info {
                    background: #585859;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
