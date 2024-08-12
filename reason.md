---
outline: deep
---

# 建站原因

刚学习vitepress，想练一下手；其次，顺便把之前学习的归一下类

`html5`、`css` 、`vue` 、`electron`、`uniapp`.

```md
altert('简单写个代码')
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果呢

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## 结果呢

请点击 [...](https://vitepress.dev/reference/runtime-api#usedata).进入下一章节
