import type { Actor, Ticket } from './types.ts';

// 独立编码区：禁止Agent生成、补全或修改。规则见本题任务书。
export function normalizeDraft(draft: Record<string, unknown>): {
  value: { title: string; description: string; category: string } | null;
  errors: { field: string; code: string }[];
} {
  //throw new Error('Q01 尚未实现');
  // 获取数据
  const rawTitle = draft.title;
  const rawDescription = draft.description;
  const rawCategory = draft.category;
  // 清洗数据
  let title = typeof rawTitle === 'string' ? rawTitle.trim() : '';
  let description = typeof rawDescription === 'string' ? rawDescription.trim() : '';
  //  " support " 这种前后带空格的值应当拒绝
  // let category = typeof rawCategory === 'string' ? rawCategory.trim() : '';
  let category = typeof rawCategory === 'string' ? rawCategory : '';
  // 校验
  const errors: { field: string; code: string}[] = [];
  const allowCategory = ['support','billing','other'];

  const titleCodePointCount = [...title].length
  if (!(titleCodePointCount >= 1 && titleCodePointCount <= 60)){
    errors.push({field:'title',code:'INVALID'});
  }
  const descCodePointCount = [...description].length
  if (!(descCodePointCount >= 1 && descCodePointCount <= 1000)) {
    errors.push({field:'description',code:'INVALID'})
  }

  if (!allowCategory.includes(category)) {
    errors.push({ field: 'category', code:'INVALID'});
  }

  if (errors.length > 0 ) {
    return { value: null, errors};
  } else {
    return {
      value: { title, description, category},
      errors: []
    }
  };
}
// 随意更改