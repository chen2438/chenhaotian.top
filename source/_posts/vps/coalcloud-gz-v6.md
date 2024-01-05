---
description: 发布于 2023-12-30
categories:
- vps
date: 2023-12-30
slug: coalcloud-gz-v6
title: 碳云 广州移动 IPv6 NAT VPS 测评
updated: 
tags: 
- vps
- coalcloud
copyright: true
---

# 碳云 广州移动 IPv6 NAT VPS 测评

附带IPv4入口，适用于移动优化好的有IPv6的落地

AFF: [https://www.coalcloud.net/aff.php?aff=143](https://www.coalcloud.net/aff.php?aff=143)

```
月付95折优惠码：IPv6v4inGZCMY5%off
季付9折优惠码：IPv6v4inZSCMJ10%off
年付8折优惠码：IPv6v4inZSCMN20%off
```

## 规格

```
广州移动IPv6(V4入) 套餐1
¥16.60CNY 每月
1 vCPU
1024MB 内存
20G 硬盘
200M 带宽
500G 流量
10个 IPV4端口
```

## 测试

### IPv4入口

入口禁Ping，TCPing测试如下

![image-20231230103905527](https://media.opennet.top/i/2023/12/30/h2ldmo-0.png)

### IPv6

Ping测试如下

![image-20231230104043487](https://media.opennet.top/i/2023/12/30/h3nmao-0.png)

![image-20231230104419078](https://media.opennet.top/i/2023/12/30/h5nkw8-0.png)

### GB5

```
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-10-18                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2023-12-30 03:32:25 CET
净测试时长：2分38秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 5.10.0-18-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.1-0-g3208b098f51a-prebuilt.qemu.org

处理器信息
  Name                          Intel Xeon Platinum 8124M
  Topology                      1 Processor, 1 Core
  Identifier                    GenuineIntel Family 6 Model 85 Stepping 4
  Base Frequency                2.99 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      4.00 MB
  L3 Cache                      16.0 MB

内存信息
  Size                          977 MB

单核测试分数：676
多核测试分数：670
详细结果链接：https://browser.geekbench.com/v5/cpu/22091482
```

### Speedtest

实测搭配 ByteVirt SG v6 可跑 170Mbps 左右

![image-20231230110445846](https://media.opennet.top/i/2023/12/30/hhyh6q-0.png)
