---
description: 发布于 2024-01-13
categories:
- vps
date: 2024-01-13
slug: aliyun-hk
title: 阿里云 香港 ECS VPS 测评
updated: 
tags: 
- vps
- aliyun
copyright: true
---

# 阿里云 香港 ECS VPS 测评

半年前用 阿里云300券 买的，参考：https://www.nodeseek.com/post-128794-1

## 规格

ecs.t5-lc2m1.nano

CPU&内存：**1**核(vCPU)**512** MiB 

## 测试

### 延迟表现

![image-20250113182322340](https://media.opennet.top/i/2025/01/13/si01xc-0.png)

![image-20250113182549678](https://media.opennet.top/i/2025/01/13/sjcse1-0.png)

![image-20250113184046329](https://media.opennet.top/i/2025/01/13/ss97tj-0.png)

### 融合怪

```
                   测评频道: https://t.me/vps_reviews                    
VPS融合怪版本：2025.01.02
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
 CPU 核心数        : 1
 CPU 频率          : 2499.448 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 33.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 204.80 MiB / 457.21 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 3.39 GiB / 19.33 GiB
 启动盘路径        : /dev/vda3
 系统在线时间      : 182 days, 23 hour 45 min
 负载              : 0.87, 0.26, 0.17
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-21-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Port Restricted Cone
 IPV4 ASN          : AS45102 Alibaba (US) Technology Co., Ltd.
 IPV4 位置         : Hong Kong / Hong Kong / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		827 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		17927.49 MB/s
 单线程写测试:		14018.82 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.8 MB/s (1425 IOPS, 17.97s)		5.2 MB/s (1264 IOPS, 20.25s)
 1GB-1M Block		108 MB/s (103 IOPS, 9.70s)		109 MB/s (103 IOPS, 9.64s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 3.95 MB/s      (987) | 52.56 MB/s     (821)
Write      | 3.97 MB/s      (994) | 53.01 MB/s     (828)
Total      | 7.92 MB/s     (1.9k) | 105.58 MB/s   (1.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 51.59 MB/s     (100) | 51.16 MB/s      (49)
Write      | 54.27 MB/s     (105) | 54.72 MB/s      (53)
Total      | 105.86 MB/s    (205) | 105.88 MB/s    (102)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
Youtube在您的出口IP所在的国家不提供服务
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：HK 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Failed (Error: )
 Disney+:				No (IP Banned By Disney+ 1)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 Spotify Registration:			Yes (Region: HK)
 OneTrust Region:			HK [Unknown]
 iQyi Oversea Region:			HK
 Bing Region:				HK
 YouTube CDN:				Failed (Network Connection)
 Netflix Preferred CDN:			Hong Kong
 ChatGPT:				No (Only Available with Mobile APP)
 Google Gemini:				No
 Wikipedia Editability:			No
 Google Play Store:			Hong Kong 
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			HKD
 ---Forum---
 Reddit:				No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
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
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8]
欺诈得分(越低越好): 4 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0011 (Low) [A] 
公司滥用得分(越低越好): 0.0045 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: business [8] hosting - high probability [C] DataCenter/WebHosting/Transit [3] hosting [0 7 9 A]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 5 6 A C] No [8]
是否移动设备: No [5 A C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A B C D] Yes [E]
是否VPN: Yes [A E] No [0 1 6 7 C D]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 314(Total_Check) 0(Clean) 4(Blacklisted) 12(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✘     ✘     ✔     ✘    
Yandex    ✘     ✔     ✔     ✘     ✔     ✘    
Gmail     ✘     ✔     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✘     ✔     ✘     ✘     ✔     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✔     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   联通4837   [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     联通4837   [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
102.28 ms 	* RFC1918
1.69 ms 	* DOD
3.25 ms 	* DOD
2.08 ms 	* 中国 香港
3.77 ms 	* [CUG-ASIA] 中国 香港
6.18 ms 	* 中国 香港
3.26 ms 	AS10099 [CUG-BACKBONE] 中国 香港 CUG-HKG-Core chinaunicomglobal.com 联通
10.11 ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
10.62 ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 X-I chinaunicom.cn 联通
8.51 ms 	AS4837 [CU169-BACKBONE] 中国 广东 广州 I-C chinaunicom.cn 联通
* ms 	AS4837 [CU169-BACKBONE] 中国 北京 chinaunicom.cn 联通
49.05 ms 	AS4837 [CU169-BACKBONE] 中国 北京 chinaunicom.cn 联通
* ms 	AS4837 [CU169-BACKBONE] 中国 北京 chinaunicom.cn 联通
44.94 ms 	AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
 	
广州移动 120.196.165.24
2.21 ms 	* 中国 香港
3.33 ms 	AS45102 [Taobao] 中国 香港 alibabagroup.com
3.08 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
8.81 ms 	AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
9.06 ms 	AS9808 [CMNET] 中国 广东 广州 X-I chinamobileltd.com 移动
9.13 ms 	AS9808 [CMNET] 中国 广东 广州 I-C chinamobileltd.com 移动
12.16 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
13.13 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
12.98 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 109.08 Mbps	 106.34 Mbps	 1.83	  NULL
中国香港	 109.33 Mbps	 106.50 Mbps	 1.91	  0.0%
日本东京	 108.79 Mbps	 107.46 Mbps	 57.63	  0.0%
联通WuXi	 110.43 Mbps	 106.54 Mbps	 31.35	  0.0%
联通上海5G	 112.36 Mbps	 107.44 Mbps	 35.65	  23.1%
电信浙江	 110.40 Mbps	 101.44 Mbps	 38.41	  NULL
电信浙江	 110.14 Mbps	 109.26 Mbps	 35.16	  NULL
移动杭州5G	 109.75 Mbps	 108.17 Mbps	 33.79	  0.0%
移动Fujian	 112.01 Mbps	 123.17 Mbps	 33.02	  NULL
------------------------------------------------------------------------
 总共花费      : 14 分 47 秒
 时间          : Mon Jan 13 18:34:04 CST 2025
------------------------------------------------------------------------
```

### IP质量

![image-20250113185118369](https://media.opennet.top/i/2025/01/13/syn55z-0.png)
