---
description: 发布于 2025-05-09
categories:
- vps
date: 2025-05-09
slug: bagevm-us
title: BageVM 美国 VPS 测评
updated: 
tags: 
- vps
- bagevm
copyright: true
---

# BageVM 美国 VPS 测评

> 感谢朋友借测

IP 质量非常好，解锁优美；9950X CPU，单核6000分

**风险提示**：https://www.nodeseek.com/post-334911-1

官网 AFF：https://www.bagevm.com/aff.php?aff=519

## 规格

```
1 vCPU
1GB RAM
20GB SSD
4TB Transfer @1000Mbps (In & Out)
1IPv4 & 1IPv6
Salt Lake City,United States
No refunds
Default Block 22 out Port
Block 25 Port

Monthly $2.59 USD
```

## 测试

### 延迟表现

![image-20250509172018375](https://media.opennet.top/i/2025/05/09/sg782q-0.png)

![image-20250509172049244](https://media.opennet.top/i/2025/05/09/sgcs6x-0.png)

![image-20250509172115422](https://media.opennet.top/i/2025/05/09/sgrdim-0.png)

### 融合怪

```
                   测评频道: https://t.me/vps_reviews                    
VPS融合怪版本：2025.04.12
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址 [推荐]：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 9950X 16-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 4291.912 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 230.39 MiB / 960.70 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.38 GiB / 19.60 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 10 days, 23 hour 39 min
 负载              : 0.36, 0.11, 0.04
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-28-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS63150 BAGE CLOUD LLC
 IPV4 位置         : Salt Lake City / Utah / US
 IPV6 ASN          : AS63150 BAGE
 IPV6 位置         : Salt Lake City" / Utah
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		6438 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		96930.90 MB/s
 单线程写测试:		37908.30 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		113 MB/s (27.69 IOPS, 0.92s)		133 MB/s (32420 IOPS, 0.79s)
 1GB-1M Block		3.2 GB/s (3042 IOPS, 0.33s)		3.4 GB/s (3286 IOPS, 0.30s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 239.49 MB/s  (59.8k) | 1.11 GB/s    (17.3k)
Write      | 240.12 MB/s  (60.0k) | 1.11 GB/s    (17.4k)
Total      | 479.62 MB/s (119.9k) | 2.22 GB/s    (34.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 2.82 GB/s     (5.5k) | 2.89 GB/s     (2.8k)
Write      | 2.97 GB/s     (5.8k) | 3.09 GB/s     (3.0k)
Total      | 5.79 GB/s    (11.3k) | 5.99 GB/s     (5.8k)
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
视频缓存节点地域: 美国  洛杉机(LAX31S13)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX31S13)
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
当前IPv4出口所在地区即将开通DisneyPlus
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes (Region: US)
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 Spotify Registration:			No
 OneTrust Region:			US [Utah]
 iQyi Oversea Region:			US
 Bing Region:				US (Risky)
 Apple Region:				US
 YouTube CDN:				Los Angeles, CA
 Netflix Preferred CDN:			Failed (Network Connection 1)
 ChatGPT:				Yes
 Google Gemini:				Yes (Region: USA)
 Claude:				No
 Wikipedia Editability:			Yes
 Google Play Store:			United States 
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			USD
 ---Forum---
 Reddit:				Yes
 ---Game---
 SD Gundam G Generation Eternal:	Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					IPv6 Is Not Currently Supported
 Disney+:				IPv6 Is Not Currently Supported
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes (Region: US)
 Amazon Prime Video:			IPv6 Is Not Currently Supported
 TVBAnywhere+:				IPv6 Is Not Currently Supported
 Spotify Registration:			No
 OneTrust Region:			US [Utah]
 iQyi Oversea Region:			IPv6 Is Not Currently Supported
 Bing Region:				US (Risky)
 Apple Region:				US
 YouTube CDN:				Los Angeles, CA
 Netflix Preferred CDN:			Failed (Network Connection 1)
 ChatGPT:				Failed (Network Connection)
 Google Gemini:				Yes (Region: USA)
 Claude:				No
 Wikipedia Editability:			Yes
 Google Play Store:			United States 
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:				IPv6 Is Not Currently Supported
 ---Game---
 SD Gundam G Generation Eternal:	Failed (Network Connection)
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
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
欺诈得分(越低越好): 0 [E] 3 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0018 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: business [8] isp [0 7] unknown [C] FixedLineISP [3] hosting [9 A]
公司类型: hosting [A] isp [0] business [7]
是否云提供商: No [7 D] 
是否数据中心: No [0 5 6 8 C] Yes [1 A]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [0 1 4 5 6 7 8 9 A C D E] 
是否VPN: No [0 1 6 A C E] Yes [7 D]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E] 
是否匿名: Yes [7 D] No [1 6 8]
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 313(Total_Check) 0(Clean) 6(Blacklisted) 17(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 3 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0018 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
安全信息:
使用类型: hosting [A] FixedLineISP [3]
公司类型: hosting [A] 
是否云提供商: No [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A D] 
是否VPN: No [1 A] Yes [D]
是否Tor: No [1 3 A D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A] 
是否匿名: No [1] Yes [D]
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
QQ        ✘     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✔     ✘     ✔     ✘    
Yandex    ✘     ✔     ✔     ✘     ✔     ✘    
Gmail     ✘     ✔     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✘     ✔     ✘     ✘     ✔     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✔     ✔     ✘     ✔     ✘    
Sina      ✘     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✘     ✘     ✔     ✘     ✔     ✘    
Namecrane ✘     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✘     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信v4 219.141.140.10           电信163    [普通线路] 
北京联通v4 202.106.195.68           联通4837   [普通线路] 
北京移动v4 221.179.155.161          移动CMI    [普通线路] 
上海电信v4 202.96.209.133  检测不到回程路由节点的IPV4地址
上海联通v4 210.22.97.1              联通4837   [普通线路] 
上海移动v4 211.136.112.200          移动CMI    [普通线路] 
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
广州移动v6 2409:8c54:871:1001::12   移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广州电信 58.60.188.222
0.84 ms 	AS26042 美国 fiberstate.com
16.48 ms 	AS26042 美国 犹他 盐湖城 fiberstate.com
0.99 ms 	AS174 [COGENT-BONE] 美国 犹他 盐湖城 cogentco.com
1.91 ms 	AS174 [COGENT-BONE] 美国 犹他 盐湖城 cogentco.com
18.08 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 洛杉矶 cogentco.com
19.27 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚 圣何塞 cogentco.com
21.62 ms 	AS174 美国 加利福尼亚 圣克拉拉 cogentco.com
172.82 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
174.87 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
275.20 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn
281.49 ms 	AS134774 [CHINANET-GD] 中国 广东 深圳 chinatelecom.cn 电信
176.74 ms 	AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.82 ms 	AS26042 美国 fiberstate.com
0.37 ms 	AS26042 美国 犹他 盐湖城 fiberstate.com
0.85 ms 	AS3257 美国 犹他 盐湖城 gtt.net
26.88 ms 	AS3257 [GTT-BACKBONE] 美国 加利福尼亚 圣何塞 gtt.net
195.38 ms 	AS3257 美国 加利福尼亚 圣何塞 gtt.net
202.66 ms 	AS4837 [CU169-BACKBONE] 中国 上海 X-I chinaunicom.cn 联通
181.86 ms 	AS4837 [CU169-BACKBONE] 中国 上海 chinaunicom.cn 联通
226.03 ms 	AS17816 [UNICOM-GD] 中国 广东 深圳 chinaunicom.cn 联通
210.38 ms 	AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
222.30 ms 	AS17623 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.96 ms 	AS26042 美国 fiberstate.com
0.35 ms 	AS26042 美国 犹他 盐湖城 fiberstate.com
1.47 ms 	AS6939 [HURRICANE-1] 美国 犹他 盐湖城 he.net
15.10 ms 	AS6939 [HURRICANE-11] 美国 加利福尼亚 洛杉矶 he.net
23.08 ms 	AS6939 美国 加利福尼亚 费利蒙 he.net
22.75 ms 	AS58453 [CMI-INT] 美国 加利福尼亚 洛杉矶 cmi.chinamobile.com 移动
176.58 ms 	AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
174.56 ms 	AS9808 [CMNET] 中国 广东 广州 X-I chinamobileltd.com 移动
176.01 ms 	AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
190.16 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
185.26 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
179.58 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟
Speedtest.net	 190.46Mbps	 953.08Mbps	 1.279.001.00ms	
法兰克福	 40.26Mbps	 81.37Mbps	 126.85126.00126.00ms	
新加坡		 8.31Mbps	 64.18Mbps	 262.36303.00203.00ms	
联通上海5G	 23.76Mbps	 53.84Mbps	 193.41215.00193.00ms	
电信浙江	 1.98Mbps	 56.76Mbps	 262.19296.00176.00ms	
电信Suzhou5G	 6.62Mbps	 15.77Mbps	 257.70249.00242.00ms	
移动Chengdu	 0.83Mbps	 28.16Mbps	 346.18224.00222.00ms	
移动杭州5G	 14.15Mbps	 50.50Mbps	 216.77215.00267.00ms	
------------------------------------------------------------------------
 总共花费      : 8 分 21 秒
 时间          : Fri May  9 17:20:57 CST 2025
------------------------------------------------------------------------

```

### IP质量

![image-20250509172659801](https://media.opennet.top/i/2025/05/09/sk8724-0.png)
