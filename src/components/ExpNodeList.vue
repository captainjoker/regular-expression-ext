<template>
  <component
    v-for="node in expNodeList"
    :node="node"
    :is="nodes[node.type]"
  />
</template>
<script setup>
import { reactive, ref } from "vue";
import CHARS from "./CHARS.vue";
import BOUNDARY from "./BOUNDARY.vue";
import ASSERTIONS from "./ASSERTIONS.vue";
import CHARSET from "./CHARSET.vue";
import GROUP from "./GROUP.vue";
import GROUPID from "./GROUPID.vue";
import LOGICOR from "./LOGICOR.vue";
import PRESETSET from "./PRESETSET.vue";
import RANGECHARSET from "./RANGECHARSET.vue";

const nodes = {
  CHARS,
  BOUNDARY,
  ASSERTIONS,
  CHARSET,
  GROUP,
  GROUPID,
  LOGICOR,
  PRESETSET,
  RANGECHARSET,
};
const props = defineProps({
  expNodeList: Array,
});
</script>
