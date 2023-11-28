<template>
    <div class="node-unit">
      <div class="chars">#{{ node.value }}<span class="font-axi">【分组id】</span></div>
      <div class="comment">{{ comment }}</div>
    </div>
  </template>
  <script setup>
  import { getQuantifierNode } from "../util";
  const props = defineProps({
    node: Object,
  });
  let comment = props.node.quantifierNode
    ? getQuantifierNode(props.node.quantifierNode)
    : "匹配1次";
  </script>
  