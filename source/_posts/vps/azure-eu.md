---
description: 发布于 2023-08-11
categories:
- vps
date: 2023-08-11
slug: azure-eu
title: Azure 欧洲区 VPS 测评
updated: 
tags: 
- vps
- azure
copyright: true
---

# Azure 欧洲区 VPS 测评

> 融合怪的路由和线路检测显示名字403，besttrace显示403，有部分是对应的国内DNS的IP屏蔽了的测试IP的问题，也有部分是ipip.net网站的API炸了，最近由于护网行动很多平台和网站都搞东西了，过了这一阵子应该就没事了

可以发现从广州到欧洲地区基本都是走新加坡到法国

## 规格

**映像**

Debian 12 x64 Gen2

**大小**

Standard_B1s - 1 vcpu、1 GiB 内存

**磁盘**

30 GiB 高级 SSD

## North Europe 爱尔兰

![image-20230811201952668](https://media.opennet.top/i/2023/08/11/xee4lk-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz
 CPU 核心数        : 1
 CPU 频率          : 2793.437 MHz
 CPU 缓存          : L1: 48.00 KB / L2: 1.25 MB / L3: 48.00 MB
 硬盘空间          : 911.65 MiB / 29938.92 MiB
 启动盘路径        : /dev/sdb1
 内存              : 212.00 MiB / 862.12 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 14 min
 负载              : 0.32, 0.12, 0.04
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : Dublin / Leinster / IE
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		2114 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		18690.34 MB/s
 单线程写测试:		17431.86 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.0 MB/s (1232 IOPS, 20.79s)		5.1 MB/s (1237 IOPS, 20.69s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.43s)		56.9 MB/s (54 IOPS, 18.43s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (613) | 27.43 MB/s     (428)
Write      | 2.46 MB/s      (617) | 27.84 MB/s     (435)
Total      | 4.92 MB/s     (1.2k) | 55.27 MB/s     (863)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.68 MB/s      (52) | 26.25 MB/s      (25)
Write      | 28.44 MB/s      (55) | 28.91 MB/s      (28)
Total      | 55.13 MB/s     (107) | 55.16 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR48S34)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：爱尔兰
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：爱尔兰区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: IE)
 Netflix:				Yes (Region: IE)
 YouTube Premium:			Yes (Region: IE)
 Amazon Prime Video:			Yes (Region: IE)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				London 
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【IE】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  hosting⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 11:59:52 北京电信 219.141.136.12  电信163 [普通线路]           
2023/08/11 11:59:52 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/11 11:59:52 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/11 11:59:52 上海电信 202.96.209.133  测试超时
2023/08/11 11:59:52 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/11 11:59:52 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/11 11:59:52 广州电信 58.60.188.222   电信163 [普通线路]           
2023/08/11 11:59:52 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/11 11:59:52 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/11 11:59:52 成都电信 61.139.2.69     测试超时
2023/08/11 11:59:52 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/11 11:59:52 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
160.32 ms  AS8075  爱尔兰, 都柏林郡, 都柏林, microsoft.com
161.08 ms  AS8075  英国, 伦敦, microsoft.com
158.39 ms  AS8075  法国, 法兰西岛大区, 巴黎, microsoft.com
158.92 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
159.52 ms  AS8075  新加坡, microsoft.com
160.86 ms  AS8075  新加坡, microsoft.com
159.39 ms  AS8075  新加坡, microsoft.com
159.36 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
206.17 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
205.09 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
209.43 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
212.35 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
159.27 ms  AS8075  爱尔兰, 都柏林郡, 都柏林, microsoft.com
158.60 ms  AS8075  英国, 伦敦, microsoft.com
158.52 ms  AS8075  法国, 法兰西岛大区, 巴黎, microsoft.com
158.59 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
179.37 ms  AS8075  新加坡, microsoft.com
169.49 ms  AS8075  新加坡, microsoft.com
160.38 ms  AS8075  新加坡, microsoft.com
157.92 ms  AS4837  新加坡, chinaunicom.com, 联通
203.78 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
202.03 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
200.16 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
206.53 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
209.14 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
206.10 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
160.25 ms  AS8075  爱尔兰, 都柏林郡, 都柏林, microsoft.com
161.24 ms  AS8075  英国, 伦敦, microsoft.com
158.50 ms  AS8075  法国, 法兰西岛大区, 巴黎, microsoft.com
158.77 ms  http: 403  http: 403
158.46 ms  http: 403  http: 403
157.94 ms  http: 403  http: 403
158.05 ms  http: 403  http: 403
158.51 ms  http: 403  http: 403
193.26 ms  http: 403  http: 403
239.51 ms  http: 403  http: 403
264.21 ms  http: 403  http: 403
265.68 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 961.70 Mbps	 6635.60 Mbps	 0.47	  0.0%
洛杉矶		 960.80 Mbps	 2037.03 Mbps	 144.23	  0.0%
新加坡		 115.93 Mbps	 681.41 Mbps	 166.65	  0.0%
联通海南	 415.44 Mbps	 1837.78 Mbps	 218.15	  NULL
联通Fuzhou	 402.25 Mbps	 1342.97 Mbps	 213.95	  0.0%
电信Zhenjiang5G	 22.62 Mbps	 3532.01 Mbps	 231.91	  NULL
移动杭州5G	 240.81 Mbps	 2740.91 Mbps	 249.63	  0.0%
移动Chengdu	 376.95 Mbps	 112.88 Mbps	 254.37	  0.0%
------------------------------------------------------------------------
 总共花费      : 10 分 51 秒
 时间          : Fri Aug 11 12:05:51 UTC 2023
