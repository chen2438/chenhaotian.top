---
description: 发布于 2023-08-21
categories:
- linux
date: 2023-08-21
slug: zfile-auto-start
title: ZFile 设置开机启动
updated: 
tags:
- linux
- zfile
- systemd
copyright: false
---

# ZFile 设置开机启动

以 Debian / Ubuntu 为例

```bash
vim /etc/systemd/system/zfile.service
```

填入以下内容，注意核对 ZFile 安装路径，默认为 `/root/zfile`

```bash
[Unit]
Description=zfile
After=multi-user.target basic.target sockets.target sysinit.target network-pre.target
[Service]
Type=forking
ExecStart=bash /root/zfile/bin/start.sh
ExecReload=bash /root/zfile/bin/restart.sh
ExecStop=bash /root/zfile/bin/stop.sh
PrivateTmp=true
[Install]
WantedBy=multi-user.target
```

设置开机启动

```bash
bash /root/zfile/bin/stop.sh #停止 zfile
systemctl daemon-reload #重新加载 systemd 配置文件
systemctl enable zfile #设置开机启动
systemctl start zfile #启动 zfile
```

其他命令

```bash
systemctl status zfile #查看状态
systemctl stop zfile #关闭
systemctl restart zfile #重启
```

