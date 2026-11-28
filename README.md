# 开发培训任务

本仓库提供工单管理系统的起始工程和任务书。按 [任务目录](course/总览.md) 完成各项工作。Q05、Q10、Q15、Q20 安排现场验收。

## 开始前

1. 先加入公司 GitHub 组织。在培训系统的「我的任务」打开「加入公司的 GitHub 组织」，填写 GitHub 用户名和邮箱，确认后即领取 Q01。
2. 在本仓库点击 **Fork**，将项目复制到自己的 GitHub 账号。克隆自己的 Fork，在本地完成开发。
3. 按任务书新建分支，独立完成核心函数并单独提交。完成工程改动与验证后，将分支推送到自己的 Fork。
4. 向本仓库的 `main` 提交 PR。将 **PR 链接、最终提交 SHA、完成说明、PR 截图和任务要求的验证附件** 交到培训系统。后续任务从自己上一项的通过版本继续。

仓库、分支和截图位置见 [提交指南](course/引导/02_GitHub交付.md)。任务分配、截止时间和审核结果以培训系统为准。

开始写方案前先看 [业务原话练习](course/固定材料/业务原话练习.md)。需要快速做原型时，按 [Vibe Coding 与开发验收](course/规范/Agent协作.md) 把本轮要验证的一小段先跑通。

## 启动工程

使用 Node.js 24.14 或更新的 24.x，在克隆后的工程目录执行以下命令。

```sh
npm ci
npm run check:base
npm test
npm run typecheck
npm run build
npm run dev
```

开发服务启动后，打开 [工单工作台](http://127.0.0.1:4780/vue.html)。起始版本提供 25 条模拟工单、v1 API 和 Vue 入口。

首次执行浏览器检查前运行 `npx playwright install chromium`。运行浏览器检查时请先停止开发服务。

### 启动验证记录（Q01）

2026-11-27 在本次练习环境按上述命令逐条执行，实际结果如下。

| 命令 | 实际结果 |
|---|---|
| `npm ci` | 安装 53 个包，0 个漏洞 |
| `npm run check:base` | 通过：Node.js 24.14.1、20 项任务、121 个文本文件为 UTF-8 |
| `npm test` | 7 个 v1 契约用例全部通过 |
| `npm run typecheck` | 通过；无输出即无类型错误 |
| `npm run build` | 通过；产物输出到 `dist/` |
| `npm run dev` | 4780 提供页面，4781 提供接口，两端口均未占用 |

启动后的入口核对：

- `http://127.0.0.1:4780/vue.html` 返回 200，页面渲染 `h1`；
- `/api/training/health` 返回 `{"data":{"status":"ok","mode":"local-training-only"}}`；
- 以 `X-Training-Actor: user-01` 请求 `/api/training/v1/tickets?pageSize=20`，`meta.total` 为 25 条中的可见子集，返回记录的 `ownerId` 全部等于 `user-01`，证明权限过滤在服务端生效。

本地数据文件位于 `.local/training-data.json`，已被 `.gitignore` 排除，不进入提交。

## 参考资料

- [训练与验收要求](course/规范/训练方式.md)
- [接口与数据规范](course/契约/接口与数据.md)
- [核心函数规范](course/核心编码契约.md)
- [交付记录模板](course/模板/交付模板.md)
- [界面示例](course/reference/示例截图.md)与 [UI 验收标准](course/规范/UI与交互.md)
