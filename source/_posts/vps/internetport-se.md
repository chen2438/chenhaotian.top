---
description: 发布于 2024-03-15
categories:
- vps
date: 2024-03-15
slug: internetport-se
title: Internetport 瑞典 3C4G VPS 测评
updated: 
tags: 
- vps
- internetport
copyright: true
---

# Internetport 瑞典 3C4G VPS 测评

这是去年黑五特惠款，这里测评存档

疑似抗DMCA投诉

联通可以直连使用

AFF：[ https://portal.internetport.com/?affid=114](https://portal.internetport.com/?affid=114)

## 规格

LOWENDBOX KVM VPS 4096

```
CPU：3
DISK：100GB
Bandwith：10000GB
IPv4 / IPV6：1
MEMORY：4GB
```

€60.00 EUR / Year （黑五 12 EUR）

## 测试

### IPv4

![image-20240315204529886](https://media.opennet.top/i/2024/03/15/xjgr5e-0.png)

![image-20240315204556993](https://media.opennet.top/i/2024/03/15/xjni2k-0.png)

### IPv6

![image-20240315204655221](https://media.opennet.top/i/2024/03/15/xk7ij1-0.png)

![image-20240315204954824](https://media.opennet.top/i/2024/03/15/xlzpue-0.png)

### 融合怪

```bash
测评频道: https://t.me/vps_reviews                    
版本：2024.02.22
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Common KVM processor
 CPU 核心数        : 3
 CPU 频率          : 3399.996 MHz
 CPU 缓存          : L1: 96.00 KB / L2: 12.00 MB / L3: 16.00 MB
 硬盘空间          : 6.94 GiB / 98.26 GiB
 启动盘路径        : /dev/sda1
 内存              : 428.30 MiB / 3.82 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 53 days, 3 hour 29 min
 负载              : 0.37, 0.23, 0.17
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ❌ Disabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-17-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS49770 Internetport Sweden AB
 IPV4 位置         : Stockholm / Stockholm / SE
 IPV6 ASN          : AS49770 Internetport Sweden AB
 IPV6 位置         : Sweden
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		734 Scores
 3 线程测试(多核)得分: 		2171 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		16115.94 MB/s
 单线程写测试:		11535.81 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		21.1 MB/s (5155 IOPS, 4.97s)		31.3 MB/s (7631 IOPS, 3.35s)
 1GB-1M Block		420 MB/s (401 IOPS, 2.49s)		1.1 GB/s (1002 IOPS, 1.00s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 165.83 MB/s  (41.4k) | 470.03 MB/s   (7.3k)
Write      | 166.27 MB/s  (41.5k) | 472.50 MB/s   (7.3k)
Total      | 332.11 MB/s  (83.0k) | 942.53 MB/s  (14.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.95 GB/s     (3.8k) | 198.76 MB/s    (194)
Write      | 2.06 GB/s     (4.0k) | 212.00 MB/s    (207)
Total      | 4.01 GB/s     (7.8k) | 410.76 MB/s    (401)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: ARN(ARN11S13)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: ARN(ARN11S13)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：瑞典
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：瑞典
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：瑞典区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：瑞典区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: SE)
 HotStar:				No
 Disney+:				No
 Netflix:				Yes (Region: SE)
 YouTube Premium:			Yes (Region: SE)
 Amazon Prime Video:			Yes (Region: SE)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Stockholm 
 Netflix Preferred CDN:			Stockholm  
 Spotify Registration:			Yes (Region: SE)
 Steam Currency:			EUR
 ChatGPT:				Yes
 Bing Region:				SE
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: SE)
 Netflix:				Yes (Region: SE)
 YouTube Premium:			No 
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Stockholm 
 Netflix Preferred CDN:			Stockholm  
 Spotify Registration:			Yes (Region: SE)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				SE
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 10②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑43 未检测48 ③
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Fixed Line ISP⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: SE 城市: Stockholm 服务商: AS49770 Internetport Sweden AB
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    测试超时
北京移动 221.179.155.161 测试超时
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     测试超时
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    测试超时
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       测试超时
成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
1.13 ms  AS49770  瑞典, 耶夫勒堡省, 胡迪克斯瓦尔市, sevendns.net
5.88 ms  AS49770  瑞典, 斯德哥尔摩省, 斯德哥尔摩, internetport.com
6.11 ms  AS1299  瑞典, 斯德哥尔摩省, 斯德哥尔摩, telia.com
26.57 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
26.30 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
29.57 ms  AS4134  德国, 黑森州, 法兰克福, chinatelecom.com.cn, 电信
285.14 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
1.07 ms  AS49770  瑞典, 耶夫勒堡省, 胡迪克斯瓦尔市, sevendns.net
5.88 ms  AS49770  瑞典, 斯德哥尔摩省, 斯德哥尔摩, internetport.com
259.89 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
2.45 ms  AS49770  瑞典, 耶夫勒堡省, 胡迪克斯瓦尔市, sevendns.net
5.81 ms  AS49770  瑞典, 斯德哥尔摩省, 斯德哥尔摩, internetport.com
236.05 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 855.55 Mbps	 907.01 Mbps	 5.29	  0.0%
法兰克福	 649.75 Mbps	 770.93 Mbps	 39.13	  0.0%
洛杉矶		 409.99 Mbps	 976.55 Mbps	 157.07	  0.0%
联通上海5G	 580.57 Mbps	 596.98 Mbps	 238.93	  0.0%
联通海南	 332.80 Mbps	 475.60 Mbps	 292.76	  NULL
电信合肥5G	 0.81 Mbps	 345.63 Mbps	 258.54	  7.4%
电信Nanjing5G	 11.32 Mbps	 481.14 Mbps	 264.25	  0.3%
------------------------------------------------------------------------
 总共花费      : 6 分 49 秒
 时间          : Fri Mar 15 12:31:42 UTC 2024
------------------------------------------------------------------------
```

### GB5

```bash
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-10-18                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2024-03-15 12:36:27 UTC
净测试时长：3分40秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-17-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.1-0-g3208b098f51a-prebuilt.qemu.org

处理器信息
  Name                          Common KVM processor
  Topology                      1 Processor, 3 Cores
  Identifier                    GenuineIntel Family 15 Model 6 Stepping 1
  Base Frequency                3.40 GHz
  L1 Instruction Cache          32.0 KB x 3
  L1 Data Cache                 32.0 KB x 3
  L2 Cache                      4.00 MB x 3
  L3 Cache                      16.0 MB

内存信息
  Size                          3.82 GB

单核测试分数：456
多核测试分数：1166
详细结果链接：https://browser.geekbench.com/v5/cpu/22321454
```

