---
description: 发布于 2023-07-19
categories:
- vps
date: 2023-07-19
slug: cloudsilk-de-9929
title:  CloudSilk 白丝云 德国 9929 VPS 测评
updated: 
tags: 
- vps
- cloudsilk
- 9929
copyright: true
---

# CloudSilk 白丝云 德国 9929 VPS 测评

AFF：https://cloudsilk.io/aff.php?aff=610

CPU 性能相当猛，跑分是一般机器的5倍，绿云的50倍。

晚高峰带宽延迟表现不错。适合用来拉欧洲的落地。

### 规格

德国-精品大陆优化BGP-套餐A

CPU
1核心

RAM
512MB内存

DISK
10G SSD硬盘

DISK
500G流量(500Mbps带宽)

Price
239.99一年 88一季度 39一月

### 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.16
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC-Milan Processor
 CPU 核心数        : 1
 CPU 频率          : 3393.624 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 2.39 GiB / 9.33 GiB
 启动盘路径        : /dev/sda2
 内存              : 106.95 MiB / 461.34 MiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 0 days, 9 hour 26 min
 负载              : 0.36, 0.08, 0.03
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-23-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS41378 Kirino LLC
 IPV4 位置         : Essen / North Rhine-Westphalia / DE
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		4790 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		51318.80 MB/s
 单线程写测试:		24144.63 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		47.1 MB/s (11.49 IOPS, 2.23s)		46.9 MB/s (11442 IOPS, 2.24s)
 1GB-1M Block		1.1 GB/s (1059 IOPS, 0.94s)		1.2 GB/s (1139 IOPS, 0.88s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 44.04 MB/s   (11.0k) | 536.32 MB/s   (8.3k)
Write      | 44.11 MB/s   (11.0k) | 539.14 MB/s   (8.4k)
Total      | 88.16 MB/s   (22.0k) | 1.07 GB/s    (16.8k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 524.08 MB/s   (1.0k) | 521.07 MB/s    (508)
Write      | 551.78 MB/s   (1.0k) | 555.77 MB/s    (542)
Total      | 1.07 GB/s     (2.1k) | 1.07 GB/s     (1.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA16S31)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：德国
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：德国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: DE)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: DE)
 Amazon Prime Video:			Yes (Region: DE)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			DE
 Viu.com:				No
 YouTube CDN:				Frankfurt 
 Netflix Preferred CDN:			Frankfurt  
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【DE】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：44
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
ip234数据库：
  欺诈分数(越低越好)：13
ip-api数据库:
  手机流量: No
  代理服务: No
  数据中心: No
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/07/19 20:22:58 北京电信 219.141.136.12  测试超时
2023/07/19 20:22:58 北京联通 202.106.50.1    联通4837[普通线路]           
2023/07/19 20:22:58 北京移动 221.179.155.161 联通4837[普通线路]           
2023/07/19 20:22:58 上海电信 202.96.209.133  联通9929[优质线路]           
2023/07/19 20:22:58 上海联通 210.22.97.1     联通9929[优质线路]           
2023/07/19 20:22:58 上海移动 211.136.112.200 联通9929[优质线路]           
2023/07/19 20:22:58 广州电信 58.60.188.222   联通9929[优质线路]           
2023/07/19 20:22:58 广州联通 210.21.196.6    联通9929[优质线路]           
2023/07/19 20:22:58 广州移动 120.196.165.24  联通9929[优质线路]           
2023/07/19 20:22:58 成都电信 61.139.2.69     测试超时
2023/07/19 20:22:58 成都联通 119.6.6.6       联通4837[普通线路]           
2023/07/19 20:22:58 成都移动 211.137.96.205  联通4837[普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
0.13 ms  AS41378  德国, 黑森州, 法兰克福, parsun.com
157.42 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
158.42 ms  *  中国, 广东, 广州, chinaunicom.com, 联通
182.16 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.12 ms  AS41378  德国, 黑森州, 法兰克福, parsun.com
157.50 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
158.13 ms  *  中国, 广东, 广州, chinaunicom.com, 联通
161.84 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
179.64 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
177.64 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
170.97 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.14 ms  AS41378  德国, 黑森州, 法兰克福, parsun.com
157.57 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
158.75 ms  *  中国, 广东, 广州, chinaunicom.com, 联通
167.73 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
206.83 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
211.26 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
211.26 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
214.24 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
213.70 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 619.81 Mbps	 548.22 Mbps	 5.61	  0.0%
新加坡		 292.15 Mbps	 424.55 Mbps	 175.03	  0.0%
中国香港	 158.29 Mbps	 433.84 Mbps	 211.01	  0.0%
联通上海5G	 319.85 Mbps	 407.15 Mbps	 150.58	  0.0%
联通郑州5G	 234.90 Mbps	 508.27 Mbps	 133.10	  NULL
电信Suzhou5G	 304.63 Mbps	 419.24 Mbps	 158.57	  NULL
电信上海	 204.84 Mbps	 450.38 Mbps	 154.68	  NULL
移动Beijing	 525.49 Mbps	 276.37 Mbps	 138.38	  NULL
移动Zhengzhou5G	 312.66 Mbps	 334.50 Mbps	 151.63	  0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 33 秒
 时间          : Wed Jul 19 20:28:01 CST 2023
------------------------------------------------------------------------
```

