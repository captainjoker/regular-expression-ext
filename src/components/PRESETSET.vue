<template>
  <div class="node-unit">
    <div class="chars">\{{ node.value }}</div>
    <div class="comment">{{ text }}{{ comment }}</div>
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
let text = getText(props.node);

function getText(node) {
  let text = "";
  switch (node.value) {
    case "D":
      text = "任何非数字的字符";
      break;
    case "d":
      text = "任何数字 ";
      break;
    case "S":
      text = "除空格以外的单个字符";
      break;
    case "s":
      text = "空白字符";
      break;
    case "W":
      text = "非来自基本拉丁字母的单词字符";
      break;
    case "w":
      text = "基本拉丁字母中的任何字母数字字符";
      break;
    case "f":
      text = "换页符";
      break;
    case "n":
      text = "换行符";
      break;
    case "r":
      text = "回车符";
      break;
    case "v":
      text = "垂直制表符";
      break;
    case "t":
      text = "水平制表符";
      break;
  }
  return text;
}
</script>
