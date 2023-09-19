---
description: 发布于 2023-09-13
categories:
- vps
date: 2023-09-13
slug: bytevirt-hk-nat
title: ByteVirt 香港 NAT VPS 测评
updated: 
tags: 
- vps
- bytevirt
copyright: true
---

# ByteVirt 香港 NAT VPS 测评

512KVM-NAT
1C 512M 6G 550GB 折后7.04USD/YR

256LXC-NAT
1C 256M 4G 350GB 折后4.4USD/YR

八折优惠码见官方频道 https://t.me/bytevirt

## 规格

NAT-256-LXC-HK

1 EPYC Core(s) (Fair Share)

256MB RAM

4GB SSD

20 IPv4 NAT Ports

1 /64 IPv6 Addresses

350GB @500Mbps

LXC Virtualization

Hong Kong, China Location

1 backup

Port speed limited to 1Mbps/s after traffic exceeded

## 测试

NAT 产品默认墙，联通电信绕美，移动直连

流媒体解锁地区乱飘，v4 v6都解锁奈飞

![image-20230913201658133](https://media.opennet.top/i/2023/09/13/xcvdi9-0.png)

![image-20230913202301279](https://media.opennet.top/i/2023/09/13/xggplo-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.08.26
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7D12 32-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 1100.000 MHz
 CPU 缓存          : L1: 1.00 MB / L2: 8.00 MB / L3: 64.00 MB
 硬盘空间          : 706.57 MiB / 3951.72 MiB
 启动盘路径        : /dev/loop8
 内存              : 47.64 MiB / 256.00 MiB
 Swap              : 7.29 MiB / 256.00 MiB
 系统在线时间      : 0 days, 0 hour 1 min
 负载              : 0.00, 0.00, 0.00
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.102-1-pve
 TCP加速方式       : bbr
 虚拟化架构        : LXC
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS7720 Skywolf Technology LLC
 IPV4 位置         : Hong Kong / Central and Western / HK
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1450 Scores
 32 线程测试(多核)得分: 		1451 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		39428.43 MB/s
 单线程写测试:		17321.07 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		162 MB/s (39.56 IOPS, 0.65s)		269 MB/s (65702 IOPS, 0.39s)
 1GB-1M Block		582 MB/s (555 IOPS, 1.80s)		916 MB/s (874 IOPS, 1.14s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 171.65 MB/s  (42.9k) | 423.15 MB/s   (6.6k)
Write      | 172.11 MB/s  (43.0k) | 425.38 MB/s   (6.6k)
Total      | 343.76 MB/s  (85.9k) | 848.53 MB/s  (13.2k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 458.55 MB/s    (895) | 477.20 MB/s    (466)
Write      | 482.92 MB/s    (943) | 508.99 MB/s    (497)
Total      | 941.48 MB/s   (1.8k) | 986.19 MB/s    (963)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG12S20)
Youtube识别地域: 香港(HK)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS15S45)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
---------------DisneyPlus---------------
[提醒] 无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：香港区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: GB)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Associated with [] in [Hong Kong ]
 Spotify Registration:			No
 Steam Currency:			HKD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: GB)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Failed
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			No
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
欺诈分数(越低越好): 23②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
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
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS7720 Skywolf Technology LLC
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
2023/09/13 12:11:41 测试完成!
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.29 ms 	* RFC1918
0.24 ms 	AS7720 中国 香港 skywolf.cloud
0.40 ms 	* RFC1918
0.69 ms 	AS3491 中国 香港 pccwglobal.com
148.10 ms 	AS4134 [CHINANET-US] 美国 加利福尼亚州 洛杉矶 PCCW-CT-PoP chinatelecom.com.cn 电信
303.38 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
405.82 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
322.16 ms 	AS4134 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.com.cn 电信
316.34 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
100.58 ms 	* RFC1918
0.21 ms 	AS7720 中国 香港 skywolf.cloud
0.92 ms 	AS3356 中国 香港 level3.com
145.83 ms 	AS3356 美国 加利福尼亚州 洛杉矶 level3.com
148.54 ms 	AS3356 美国 加利福尼亚州 洛杉矶 Level3-CU-Peer level3.com
349.92 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
348.62 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
350.74 ms 	AS17816 [APNIC-AP] 中国 广东省 茂名市 chinaunicom.cn 联通
328.91 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
321.86 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.23 ms 	AS7720 中国 香港 skywolf.cloud
0.85 ms 	AS3356 中国 香港 level3.com
0.98 ms 	AS3356 中国 香港 level3.com
2.27 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
2.57 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
57.32 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
56.52 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
8.98 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
109.32 ms 	AS9808 [CMNET] 中国 上海市 chinamobile.com 移动
10.57 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
59.87 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
59.14 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 280.83 Mbps	 504.93 Mbps	 0.13	  NULL
中国香港	 291.13 Mbps	 504.70 Mbps	 0.12	  NULL
新加坡		 519.57 Mbps	 506.15 Mbps	 34.19	  0.0%
联通郑州5G	 82.78 Mbps	 248.48 Mbps	 422.45	  NULL
联通Fuzhou	 45.73 Mbps	 274.78 Mbps	 418.99	  5.0%
电信江苏5G	 20.27 Mbps	 201.94 Mbps	 342.24	  8.7%
电信Nanjing5G	 141.78 Mbps	 417.80 Mbps	 350.13	  3.0%
移动Chengdu	 506.42 Mbps	 530.97 Mbps	 78.16	  0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 5 秒
 时间          : Wed Sep 13 12:16:08 UTC 2023
------------------------------------------------------------------------
```

