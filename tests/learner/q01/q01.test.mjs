import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeDraft } from '../../../exercises/Q01.ts';


test('测试用例1', () => {
    const input = {
        title: '12345806805392786983786488jiehjjnjsnjgnejkrjoi2uo90vub sou891hvi 3u1oo9',
        description: '测试标题',
        category: 'support',
    };
    assert.deepEqual(normalizeDraft(input));
});


test('测试用例2', () => {
    const input = {
        title: '测试详情',
        description: '秘鲁秘鲁😊    ',
        category: 'support',
    };
    assert.deepEqual(normalizeDraft(input));
});


test('测试用例3', () => {
    const input = {
        title: '测试3',
        description: '测试3',
        category: '秘鲁',
    };
    assert.deepEqual(normalizeDraft(input));
});