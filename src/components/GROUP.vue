<template>
  <div class="group-unit">
    <div class="group-border">
      <ExpNodeList :expNodeList="node.value || []" />
    </div>
    <div class="wrap-container comment">
      分组#{{ node.groupId }}，{{ comment }}
    </div>
  </div>
</template>
<script setup>
import { getQuantifierNode } from "../util";
import ExpNodeList from "./ExpNodeList.vue";

const props = defineProps({
  node: Object,
});
let comment = props.node.quantifierNode
  ? getQuantifierNode(props.node.quantifierNode)
  : "匹配1次";
</script>