------------------------------------------------------------------------
```

## Sweden Central 瑞典

![image-20230811202033411](https://media.opennet.top/i/2023/08/11/xevdh9-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
 CPU 核心数        : 1
 CPU 频率          : 2593.907 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 35.75 MB
 硬盘空间          : 911.54 MiB / 29938.92 MiB
 启动盘路径        : /dev/sdb1
 内存              : 212.82 MiB / 862.12 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 16 min
 负载              : 0.59, 0.21, 0.08
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : Gävle / Gävleborg / SE
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		994 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		20332.97 MB/s
 单线程写测试:		16731.02 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1234 IOPS, 20.75s)		5.1 MB/s (1238 IOPS, 20.67s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.44s)		56.9 MB/s (54 IOPS, 18.44s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (613) | 27.40 MB/s     (428)
Write      | 2.47 MB/s      (617) | 27.80 MB/s     (434)
Total      | 4.92 MB/s     (1.2k) | 55.20 MB/s     (862)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.77 MB/s      (52) | 26.30 MB/s      (25)
Write      | 28.43 MB/s      (55) | 28.86 MB/s      (28)
Total      | 55.21 MB/s     (107) | 55.17 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: ARN(ARN09S18)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：瑞典
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：瑞典区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: SE)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: SE)
 Amazon Prime Video:			Yes (Region: SE)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Stockholm 
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【SE】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 12:03:40 北京电信 219.141.136.12  测试超时
2023/08/11 12:03:40 北京联通 202.106.50.1    测试超时
2023/08/11 12:03:40 北京移动 221.179.155.161 测试超时
2023/08/11 12:03:40 上海电信 202.96.209.133  测试超时
2023/08/11 12:03:40 上海联通 210.22.97.1     测试超时
2023/08/11 12:03:40 上海移动 211.136.112.200 测试超时
2023/08/11 12:03:40 广州电信 58.60.188.222   测试超时
2023/08/11 12:03:40 广州联通 210.21.196.6    测试超时
2023/08/11 12:03:40 广州移动 120.196.165.24  测试超时
2023/08/11 12:03:40 成都电信 61.139.2.69     测试超时
2023/08/11 12:03:40 成都联通 119.6.6.6       测试超时
2023/08/11 12:03:40 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
170.64 ms  AS8075  瑞典, 耶夫勒堡省, 耶夫勒市, microsoft.com
173.15 ms  AS8075  瑞典, 耶夫勒堡省, 耶夫勒市, microsoft.com
172.81 ms  AS8075  瑞典, 斯德哥尔摩省, 斯德哥尔摩, microsoft.com
170.11 ms  AS8075  德国, 汉堡州, 汉堡, microsoft.com
170.55 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
171.48 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
171.39 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
170.94 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
172.38 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
170.66 ms  AS8075  新加坡, microsoft.com
170.83 ms  AS8075  新加坡, microsoft.com
172.97 ms  AS8075  新加坡, microsoft.com
169.67 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
217.54 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
227.69 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
229.47 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
228.47 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
172.44 ms  AS8075  瑞典, 耶夫勒堡省, 耶夫勒市, microsoft.com
170.91 ms  AS8075  德国, 汉堡州, 汉堡, microsoft.com
171.93 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
171.62 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
171.27 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
170.49 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
169.90 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
170.56 ms  AS8075  新加坡, microsoft.com
171.28 ms  AS8075  新加坡, microsoft.com
185.34 ms  http: 403  http: 403
252.87 ms  http: 403  http: 403
328.25 ms  http: 403  http: 403
253.18 ms  http: 403  http: 403
252.85 ms  http: 403  http: 403
260.07 ms  http: 403  http: 403
249.85 ms  http: 403  http: 403
广州移动 120.196.165.24
171.67 ms  http: 403  http: 403
170.80 ms  http: 403  http: 403
169.95 ms  http: 403  http: 403
171.28 ms  http: 403  http: 403
170.98 ms  http: 403  http: 403
171.18 ms  http: 403  http: 403
172.93 ms  http: 403  http: 403
171.57 ms  http: 403  http: 403
171.72 ms  http: 403  http: 403
172.34 ms  http: 403  http: 403
171.94 ms  http: 403  http: 403
206.76 ms  http: 403  http: 403
249.77 ms  http: 403  http: 403
250.15 ms  http: 403  http: 403
251.21 ms  http: 403  http: 403
255.62 ms  http: 403  http: 403
274.40 ms  http: 403  http: 403
276.04 ms  http: 403  http: 403
298.70 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 961.50 Mbps	 9466.01 Mbps	 4.68	  0.0%
洛杉矶		 960.95 Mbps	 2477.60 Mbps	 174.31	  0.0%
新加坡		 87.25 Mbps	 790.13 Mbps	 178.42	  0.0%
联通Fuzhou	 312.36 Mbps	 2833.81 Mbps	 264.35	  0.0%
联通海南	 337.55 Mbps	 880.02 Mbps	 267.50	  NULL
电信Zhenjiang5G	 1.35 Mbps	 3130.62 Mbps	 236.55	  NULL
移动杭州5G	 245.62 Mbps	 2607.63 Mbps	 253.14	  0.0%
移动Chengdu	 237.61 Mbps	 13.64 Mbps	 276.90	  0.0%
------------------------------------------------------------------------
 总共花费      : 13 分 53 秒
 时间          : Fri Aug 11 12:12:42 UTC 2023
------------------------------------------------------------------------
```

