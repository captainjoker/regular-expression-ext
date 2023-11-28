<template>
  <div class="unit-box">
    <ExpNodeList :expNodeList="node.value" />
    <div class="unit-box-comment">其中任意一个字符{{ comment }}</div>
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
