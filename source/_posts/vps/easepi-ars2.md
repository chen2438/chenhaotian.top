---
description: 发布于 2023-08-14
categories:
- vps
date: 2023-08-14
slug: easepi-ars2
title: 易有云 EasePi ARS2 测评
updated: 
tags: 
- vps
- easepi
- nas
copyright: true
---

# 易有云 EasePi ARS2 测评

### 规格

|   部件   |                             详情                             |
| :------: | :----------------------------------------------------------: |
|   产品   |                             ARS2                             |
|   CPU    | Realtek RTD1296，64 位四核 ARM Cortex-A53，最高工作频率为 1.4GHz。 |
|   内存   |              板载 DDR4 4G 超大内存。不可扩展。               |
|   存储   |           板载 8G eMMC，摆脱TF卡，刷机折腾更方便。           |
|   网口   |              原生双千兆，极速体验上网娱乐游戏。              |
|   USB    |                 双 USB3.0，外接设备不用愁。                  |
| 硬盘接口 | 1个常规 SATA 硬盘接口和供电接口、1个 M.2 SATA 接口，全方位扩展存储。自备硬盘。 |
|   电源   |               DC 12V/2A，待机功率3W，更省电。                |
|   开关   |                 电源开关、软重启/重置开关。                  |
|   扩展   |                  预留 TTL 孔位，方便极客。                   |
|   LED    |                  电源状态，刷机状态指示灯。                  |

### 测试

在 OpenWrt 上用 Docker 装了个 Ubuntu，可能有略微性能损耗

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AArch64 Processor Cortex-A53
 CPU 核心数        : 4
 CPU 缓存          : L1: 0.00 KB / L2: 0.00 KB / L3: 0.00 KB
 硬盘空间          : 952.44 GiB / 1.79 TiB
 启动盘路径        : overlay
 内存              : 884.38 MiB / 3.51 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 13 hour 9 min
 负载              : 0.27, 0.37, 0.37
 系统              : Ubuntu 18.04.6 LTS (aarch64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : aarch64 (64 Bit)
 内核              : 4.9.282+
 TCP加速方式       : 未设置TCP拥塞控制算法
 虚拟化架构        : Docker
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS4134 CHINANET-BACKBONE
 IPV4 位置         : Hangzhou / Zhejiang / CN
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		688 Scores
 4 线程测试(多核)得分: 		2634 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		3601.55 MB/s
 单线程写测试:		3299.42 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		10.0 MB/s (2451 IOPS, 10.44s)		61.0 MB/s (14893 IOPS, 1.72s)
 1GB-1M Block		6.4 MB/s (6 IOPS, 163.68s)		390 MB/s (372 IOPS, 2.69s)
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 41②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Unknown (Maybe Fixed Line ISP)⑤  isp⑧  business⑨  
  公司类型(company_type):business①  isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No② ⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  Yes①   No② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱：No
-----------------------全国延迟检测--本脚本原创-------------------------
 联通上海	   14  | 联通无锡	   19  | 联通长沙	   24  |
 联通西宁	   48  | 联通沈阳	   43  | 联通福州	   38  |
 联通海南	   42  | 电信上海	   7   | 电信苏州	   10  |
 电信南京	   11  | 电信合肥	   12  | 电信新乡	   24  |
 电信福州	   18  | 电信武汉	   18  | 电信长春	   36  |
 电信拉萨	   66  | 电信乌鲁木齐	   71  | 电信成都	   37  |
 移动杭州	   9   | 移动连云港	   20  | 移动福州	   17  |
 移动成都	   52  | 移动无锡	   212 |
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟
Speedtest.net	 39.91Mbps	 162.90Mbps	 5.43ms	
洛杉矶		 40.15Mbps	 326.57Mbps	 11.58ms	
联通湖南5G	 40.08Mbps	 315.39Mbps	 11.00ms	
联通上海5G	 40.24Mbps	 197.09Mbps	 15.01ms	
电信上海	 40.06Mbps	 115.80Mbps	 13.59ms	
电信Zhenjiang5G	 39.64Mbps	 192.86Mbps	 11.62ms	
移动杭州5G	 40.45Mbps	 500.25Mbps	 11.66ms	
移动Chengdu	 40.22Mbps	 331.07Mbps	 13.86ms	
------------------------------------------------------------------------
 总共花费      : 8 分 44 秒
 时间          : Mon Aug 14 08:42:14 CST 2023
------------------------------------------------------------------------
```