## UK South 英国

![image-20230811202059693](https://media.opennet.top/i/2023/08/11/xf9lit-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
 CPU 核心数        : 1
 CPU 频率          : 2593.904 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 35.75 MB
 硬盘空间          : 911.54 MiB / 29938.92 MiB
 启动盘路径        : /dev/sdb1
 内存              : 213.52 MiB / 862.12 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 17 min
 负载              : 0.24, 0.10, 0.04
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : London / England / GB
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		994 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		20140.91 MB/s
 单线程写测试:		16720.39 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1234 IOPS, 20.75s)		5.0 MB/s (1230 IOPS, 20.80s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.43s)		56.9 MB/s (54 IOPS, 18.44s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (613) | 27.39 MB/s     (428)
Write      | 2.47 MB/s      (618) | 27.81 MB/s     (434)
Total      | 4.92 MB/s     (1.2k) | 55.20 MB/s     (862)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.60 MB/s      (51) | 26.10 MB/s      (25)
Write      | 28.55 MB/s      (55) | 29.11 MB/s      (28)
Total      | 55.16 MB/s     (106) | 55.22 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS17S11)
Youtube识别地域: 无信息(null)
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
 Dazn:					No
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: GB)
 Amazon Prime Video:			Yes (Region: GB)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			GB
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			GBP
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【GB】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 12:07:34 北京电信 219.141.136.12  测试超时
2023/08/11 12:07:34 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/11 12:07:34 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/11 12:07:34 上海电信 202.96.209.133  测试超时
2023/08/11 12:07:34 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/11 12:07:34 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/11 12:07:34 广州电信 58.60.188.222   电信163 [普通线路]           
2023/08/11 12:07:34 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/11 12:07:34 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/11 12:07:34 成都电信 61.139.2.69     测试超时
2023/08/11 12:07:34 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/11 12:07:34 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
153.03 ms  AS8075  英国, 伦敦, microsoft.com
151.61 ms  AS8075  法国, 法兰西岛大区, 巴黎, microsoft.com
149.67 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
150.45 ms  AS8075  新加坡, microsoft.com
150.85 ms  AS8075  新加坡, microsoft.com
150.93 ms  AS8075  新加坡, microsoft.com
151.59 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
195.36 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
219.88 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
208.12 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
152.20 ms  AS8075  英国, 伦敦, microsoft.com
151.05 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
206.62 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
151.26 ms  AS8075  新加坡, microsoft.com
153.90 ms  AS8075  新加坡, microsoft.com
150.37 ms  AS8075  新加坡, microsoft.com
231.00 ms  AS4837  新加坡, chinaunicom.com, 联通
236.61 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
312.18 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
236.04 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
239.87 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
236.38 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
150.63 ms  AS8075  英国, 伦敦, microsoft.com
154.35 ms  AS8075  法国, 法兰西岛大区, 巴黎, microsoft.com
176.79 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
152.25 ms  AS8075  新加坡, microsoft.com
154.49 ms  AS8075  新加坡, microsoft.com
149.73 ms  http: 403  http: 403
151.33 ms  http: 403  http: 403
180.39 ms  http: 403  http: 403
249.53 ms  http: 403  http: 403
226.98 ms  http: 403  http: 403
229.44 ms  http: 403  http: 403
263.13 ms  http: 403  http: 403
250.15 ms  http: 403  http: 403
277.20 ms  http: 403  http: 403
254.67 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 961.22 Mbps	 9004.43 Mbps	 1.69	  0.0%
洛杉矶		 960.28 Mbps	 3395.11 Mbps	 144.24	  0.0%
新加坡		 172.82 Mbps	 622.89 Mbps	 159.81	  0.0%
联通Fuzhou	 368.43 Mbps	 3021.88 Mbps	 235.82	  0.0%
联通WuXi	 287.09 Mbps	 1805.44 Mbps	 233.04	  0.0%
电信Zhenjiang5G	 2.33 Mbps	 3657.61 Mbps	 225.44	  NULL
移动杭州5G	 267.94 Mbps	 2873.22 Mbps	 237.89	  0.0%
移动Chengdu	 292.73 Mbps	 28.34 Mbps	 241.54	  0.0%
------------------------------------------------------------------------
 总共花费      : 10 分 58 秒
 时间          : Fri Aug 11 12:13:46 UTC 2023
