---
description: 发布于 2024-02-11
categories:
- vps
date: 2024-02-11
slug: bytevirt-tw-hinet
title:  ByteVirt 台湾 HINET NAT VPS 测评
updated: 
tags: 
- vps
- bytevirt
copyright: true
---

# ByteVirt 台湾 HINET NAT VPS 测评

适合作为落地机使用

AFF：[https://bytevirt.com/aff.php?aff=315](https://bytevirt.com/aff.php?aff=315)

## 规格

```
1 Core (Fair Share)
256MB RAM
2GB SSD
20 IPv4 NAT Ports
1 IPv6/80 Addresses
1TB @500Mbps
LXC Virtualization
Taiwan Location
彰化HINET动态
Port speed limited to 1Mbps after traffic exceeded
```

$1.50 USD 每月

## 测试

### IPv4

禁Ping，TCPing如图

![image-20240211160517361](https://media.opennet.top/i/2024/02/11/po8g73-0.png)

### IPv6

禁Ping，TCPing如图

![image-20240211160826949](https://media.opennet.top/i/2024/02/11/pq2vz5-0.png)

### 融合怪

```bash
测评频道: https://t.me/vps_reviews                    
版本：2024.02.04
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 V2 @ 2.80GHz
 CPU 核心数        : 40
 CPU 频率          : 2800.000 MHz
 CPU 缓存          : L1: 640.00 KB / L2: 5.00 MB / L3: 50.00 MB
 硬盘空间          : 1.43 GiB / 1.90 GiB
 启动盘路径        : /dev/loop85
 内存              : 75.04 MiB / 256.00 MiB
 Swap              : 23.80 MiB / 256.00 MiB
 系统在线时间      : 2 days, 22 hour 12 min
 负载              : 0.03, 0.04, 0.01
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.102-1-pve
 TCP加速方式       : bbr
 虚拟化架构        : LXC
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS3462 Data Communication Business Group
 IPV4 位置         : Douliu / Taiwan / TW
 IPV6 ASN          : AS3462 Chunghwa Telecom
 IPV6 位置         : Taipei / Taipei City / Taiwan
 IPV6 子网掩码     : Unknown
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		719 Scores
 40 线程测试(多核)得分: 		734 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		12344.25 MB/s
 单线程写测试:		12826.26 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		27.8 MB/s (6799 IOPS, 3.77s)		53.4 MB/s (13033 IOPS, 1.96s)
 1GB-1M Block		91.9 MB/s (271 IOPS, 3.68s)		51.3 MB/s (151 IOPS, 6.61s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
测试失败请替换另一种方式
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: HINET
视频缓存节点地域: TXG(TXG9)
Youtube识别地域: 台湾(TW)
[IPv6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: HINET
视频缓存节点地域: TXG(TXG9)
Youtube识别地域: 台湾(TW)
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
区域：台湾区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：台湾区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: TW)
 HotStar:				No
 Disney+:				Yes (Region: TW)
 Netflix:				Yes (Region: TW)
 YouTube Premium:			Yes (Region: TW)
 Amazon Prime Video:			Yes (Region: TW)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			TW
 Viu.com:				No
 YouTube CDN:				HINET in Taichung
 Netflix Preferred CDN:			Associated with [Chunghwa Telecom] in [Taipei ]
 Spotify Registration:			Yes (Region: TW)
 Steam Currency:			TWD
 ChatGPT:				Yes
 Bing Region:				TW
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: TW)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: TW)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				HINET in Taichung
 Netflix Preferred CDN:			Associated with [Chunghwa Telecom] in [Taipei ]
 Spotify Registration:			Yes (Region: TW)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				TW
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【TW】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 1②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Unknown (Maybe Fixed Line ISP)⑤  isp⑧  business⑨  
  公司类型(company_type):isp①  isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
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
欺诈分数(越低越好): 1②
abuse得分(越低越好): 0④
IP类型: Fixed Line ISP⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: TW 城市: Douliu 服务商: AS3462 Data Communication Business Group
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.46 ms  *  局域网
0.84 ms  *  局域网
1.44 ms  AS3462  中国, 台湾, cht.com.tw
5.59 ms  AS3462  中国, 台湾, 彰化县, cht.com.tw
4.53 ms  *  中国, 台湾, 彰化县, cht.com.tw
7.03 ms  *  中国, 台湾, 台北市, cht.com.tw
4.06 ms  *  中国, 台湾, 新北市, cht.com.tw
4.16 ms  *  中国, 台湾, 台北市, cht.com.tw
84.96 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
110.92 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.34 ms  *  局域网
0.67 ms  *  局域网
1.62 ms  AS3462  中国, 台湾, cht.com.tw
2.21 ms  AS3462  中国, 台湾, 彰化县, cht.com.tw
4.56 ms  *  中国, 台湾, 彰化县, cht.com.tw
4.10 ms  *  中国, 台湾, 新北市, cht.com.tw
4.24 ms  *  中国, 台湾, 新北市, cht.com.tw
26.66 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
39.47 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
33.19 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
34.94 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
32.51 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.58 ms  *  局域网
0.70 ms  *  局域网
1.62 ms  AS3462  中国, 台湾, cht.com.tw
6.44 ms  AS3462  中国, 台湾, 彰化县, cht.com.tw
3.94 ms  *  中国, 台湾, 台北市, cht.com.tw
5.04 ms  *  中国, 台湾, 台北市, cht.com.tw
25.06 ms  AS3462  中国, 香港, cht.com.tw
25.46 ms  AS58453  中国, 香港, chinamobile.com, 移动
30.03 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
30.36 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
29.67 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
32.30 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
34.88 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
33.29 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 508.23 Mbps	 499.60 Mbps	 2.95	  NULL
洛杉矶		 245.87 Mbps	 369.05 Mbps	 147.00	  NULL
日本东京	 119.60 Mbps	 317.98 Mbps	 341.07	  1.0%
联通海南	 492.80 Mbps	 494.88 Mbps	 48.86	  NULL
电信浙江	 353.41 Mbps	 3.34 Mbps	 74.88	  NULL
移动福州	 0.00 Mbps	 0.00 Mbps	 56.27	
------------------------------------------------------------------------
 总共花费      : 8 分 15 秒
 时间          : Sun Feb 11 08:05:14 UTC 2024
------------------------------------------------------------------------
```

