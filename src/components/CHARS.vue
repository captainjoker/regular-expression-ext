<template>
  <div class="node-unit">
    <div class="chars">{{ node.value }}</div>
    <div v-if="!inSet" class="comment">{{ comment }}</div>
  </div>
</template>
<script setup>
import { getQuantifierNode } from "../util";
const props = defineProps({
  node: Object,
  inSet: Boolean
});
let comment = props.node.quantifierNode
  ? getQuantifierNode(props.node.quantifierNode)
  : "匹配1次";
</script>