------------------------------------------------------------------------
```

## West Europe 荷兰

![image-20230811204251871](https://media.opennet.top/i/2023/08/11/xs2u97-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
 CPU 核心数        : 1
 CPU 频率          : 2593.907 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 35.75 MB
 硬盘空间          : 911.57 MiB / 29938.92 MiB
 启动盘路径        : /dev/sda1
 内存              : 219.66 MiB / 862.12 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 16 min
 负载              : 0.65, 0.22, 0.08
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : Amsterdam / North Holland / NL
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		991 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		20179.25 MB/s
 单线程写测试:		16694.94 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1235 IOPS, 20.73s)		5.1 MB/s (1235 IOPS, 20.71s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.44s)		56.9 MB/s (54 IOPS, 18.43s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (613) | 27.38 MB/s     (427)
Write      | 2.47 MB/s      (617) | 27.78 MB/s     (434)
Total      | 4.92 MB/s     (1.2k) | 55.16 MB/s     (861)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.61 MB/s      (51) | 26.27 MB/s      (25)
Write      | 28.56 MB/s      (55) | 28.92 MB/s      (28)
Total      | 55.18 MB/s     (106) | 55.20 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS17S11)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：荷兰
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：荷兰区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: NL)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: NL)
 Amazon Prime Video:			Yes (Region: NL)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【NL】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  hosting⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 12:46:18 北京电信 219.141.136.12  测试超时
2023/08/11 12:46:18 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/11 12:46:18 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/11 12:46:18 上海电信 202.96.209.133  测试超时
2023/08/11 12:46:18 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/11 12:46:18 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/11 12:46:18 广州电信 58.60.188.222   测试超时
2023/08/11 12:46:18 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/11 12:46:18 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/11 12:46:18 成都电信 61.139.2.69     测试超时
2023/08/11 12:46:18 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/11 12:46:18 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
154.61 ms  AS8075  荷兰, 北荷兰省, 阿姆斯特丹, microsoft.com
153.75 ms  AS8075  荷兰, 北荷兰省, 阿姆斯特丹, microsoft.com
164.98 ms  AS8075  荷兰, 北荷兰省, 阿姆斯特丹, microsoft.com
153.42 ms  AS8075  美国, 弗吉尼亚州, 阿什本, microsoft.com
153.47 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
154.81 ms  AS8075  新加坡, microsoft.com
153.68 ms  AS8075  新加坡, microsoft.com
160.11 ms  AS8075  新加坡, microsoft.com
230.32 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
232.12 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
234.84 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
245.47 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
155.36 ms  AS8075  荷兰, 北荷兰省, 阿姆斯特丹, microsoft.com
154.30 ms  AS8075  荷兰, 北荷兰省, 阿姆斯特丹, microsoft.com
154.28 ms  AS8075  荷兰, 北荷兰省, 阿姆斯特丹, microsoft.com
153.82 ms  AS8075  美国, 弗吉尼亚州, 阿什本, microsoft.com
153.07 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
153.11 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
152.94 ms  AS8075  新加坡, microsoft.com
232.64 ms  AS4837  新加坡, chinaunicom.com, 联通
240.43 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
242.21 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
234.05 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
243.28 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
270.65 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
236.54 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
154.39 ms  AS8075  荷兰, 北荷兰省, 阿姆斯特丹, microsoft.com
154.38 ms  AS8075  荷兰, 北荷兰省, 阿姆斯特丹, microsoft.com
153.26 ms  http: 403  http: 403
155.48 ms  http: 403  http: 403
154.22 ms  http: 403  http: 403
152.62 ms  http: 403  http: 403
153.60 ms  http: 403  http: 403
152.61 ms  http: 403  http: 403
153.96 ms  http: 403  http: 403
185.35 ms  http: 403  http: 403
229.03 ms  http: 403  http: 403
255.98 ms  http: 403  http: 403
255.75 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 961.04 Mbps	 9870.49 Mbps	 1.96	  0.0%
洛杉矶		 960.87 Mbps	 3153.68 Mbps	 152.27	  0.0%
新加坡		 47.39 Mbps	 868.54 Mbps	 156.05	  0.0%
联通WuXi	 7.74 Mbps	 1380.15 Mbps	 235.26	  0.0%
联通海南	 348.92 Mbps	 1310.61 Mbps	 252.52	  NULL
电信Suzhou5G	 8.06 Mbps	 4440.58 Mbps	 243.52	  NULL
移动杭州5G	 256.55 Mbps	 39.36 Mbps	 256.17	  0.0%
移动陕西5G	 1.79 Mbps	 2429.31 Mbps	 258.77	  0.0%
------------------------------------------------------------------------
 总共花费      : 10 分 52 秒
 时间          : Fri Aug 11 12:52:22 UTC 2023
------------------------------------------------------------------------
```



## Germany West Central 德国

