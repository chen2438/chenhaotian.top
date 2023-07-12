---
description: 发布于 2023-07-06
categories:
- vps
date: 2023-07-06
slug: racknerd-ca
title: RackNerd 圣何塞 VPS 测评
updated: 
tags: 
- vps
- racknerd
copyright: true
---

# RackNerd 圣何塞 VPS 测评

官网链接：https://my.racknerd.com/index.php?rp=/store/kvm-vps

这款是2022年双十一特别款，现在已经买不到了

网络是G口，4T流量

稳定性不错，没有遇到业务断开的情况

无大陆优化，晚高峰网速一般，回程拉跨

适合建站

### 规格

2.11 GB KVM VPS (2022's 11.11 Promo)

Extra IPv4: None

Location: San Jose, CA (Test IP: 192.210.207.88)

CPU Cores: 1 CPU Core (Included)

Disk Space: 21 GB

Bandwidth: 3.91 TB

Memory: 2.11 GB

### 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.05
更新日志：融合怪十代目(集合百家之长)(专为测评频道小鸡而生)
-------------------感谢teddysun和superbench和yabs开源-------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v2 @ 2.80GHz
 CPU 核心数        : 1
 CPU 频率          : 2799.998 MHz
 CPU 缓存          : 16384 KB
 硬盘空间          : 19.0 GB (5.3 GB 已用)
 内存              : 1947 MB (1016 MB 已用)
 Swap              : 2047 MB (13 MB 已用)
 系统在线时间      : 2 days, 7 hour 25 min
 负载              : 2.06, 1.41, 0.90
 系统              : CentOS Linux 7 (Core)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 3.10.0-1160.90.1.el7.x86_64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Restric NAT
 IPV4 ASN          : AS36352 ColoCrossing
 IPV4 位置         : Sunnyvale / California / US
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		754 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		6278.10 MB/s
 单线程写测试:		11360.96 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		20.3 MB/s (4957 IOPS, 5.16s)		12.4 MB/s (3026 IOPS, 8.46s)
 1GB-1M Block		1.3 GB/s (1287 IOPS, 0.78s)		893 MB/s (851 IOPS, 1.17s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 52.95 MB/s   (13.2k) | 860.05 MB/s  (13.4k)
Write      | 53.04 MB/s   (13.2k) | 864.57 MB/s  (13.5k)
Total      | 105.99 MB/s  (26.4k) | 1.72 GB/s    (26.9k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.31 GB/s     (2.5k) | 1.27 GB/s     (1.2k)
Write      | 1.38 GB/s     (2.6k) | 1.35 GB/s     (1.3k)
Total      | 2.69 GB/s     (5.2k) | 2.62 GB/s     (2.5k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  旧金山(SFO03S20)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
Netflix在您的出口IP所在的国家不提供服务
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：美国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				No
 Netflix:				No
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				San Francisco, CA 
 Netflix Preferred CDN:			Failed
 Spotify Registration:			No
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：62
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
ip234数据库：
  欺诈分数(越低越好)：16
ip-api数据库:
  手机流量: No
  代理服务: No
  数据中心: Yes
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：YES
端口25检测:
  本地: Yes
  163邮箱: Yes
  gmail邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/07/06 11:00:20 北京电信 219.141.136.12  测试超时
2023/07/06 11:00:20 北京联通 202.106.50.1    联通4837[普通线路]           
2023/07/06 11:00:20 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/07/06 11:00:20 上海电信 202.96.209.133  电信163 [普通线路]           
2023/07/06 11:00:20 上海联通 210.22.97.1     联通4837[普通线路]           
2023/07/06 11:00:20 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/07/06 11:00:20 广州电信 58.60.188.222   电信163 [普通线路]           
2023/07/06 11:00:20 广州联通 210.21.196.6    联通4837[普通线路]           
2023/07/06 11:00:20 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/07/06 11:00:20 成都电信 61.139.2.69     电信163 [普通线路]           
2023/07/06 11:00:20 成都联通 119.6.6.6       联通4837[普通线路]           
2023/07/06 11:00:20 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
7.09 ms  AS36352  美国, 加利福尼亚州, 圣克拉拉, colocrossing.com
0.77 ms  *  局域网
1.46 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
1.67 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
1.61 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
168.70 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
175.69 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
176.23 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
1.72 ms  AS36352  美国, 加利福尼亚州, 圣克拉拉, colocrossing.com
0.90 ms  *  局域网
0.59 ms  AS18779  美国, 加利福尼亚州, 圣克拉拉, egihosting.com
1.46 ms  AS3257  美国, 加利福尼亚州, 圣何塞, gtt.net
0.98 ms  AS3257  美国, 加利福尼亚州, 圣何塞, gtt.net
124.93 ms  AS3257  美国, 加利福尼亚州, 圣何塞, gtt.net
357.49 ms  AS4837  中国, 上海, chinaunicom.com, 联通
242.93 ms  AS4837  中国, 上海, chinaunicom.com, 联通
354.27 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
345.90 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
355.69 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
11.11 ms  AS36352  美国, 加利福尼亚州, 圣克拉拉, colocrossing.com
10.78 ms  *  局域网
1.53 ms  AS6939  美国, 加利福尼亚州, 圣何塞, he.net
2.15 ms  AS58453  美国, 加利福尼亚州, 圣何塞, chinamobile.com, 移动
171.13 ms  AS58453  中国, 上海, chinamobile.com, 移动
171.94 ms  AS9808  中国, 上海, chinamobile.com, 移动
178.22 ms  AS9808  中国, 上海, chinamobile.com, 移动
181.14 ms  AS9808  中国, 上海, chinamobile.com, 移动
188.17 ms  AS9808  中国, 北京, chinamobile.com, 移动
191.11 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 25.13 Mbps	 628.97 Mbps	 54.25	  0.0%
洛杉矶		 817.27 Mbps	 816.18 Mbps	 7.82	  NULL
联通WuXi	 2.20 Mbps	 538.79 Mbps	 425.50	  15.7%
联通上海5G	 0.47 Mbps	 474.65 Mbps	 220.24	  20.9%
电信Suzhou5G	 472.23 Mbps	 524.82 Mbps	 157.98	  NULL
电信合肥5G	 0.76 Mbps	 19.68 Mbps	 168.87	  11.0%
移动Beijing	 442.60 Mbps	 561.02 Mbps	 186.12	  NULL
移动杭州5G	 265.34 Mbps	 448.03 Mbps	 192.38	  0.4%
------------------------------------------------------------------------
 总共花费      : 6 分 50 秒
 时间          : kam qad  6 11:05:16 saaku EDT 2023
------------------------------------------------------------------------
```

### 晚高峰网速测试

移动速度一骑绝尘啊

```
——————————————————————————————————————————————————————————
 SuperSpeed 全面测速修复版. By UXH & ernisn & oooldking
 节点更新: 2022/11/28 | 脚本更新: 2022/11/28
 Github: https://github.com/uxh/superspeed
——————————————————————————————————————————————————————————
  测速类型:    0. 取消测速    1. 三网测速    2. 详细测速
               3. 电信节点    4. 联通节点    5. 移动节点
  请输入数字选择测速类型: 1
——————————————————————————————————————————————————————————
ID    测速服务器信息       上传/Mbps   下载/Mbps   延迟/ms
3633  电信|上海　　　　　　↑ 0.92      ↓ 505.74    147.29  
34115 电信|天津５Ｇ　　　　↑ 0.68      ↓ 29.11     189.39  
17145 电信|安徽合肥５Ｇ　　↑ 0.78      ↓ 40.85     162.24  
3973  电信|甘肃兰州　　　　↑ 0.59      ↓ 205.18    180.50  
27594 电信|广东广州５Ｇ　　↑ 2.22      ↓ 157.32    178.73  
26352 电信|江苏南京５Ｇ　　↑ 1.88      ↓ 529.06    170.07  
24447 联通|上海５Ｇ　　　　↑ 0.46      ↓ 507.46    223.12  
36646 联通|河南郑州５Ｇ　　↑ 3.86      ↓ 437.74    331.93  
4870  联通|湖南长沙　　　　↑ 2.03      ↓ 4.20      300.08  
37235 联通|辽宁沈阳　　　　↑ 1.91      ↓ 81.16     233.38  
25858 移动|北京　　　　　　↑ 332.14    ↓ 621.91    184.81  
29105 移动|陕西西安５Ｇ　　↑ 38.46     ↓ 584.85    300.28  
4575  移动|四川成都　　　　↑ 206.29    ↓ 630.70    271.92  
——————————————————————————————————————————————————————————
  测试完成, 本次测速耗时: 7 分 27 秒
  当前时间: 2023-07-06 23:30:22
```

