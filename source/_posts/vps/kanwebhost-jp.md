---
description: 发布于 2024-01-20
categories:
- vps
date: 2024-01-20
slug: kanwebhost-jp
title:  KhanWebHost 日本 NAT VPS 测评
updated: 
tags: 
- vps
- khanwebhost
copyright: true
---

# KhanWebHost 日本 NAT VPS 测评

配合碳云广移v6，出国方向拉满(120mbps)，回国方向不佳(350kbps)

AFF：https://khanwebhost.com/aff.php?aff=177

## 规格

```
Japan 256MB NAT

CPU: 1 CPU Cores (Fair Usage)
RAM: 256MB
Disk: 5 Gb SSD Disk Space
Bandwidth: 800GB @1GB/sec (Shared)
NAT IPv4 (20 usable ports)
Dedicated IPV6
OVZ Virtualization
TUN/TAP enabled

Test IP JP 103.179.45.197
IPV6 TEST IP JP 2a0a:6040:9700::1
```

## 测试

### IPv6 Ping

![image-20240120191441255](https://media.opennet.top/i/2024/01/20/vi7j2y-0.png)

![image-20240120192027127](https://media.opennet.top/i/2024/01/20/vlgglk-0.png)

### 融合怪

```
测评频道: https://t.me/vps_reviews                    
版本：2024.01.20
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7742 64-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 1817.554 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 4.87 GiB / 0.04 GiB
 启动盘路径        : /dev/ploop39019p1
 内存              : 34.03 MiB / 256.00 MiB
 Swap              : 11.14 MiB / 1.00 GiB
 系统在线时间      : 0 days, 0 hour 1 min
 负载              : 0.28, 0.06, 0.02
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 4.19.0
 TCP加速方式       : 未设置TCP拥塞控制算法
 虚拟化架构        : OpenVZ (Virutozzo)
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS149020 WebHorizon Internet Services
 IPV4 位置         : Hatsudai / Tokyo / JP
 IPV6 ASN          : AS149020 WebHorizon Internet Services
 IPV6 位置         : Tokyo / Tokyo
 IPV6 子网掩码     : Unknown
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		1355 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		35833.23 MB/s
 单线程写测试:		16119.09 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		554 MB/s (135.34 IOPS, 0.19s)		3.1 GB/s (761514 IOPS, 0.03s)
 1GB-1M Block		110 MB/s (105 IOPS, 9.50s)		1.0 GB/s (989 IOPS, 1.01s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 85.80 MB/s   (21.4k) | 301.43 MB/s   (4.7k)
Write      | 86.03 MB/s   (21.5k) | 303.02 MB/s   (4.7k)
Total      | 171.84 MB/s  (42.9k) | 604.45 MB/s   (9.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 383.92 MB/s    (749) | 382.86 MB/s    (373)
Write      | 404.32 MB/s    (789) | 408.36 MB/s    (398)
Total      | 788.25 MB/s   (1.5k) | 791.22 MB/s    (771)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT12S24)
Youtube识别地域: 日本(JP)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: IAD(IAD30S49)
Youtube识别地域: 新加坡(SG)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：新加坡区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：新加坡区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: JP)
 HotStar:				Yes (Region: SG)
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Yes (Region: JP)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			Failed
 Viu.com:				No
 YouTube CDN:				Tokyo 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			No
 Steam Currency:			JPY
 ChatGPT:				Yes
 Bing Region:				JP
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: SG)
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: SG)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Washington DC 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				JP
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【JP】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):isp①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测89 ③
Google搜索可行性：YES
端口25检测:
  本地: Yes
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱：No
  yandex邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: JP 城市: Hatsudai 服务商: AS149020 WebHorizon Internet Services
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     测试超时
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.20 ms  *  局域网
0.41 ms  AS60068  日本, 东京都, 东京, datacamp.co.uk
3.70 ms  AS2914  日本, 东京都, 东京, ntt.com
4.39 ms  AS2914  日本, 东京都, 东京, ntt.com
1.00 ms  AS2914  日本, 东京都, 东京, ntt.com
113.10 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
118.59 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.20 ms  *  局域网
0.24 ms  AS60068  日本, 东京都, 东京, datacamp.co.uk
0.56 ms  AS2914  日本, 东京都, 东京, ntt.com
2.08 ms  AS2914  日本, 东京都, 东京, ntt.com
1.36 ms  AS2914  日本, 东京都, 东京, ntt.com
67.53 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
62.23 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
61.82 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
63.35 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
66.74 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.24 ms  *  局域网
0.42 ms  AS60068  日本, 东京都, 东京, datacamp.co.uk
0.95 ms  AS3491,AS31713  日本, 东京都, 东京, pccw.com
54.19 ms  AS3491,AS31713  中国, 香港, pccw.com
99.98 ms  AS58453  中国, 香港, chinamobile.com, 移动
113.85 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
91.71 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
103.25 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
91.91 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
112.12 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
109.03 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 6198.37 Mbps	 2930.69 Mbps	 0.33	  0.0%
日本东京	 216.46 Mbps	 2088.72 Mbps	 3.28	  54.2%
中国香港	 748.84 Mbps	 138.11 Mbps	 54.14	  NULL
联通郑州5G	 1.16 Mbps	 1174.51 Mbps	 117.96	  NULL
联通海南	 0.99 Mbps	 1805.47 Mbps	 116.55	  NULL
移动Chengdu	 0.90 Mbps	 971.53 Mbps	 115.67	  7.6%
移动Lanzhou	 165.43 Mbps	 1136.81 Mbps	 148.55	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 58 秒
 时间          : Sat Jan 20 05:53:19 EST 2024
------------------------------------------------------------------------
```

### GB5

```
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-10-18                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2024-01-20 06:10:04 EST
净测试时长：2分33秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 4.19.0 x86_64
  Model                         N/A
  Motherboard                   N/A

处理器信息
  Name                          AMD EPYC 7742
  Topology                      1 Processor, 8 Cores
  Identifier                    AuthenticAMD Family 23 Model 49 Stepping 0
  Base Frequency                1.82 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      512 KB
  L3 Cache                      256 MB

内存信息
  Size                          256 MB

单核测试分数：736
多核测试分数：756
详细结果链接：https://browser.geekbench.com/v5/cpu/22153346
```