![image-20230811204941783](https://media.opennet.top/i/2023/08/11/xw6nvt-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz
 CPU 核心数        : 1
 CPU 频率          : 2793.439 MHz
 CPU 缓存          : L1: 48.00 KB / L2: 1.25 MB / L3: 48.00 MB
 硬盘空间          : 911.56 MiB / 29938.92 MiB
 启动盘路径        : /dev/sda1
 内存              : 214.85 MiB / 862.11 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 5 min
 负载              : 1.25, 0.41, 0.17
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : Frankfurt am Main / Hesse / DE
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		2118 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		18647.36 MB/s
 单线程写测试:		17559.15 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1235 IOPS, 20.73s)		5.1 MB/s (1236 IOPS, 20.70s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.44s)		57.0 MB/s (54 IOPS, 18.40s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (613) | 27.41 MB/s     (428)
Write      | 2.47 MB/s      (617) | 27.82 MB/s     (434)
Total      | 4.92 MB/s     (1.2k) | 55.24 MB/s     (862)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.71 MB/s      (52) | 26.07 MB/s      (25)
Write      | 28.47 MB/s      (55) | 29.08 MB/s      (28)
Total      | 55.18 MB/s     (107) | 55.15 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA15S37)
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
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【DE】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 12:46:11 北京电信 219.141.136.12  测试超时
2023/08/11 12:46:11 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/11 12:46:11 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/11 12:46:11 上海电信 202.96.209.133  测试超时
2023/08/11 12:46:11 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/11 12:46:11 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/11 12:46:11 广州电信 58.60.188.222   电信163 [普通线路]           
2023/08/11 12:46:11 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/11 12:46:11 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/11 12:46:11 成都电信 61.139.2.69     电信163 [普通线路]           
2023/08/11 12:46:11 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/11 12:46:11 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
151.58 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
151.26 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
150.90 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
152.64 ms  AS8075  新加坡, microsoft.com
151.29 ms  AS8075  新加坡, microsoft.com
151.24 ms  AS8075  新加坡, microsoft.com
151.25 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
190.84 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
193.94 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
207.83 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
151.03 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
149.80 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
151.16 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
150.12 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
150.92 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
149.80 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
152.10 ms  AS8075  新加坡, microsoft.com
151.64 ms  AS8075  新加坡, microsoft.com
151.52 ms  AS8075  新加坡, microsoft.com
228.33 ms  AS4837  新加坡, chinaunicom.com, 联通
242.33 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
233.91 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
320.59 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
238.63 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
233.97 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
180.39 ms  http: 403  http: 403
150.43 ms  http: 403  http: 403
152.01 ms  http: 403  http: 403
151.15 ms  http: 403  http: 403
150.89 ms  http: 403  http: 403
152.83 ms  http: 403  http: 403
180.30 ms  http: 403  http: 403
226.11 ms  http: 403  http: 403
226.77 ms  http: 403  http: 403
227.83 ms  http: 403  http: 403
230.58 ms  http: 403  http: 403
252.59 ms  http: 403  http: 403
250.91 ms  http: 403  http: 403
251.88 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 962.06 Mbps	 7820.56 Mbps	 1.65	  NULL
新加坡		 52.45 Mbps	 650.16 Mbps	 156.50	  0.0%
洛杉矶		 962.90 Mbps	 2747.02 Mbps	 154.37	  0.0%
联通Fuzhou	 333.27 Mbps	 2597.67 Mbps	 233.59	  0.0%
联通WuXi	 344.04 Mbps	 923.97 Mbps	 235.94	  0.0%
电信Suzhou5G	 3.34 Mbps	 4756.34 Mbps	 226.71	  NULL
移动杭州5G	 257.75 Mbps	 3.60 Mbps	 259.23	  0.0%
移动Chengdu	 251.93 Mbps	 13.80 Mbps	 231.68	  0.0%
------------------------------------------------------------------------
 总共花费      : 10 分 25 秒
 时间          : Fri Aug 11 12:51:52 UTC 2023
------------------------------------------------------------------------
```



## France Central 法国

![image-20230811204326902](https://media.opennet.top/i/2023/08/11/xsiwqk-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz
 CPU 核心数        : 1
 CPU 频率          : 2793.491 MHz
 CPU 缓存          : L1: 48.00 KB / L2: 1.25 MB / L3: 48.00 MB
 硬盘空间          : 911.56 MiB / 29938.92 MiB
 启动盘路径        : /dev/sda1
 内存              : 185.07 MiB / 862.12 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 14 min
 负载              : 0.28, 0.10, 0.03
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : Paris / Île-de-France / FR
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		2123 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		18659.38 MB/s
 单线程写测试:		17560.89 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1236 IOPS, 20.71s)		5.0 MB/s (1226 IOPS, 20.87s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.44s)		56.9 MB/s (54 IOPS, 18.44s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (613) | 27.43 MB/s     (428)
Write      | 2.47 MB/s      (617) | 27.84 MB/s     (435)
Total      | 4.92 MB/s     (1.2k) | 55.27 MB/s     (863)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.60 MB/s      (51) | 26.10 MB/s      (25)
Write      | 28.55 MB/s      (55) | 28.99 MB/s      (28)
Total      | 55.16 MB/s     (106) | 55.09 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS15S45)
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
 HotStar:				No
 Disney+:				Yes (Region: FR)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: FR)
 Amazon Prime Video:			Yes (Region: FR)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			FR
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【FR】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  hosting⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 12:46:23 北京电信 219.141.136.12  电信163 [普通线路]           
2023/08/11 12:46:23 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/11 12:46:23 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/11 12:46:23 上海电信 202.96.209.133  测试超时
2023/08/11 12:46:23 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/11 12:46:23 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/11 12:46:23 广州电信 58.60.188.222   测试超时
2023/08/11 12:46:23 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/11 12:46:23 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/11 12:46:23 成都电信 61.139.2.69     电信163 [普通线路]           
2023/08/11 12:46:23 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/11 12:46:23 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
147.88 ms  AS8075  法国, 法兰西岛大区, 巴黎, microsoft.com
145.82 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
144.81 ms  AS8075  新加坡, microsoft.com
145.05 ms  AS8075  新加坡, microsoft.com
148.00 ms  AS8075  新加坡, microsoft.com
145.36 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
189.64 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
200.45 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
201.71 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
146.10 ms  AS8075  法国, 法兰西岛大区, 巴黎, microsoft.com
146.09 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
149.08 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
146.31 ms  AS8075  新加坡, microsoft.com
146.53 ms  AS8075  新加坡, microsoft.com
145.85 ms  AS8075  新加坡, microsoft.com
252.30 ms  AS4837  新加坡, chinaunicom.com, 联通
314.93 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
230.45 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
230.81 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
229.24 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
235.11 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
230.17 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
145.03 ms  AS8075  法国, 法兰西岛大区, 巴黎, microsoft.com
233.27 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
145.03 ms  AS8075  新加坡, microsoft.com
145.00 ms  AS8075  新加坡, microsoft.com
144.90 ms  AS8075  新加坡, microsoft.com
145.19 ms  AS58453  新加坡, chinamobile.com, 移动
224.13 ms  http: 403  http: 403
223.14 ms  http: 403  http: 403
225.62 ms  http: 403  http: 403
270.75 ms  http: 403  http: 403
248.82 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 961.80 Mbps	 5428.35 Mbps	 1.66	  0.0%
洛杉矶		 962.41 Mbps	 1665.95 Mbps	 153.86	  0.0%
新加坡		 43.76 Mbps	 903.93 Mbps	 152.81	  0.0%
联通WuXi	 13.65 Mbps	 8.99 Mbps	 231.84	  0.0%
移动杭州5G	 253.96 Mbps	 2913.04 Mbps	 230.19	  0.0%
移动Chengdu	 459.75 Mbps	 270.34 Mbps	 268.70	  0.0%
------------------------------------------------------------------------
 总共花费      : 12 分 1 秒
 时间          : Fri Aug 11 12:53:35 UTC 2023
------------------------------------------------------------------------
```

