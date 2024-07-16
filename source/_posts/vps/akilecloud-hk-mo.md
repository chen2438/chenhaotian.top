---
description: 发布于 2024-07-15
categories:
- vps
date: 2024-07-15
slug: akilecloud-hk-mo
title: AkileCloud 香港 澳门IP VPS 测评
updated: 
tags: 
- vps
- akilecloud
copyright: true
---

#AkileCloud 香港 澳门IP VPS 测评

IP注册为澳门，被各大流媒体服务商识别为香港。宿主机位于香港。

```bash
 IPV4 ASN          : AS61112 AKILE LTD
 IPV4 位置         : Macau / Macao / MO
 IPV6 ASN          : AS61112 Akile
 IPV6 位置         : Macao / Macao
```

## 规格

HKLite(MOIP)-One(Probe)

CPU 1核 ｜ 内存 512 M

硬盘 5 GB ｜ 带宽 1000M

200G/月 ｜ 超出限速共享10Mbps

官网链接（含AFF）：https://akile.io/register?aff_code=7757a50f-522e-40a9-a088-891f3f581d51

发稿时该产品已售罄，可到交易市场购买

## 测试

### IPv4

![image-20240715225848584](https://media.opennet.top/i/2024/07/15/10s7i9r-0.png)

![image-20240715230423328](https://media.opennet.top/i/2024/07/15/10vdy3q-0.png)

### IPv6

移动表现尚可，略有丢包

![image-20240715230006404](https://media.opennet.top/i/2024/07/15/10sxntw-0.png)

![image-20240715230203013](https://media.opennet.top/i/2024/07/15/10u3b0k-0.png)

### GB5

```bash
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2024-05-08                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2024-07-15 10:42:52 EDT
净测试时长：3分20秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-26-cloud-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.3-0-ga6ed6b701f0a-prebuilt.qemu.org

处理器信息
  Name                          Intel Xeon E5-2680 v4
  Topology                      1 Processor, 1 Core
  Identifier                    GenuineIntel Family 6 Model 79 Stepping 1
  Base Frequency                2.39 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      4.00 MB
  L3 Cache                      16.0 MB

内存信息
  Size                          476 MB

单核测试分数：574
多核测试分数：571
详细结果链接：https://browser.geekbench.com/v5/cpu/22686393
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=Intel%20Xeon%20E5-2680%20v4
```



### 融合怪

```bash
测评频道: https://t.me/vps_reviews                    
版本：2024.07.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
 CPU 核心数        : 1
 CPU 频率          : 2394.454 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 81.65 MiB / 475.75 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 983.70 MiB / 5000.70 MiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 0 days, 0 hour 19 min
 负载              : 1.32, 0.54, 0.25
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-26-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS61112 AKILE LTD
 IPV4 位置         : Macau / Macao / MO
 IPV6 ASN          : AS61112 Akile
 IPV6 位置         : Macao / Macao
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		839 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		17343.15 MB/s
 单线程写测试:		11011.55 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		26.3 MB/s (6425 IOPS, 3.98s)		25.0 MB/s (6114 IOPS, 4.19s)
 1GB-1M Block		106 MB/s (101 IOPS, 9.90s)		106 MB/s (100 IOPS, 9.90s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 102.62 MB/s  (25.6k) | 102.39 MB/s   (1.5k)
Write      | 102.89 MB/s  (25.7k) | 102.93 MB/s   (1.6k)
Total      | 205.51 MB/s  (51.3k) | 205.33 MB/s   (3.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 97.71 MB/s     (190) | 96.51 MB/s      (94)
Write      | 102.90 MB/s    (200) | 102.94 MB/s    (100)
Total      | 200.61 MB/s    (390) | 199.46 MB/s    (194)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：HK 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：HK 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					IPv6 Is Not Currently Supported
 Disney+:				IPv6 Is Not Currently Supported
 Netflix:				Yes (Region: HK)
 YouTube Premium:			No
 Amazon Prime Video:			IPv6 Is Not Currently Supported
 TVBAnywhere+:				IPv6 Is Not Currently Supported
 Spotify Registration:			No
 Instagram Licensed Audio:		No
 OneTrust Region:			MO [Unknown]
 iQyi Oversea Region:			IPv6 Is Not Currently Supported
 Bing Region:				WW
 YouTube CDN:				Hong Kong
 Netflix Preferred CDN:			[Akile] in [Hong Kong]
 ChatGPT:				Yes
 Wikipedia Editability:			Yes
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:				IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【GB】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 29 [8] 
VPN得分(越低越好): 12 [8]
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 0 [1] 93 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 92 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [8] hosting ASN [C] hosting [0 7 9 A]
公司类型: hosting [0 7] business [A]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 C] No [5 6 8 A]
是否移动设备: Yes [E] No [5 A C]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否Tor: No [0 1 3 6 7 8 A B C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D]
是否机器人: No [E] 
DNS-黑名单: 311(Total_Check) 0(Clean) 4(Blacklisted) 14(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0013 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [A]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否Tor: No [1 3 A B D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D]
是否Bogon: No [A D] 
DNS-黑名单: 311(Total_Check) 0(Clean) 0(Blacklisted) 311(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✘     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✘     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✘     ✘    
AOL       ✘     ✘     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  检测不到回程路由节点的IP地址
北京移动 221.179.155.161 检测不到回程路由节点的IP地址
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     检测不到回程路由节点的IP地址
上海移动 211.136.112.200 检测不到回程路由节点的IP地址
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    检测不到回程路由节点的IP地址
广州移动 120.196.165.24  检测不到回程路由节点的IP地址
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       检测不到回程路由节点的IP地址
成都移动 211.137.96.205  检测不到回程路由节点的IP地址
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
5.52 ms  *  局域网
2.70 ms  *  局域网
8.45 ms  *  局域网
322.86 ms  AS17676  中国, 北京, bbtec.net
307.47 ms  AS4134  中国, 北京, chinatelecom.com.cn, 电信
329.19 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
329.75 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
337.36 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
4.45 ms  *  局域网
1.03 ms  *  局域网
2.00 ms  *  局域网
255.53 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
292.11 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
258.22 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
4.50 ms  *  局域网
1.33 ms  *  局域网
1.54 ms  *  局域网
167.31 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
16.14 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 262.87 Mbps	 981.21 Mbps	 1.19	  NULL
中国香港	 96.18 Mbps	 95.81 Mbps	 5.66	  0.0%
日本东京	 773.78 Mbps	 680.42 Mbps	 61.37	  0.4%
联通WuXi	 288.31 Mbps	 168.94 Mbps	 153.65	  7.7%
电信合肥5G	 3.32 Mbps	 4.52 Mbps	 320.52	  6.1%
电信Zhenjiang5G	 65.93 Mbps	 402.17 Mbps	 322.84	  NULL
------------------------------------------------------------------------
 总共花费      : 8 分 41 秒
 时间          : Mon Jul 15 10:53:23 EDT 2024
------------------------------------------------------------------------
```

