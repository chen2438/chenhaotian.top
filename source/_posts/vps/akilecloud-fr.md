---
description: 发布于 2023-07-20
categories:
- vps
date: 2023-07-20
slug: akilecloud-fr
title: AkileCloud 法国 NAT VPS 测评
updated: 
tags: 
- vps
- akile
copyright: true
---

# AkileCloud 法国 NAT VPS 测评

AFF：[https://akile.io/shop/server?areaId=9&nodeId=26&planId=102&aff_code=7757a50f-522e-40a9-a088-891f3f581d51](https://akile.io/shop/server?areaId=9&nodeId=26&planId=102&aff_code=7757a50f-522e-40a9-a088-891f3f581d51)

## 规格

FRNAT-盲盒套餐

CPU 1核 ｜ 内存 256 M

硬盘 3 GB ｜ 带宽 500M

流量 1024 G/月 ｜ 超出后限速10Mbps

重置流量 ¥2.00

IPV4 1个 ｜ IPV6 0个

库存 33 台

¥3.88/月

## 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.16
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E3-1230 V2 @ 3.30GHz
 CPU 核心数        : 1
 CPU 频率          : 3292.514 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.40 GiB / 12.63 GiB
 启动盘路径        : /dev/sda1
 内存              : 77.11 MiB / 174.14 MiB
 Swap              : 11.50 MiB / 256.00 MiB
 系统在线时间      : 0 days, 11 hour 24 min
 负载              : 0.30, 0.08, 0.03
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-23-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS12876 SCALEWAY S.A.S.
 IPV4 位置         : Paris / Île-de-France / FR
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1002 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		22047.69 MB/s
 单线程写测试:		17038.24 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		78.7 MB/s (19.21 IOPS, 1.33s)		95.9 MB/s (23416 IOPS, 1.09s)
 1GB-1M Block		4.7 GB/s (4498 IOPS, 0.22s)		6.7 GB/s (6426 IOPS, 0.16s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 83.02 MB/s   (20.7k) | 129.77 MB/s   (2.0k)
Write      | 83.24 MB/s   (20.8k) | 130.46 MB/s   (2.0k)
Total      | 166.26 MB/s  (41.5k) | 260.23 MB/s   (4.0k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 123.80 MB/s    (241) | 123.89 MB/s    (120)
Write      | 130.38 MB/s    (254) | 132.14 MB/s    (129)
Total      | 254.18 MB/s    (495) | 256.03 MB/s    (249)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: PAR(PAR10S47)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：法国
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：法国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				Failed
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: FR)
 Amazon Prime Video:			Yes (Region: FR)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			FR
 Viu.com:				No
 YouTube CDN:				Paris 
 Netflix Preferred CDN:			Paris  
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【FR】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：30
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
黑名单记录统计:(有多少黑名单网站有记录)
  无害记录： 64
  恶意记录： 2
  可疑记录： 0
  未检测到记录： 22
ip234数据库：
  欺诈分数(越低越好)：27
ip-api数据库:
  手机流量: No
  代理服务: No
  数据中心: Yes
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
2023/07/19 21:52:39 北京电信 219.141.136.12  测试超时
2023/07/19 21:52:39 北京联通 202.106.50.1    联通4837[普通线路]           
2023/07/19 21:52:39 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/07/19 21:52:39 上海电信 202.96.209.133  电信163 [普通线路]           
2023/07/19 21:52:39 上海联通 210.22.97.1     联通4837[普通线路]           
2023/07/19 21:52:39 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/07/19 21:52:39 广州电信 58.60.188.222   电信163 [普通线路]           
2023/07/19 21:52:39 广州联通 210.21.196.6    联通4837[普通线路]           
2023/07/19 21:52:39 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/07/19 21:52:39 成都电信 61.139.2.69     电信163 [普通线路]           
2023/07/19 21:52:39 成都联通 119.6.6.6       联通4837[普通线路]           
2023/07/19 21:52:39 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
0.76 ms  *  局域网
0.84 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
0.86 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
0.60 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.59 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
15.44 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
14.34 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
218.78 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.17 ms  *  局域网
0.76 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
0.76 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
0.71 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.43 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
2.10 ms  AS3356  法国, 法兰西岛大区, 巴黎, level3.com
140.55 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
231.13 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
215.99 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
233.49 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
广州移动 120.196.165.24
0.23 ms  *  局域网
0.72 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
0.74 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
0.52 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.48 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.80 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.90 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
10.04 ms  AS58453  英国, 伦敦, chinamobile.com, 移动
251.80 ms  AS58453  中国, 上海, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 944.40 Mbps	 916.29 Mbps	 1.09	  0.0%
新加坡		 592.12 Mbps	 931.05 Mbps	 150.60	  0.0%
中国香港	 442.84 Mbps	 931.38 Mbps	 188.62	  0.0%
------------------------------------------------------------------------
 总共花费      : 5 分 5 秒
 时间          : Wed Jul 19 21:55:35 CST 2023
------------------------------------------------------------------------
```
