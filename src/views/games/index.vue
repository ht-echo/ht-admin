<template>
  <el-row class="game" :span="24">
    <el-col :span="12" class="child">
      <div class="tictactoeBox">
        <el-row class="tictactoe" :span="24">
          <el-col
            :span="8"
            @click.native="handleClick(index)"
            class="tictactoe-info"
            v-for="(item, index) in history[stepNumber].squares"
            :key="index"
          >
            <span>{{ item }}</span>
          </el-col>
        </el-row>
        <div class="tictactoe_right">
          <div class="player">
            <span v-if="!winner">Next player: {{ xIsNext ? "X" : "O" }}</span>
            <span v-else>Winner is: {{ winner }}</span>
          </div>
          <div class="showStep">
            <div>
              <el-button @click="reset" size="small">{{
                `Go to game start`
              }}</el-button>
            </div>
            <div v-for="(item, index) in history" :key="index">
              <el-button v-if="index > 0" @click="goBack(index)" size="small"
                >{{ `Go to move` }}{{ ` #${index}` }}</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="12" class="child"> </el-col>
    <el-col :span="12" class="child"> </el-col>
    <el-col :span="12" class="child"> </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      xIsNext: true,
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      winner: null
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleClick(i) {
      const history = this.history.slice(0, this.stepNumber + 1);
      const current = history[history.length - 1].squares;
      const squares = current.slice();
      if (squares[i] != null || this.winner) {
        return;
      }
      squares[i] = this.xIsNext ? "X" : "O";
      this.history = history.concat([{ squares: squares }]);
      this.xIsNext = !this.xIsNext;
      this.stepNumber = this.history.length - 1;
      if (this.calculateWinner(squares)) {
        return;
      }
    },
    reset() {
      this.history = [{ squares: Array(9).fill(null) }];
      this.xIsNext = true;
      this.stepNumber = 0;
      this.winner = null;
    },
    goBack(step) {
      this.winner = null;
      this.stepNumber = step;
      this.xIsNext = step % 2 === 0;
      this.history = this.history.slice(0, this.stepNumber + 1);
    },
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          this.winner = squares[a];
          return squares[a];
        }
      }
      return null;
    }
  }
};
</script>

<style lang="less" scoped>
.game {
  height: calc(100vh - 50px);
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  .child {
    width: 50%;
    height: 50%;
    background: #ddd;
    border: 1px solid #fff;
    box-sizing: border-box;
    display: flex;
  }
  .tictactoeBox {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    .tictactoe_right {
      min-width: 258px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .tictactoe {
      width: 200px;
      height: 200px;
      background: #fff;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .tictactoe-info {
        height: 33%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        &:hover {
          background: #f8f8f8;
        }
      }
    }
    .player {
      margin-right: 14px;
    }
  }
}
</style>
