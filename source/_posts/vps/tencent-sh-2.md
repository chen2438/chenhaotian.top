---
description: 发布于 2023-09-25
categories:
- vps
date: 2023-09-25
slug: tencent-sh-2
title: 腾讯云 轻量云 上海 VPS 测评
updated: 
tags: 
- vps
- tencent-cloud
copyright: true
---

# 腾讯云 2核2G 轻量云 上海 VPS 测评

Lighthouse 三周年庆~

### 规格

轻量 2核2G

上海/广州/北京 100%CPU性能

带宽 3M

系统盘 40GB SSD盘

月流量 200GB

时长 自购买1年内有效

58元 约4.83元/月

### 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.09.22
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Gold 6133 CPU @ 2.50GHz
 CPU 核心数        : 2
 CPU 频率          : 2494.140 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 8.00 MB / L3: 27.50 MB
 硬盘空间          : 4.72 GiB / 39.26 GiB
 启动盘路径        : /dev/vda2
 内存              : 308.14 MiB / 1.92 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 24 min
 负载              : 0.45, 0.19, 0.23
 系统              : Ubuntu 22.04.3 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-84-generic
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Restric NAT
 IPV4 ASN          : AS45090 Shenzhen Tencent Computer Systems Company Limited
 IPV4 位置         : Shanghai / Shanghai / CN
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		978 Scores
 2 线程测试(多核)得分: 		1469 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		18649.16 MB/s
 单线程写测试:		15311.54 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		4.0 MB/s (973 IOPS, 26.31s)		12.0 MB/s (2928 IOPS, 8.74s)
 1GB-1M Block		89.1 MB/s (85 IOPS, 11.77s)		178 MB/s (169 IOPS, 5.89s)
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 100②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测88 ③
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
-----------------------全国延迟检测--本脚本原创-------------------------
 联通郑州	   20  | 联通无锡	   5   | 联通上海	   3   |
 联通福州	   25  | 联通太原	   29  | 联通长沙	   23  |
 联通西宁	   44  | 联通沈阳	   39  | 联通成都	   36  |
 联通海南	   43  | 电信上海	   5   | 电信福州	   19  |
 电信合肥	   12  | 电信武汉	   18  | 电信长沙	   0   |
 电信宁波	   17  | 电信长春	   48  | 电信石家庄	   24  |
 电信天津	   26  | 电信拉萨	   64  | 电信兰州	   39  |
 电信Nanjing	   9   | 电信江苏	   8   | 电信重庆	   28  |
 电信天津	   24  | 移动连云港	   17  | 移动福州	   19  |
 移动杭州	   7   | 移动郑州	   30  | 移动成都	   39  |
 移动兰州	   74  |
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟
Speedtest.net	 3.37Mbps	 168.87Mbps	 3.28ms	
洛杉矶		 3.24Mbps	 161.68Mbps	 3.28ms	
法兰克福	 3.08Mbps	 182.67Mbps	 3.26ms	
联通WuXi	 0.00Mbps	 0.00Mbps	 5.87ms	
联通湖南5G	 3.00Mbps	 39.50Mbps	 24.98ms	
电信江苏5G	 0.00Mbps	 0.00Mbps	 8.58ms	
电信Nanjing5G	 0.00Mbps	 0.00Mbps	 9.32ms	
移动Chengdu	 3.20Mbps	 142.46Mbps	 3.27ms	
------------------------------------------------------------------------
 总共花费      : 6 分 19 秒
 时间          : Mon Sep 25 21:20:54 CST 2023
------------------------------------------------------------------------
```

![image-20230925210702595](https://media.opennet.top/i/2023/09/25/yuh25i-0.png)