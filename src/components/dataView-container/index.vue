<template>
  <div
    :style="{
      transform: `scale(${scale}) translate(-50%, -50%)`,
      WebkitTransform: `scale(${scale}) translate(-50%, -50%)`,
      width: '100%',
      height: '56.25vw'
    }"
  ></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  computed: {
    scale() {
      const width = 1920,
        height = 1080;
      let ww = window.innerWidth / width;
      let wh = window.innerHeight / height;
      return ww < wh ? ww : wh;
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
