## 起因

最近在整理电脑的时候，发现微信聊天记录占了好几个 G ，突然好奇这些年到底发了多少条消息，和哪些人聊得最多，什么时候最爱发消息...

然后发现了 `chatlog` 这个项目，可以解密微信聊天记录，但只有命令行界面。作为一个前端开发者，我觉得如果能用图表的形式展示这些数据会更有意思，于是就有了这个项目。

## 项目介绍

**Chatlog Web** - 基于 Vue.js 的聊天记录可视化管理系统，https://github.com/sinyu1012/chatlog-web

简单来说，就是给你的微信聊天记录做一个"年度报告"，但比微信官方的更详细、更好看。

## 主要功能

### 📊 数据可视化分析
- **消息趋势分析** - 看看你的话痨程度变化
- **用户活跃度热力图** - 发现你的聊天黄金时段
- **聊天类型分布** - 你是文字党还是表情包大户？
- **高频词汇分析** - 看看你的口头禅是什么
- **24 小时活跃度** - 深夜是否还在熬夜聊天
- **群聊活跃度排行** - 哪个群最热闹


## 使用体验

![示例图]( https://raw.githubusercontent.com/sinyu1012/chatlog-web/refs/heads/main/images/analytics.jpg)

整个界面设计比较现代化，用了渐变色和卡片式布局，看起来还算舒服。数据加载也做了优化，基本上是秒开的感觉。

最有意思的是活跃度热力图，能清楚看出自己的作息规律，比如我发现自己晚上 10-12 点是聊天高峰期 😅


## 开源信息

- **GitHub**: https://github.com/sinyu1012/chatlog-web
- **协议**: Apache License 2.0
- **技术栈**: Vue.js + Element Plus + ECharts

## 写在最后

这个项目算是我的一个小实验，主要是想看看能不能用现代化的方式来展示聊天数据。如果你也对自己的聊天记录好奇，或者想学习 Vue.js + 数据可视化的实践，可以试试看。

当然，项目还有很多可以改进的地方，比如增加更多的分析维度，优化图表交互等。如果有兴趣一起完善的话，欢迎提 PR 或者 Issue 。

对隐私比较敏感的朋友可以放心，所有数据都是在本地处理的，不会上传到任何服务器。

---

*第一次在 V2EX 分享项目，如果有什么问题或建议，请轻拍 🙏*