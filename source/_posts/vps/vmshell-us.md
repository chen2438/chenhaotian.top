---
description: 发布于 2025-03-28
categories:
- vps
date: 2025-03-28
slug: vmshell-us
title: Vmshell 美国 香港IP VPS 测评
updated: 
tags: 
- vps
- vmshell
copyright: true
---

# Vmshell 美国 香港IP VPS 测评

> 四周年活动 买澳门IP服务器 赠送的VPS
>
> IP部分识别为 US，部分识别为 HK
>
> 大陆直连意外的还不错，会有丢包

Vmshell 四周年-澳门IP五折活动
产品：CMI-MO.IP-VPS
数据中心：香港CMI
网络： CMI-500Mbps
配置：1C-512MB-8GB-1TB
IP属性：澳门IP在香港机房
适合：奈菲和特殊IP需求
年付优惠码：AOMENFOUR
年付价格： 42.00 USD/年
备注：支持新购3日内退款,续费同价，**发工单：再送一台价值15.15/年的美国香港IP媒体服务器**
购买链接：https://vmshell.com/aff.php?aff=2927&pid=8

## 规格

1C 512M 6G 4T

## 测试

### 延迟表现

![image-20250328190744363](https://media.opennet.top/i/2025/03/28/vjo95e-0.png)

![image-20250328183329228](https://media.opennet.top/i/2025/03/28/ubl38l-0.png)

![image-20250328183614070](https://media.opennet.top/i/2025/03/28/udcdzs-0.png)

### 融合怪

```
                   测评频道: https://t.me/vps_reviews                    
VPS融合怪版本：2025.02.12
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Core Processor (Haswell, no TSX, IBRS)
 CPU 核心数        : 1
 CPU 频率          : 1795.841 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 76.32 MiB / 473.14 MiB
 Swap              : 268 KiB / 32.00 MiB
 硬盘空间          : 1.05 GiB / 3.90 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 0 hour 15 min
 负载              : 0.95, 0.49, 0.20
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-8-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS396073 Majestic Hosting Solutions, LLC
 IPV4 位置         : San Jose / California / US
 IPV6 ASN          : AS396073 Majestic Hosting Solutions, LLC
 IPV6 位置         : United States
 IPV6 子网掩码     : 40
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		447 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		10863.11 MB/s
 单线程写测试:		5773.37 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		6.5 MB/s (1592 IOPS, 16.08s)		7.5 MB/s (1842 IOPS, 13.89s)
 1GB-1M Block		320 MB/s (305 IOPS, 3.28s)		247 MB/s (235 IOPS, 4.25s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.85 MB/s    (6.7k) | 124.70 MB/s   (1.9k)
Write      | 26.87 MB/s    (6.7k) | 125.35 MB/s   (1.9k)
Total      | 53.72 MB/s   (13.4k) | 250.06 MB/s   (3.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 252.86 MB/s    (493) | 262.72 MB/s    (256)
Write      | 266.29 MB/s    (520) | 280.22 MB/s    (273)
Total      | 519.16 MB/s   (1.0k) | 542.95 MB/s    (529)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: NUQ(NUQ04S38)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: NUQ(NUQ04S38)
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
当前IPv4出口所在地区即将开通DisneyPlus
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			No
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				No
 Spotify Registration:			Yes (Region: HK)
 OneTrust Region:			HK [Unknown]
 iQyi Oversea Region:			HK
 Bing Region:				HK (Risky)
 Apple Region:				US
 YouTube CDN:				Mountain View
 Netflix Preferred CDN:			[Majestic Hosting Solutions, LLC] in [Seattle, WA]
 ChatGPT:				Yes
 Google Gemini:				No
 Claude:				No
 Wikipedia Editability:			No
 Google Play Store:			China 
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			HKD
 ---Forum---
 Reddit:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					IPv6 Is Not Currently Supported
 Disney+:				IPv6 Is Not Currently Supported
 Netflix:				Yes (Region: US)
 YouTube Premium:			No
 Amazon Prime Video:			IPv6 Is Not Currently Supported
 TVBAnywhere+:				IPv6 Is Not Currently Supported
 Spotify Registration:			Yes (Region: US)
 OneTrust Region:			US [Unknown]
 iQyi Oversea Region:			IPv6 Is Not Currently Supported
 Bing Region:				US (Risky)
 Apple Region:				US
 YouTube CDN:				Mountain View
 Netflix Preferred CDN:			Los Angeles, CA
 ChatGPT:				Failed (Network Connection)
 Google Gemini:				No
 Claude:				No
 Wikipedia Editability:			No
 Google Play Store:			China 
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:				IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 11 [8]
VPN得分(越低越好): 94 [8] 
代理得分(越低越好): 72 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0032 (Low) [A] 
公司滥用得分(越低越好): 0.0059 (Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [0 7 9 A] business [8] hosting - moderate probability [C]
公司类型: business [0 A] hosting [7]
是否云提供商: Yes [7 D] 
是否数据中心: No [8 A C] Yes [0 1 5 6]
是否移动设备: No [5 A C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A C D E] 
是否VPN: No [0 1 6 7 A C D E] 
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
DNS-黑名单: 313(Total_Check) 0(Clean) 7(Blacklisted) 13(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0032 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
安全信息:
使用类型: hosting [A] DataCenter/WebHosting/Transit [3]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A D] 
是否VPN: No [1 A D] 
是否Tor: No [1 3 A D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 313(Total_Check) 0(Clean) 0(Blacklisted) 313(Other) 
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
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  检测不到回程路由节点的IP地址
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广州电信 58.60.188.222
5.92 ms 	AS396073 [PKI-HK] 中国 香港 spinservers.com
7.22 ms 	* RFC3927
1.65 ms 	* RFC3927
1.59 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 圣何塞 cogentco.com
1.68 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 圣何塞 cogentco.com
3.56 ms 	AS174 美国 加利福尼亚 圣克拉拉 cogentco.com
146.75 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 X-I www.chinatelecom.com.cn 电信
265.93 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn
156.50 ms 	AS134774 [CHINANET-GD] 中国 广东 深圳 chinatelecom.cn 电信
153.83 ms 	AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
1.83 ms 	AS396073 [PKI-HK] 中国 香港 spinservers.com
0.50 ms 	* RFC3927
0.59 ms 	* RFC3927
2.81 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 圣何塞 cogentco.com
1.74 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 圣何塞 cogentco.com
2.02 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 圣何塞 cogentco.com
13.12 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 洛杉矶 cogentco.com
13.32 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 洛杉矶 cogentco.com
171.69 ms 	AS174 美国 加利福尼亚 洛杉矶 cogentco.com
165.41 ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
192.16 ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 X-I chinaunicom.cn 联通
171.18 ms 	AS17816 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
172.62 ms 	AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
166.64 ms 	AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.79 ms 	AS396073 [PKI-HK] 中国 香港 spinservers.com
0.68 ms 	* RFC3927
0.41 ms 	* RFC3927
1.46 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 圣何塞 cogentco.com
1.78 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 圣何塞 cogentco.com
3.57 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 洛杉矶 cogentco.com
19.24 ms 	AS174 [COGENT-BONE] 美国 犹他 盐湖城 cogentco.com
28.79 ms 	AS174 [COGENT-BONE] 美国 科罗拉多 丹佛 cogentco.com
38.85 ms 	AS174 [COGENT-BONE] 美国 内布拉斯加 奥马哈 cogentco.com
48.62 ms 	AS174 [COGENT-BONE] 美国 伊利诺伊州 芝加哥 cogentco.com
53.25 ms 	AS174 [COGENT-BONE] 美国 俄亥俄 克里夫兰 cogentco.com
61.90 ms 	AS174 [COGENT-BONE] 美国 cogentco.com
65.31 ms 	AS174 [COGENT-BONE] 美国 马萨诸塞 波士顿 cogentco.com
132.73 ms 	AS174 [COGENT-BONE] 英国 英格兰 斯劳 cogentco.com
128.20 ms 	AS174 [COGENT-BONE] 英国 英格兰 斯劳 cogentco.com
128.61 ms 	AS174 [COGENT-149] 英国 伯克郡 斯劳 Cogent-CMI-Peer cogentco.com
134.25 ms 	AS58453 [CMI-INT] 英国 英格兰 斯劳 cmi.chinamobile.com 移动
348.17 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com
302.25 ms 	AS9808 [CMNET] 中国 广东 广州 X-I chinamobileltd.com 移动
403.48 ms 	AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
308.34 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
356.18 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
309.23 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 633.51 Mbps	 362.63 Mbps	 154.48	  NULL
洛杉矶		 28.95 Mbps	 55.14 Mbps	 19.52	  1.2%
日本东京	 506.07 Mbps	 481.51 Mbps	 114.83	  94.2%
联通上海5G	 694.38 Mbps	 387.54 Mbps	 153.89	  0.0%
联通Beijing	 468.29 Mbps	 297.71 Mbps	 170.66	  1.1%
电信浙江	 143.00 Mbps	 541.07 Mbps	 149.22	  NULL
电信Suzhou5G	 691.17 Mbps	 411.93 Mbps	 131.01	  NULL
移动Chengdu	 2.87 Mbps	 180.89 Mbps	 259.48	  NULL
------------------------------------------------------------------------
 总共花费      : 8 分 27 秒
 时间          : Fri Mar 28 06:28:24 EDT 2025
------------------------------------------------------------------------
```

### IP质量

![image-20250328183214447](https://media.opennet.top/i/2025/03/28/uavs3t-0.png)
