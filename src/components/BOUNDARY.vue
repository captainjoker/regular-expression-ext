<template>
  <div class="node-unit">
    <div class="chars">&emsp;</div>
    <div class="comment">{{ comment }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  node: Object,
});
const comment = getComment(props.node);
function getComment(node) {
  let comment = "";
  switch (node.value) {
    case "^":
      comment = "开头";
      break;
    case "$":
      comment = "结尾";
      break;
    case "b":
      comment = "单词边界";
      break;
    case "B":
      comment = "非单词边界";
      break;
  }
  return comment;
}
</script>
