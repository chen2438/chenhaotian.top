---
description: 发布于 2023-07-05
categories:
- vps
date: 2023-07-05
slug: tencent-sh
title: 腾讯云 轻量云 上海 VPS 测评
updated: 
tags: 
- vps
- tencent-cloud
copyright: true
---

# 腾讯云 轻量云 上海 VPS 测评

腾讯云国内机非常稳定，一年用下来没有掉线丢包的情况。国内机适合与备案域名一起建站使用。带宽很小，图片资源使用CDN加速或海外机提供。

### 规格

CPU - 2核 内存 - 2GB

系统盘 - SSD云硬盘 40GB

流量包 - 200GB/月（带宽：3Mbps）

### 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.04
更新日志：融合怪十代目(集合百家之长)(专为测评频道小鸡而生)
-------------------感谢teddysun和superbench和yabs开源-------------------
 CPU 型号          : Intel(R) Xeon(R) Gold 6148 CPU @ 2.40GHz
 CPU 核心数        : 2
 CPU 频率          : 2394.374 MHz
 CPU 缓存          : 28160 KB
 硬盘空间          : 40.0 GB (8.2 GB 已用)
 内存              : 1982 MB (229 MB 已用)
 Swap              : 4095 MB (22 MB 已用)
 系统在线时间      : 45 days, 11 hour 56 min
 负载              : 0.13, 0.09, 0.03
 系统              : Debian GNU/Linux 11 (bullseye)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-19-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,支持回环
 ASN组织           : AS45090 Shenzhen Tencent Computer Systems Company Limited
 位置              : Beijing / CN
 地区              : Beijing
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1049 Scores
 2 线程测试(多核)得分: 		1760 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		20011.24 MB/s
 单线程写测试:		14630.66 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		3.1 MB/s (768 IOPS, 33.33s)		9.8 MB/s (2391 IOPS, 10.70s)
 1GB-1M Block		79.4 MB/s (76 IOPS, 13.21s)		159 MB/s (151 IOPS, 6.58s)
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：100
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
黑名单记录统计:(有多少黑名单网站有记录)
  无害记录： 0
  恶意记录： 0
  可疑记录： 0
  未检测到记录： 87
ip234数据库：
  欺诈分数(越低越好)：41
ip-api数据库:
  手机流量: No
  代理服务: No
  数据中心: No
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱：No
-----------------------全国延迟检测--本脚本原创-------------------------
 联通无锡	   11  | 联通上海	   5   | 联通郑州	   20  |
 联通长沙	   19  | 联通沈阳	   37  | 联通西宁	   39  |
 联通福州	   41  | 联通海南	   45  | 电信上海	   5   |
 电信长沙	   0   | 电信合肥	   10  | 电信武汉	   26  |
 电信南京	   14  | 电信新乡	   18  | 电信苏州	   12  |
 电信兰州	   32  | 电信天津	   29  | 电信长春	   50  |
 电信乌鲁木齐	   67  | 电信拉萨	   63  | 电信天津	   23  |
 电信重庆	   27  | 电信成都	   37  | 移动杭州	   9   |
 移动福州	   26  | 移动成都	   39  | 移动兰州	   47  |
 移动Beijing	   27  |
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟
Speedtest.net	 3.60Mbps	 146.96Mbps	 3.53ms	
中国香港	 3.20Mbps	 105.93Mbps	 27.42ms	
日本东京	 3.64Mbps	 155.82Mbps	 3.66ms	
联通上海5G	 3.20Mbps	 193.89Mbps	 4.47ms	
联通WuXi	 0.00Mbps	 0.00Mbps	 11.46ms	
电信上海	 2.87Mbps	 191.36Mbps	 14.12ms	
电信Zhenjiang5G	 3.30Mbps	 179.89Mbps	 11.58ms	
移动杭州5G	 2.90Mbps	 159.01Mbps	 9.71ms	
移动Beijing	 3.30Mbps	 192.08Mbps	 26.91ms	
------------------------------------------------------------------------
 总共花费      : 6 分 26 秒
 时间          : Wed Jul  5 11:42:39 CST 2023
------------------------------------------------------------------------
```

### ping.pe

![img_YWeEKsdb](https://media.opennet.top/i/2023/07/04/64a419f813f8a.png)