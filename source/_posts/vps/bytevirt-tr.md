---
description: 发布于 2023-08-08
categories:
- vps
date: 2023-08-08
slug: bytevirt-tr
title: ByteVirt 土耳其 NAT KVM VPS 测评
updated: 
tags: 
- vps
- bytevirt
copyright: true
---

# ByteVirt 土耳其 NAT KVM VPS 测评

https://bytevirt.com/store/nat-tr

价格实惠，CPU拉跨，奈飞只解锁自制剧

## 规格

**1** CPU Core(s) (Fair Share)
**256MB** RAM
**4GB** SSD
**20 IPv4 NAT** Ports
**1 IPV6/66**
**500GB** @500Mbps
**KVM** Virtualization
**Istanbul, Turkey** Location
**3 Snapshot**
**1 backup**
*Port speed limited to 1Mbps/s after traffic exceeded*

起价
$4.75 USD
每年

## 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2697 v4 @ 2.30GHz
 CPU 核心数        : 1
 CPU 频率          : 2297.334 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.52 GiB / 3.78 GiB
 启动盘路径        : /dev/vda1
 内存              : 68.74 MiB / 224.14 MiB
 Swap              : 18.38 MiB / 512.00 MiB
 系统在线时间      : 0 days, 0 hour 3 min
 负载              : 1.14, 0.61, 0.24
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-23-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS211376 Kaan Girgin
 IPV4 位置         : Istanbul / Istanbul / TR
 IPV6 ASN          : AS211376 Kaan Girgin
 IPV6 位置         : Meric / TR-22
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		169 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		3446.40 MB/s
 单线程写测试:		1999.65 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		3.6 MB/s (868 IOPS, 29.48s)		3.7 MB/s (901 IOPS, 28.40s)
 1GB-1M Block		618 MB/s (590 IOPS, 1.70s)		657 MB/s (626 IOPS, 1.60s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 15.26 MB/s    (3.8k) | 165.38 MB/s   (2.5k)
Write      | 15.27 MB/s    (3.8k) | 166.25 MB/s   (2.5k)
Total      | 30.54 MB/s    (7.6k) | 331.64 MB/s   (5.1k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 565.58 MB/s   (1.1k) | 719.19 MB/s    (702)
Write      | 595.63 MB/s   (1.1k) | 767.09 MB/s    (749)
Total      | 1.16 GB/s     (2.2k) | 1.48 GB/s     (1.4k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: SEABONE
视频缓存节点地域: 希腊雅典(ATH1)
Youtube识别地域: 土耳其(TR)
[IPv6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: SEABONE
视频缓存节点地域: 希腊雅典(ATH1)
Youtube识别地域: 土耳其(TR)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：土耳其
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：土耳其
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：土耳其区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：土耳其区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: TR)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: TR)
 Amazon Prime Video:			Yes (Region: TR)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				SEABONE in Athens 
 Netflix Preferred CDN:			Associated with [TELECOM ITALIA SPARKLE S.p.A.] in [Palermo, Sicily ]
 Spotify Registration:			No
 Steam Currency:			TRY
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: TR)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: TR)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				SEABONE in Athens 
 Netflix Preferred CDN:			Associated with [TELECOM ITALIA SPARKLE S.p.A.] in [Palermo, Sicily ]
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【TR】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②  35⑦
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  business⑨  
  公司类型(company_type):hosting①  business⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No② ⑥ ⑨ 
  移动网络(mobile):  Yes⑥ 
  代理(proxy):  No①   Yes② ⑥ ⑧ ⑨ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/08 16:06:37 北京电信 219.141.136.12  测试超时
2023/08/08 16:06:37 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/08 16:06:37 北京移动 221.179.155.161 测试超时
2023/08/08 16:06:37 上海电信 202.96.209.133  测试超时
2023/08/08 16:06:37 上海联通 210.22.97.1     测试超时
2023/08/08 16:06:37 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/08 16:06:37 广州电信 58.60.188.222   测试超时
2023/08/08 16:06:37 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/08 16:06:37 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/08 16:06:37 成都电信 61.139.2.69     测试超时
2023/08/08 16:06:37 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/08 16:06:37 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
2.63 ms  *  局域网
1.68 ms  AS211376  土耳其, 伊斯坦布尔省, 伊斯坦布尔, meric.net.tr
1.05 ms  *  局域网
0.92 ms  *  局域网
4.74 ms  *  局域网
10.57 ms  AS174  保加利亚, 索非亚, cogentco.com
15.74 ms  AS174  塞尔维亚, 贝尔格莱德, cogentco.com
21.13 ms  AS174  匈牙利, 布达佩斯, cogentco.com
24.62 ms  AS174  斯洛伐克, 布拉迪斯拉发州, 布拉迪斯拉发, cogentco.com
28.29 ms  AS174  奥地利, 维也纳州, 维也纳, cogentco.com
33.66 ms  AS174  德国, 巴伐利亚州, 慕尼黑, cogentco.com
37.69 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
38.31 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
94.02 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
广州联通 210.21.196.6
0.87 ms  *  局域网
1.33 ms  AS211376  土耳其, 伊斯坦布尔省, 伊斯坦布尔, meric.net.tr
0.89 ms  *  局域网
1.31 ms  *  局域网
1.54 ms  *  局域网
1.60 ms  AS6762  土耳其, 伊斯坦布尔省, 伊斯坦布尔, tisparkle.com
188.23 ms  AS4837  美国, 加利福尼亚州, 洛杉矶, chinaunicom.com, 联通
354.05 ms  AS4837  中国, 北京, chinaunicom.com, 联通
380.38 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
395.88 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
广州移动 120.196.165.24
0.51 ms  *  局域网
2.22 ms  AS211376  土耳其, 伊斯坦布尔省, 伊斯坦布尔, meric.net.tr
1.20 ms  *  局域网
1.66 ms  *  局域网
4.05 ms  *  局域网
10.53 ms  AS174  保加利亚, 索非亚, cogentco.com
15.79 ms  AS174  塞尔维亚, 贝尔格莱德, cogentco.com
20.98 ms  AS174  匈牙利, 布达佩斯, cogentco.com
23.33 ms  AS174  斯洛伐克, 布拉迪斯拉发州, 布拉迪斯拉发, cogentco.com
45.90 ms  AS174  奥地利, 维也纳州, 维也纳, cogentco.com
34.04 ms  AS174  德国, 巴伐利亚州, 慕尼黑, cogentco.com
38.37 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
39.21 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
52.00 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
52.65 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
266.26 ms  AS9808  中国, 上海, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 355.54 Mbps	 422.12 Mbps	 1.26	  0.0%
洛杉矶		 154.89 Mbps	 318.05 Mbps	 200.55	  0.0%
中国香港	 131.81 Mbps	 170.34 Mbps	 232.57	  NULL
------------------------------------------------------------------------
 总共花费      : 7 分 8 秒
 时间          : Tue Aug  8 16:09:53 CST 2023
------------------------------------------------------------------------
```
