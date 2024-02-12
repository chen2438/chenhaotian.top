---
description: 发布于 2023-07-18
categories:
- vps
date: 2024-02-12
slug: digitalvirt-jp-lite
title: DigitalVirt 日本 Lite VPS 测评
updated: 
tags: 
- vps
- digitalvirt
copyright: true
---

# DigitalVirt 日本 Lite VPS 测评

官网链接（含AFF）：https://digitalvirt.com/aff.php?aff=459

日本 软银 + CMI，联通首选。

~~流媒体解锁很好~~，详见测试。换IP后变美国了

注意，测速似乎会被黑洞。

## 规格

B1-1C1G

¥ 49 月付

- 核心**1核（EPYC）**
- 内存**1GB**
- 系统盘**10G**
- 峰值**1Gbps**
- 流量包**1000G/月**

## 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.16
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
 CPU 核心数        : 1
 CPU 频率          : 2394.454 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 256.00 KB / L3: 35.00 MB
 硬盘空间          : 4.11 GiB / 9.68 GiB
 启动盘路径        : /dev/vda1
 内存              : 220.27 MiB / 977.55 MiB
 Swap              : 0 KiB / 2.00 GiB
 系统在线时间      : 0 days, 0 hour 4 min
 负载              : 0.70, 0.41, 0.16
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS11161 DigitalVirt
 IPV4 位置         : Tokyo / Tokyo / JP
 IPV6 ASN          : AS51847 Nearoute Limited
 IPV6 位置         : Koganei / Tokyo
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		742 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		15612.66 MB/s
 单线程写测试:		12564.74 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		8.9 MB/s (2169 IOPS, 11.80s)		8.9 MB/s (2168 IOPS, 11.81s)
 1GB-1M Block		574 MB/s (548 IOPS, 1.83s)		1.0 GB/s (998 IOPS, 1.00s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 8.03 MB/s     (2.0k) | 130.51 MB/s   (2.0k)
Write      | 8.07 MB/s     (2.0k) | 131.20 MB/s   (2.0k)
Total      | 16.11 MB/s    (4.0k) | 261.71 MB/s   (4.0k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 638.40 MB/s   (1.2k) | 540.78 MB/s    (528)
Write      | 672.32 MB/s   (1.3k) | 576.80 MB/s    (563)
Total      | 1.31 GB/s     (2.5k) | 1.11 GB/s     (1.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
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
您的出口IP完整解锁Netflix，支持非自制剧的观看
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
 Dazn:					No
 HotStar:				No
 Disney+:				Available For [Disney+ CN] Soon
 Netflix:				Yes (Region: JP)
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Yes (Region: CN)
 TVBAnywhere+:				No
 iQyi Oversea Region:			JP
 Viu.com:				No
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			No
 Steam Currency:			CNY
 ChatGPT:				No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: JP)
 Netflix:				Yes (Region: JP)
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【JP】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：0
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
  欺诈分数(越低越好)：65
ip-api数据库:
  手机流量: No
  代理服务: No
  数据中心: No
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：YES
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
2023/07/18 16:09:51 北京电信 219.141.136.12  电信163 [普通线路]           
2023/07/18 16:09:51 北京联通 202.106.50.1    联通4837[普通线路]           
2023/07/18 16:09:51 北京移动 221.179.155.161 测试超时
2023/07/18 16:09:51 上海电信 202.96.209.133  测试超时
2023/07/18 16:09:51 上海联通 210.22.97.1     联通4837[普通线路]           
2023/07/18 16:09:51 上海移动 211.136.112.200 测试超时
2023/07/18 16:09:51 广州电信 58.60.188.222   电信163 [普通线路]           
2023/07/18 16:09:51 广州联通 210.21.196.6    联通4837[普通线路]           
2023/07/18 16:09:51 广州移动 120.196.165.24  测试超时
2023/07/18 16:09:51 成都电信 61.139.2.69     电信163 [普通线路]           
2023/07/18 16:09:51 成都联通 119.6.6.6       联通4837[普通线路]           
2023/07/18 16:09:51 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
2.18 ms  AS51847  日本, 东京都, 东京, telecentras.lt
0.29 ms  *  局域网
1.33 ms  AS2497  日本, 东京都, 东京, iij.ad.jp
1.27 ms  AS2497  日本, 东京都, 东京, iij.ad.jp
29.41 ms  AS4134  日本, 东京都, 东京, chinatelecom.com.cn, 电信
55.58 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
55.24 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
66.54 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
59.24 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
8.30 ms  AS51847  日本, 东京都, 东京, telecentras.lt
0.30 ms  *  局域网
1.39 ms  AS2914  日本, 东京都, 东京, ntt.com
59.13 ms  AS2914  日本, 东京都, 东京, ntt.com
61.16 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
61.45 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
68.21 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
60.24 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
6.65 ms  AS51847  日本, 东京都, 东京, telecentras.lt
0.39 ms  *  局域网
57.80 ms  AS9808  中国, 上海, chinamobile.com, 移动
58.04 ms  AS9808  中国, 上海, chinamobile.com, 移动
70.26 ms  AS9808  中国, 北京, chinamobile.com, 移动
69.94 ms  AS9808  中国, 北京, chinamobile.com, 移动
74.98 ms  AS9808  中国, 北京, chinamobile.com, 移动
77.77 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 948.45 Mbps	 606.79 Mbps	 54.46	  0.0%
日本东京	 409.46 Mbps	 945.50 Mbps	 0.39	  47.9%
中国香港	 722.31 Mbps	 895.83 Mbps	 48.87	  0.0%
联通WuXi	 929.23 Mbps	 736.76 Mbps	 37.54	  0.0%
联通上海5G	 914.37 Mbps	 867.77 Mbps	 55.00	  0.0%
电信Suzhou5G	 925.21 Mbps	 677.90 Mbps	 36.30	  NULL
电信成都	 114.14 Mbps	 10.87 Mbps	 95.29	  6.6%
移动Zhengzhou5G	 302.82 Mbps	 784.51 Mbps	 78.93	  5.0%
移动Beijing	 312.72 Mbps	 431.06 Mbps	 106.05	  2.4%
------------------------------------------------------------------------
 总共花费      : 7 分 42 秒
 时间          : Tue Jul 18 16:14:32 CST 2023
------------------------------------------------------------------------
```

**2024-02-12 更换IP后重测**

```
测评频道: https://t.me/vps_reviews                    
版本：2024.02.04
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7402P 24-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 2794.748 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 128.00 MB
 硬盘空间          : 6.96 GiB / 9.68 GiB
 启动盘路径        : /dev/vda1
 内存              : 340.88 MiB / 979.01 MiB
 Swap              : 46.45 MiB / 1024.00 MiB
 系统在线时间      : 44 days, 20 hour 48 min
 负载              : 0.00, 0.00, 0.00
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-26-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS11161 DigitalVirt
 IPV4 位置         : Charlotte / North Carolina / US
 IPV6 ASN          : AS51847 Nearoute
 IPV6 位置         : Koganei / Tokyo / Japan
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		1641 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		44149.95 MB/s
 单线程写测试:		19555.21 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		8.9 MB/s (2165 IOPS, 11.82s)		8.9 MB/s (2169 IOPS, 11.80s)
 1GB-1M Block		925 MB/s (882 IOPS, 1.13s)		1.0 GB/s (1001 IOPS, 1.00s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 8.04 MB/s     (2.0k) | 118.58 MB/s   (1.8k)
Write      | 8.08 MB/s     (2.0k) | 119.21 MB/s   (1.8k)
Total      | 16.13 MB/s    (4.0k) | 237.79 MB/s   (3.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 629.15 MB/s   (1.2k) | 520.00 MB/s    (507)
Write      | 662.58 MB/s   (1.2k) | 554.63 MB/s    (541)
Total      | 1.29 GB/s     (2.5k) | 1.07 GB/s     (1.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：日本区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: US)
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			No
 Steam Currency:			USD
 ChatGPT:				Yes
 Bing Region:				US
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: JP)
 Netflix:				Yes (Region: JP)
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				US
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑89 未检测0 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: US 城市: Charlotte 服务商: AS11161 DigitalVirt
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
2.39 ms  AS51847  日本, 东京都, 东京, telecentras.lt
0.92 ms  *  局域网
85.01 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
77.45 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
5.81 ms  AS51847  日本, 东京都, 东京, telecentras.lt
0.73 ms  *  局域网
58.04 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
57.38 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
59.80 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
61.62 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
5.98 ms  AS51847  日本, 东京都, 东京, telecentras.lt
0.69 ms  *  局域网
116.70 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
143.25 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
118.76 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
115.49 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
121.36 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
126.98 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
移动连云港	 0.00 Mbps	 0.00 Mbps	 72.21	
------------------------------------------------------------------------
 总共花费      : 4 分 7 秒
 时间          : Mon Feb 12 04:33:29 UTC 2024
------------------------------------------------------------------------
```

