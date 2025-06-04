---
description: 发布于 2025-05-26
categories:
- vps
date: 2025-05-26
slug: bagevm-jp
title: BageVM 日本 VPS 测评
updated: 
tags: 
- vps
- bagevm
copyright: true
---

# BageVM 日本 VPS 测评

> 感谢朋友借测

IP 质量非常好，解锁优美；

官网 AFF：https://www.bagevm.com/aff.php?aff=519

## 规格

AMD 7663 / DDR4 / Nvme SSD / DNS Unlock Netflix/Disney+/Youtube Premium/ChatGPT
Looking glass: http://lg-jpb.bagevm.net
PCCWG+TELSTRA+NTT+Lumen+Cogent+EIE
No China Mainland Optimization Guaranteed

```
1 vCPU
1GB RAM
10GB SSD
2TB Transfer @1000Mbps (In & Out)
1IPv4 & 1IPv6
Japan
No refunds
Default Block 22 out Port
Block 25 Port
$3.99 USD 每月
```

## 测试

### 延迟表现

![image-20250526205208482](https://media.opennet.top/i/2025/05/26/xxs7tu-0.png)

![image-20250526205224671](https://media.opennet.top/i/2025/05/26/xxyrms-0.png)

### 融合怪

```
-------------------------------------VPS融合怪测试-------------------------------------
版本：v0.1.33
测评频道: https://t.me/vps_reviews
Go项目地址：https://github.com/oneclickvirt/ecs
Shell项目地址：https://github.com/spiritLHLS/ecs
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 7663 56-Core Processor @ 1996.249 MHz
 CPU 数量            : 1 Virtual CPU(s)
 CPU 缓存            : L1: 128 KB / L2: 512 KB / L3: 16 MB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 265.83 MB / 960.70 MB
 气球驱动            : ✔️ Enabled
 内核页合并          : ❌ Undetected
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.70 GB / 9.76 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.11 [x86_64] 
 内核                : 6.1.0-28-amd64
 系统在线时间        : 0 days, 00 hours, 08 minutes
 时区                : CST
 负载                : 0.06 / 0.13 / 0.11
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS63150 BAGE
 IPV4 Location       : Akiruno / Tokyo / Japan
 IPV6 ASN            : AS63150 BAGE
 IPV6 Location       : Tokyo / Tokyo / Japan
 IPv6 子网掩码       : /64
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   3702.56
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 25357.13 MB/s(26.59K IOPS, 5s)
单线程顺序读速度: 43408.15 MB/s(45.52K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       52.71 MB/s(13.2k)       52.79 MB/s(13.2k)       105.50 MB/s(26.4k)      
/root         64k      684.89 MB/s(10.7k)      688.49 MB/s(10.8k)      1.37 GB/s(21.5k)        
/root         512k     1.51 GB/s(2957)         1.59 GB/s(3114)         3.11 GB/s(6071)         
/root         1m       2.11 GB/s(2064)         2.25 GB/s(2202)         4.37 GB/s(4266)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：日本
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：日本
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
当前IPv4出口所在地区即将开通DisneyPlus
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Apple                     YES (Region: JPN) [Native]
BingSearch                YES (Region: JP)
Claude                    YES [Native]
Dazn                      YES (Region: JP) [Via DNS]
Disney+                   YES (Region: JP) [Via DNS]
Gemini                    YES (Region: JPN) [Native]
GoogleSearch              YES
Google Play Store         YES (Region: JP) [Native]
IQiYi                     YES (Region: JP) [Native]
Instagram Licensed Audio  YES [Native]
KOCOWA                    NO
MetaAI                    Unknown: get www.meta.ai failed with code: 200
Netflix                   YES (Region: US) [Via DNS]
Netflix CDN               JP
OneTrust                  YES (Region: JP) [Via DNS]
ChatGPT                   YES (Region: JP) [Native]
Paramount+                YES [Native]
Amazon Prime Video        YES (Region: JP) [Native]
Reddit                    YES
SonyLiv                   Banned
Sora                      YES (Region: JP)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: JP)
TVBAnywhere+              YES (Region: JP) [Native]
TikTok                    YES (Region: JP) [Native]
Viu.com                   YES [Native]
Wikipedia Editability     YES
YouTube Region            YES (Region: JP) [Native]
YouTube CDN               NRT
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 8 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 86 [8] 
社区投票-无害: 0 [2]
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 89 [8] 
欺诈得分(越低越好): 2 [1] 0 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.003 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: FixedLineISP [3] isp [0 7] business [8] hosting [9 A] unknown [C]
公司类型: isp [0 7] hosting [A]
是否云提供商: No [7 D] 
是否数据中心: Yes [1 A] No [0 5 6 8 C]
是否移动设备: Yes [E] No [5 A C]
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
DNS-黑名单: 315(Total_Check) 0(Clean) 7(Blacklisted) 18(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 2 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.003 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
安全信息:
使用类型: FixedLineISP [3] hosting [A]
公司类型: hosting [A] 
是否云提供商: No [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A D] 
是否VPN: No [1 A D] 
是否TorExit: No [1 D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D]
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 315(Total_Check) 0(Clean) 0(Blacklisted) 315(Other) 
--------------------------------------邮件端口检测--------------------------------------
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
-------------------------------------三网回程线路检测-------------------------------------
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
上海移动v6 2409:8c1e:75b0:3003::26  移动CMIN2  [精品线路] 移动CMI    [普通线路] 
广州电信v6 240e:97c:2f:3000::44     电信163    [普通线路] 
广州联通v6 2408:8756:f50:1001::c    联通4837   [普通线路] 
广州移动v6 2409:8c54:871:1001::12   移动CMIN2  [精品线路] 移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.54 ms      AS63150                       保加利亚, 佩特里奇, bagevm.com 
0.27 ms      *                             
0.52 ms      *                             
3.48 ms      *          [BBIXINTLNET]      日本
*
*
*
*
52.71 ms     AS17676    [BBTEC]            中国, 北京, softbank.jp 
*
105.35 ms    AS4134     [CHINANET-BB]      中国, 北京, www.chinatelecom.com.cn 
*
*
*
70.95 ms     AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.69 ms      AS63150                       保加利亚, 佩特里奇, bagevm.com 
0.52 ms      *                             
0.38 ms      *                             
3.77 ms      *          [BBIXINTLNET]      日本
*
*
*
*
92.74 ms     AS17676    [BBTEC]            中国, 北京, softbank.jp 
*
*
*
223.95 ms    AS17816    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
87.83 ms     AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
79.65 ms     AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.45 ms      AS63150                       保加利亚, 佩特里奇, bagevm.com 
0.39 ms      *                             
0.35 ms      *                             
0.54 ms      AS2914                        日本, 东京都, 东京, gin.ntt.net 
1.75 ms      AS2914     [NTT-BACKBONE]     日本, 东京都, 东京, gin.ntt.net 
50.46 ms     AS2914     [NTT-BACKBONE]     中国, 香港, gin.ntt.net 
49.55 ms     AS2914     [NTT-BACKBONE]     中国, 香港, gin.ntt.net 
183.26 ms    AS2914     [NTT-GLOBAL]       中国, 香港, gin.ntt.net 
*
59.37 ms     AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
60.53 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
60.77 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
57.13 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
58.00 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
56.49 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   1038.10 Mbps    984.37 Mbps     0.33 ms         2.7%            
日本东京        43.36 Mbps      86.87 Mbps      28.44 ms        0.0%            
新加坡          927.88 Mbps     1004.69 Mbps    77.97 ms        0.0%            
联通上海5G      925.74 Mbps     523.50 Mbps     67.59 ms        0.0%            
电信浙江        746.36 Mbps     788.65 Mbps     41.82 ms        Not available.  
电信Zhenjiang5G 701.46 Mbps     810.18 Mbps     55.47 ms        Not available.  
移动Suzhou      915.12 Mbps     1.10 Mbps       625.22 ms       0.0%            
移动Chengdu     926.50 Mbps     696.34 Mbps     91.79 ms        Not available.  
----------------------------------------------------------------------------------
花费          : 9 分 34 秒
时间          : Mon May 26 17:57:45 CST 2025
----------------------------------------------------------------------------------
```

### IP质量

![image-20250526205051880](https://media.opennet.top/i/2025/05/26/xwurk7-0.png)
