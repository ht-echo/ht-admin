<template>
  <div class="planTable">
    <el-button
      @click="planTable = true"
      type="primary"
      class="editVideoPlan"
      icon="el-icon-edit"
      size="small"
    >
      模板编辑
    </el-button>
    <el-dialog
      class="plansDialog"
      width="1200px"
      title="模板相关"
      :visible.sync="planTable"
      :append-to-body="true"
    >
      <p class="videoTitle">
        录像时段--单击选择或取消-- 单击不放滑动可快速选择--单击标题可反选行或列--
        蓝色表示保留--灰色表示删除
      </p>
      <div class="plans">
        <div class="plans-header">
          <div
            @click="resetPlan('click')"
            class="plans-row-name plans-row-title"
          >
            <i class="el-icon-refresh"></i>
            重置
          </div>

          <div
            @click="chooseAllHour(index)"
            class="plans-row-name plans-header-row"
            v-for="(item, index) in 24"
            :key="item"
          >
            {{ index }}时
          </div>
        </div>
        <div
          class="plans-row"
          v-for="(item, index) in week"
          :key="'星期' + item"
        >
          <div class="plans-row-name" @click="chooseAllDay(index)">
            星期{{ item }}
          </div>
          <div class="plans-row-info">
            <div
              @mousedown="mousedownPlanHour(index, secondIndex)"
              @mouseup="isMousedown = false"
              @contextmenu.prevent
              @mouseover="mousemovePlanHour(index, secondIndex)"
              :class="[
                planHourData[index][secondIndex]
                  ? 'chooseClass'
                  : 'noChooseClass',
              ]"
              class="plans-hour"
              v-for="(value, secondIndex) in 24"
              :key="'info' + value"
            ></div>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="planTable = false">取 消</el-button>
        <el-button type="primary" @click="submitPlan">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planTable: false,
      planHourData: [],
      week: ["一", "二", "三", "四", "五", "六", "日"],
    };
  },
  created() {
    this.resetPlan();
  },
  methods: {
    submitPlan() {
      this.$emit("submitPlan", this.planHourData);
      this.planTable = false;
    },
    resetPlan(event) {
      if (event == "click") {
        this.$confirm("恢复初始配置，当前的编辑会丢失，是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          for (let i = 0; i < 7; i++) {
            this.planHourData.push([]);
            for (let index = 0; index < 24; index++) {
              this.planHourData[i][index] = false;
            }
          }
        });
      } else {
        for (let i = 0; i < 7; i++) {
          this.planHourData.push([]);
          for (let index = 0; index < 24; index++) {
            this.planHourData[i][index] = false;
          }
        }
      }
      this.$forceUpdate();
    },
    planHourCommon(index, secondIndex) {
      this.planHourData[index][secondIndex] = !this.planHourData[index][
        secondIndex
      ];
      this.$forceUpdate();
    },
    mousedownPlanHour(index, secondIndex) {
      this.isMousedown = true;
      this.planHourCommon(index, secondIndex);
    },
    mousemovePlanHour(index, secondIndex) {
      if (this.isMousedown) {
        this.planHourCommon(index, secondIndex);
      }
    },
    chooseAllHour(secondIndex) {
      for (let index = 0; index < 7; index++) {
        this.planHourCommon(index, secondIndex);
      }
    },
    chooseAllDay(index) {
      for (let secondIndex = 0; secondIndex < 24; secondIndex++) {
        this.planHourCommon(index, secondIndex);
      }
    },
  },
};
</script>

<style lang="less">
.plansDialog {
  .videoTitle {
    color: #d3d3d3;
    font-style: oblique;
    padding-bottom: 5px;
  }
  .plans {
    user-select: none;
    background: #fff;
    .plans-row-name {
      cursor: pointer;
      border-left: 1px solid #eee;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #1a5283;
      border-top: 1px solid #eee;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background: #226dae;
      }
    }
    .plans-header {
      line-height: 26px;
      display: flex;
      align-items: center;
      .plans-header-row {
        flex: 1;
      }
    }
    .plans-row {
      display: flex;
      .plans-row-info {
        flex: 1;
        display: flex;
        .noChooseClass {
          background: #00c0ef;
          &:hover {
            background: #23d4ff;
          }
        }
        .chooseClass {
          background: #dddddd;
          &:hover {
            background: #f7f7f7;
          }
        }
        .plans-hour {
          // background: #00c0ef;
          width: 40px;
          height: 40px;
          flex: 1;
          border-top: 1px solid #eee;
          border-left: 1px solid #eee;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
