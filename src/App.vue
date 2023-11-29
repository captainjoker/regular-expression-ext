<template>
  <header>
    <input
      type="text"
      class="reg-txt"
      v-model="regTxt"
      placeholder="请输入正则表达式"
    />
    <button type="button" class="reg-btn" @click="parse">解 析</button>
  </header>
  <div class="body">
    <section v-if="errorMsg" class="error">
      {{ errorMsg }}
    </section>
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
const errorMsg = ref("");
const regTxt = ref("");
const parse = function () {
  try {
    let { expNodeList, groupNum } = generateNode(regTxt.value);
    regList.unshift({
      value: regTxt.value,
      expNodeList,
      groupNum,
    });
    regTxt.value = "";
    errorMsg.value = "";
  } catch (e) {
    errorMsg.value = e.message;
  }
};
</script>
<style scoped lang="less">
header {
  display: flex;
}
.body {
  overflow-y: auto;
  flex: 1;
  margin: 10px 0;
}
.reg-txt {
  flex: 1;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  word-break: break-all;
  border: #f1ecec 1px solid;
  border-radius: 5px 0 0 5px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
}
.reg-btn {
  padding: 0 30px;
  font-size: 18px;
  line-height: 40px;
  vertical-align: middle;
  cursor: pointer;
  border: bisque 1px solid;
  color: brown;
  border-radius: 0 5px 5px 0;
  background-color: bisque;
  &:hover {
    opacity: 0.7;
  }
}
.expression-container {
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
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
  padding: 10px;
}
.error {
  background-color: #f56c6c;
  color: #fff;
  padding: 10px;
  font-size: 18px;
}
</style>
