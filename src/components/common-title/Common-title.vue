<template>
  <div class="common-title">
    <div class="common-title-info">
      <div :class="{ letterOut: commonTitleNew.letterOutIsShow }">
        <i
          class="iconfont"
          :class="`icon-${commonTitleNew.iconClass}`"
          :style="{
            fontSize: commonTitleNew.iconFontSize,
            color: commonTitleNew.fontColor,
          }"
        ></i>
      </div>
      <div class="common-title-name">
        <div class="title-name-top">
          <div class="name-zh">
            {{ commonTitleNew.name }}
          </div>
          <div class="title-num">
            {{ commonTitleNew.num }}
          </div>
        </div>
        <div class="name-en">{{ commonTitleNew.en }}</div>
      </div>
    </div>
    <div class="common-title-bottomNum">
      {{ commonTitleNew.bottomName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commonTitle: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    commonTitleNew() {
      return Object.assign(
        {
          name: "",
          bottomName: "",
          num: "",
          en: "",
          iconClass: "rect",
          iconFontSize: "0.16rem",
          fontColor: "#acd569",
          letterOutIsShow: false,
        },
        this.commonTitle
      );
    },
  },
};
</script>

<style lang="less" scoped>
.common-title {
  color: #fff;
  .iconfont {
    vertical-align: middle;
  }
  .common-title-info {
    display: flex;
    align-items: center;
    vertical-align: middle;
    .letterOut {
      border: 0.01rem solid #6c6b73;
      border-radius: 50%;
      padding: 0.05rem;
      width: 0.30rem;
      height: 0.30rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .common-title-name {
      padding-left: 0.06rem;
      .title-name-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .name-zh {
          font-size: 0.20rem;
          padding-right: 0.17rem;
        }
        .title-num {
          font-size: 0.18rem;
        }
      }
      .name-en {
        font-size: 0.12rem;
      }
    }
  }
  .common-title-bottomNum {
    font-size: 0.24rem;
  }
}
</style>
