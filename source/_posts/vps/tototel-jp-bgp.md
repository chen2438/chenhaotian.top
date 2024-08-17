---
description:  ToToTel 日本 VPS：国际互连不错，大陆连通性一般；IP漂美国、香港、日本，解锁不错。
categories:
- vps
date: 2024-08-18
slug: tototel-jp-bgp
title: ToToTel 日本 BGP VPS 测评
updated: 
tags: 
- vps
- tototel
copyright: true
---

# ToToTel 日本 BGP VPS 测评

国际互连不错，大陆连通性一般；IP漂美国、香港、日本，解锁不错。

## 规格

CPU: 4

RAM: 4G

SSD: 100G

Bandwidth: 32TB

LGS: http://23.173.216.5:7788

官网链接（含AFF）：https://portal.tototel.com/aff.php?aff=118

## 测试

### IPv4

![image-20240818001319807](https://media.opennet.top/i/2024/08/17/12lnou2-0.png)

![image-20240818001901323](https://media.opennet.top/i/2024/08/17/12p6f0p-0.png)

### IPv6

无

### GB5

```bash
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2024-05-08                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2024-08-18 00:05:21 CST
净测试时长：2分23秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-23-cloud-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.2-0-gea1b7a073390-prebuilt.qemu.org

处理器信息
  Name                          Intel Xeon E5-2696 v4
  Topology                      1 Processor, 4 Cores
  Identifier                    GenuineIntel Family 6 Model 79 Stepping 1
  Base Frequency                2.20 GHz
  L1 Instruction Cache          32.0 KB x 4
  L1 Data Cache                 32.0 KB x 4
  L2 Cache                      4.00 MB x 4
  L3 Cache                      16.0 MB

内存信息
  Size                          3.81 GB

单核测试分数：758
多核测试分数：2927
详细结果链接：https://browser.geekbench.com/v5/cpu/22787110
```

### 融合怪

```bash
测评频道: https://t.me/vps_reviews                    
VPS融合怪版本：2024.08.14
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2696 v4 @ 2.20GHz
 CPU 核心数        : 4
 CPU 频率          : 2199.996 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 16.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 231.83 MiB / 3.81 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.20 GiB / 98.26 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 5 days, 1 hour 5 min
 负载              : 0.20, 0.22, 0.16
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-23-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS138997 Eons Data Communications Limited
 IPV4 位置         : Den’enchōfu / Tokyo / JP
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		895 Scores
 4 线程测试(多核)得分: 		3557 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		18724.76 MB/s
 单线程写测试:		14404.65 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		32.9 MB/s (8034 IOPS, 3.19s)		38.6 MB/s (9416 IOPS, 2.72s)
 1GB-1M Block		1.3 GB/s (1262 IOPS, 0.79s)		1.6 GB/s (1565 IOPS, 0.64s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 65.03 MB/s   (16.2k) | 1.05 GB/s    (16.5k)
Write      | 65.16 MB/s   (16.2k) | 1.06 GB/s    (16.6k)
Total      | 130.20 MB/s  (32.5k) | 2.12 GB/s    (33.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.31 GB/s     (2.5k) | 1.44 GB/s     (1.4k)
Write      | 1.38 GB/s     (2.6k) | 1.54 GB/s     (1.5k)
Total      | 2.69 GB/s     (5.2k) | 2.99 GB/s     (2.9k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：JP 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			No
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 Spotify Registration:			Yes (Region: US)
 Instagram Licensed Audio:		No
 OneTrust Region:			US [Unknown]
 iQyi Oversea Region:			HK
 Bing Region:				US
 YouTube CDN:				Tokyo
 Netflix Preferred CDN:			Tokyo
 ChatGPT:				Yes
 Google Gemini:				No
 Wikipedia Editability:			No
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			USD
 ---Forum---
 Reddit:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
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
信任得分(越高越好): 93 [8] 
VPN得分(越低越好): 7 [8] 
代理得分(越低越好): 5 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 9 [8] 
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0012 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2] 
安全信息:
使用类型: unknown [C] hosting [0 7 A] Commercial [3] corporate [9]
公司类型: hosting [0 A] business [7]
是否云提供商: Yes [7 D] 
是否数据中心: No [1 5 6 8 C] Yes [0 A]
是否移动设备: Yes [E] No [5 A C]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
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
DNS-黑名单: 312(Total_Check) 0(Clean) 3(Blacklisted) 171(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✘     ✔     ✘     ✔     ✘    
163       ✘     ✘     ✔     ✘     ✔     ✘    
Sohu      ✘     ✘     ✘     ✘     ✔     ✘    
Yandex    ✘     ✘     ✔     ✘     ✔     ✘    
Gmail     ✘     ✘     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✘     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✘     ✔     ✘     ✔     ✘    
MailRU    ✘     ✘     ✘     ✘     ✔     ✘    
AOL       ✘     ✘     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.12 ms  AS138997  日本, 东京都, 东京, vmshell.com
0.44 ms  AS138997  日本, 东京都, 东京, eons.cloud
0.31 ms  AS138997  日本, 东京都, 东京, eons.cloud
0.30 ms  *  局域网
0.33 ms  AS7578  英国, 伦敦, globalsecurelayer.com
0.28 ms  AS7578  日本, 东京都, 东京, cogentco.com
0.67 ms  AS7578  日本, 东京都, 东京, cogentco.com
0.40 ms  AS7578  日本, 东京都, 东京, cogentco.com
2.06 ms  *  日本, 东京都, 东京, bbix.net
352.47 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
338.53 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.28 ms  AS138997  日本, 东京都, 东京, vmshell.com
0.23 ms  AS138997  日本, 东京都, 东京, eons.cloud
0.23 ms  AS138997  日本, 东京都, 东京, eons.cloud
0.45 ms  *  局域网
0.34 ms  AS7578  英国, 伦敦, globalsecurelayer.com
0.27 ms  AS7578  日本, 东京都, 东京, cogentco.com
0.35 ms  AS7578  日本, 东京都, 东京, cogentco.com
0.42 ms  AS7578  日本, 东京都, 东京, cogentco.com
2.42 ms  *  日本, 东京都, 东京, bbix.net
123.88 ms  AS17676  中国, 北京, bbtec.net
158.41 ms  AS4837  中国, 北京, chinaunicom.com, 联通
148.09 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
169.02 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
158.79 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.22 ms 	AS138997 北美地区 eons.cloud
0.56 ms 	AS138997 [EDCL-HK] 日本 东京都 东京 eons.cloud
0.61 ms 	AS138997 [EDCL-HK] 日本 东京都 东京 eons.cloud
0.60 ms 	* RFC1918
0.48 ms 	AS7578 日本 东京都 东京 globalsecurelayer.com
0.32 ms 	AS7578 日本 东京都 东京 globalsecurelayer.com
12.86 ms 	AS3356 日本 东京都 东京 lumen.com
79.22 ms 	AS3356 日本 东京都 东京 lumen.com
80.07 ms 	AS58453 [CMI-INT] 日本 东京都 东京 cmi.chinamobile.com 移动
108.01 ms 	AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
97.92 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
93.76 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
200.52 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
70.59 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
60.73 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
61.78 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 878.73 Mbps	 4913.01 Mbps	 100.85	  NULL
中国香港	 1453.99 Mbps	 8606.51 Mbps	 56.28	  0.0%
新加坡		 1043.79 Mbps	 6944.47 Mbps	 85.10	  0.0%
联通WuXi	 8.00 Mbps	 6.12 Mbps	 130.73	  2.0%
联通成都	 7.02 Mbps	 0.37 Mbps	 226.63	  NULL
电信Zhenjiang5G	 2.06 Mbps	 21.46 Mbps	 351.57	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 52 秒
 时间          : Sun Aug 18 00:18:42 CST 2024
------------------------------------------------------------------------
```

