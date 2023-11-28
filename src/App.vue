<template>
  <header>
    <input type="text" class="reg-txt" v-model="regTxt" />
    <button type="button" class="reg-btn" @click="parse">解析</button>
  </header>
  <div>
    <section v-for="reg in regList" class="expression-container">
      <div class="expression">{{ reg.value }}</div>
      <div class="analysis">
        <ExpNodeList :expNodeList="reg.expNodeList" />
      </div>
    </section>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import generateNode, { NodeTypes } from "reg-exp-generate-node";
import ExpNodeList from "./components/ExpNodeList.vue";

const regList = reactive([]);
const regTxt = ref("");
const parse = function () {
  let { expNodeList, groupNum } = generateNode(regTxt.value);
  regList.unshift({
    value: regTxt.value,
    expNodeList,
    groupNum,
  });
};
</script>
<style scoped lang="less">
.reg-txt {
  width: 300px;
  height: 30px;
  padding: 0 10px;
  vertical-align: middle;
  word-break: break-all;
}
.reg-btn {
  padding: 0 30px;
  line-height: 30px;
  vertical-align: middle;
  cursor: pointer;
}
.expression-container {
  margin-top:10px;
}
.expression {
  background-color: bisque;
  font-weight: bold;
  color: brown;
  padding: 10px;
}
.analysis {
  background-color: #f1ecec;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
</style>
