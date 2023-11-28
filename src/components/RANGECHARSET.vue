<template>
  <div class="node-unit">
    <div class="chars">{{ min }}-{{ max }}</div>
    <div class="comment">{{ min }}到{{ max }}之间的字符</div>
  </div>
</template>
<script setup>
const props = defineProps({
  node: Object,
});
let { min, max } = props.node;
min = String.fromCharCode(min);
max = String.fromCharCode(max);
</script>
