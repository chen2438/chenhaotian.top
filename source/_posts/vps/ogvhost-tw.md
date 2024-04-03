---
description: 发布于 2024-03-28
categories:
- vps
date: 2024-03-28
slug: ogvhost-tw
title: Ogvhost 台湾 HINET NAT VPS 测评
updated: 
tags: 
- vps
- ogvhost
copyright: true
---

# Ogvhost 台湾 HINET NAT VPS 测评

Streaming media unlocked, discounted price, no refunds

AFF：https://ogvhost.com/aff.php?aff=38

## 规格

NAT-TW-KVM-SPECIAL1111

```
1-core CPU RAM
512MB RAM
10GB SSD
20 IPv4 NAT Ports /1 ipv6
1000GB @200Mbps
KVM Virtualization
Taiwan Location
彰化HINET动态(不保证直连效果)，购买请谨慎，老鸟请下单，不退款
1 Snapshot
1 backup
Port speed limited to 1Mbps/s after traffic exceeded
```

€11.11EUR 每年

## 测试

### IPv4

![image-20240327173033837](https://media.opennet.top/i/2024/03/27/savaxr-0.png)

![image-20240328141825051](https://media.opennet.top/i/2024/03/28/mh79aw-0.png)

### IPv6

![image-20240328141704969](https://media.opennet.top/i/2024/03/28/mg8wtz-0.png)

![image-20240328142605530](https://media.opennet.top/i/2024/03/28/n9f566-0.png)

### 融合怪

```
测评频道: https://t.me/vps_reviews                    
版本：2024.03.26
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 V2 @ 2.80GHz
 CPU 核心数        : 1
 CPU 频率          : 2799.998 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.62 GiB / 9.81 GiB
 启动盘路径        : /dev/vda1
 内存              : 136.75 MiB / 474.04 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 6 min
 负载              : 0.75, 0.30, 0.12
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-18-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : Symmetric NAT
 IPV4 ASN          : AS3462 Data Communication Business Group
 IPV4 位置         : Yuanlin / Taiwan / TW
 IPV6 ASN          : AS3462 Chunghwa Telecom
 IPV6 位置         : Chang-hua" / Changhua
 IPV6 子网掩码     : 48
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		766 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		14018.10 MB/s
 单线程写测试:		14151.92 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		47.2 MB/s (11.52 IOPS, 2.22s)		59.2 MB/s (14464 IOPS, 1.77s)
 1GB-1M Block		3.5 GB/s (3374 IOPS, 0.30s)		6.2 GB/s (5911 IOPS, 0.17s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 33.24 MB/s    (8.3k) | 39.76 MB/s     (621)
Write      | 33.30 MB/s    (8.3k) | 39.99 MB/s     (624)
Total      | 66.54 MB/s   (16.6k) | 79.75 MB/s    (1.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 66.12 MB/s     (129) | 64.87 MB/s      (63)
Write      | 69.60 MB/s     (135) | 69.19 MB/s      (67)
Total      | 135.73 MB/s    (264) | 134.06 MB/s    (130)
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
NF所识别的IP地域信息：台湾
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：台湾
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
 Instagram Licensed Audio:		No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: TW)
 Netflix:				Yes (Region: TW)
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
 Bing Region:				CN
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【TW】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  ① | scamalytics数据库 ②  | virustotal数据库  ③ | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库  ⑥ | ipwhois数据库     ⑦  | ipregistry数据库  ⑧ | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
ipapiis数据库 ⑪ | ipapicom数据库    ⑫  | abstractapi数据库 ⑬ | ipqualityscore数据库 ⑭ 
欺诈分数(越低越好): 1⑤  abuse得分(越低越好): 0⑤  0.0024 (Low)⑪  威胁等级: low②  
IP类型: 
  使用类型(usage_type):isp①  Unknown (Maybe Fixed Line ISP)⑤  isp⑧  business⑨  isp⑪  
  公司类型(company_type):isp①  isp⑧  isp⑪  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨ ⑪ 
  移动网络(mobile):  No⑥ ⑪ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ 
  VPN(vpn):  No① ② ⑦ ⑧ ⑪ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ ⑪ ⑫ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ ⑪ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ ⑪ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑91 未检测0 ③
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 0②  abuse得分(越低越好): 0⑤  0.0014 (Low)⑪  威胁等级: low②  
IP类型: Fixed Line ISP⑤  isp⑪
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: TW 城市: Yuanlin 服务商: AS3462 Data Communication Business Group
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
1.85 ms  *  局域网
0.65 ms  *  局域网
1.73 ms  AS3462  中国, 台湾, cht.com.tw
1.79 ms  AS3462  中国, 台湾, 彰化县, cht.com.tw
4.85 ms  *  中国, 台湾, 彰化县, cht.com.tw
7.84 ms  *  中国, 台湾, 台北市, cht.com.tw
4.01 ms  *  中国, 台湾, 台北市, cht.com.tw
6.16 ms  *  中国, 台湾, 台北市, cht.com.tw
206.66 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
82.20 ms  AS4134  中国, 上海, chinatelecom.com.cn, 电信
86.63 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.59 ms  *  局域网
0.58 ms  *  局域网
1.92 ms  AS3462  中国, 台湾, cht.com.tw
9.19 ms  *  中国, 台湾, 彰化县, cht.com.tw
4.09 ms  *  中国, 台湾, 新北市, cht.com.tw
6.21 ms  *  中国, 台湾, 新北市, cht.com.tw
44.87 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
34.56 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
38.27 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
34.72 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.55 ms  *  局域网
0.74 ms  *  局域网
1.70 ms  AS3462  中国, 台湾, cht.com.tw
1.82 ms  AS3462  中国, 台湾, 彰化县, cht.com.tw
4.74 ms  *  中国, 台湾, 彰化县, cht.com.tw
4.67 ms  *  中国, 台湾, 台北市, cht.com.tw
6.74 ms  *  中国, 台湾, 台北市, cht.com.tw
24.76 ms  AS3462  中国, 香港, cht.com.tw
25.09 ms  AS58453  中国, 香港, chinamobile.com, 移动
29.90 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
29.46 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
35.87 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
33.68 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
36.54 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 207.72 Mbps	 201.26 Mbps	 0.50	  0.0%
中国香港	 208.23 Mbps	 18.82 Mbps	 86.50	  0.3%
新加坡		 165.00 Mbps	 202.63 Mbps	 182.80	  NULL
联通上海5G	 33.01 Mbps	 23.90 Mbps	 56.79	  1.5%
联通海南	 210.27 Mbps	 193.05 Mbps	 42.56	  NULL
电信湖南5G	 185.36 Mbps	 22.65 Mbps	 141.44	  0.0%
------------------------------------------------------------------------
 总共花费      : 13 分 56 秒
 时间          : Wed Mar 27 05:16:15 EDT 2024
------------------------------------------------------------------------
```

### GB5

```
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2024-03-24                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2024-03-27 05:22:31 EDT
净测试时长：3分30秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-18-cloud-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.1-0-g3208b098f51a-prebuilt.qemu.org

处理器信息
  Name                                Intel(R) Xeon(R) CPU E5-2680 V2 @ 2.80GHz
  Topology                      1 Processor, 1 Core
  Identifier                    GenuineIntel Family 6 Model 62 Stepping 4
  Base Frequency                2.80 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      4.00 MB
  L3 Cache                      16.0 MB

内存信息
  Size                          474 MB

单核测试分数：539
多核测试分数：557
详细结果链接：https://browser.geekbench.com/v5/cpu/22353215
```

