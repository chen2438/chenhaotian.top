---
description: 发布于 2024-01-20
categories:
- linux
date: 2024-01-20
slug: gost
title: 使用 GOST 搭建安全隧道
updated:
tags:
- linux
- gost
copyright: true
---

# 使用 GOST 搭建安全隧道

> 以 Docker 为例

## 场景1

实现A机器的3000端口映射到B机器的3001服务，要求两台机器使用隧道连接而不是端口转发。隧道协议为`relay`，传输类型为`mwss`

链路为 A:3000 -> B:3000 -> B:3001

### 客户端 A

```yaml
version: '3.8'
services:
  gost:
    image: ginuerzh/gost:latest
    container_name: gost
    restart: always
    network_mode: "host"
    command: "-L udp://:3000 -L tcp://:3000 -F relay+mwss://服务端IP地址:3000?nodelay=true"
```

### 服务端 B

```yaml
version: '3.8'
services:
  gost:
    image: ginuerzh/gost:latest
    container_name: gost
    restart: always
    network_mode: "host"
    command: "-L relay+mwss://:3000/:3001"
```

## 场景2

在A机器的3000端口开启带用户认证的Socks5服务，由B机器作为Socks5服务的流量出口。两台机器的隧道也添加用户认证。

### 客户端 A

```yaml
version: '3.8'
services:
  gost:
    image: ginuerzh/gost:latest
    container_name: gost
    restart: always
    network_mode: "host"
    command: "-L socks5://S5用户名:S5密码@:3000 -F relay+mwss://隧道用户名:隧道密码@服务端IP:3000?nodelay=true"
```

### 服务端 B

```yaml
version: '3.8'
services:
  gost-s5:
    image: ginuerzh/gost:latest
    container_name: gost-s5
    restart: always
    network_mode: "host"
    command: "-L relay+mwss://隧道用户名:隧道密码@:3000"
```

