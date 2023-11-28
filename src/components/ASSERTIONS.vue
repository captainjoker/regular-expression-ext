<template>
  <div class="group-unit">
    <div>
        <ExpNodeList :expNodeList="node.value || []"/>
    </div>
    <div class="wrap-container comment">
      断言：是否{{ node.isNone ? "不匹配" : "匹配" }}；但不消耗字符，只做判断
    </div>
  </div>
</template>
<script setup>
import ExpNodeList from "./ExpNodeList.vue";
const props = defineProps({
  node: Object,
});
</script>
