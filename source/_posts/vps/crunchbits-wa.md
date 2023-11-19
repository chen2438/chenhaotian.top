---
description: 发布于 2023-11-18
categories:
- vps
date: 2023-11-18
slug: crunchbits-wa
title: Crunchbits 美国斯波坎 3C4G VPS 测评
updated: 
tags: 
- vps
- crunchbits
copyright: true
---

# Crunchbits 美国斯波坎 3C4G VPS 测评

价格美丽，CPU还行，IP质量很好

## 规格

```
4.5GB Yearly SSD VPS

Starting from $22.69 USD Annually

4.5GB DDR4 RAM
3 vCPU
125GB RAID-10 SSD Storage
5TB Bandwidth @ 1Gbps
1 IPv4 Address
1 /64 IPv6
1 Included Backup Slots
```

## 测试

![image-20231118192524167](https://media.opennet.top/i/2023/11/18/vu8br5-0.png)

![image-20231118192955455](https://media.opennet.top/i/2023/11/18/vwt8rv-0.png)

```
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Core Processor (Broadwell, IBRS)
 CPU 核心数        : 3
 CPU 频率          : 2095.320 MHz
 CPU 缓存          : L1: 96.00 KB / L2: 12.00 MB / L3: 48.00 MB
 硬盘空间          : 2.83 GiB / 124.82 GiB
 启动盘路径        : /dev/sda3
 内存              : 310.70 MiB / 4.28 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 15 min
 负载              : 0.32, 0.11, 0.07
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS400304 REDOUBT NETWORKS
 IPV4 位置         : Liberty Lake / Washington / US
 IPV6 ASN          : AS400304 Crunchbits
 IPV6 位置         : Liberty Lake / Washington
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		789 Scores
 3 线程测试(多核)得分: 		2400 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		17389.26 MB/s
 单线程写测试:		13009.60 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		22.0 MB/s (5366 IOPS, 4.77s)		40.0 MB/s (9753 IOPS, 2.62s)
 1GB-1M Block		433 MB/s (413 IOPS, 2.42s)		1.3 GB/s (1246 IOPS, 0.80s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 172.47 MB/s  (43.1k) | 1.31 GB/s    (20.5k)
Write      | 172.93 MB/s  (43.2k) | 1.31 GB/s    (20.6k)
Total      | 345.40 MB/s  (86.3k) | 2.63 GB/s    (41.1k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.46 GB/s     (2.8k) | 1.44 GB/s     (1.4k)
Write      | 1.54 GB/s     (3.0k) | 1.54 GB/s     (1.5k)
Total      | 3.01 GB/s     (5.8k) | 2.98 GB/s     (2.9k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  西雅图(SEA30S12)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  西雅图(SEA09S34)
Youtube识别地域: 无信息(null)
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
区域：美国区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：美国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: US)
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Seattle, WA 
 Netflix Preferred CDN:			Seattle, WA  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			No  (Region: CN) 
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Seattle, WA 
 Netflix Preferred CDN:			Seattle, WA  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
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
  公司类型(company_type):isp①  isp⑧  
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
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: US 城市: Liberty Lake 服务商: AS400304 REDOUBT NETWORKS
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
0.50 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
37.38 ms 	AS2914 美国 华盛顿州 西雅图 ntt.net
11.92 ms 	AS2914 [NTT-BACKBONE] 美国 华盛顿州 西雅图 ntt.net
30.52 ms 	AS2914 [NTT-BACKBONE] 美国 加利福尼亚州 圣何塞 ntt.net
28.67 ms 	AS2914 [NTT-BACKBONE] 美国 加利福尼亚州 圣何塞 ntt.net
33.60 ms 	AS4134 [CHINANET-US] 美国 加利福尼亚州 圣克拉拉 chinatelecom.com.cn 电信
195.78 ms 	AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
214.02 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.46 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
1.87 ms 	AS6939 美国 爱达荷州 科达伦 he.net
12.09 ms 	AS6939 [HURRICANE-11] 美国 华盛顿州 西雅图 he.net
31.59 ms 	AS6939 [HURRICANE-11] 美国 加利福尼亚州 圣何塞 he.net
35.25 ms 	AS6939 美国 加利福尼亚州 圣何塞 he.net
188.62 ms 	AS4837 [CU169-BACKBONE] 中国 上海市 chinaunicom.cn 联通
192.12 ms 	AS4837 [CU169-BACKBONE] 中国 上海市 chinaunicom.cn 联通
230.88 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
241.26 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
220.96 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.47 ms 	AS400304 美国 华盛顿州 利伯蒂湖 redoubtnet.com
11.73 ms 	AS2914 美国 华盛顿州 西雅图 ntt.net
19.75 ms 	AS2914 [NTT-BACKBONE] 美国 华盛顿州 西雅图 ntt.net
12.40 ms 	AS2914 [NTT-BACKBONE] 美国 华盛顿州 西雅图 ntt.net
30.41 ms 	AS2914 [NTT-BACKBONE] 美国 加利福尼亚州 圣何塞 ntt.net
41.59 ms 	AS2914 [NTT-BACKBONE] 美国 加利福尼亚州 洛杉矶 ntt.net
129.34 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 ntt.net
381.64 ms 	AS2914 [NTT-BACKBONE] 中国 香港 ntt.net
179.60 ms 	AS2914 [NTT-BACKBONE] 中国 香港 ntt.net
321.25 ms 	AS2914 [NTT-GLOBAL] 中国 香港 ntt.net
321.74 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
272.43 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
274.50 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
375.84 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
276.23 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
203.25 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
279.08 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 991.13 Mbps	 930.33 Mbps	 0.41	  0.0%
洛杉矶		 1019.59 Mbps	 934.03 Mbps	 37.50	  0.0%
法兰克福	 568.64 Mbps	 934.96 Mbps	 149.91	  0.0%
联通湖南5G	 452.03 Mbps	 438.41 Mbps	 186.61	  NULL
联通郑州5G	 58.70 Mbps	 570.26 Mbps	 217.13	  NULL
电信Nanjing5G	 251.67 Mbps	 672.68 Mbps	 190.19	  0.0%
电信浙江	 334.49 Mbps	 255.45 Mbps	 206.99	  NULL
移动硬核通信	 14.39 Mbps	 407.33 Mbps	 298.73	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 27 秒
 时间          : Sat Nov 18 02:24:50 PST 2023
------------------------------------------------------------------------
```

```
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-09-06                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2023-11-18 03:20:21 PST
净测试时长：2分31秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (Q35 + ICH9, 2009)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          Intel Core Processor (Broadwell, IBRS)
  Topology                      3 Processors, 3 Cores
  Identifier                    GenuineIntel Family 6 Model 61 Stepping 2
  Base Frequency                2.10 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      4.00 MB
  L3 Cache                      16.0 MB

内存信息
  Size                          4.28 GB

单核测试分数：690
多核测试分数：1963
详细结果链接：https://browser.geekbench.com/v5/cpu/21960666
```

