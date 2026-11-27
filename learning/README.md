# 交付记录

每项在对应的 `Qxx/` 目录提交 `交付.md`、`独立编码.md`、`上下文.md` 和 `审查.md`。填写内容见 [交付记录模板](../course/模板/交付模板.md)。

将复现步骤、命令输出和必要截图放在对应任务目录。PR 链接和最终 SHA 在培训系统登记，公开材料使用课程模拟数据。
## 项目启动 & 任务校验
# 安装依赖
npm install

# 运行当前任务自测
npm run test:learner

# 任务规则检查
npm run check:task -- Q02

# 类型检查
npm run typecheck