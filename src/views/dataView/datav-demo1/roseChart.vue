<template>
  <div id="rose-chart">
    <div class="rose-chart-title">累计计量资金分布</div>
    <!-- <dv-charts :option="option" /> -->
    <div class="pieCharts" ref="pieCharts"></div>
  </div>
</template>

<script>
export default {
  name: "RoseChart",
  data() {
    return {
      option: {}
    };
  },
  created() {
    this.createData();
  },
  mounted() {
    let myChart = this.$echarts.init(this.$refs.pieCharts);
    myChart.setOption(this.option);
    myChart.resize();
  },
  methods: {
    createData() {
      this.option = {
        grid: {
          left: "3%",
          right: "5%",
          top: "5%",
          bottom: "3%",
          width: "auto",
          height: "auto"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "路面危害" },
              { value: 310, name: "路基危害" },
              { value: 274, name: "交安设施" },
              { value: 235, name: "日常养护" },
              { value: 400, name: "交通事故" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            labelLine: {
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
    }
  }
};
</script>

<style lang="less">
#rose-chart {
  width: 30%;
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .rose-chart-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .pieCharts {
    flex: 1;
  }
}
</style>