## Poland Central 波兰

![image-20230811210225469](https://media.opennet.top/i/2023/08/11/yrnb1s-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
 CPU 核心数        : 1
 CPU 频率          : 2593.908 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 35.75 MB
 硬盘空间          : 911.56 MiB / 29938.92 MiB
 启动盘路径        : /dev/sda1
 内存              : 209.79 MiB / 862.12 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 12 min
 负载              : 0.17, 0.08, 0.03
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : Warsaw / Mazovia / PL
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		989 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		20167.17 MB/s
 单线程写测试:		16718.49 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1234 IOPS, 20.75s)		5.1 MB/s (1237 IOPS, 20.68s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.43s)		56.9 MB/s (54 IOPS, 18.43s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (614) | 27.43 MB/s     (428)
Write      | 2.47 MB/s      (618) | 27.84 MB/s     (435)
Total      | 4.93 MB/s     (1.2k) | 55.27 MB/s     (863)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.61 MB/s      (51) | 26.31 MB/s      (25)
Write      | 28.47 MB/s      (55) | 28.87 MB/s      (28)
Total      | 55.09 MB/s     (106) | 55.18 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS17S11)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：波兰
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：波兰区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: PL)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: PL)
 Amazon Prime Video:			Yes (Region: PL)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			PLN
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【PL】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 13:05:35 北京电信 219.141.136.12  测试超时
2023/08/11 13:05:35 北京联通 202.106.50.1    测试超时
2023/08/11 13:05:35 北京移动 221.179.155.161 测试超时
2023/08/11 13:05:35 上海电信 202.96.209.133  测试超时
2023/08/11 13:05:35 上海联通 210.22.97.1     测试超时
2023/08/11 13:05:35 上海移动 211.136.112.200 测试超时
2023/08/11 13:05:35 广州电信 58.60.188.222   测试超时
2023/08/11 13:05:35 广州联通 210.21.196.6    测试超时
2023/08/11 13:05:35 广州移动 120.196.165.24  测试超时
2023/08/11 13:05:35 成都电信 61.139.2.69     测试超时
2023/08/11 13:05:35 成都联通 119.6.6.6       测试超时
2023/08/11 13:05:35 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
166.90 ms  AS8075  欧洲地区, microsoft.com
168.57 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
167.75 ms  AS8075  德国, 柏林州, 柏林, microsoft.com
167.53 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
166.64 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
167.67 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
166.78 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
165.98 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
167.32 ms  AS8075  新加坡, microsoft.com
166.81 ms  AS8075  新加坡, microsoft.com
168.14 ms  AS8075  新加坡, microsoft.com
165.36 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
260.58 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
261.97 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
270.03 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
327.46 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
166.32 ms  AS8075  欧洲地区, microsoft.com
167.50 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
168.36 ms  AS8075  德国, 柏林州, 柏林, microsoft.com
167.47 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
167.04 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
166.67 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
166.71 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
166.64 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
167.54 ms  AS8075  新加坡, microsoft.com
166.83 ms  AS8075  新加坡, microsoft.com
165.51 ms  AS8075  新加坡, microsoft.com
293.05 ms  AS4837  新加坡, chinaunicom.com, 联通
253.04 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
249.85 ms  http: 403  http: 403
253.42 ms  http: 403  http: 403
331.20 ms  http: 403  http: 403
250.72 ms  http: 403  http: 403
广州移动 120.196.165.24
169.96 ms  http: 403  http: 403
183.87 ms  http: 403  http: 403
167.76 ms  http: 403  http: 403
167.58 ms  http: 403  http: 403
168.50 ms  http: 403  http: 403
166.86 ms  http: 403  http: 403
166.72 ms  http: 403  http: 403
165.75 ms  http: 403  http: 403
168.08 ms  http: 403  http: 403
179.16 ms  http: 403  http: 403
185.28 ms  http: 403  http: 403
171.02 ms  http: 403  http: 403
196.58 ms  http: 403  http: 403
227.51 ms  http: 403  http: 403
229.22 ms  http: 403  http: 403
251.74 ms  http: 403  http: 403
251.50 ms  http: 403  http: 403
253.08 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 957.19 Mbps	 9008.51 Mbps	 0.78	  0.0%
洛杉矶		 960.41 Mbps	 3613.18 Mbps	 169.39	  0.0%
新加坡		 47.45 Mbps	 925.87 Mbps	 171.63	  0.0%
联通WuXi	 527.29 Mbps	 2443.51 Mbps	 254.34	  0.0%
移动杭州5G	 253.67 Mbps	 165.34 Mbps	 233.08	  0.0%
移动Chengdu	 524.63 Mbps	 218.23 Mbps	 234.19	  0.0%
------------------------------------------------------------------------
 总共花费      : 10 分 48 秒
 时间          : Fri Aug 11 13:11:30 UTC 2023
