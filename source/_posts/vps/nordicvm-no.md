---
description: 发布于 2024-03-16
categories:
- vps
date: 2024-03-16
slug: nordicvm-no
title: NordicVM 挪威 4C4G VPS 测评
updated: 
tags: 
- vps
- nordicvm
copyright: true
---

# NordicVM 挪威 4C4G VPS 测评

买的18欧的CPU变成19欧的。机子使用非常顺畅，商家后台控制面板也很流畅。

IP位置乱飘。

CPU性能不错。

价格过低导致看上去很灵。

支持PayPal

网站：https://client.nordicvm.com/clientarea.php

## 规格

FLASH-4GB-YEAR [NO] [VPS]

```
4GB RAM
75GB SSD Disk Space
4 vCPU Core (Fair Share)
CPU AMD Ryzen 9 5950x
Unlimited Bandwidth
10 GbpsDownload
10Gbps Upload
1x IPv4 address
1x IPv6 address
VPS Control Panel
RDP ALLOWED
```

Starting from €19.19 Annually

## 测试

### IPv4

![image-20240316135906959](https://media.opennet.top/i/2024/03/16/m6mgaj-0.png)

![image-20240316135840503](https://media.opennet.top/i/2024/03/16/m6go02-0.png)

### IPv6

暂无，后期可能添加

### 融合怪

```bash
测评频道: https://t.me/vps_reviews                    
版本：2024.02.22
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 5950X 16-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 3393.624 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 2.00 MB / L3: 256.00 MB
 硬盘空间          : 3.01 GiB / 74.82 GiB
 启动盘路径        : /dev/vda3
 内存              : 378.11 MiB / 3.79 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 18 min
 负载              : 0.27, 0.08, 0.06
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS215780 Nordicvm LTD
 IPV4 位置         : Schenectady County / US-NY
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		5281 Scores
 4 线程测试(多核)得分: 		20796 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		63828.70 MB/s
 单线程写测试:		37185.21 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		69.2 MB/s (16.89 IOPS, 1.52s)		78.8 MB/s (19245 IOPS, 1.33s)
 1GB-1M Block		2.4 GB/s (2294 IOPS, 0.44s)		3.1 GB/s (2965 IOPS, 0.34s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 359.67 MB/s  (89.9k) | 1.88 GB/s    (29.4k)
Write      | 360.62 MB/s  (90.1k) | 1.89 GB/s    (29.6k)
Total      | 720.29 MB/s (180.0k) | 3.78 GB/s    (59.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 2.18 GB/s     (4.2k) | 2.16 GB/s     (2.1k)
Write      | 2.30 GB/s     (4.4k) | 2.31 GB/s     (2.2k)
Total      | 4.48 GB/s     (8.7k) | 4.47 GB/s     (4.3k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS17S06)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：罗马尼亚
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：罗马尼亚区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: NL)
 HotStar:				No
 Disney+:				No
 Netflix:				Yes (Region: RO)
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: RO)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			Amsterdam  
 Spotify Registration:			Yes (Region: NL)
 Steam Currency:			EUR
 ChatGPT:				Yes
 Bing Region:				NL
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: RO 城市: Bucharest 服务商: 
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.10 ms  *  意大利, bzsolutions.it
0.23 ms  AS56655  挪威, 西福尔－泰勒马克郡, 桑讷菲尤尔, terrahost.no
0.22 ms  AS56655  挪威, 西福尔－泰勒马克郡, 桑讷菲尤尔, terrahost.no
9.08 ms  AS6939  挪威, 奥斯陆郡, 奥斯陆, he.net
21.05 ms  AS6939  丹麦, 首都大区, 哥本哈根, he.net
22.16 ms  AS6939  荷兰, 北荷兰省, 阿姆斯特丹, he.net
21.51 ms  AS6939  荷兰, 北荷兰省, 阿姆斯特丹, he.net
21.79 ms  AS6939  荷兰, 北荷兰省, 阿姆斯特丹, he.net
28.28 ms  AS3356  英国, 伦敦, level3.com
28.98 ms  AS4134  英国, 伦敦, chinatelecom.com.cn, 电信
280.96 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
283.26 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.14 ms  *  意大利, bzsolutions.it
0.17 ms  AS56655  挪威, 西福尔－泰勒马克郡, 桑讷菲尤尔, terrahost.no
0.23 ms  AS56655  挪威, 西福尔－泰勒马克郡, 桑讷菲尤尔, terrahost.no
13.97 ms  AS3356  挪威, 奥斯陆郡, 奥斯陆, level3.com
160.30 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
163.89 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
327.89 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
326.32 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
319.00 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
335.15 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
318.69 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.09 ms  *  意大利, bzsolutions.it
0.20 ms  AS56655  挪威, 西福尔－泰勒马克郡, 桑讷菲尤尔, terrahost.no
0.21 ms  AS56655  挪威, 西福尔－泰勒马克郡, 桑讷菲尤尔, terrahost.no
8.99 ms  AS6939  挪威, 奥斯陆郡, 奥斯陆, he.net
21.30 ms  AS6939  荷兰, 北荷兰省, 阿姆斯特丹, he.net
21.67 ms  AS6939  荷兰, 北荷兰省, 阿姆斯特丹, he.net
22.33 ms  AS6939  荷兰, 北荷兰省, 阿姆斯特丹, he.net
28.15 ms  AS6939  英国, 伦敦, he.net
28.56 ms  AS6939  英国, 伦敦, he.net
27.93 ms  AS58453  英国, 伦敦, chinamobile.com, 移动
231.12 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
284.29 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
278.37 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
233.04 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
286.28 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
287.96 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
281.47 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 3698.99 Mbps	 6187.01 Mbps	 19.19	  0.0%
法兰克福	 613.46 Mbps	 932.67 Mbps	 34.83	  0.0%
洛杉矶		 627.03 Mbps	 5619.39 Mbps	 154.48	  2.3%
联通天津5G	 318.84 Mbps	 6.16 Mbps	 299.85	  NULL
联通上海5G	 172.15 Mbps	 1444.46 Mbps	 326.19	  0.0%
电信浙江	 0.40 Mbps	 11.55 Mbps	 269.48	  NULL
------------------------------------------------------------------------
 总共花费      : 5 分 33 秒
 时间          : Sat Mar 16 05:55:44 GMT 2024
------------------------------------------------------------------------
```

### GB5

```bash
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-10-18                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2024-03-16 05:42:12 GMT
净测试时长：1分36秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.14.0-2

处理器信息
  Name                          AMD Ryzen 9 5950X
  Topology                      4 Processors, 4 Cores
  Identifier                    AuthenticAMD Family 25 Model 33 Stepping 2
  Base Frequency                3.39 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      512 KB
  L3 Cache                      64.0 MB

内存信息
  Size                          3.79 GB

单核测试分数：1583
多核测试分数：5399
详细结果链接：https://browser.geekbench.com/v5/cpu/22323333
```

