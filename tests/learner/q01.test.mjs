import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeDraft } from '../../exercises/Q01.ts';

test('反例：混合字符的码点',() => {
    const title = '😀'.repeat(31);
    const result = normalizeDraft({ title, description:'ok',category:'support'});

    assert.deepEqual(result.errors,[]);
    assert.equal(result.value.title,title);
});

test('反例：category的大写与空格不做容错',() => {
    const result = normalizeDraft({
        title: '有效标题',
        description: '有效描述',
        category: '  Support  ',
    });

    assert.equal(result.value, null);
    assert.deepEqual(result.errors,[{ field: 'category', code: 'INVALID'}]);
});

test('反例：输入未被修改', () => {
    const original = {title: '   标题带空格   ', description: '描述内容', category: 'bulling'};
    const snapshot = { ...original };

    normalizeDraft(original);

    assert.deepEqual(original,snapshot);
});