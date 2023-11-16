---
description: 发布于 2023-11-16
categories:
- vps
date: 2023-11-16
slug: colocrossing-ny
title: ColoCrossing 纽约 3C4G VPS 测评
updated: 
tags: 
- vps
- colocrossing
copyright: true
---

# ColoCrossing 纽约 3C4G VPS 测评

CPU还不错

官网：https://cloud.colocrossing.com

## 规格

```
4GB Black Friday KVM VPS

4GB RAM
3vCPU
60GB SSD
1Gbps Unmetered Bandwidth
1 x IPv4
```

## 测试

![image-20231116091815670](https://media.opennet.top/i/2023/11/16/f6nnqv-0.png)

![image-20231116091844775](https://media.opennet.top/i/2023/11/16/f6uan2-0.png)

```
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Gold 5220R CPU @ 2.20GHz
 CPU 核心数        : 3
 CPU 频率          : 2199.998 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 2.00 MB / L3: 35.75 MB
 硬盘空间          : 1.82 GiB / 54.52 GiB
 启动盘路径        : /dev/vda1
 内存              : 194.09 MiB / 3.82 GiB
 Swap              : 0 KiB / 4.50 GiB
 系统在线时间      : 0 days, 0 hour 3 min
 负载              : 0.38, 0.26, 0.11
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS36352 ColoCrossing
 IPV4 位置         : Buffalo / New York / US
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		953 Scores
 3 线程测试(多核)得分: 		2837 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		19419.41 MB/s
 单线程写测试:		15916.36 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		22.3 MB/s (5455 IOPS, 4.69s)		42.2 MB/s (10304 IOPS, 2.48s)
 1GB-1M Block		396 MB/s (377 IOPS, 2.65s)		1.1 GB/s (1010 IOPS, 0.99s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 22.65 MB/s    (5.6k) | 306.19 MB/s   (4.7k)
Write      | 22.66 MB/s    (5.6k) | 307.81 MB/s   (4.8k)
Total      | 45.32 MB/s   (11.3k) | 614.00 MB/s   (9.5k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 535.90 MB/s   (1.0k) | 620.66 MB/s    (606)
Write      | 564.38 MB/s   (1.1k) | 661.99 MB/s    (646)
Total      | 1.10 GB/s     (2.1k) | 1.28 GB/s     (1.2k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  西雅图(SEA09S34)
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
 Dazn:					Yes (Region: US)
 HotStar:				No
 Disney+:				No
 Netflix:				No
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Seattle, WA 
 Netflix Preferred CDN:			Failed
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: US 城市: Buffalo 服务商: AS36352 ColoCrossing
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    测试超时
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.87 ms 	AS36352 美国 纽约州 布法罗 virmach.com
0.75 ms 	* RFC1918
0.57 ms 	* RFC1918
1.35 ms 	* RFC1918
0.64 ms 	AS1299 [ARELION-NET] 美国 纽约州 水牛城 arelion.com
11.07 ms 	AS1299 [ARELION-NET] 美国 纽约州 纽约 arelion.com
9.93 ms 	AS1299 [ARELION-NET] 美国 纽约州 纽约 arelion.com
17.58 ms 	AS4134 [CHINANET-US] 美国 新泽西州 纽瓦克 CT-POP chinatelecom.com.cn 电信
73.14 ms 	AS4134 [CHINANET-BB] 美国 加利福尼亚州 洛杉矶 chinatelecom.com.cn 电信
* ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
227.14 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
327.67 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
231.53 ms 	AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
231.25 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.97 ms 	AS36352 美国 纽约州 布法罗 virmach.com
0.76 ms 	* RFC1918
0.57 ms 	* RFC1918
0.67 ms 	* RFC1918
0.51 ms 	AS1299 [ARELION-NET] 美国 纽约州 水牛城 arelion.com
11.10 ms 	AS1299 [ARELION-NET] 美国 纽约州 纽约 arelion.com
17.24 ms 	AS1299 [ARELION-NET] 美国 纽约州 纽约 arelion.com
72.11 ms 	AS1299 [ARELION-NET] 美国 加利福尼亚州 洛杉矶 arelion.com
广州移动 120.196.165.24
0.91 ms 	AS36352 美国 纽约州 布法罗 virmach.com
0.77 ms 	* RFC1918
2.40 ms 	* RFC1918
3.42 ms 	* RFC1918
0.58 ms 	AS1299 [ARELION-NET] 美国 纽约州 水牛城 arelion.com
10.97 ms 	AS1299 [ARELION-NET] 美国 纽约州 纽约 arelion.com
79.17 ms 	AS1299 [ARELION-NET] 美国 加利福尼亚州 圣何塞 arelion.com
70.25 ms 	AS1299 [ARELION-NET] 美国 加利福尼亚州 圣何塞 Telia-CMI-Peer arelion.com
70.12 ms 	AS58453 [CMI-INT] 美国 加利福尼亚州 圣何塞 cmi.chinamobile.com 移动
234.96 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
228.51 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
234.40 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
234.54 ms 	AS9808 [CMNET] 中国 上海市 chinamobile.com 移动
239.27 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
240.22 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
235.22 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 262.42 Mbps	 122.38 Mbps	 38.21	  0.0%
洛杉矶		 164.56 Mbps	 847.68 Mbps	 92.02	  1.3%
法兰克福	 292.39 Mbps	 258.63 Mbps	 95.15	  0.0%
联通郑州5G	 122.58 Mbps	 254.29 Mbps	 228.95	  NULL
联通湖南5G	 20.85 Mbps	 11.88 Mbps	 258.22	  NULL
电信Nanjing5G	 90.90 Mbps	 398.74 Mbps	 207.31	  0.0%
电信Suzhou5G	 237.43 Mbps	 365.31 Mbps	 214.21	  NULL
移动硬核通信	 1.88 Mbps	 3.23 Mbps	 253.81	  NULL
------------------------------------------------------------------------
 总共花费      : 7 分 19 秒
 时间          : Wed Nov 15 20:21:32 EST 2023
------------------------------------------------------------------------
```

```
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-09-06                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2023-11-15 20:24:55 EST
净测试时长：2分30秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.0-4.module_el8.8.0+3612+f18d2b89

处理器信息
  Name                          Intel(R) Xeon(R) Gold 5220R CPU @ 2.20GHz
  Topology                      3 Processors, 3 Cores
  Identifier                    GenuineIntel Family 6 Model 85 Stepping 7
  Base Frequency                2.20 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      35.8 MB

内存信息
  Size                          3.82 GB

单核测试分数：733
多核测试分数：2061
详细结果链接：https://browser.geekbench.com/v5/cpu/21953050
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=Intel%20Xeon%20Gold%205220R
```

## Google One 成功运行

![image-20231116094048714](https://media.opennet.top/i/2023/11/16/fjyb28-0.png)
