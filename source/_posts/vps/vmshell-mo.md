---
description: 发布于 2025-03-28
categories:
- vps
date: 2025-03-28
slug: vmshell-mo
title: Vmshell 香港CMI 澳门IP VPS 测评
updated: 
tags: 
- vps
- vmshell
copyright: true
---

# Vmshell 香港CMI 澳门IP VPS 测评

> 四周年活动，稀有IP
>
> 不支持 ChatGPT

Vmshell 四周年-澳门IP五折活动
产品：CMI-MO.IP-VPS
数据中心：香港CMI
网络： CMI-500Mbps
配置：1C-512MB-8GB-1TB
IP属性：澳门IP在香港机房
适合：奈菲和特殊IP需求
年付优惠码：AOMENFOUR
年付价格： 42.00 USD/年
备注：支持新购3日内退款,续费同价，发工单：再送一台价值15.15/年的美国香港IP媒体服务器
购买链接：https://vmshell.com/aff.php?aff=2927&pid=8

## 规格

数据中心：香港CMI
网络： CMI-500Mbps
配置：1C-512MB-8GB-1TB
IP属性：澳门IP在香港机房

## 测试

### 延迟表现

![image-20250328113212942](https://media.opennet.top/i/2025/03/28/iq2v1g-0.png)

![image-20250328113316063](https://media.opennet.top/i/2025/03/28/iqon9h-0.png)

![image-20250328113355993](https://media.opennet.top/i/2025/03/28/iqwyc9-0.png)

### 融合怪

```
                   测评频道: https://t.me/vps_reviews                    
VPS融合怪版本：2025.02.12
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)
 CPU 核心数        : 1
 CPU 频率          : 2199.998 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 154.00 MiB / 470.03 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.52 GiB / 7.77 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 12 hour 53 min
 负载              : 0.38, 0.12, 0.03
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-32-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS40065 CNSERVERS LLC
 IPV4 位置         : Macau / Macao / MO
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		669 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		14077.59 MB/s
 单线程写测试:		12426.67 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		28.5 MB/s (6970 IOPS, 3.67s)		32.3 MB/s (7891 IOPS, 3.24s)
 1GB-1M Block		716 MB/s (682 IOPS, 1.47s)		701 MB/s (668 IOPS, 1.50s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 57.66 MB/s   (14.4k) | 355.17 MB/s   (5.5k)
Write      | 57.75 MB/s   (14.4k) | 357.04 MB/s   (5.5k)
Total      | 115.41 MB/s  (28.8k) | 712.22 MB/s  (11.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 556.33 MB/s   (1.0k) | 596.58 MB/s    (582)
Write      | 585.89 MB/s   (1.1k) | 636.31 MB/s    (621)
Total      | 1.14 GB/s     (2.2k) | 1.23 GB/s     (1.2k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国澳门
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
Youtube在您的出口IP所在的国家不提供服务
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: MO)
 Disney+:				No
 Netflix:				Yes (Region: MO)
 YouTube Premium:			No
 Amazon Prime Video:			Yes (Region: MO)
 TVBAnywhere+:				Yes
 Spotify Registration:			Yes (Region: MO)
 OneTrust Region:			MO [Unknown]
 iQyi Oversea Region:			MO
 Bing Region:				WW (Risky)
 Apple Region:				MO
 YouTube CDN:				Failed (Network Connection)
 Netflix Preferred CDN:			Hong Kong
 ChatGPT:				No (Only Available with Mobile APP)
 Google Gemini:				No
 Claude:				No
 Wikipedia Editability:			No
 Google Play Store:			China 
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			USD
 ---Forum---
 Reddit:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【MO】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0008 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2] 无记录数: 94 [2]  
安全信息:
使用类型: business [8] DataCenter/WebHosting/Transit [3] hosting - moderate probability [C] hosting [0 7 9 A]
公司类型: hosting [0 7] business [A]
是否云提供商: Yes [7 D] 
是否数据中心: No [8 A C] Yes [0 1 5 6]
是否移动设备: No [5 A C] Yes [E]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A C D]
是否VPN: Yes [E] No [0 1 6 7 A C D]
是否Tor: No [0 1 3 6 7 8 A C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E]
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 313(Total_Check) 0(Clean) 5(Blacklisted) 17(Other) 
Google搜索可行性：NO
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
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
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  移动CMI    [普通线路] 
北京联通 202.106.195.68  移动CMI    [普通线路] 联通4837   [普通线路] 
北京移动 221.179.155.161 检测不到回程路由节点的IP地址
上海电信 202.96.209.133  移动CMI    [普通线路] 
上海联通 210.22.97.1     移动CMI    [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   移动CMI    [普通线路] 
广州联通 210.21.196.6    移动CMI    [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     移动CMI    [普通线路] 
成都联通 119.6.6.6       移动CMI    [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广州电信 58.60.188.222
0.99 ms 	AS40065 [GDI-AP] 中国 香港 cnservers.com
0.54 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
0.82 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
0.76 ms 	* RFC1918
1.45 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
1.39 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
127.23 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com
27.47 ms 	AS9808 [CMNET] 中国 上海 X-I chinamobileltd.com 移动
26.67 ms 	AS9808 [CMNET] 中国 上海 I-C chinamobileltd.com 移动
29.03 ms 	AS9808 [CMNET] 中国 上海 chinamobileltd.com 移动
83.47 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
36.20 ms 	AS134774 [CHINANET-GD] 中国 广东 深圳 chinatelecom.cn 电信
35.88 ms 	AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.80 ms 	AS40065 [GDI-AP] 中国 香港 cnservers.com
0.56 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
0.77 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
0.54 ms 	* RFC1918
1.28 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
1.53 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
26.74 ms 	AS58453 [CMI-INT] 中国 上海 cmi.chinamobile.com 移动
27.57 ms 	AS9808 [CMNET] 中国 上海 X-I chinamobileltd.com 移动
26.61 ms 	AS9808 [CMNET] 中国 上海 I-C chinamobileltd.com 移动
80.07 ms 	AS9808 [CMNET] 中国 上海 chinamobileltd.com 移动
35.67 ms 	AS17816 [UNICOM-GD] 中国 广东 广州 chinaunicom.cn
38.31 ms 	AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
34.75 ms 	AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
1.32 ms 	AS40065 [GDI-AP] 中国 香港 cnservers.com
0.65 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
0.66 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
0.70 ms 	* RFC1918
1.07 ms 	AS40065 [DATA-CENTRE] 中国 香港 cnservers.com
1.57 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
7.60 ms 	AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
5.13 ms 	AS9808 [CMNET] 中国 广东 广州 X-I chinamobileltd.com 移动
7.69 ms 	AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
7.75 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
9.68 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
10.18 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 899.18 Mbps	 799.70 Mbps	 1.36	  0.0%
中国香港	 214.61 Mbps	 579.54 Mbps	 2.81	  NULL
新加坡		 176.78 Mbps	 484.37 Mbps	 44.79	  0.0%
联通上海5G	 78.30 Mbps	 620.53 Mbps	 30.48	  0.0%
联通Beijing	 309.13 Mbps	 452.84 Mbps	 45.97	  0.0%
电信浙江	 411.17 Mbps	 511.57 Mbps	 43.32	  NULL
电信浙江	 752.88 Mbps	 470.64 Mbps	 39.74	  NULL
移动杭州5G	 80.03 Mbps	 549.70 Mbps	 29.96	  0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 45 秒
 时间          : Fri Mar 28 11:34:28 CST 2025
------------------------------------------------------------------------
```

### IP质量

![image-20250328113732766](https://media.opennet.top/i/2025/03/28/it5ga9-0.png)
