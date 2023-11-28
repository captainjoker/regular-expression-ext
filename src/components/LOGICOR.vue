<template>
  <div class="unit-box">
    <div class="unit-box">
      <ExpNodeList :expNodeList="node.left || []" />
      <div class="unit-box-comment">逻辑或左边</div>
    </div>
    <div class="unit-box">
      <ExpNodeList :expNodeList="node.right || []" />
      <div class="unit-box-comment">逻辑或右边</div>
    </div>
    <div class="unit-box-comment">匹配左边或者右边</div>
  </div>
</template>
<script setup>
import ExpNodeList from "./ExpNodeList.vue";

const props = defineProps({
  node: Object,
});
</script>
<style scoped lang="less">

</style>
