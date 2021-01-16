<template>
  <div class="code">
    <!-- bind to a data property named `code` -->
    <highlightjs
      class="highlightCode"
      language="javascript"
      autodetect
      :code="code"
    />
  </div>
</template>

<script>
import myRequest from "@/utils/myRequest.js";
export default {
  data() {
    return {
      code: myRequest
    };
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.code {
  padding: 20px;
  display: flex;
  justify-content: center;
  .highlightCode {
    width: 90%;
    /deep/ code {
      padding: 0 20px;
      line-height: 24px;
    }
  }
}
</style>
