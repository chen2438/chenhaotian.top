---
description: 发布于 2023-11-12
categories:
- vps
date: 2023-11-12
slug: moecloud-gb
title: MoeCloud 英国 CN2 GIA VPS 测评
updated: 
tags: 
- vps
- moecloud
copyright: true
---

# MoeCloud 英国 CN2 GIA VPS 测评

官网：https://lite.moe/

UK CN2 GIA，联通电信双程CN2 GIA，移动回程CN2 GIA。不做流媒体解锁保证。

## 规格

```
MoeCloud SJC/UK双区域 2023双11特促

常规套餐 月付低至7折 年付低至6折
（依据区域不同，折扣有所差异。除限量折扣外均无需优惠码，以实际支付价格为准）

特别套餐：299.4CNY每年起
Special Plan mini
1 vCPU
512M DDR4 RAM
10GB SSD Raid1 Hardware
500G(IN&OUT) 流量
1000Mbps 带宽
1 IPv4

299.4CNY/yr
使用 
GG0MO5TCZ5
优惠码后，Special Plan mini套餐（SJC与UK区域均适用）额外再减50CNY
折后 249.4CNY/yr
优惠为循环折扣，限量20个。
（使用此优惠码后，修改邮箱以及Push本产品将会导致优惠在下个周期失效）
```

订购地址

UK：https://lite.moe/index.php/store/uk-cn2-gia-super
SJC：https://lite.moe/index.php/store/sjc-cn2-gia-super

UK LG: https://lon.cn2.lg.lite.moe/
SJC LG: https://sjc.cn2.lg.lite.moe/

## 测试

