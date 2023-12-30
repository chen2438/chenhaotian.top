---
description: 发布于 2023-12-30
categories:
- vps
date: 2023-12-30
slug: bytevirt-sg-nat
title: ByteVirt 新加坡 NAT VPS 测评
updated: 
tags: 
- vps
- bytevirt
copyright: true
---

# ByteVirt 新加坡 NAT VPS 测评

搭配广州移动 IPv6，效果不错

AFF：[https://bytevirt.com/aff.php?aff=315](https://bytevirt.com/aff.php?aff=315)

## 规格

```
1 CPU Core(s) (Fair Share)
256MB RAM
4GB SSD
20 IPv4 NAT Ports
1 /64 IPv6 Addresses
350GB @500Mbps
LXC Virtualization
Singapore, SG Location
1 Backup
Port speed limited to 1Mbps after traffic exceeded
$5.50 USD 每年
```

## 测试

### IPv4

![image-20231230093327539](https://media.opennet.top/i/2023/12/30/fbm8ka-0.png)

![image-20231230093615206](https://media.opennet.top/i/2023/12/30/fdc68y-0.png)

### IPv6

![image-20231230093154690](https://media.opennet.top/i/2023/12/30/fatr9l-0.png)

![image-20231230093212251](https://media.opennet.top/i/2023/12/30/faxnip-0.png)

### 融合怪

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.12.18
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 3900X 12-Core Processor
 CPU 核心数        : 24
 CPU 频率          : 4093.310 MHz
 CPU 缓存          : L1: 384.00 KB / L2: 6.00 MB / L3: 64.00 MB
 硬盘空间          : 781.48 MiB / 3951.72 MiB
 启动盘路径        : /dev/loop82
 内存              : 30.89 MiB / 256.00 MiB
 Swap              : 20.61 MiB / 256.00 MiB
 系统在线时间      : 0 days, 0 hour 0 min
 负载              : 0.18, 0.06, 0.02
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.5.11-4-pve
 TCP加速方式       : bbr
 虚拟化架构        : LXC
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS136557 Host Universal Pty Ltd
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 子网掩码     : 128
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1994 Scores
 24 线程测试(多核)得分: 		1992 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		54106.13 MB/s
 单线程写测试:		24150.68 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		137 MB/s (33.53 IOPS, 0.76s)		188 MB/s (45927 IOPS, 0.56s)
 1GB-1M Block		439 MB/s (418 IOPS, 2.39s)		250 MB/s (238 IOPS, 4.20s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 98.44 MB/s   (24.6k) | 309.23 MB/s   (4.8k)
Write      | 98.70 MB/s   (24.6k) | 310.85 MB/s   (4.8k)
Total      | 197.15 MB/s  (49.2k) | 620.09 MB/s   (9.6k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 344.15 MB/s    (672) | 124.84 MB/s    (121)
Write      | 362.43 MB/s    (707) | 133.15 MB/s    (130)
Total      | 706.58 MB/s   (1.3k) | 257.99 MB/s    (251)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN10S14)
Youtube识别地域: 新加坡(SG)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：新加坡
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[提醒] 无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：新加坡区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: SG)
 HotStar:				Yes (Region: SG)
 Disney+:				Yes (Region: SG)
 Netflix:				Yes (Region: SG)
 YouTube Premium:			Yes (Region: SG)
 Amazon Prime Video:			Yes (Region: SG)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			SG
 Viu.com:				Yes (Region: SG)
 YouTube CDN:				Singapore 
 Netflix Preferred CDN:			Associated with [] in [Singapore ]
 Spotify Registration:			No
 Steam Currency:			SGD
 ChatGPT:				Yes
 Bing Region:				SG
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【SG】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 29②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  business⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  Yes① ②   No⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦   Yes⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: SG 城市: Singapore 服务商: AS136557 Host Universal Pty Ltd
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 测试超时
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.41 ms  *  局域网
4.05 ms  AS136557  新加坡, hostuniversal.com.au
0.23 ms  AS136557  新加坡, hostuniversal.com.au
1.28 ms  AS174  新加坡, cogentco.com
1.89 ms  AS174  新加坡, cogentco.com
1.49 ms  AS174  新加坡, cogentco.com
156.94 ms  AS174  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, cogentco.com
157.29 ms  AS174  法国, 法兰西岛大区, 巴黎, cogentco.com
157.23 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
157.77 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
1046.10 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.10 ms  *  局域网
0.88 ms  AS136557  新加坡, hostuniversal.com.au
0.18 ms  AS136557  新加坡, hostuniversal.com.au
1.49 ms  AS174  新加坡, cogentco.com
1.39 ms  AS174  新加坡, cogentco.com
1.47 ms  AS174  新加坡, cogentco.com
173.33 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
167.32 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
345.10 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
337.03 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
331.44 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
广州移动 120.196.165.24
0.12 ms  *  局域网
0.84 ms  AS136557  新加坡, hostuniversal.com.au
0.19 ms  AS136557  新加坡, hostuniversal.com.au
0.95 ms  AS136557  新加坡, hostuniversal.com.au
0.94 ms  AS60068  新加坡, datacamp.co.uk
1.03 ms  AS60068  新加坡, datacamp.co.uk
34.18 ms  AS60068  新加坡, datacamp.co.uk
31.84 ms  AS58453  中国, 香港, chinamobile.com, 移动
36.51 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
36.87 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
43.15 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
45.43 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
43.26 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 501.27 Mbps	 478.06 Mbps	 0.25	  0.0%
新加坡		 522.50 Mbps	 499.85 Mbps	 1.33	  NULL
中国香港	 524.57 Mbps	 511.01 Mbps	 32.14	  NULL
联通海南	 56.32 Mbps	 477.04 Mbps	 238.62	  NULL
联通Fuzhou	 63.35 Mbps	 504.11 Mbps	 261.44	  4.3%
电信Nanjing5G	 26.54 Mbps	 428.81 Mbps	 645.16	  14.7%
电信Zhenjiang5G	 1.66 Mbps	 450.35 Mbps	 391.86	  NULL
移动杭州5G	 39.57 Mbps	 523.10 Mbps	 66.50	  15.7%
移动Chengdu	 510.10 Mbps	 541.79 Mbps	 84.48	  0.0%
------------------------------------------------------------------------
 总共花费      : 8 分 15 秒
 时间          : Fri Dec 29 15:37:23 UTC 2023
------------------------------------------------------------------------
```

