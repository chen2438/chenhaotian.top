---
description: 发布于 2024-03-11
categories:
- vps
date: 2024-03-11
slug: recloud-hk-hgc
title: Recloud 香港 HGC NAT VPS 测评
updated: 
tags: 
- vps
- recloud
copyright: true
---

# Recloud 香港 HGC NAT VPS 测评

高质量HGC商宽动态IP 测试IP：218.190.249.x 适合广州移动中转，移动电信延迟较低，解锁香港本地流媒体 严管金融诈骗 不保证GFW封锁后能及时更换IP！，不保证奈飞解锁！

> 测试IP段与当前IP段不一致，当前IP直连效果不佳。

AFF：https://nat.recloud.pw/aff.php?aff=127

## 规格

香港HGC -A1

```
CPU：1C
内存：256MB
磁盘：20G
带宽：200M峰值
流量：1024G （双向）
IP：1个共享IPv4
10个TCP/UDP/HTTP(S)端口
```

¥10.00CNY 每月

## 测试

### IPv4

![image-20240311203056227](https://media.opennet.top/i/2024/03/11/xb4k52-0.png)

![image-20240311203124359](https://media.opennet.top/i/2024/03/11/xbaker-0.png)

### IPv6

无

### 融合怪

```bash
测评频道: https://t.me/vps_reviews                    
版本：2024.02.22
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Common KVM processor
 CPU 核心数        : 1
 CPU 频率          : 1099.999 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 2.10 GiB / 19.09 GiB
 启动盘路径        : /dev/vda1
 内存              : 105.38 MiB / 209.71 MiB
 Swap              : 36.82 MiB / 511.99 MiB
 系统在线时间      : 0 days, 0 hour 14 min
 负载              : 0.37, 0.20, 0.11
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ❌ Disabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-23-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS9304 HGC Global Communications Limited
 IPV4 位置         : Hong Kong / Hong Kong / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		1451 Scores
 2 线程测试(多核)得分: 		1447 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		36258.96 MB/s
 单线程写测试:		15551.36 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		63.4 MB/s (15.47 IOPS, 1.65s)		89.6 MB/s (21883 IOPS, 1.17s)
 1GB-1M Block		106 MB/s (101 IOPS, 9.89s)		106 MB/s (101 IOPS, 9.89s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 102.62 MB/s  (25.6k) | 102.03 MB/s   (1.5k)
Write      | 102.89 MB/s  (25.7k) | 102.56 MB/s   (1.6k)
Total      | 205.51 MB/s  (51.3k) | 204.59 MB/s   (3.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 97.40 MB/s     (190) | 94.03 MB/s      (91)
Write      | 102.58 MB/s    (200) | 100.29 MB/s     (97)
Total      | 199.99 MB/s    (390) | 194.33 MB/s    (188)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: HGC
视频缓存节点地域: 中国香港(HKG6)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				Yes (Region: HK)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			No  (Region: CN) 
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				HGC in Hong Kong 
 Netflix Preferred CDN:			Associated with [HGC Broadband] in [Hong Kong ]
 Spotify Registration:			No
 Steam Currency:			HKD
 ChatGPT:				Only Available with Mobile APP
 Bing Region:				HK
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Unknown (Maybe Fixed Line ISP)⑤  isp⑧  business⑨  
  公司类型(company_type):isp①  isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
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
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS9304 HGC Global Communications Limited
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
成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.87 ms  *  局域网
135.58 ms  AS9304  中国, 香港, hgc.com.hk
1.37 ms  *  局域网
18.21 ms  *  局域网
162.32 ms  AS4134  中国, 香港, chinatelecom.com.cn, 电信
172.20 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
153.99 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.28 ms  *  局域网
15.62 ms  AS9304  中国, 香港, hgc.com.hk
15.05 ms  *  局域网
130.38 ms  *  局域网
193.37 ms  AS4837  中国, 香港, chinaunicom.com, 联通
228.84 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
190.31 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
188.50 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
210.17 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
192.18 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.35 ms  *  局域网
15.05 ms  AS9304  中国, 香港, hgc.com.hk
1.47 ms  *  局域网
1.73 ms  *  局域网
19.74 ms  AS9304  中国, 香港, hgc.com.hk
5.90 ms  AS9304  中国, 香港, hgc.com.hk
8.20 ms  AS15412  中国, 香港, globalcloudxchange.com
10.95 ms  AS15412  中国, 香港, globalcloudxchange.com
250.39 ms  AS15412  中国, 香港, globalcloudxchange.com
283.72 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
313.71 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
314.85 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
38.41 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
24.23 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
19.64 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 197.85 Mbps	 191.46 Mbps	 2.69	  0.0%
新加坡		 52.84 Mbps	 177.27 Mbps	 42.73	  NULL
日本东京	 14.25 Mbps	 186.98 Mbps	 195.00	  1.4%
联通上海5G	 4.97 Mbps	 69.82 Mbps	 270.81	  2.0%
联通天津5G	 12.69 Mbps	 13.22 Mbps	 252.14	  NULL
电信Nanjing5G	 17.48 Mbps	 173.02 Mbps	 170.09	  0.5%
电信湖南5G	 12.31 Mbps	 156.70 Mbps	 172.82	  2.0%
移动Beijing	 16.16 Mbps	 44.66 Mbps	 333.74	  NULL
------------------------------------------------------------------------
 总共花费      : 11 分 30 秒
 时间          : Mon Mar 11 08:33:26 EDT 2024
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

当前时间：2024-03-11 08:50:38 EDT
净测试时长：6分45秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-23-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.2-0-gea1b7a073390-prebuilt.qemu.org

处理器信息
  Name                          Common KVM processor
  Topology                      1 Processor, 1 Core
  Identifier                    AuthenticAMD Family 15 Model 6 Stepping 1
  Base Frequency                1.10 GHz
  L1 Instruction Cache          64.0 KB
  L1 Data Cache                 64.0 KB
  L2 Cache                      512 KB
  L3 Cache                      16.0 MB

内存信息
  Size                          210 MB

单核测试分数：462
多核测试分数：574
详细结果链接：https://browser.geekbench.com/v5/cpu/22309850
```

