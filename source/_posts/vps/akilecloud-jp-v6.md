---
description: 发布于 2023-07-19
categories:
- vps
date: 2023-07-19
slug: akilecloud-jp-v6
title: AkileCloud 日本 IPv6 VPS 测评
updated: 
tags: 
- vps
- akile
copyright: true
---

# AkileCloud 日本 IPv6 VPS 测评

AFF：https://akile.io/shop/server?areaId=5&nodeId=31&planId=134&aff_code=7757a50f-522e-40a9-a088-891f3f581d51

解锁日本流媒体

## 规格

JPLite-IPV6-随机盲盒

CPU 1核 ｜ 内存 256 M

硬盘 5 GB ｜ 带宽 500M

流量 400 G/月 ｜ 超出后限速10Mbps

重置流量 ¥12.00

IPV4 0个 ｜ IPV6 1个

¥9.99/月

## 测试

### WARP OFF

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.16
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7402P 24-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 2794.748 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 1.20 GiB / 7.71 GiB
 启动盘路径        : /dev/sda1
 内存              : 81.23 MiB / 361.76 MiB
 Swap              : 512 KiB / 256.00 MiB
 系统在线时间      : 0 days, 1 hour 20 min
 负载              : 0.06, 0.02, 0.00
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-22-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 无法检测
 IPV6 ASN          : AS51847 Nearoute Limited
 IPV6 位置         : Koganei / Tokyo
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1627 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		40283.38 MB/s
 单线程写测试:		18173.19 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		64.2 MB/s (15.68 IOPS, 1.63s)		128 MB/s (31302 IOPS, 0.82s)
 1GB-1M Block		4.4 GB/s (4170 IOPS, 0.24s)		5.4 GB/s (5169 IOPS, 0.19s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 223.78 MB/s  (55.9k) | 1.38 GB/s    (21.7k)
Write      | 224.37 MB/s  (56.0k) | 1.39 GB/s    (21.8k)
Total      | 448.15 MB/s (112.0k) | 2.78 GB/s    (43.5k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.60 GB/s     (3.1k) | 1.69 GB/s     (1.6k)
Write      | 1.69 GB/s     (3.3k) | 1.80 GB/s     (1.7k)
Total      | 3.30 GB/s     (6.4k) | 3.50 GB/s     (3.4k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
----------------Netflix----------------
[IPv4]
您的网络可能没有正常配置IPv4，或者没有IPv4网络接入
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：日本
---------------DisneyPlus---------------
[提醒] 无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：日本区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: JP)
 HotStar:				No
 Disney+:				Yes (Region: JP)
 Netflix:				Yes (Region: JP)
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Yes (Region: JP)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			JP
 Viu.com:				No
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Associated with [] in [Tokyo ]
 Spotify Registration:			Yes (Region: JP)
 Steam Currency:			JPY
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【JP】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
ip-api数据库:
  手机流量: No
  代理服务: No
  数据中心: No
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱：No
  yandex邮箱: Yes
------以下为IPV6检测------
scamalytics数据库:
  欺诈分数(越低越好)：0
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
纯IPV6网络无法查询
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
广州联通 210.21.196.6
广州移动 120.196.165.24
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 563.67 Mbps	 506.79 Mbps	 1.04	  NULL
新加坡		 533.09 Mbps	 539.52 Mbps	 69.09	  0.0%
日本东京	 552.33 Mbps	 534.16 Mbps	 0.94	  37.0%
联通WuXi	 10.49 Mbps	 20.89 Mbps	 95.45	  2.6%
联通Fuzhou	 340.28 Mbps	 519.57 Mbps	 115.27	  1.3%
电信武汉	 69.91 Mbps	 456.04 Mbps	 276.35	  NULL
电信天津	 68.33 Mbps	 409.75 Mbps	 281.63	  NULL
移动杭州5G	 209.00 Mbps	 9.08 Mbps	 393.60	  0.0%
------------------------------------------------------------------------
 总共花费      : 5 分 8 秒
 时间          : Wed Jul 19 21:42:58 CST 2023
------------------------------------------------------------------------
```

### WARP ON

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.16
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7402P 24-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 2794.748 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 1.61 GiB / 7.71 GiB
 启动盘路径        : /dev/sda1
 内存              : 89.11 MiB / 361.76 MiB
 Swap              : 1.25 MiB / 256.00 MiB
 系统在线时间      : 0 days, 1 hour 32 min
 负载              : 0.81, 0.21, 0.11
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-22-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS13335 Cloudflare, Inc.
 IPV4 位置         : Sagamihara / Kanagawa / JP
 IPV6 ASN          : AS13335 Cloudflare
 IPV6 位置         : Sagamihara / Kanagawa
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1627 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		41615.07 MB/s
 单线程写测试:		17873.33 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		57.5 MB/s (14.05 IOPS, 1.82s)		118 MB/s (28878 IOPS, 0.89s)
 1GB-1M Block		3.8 GB/s (3606 IOPS, 0.28s)		5.6 GB/s (5307 IOPS, 0.19s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 225.34 MB/s  (56.3k) | 1.38 GB/s    (21.6k)
Write      | 225.94 MB/s  (56.4k) | 1.39 GB/s    (21.7k)
Total      | 451.29 MB/s (112.8k) | 2.77 GB/s    (43.3k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.51 GB/s     (2.9k) | 1.48 GB/s     (1.4k)
Write      | 1.59 GB/s     (3.1k) | 1.58 GB/s     (1.5k)
Total      | 3.10 GB/s     (6.0k) | 3.06 GB/s     (2.9k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: SVO(SVO04S27)
Youtube识别地域: 日本(JP)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT12S24)
Youtube识别地域: 日本(JP)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：日本
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：日本
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：日本区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：日本区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: JP)
 HotStar:				No
 Disney+:				Available For [Disney+ IN] Soon
 Netflix:				Yes (Region: JP)
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Yes (Region: JP)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			JP
 Viu.com:				No
 YouTube CDN:				London 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			Yes (Region: JP)
 Steam Currency:			JPY
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: JP)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Associated with [Vodafone Turkey] in [Istanbul ]
 Spotify Registration:			Yes (Region: JP)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【JP】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：6
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
  欺诈分数(越低越好)：40
ip-api数据库:
  手机流量: No
  代理服务: Yes
  数据中心: No
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Content Delivery Network
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
scamalytics数据库:
  欺诈分数(越低越好)：6
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Content Delivery Network
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/07/19 21:50:04 北京电信 219.141.136.12  测试超时
2023/07/19 21:50:04 北京联通 202.106.50.1    联通4837[普通线路]           
2023/07/19 21:50:04 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/07/19 21:50:04 上海电信 202.96.209.133  电信163 [普通线路]           
2023/07/19 21:50:04 上海联通 210.22.97.1     联通4837[普通线路]           
2023/07/19 21:50:04 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/07/19 21:50:04 广州电信 58.60.188.222   测试超时
2023/07/19 21:50:04 广州联通 210.21.196.6    联通4837[普通线路]           
2023/07/19 21:50:04 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/07/19 21:50:04 成都电信 61.139.2.69     电信163 [普通线路]           
2023/07/19 21:50:04 成都联通 119.6.6.6       联通4837[普通线路]           
2023/07/19 21:50:04 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
2.73 ms  AS13335  中国, 香港, cloudflare.com
2.99 ms  AS13335  日本, 东京都, 东京, cloudflare.com
2.90 ms  AS2914  日本, 东京都, 东京, ntt.com
4.57 ms  AS2914  日本, 东京都, 东京, ntt.com
2.77 ms  AS2914  日本, 东京都, 东京, ntt.com
广州联通 210.21.196.6
4.74 ms  AS13335  中国, 香港, cloudflare.com
3.08 ms  AS13335  日本, 东京都, 东京, cloudflare.com
1.93 ms  AS2914  日本, 东京都, 东京, ntt.com
2.51 ms  AS2914  日本, 东京都, 东京, ntt.com
2.73 ms  AS2914  日本, 东京都, 东京, ntt.com
161.61 ms  AS2914  日本, 东京都, 东京, ntt.com
166.18 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
广州移动 120.196.165.24
1.82 ms  AS13335  中国, 香港, cloudflare.com
3.07 ms  AS13335  日本, 东京都, 东京, cloudflare.com
51.17 ms  *  日本, 东京都, 东京, equinix.com
153.57 ms  AS58453  中国, 上海, chinamobile.com, 移动
163.20 ms  AS9808  中国, 上海, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 502.01 Mbps	 428.38 Mbps	 4.67	  9.4%
日本东京	 450.34 Mbps	 402.92 Mbps	 1.77	  21.2%
------------------------------------------------------------------------
 总共花费      : 4 分 19 秒
 时间          : Wed Jul 19 21:53:05 CST 2023
------------------------------------------------------------------------
```

