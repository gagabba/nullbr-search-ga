# 🎬 影视搜索 (Movie Search)

本项目是一个极简的影视资源搜索工具，基于 Cloudflare Pages 和 Workers 部署。它不存储任何影视资源，仅作为 [nullbr.online](https://nullbr.online/) 的前端展示与 API 转发工具。

## ✨ 功能特点

- 🚀 **极速搜索**：支持电影、电视剧搜索，实时获取结果。
- 📱 **移动端优化**：纯原生 JS 编写，完美适配手机浏览器，支持 PWA（添加到主屏）。
- 📁 **资源聚合**：分段展示 115 网盘资源、中文字幕磁力链接。
- 📺 **剧集支持**：支持电视剧按季、按集展开查看磁力资源。
- ⚙️ **灵活配置**：支持在前端页面直接配置自定义 `APP_ID` 和 `API_KEY`。
- 💰 **零成本部署**：完全利用 Cloudflare 的免费额度。

## 🛠️ 技术架构

- **前端**：Cloudflare Pages (纯 HTML/JS/CSS)
- **后端**：Cloudflare Workers (反向代理，解决跨域及 API 鉴权)
- **数据源**：nullbr API

## 🚀 快速部署

### 1. 部署 API (Workers)
1. 将 `worker.js` 的代码复制到 Cloudflare Workers。
2. 配置您的 `wrangler.toml`。
3. 执行 `wrangler deploy`。

### 2. 部署前端 (Pages)
1. 修改 `index.html` 中的 `BASE_API` 为您部署好的 Worker 地址。
2. 执行 `wrangler pages deploy . --project-name your-project-name`。

## ⚙️ 配置说明

为了保护账号安全，本项目建议：
- 在 `index.html` 中保持默认 `APP_ID`。
- 在页面设置中填入您自己的 `API_KEY`。

## 📄 免责声明

1. 本项目仅供学习和研究使用，代码完全开源。
2. 搜索结果的所有权及解释权归原资源站点 [nullbr.online](https://nullbr.online/) 所有。
3. 请勿将本项目用于任何商业用途。

---
如果本项目对你有帮助，欢迎点个 Star 🌟
