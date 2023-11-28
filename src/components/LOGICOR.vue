<template>
  <div class="group-unit logicor-wrap-container group-border">
    <div class="logicor-wrap group-border">
      <ExpNodeList :expNodeList="node.left || []" />
      <div class="logicor-info comment">逻辑或左边</div>
    </div>
    <div class="logicor-wrap group-border">
      <ExpNodeList :expNodeList="node.right || []" />
      <div class="logicor-info comment">逻辑或右边</div>
    </div>
    <div class="logicor-info comment">匹配左边或者右边</div>
  </div>
</template>
<script setup>
import ExpNodeList from "./ExpNodeList.vue";

const props = defineProps({
  node: Object,
});
</script>
<style scoped lang="less">
.logicor-wrap-container{
    margin-bottom: 25px;
    padding-top: 10px;
}
.logicor-wrap {
  display: inline-block;
  margin-bottom: 25px;
  margin-right: 10px;
}
.logicor-info {
  position: absolute;
  margin-top: 5px;
}
</style>
