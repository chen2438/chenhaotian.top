---
description: 发布于 2023-08-21
categories:
- linux
date: 2023-08-21
slug: openwrt-nezha
title: OpenWRT 安装哪吒监控
updated: 
tags:
- linux
- openwrt
- nezha
copyright: false
---

# OpenWRT 安装哪吒监控

> 注意：本文仅适用于哪吒监控v0，不适用于新版哪吒监控

在 https://github.com/naiba/nezha/releases 下载对应架构的 `zip` 包，软路由通常是 `nezha-agent_linux_arm64.zip`

解压后把二进制文件放入`/root`

运行 `chmod +x /root/nezha-agent` 赋予执行权限，然后创建 `/etc/init.d/nezha-service`：

注意此处与 [在-openwrt-中安装-agent](https://nezha.wiki/guide/agent.html#%E5%9C%A8-openwrt-%E4%B8%AD%E5%AE%89%E8%A3%85-agent) 不同的是要禁用自动更新`--disable-auto-update`。如果你的软路由可以访问github，就不需要禁用

`nezha-agent` 在启动时会自动更新，此时如果软路由不能连接到 github 就会报错

```bash
#!/bin/sh /etc/rc.common

START=99
USE_PROCD=1

start_service() {
 procd_open_instance
 procd_set_param command /root/nezha-agent -s 面板通信地址:端口 -p 秘钥 --debug --disable-auto-update
 procd_set_param respawn
 procd_close_instance
}

stop_service() {
    killall nezha-agent
}

restart() {
 stop
 sleep 2
 start
}
```

运行 `chmod +x /etc/init.d/nezha-service` 赋予执行权限

启动服务： `/etc/init.d/nezha-service enable && /etc/init.d/nezha-service start`
