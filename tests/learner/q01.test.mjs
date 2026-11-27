import { normalizeDraft} from '../../exercises/Q01.ts';
import assert from 'node:assert';

// 例1：空标签
const case1 = {
    title: "   ",
    description: "正常描述",
    category:"support"
};
const res1 = normalizeDraft(case1);
// deepEqual 深度对比
assert.deepEqual(res1.errors, [{field:'title',code:'INVALID'}]);

// 例子2 61个表情
const longEmoji = "😊".repeat(61);
const case2 = {
    title:longEmoji,
    description:"测试",
    category:"support"
};
const res2 = normalizeDraft(case2);
assert.deepEqual(res2.errors,[{field:'title',code:'INVALID'}]);

// 例子3 非法分类
const case3 =  {
    title:"正常标题",
    description:"ook",
    category:"gasad"
};
const res3 = normalizeDraft(case3);
assert.deepEqual(res3.errors,[{field:"category",code:"INVALID"}]);

console.log("通过");