<template>
  <div class="map">
    <div class="mapContainer" id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longitude: "",
      latitude: ""
    };
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      //地图加载
      this.map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 16
        // mapStyle: "amap://styles/darkblue" //设置地图背景图
      });
      this.getLocation();
    },
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function() {
        let geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 5000,
          buttonPosition: "RB", //定位按钮的停靠位置
          //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
          showCircle: false //定位成功后用圆圈表示定位精度范围，默认：true
        });

        self.map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status, result) {
          if (status == "complete") {
            onComplete(result);
          } else {
            onError(result);
          }
        });
        function onComplete(data) {
          // data是具体的定位信息
          // console.log('定位成功信息：', data);
          console.log("定位经纬度：", data.position);
          self.longitude = data.position.lng;
          self.latitude = data.position.lat;
        }
        function onError(data) {
          // 定位出错
          //   self.$message({ type: "info", message: "精准定位失败" });
          // 调用ip定位
          self.getLngLatLocation();
        }
      });
    },
    getLngLatLocation() {
      AMap.plugin("AMap.CitySearch", function() {
        let citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            console.log("通过ip获取当前城市：", result);
            // let citybounds = result.bounds;
            //地图显示当前城市
            // map.setBounds(citybounds);
          }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.map {
  padding: 30px 20px 0;
  display: flex;
  justify-content: center;
  align-self: center;
  .mapContainer {
    width: 80%;
    height: 40vw;
  }
}
</style>
