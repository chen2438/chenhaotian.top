---
description: 发布于 2023-11-23
categories:
- linux
date: 2023-11-23
slug: openwrt-docker-compose
title: OpenWRT 安装 Docker Compose
updated: 
tags:
- linux
- openwrt
- docker-compose
copyright: false
---

# OpenWRT 安装 Docker Compose

参考：https://docs.docker.com/compose/install/linux/#install-using-the-repository

到 https://github.com/docker/compose/releases/ 寻找合适的版本

```
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.23.3/docker-compose-linux-armv7 -o $DOCKER_CONFIG/cli-plugins/docker-compose
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
docker compose version
```

![image-20231123191615301](https://media.opennet.top/i/2023/11/23/vntsqt-0.png)
