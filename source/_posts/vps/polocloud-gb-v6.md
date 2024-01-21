---
description: 发布于 2024-01-19
categories:
- vps
date: 2024-01-19
slug: polocloud-gb-v6
title: PoloCloud 英国 IPv6 VPS 测评
updated: 
tags: 
- vps
- polocloud
copyright: true
---

# PoloCloud 英国 IPv6 VPS 测评

纯IPv6玩具机 不提供任何IPv4 请确保掌握相关技术 不提供技术支持 仅提供Debian11系统 该产品不适用于任何无理由退款 禁止一切BT下载 版权文件 如有abuse删机不退款

链接：https://polocloud.xyz/index.php?rp=/store/uklite-ipv6-vps

## 规格

```
UKLite6-512M
CPU：1c
RAM：512M
硬盘：10G SSD
带宽：200Mbps共享
流量：250G单向
IP：1个 IPv6
¥1.00 CNY 每月
```

## 测试

### Ping

![image-20240119214612261](https://media.opennet.top/i/2024/01/19/zbz0lq-0.png)

![image-20240119214634256](https://media.opennet.top/i/2024/01/19/zcc4sm-0.png)

### 融合怪

```
测评频道: https://t.me/vps_reviews                    
版本：2024.01.16
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7900 12-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 3699.982 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 2.10 GiB / 9.68 GiB
 启动盘路径        : /dev/sda1
 内存              : 88.71 MiB / 475.74 MiB
 Swap              : 268 KiB / 825.00 MiB
 系统在线时间      : 0 days, 0 hour 1 min
 负载              : 0.35, 0.13, 0.05
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-27-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 无法检测
 IPV4 ASN          : AS151338 POLONETWORK LIMITED
 IPV4 位置         : Coventry / England / GB
 IPV6 ASN          : AS151338 Polonetwork
 IPV6 位置         : Coventry / England
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		5971 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		70644.26 MB/s
 单线程写测试:		33982.01 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		4.1 MB/s (1004 IOPS, 25.51s)		4.1 MB/s (1003 IOPS, 25.50s)
 1GB-1M Block		106 MB/s (101 IOPS, 9.89s)		106 MB/s (101 IOPS, 9.89s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 3.98 MB/s      (996) | 63.77 MB/s     (996)
Write      | 4.01 MB/s     (1.0k) | 64.18 MB/s    (1.0k)
Total      | 7.99 MB/s     (1.9k) | 127.96 MB/s   (1.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 97.71 MB/s     (190) | 96.51 MB/s      (94)
Write      | 102.90 MB/s    (200) | 102.94 MB/s    (100)
Total      | 200.62 MB/s    (390) | 199.45 MB/s    (194)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR48S34)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的网络可能没有正常配置IPv4，或者没有IPv4网络接入
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：英国
---------------DisneyPlus---------------
[提醒] 无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：英国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: GB)
 HotStar:				Yes (Region: CA)
 Disney+:				Yes (Region: GB)
 Netflix:				Yes (Region: GB)
 YouTube Premium:			Yes (Region: GB)
 Amazon Prime Video:			Yes (Region: GB)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			GB
 Viu.com:				Yes (Region: SG)
 YouTube CDN:				London 
 Netflix Preferred CDN:			Associated with [hkgo LLC] in [London ]
 Spotify Registration:			No
 Steam Currency:			GBP
 ChatGPT:				Yes
 Bing Region:				GB
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【GB】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
以下为IPV6检测
IP类型: 
  使用类型(usage_type):isp⑧  business⑨  
  公司类型(company_type):isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No⑥ ⑦ ⑧ ⑨ 
  VPN(vpn):  No⑦ ⑧ 
  TOR(tor):  No⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
纯IPV6网络无法查询
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广东电信 240e:0:a::c9:5238
0.18 ms 	AS151338 英国 英格兰 考文垂
0.78 ms 	AS212027 英国 pebblehost.com
3.05 ms 	AS212027 英国 pebblehost.com
0.40 ms 	AS212027 英国 pebblehost.com
10.33 ms 	AS212027 英国 pebblehost.com
10.76 ms 	AS1299 英国 英格兰 伦敦 arelion.com
45.00 ms 	AS1299 英国 英格兰 伦敦 arelion.com
249.73 ms 	AS4134 中国 广东 广州 chinatelecom.com.cn 电信
250.50 ms 	AS4134 中国 广东 广州 chinatelecom.com.cn 电信
259.57 ms 	AS4134 中国 广东 广州 chinatelecom.com.cn 电信
广东联通 2408:8651:3700::b
0.16 ms 	AS151338 英国 英格兰 考文垂
0.84 ms 	AS212027 英国 pebblehost.com
8.38 ms 	AS212027 英国 pebblehost.com
0.73 ms 	AS212027 英国 pebblehost.com
14.46 ms 	AS212027 英国 pebblehost.com
17.59 ms 	AS1299 法国 法兰西岛大区 巴黎 arelion.com
27.31 ms 	AS1299 德国 黑森州 美因河畔法兰克福 arelion.com
271.73 ms 	AS4837 中国 广东 广州 chinaunicom.cn 联通
492.91 ms 	AS4837 中国 chinaunicom.cn 联通
252.92 ms 	AS4837 中国 广东 广州 chinaunicom.cn 联通
299.51 ms 	AS4837 中国 chinaunicom.cn 联通
266.94 ms 	AS4837 中国 chinaunicom.cn
广东移动 2409:8055:40:2a1::1
0.19 ms 	AS151338 英国 英格兰 考文垂
0.82 ms 	AS212027 英国 pebblehost.com
12.24 ms 	AS212027 英国 pebblehost.com
0.33 ms 	AS212027 英国 pebblehost.com
10.93 ms 	AS212027 英国 pebblehost.com
14.49 ms 	AS1299 英国 英格兰 伦敦 arelion.com
12.42 ms 	AS58453 中国 香港 cmi.chinamobile.com 移动
12.48 ms 	AS58453 中国 香港 cmi.chinamobile.com 移动
405.72 ms 	AS58453 中国 香港 cmi.chinamobile.com
453.31 ms 	AS9808 中国 广东 广州 chinamobile.com 移动
205.10 ms 	AS9808 中国 广东 广州 chinamobile.com 移动
318.84 ms 	AS9808 中国 广东 广州 chinamobile.com 移动
265.25 ms 	AS9808 中国 广东 广州 chinamobile.com 移动
317.47 ms 	AS9808 中国 chinamobile.com
464.22 ms 	AS9808 中国 chinamobile.com
------------------------------------------------------------------------
 总共花费      : 5 分 16 秒
 时间          : Fri Jan 19 13:36:47 UTC 2024
------------------------------------------------------------------------
```

### Bench.sh

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7900 12-Core Processor
 CPU Cores          : 1 @ 3699.982 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 10.6 GB (2.1 GB Used)
 Total Mem          : 475.7 MB (65.9 MB Used)
 Total Swap         : 825.0 MB (268.0 KB Used)
 System uptime      : 0 days, 0 hour 8 min
 Load average       : 0.03, 0.18, 0.12
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.10.0-27-cloud-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✗ Offline / ✓ Online
 Organization       : AS151338 POLONETWORK LIMITED
 Location           : Coventry / GB
 Region             : England
----------------------------------------------------------------------
 I/O Speed(1st run) : 106 MB/s
 I/O Speed(2nd run) : 105 MB/s
 I/O Speed(3rd run) : 105 MB/s
 I/O Speed(average) : 105.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    207.30 Mbps       194.34 Mbps         0.33 ms     
 Los Angeles, US  197.81 Mbps       197.67 Mbps         136.99 ms   
 Dallas, US       205.24 Mbps       198.15 Mbps         112.06 ms   
 Paris, FR        209.27 Mbps       196.22 Mbps         35.35 ms    
 Mumbai, IN       209.50 Mbps       204.20 Mbps         133.65 ms   
 Tokyo, JP        167.01 Mbps       202.06 Mbps         232.60 ms   
----------------------------------------------------------------------
 Finished in        : 3 min 31 sec
 Timestamp          : 2024-01-19 13:41:44 UTC
----------------------------------------------------------------------
```

