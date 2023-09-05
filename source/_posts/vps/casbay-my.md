---
description: 发布于 2023-09-05
categories:
- vps
date: 2023-09-05
slug: casbay-my
title: Casbay 马来西亚 VPS 测评
updated: 
tags: 
- vps
- casbay
copyright: true
---

# Casbay 马来西亚 VPS 测评

Casbay(AS132841)自 2010 年成立，有自己的网络和服数据中心。主打马来西亚和新加坡数据中心的业务，包括 VPS 和独服等。

其中马来西亚 VPS 100Mbps 不限流量，支持 Linux / Windows

付款支持：加密货币，PayPal，信用卡，微信支付，支付宝（微信支付，支付宝在Casbay马来西亚网站使用 https://www.casbay.com.my/ ）

## 规格

链接不含 AFF

**马来西亚 Linux VPS**

优惠码：`CASBAY`

KVM，纯SSD阵列，100Mbps 带宽，不限制流量，当前只支持 IPv4

| 内存 | CPU  | SSD   | 价格    | 链接                                              |
| ---- | ---- | ----- | ------- | ------------------------------------------------- |
| 1GB  | 1核  | 20GB  | $11.59  | [链接](https://billing.casbay.com/link.php?id=29) |
| 2GB  | 2核  | 40GB  | $24.59  | [链接](https://billing.casbay.com/link.php?id=29) |
| 4GB  | 4核  | 80GB  | $50.59  | [链接](https://billing.casbay.com/link.php?id=29) |
| 8GB  | 8核  | 160GB | $102.59 | [链接](https://billing.casbay.com/link.php?id=29) |

**马来西亚 Window VPS**

优惠码：`CASBAY`

KVM，纯SSD阵列，100Mbps 带宽，不限制流量，当前只支持 IPv4

| 内存 | CPU  | SSD   | 价格   | 链接                                              |
| ---- | ---- | ----- | ------ | ------------------------------------------------- |
| 2GB  | 1核  | 40GB  | $9.59  | [链接](https://billing.casbay.com/link.php?id=30) |
| 2GB  | 2核  | 60GB  | $20.59 | [链接](https://billing.casbay.com/link.php?id=30) |
| 4GB  | 4核  | 100GB | $42.59 | [链接](https://billing.casbay.com/link.php?id=30) |
| 8GB  | 8核  | 180GB | $86.59 | [链接](https://billing.casbay.com/link.php?id=30) |

官方网站: https://www.casbay.com
TOS : https://www.casbay.com/terms
AUP: https://www.casbay.com/acceptable-use-policy-aup

网络测试IP：103.117.141.1

## 测试

测试使用的是官方提供的测试机

![image-20230905223234638](https://media.opennet.top/i/2023/09/05/10x411b-0.png)

```
测评频道: https://t.me/vps_reviews                    
版本：2023.08.26
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)
 CPU 核心数        : 8
 CPU 频率          : 2599.990 MHz
 CPU 缓存          : L1: 512.00 KB / L2: 32.00 MB / L3: 128.00 MB
 硬盘空间          : 1.53 GiB / 43.20 GiB
 启动盘路径        : /dev/vda1
 内存              : 134.02 MiB / 11.68 GiB
 Swap              : 0 KiB / 6.00 GiB
 系统在线时间      : 0 days, 0 hour 1 min
 负载              : 0.22, 0.06, 0.02
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-25-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS55720 Gigabit Hosting Sdn Bhd
 IPV4 位置         : Kuala Lumpur / Kuala Lumpur / MY
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		608 Scores
 8 线程测试(多核)得分: 		4668 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		12980.94 MB/s
 单线程写测试:		9798.33 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		17.5 MB/s (4261 IOPS, 6.01s)		20.3 MB/s (4967 IOPS, 5.15s)
 1GB-1M Block		1.1 GB/s (1059 IOPS, 0.94s)		1.2 GB/s (1115 IOPS, 0.90s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 9.66 MB/s     (2.4k) | 159.50 MB/s   (2.4k)
Write      | 9.69 MB/s     (2.4k) | 160.34 MB/s   (2.5k)
Total      | 19.36 MB/s    (4.8k) | 319.85 MB/s   (4.9k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 184.89 MB/s    (361) | 225.85 MB/s    (220)
Write      | 194.71 MB/s    (380) | 240.90 MB/s    (235)
Total      | 379.60 MB/s    (741) | 466.75 MB/s    (455)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 马来西亚吉隆坡(KUL09S19)
Youtube识别地域: 马来西亚(MY)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：马来西亚
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口所在地区即将开通DisneyPlus，尽请期待哦！
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: MY)
 HotStar:				Yes (Region: MY)
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: MY)
 Amazon Prime Video:			Yes (Region: MY)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			MY
 Viu.com:				Yes (Region: MY)
 YouTube CDN:				Kuala Lumpur 
 Netflix Preferred CDN:			Singapore  
 Spotify Registration:			Yes (Region: MY)
 Steam Currency:			MYR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【MY】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  business⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No②   Yes⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ②   Yes⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  Yes① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  Yes⑦ ⑧   No⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱：No
  yandex邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: MY 城市: Kuala Lumpur 服务商: AS55720 Gigabit Hosting Sdn Bhd
北京电信 219.141.136.12  测试超时
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
2023/09/05 10:25:49 测试完成!
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.71 ms 	AS55720 [YTE-MY] 马来西亚 吉隆坡联邦直辖区 吉隆坡 thegigabit.com
9.84 ms 	AS4637 新加坡 telstraglobal.com
111.90 ms 	AS4637 [TELSTRAGLOBAL-AP] 新加坡 telstraglobal.com
247.69 ms 	AS4637 [TELSTRAGLOBAL-AP] 中国 香港 telstraglobal.com
43.29 ms 	AS4637 [TELSTRAGLOBAL-AP] 中国 香港 telstraglobal.com
188.30 ms 	AS4134 [CHINANET-FJ] 中国 香港 chinatelecom.com.cn 电信
185.99 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
195.44 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
305.90 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
224.87 ms 	AS4134 [APNIC-AP] 中国 广东省 深圳市 chinatelecom.com.cn 电信
294.50 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.91 ms 	AS55720 [YTE-MY] 马来西亚 吉隆坡联邦直辖区 吉隆坡 thegigabit.com
9.20 ms 	AS4637 新加坡 telstraglobal.com
211.70 ms 	AS4637 [TELSTRAGLOBAL-AP] 新加坡 telstraglobal.com
251.53 ms 	AS4637 [TELSTRAGLOBAL-AP] 中国 香港 telstraglobal.com
49.94 ms 	AS4637 [TELSTRAGLOBAL-AP] 中国 香港 telstraglobal.com
101.83 ms 	AS4837 [CU169-BACKBONE] 中国 香港 chinaunicom.cn 联通
119.58 ms 	AS4837 [CU169-BACKBONE] 中国 北京市 chinaunicom.cn 联通
112.59 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
103.50 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
110.98 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
106.91 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
1.49 ms 	AS55720 [YTE-MY] 马来西亚 吉隆坡联邦直辖区 吉隆坡 thegigabit.com
2.45 ms 	AS2914 [NTTGIN-JP] 马来西亚 吉隆坡联邦直辖区 吉隆坡 ntt.net
2.15 ms 	AS2914 [NTT-BACKBONE] 马来西亚 吉隆坡联邦直辖区 吉隆坡 ntt.net
110.02 ms 	AS2914 [NTT-BACKBONE] 新加坡 ntt.net
39.57 ms 	AS2914 [NTT-BACKBONE] 新加坡 ntt.net
12.63 ms 	AS2914 [NTT-GIN] 新加坡 ntt.net
42.95 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
49.66 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 回国到达层 cmi.chinamobile.com 移动
50.33 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
50.40 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
50.65 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
54.67 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
52.23 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 83.88 Mbps	 40.63 Mbps	 3.58	  0.0%
新加坡		 83.72 Mbps	 20.17 Mbps	 21.56	  0.0%
日本东京	 80.00 Mbps	 13.91 Mbps	 171.23	  NULL
联通湖南5G	 77.76 Mbps	 3.72 Mbps	 101.11	  NULL
联通WuXi	 91.97 Mbps	 7.96 Mbps	 100.15	  0.0%
移动Chengdu	 80.76 Mbps	 35.26 Mbps	 100.53	  0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 8 秒
 时间          : Tue Sep  5 10:29:36 EDT 2023
------------------------------------------------------------------------
```
