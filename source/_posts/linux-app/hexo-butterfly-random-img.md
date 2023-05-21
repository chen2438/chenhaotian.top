---
description: 转载于 2023-05-21
categories:
- linux-app
date: 2023-05-21
slug: hexo-butterfly-random-img
title: Hexo Butterfly 主题添加随机图 API 支持
updated:
tags:
- linux-app
- hexo
copyright: false
---

转载于：https://blog.mitsumune.top/2023/02/13/hexo_butterfly%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0%E5%AF%B9%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api%E7%9A%84%E6%94%AF%E6%8C%81/

### 前言

在配置butterfly主题的时候发现一个问题，如果将主頁、文章封面的默认top_img配置为同一个随机图片api时会出现所有图片都相同的情况：

[![1](https://media.opennet.top/i/2023/05/21/6469fedd8d858.jpg)](https://img.mitsumune.top/blog/hexo_butterfly主题添加对随机图片api的支持/1.jpg)

### 如何解决？

最开始我的解决方案是配置多个随机图片api：

[![2](https://media.opennet.top/i/2023/05/21/6469fedceb8dd.jpg)](https://img.mitsumune.top/blog/hexo_butterfly主题添加对随机图片api的支持/2.jpg)

用了一段时间后对随机的图片不是很满意，~~为了符合自己的XP~~就自己弄了个随机图片api。然后就又回到了最开始的问题，刚好之前在浏览Issues的时候发现有人提交了个[PR](https://github.com/jerryc127/hexo-theme-butterfly/pull/1054)可惜并未通过。详细配置方法如下：

1. 打开`hexo根目录\themes\butterfly\scripts`新建一个random_img.js文件。[![3](https://media.opennet.top/i/2023/05/21/6469fedd0135d.jpg)](https://img.mitsumune.top/blog/hexo_butterfly主题添加对随机图片api的支持/3.jpg)

2. 将以下代码复制进random_img.js文件并保存。

```javascript
/**
 * Butterfly
 * ramdom cover
 */

'use strict'

hexo.extend.filter.register('before_post_render', function (data) {
    const { config } = this
    if (config.post_asset_folder) {
        const imgTestReg = /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/
        const topImg = data.top_img
        const cover = data.cover
        if (topImg && topImg.indexOf('/') === -1 && imgTestReg.test(topImg)) data.top_img = data.path + topImg
        if (cover && cover.indexOf('/') === -1) data.cover = data.path + cover
    }

    if (data.cover === false) {
        data.randomcover = randomCover()
        return data
    }

    data.cover = data.cover || randomCover()
    return data
}, 0)

function randomCover() {
    const theme = hexo.theme.config
    let cover
    let num

    if (theme.cover && theme.cover.default_cover) {
        if (!Array.isArray(theme.cover.default_cover)) {
            cover = theme.cover.default_cover
        } else {
            num = Math.floor(Math.random() * theme.cover.default_cover.length)
            cover = theme.cover.default_cover[num]
        }
    } else {
        cover = theme.default_top_img || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    }
    if (theme.cover.suffix) {
        if (theme.cover.suffix == 1)
            cover = cover + ("?" + Math.ceil(Math.random() * 10000))
        else if (theme.cover.suffix == 2)
            cover = cover + ("&" + Math.ceil(Math.random() * 10000))
    }
    return cover
}
```

3. 打开butterfly主题配置文件：在cover:插入`suffix: 1`并保存（目的是在链接后面加入后缀`?spm={随机数}` 0是不使用后缀、1是?加随机数；2是&加随机数）[![4](https://media.opennet.top/i/2023/05/21/6469fedcee9bd.jpg)](https://img.mitsumune.top/blog/hexo_butterfly主题添加对随机图片api的支持/4.jpg)

4. 最后运行以下命令查看是否生效：

```bash
hexo clean
hexo generate
hexo serve
```

[![5](https://media.opennet.top/i/2023/05/21/6469fedd9137f.jpg)](https://img.mitsumune.top/blog/hexo_butterfly主题添加对随机图片api的支持/5.jpg)