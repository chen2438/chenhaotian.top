---
description: 发布于 2023-09-11
categories:
- vps
date: 2023-09-11
slug: akilecloud-tw-nat
title: AkileCloud 台湾 HINET NAT VPS 测评
updated: 
tags: 
- vps
- akilecloud
copyright: true
---

# AkileCloud 台湾 HINET NAT VPS 测评

共享 IP，无独立 IPV4，赠送独立 IPV6
配置固定端口 10 个 TCP & UDP
台湾原生流媒体解锁动画疯等

## 规格

TWNAT4-512M

CPU 1核 ｜ 内存 512 M

硬盘 5 GB ｜ 带宽 200M

流量 1024G/月 ｜ 超出后限速10Mbps

重置流量 ¥10.00

IPV4 1个 ｜ IPV6 1个

库存 3 台

¥128.88/年

购买链接（含AFF）：[https://akile.io/shop/server?areaId=6&nodeId=47&planId=208&aff_code=7757a50f-522e-40a9-a088-891f3f581d51](https://akile.io/shop/server?areaId=6&nodeId=47&planId=208&aff_code=7757a50f-522e-40a9-a088-891f3f581d51)

## 测试

动态IP，NAT机，被墙自动更换IP，请考虑服务中断风险并做好 DDNS

![image-20230911184025850](https://media.opennet.top/i/2023/09/11/ufnmmk-0.png)

![image-20230911185153735](https://media.opennet.top/i/2023/09/11/umd9cj-0.png)

![ping.pe](https://media.opennet.top/i/2023/09/11/um61fg-0.jpeg)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.08.26
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v2 @ 2.80GHz
 CPU 核心数        : 1
 CPU 频率          : 2799.998 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 2.14 GiB / 4.88 GiB
 启动盘路径        : /dev/sda1
 内存              : 150.04 MiB / 475.75 MiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 0 days, 0 hour 12 min
 负载              : 0.25, 0.10, 0.03
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-25-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS3462 Data Communication Business Group
 IPV4 位置         : Yuanlin / Taiwan / TW
 IPV6 ASN          : AS3462 Chunghwa Telecom
 IPV6 位置         : Taichung / Taichung City
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		782 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		16919.57 MB/s
 单线程写测试:		12721.89 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		51.1 MB/s (12.48 IOPS, 2.05s)		66.7 MB/s (16291 IOPS, 1.57s)
 1GB-1M Block		3.3 GB/s (3119 IOPS, 0.32s)		5.0 GB/s (4728 IOPS, 0.21s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 96.24 MB/s   (24.0k) | 205.06 MB/s   (3.2k)
Write      | 96.49 MB/s   (24.1k) | 206.14 MB/s   (3.2k)
Total      | 192.73 MB/s  (48.1k) | 411.20 MB/s   (6.4k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 224.56 MB/s    (438) | 228.50 MB/s    (223)
Write      | 236.49 MB/s    (461) | 243.72 MB/s    (238)
Total      | 461.06 MB/s    (899) | 472.22 MB/s    (461)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: HINET
视频缓存节点地域: TXG(TXG7)
Youtube识别地域: 台湾(TW)
[IPv6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: HINET
视频缓存节点地域: TXG(TXG7)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：台湾
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
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
 YouTube CDN:				HINET in 
 Netflix Preferred CDN:			Associated with [Chunghwa Telecom] in [Taipei ]
 Spotify Registration:			No
 Steam Currency:			TWD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: TW)
 Netflix:				Originals Only
 YouTube Premium:			No  (Region: CN) 
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				HINET in 
 Netflix Preferred CDN:			Associated with [Chunghwa Telecom] in [Taipei ]
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【TW】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 73②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Unknown (Maybe Fixed Line ISP)⑤  isp⑧  business⑨  
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
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 2②
abuse得分(越低越好): 0④
IP类型: Fixed Line ISP⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: TW 城市: Yuanlin 服务商: AS3462 Data Communication Business Group
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     测试超时
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
2023/09/11 06:34:05 测试完成!
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.83 ms 	* RFC1918
0.62 ms 	* RFC1918
2.13 ms 	AS3462 [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
3.96 ms 	AS3462 [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.95 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.69 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
5.00 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.80 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.74 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
238.04 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 X-I chinatelecom.com.cn 电信
79.70 ms 	AS4134 [APNIC-AP] 中国 广东省 深圳市 chinatelecom.com.cn 电信
77.62 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.48 ms 	* RFC1918
1.21 ms 	* RFC1918
1.94 ms 	AS3462 [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
1.88 ms 	AS3462 [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.94 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.65 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
7.26 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
32.13 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
32.97 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
35.91 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
36.72 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
33.37 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.50 ms 	* RFC1918
0.72 ms 	* RFC1918
2.01 ms 	AS3462 [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
1.81 ms 	AS3462 [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.69 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.97 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.07 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
4.64 ms 	* [HINET-NET] 中国 台湾省 台北市 hinet.net 中华电信
28.15 ms 	AS3462 [HINET-NET] 中国 香港 hinet.net 中华电信
234.80 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
33.17 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 回国到达层 cmi.chinamobile.com 移动
32.70 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
33.17 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
35.64 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
39.09 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
36.77 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 208.55 Mbps	 201.87 Mbps	 4.39	  0.0%
新加坡		 207.79 Mbps	 202.31 Mbps	 45.70	  0.0%
洛杉矶		 194.68 Mbps	 203.73 Mbps	 174.91	  0.0%
联通Fuzhou	 209.55 Mbps	 202.00 Mbps	 41.52	  0.0%
联通海南	 209.33 Mbps	 204.50 Mbps	 48.53	  NULL
电信天津5G	 208.26 Mbps	 203.19 Mbps	 62.74	  0.0%
电信合肥5G	 198.77 Mbps	 206.05 Mbps	 73.84	  0.5%
移动Lanzhou	 210.54 Mbps	 14.69 Mbps	 93.24	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 10 秒
 时间          : Mon Sep 11 06:38:09 EDT 2023
------------------------------------------------------------------------
```