------------------------------------------------------------------------
```



## Norway East 挪威

![image-20230811210237322](https://media.opennet.top/i/2023/08/11/yrpphe-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz
 CPU 核心数        : 1
 CPU 频率          : 2095.077 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 35.75 MB
 硬盘空间          : 911.56 MiB / 29938.92 MiB
 启动盘路径        : /dev/sdb1
 内存              : 221.74 MiB / 862.12 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 10 min
 负载              : 0.66, 0.23, 0.10
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : Oslo / Oslo / NO
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		794 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		16067.58 MB/s
 单线程写测试:		13262.12 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1233 IOPS, 20.76s)		5.1 MB/s (1238 IOPS, 20.67s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.42s)		56.9 MB/s (54 IOPS, 18.44s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (613) | 27.40 MB/s     (428)
Write      | 2.47 MB/s      (617) | 27.81 MB/s     (434)
Total      | 4.92 MB/s     (1.2k) | 55.22 MB/s     (862)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.71 MB/s      (52) | 26.13 MB/s      (25)
Write      | 28.47 MB/s      (55) | 29.03 MB/s      (28)
Total      | 55.18 MB/s     (107) | 55.16 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: ARN(ARN09S18)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：挪威
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：挪威区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: NO)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: NO)
 Amazon Prime Video:			Yes (Region: NO)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Stockholm 
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			NOK
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【NO】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 13:05:35 北京电信 219.141.136.12  测试超时
2023/08/11 13:05:35 北京联通 202.106.50.1    测试超时
2023/08/11 13:05:35 北京移动 221.179.155.161 测试超时
2023/08/11 13:05:35 上海电信 202.96.209.133  测试超时
2023/08/11 13:05:35 上海联通 210.22.97.1     测试超时
2023/08/11 13:05:35 上海移动 211.136.112.200 测试超时
2023/08/11 13:05:35 广州电信 58.60.188.222   测试超时
2023/08/11 13:05:35 广州联通 210.21.196.6    测试超时
2023/08/11 13:05:35 广州移动 120.196.165.24  测试超时
2023/08/11 13:05:35 成都电信 61.139.2.69     测试超时
2023/08/11 13:05:35 成都联通 119.6.6.6       测试超时
2023/08/11 13:05:35 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
170.56 ms  AS8075  挪威, 奥斯陆郡, 奥斯陆, microsoft.com
169.76 ms  AS8075  瑞典, 西约塔兰省, 哥德堡市, microsoft.com
170.57 ms  AS8075  MICROSOFT.COM 骨干网, microsoft.com
238.48 ms  AS8075  巴西, 圣保罗州, 圣保罗, microsoft.com
170.38 ms  AS8075  德国, 汉堡州, 汉堡, microsoft.com
170.36 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
170.57 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
169.63 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
169.91 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
170.41 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
169.89 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
182.92 ms  AS8075  新加坡, microsoft.com
171.11 ms  AS8075  新加坡, microsoft.com
169.68 ms  AS8075  新加坡, microsoft.com
170.87 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
264.79 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
263.85 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
271.14 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
171.46 ms  AS8075  挪威, 奥斯陆郡, 奥斯陆, microsoft.com
170.16 ms  AS8075  挪威, 奥斯陆郡, 奥斯陆, microsoft.com
170.42 ms  AS8075  瑞典, 西约塔兰省, 哥德堡市, microsoft.com
169.85 ms  AS8075  MICROSOFT.COM 骨干网, microsoft.com
170.55 ms  AS8075  巴西, 圣保罗州, 圣保罗, microsoft.com
169.79 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
169.53 ms  AS8075  德国, 黑森州, 法兰克福, microsoft.com
170.44 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
171.91 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
170.96 ms  http: 403  http: 403
171.12 ms  http: 403  http: 403
170.90 ms  http: 403  http: 403
170.25 ms  http: 403  http: 403
171.19 ms  http: 403  http: 403
328.99 ms  http: 403  http: 403
258.17 ms  http: 403  http: 403
250.09 ms  http: 403  http: 403
679.85 ms  http: 403  http: 403
257.05 ms  http: 403  http: 403
253.68 ms  http: 403  http: 403
广州移动 120.196.165.24
169.51 ms  http: 403  http: 403
169.64 ms  http: 403  http: 403
170.13 ms  http: 403  http: 403
169.29 ms  http: 403  http: 403
169.15 ms  http: 403  http: 403
170.78 ms  http: 403  http: 403
169.23 ms  http: 403  http: 403
169.52 ms  http: 403  http: 403
170.05 ms  http: 403  http: 403
169.75 ms  http: 403  http: 403
169.46 ms  http: 403  http: 403
169.71 ms  http: 403  http: 403
169.87 ms  http: 403  http: 403
170.21 ms  http: 403  http: 403
169.63 ms  http: 403  http: 403
209.32 ms  http: 403  http: 403
228.68 ms  http: 403  http: 403
229.54 ms  http: 403  http: 403
253.43 ms  http: 403  http: 403
254.47 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 960.90 Mbps	 7993.26 Mbps	 1.22	  0.0%
洛杉矶		 959.70 Mbps	 3361.22 Mbps	 170.15	  0.0%
新加坡		 74.68 Mbps	 837.12 Mbps	 173.85	  0.0%
联通WuXi	 685.23 Mbps	 4.36 Mbps	 247.45	  0.0%
联通湖南5G	 308.84 Mbps	 9.22 Mbps	 254.53	  NULL
移动杭州5G	 264.28 Mbps	 2859.21 Mbps	 237.95	  0.0%
------------------------------------------------------------------------
 总共花费      : 12 分 26 秒
 时间          : Fri Aug 11 13:13:12 UTC 2023
------------------------------------------------------------------------
```



