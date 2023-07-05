---
description: 发布于 2023-07-05
categories:
- vps
date: 2023-07-05
slug: buyvm-ny
title: BuyVM 纽约 VPS 测评
updated: 
tags: 
- vps
- buyvm
copyright: true
---

# BuyVM 纽约 VPS 测评

产品链接：https://my.frantech.ca/cart.php?gid=38

G口不限流量，抗一般投诉，不抗版权投诉。

CPU很快，硬盘不错。

无大陆优化，但大陆连通性很不错，网速能跑起来。注意晚高峰可能就没有这样的表现了。

### 规格

$3.50 USD/mo

- **1GB** DDR4 RAM
- **1 CPU Core** @ 3.9Ghz+
- **20GB** NVME Storage
- **1 IPv4 + /48 IPv6**
- **1000Mbit** Unmetered BW
- **DDOS Protection** Available
- **BGP Sessions** Available

### 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.04
更新日志：融合怪十代目(集合百家之长)(专为测评频道小鸡而生)
-------------------感谢teddysun和superbench和yabs开源-------------------
 CPU 型号          : AMD Ryzen 9 3900X 12-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 3792.874 MHz
 CPU 缓存          : 512 KB
 硬盘空间          : 20.0 GB (6.7 GB 已用)
 内存              : 964 MB (239 MB 已用)
 Swap              : 2047 MB (106 MB 已用)
 系统在线时间      : 43 days, 17 hour 18 min
 负载              : 1.30, 0.86, 0.71
 系统              : Debian GNU/Linux 11 (bullseye)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-22-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 ASN组织           : AS53667 FranTech Solutions
 位置              : New York City / US
 地区              : New York
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1837 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		48370.23 MB/s
 单线程写测试:		19498.65 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		39.2 MB/s (9564 IOPS, 2.68s)		45.8 MB/s (11192 IOPS, 2.29s)
 1GB-1M Block		875 MB/s (834 IOPS, 1.20s)		69.3 MB/s (66 IOPS, 15.13s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 207.94 MB/s  (51.9k) | 943.45 MB/s  (14.7k)
Write      | 208.49 MB/s  (52.1k) | 948.42 MB/s  (14.8k)
Total      | 416.43 MB/s (104.1k) | 1.89 GB/s    (29.5k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.14 GB/s     (2.2k) | 1.29 GB/s     (1.2k)
Write      | 1.21 GB/s     (2.3k) | 1.38 GB/s     (1.3k)
Total      | 2.36 GB/s     (4.6k) | 2.67 GB/s     (2.6k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 西班牙马德里(MAD41S02)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：美国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Madrid 
 Netflix Preferred CDN:			Newark, NJ  
 Spotify Registration:			No
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：45
  匿名代理: Yes
  Tor出口节点: No
  服务器IP: No
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
黑名单记录统计:(有多少黑名单网站有记录)
  无害记录： 0
  恶意记录： 0
  可疑记录： 0
  未检测到记录： 87
ip234数据库：
  欺诈分数(越低越好)：31
ip-api数据库:
  手机流量: No
  代理服务: Yes
  数据中心: Yes
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/07/05 11:37:13 北京电信 219.141.136.12  电信163 [普通线路]           
2023/07/05 11:37:13 北京联通 202.106.50.1    联通4837[普通线路]           
2023/07/05 11:37:13 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/07/05 11:37:13 上海电信 202.96.209.133  电信163 [普通线路]           
2023/07/05 11:37:13 上海联通 210.22.97.1     联通4837[普通线路]           
2023/07/05 11:37:13 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/07/05 11:37:13 广州电信 58.60.188.222   电信163 [普通线路]           
2023/07/05 11:37:13 广州联通 210.21.196.6    联通4837[普通线路]           
2023/07/05 11:37:13 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/07/05 11:37:13 成都电信 61.139.2.69     电信163 [普通线路]           
2023/07/05 11:37:13 成都联通 119.6.6.6       联通4837[普通线路]           
2023/07/05 11:37:13 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
IPv4 ASN: AS53667 FranTech Solutions
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
0.68 ms  AS53667  美国, 纽约州, 史泰登岛, buyvm.net
0.84 ms  *  局域网
2.98 ms  AS6939  美国, 新泽西州, 纽瓦克, he.net
2.67 ms  AS6939  美国, 新泽西州, 纽瓦克, he.net
2.11 ms  AS6939  美国, 纽约州, 纽约, he.net
62.86 ms  AS6939  美国, 加利福尼亚州, 圣何塞, he.net
211.63 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
215.56 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
209.93 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
1.31 ms  AS53667  美国, 纽约州, 史泰登岛, buyvm.net
1.01 ms  *  局域网
3.00 ms  AS6939  美国, 新泽西州, 纽瓦克, he.net
2.75 ms  AS6939  美国, 新泽西州, 纽瓦克, he.net
239.77 ms  AS6939  美国, 加利福尼亚州, 洛杉矶, he.net
229.30 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
234.54 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
234.89 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
245.13 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
235.70 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.28 ms  AS53667  美国, 纽约州, 史泰登岛, buyvm.net
1.36 ms  *  局域网
3.02 ms  AS6939  美国, 新泽西州, 纽瓦克, he.net
2.97 ms  AS6939  美国, 新泽西州, 纽瓦克, he.net
70.76 ms  *  美国, 华盛顿州, 西雅图, seattleix.net
69.97 ms  AS58453  美国, 华盛顿州, 西雅图, chinamobile.com, 移动
75.11 ms  AS58453  美国, chinamobile.com, 移动
237.64 ms  AS58453  中国, 上海, chinamobile.com, 移动
239.21 ms  AS9808  中国, 上海, chinamobile.com, 移动
234.01 ms  AS9808  中国, 上海, chinamobile.com, 移动
241.20 ms  AS9808  中国, 上海, chinamobile.com, 移动
265.28 ms  AS9808  中国, 北京, chinamobile.com, 移动
261.89 ms  AS9808  中国, 北京, chinamobile.com, 移动
302.04 ms  AS9808  中国, 北京, chinamobile.com, 移动
302.24 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 1021.23 Mbps	 916.25 Mbps	 1.07	  0.0%
洛杉矶		 1124.44 Mbps	 420.30 Mbps	 66.06	  NULL
日本东京	 562.06 Mbps	 877.48 Mbps	 140.38	  0.0%
联通Fuzhou	 357.82 Mbps	 541.00 Mbps	 219.43	  0.0%
电信上海	 284.14 Mbps	 449.47 Mbps	 193.38	  NULL
电信合肥5G	 216.75 Mbps	 61.90 Mbps	 200.04	  0.0%
移动Chengdu	 564.48 Mbps	 369.97 Mbps	 302.93	  0.0%
移动杭州5G	 243.29 Mbps	 501.99 Mbps	 250.72	  0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 42 秒
 时间          : Wed Jul  5 11:42:20 CST 2023
------------------------------------------------------------------------
```

