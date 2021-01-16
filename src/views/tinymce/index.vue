<template>
  <div class="tinymce">
    <div>
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";

export default {
  components: { Tinymce },
  data() {
    return {
      content: `<h1 style="text-align: center;">Welcome to the Tinymce demo!</h1>`
    };
  }
};
</script>

<style lang="less" scoped>
.tinymce{
    padding: 20px;
}
    </style>