![image-20231112171209394](https://media.opennet.top/i/2023/11/12/sbcmnr-0.png)

![image-20231112171244791](https://media.opennet.top/i/2023/11/12/sbkcdq-0.png)

```
测评频道: https://t.me/vps_reviews                    
版本：2023.11.07
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Core Processor (Broadwell)
 CPU 核心数        : 1
 CPU 频率          : 2299.984 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.39 GiB / 9.33 GiB
 启动盘路径        : /dev/sda2
 内存              : 95.11 MiB / 461.34 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 8 min
 负载              : 0.41, 0.10, 0.03
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-26-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS41378 Kirino LLC
 IPV4 位置         : London / England / GB
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		863 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		18140.49 MB/s
 单线程写测试:		12762.58 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		37.2 MB/s (9089 IOPS, 2.82s)		45.4 MB/s (11076 IOPS, 2.31s)
 1GB-1M Block		1.1 GB/s (1005 IOPS, 1.00s)		1.2 GB/s (1139 IOPS, 0.88s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 43.97 MB/s   (10.9k) | 528.19 MB/s   (8.2k)
Write      | 44.04 MB/s   (11.0k) | 530.97 MB/s   (8.2k)
Total      | 88.02 MB/s   (22.0k) | 1.05 GB/s    (16.5k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 525.97 MB/s   (1.0k) | 518.80 MB/s    (506)
Write      | 553.91 MB/s   (1.0k) | 553.35 MB/s    (540)
Total      | 1.07 GB/s     (2.1k) | 1.07 GB/s     (1.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR25S41)
Youtube识别地域: 英国(GB)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：英国
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：英国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: GB)
 HotStar:				Yes (Region: GB)
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: GB)
 Amazon Prime Video:			Yes (Region: GB)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			GB
 Viu.com:				No
 YouTube CDN:				London 
 Netflix Preferred CDN:			London  
 Spotify Registration:			No
 Steam Currency:			GBP
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
欺诈分数(越低越好): 35②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测88 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: GB 城市: London 服务商: AS41378 Kirino LLC
北京电信 219.141.136.12  电信CN2 [优质线路]           
北京联通 202.106.50.1    电信CN2 [优质线路]           
北京移动 221.179.155.161 电信CN2 [优质线路]           
上海电信 202.96.209.133  电信CN2 [优质线路]           
上海联通 210.22.97.1     电信CN2 [优质线路]           
上海移动 211.136.112.200 电信CN2 [优质线路]           
广州电信 58.60.188.222   电信CN2 [优质线路]           
广州联通 210.21.196.6    电信CN2 [优质线路]           
广州移动 120.196.165.24  电信CN2 [优质线路]           
成都电信 61.139.2.69     电信CN2 [优质线路]           
成都联通 119.6.6.6       电信CN2 [优质线路]           
成都移动 211.137.96.205  电信CN2 [优质线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
22.18 ms 	* RFC1918
12.13 ms 	* RFC1918
12.18 ms 	AS4809 [CTE-NET] 德国 黑森州 美因河畔法兰克福 chinatelecom.com.cn 电信
12.57 ms 	AS23764 德国 黑森州 美因河畔法兰克福 chinatelecomglobal.com 电信
147.34 ms 	AS23764 德国 黑森州 美因河畔法兰克福 chinatelecomglobal.com 电信
180.81 ms 	* [CN2-BackBone] 中国 北京市 chinatelecom.cn 电信
176.81 ms 	* [CN2-BackBone] 中国 北京市 chinatelecom.cn 电信
195.78 ms 	* [CN2-BackBone] 中国 广东省 广州市 chinatelecom.cn 电信
196.36 ms 	* [CN2-BackBone] 中国 广东省 广州市 chinatelecom.cn 电信
195.73 ms 	AS4134 中国 广东省 佛山市 chinatelecom.com.cn 电信
194.92 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
7.64 ms 	* RFC1918
12.16 ms 	* RFC1918
12.20 ms 	AS4809 [CTE-NET] 德国 黑森州 美因河畔法兰克福 chinatelecom.com.cn 电信
12.47 ms 	AS23764 德国 黑森州 美因河畔法兰克福 chinatelecomglobal.com 电信
146.91 ms 	AS23764 德国 黑森州 美因河畔法兰克福 chinatelecomglobal.com 电信
178.13 ms 	* [CN2-BackBone] 中国 北京市 chinatelecom.cn 电信
176.61 ms 	* [CN2-BackBone] 中国 北京市 chinatelecom.cn 电信
194.32 ms 	* [CN2-BackBone] 中国 广东省 广州市 chinatelecom.cn 电信
244.25 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
250.76 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn
270.23 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
248.82 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
246.67 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
21.80 ms 	* RFC1918
12.24 ms 	* RFC1918
12.21 ms 	AS4809 [CTE-NET] 德国 黑森州 美因河畔法兰克福 chinatelecom.com.cn 电信
12.58 ms 	AS23764 德国 黑森州 美因河畔法兰克福 chinatelecomglobal.com 电信
146.65 ms 	AS23764 德国 黑森州 美因河畔法兰克福 chinatelecomglobal.com 电信
142.72 ms 	* [CN2-BackBone] 中国 北京市 chinatelecom.cn 电信
178.76 ms 	* [CN2-BackBone] 中国 北京市 chinatelecom.cn 电信
377.16 ms 	AS4134 [CHINANET-BB] 中国 北京市 chinatelecom.com.cn 电信
215.11 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
228.95 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
237.12 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
230.09 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 1183.35 Mbps	 888.59 Mbps	 0.36	  0.0%
法兰克福	 1180.50 Mbps	 580.65 Mbps	 13.22	  0.0%
洛杉矶		 312.64 Mbps	 491.58 Mbps	 146.34	  0.0%
联通湖南5G	 169.06 Mbps	 250.51 Mbps	 240.49	  NULL
联通WuXi	 18.08 Mbps	 370.62 Mbps	 225.52	  0.0%
电信Suzhou5G	 322.42 Mbps	 382.40 Mbps	 183.95	  NULL
电信Nanjing5G	 201.54 Mbps	 373.23 Mbps	 178.15	  0.0%
移动硬核通信	 159.84 Mbps	 299.92 Mbps	 237.82	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 21 秒
 时间          : Sun Nov 12 09:10:55 UTC 2023
------------------------------------------------------------------------
```

```
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-09-06                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2023-11-12 09:17:11 UTC
净测试时长：2分58秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-26-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.15.0-1

处理器信息
  Name                          Intel Core Processor (Broadwell)
  Topology                      1 Processor, 1 Core
  Identifier                    GenuineIntel Family 6 Model 61 Stepping 2
  Base Frequency                2.30 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      4.00 MB
  L3 Cache                      16.0 MB

内存信息
  Size                          461 MB

单核测试分数：668
多核测试分数：673
详细结果链接：https://browser.geekbench.com/v5/cpu/21939403
```

