---
description: 发布于 2022-10-26, 修订于 2023-05-21
categories:
- linux
date: 2022-10-26
slug: locale-zh
title: Linux 终端更改为中文
updated: 2023-05-21
tags:
- linux
- terminal
- zh-CN
copyright: false
---

# Linux 终端更改为中文

```bash
apt update -y
apt install locales -y
dpkg-reconfigure locales
```

空格选中 `zh_CN.UTF-8`

回车继续

![image-20230521194346177](https://media.opennet.top/i/2023/05/21/646a03f2e456e.png)

![image-20230521194403341](https://media.opennet.top/i/2023/05/21/646a04039c37b.png)

重启系统生效

```bash
reboot
```

随后可享受母语 Linux 体验

![image-20230521194543472](https://media.opennet.top/i/2023/05/21/646a0467c9893.png)

建议配合`Asia/Shanghai`时区使用

```bash
timedatectl set-timezone Asia/Shanghai
```

