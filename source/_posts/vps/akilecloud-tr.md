---
description: 发布于 2023-07-20
categories:
- vps
date: 2023-07-20
slug: akilecloud-tr
title: AkileCloud 土耳其 NAT VPS 测评
updated: 
tags: 
- vps
- akile
copyright: true
---

# AkileCloud 土耳其 NAT VPS 测评

AFF：[https://akile.io/shop/server?areaId=10&nodeId=27&planId=106&aff_code=7757a50f-522e-40a9-a088-891f3f581d51](https://akile.io/shop/server?areaId=10&nodeId=27&planId=106&aff_code=7757a50f-522e-40a9-a088-891f3f581d51)

## 规格

TRNAT-盲盒套餐

CPU 1核 ｜ 内存 200 M

硬盘 10 GB ｜ 带宽 500M

流量 1000 G/月 ｜ 超出后限速10Mbps

重置流量 ¥2.00

IPV4 1个 ｜ IPV6 0个

售罄

¥3.28/月

## 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.16
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz
 CPU 核心数        : 1
 CPU 频率          : 2599.998 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.40 GiB / 9.68 GiB
 启动盘路径        : /dev/sda1
 内存              : 75.35 MiB / 190.14 MiB
 Swap              : 17.50 MiB / 256.00 MiB
 系统在线时间      : 0 days, 12 hour 30 min
 负载              : 1.13, 0.44, 0.16
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-22-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 无法检测
 IPV4 ASN          : AS44547 NETUNDWEB TELEKOMUNIKASYON TICARET LIMITED SIRKETI
 IPV4 位置         : Denizli / Denizli / TR
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		572 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		10346.98 MB/s
 单线程写测试:		8706.70 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		13.2 MB/s (3233 IOPS, 7.92s)		35.6 MB/s (8682 IOPS, 2.95s)
 1GB-1M Block		1.0 GB/s (996 IOPS, 1.00s)		1.4 GB/s (1341 IOPS, 0.75s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 32.00 KB/s       (8) | 1.02 MB/s       (15)
Write      | 35.00 KB/s       (8) | 1.09 MB/s       (17)
Total      | 67.00 KB/s      (16) | 2.11 MB/s       (32)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 6.60 MB/s       (12) | 3.28 MB/s        (3)
Write      | 7.37 MB/s       (14) | 4.00 MB/s        (3)
Total      | 13.97 MB/s      (26) | 7.28 MB/s        (6)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA16S31)
Youtube识别地域: 土耳其(TR)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：土耳其
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：土耳其区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: TR)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: TR)
 Amazon Prime Video:			Yes (Region: TR)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Frankfurt 
 Netflix Preferred CDN:			Associated with [RETN Limited] in [Budapest ]
 Spotify Registration:			No
 Steam Currency:			TRY
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【TR】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：0
  匿名代理: Yes
  Tor出口节点: No
  服务器IP: No
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
ip234数据库：
  欺诈分数(越低越好)：11
ip-api数据库:
  手机流量: No
  代理服务: Yes
  数据中心: No
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/07/19 22:03:08 北京电信 219.141.136.12  测试超时
2023/07/19 22:03:08 北京联通 202.106.50.1    测试超时
2023/07/19 22:03:08 北京移动 221.179.155.161 测试超时
2023/07/19 22:03:08 上海电信 202.96.209.133  测试超时
2023/07/19 22:03:08 上海联通 210.22.97.1     测试超时
2023/07/19 22:03:08 上海移动 211.136.112.200 测试超时
2023/07/19 22:03:08 广州电信 58.60.188.222   测试超时
2023/07/19 22:03:08 广州联通 210.21.196.6    测试超时
2023/07/19 22:03:08 广州移动 120.196.165.24  测试超时
2023/07/19 22:03:08 成都电信 61.139.2.69     测试超时
2023/07/19 22:03:08 成都联通 119.6.6.6       测试超时
2023/07/19 22:03:08 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
1.23 ms  *  局域网
20.10 ms  AS44547  土耳其, 布尔萨省, 布尔萨, colocationamerica.com
443.10 ms  *  局域网
0.67 ms  *  局域网
4.77 ms  *  局域网
0.56 ms  *  局域网
0.93 ms  *  局域网
1.37 ms  AS9121  土耳其, 布尔萨省, 布尔萨, turktelekom.com.tr
3.29 ms  AS9121  土耳其, 伊斯坦布尔省, 伊斯坦布尔, turktelekom.com.tr
39.79 ms  AS9121  德国, 黑森州, 法兰克福, turktelekom.com.tr
259.45 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
1.03 ms  *  局域网
6.60 ms  AS44547  土耳其, 布尔萨省, 布尔萨, colocationamerica.com
450.76 ms  *  局域网
1.34 ms  *  局域网
6.39 ms  *  局域网
0.93 ms  *  局域网
1.14 ms  *  局域网
1.56 ms  AS9121  土耳其, 布尔萨省, 布尔萨, turktelekom.com.tr
3.54 ms  AS9121  土耳其, 伊斯坦布尔省, 伊斯坦布尔, turktelekom.com.tr
5.55 ms  AS9121  土耳其, 伊斯坦布尔省, 伊斯坦布尔, turktelekom.com.tr
39.44 ms  AS9121  德国, 黑森州, 法兰克福, turktelekom.com.tr
205.95 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.88 ms  *  局域网
16.97 ms  AS44547  土耳其, 布尔萨省, 布尔萨, colocationamerica.com
0.81 ms  *  局域网
7.75 ms  *  局域网
14.36 ms  *  局域网
1.05 ms  *  局域网
1.42 ms  AS9121  土耳其, 布尔萨省, 布尔萨, turktelekom.com.tr
3.54 ms  AS9121  土耳其, 伊斯坦布尔省, 伊斯坦布尔, turktelekom.com.tr
5.44 ms  AS9121  土耳其, 伊斯坦布尔省, 伊斯坦布尔, turktelekom.com.tr
39.82 ms  AS9121  德国, 黑森州, 法兰克福, turktelekom.com.tr
355.81 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 1628.54 Mbps	 167.17 Mbps	 12.07	  NULL
新加坡		 379.31 Mbps	 560.95 Mbps	 195.62	  0.0%
联通Fuzhou	 349.92 Mbps	 6.28 Mbps	 212.82	  0.0%
联通沈阳	 270.41 Mbps	 4.53 Mbps	 229.04	  0.3%
电信天津5G	 6.16 Mbps	 2.27 Mbps	 213.76	  14.9%
电信合肥5G	 39.66 Mbps	 15.57 Mbps	 286.34	  9.4%
移动杭州5G	 0.06 Mbps	 101.24 Mbps	 355.89	  0.0%
```
