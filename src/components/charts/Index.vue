<template>
  <div :ref="chart" class="chart"></div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from "echarts";
import { merge } from "lodash";
import BASIC_OPTION from "./default_option.js";
// import { COLOR_ARRAY } from "../color";
import ResizeListener from "element-resize-detector";
import uuidv1 from "uuid/v1";
export default {
  // name: 'Charts',
  props: {
    axis: {
      type: Object,
      default: () => {
        return {
          xAxis: {
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#fff",
              },
              interval: 0,
            },
          },
          yAxis: {
            splitNumber: 2,
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
        };
      },
    },
    xAxisType: {
      type: String,
      default: "category",
    },
    yAxisType: {
      type: String,
      default: "value",
    },
    xAxisShow: {
      type: Boolean,
      default: true,
    },
    yAxisShow: {
      type: Boolean,
      default: true,
    },
    axisLineShow: {
      type: Boolean,
      default: true,
    },
    seriesData: {
      type: Array,
      default: () => [],
    },
    extraOption: {
      type: Object,
      default: () => {},
    },
    xAxisData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      echartsID: "",
      chart: null,
    };
  },
  created() {
    this.echartsID = uuidv1(); //获取随机id;
  },
  mounted() {
    this.chart = echarts.init(this.$el);
    this.updateChartView();
    window.addEventListener("resize", this.handleWindowResize);
    this.addChartResizeListener();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    fontSize(res) {
      let docEl = document.documentElement,
        clientWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
      if (!clientWidth) return;
      let fontSize = 100 * (clientWidth / 1920);
      return res * fontSize;
    },
    assembleDataToOption() {
      // const formatter = (name) => {
      //   const total = this.seriesData.reduce((acc, cur) => acc + cur.value, 0);
      //   const data = this.seriesData.find((item) => item.name === name) || {};
      //   const percent = data.value
      //     ? `${Math.round((data.value / total) * 100)}%`
      //     : "0%";
      //   return `{a|${name}}{b|${percent}}`;
      // };
      return merge(
        {},
        BASIC_OPTION,
        // { color: COLOR_ARRAY },
        {
          // legend: { formatter },
          xAxis: {
            show: this.xAxisShow,
            type: this.xAxisType,
            data: this.xAxisData,
            axisLabel: {
              textStyle: {
                fontSize: this.fontSize(0.12),
              },
            },
            axisLine: {
              show: this.axisLineShow,
              lineStyle: {
                color: "#666",
                width: this.fontSize(0.01),
              },
            },
          },
          yAxis: {
            show: this.yAxisShow,
            type: this.yAxisType,
            axisLabel: {
              textStyle: {
                fontSize: this.fontSize(0.12),
              },
            },
            axisLine: {
              show: this.axisLineShow,
              lineStyle: {
                color: "#828a8f",
                width: this.fontSize(0.01),
              },
            },
          },
          series: this.seriesData,
        },
        this.axis,
        this.extraOption
      );
    },

    // 对chart元素尺寸进行监听，当发生变化时同步更新echart视图
    addChartResizeListener() {
      const instance = ResizeListener({
        strategy: "scroll",
        callOnAdd: true,
      });

      instance.listenTo(this.$el, () => {
        if (!this.chart) return;
        this.chart.resize();
      });
    },

    //更新echart视图
    updateChartView() {
      if (!this.chart) return;
      const fullOption = this.assembleDataToOption();
      this.chart.setOption(fullOption, true);
      console.log(fullOption);
    },
    // 当窗口缩放时，echart动态调整自身大小
    handleWindowResize() {
      if (!this.charts) return;
      this.chart.resize();
    },
  },
  watch: {
    xData: {
      deep: true,
      handler() {
        this.updateChartView();
      },
    },
    seriesData: {
      deep: true,
      handler() {
        this.updateChartView();
      },
    },
  },
};
</script>
<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
