---
description: 发布于 2023-08-16
categories:
- vps
date: 2023-08-16
slug: cloudflare-cn
title: Cloudflare WARP 中国 IP 测评
updated: 
tags: 
- vps
- cloudflare
- warp
copyright: true
---

# Cloudflare WARP 中国 IP 测评

在一台老旧笔记本上刷了 Ubuntu 系统，使用 proxychains 安装 WARP，并获取 WARP 中国 IP。通过 ping 得知 IPv6 位于美国，而 IPv4 禁 ping。

### 规格

CPU: 2

RAM:  2Gx2

Disk: 1TB SATA SSD

### 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.08.15
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Athlon(tm) II P320 Dual-Core Processor
 CPU 核心数        : 1 物理核心, 2 总核心, 2 总线程数
 CPU 频率          : 1500.000 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 1.00 MB / L3: 0.00 KB
 硬盘空间          : 14.50 GiB / 915.32 GiB
 启动盘路径        : /dev/sda3
 内存              : 759.28 MiB / 2.64 GiB
 Swap              : 188.61 MiB / 5.12 GiB
 系统在线时间      : 0 days, 2 hour 12 min
 负载              : 0.47, 1.32, 1.20
 系统              : Ubuntu 22.04.3 LTS (x86_64)
 AES-NI指令集      : ❌ Disabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.2.0-26-generic
 TCP加速方式       : cubic
 虚拟化架构        : Dedicated
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS13335 Cloudflare, Inc.
 IPV4 位置         : Ningbo /  / CN
 IPV6 ASN          : AS13335 Cloudflare
 IPV6 位置         : Hangzhou / Zhejiang
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		564 Scores
 2 线程测试(多核)得分: 		1037 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		4756.22 MB/s
 单线程写测试:		2820.18 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		9.4 MB/s (2284 IOPS, 11.21s)		17.3 MB/s (4235 IOPS, 6.04s)
 1GB-1M Block		105 MB/s (101 IOPS, 9.95s)		121 MB/s (115 IOPS, 8.66s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 590.00 KB/s    (147) | 5.97 MB/s       (93)
Write      | 619.00 KB/s    (154) | 6.30 MB/s       (98)
Total      | 1.20 MB/s      (301) | 12.27 MB/s     (191)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 10.09 MB/s      (19) | 10.57 MB/s      (10)
Write      | 11.23 MB/s      (21) | 11.61 MB/s      (11)
Total      | 21.32 MB/s      (40) | 22.18 MB/s      (21)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS15S45)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: GIGANET
视频缓存节点地域: KBP(KBP9)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
Netflix在您的出口IP所在的国家不提供服务
[IPv6]
Netflix在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口所在地区即将开通DisneyPlus，尽请期待哦！
[IPv6]
当前IPv6出口所在地区即将开通DisneyPlus，尽请期待哦！
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				No
 Netflix:				No
 YouTube Premium:			No  (Region: CN) 
 Amazon Prime Video:			Yes (Region: CN)
 TVBAnywhere+:				No
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			Failed (CDN IP Not Found)
 Spotify Registration:			No
 Steam Currency:			CNY
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				No
 Netflix:				No
 YouTube Premium:			No  (Region: CN) 
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				GIGANET in Kiev 
 Netflix Preferred CDN:			Failed (CDN IP Not Found)
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Content Delivery Network⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No⑥   Yes⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No①   Yes⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ⑦ ⑧ 
  TOR(tor):  No① ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  匿名代理(anonymous):  No⑦ ⑧   Yes⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 6②
abuse得分(越低越好): 0④
IP类型: Content Delivery Network⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/16 22:00:01 北京电信 219.141.136.12  测试超时
2023/08/16 22:00:01 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/16 22:00:01 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/16 22:00:01 上海电信 202.96.209.133  测试超时
2023/08/16 22:00:01 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/16 22:00:01 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/16 22:00:01 广州电信 58.60.188.222   电信163 [普通线路]           
2023/08/16 22:00:01 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/16 22:00:01 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/16 22:00:01 成都电信 61.139.2.69     电信163 [普通线路]           
2023/08/16 22:00:01 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/16 22:00:01 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
148.93 ms  AS13335  中国, 香港, cloudflare.com
152.21 ms  AS13335  美国, 加利福尼亚州, 圣何塞, cloudflare.com
152.83 ms  AS13335  美国, 加利福尼亚州, 圣何塞, cloudflare.com
162.84 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
304.30 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
308.43 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
161.14 ms  AS13335  中国, 香港, cloudflare.com
157.09 ms  AS13335  美国, 加利福尼亚州, 圣何塞, cloudflare.com
164.14 ms  AS13335  美国, 加利福尼亚州, 圣何塞, cloudflare.com
156.49 ms  AS701  美国, 加利福尼亚州, 圣何塞, verizon.com
156.88 ms  *  美国, 加利福尼亚州, 洛杉矶, verizon.com
483.84 ms  AS701  美国, 加利福尼亚州, 洛杉矶, verizon.com
443.67 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
432.24 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
513.08 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
408.18 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
147.37 ms  AS13335  中国, 香港, cloudflare.com
148.61 ms  AS13335  美国, 加利福尼亚州, 圣何塞, cloudflare.com
147.89 ms  AS13335  美国, 加利福尼亚州, 圣何塞, cloudflare.com
154.46 ms  AS58453  美国, 加利福尼亚州, 圣何塞, chinamobile.com, 移动
149.34 ms  AS58453  美国, 加利福尼亚州, 圣何塞, chinamobile.com, 移动
336.92 ms  AS9808  中国, 上海, chinamobile.com, 移动
332.21 ms  AS9808  中国, 上海, chinamobile.com, 移动
370.83 ms  AS9808  中国, 北京, chinamobile.com, 移动
344.69 ms  AS9808  中国, 北京, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 10.52 Mbps	 13.63 Mbps	 310.51	  2.3%
洛杉矶		 14.61 Mbps	 20.07 Mbps	 395.77	  NULL
日本东京	 15.54 Mbps	 24.99 Mbps	 261.53	  1.5%
联通Fuzhou	 14.35 Mbps	 23.33 Mbps	 568.55	  NULL
联通湖南5G	 11.89 Mbps	 3.84 Mbps	 457.27	  NULL
电信武汉	 11.67 Mbps	 24.24 Mbps	 659.10	  NULL
移动Chengdu	 1.13 Mbps	 0.90 Mbps	 706.35	  39.5%
------------------------------------------------------------------------
 总共花费      : 11 分 38 秒
 时间          : Wed Aug 16 22:05:29 CST 2023
------------------------------------------------------------------------
```

