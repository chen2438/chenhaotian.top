---
description: 发布于 2024-03-07
categories:
- linux
date: 2024-03-07
slug: hyperv-nat
title: 为Hyper-V虚拟机配置端口映射并暴露到公网
updated: 
tags:
- linux
- hyperv
copyright: true
---

# 为Hyper-V虚拟机配置端口映射并暴露到公网

> 参考： https://www.cnblogs.com/kasnti/p/11727755.html

## 网络拓扑图

![a9755ecc0df4d48fc130ffc032b1eae0_720](https://media.opennet.top/i/2024/03/07/stf04t-0.png)

## 端口映射和网络配置

### 软路由

可以使用系统自带端口转发（方便），或gost程序（灵活）。

#### iStoreOS

网络-防火墙-端口转发

![image-20240307175441911](https://media.opennet.top/i/2024/03/07/sqx3a0-0.png)

#### GOST

docker compose 配置如下

```yaml
version: '3.8'
services:
  debian-ssh:
    image: ginuerzh/gost:latest
    container_name: debian-ssh
    restart: always
    network_mode: "host"
    command: "-L udp://:2201/192.168.100.2:2201 -L tcp://:2201/192.168.100.2:2201"
```

### 无线路由器

小米AX3600设置端口转发

![image-20240307180022197](https://media.opennet.top/i/2024/03/07/sudoge-0.png)

![image-20240307180142752](https://media.opennet.top/i/2024/03/07/sv3ceu-0.png)

### Windows 主机

#### 配置防火墙规则

![image-20240307180329508](https://media.opennet.top/i/2024/03/07/sw7dqx-0.png)

![image-20240307180425557](https://media.opennet.top/i/2024/03/07/sws1pz-0.png)

![image-20240307180455526](https://media.opennet.top/i/2024/03/07/swyc68-0.png)

其他设置全部默认即可，如有必要，可添加UDP规则

#### 配置端口转发

打开PowerShell 管理员，运行以下命令添加规则

其中connectaddress将在之后设置

```powershell
netsh interface portproxy add v4tov4 listenport=2201 connectport=22 connectaddress=192.168.137.10
netsh interface portproxy show all
```

![image-20240307183937589](https://media.opennet.top/i/2024/03/07/u5i2fp-0.png)

如果要删除规则，运行`netsh interface portproxy delete v4tov4 listenport=2201`

#### 新建内部网络虚拟交换机

![image-20240307184335390](https://media.opennet.top/i/2024/03/07/u7vbcr-0.png)

![image-20240307184355376](https://media.opennet.top/i/2024/03/07/u7zd0g-0.png)

#### 修改虚拟网卡IP地址

![image-20240307185450605](https://media.opennet.top/i/2024/03/07/ueidij-0.png)

![image-20240307184633658](https://media.opennet.top/i/2024/03/07/u9nbe6-0.png)

#### 应用到虚拟机的网卡

![image-20240307184724405](https://media.opennet.top/i/2024/03/07/ua6sg5-0.png)

#### 虚拟机访问外网

这一步在 **Hyper-V 虚拟机 修改网络设置**之后做

![image-20240307185622680](https://media.opennet.top/i/2024/03/07/ufjabk-0.png)

确定时会提示虚拟网卡的IP地址将被设置成192.168.137.1，由于我们本身就设置的137，所以此处点我们不再需要做任何修改

（如果不想用137网段，需要修改注册表默认的共享网络IP地址）

设置成功后即可检查外网连通性

![image-20240307185848423](https://media.opennet.top/i/2024/03/07/ugvq4e-0.png)

### Hyper-V 虚拟机

#### 修改网络设置

此步骤不同OS的虚拟机各不相同，以下是带桌面的Debian 12操作方式

![image-20240307185010143](https://media.opennet.top/i/2024/03/07/ubn7ft-0.png)

![image-20240307185032532](https://media.opennet.top/i/2024/03/07/uc0tn7-0.png)

完成后关闭并重新打开有线网络按钮

在宿主机上ping 192.168.137.10 能ping通说明成功

## 结果展示

以上所有设置完成后，即可在公网连接虚拟机SSH，同时虚拟机能访问外网

![image-20240307190400081](https://media.opennet.top/i/2024/03/07/ujx7so-0.png)