## Switzerland North 瑞士

![image-20230811210250066](https://media.opennet.top/i/2023/08/11/yrsbtz-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz
 CPU 核心数        : 1
 CPU 频率          : 2294.686 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 256.00 KB / L3: 50.00 MB
 硬盘空间          : 911.57 MiB / 29938.92 MiB
 启动盘路径        : /dev/sdb1
 内存              : 210.33 MiB / 862.11 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 8 min
 负载              : 0.31, 0.16, 0.08
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Microsoft Hyper-V
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS8075 Microsoft Corporation
 IPV4 位置         : Zürich / Zurich / CH
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		761 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		15879.71 MB/s
 单线程写测试:		12348.37 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.1 MB/s (1234 IOPS, 20.74s)		5.1 MB/s (1236 IOPS, 20.70s)
 1GB-1M Block		56.9 MB/s (54 IOPS, 18.44s)		56.9 MB/s (54 IOPS, 18.44s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 2.45 MB/s      (613) | 27.40 MB/s     (428)
Write      | 2.47 MB/s      (617) | 27.80 MB/s     (434)
Total      | 4.92 MB/s     (1.2k) | 55.20 MB/s     (862)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 26.71 MB/s      (52) | 26.29 MB/s      (25)
Write      | 28.47 MB/s      (55) | 28.85 MB/s      (28)
Total      | 55.19 MB/s     (107) | 55.15 MB/s      (53)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR48S34)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：瑞士
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：瑞士区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: CH)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: CH)
 Amazon Prime Video:			Yes (Region: CH)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				London 
 Netflix Preferred CDN:			Associated with [TELXIUS TELXIUS Cable] in [Barranquilla ]
 Spotify Registration:			No
 Steam Currency:			CHF
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【CH】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 9②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):business①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测87 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/11 13:05:45 北京电信 219.141.136.12  测试超时
2023/08/11 13:05:45 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/11 13:05:45 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/11 13:05:45 上海电信 202.96.209.133  测试超时
2023/08/11 13:05:45 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/11 13:05:45 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/11 13:05:45 广州电信 58.60.188.222   电信163 [普通线路]           
2023/08/11 13:05:45 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/11 13:05:45 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/11 13:05:45 成都电信 61.139.2.69     电信163 [普通线路]           
2023/08/11 13:05:45 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/11 13:05:45 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
148.13 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
144.59 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
145.39 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
146.43 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
146.35 ms  AS8075  新加坡, microsoft.com
145.56 ms  AS8075  新加坡, microsoft.com
153.50 ms  AS8075  新加坡, microsoft.com
145.21 ms  AS4134  新加坡, chinatelecom.com.cn, 电信
239.63 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
236.63 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
248.45 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
247.99 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
146.30 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
233.56 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
146.48 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
145.02 ms  AS8075  新加坡, microsoft.com
146.57 ms  AS8075  新加坡, microsoft.com
148.96 ms  AS8075  新加坡, microsoft.com
217.44 ms  AS4837  新加坡, chinaunicom.com, 联通
310.87 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
234.58 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
231.90 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
231.31 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
235.46 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
146.92 ms  AS8075  瑞士, 苏黎世州, 苏黎世, microsoft.com
145.23 ms  AS8075  瑞士, 日内瓦州, 日内瓦, microsoft.com
145.12 ms  AS8075  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, microsoft.com
144.47 ms  http: 403  http: 403
146.83 ms  http: 403  http: 403
176.62 ms  http: 403  http: 403
204.02 ms  http: 403  http: 403
205.18 ms  http: 403  http: 403
227.82 ms  http: 403  http: 403
229.23 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 929.81 Mbps	 5741.90 Mbps	 0.87	  0.0%
新加坡		 102.02 Mbps	 876.79 Mbps	 157.06	  0.0%
洛杉矶		 929.74 Mbps	 3617.98 Mbps	 164.99	  0.0%
联通WuXi	 8.44 Mbps	 1284.98 Mbps	 224.25	  0.0%
联通Fuzhou	 292.99 Mbps	 2273.23 Mbps	 235.46	  0.0%
移动杭州5G	 288.87 Mbps	 34.75 Mbps	 208.62	  0.0%
移动Chengdu	 294.17 Mbps	 302.98 Mbps	 224.07	  0.0%
------------------------------------------------------------------------
 总共花费      : 10 分 25 秒
 时间          : Fri Aug 11 13:11:20 UTC 2023
------------------------------------------------------------------------
```

