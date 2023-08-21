---
description: 发布于 2023-08-19
categories:
- vps
date: 2023-08-19
slug: bigchick-hk
title: 鸡仔云 广港 IPLC NAT VPS 测评
updated: 
tags: 
- vps
- bigchick
- iplc
copyright: true
---

# 鸡仔云 广港 IPLC NAT VPS 测评

入口广州 5 线BGP，出口香港 Ucloud，限速30M，20G流量，20 CNY / 月，目前有 8 折优惠码自行搜索

## 规格

512MB RAM+ 1CORE (可选增加)
3 GB 高效云硬盘@RAID10 (可选增加)
限速**30Mbps**
20 GiB 流量（上行计费，下行免费）
1 共享IPv4+1共享IPv6 (20 端口)

*入口广州5线BGP
*LXC虚拟化
*48H内开通

下单前请确保了解以下信息
**使用本产品需实名认证**
NAT VM 需要一定基础Linux知识，如不懂请勿下单
网速已优化 禁用锐速 KCP BBR等加速

本产品仅供游戏加速使用
**严禁机\*场**

## 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.08.15
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC Processor
 CPU 核心数        : 1
 CPU 频率          : 2894.562 MHz
 CPU 缓存          : L1: 96.00 KB / L2: 512.00 KB / L3: 0.00 KB
 硬盘空间          : 888.52 MiB / 2950.79 MiB
 启动盘路径        : /dev/loop147
 内存              : 89.14 MiB / 512.00 MiB
 Swap              : 10.43 MiB / 1.00 GiB
 系统在线时间      : 0 days, 0 hour 24 min
 负载              : 5.41, 3.43, 3.38
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.107-2-pve
 TCP加速方式       : bbr
 虚拟化架构        : LXC
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS135377 UCLOUD INFORMATION TECHNOLOGY (HK) LIMITED
 IPV4 位置         : Hong Kong / Central and Western / HK
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1487 Scores
 2 线程测试(多核)得分: 		1476 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		39642.93 MB/s
 单线程写测试:		15314.25 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		98.3 MB/s (24.00 IOPS, 1.07s)		161 MB/s (39344 IOPS, 0.65s)
 1GB-1M Block		138 MB/s (132 IOPS, 7.60s)		97.9 MB/s (93 IOPS, 10.71s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Less than 2GB of space available. Skipping disk test...
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：香港
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: HK)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			No
 Steam Currency:			HKD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 68②
abuse得分(越低越好): 3④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  business⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ 
  VPN(vpn):  No① ②   Yes⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  Yes⑦ ⑧   No⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
端口25检测:
  本地: Yes
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱: Yes
  yandex邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/19 13:29:58 北京电信 219.141.136.12  测试超时
2023/08/19 13:29:58 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/19 13:29:58 北京移动 221.179.155.161 测试超时
2023/08/19 13:29:58 上海电信 202.96.209.133  测试超时
2023/08/19 13:29:58 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/19 13:29:58 上海移动 211.136.112.200 测试超时
2023/08/19 13:29:58 广州电信 58.60.188.222   测试超时
2023/08/19 13:29:58 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/19 13:29:58 广州移动 120.196.165.24  测试超时
2023/08/19 13:29:58 成都电信 61.139.2.69     测试超时
2023/08/19 13:29:58 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/19 13:29:58 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
0.32 ms  *  局域网
0.91 ms  *  局域网
0.65 ms  *  局域网
0.86 ms  *  局域网
3.55 ms  *  局域网
1.15 ms  *  局域网
1.93 ms  AS10099  中国, 香港, chinaunicom.com, 联通
3.68 ms  AS10099  中国, 香港, chinaunicom.com, 联通
4.09 ms  *  中国, 香港, chinaunicom.com, 联通
2.44 ms  *  中国, 香港, chinaunicom.com, 联通
5.26 ms  AS10099  中国, 香港, chinaunicom.com, 联通
13.74 ms  AS4837  中国, 北京, chinaunicom.com, 联通
16.39 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
6.81 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
14.18 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
7.95 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
11.01 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
14.06 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.14 ms  *  局域网
0.22 ms  *  局域网
0.44 ms  *  局域网
0.81 ms  *  局域网
0.98 ms  *  局域网
3.07 ms  *  中国, 香港, chinaunicom.com, 联通
5.91 ms  http: 403  http: 403
3.87 ms  AS10099  中国, 香港, chinaunicom.com, 联通
9.16 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
10.27 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
10.41 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
15.49 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
14.65 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
11.73 ms  http: 403  http: 403
广州移动 120.196.165.24
0.09 ms  http: 403  http: 403
0.14 ms  http: 403  http: 403
0.70 ms  http: 403  http: 403
0.68 ms  http: 403  http: 403
0.78 ms  http: 403  http: 403
2.03 ms  http: 403  http: 403
1.78 ms  http: 403  http: 403
1.53 ms  http: 403  http: 403
13.92 ms  http: 403  http: 403
13.34 ms  http: 403  http: 403
10.89 ms  http: 403  http: 403
12.50 ms  http: 403  http: 403
57.48 ms  http: 403  http: 403
65.99 ms  http: 403  http: 403
190.86 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 18.16 Mbps	 30.22 Mbps	 1.44	  0.0%
中国香港	 30.96 Mbps	 30.34 Mbps	 2.47	  0.0%
新加坡		 31.14 Mbps	 30.31 Mbps	 36.75	  0.0%
联通Fuzhou	 28.75 Mbps	 6.01 Mbps	 85.87	  9.5%
联通湖南5G	 27.34 Mbps	 2.49 Mbps	 19.57	  NULL
电信Zhenjiang5G	 26.68 Mbps	 3.64 Mbps	 46.32	  NULL
电信Suzhou5G	 26.68 Mbps	 2.79 Mbps	 49.10	  NULL
移动陕西5G	 30.77 Mbps	 30.21 Mbps	 85.00	  0.0%
移动Chengdu	 24.33 Mbps	 30.19 Mbps	 223.14	  9.0%
------------------------------------------------------------------------
 总共花费      : 6 分 39 秒
 时间          : Sat Aug 19 13:35:17 CST 2023
------------------------------------------------------------------------
```
