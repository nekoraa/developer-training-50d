import { parseBranch } from '../../exercises/Q02.ts';

// import assert from 'node:assert' 导入Node.js 自带的断言工具，用来做判断 预期结果是不是和实际结果一样
import assert from 'node:assert';

// 用例1：正常情况
const res1 = parseBranch('feat/Q02/github-delivery');
// assert.deepEqual() 专门对比对象
assert.deepEqual(res1, {
  kind: 'feat',
  task: 'Q02',
  slug: 'github-delivery'
});

// 用例2：kind非法，返回null
const res2 = parseBranch('6666/Q02/github-delivery');
// assert.equal(a,null)  a为null返回null分则报错
assert.equal(res2, null);

// 用例3：分割不是3段
const res3 = parseBranch('feat/q02-github-delivery');
assert.equal(res3, null);

// 用例4：空片段
const res4 = parseBranch('feat//test');
assert.equal(res4, null);

console.log('全部通过');