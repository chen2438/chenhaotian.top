---
description: 发布于 2023-10-29
categories:
- vps
date: 2023-10-29
slug: xuancent-hk
title: 染怡互联 香港 1M VPS 测评
updated: 
tags: 
- vps
- xuancent
copyright: true
---

# 染怡互联 香港 1M VPS 测评

上下行1M，玩具鸡，三网CN2

## 规格

```
【迎新】香港 A 512M 1IP
¥ 2.00 元 / 月
机房位置：香港大浦
评级(抗灾,网络)：★★★★☆
读写：SSD(约360Mib/s)
网络：国际NET(BGP+CN2)
平均延迟 40ms＜国内 （非高峰期）
防御：5Gbps/s清洗 (Peak)
清洗时间：2小时

配置：1H(vCPU) 512M
硬盘：8G SSD
带宽：1Mbps/sPeak
IP：独立1枚
```

## 测试

![image-20231029191046687](https://media.opennet.top/i/2023/10/29/vlgfhx-0.png)

![image-20231029191228162](https://media.opennet.top/i/2023/10/29/vmjba3-0.png)

```
测评频道: https://t.me/vps_reviews                    
版本：2023.10.09
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2420 0 @ 1.90GHz
 CPU 核心数        : 1
 CPU 频率          : 1899.999 MHz
 CPU 缓存          : L1: 0.00 KB / L2: 0.00 KB / L3: 0.00 KB
 硬盘空间          : 1.06 GiB / 7.84 GiB
 启动盘路径        : /dev/vda1
 内存              : 86.71 MiB / 473.67 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 20 min
 负载              : 0.03, 0.18, 0.09
 系统              : Debian GNU/Linux 10 (buster) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 4.19.0-20-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS64021 Network-Transit
 IPV4 位置         : Hong Kong / Central and Western / HK
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		407 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		6923.94 MB/s
 单线程写测试:		5241.25 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		9.2 MB/s (2254 IOPS, 11.36s)		11.7 MB/s (2846 IOPS, 8.99s)
 1GB-1M Block		490 MB/s (467 IOPS, 2.14s)		465 MB/s (443 IOPS, 2.26s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 4.00 MB/s     (1.0k) | 22.79 MB/s     (356)
Write      | 4.03 MB/s     (1.0k) | 23.23 MB/s     (363)
Total      | 8.03 MB/s     (2.0k) | 46.02 MB/s     (719)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 24.79 MB/s      (48) | 36.68 MB/s      (35)
Write      | 26.33 MB/s      (51) | 39.31 MB/s      (38)
Total      | 51.12 MB/s      (99) | 75.99 MB/s      (73)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT12S24)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：新加坡
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：新加坡区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: SG)
 HotStar:				Yes (Region: SG)
 Disney+:				No
 Netflix:				Yes (Region: SG)
 YouTube Premium:			Failed
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			SG
 Viu.com:				Yes (Region: SG)
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Seattle, WA  
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【SG】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  isp⑧  business⑨  
  公司类型(company_type):isp①  isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ 
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
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  qq邮箱：No
  outlook邮箱: Yes
  yandex邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS64021 Network-Transit
北京电信 219.141.136.12  电信CN2 [优质线路]           
北京联通 202.106.50.1    电信CN2 [优质线路]           
北京移动 221.179.155.161 电信CN2 [优质线路]           
上海电信 202.96.209.133  电信CN2 [优质线路]           
上海联通 210.22.97.1     电信CN2 [优质线路]           
上海移动 211.136.112.200 电信CN2 [优质线路]           
广州电信 58.60.188.222   电信CN2 [优质线路]           
广州联通 210.21.196.6    电信CN2 [优质线路]           
广州移动 120.196.165.24  电信CN2 [优质线路]           
成都电信 61.139.2.69     电信CN2 [优质线路]           
成都联通 119.6.6.6       电信CN2 [优质线路]           
成都移动 211.137.96.205  电信CN2 [优质线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.34 ms 	* RFC1918
* ms 	AS137451 中国 香港 Cogent
1.03 ms 	* RFC1918
0.87 ms 	* RFC1918
7.84 ms 	* [CTG-CN] 中国 香港 电信
10.82 ms 	* [CN2-BackBone] 中国 广东省 广州市 chinatelecom.cn 电信
14.34 ms 	* [CN2-BackBone] 中国 广东省 广州市 chinatelecom.cn 电信
33.27 ms 	AS4134 中国 广东省 佛山市 chinatelecom.com.cn 电信
38.61 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.26 ms 	* RFC1918
203.76 ms 	AS137451 中国 香港 Cogent
0.76 ms 	* RFC1918
1.63 ms 	* RFC1918
2.73 ms 	* [CTG-CN] 中国 香港 电信
8.31 ms 	* [CN2-Global] 中国 广东省 广州市 chinatelecom.cn 电信
13.40 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
18.61 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
17.65 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
14.63 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.29 ms 	* RFC1918
0.67 ms 	* RFC1918
0.92 ms 	* RFC1918
3.31 ms 	* [CTG-CN] 中国 香港 电信
* ms 	* [CTG-CN] 中国 广东省 广州市
* ms 	* [CN2-BackBone] 中国 广东省 广州市 chinatelecom.cn 电信
14.71 ms 	* [CN2-BackBone] 中国 广东省 广州市 chinatelecom.cn 电信
* ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
142.85 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
39.02 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
46.89 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
43.52 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 0.95 Mbps	 0.96 Mbps	 33.42	  0.0%
中国香港	 0.95 Mbps	 0.96 Mbps	 3.80	  0.0%
新加坡		 0.93 Mbps	 0.98 Mbps	 61.15	  0.0%
联通海南	 0.94 Mbps	 0.61 Mbps	 37.05	  NULL
电信浙江	 0.94 Mbps	 0.48 Mbps	 42.00	  NULL
移动Chengdu	 0.94 Mbps	 0.96 Mbps	 59.34	  0.0%
移动Lanzhou	 0.95 Mbps	 0.99 Mbps	 98.99	  NULL
------------------------------------------------------------------------
 总共花费      : 9 分 56 秒
 时间          : aca dit 29 11:02:46 saaku UTC 2023
------------------------------------------------------------------------
```
