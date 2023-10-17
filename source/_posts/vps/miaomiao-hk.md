---
description: 发布于 2023-10-17
categories:
- vps
date: 2023-10-17
slug: miaomiao-hk
title: 喵云 香港 HKBN NAT VPS 测评
updated: 
tags: 
- vps
- miaomiao
copyright: true
---

# 喵云 香港 HKBN NAT VPS 测评

购买页面：https://miaomiao.moe/index.php?rp=/store/hkbn-nat

可直连，联通体验尚可；多作为落地使用

## 规格

IP不保证不被墙 购买前请确保掌握基础使用知识 香港原生家宽IP 提供DDNS 转发策略支持TCP/UDP/HTTP

HKBN-Nano

CPU：1C
RAM：256M
硬盘：10G SSD
带宽：200M 共享
流量：1000G 双向
10个NAT转发规则
1个香港原生共享IPv4

¥9.90CNY
每月

## 测试

![image-20231017224130921](https://media.opennet.top/i/2023/10/17/112fnls-0.png)

![image-20231017224328549](https://media.opennet.top/i/2023/10/17/113m27d-0.png)

![image-20231017224342240](https://media.opennet.top/i/2023/10/17/113omry-0.png)

![image-20231017224304697](https://media.opennet.top/i/2023/10/17/113gph8-0.png)

```
测评频道: https://t.me/vps_reviews                    
版本：2023.10.09
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Common KVM processor
 CPU 核心数        : 1
 CPU 频率          : 2400.032 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.68 GiB / 9.50 GiB
 启动盘路径        : /dev/vda1
 内存              : 102.11 MiB / 209.71 MiB
 Swap              : 9.32 MiB / 255.98 MiB
 系统在线时间      : 0 days, 11 hour 37 min
 负载              : 0.19, 0.06, 0.01
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ❌ Disabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-26-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS9269 Hong Kong Broadband Network Ltd.
 IPV4 位置         : Central / Central and Western / HK
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		626 Scores
 2 线程测试(多核)得分: 		659 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		11437.48 MB/s
 单线程写测试:		8631.52 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		29.4 MB/s (7177 IOPS, 3.57s)		36.7 MB/s (8959 IOPS, 2.86s)
 1GB-1M Block		2.6 GB/s (2439 IOPS, 0.41s)		4.0 GB/s (3837 IOPS, 0.26s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 70.91 MB/s   (17.7k) | 500.51 MB/s   (7.8k)
Write      | 71.10 MB/s   (17.7k) | 503.14 MB/s   (7.8k)
Total      | 142.02 MB/s  (35.5k) | 1.00 GB/s    (15.6k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 526.24 MB/s   (1.0k) | 399.99 MB/s    (390)
Write      | 554.20 MB/s   (1.0k) | 426.63 MB/s    (416)
Total      | 1.08 GB/s     (2.1k) | 826.62 MB/s    (806)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: HKBN
视频缓存节点地域: 中国香港(HKG13)
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
 YouTube CDN:				HKBN in Hong Kong 
 Netflix Preferred CDN:			Associated with [] in [Hong Kong ]
 Spotify Registration:			No
 Steam Currency:			HKD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 11②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Fixed Line ISP⑤  isp⑧  business⑨  
  公司类型(company_type):isp①  isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No② ⑥ ⑨ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测88 ③
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Central 服务商: AS9269 Hong Kong Broadband Network Ltd.
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  测试超时
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
 	
广州联通 210.21.196.6
 	
广州移动 120.196.165.24
 	
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 174.10 Mbps	 131.39 Mbps	 2.21	  NULL
中国香港	 167.98 Mbps	 90.08 Mbps	 17.64	  NULL
新加坡		 59.57 Mbps	 30.99 Mbps	 47.46	  0.0%
联通Fuzhou	 1.49 Mbps	 3.64 Mbps	 41.26	  1.0%
联通海南	 2.39 Mbps	 2.98 Mbps	 22.64	  NULL
电信Suzhou5G	 173.23 Mbps	 3.64 Mbps	 49.75	  NULL
电信Zhenjiang5G	 21.35 Mbps	 4.03 Mbps	 117.74	  NULL
------------------------------------------------------------------------
 总共花费      : 5 分 25 秒
 时间          : Tue Oct 17 10:19:37 EDT 2023
------------------------------------------------------------------------
```
