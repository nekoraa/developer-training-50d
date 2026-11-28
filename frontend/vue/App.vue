<script setup lang="ts">
const title = '协作工单工作台';

const entries = [
  {
    href: '/vue.html',
    label: 'Vue 工作台',
    note: '正式练习界面；列表、新建与详情自 Q04 起实现。',
  },
  {
    href: '/index.html',
    label: '静态练习',
    note: '起始工程的静态入口，用于对照参考界面与设计变量。',
  },
];

const stages = [
  { id: 'Q01', label: '需求梳理', state: '进行中' },
  { id: 'Q02–Q03', label: '版本管理与共用控件', state: '待开始' },
  { id: 'Q04', label: '工单列表、新建与详情', state: '待开始' },
];
</script>

<template>
  <header data-testid="app-header" class="app-header">Engineering Lab</header>

  <main data-testid="app-main" class="app-main">
    <h1>{{ title }}</h1>
    <p class="lead">
      起始工程只提供入口导航，工单业务界面尚未预置。当前阶段：Q01 需求梳理。
    </p>

    <nav aria-label="练习入口">
      <ul class="entry-list">
        <li v-for="entry in entries" :key="entry.href" class="entry">
          <a class="entry-link" :href="entry.href">{{ entry.label }}</a>
          <p class="entry-note">{{ entry.note }}</p>
        </li>
      </ul>
    </nav>

    <section aria-labelledby="stage-heading">
      <h2 id="stage-heading">实现顺序</h2>
      <dl class="stage-list">
        <div v-for="stage in stages" :key="stage.id" class="stage">
          <dt>{{ stage.id }} · {{ stage.label }}</dt>
          <dd>{{ stage.state }}</dd>
        </div>
      </dl>
    </section>
  </main>
</template>

<style scoped>
.app-header {
  padding: 12px 16px;
}

.app-main {
  box-sizing: border-box;
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 16px;
}

h1 {
  margin: 0 0 12px;
  font-size: 24px;
}

h2 {
  margin: 24px 0 8px;
  font-size: 16px;
}

.lead {
  margin: 0 0 24px;
  line-height: 1.6;
}

.entry-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.entry {
  flex: 1 1 260px;
  min-width: 0;
}

.entry-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 16px;
}

.entry-note {
  margin: 8px 0 0;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.stage-list {
  margin: 0;
}

.stage {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 8px;
}

.stage dt,
.stage dd {
  margin: 0;
}
</style>
