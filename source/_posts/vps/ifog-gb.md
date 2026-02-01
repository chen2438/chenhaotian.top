---
description: 发布于 2026-02-01
categories:
- vps
date: 2026-02-01
slug: ifog-gb
title: iFog GmbH 伦敦 VPS 测评
updated: 
tags: 
- vps
- ifog
copyright: true
---

# iFog GmbH 伦敦 VPS 测评

> 提供 BGP Session 选项，Invoice 可用于某些验证。

官网 AFF：https://my.ifog.ch/order/forms/a/MjY5NA==

## 规格

**VPS London 0.5 - G2**

```
VPS London 0.5 - G2

CPU: AMD Ryzen - 1 Shared-Core
RAM: 512MB RAM
Storage: 10 GB NVME SSD
IPs: 1 IPv4/IPv6
Options: BGP Session
1 Snapshot
IPs: 1 IPv4 / 1 IPv6 - routed IPv6 /48 upon request
Traffic: 1Gbit/s (faire-use / 1TB)

Generation 2 - Self-Management via Convoy Panel
```

1 Month @ 3,50 CHF

## 测试

### 延迟表现

#### **IPv4**

![image-20260201182025538](https://media.opennet.top/i/2026/02/02/3n52cj-0.png)

![image-20260201183045993](https://media.opennet.top/i/2026/02/02/3t7tu7-0.png)

#### IPv6

![image-20260201182137700](https://media.opennet.top/i/2026/02/02/3nt1ch-0.png)

![image-20260201183105333](https://media.opennet.top/i/2026/02/02/3tklr6-0.png)

### 融合怪

```
测评频道: https://t.me/+UHVoo2U4VyA5NTQ1                    
VPS融合怪版本：2025.11.29
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址 [推荐]：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目----------------------
 CPU 型号          : Common KVM processor
 CPU 核心数        : 1
 CPU 频率          : 3693.064 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 16.00 MB
 AES-NI指令集      : ❌ Disabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 175.59 MiB / 458.42 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.42 GiB / 8.65 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 0 days, 1 hour 42 min
 负载              : 1.93, 0.50, 0.17
 系统              : Ubuntu 24.04.3 LTS (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.8.0-31-generic
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS34927 iFog GmbH
 IPV4 位置         : London / England / GB
 IPV6 ASN          : AS34927 iFog GmbH
 IPV6 位置         : City of London / England / United Kingdom
 IPV6 子网掩码     : 64
------------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		6401 Scores
 2 线程测试(多核)得分: 		6420 Scores
--------------------内存测试--感谢lemonbench开源----------------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		75446.70 MB/s
 单线程写测试:		40842.71 MB/s
--------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		82.2 MB/s (20.08 IOPS, 1.27s)		109 MB/s (26526 IOPS, 0.97s)
 1GB-1M Block		4.4 GB/s (4198 IOPS, 0.24s)		2.3 GB/s (2230 IOPS, 0.45s)
----------------------磁盘fio读写测试--感谢yabs开源-----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 78.47 MB/s   (19.6k) | 613.74 MB/s   (9.5k)
Write      | 78.68 MB/s   (19.6k) | 616.97 MB/s   (9.6k)
Total      | 157.15 MB/s  (39.2k) | 1.23 GB/s    (19.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.54 GB/s     (3.0k) | 1.56 GB/s     (1.5k)
Write      | 1.62 GB/s     (3.1k) | 1.66 GB/s     (1.6k)
Total      | 3.17 GB/s     (6.1k) | 3.22 GB/s     (3.1k)
---------------流媒体解锁--感谢oneclickvirt/UnlockTests测试----------------
测试时间:  2026-02-01 19:13:32
IPV4:
============[ 跨国平台 ]============
Apple                     YES (Region: GBR) [Native]
BingSearch                YES (Region: GB)
Claude                    YES [Native]
Dazn                      Banned
Disney+                   NO (forbidden-location)
Gemini                    NO
GoogleSearch              Unknown
Google Play Store         YES (Region: GB) [Native]
IQiYi                     YES (Region: GB) [Native]
Instagram Licensed Audio  YES [Native]
KOCOWA                    YES [Native]
MetaAI                    YES (Region: GB) [Native]
Netflix                   NO
Netflix CDN               NO (Main Service Unavailable) (Region: GB)
OneTrust                  YES (Region: GB ENGLAND) [Via DNS]
ChatGPT                   YES (Region: GB) [Native]
Paramount+                YES [Native]
Amazon Prime Video        YES (Region: GB) [Native]
Reddit                    NO
SonyLiv                   YES (Region: GB) [Native]
Sora                      YES (Region: GB)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: GB)
TVBAnywhere+              YES (Region: GB) [Native]
TikTok                    YES (Region: GB) [Native]
Viu.com                   YES [Native]
Wikipedia Editability     YES
YouTube Region            YES (Region: GB) [Native]
YouTube CDN               FRA
IPV6:
============[ 跨国平台 ]============
Apple                     YES (Region: GBR) [Native]
BingSearch                YES (Region: GB)
Claude                    YES [Native]
Dazn                      N/A (No IPv6 Support)
Disney+                   NO (forbidden-location)
Gemini                    NO
GoogleSearch              Unknown
Google Play Store         YES (Region: GB) [Native]
IQiYi                     N/A (No IPv6 Support)
Instagram Licensed Audio  YES [Native]
KOCOWA                    N/A (No IPv6 Support)
MetaAI                    YES (Region: GB) [Native]
Netflix                   NO
Netflix CDN               NO (Main Service Unavailable) (Region: GB)
OneTrust                  YES (Region: GB ENGLAND) [Via DNS]
ChatGPT                   Unknown
Paramount+                YES [Native]
Amazon Prime Video        N/A (No IPv6 Support)
Reddit                    Failed (Network Connection Failed)
SonyLiv                   YES (Region: GB) [Native]
Sora                      YES (Region: GB)
Spotify Registration      NO
Steam Store               Failed (Network Connection Failed)
TVBAnywhere+              N/A (No IPv6 Support)
TikTok                    N/A (No IPv6 Support)
Viu.com                   N/A (No IPv6 Support)
Wikipedia Editability     YES
YouTube Region            YES (Region: GB) [Native]
YouTube CDN               FRA
---------------------TikTok解锁--感谢lmc999的源脚本---------------------
 Tiktok Region:		Failed
-------------IP质量检测--基于oneclickvirt/securityCheck使用--------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | dkly数据库        [D] | ipqualityscore数据库 [E]
ipintel数据库 [F] | ipfighter数据库   [G] | fraudlogix数据库   [H] | cloudflare数据库  [I] |
IPV4:
安全得分:
信任得分(越高越好): 85 [8] 
VPN得分(越低越好): 4 [8] 
代理得分(越低越好): 0 [8] 
社区投票-无害: 0 [2]
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 40 [8] 
欺诈得分(越低越好): 65 [E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0037 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
流量占比: 真人(越高越好)16% [I] 机器人(越低越好)83% [I]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2] 
安全信息:
使用类型: unknown [C] hosting [0 3 7 8 A] business [9]
公司类型: hosting [0 7 A] 
浏览器类型: 主流91% 其他8% [I] 
设备类型: 桌面97% 移动2% 其他0% [I] 
操作系统类型: 主流90% 其他9% [I] 
是否云提供商: Yes [7] 
是否数据中心: No [5 C G] Yes [0 8 A]
是否移动设备: No [5 A C G] Yes [E]
是否代理: Yes [E G] No [0 4 5 7 8 9 A C]
是否VPN: Yes [E] No [0 7 A C G]
是否TorExit: No [7] 
是否Tor出口: No [7] 
是否网络爬虫: No [9 A E] 
是否匿名: No [7 8] 
是否攻击者: No [7 8] 
是否滥用者: No [7 8 A C E] 
是否威胁: No [7 8 C] 
是否中继: No [0 7 8 C] 
是否Bogon: No [7 8 A C] 
是否机器人: No [E] 
DNS-黑名单: 314(Total_Check) 0(Clean) 0(Blacklisted) 0(Other) 
IPV6:
安全得分:
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0037 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
流量占比: 真人(越高越好)16% [I] 机器人(越低越好)83% [I]
安全信息:
使用类型: hosting [3 A] 
公司类型: hosting [A] 
浏览器类型: 主流91% 其他8% [I] 
设备类型: 桌面97% 移动2% 其他0% [I] 
操作系统类型: 主流90% 其他9% [I] 
是否数据中心: Yes [A] No [G]
是否移动设备: No [A G] 
是否代理: No [A] Yes [G]
是否VPN: No [A G]
是否Tor: No [3 A] 
是否网络爬虫: No [A] 
是否滥用者: No [A] 
是否Bogon: No [A] 
DNS-黑名单: 314(Total_Check) 0(Clean) 0(Blacklisted) 314(Other) 
Google搜索可行性：NO
------------邮件端口检测--基于oneclickvirt/portchecker开源------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✔     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------上游及三网回程--基于oneclickvirt/backtrace开源--------------
国家: GB 城市: London 服务商: AS34927 iFog GmbH
      AS1299           AS25369      
     Arelion      Hydra Communicatio
   Tier1 Global         Direct      
北京电信v4 219.141.140.10           电信163    [普通线路] 
北京联通v4 202.106.195.68           联通4837   [普通线路] 
北京移动v4 221.179.155.161          移动CMI    [普通线路] 
上海电信v4 202.96.209.133           电信163    [普通线路] 
上海联通v4 210.22.97.1              联通4837   [普通线路] 
上海移动v4 211.136.112.200          移动CMIN2  [精品线路] 
广州电信v4 58.60.188.222            电信163    [普通线路] 
广州联通v4 210.21.196.6             联通4837   [普通线路] 
广州移动v4 120.196.165.24           移动CMI    [普通线路] 
成都电信v4 61.139.2.69              电信163    [普通线路] 
成都联通v4 119.6.6.6                联通4837   [普通线路] 
成都移动v4 211.137.96.205           移动CMI    [普通线路] 
北京电信v6 2400:89c0:1053:3::69     电信163    [普通线路] 
北京联通v6 2400:89c0:1013:3::54     联通4837   [普通线路] 
北京移动v6 2409:8c00:8421:1303::55  移动CMIN2  [精品线路] 移动CMI    [普通线路] 
上海电信v6 240e:e1:aa00:4000::24    电信163    [普通线路] 
上海联通v6 2408:80f1:21:5003::a     联通4837   [普通线路] 
上海移动v6 2409:8c1e:75b0:3003::26  移动CMI    [普通线路] 
广州电信v6 240e:97c:2f:3000::44     电信163    [普通线路] 
广州联通v6 2408:8756:f50:1001::c    联通4837   [普通线路] 
广州移动v6 2409:8c54:871:1001::12   移动CMI    [普通线路] 移动CMIN2  [精品线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，检测可能已越过汇聚层，除第一个线路外，后续信息可能无效
----------------------回程路由--基于nexttrace开源-----------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广州电信 58.60.188.222
0.18 ms 	AS34927 英国 英格兰 伦敦 ifog.ch
0.74 ms 	AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
0.85 ms 	AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
7.07 ms 	AS1299 [ARELION-NET] 荷兰 北荷兰省 阿姆斯特丹 arelion.com
5.87 ms 	AS1299 [ARELION-NET] 荷兰 北荷兰省 阿姆斯特丹 arelion.com
7.27 ms 	AS1299 [ARELION-NET] 荷兰 弗莱福兰省 莱利斯塔德 arelion.com
240.98 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 chinatelecom.com.cn 电信
215.33 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 chinatelecom.com.cn 电信
249.48 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 chinatelecom.com.cn 电信
189.87 ms 	AS134774 [CHINANET-GD] 中国 广东 深圳 chinatelecom.cn 电信
广州联通 210.21.196.6
28.00 ms 	AS34927 英国 英格兰 伦敦 ifog.ch
1.01 ms 	AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
1.19 ms 	AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
7.73 ms 	AS1299 [ARELION-NET] 法国 法兰西岛大区 巴黎 arelion.com
15.72 ms 	AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
17.82 ms 	AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
193.58 ms 	AS4837 [CU169-BACKBONE] 中国 北京 chinaunicom.cn
163.89 ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
197.53 ms 	AS17816 [APNIC-AP] 中国 广东 茂名市 中国联通 联通
197.39 ms 	AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
166.38 ms 	AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
10.36 ms 	AS34927 英国 英格兰 伦敦 ifog.ch
0.71 ms 	AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
0.92 ms 	AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
0.89 ms 	AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
2.54 ms 	AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
3.13 ms 	AS58453 [CMI-INT] 英国 英格兰 伦敦 cmi.chinamobile.com
178.53 ms 	AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
277.16 ms 	AS9808 [CMNET] 中国 广东 广州 X-I chinamobileltd.com 移动
227.15 ms 	AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
192.06 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
194.11 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
195.57 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
193.32 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
---------------------自动更新测速节点列表--本脚本原创----------------------
位置		 上传速度	 下载速度	 延迟
Speedtest.net	 509.86Mbps	 475.87Mbps	 4.65ms	
法兰克福	 146.57Mbps	 233.55Mbps	 20.48ms	
洛杉矶		 2.62Mbps	 16.90Mbps	 152.24ms	
联通上海5G	 2.20Mbps	 22.81Mbps	 237.70ms	
电信Suzhou5G	 3.59Mbps	 23.14Mbps	 206.29ms	
电信浙江	 0.71Mbps	 9.05Mbps	 210.63ms	
移动Suzhou	 10.50Mbps	 0.07Mbps	 806.32ms	
------------------------------------------------------------------------
 总共花费      : 6 分 38 秒
 时间          : Sun Feb  1 19:18:12 CET 2026
------------------------------------------------------------------------
```

### IP质量

![image-20260201182958626](https://media.opennet.top/i/2026/02/02/3sxs3j-0.png)
