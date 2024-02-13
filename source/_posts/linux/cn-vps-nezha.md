---
description: 转载于 2024-02-12
categories:
- linux
date: 2024-02-12
slug: cn-vps-nezha
title: 国内服务器安装哪吒监控
updated: 
tags:
- linux
- nezha
copyright: false
---

# 国内服务器安装哪吒监控

> 参考： https://www.nodeseek.com/post-32055-1

国内服务器安装哪吒监控（agent）有多种方法，如使用官方镜像、proxychains代理、WARP代理等，这里介绍手动下载nezha-agent的方法，适用于只有IPv6的国内机。

## 下载agent

从 https://github.com/nezhahq/agent/releases 下载 nezha-agent 并上传到国内服务器，使用 `unzip` 解压，将二进制文件放到`/opt/nezha/agent`。

这里可以使用反代加速github，在国内机上直接下载，参考步骤如下（请自行确认反代地址、agent版本号和平台）

```bash
mkdir /opt/nezha/agent -p
cd /opt/nezha/agent
wget https://mirror.vayki.com/proxy/https://github.com/nezhahq/agent/releases/download/v0.15.19/nezha-agent_linux_amd64.zip
unzip nezha-agent_linux_amd64.zip
chmod +x nezha-agent
```

## 配置systemd

```bash
vim /etc/systemd/system/nezha-agent.service
```

创建`/etc/systemd/system/nezha-agent.service`文件，填入以下代码

自行修改代码中的`-s IP地址/域名:5555 -p 密钥`部分

注意：如果国内机只有IPv6可访问到面板服务器，必须为面板服务器的域名添加AAAA IPv6记录（面板服务器可套WARP获取IPv6）

```bash
[Unit]
Description=Nezha Agent
After=syslog.target
#After=network.target
#After=nezha-dashboard.service

[Service]
# Modify these two values and uncomment them if you have
# repos with lots of files and get an HTTP error 500 because
# of that
###
#LimitMEMLOCK=infinity
#LimitNOFILE=65535
Type=simple
User=root
Group=root
WorkingDirectory=/opt/nezha/agent/
ExecStart=/opt/nezha/agent/nezha-agent -s IP地址/域名:5555 -p 密钥
Restart=always
#Environment=DEBUG=true

# Some distributions may not support these hardening directives. If you cannot start the service due
# to an unknown option, comment out the ones not supported by your version of systemd.
#ProtectSystem=full
#PrivateDevices=yes
#PrivateTmp=yes
#NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
```

以上完成后，即可配置agent开机自启

```bash
systemctl daemon-reload
systemctl enable nezha-agent
systemctl restart nezha-agent
```
