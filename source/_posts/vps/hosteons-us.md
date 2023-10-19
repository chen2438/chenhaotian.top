---
description: 发布于 2023-10-19
categories:
- vps
date: 2023-10-19
slug: hosteons-us
title: HostEONS Windows & 美国 Google One 测评
updated: 
tags: 
- vps
- hosteons
copyright: true
---

# HostEONS Windows & 美国 Google One 测评

测试环境：WSL2 with Ubuntu 22.04 on Windows Server 2022

## 规格

Dedicated CPU1 vCore (Ryzen 3950x) (5950x)

RAM 4096 GB

NVME Disk Space 25 GB

BANDWIDTH 15 TB

Location Salt Lake City

## 测试

不代表晚高峰情况

### GB5

可观察到存在部分性能损失

```bash
Geekbench 5 测试结果

系统信息
  Operating System              Ubuntu 22.04.1 LTS
  Kernel                        Linux 5.15.90.1-microsoft-standard-WSL2 x86_64
  Model                         N/A
  Motherboard                   N/A

处理器信息
  Name                          AMD Ryzen 9 5950X
  Topology                      1 Processor, 1 Core
  Identifier                    AuthenticAMD Family 25 Model 33 Stepping 2
  Base Frequency                3.39 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      512 KB
  L3 Cache                      64.0 MB

内存信息
  Size                          1.86 GB

单核测试分数：1377
多核测试分数：1394
详细结果链接：https://browser.geekbench.com/v5/cpu/21853537
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%205950X

个人保存链接：https://browser.geekbench.com/v5/cpu/21853537/claim?key=638230
```

### Google One OFF

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.10.09
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 5950X 16-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 3393.597 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 512.00 KB / L3: 32.00 MB
 硬盘空间          : 1.21 GiB / 1006.85 GiB
 启动盘路径        : /dev/sdc
 内存              : 311.44 MiB / 1.86 GiB
 Swap              : 0 KiB / 1.00 GiB
 系统在线时间      : 0 days, 0 hour 13 min
 负载              : 0.00, 0.06, 0.06
 系统              : Ubuntu 22.04.1 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.90.1-microsoft-standard-WSL2
 TCP加速方式       : cubic
 虚拟化架构        : Dedicated
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS142036 Hosteons Pte. Ltd.
 IPV4 位置         : Los Angeles / California / US
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		4757 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		30622.36 MB/s
 单线程写测试:		22366.08 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		29.0 MB/s (7087 IOPS, 3.61s)		28.3 MB/s (6906 IOPS, 3.71s)
 1GB-1M Block		4.2 GB/s (3985 IOPS, 0.25s)		2.5 GB/s (2349 IOPS, 0.43s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 21.39 MB/s    (5.3k) | 335.41 MB/s   (5.2k)
Write      | 21.40 MB/s    (5.3k) | 337.18 MB/s   (5.2k)
Total      | 42.80 MB/s   (10.7k) | 672.59 MB/s  (10.5k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.48 GB/s     (2.9k) | 1.11 GB/s     (1.0k)
Write      | 1.56 GB/s     (3.0k) | 1.18 GB/s     (1.1k)
Total      | 3.05 GB/s     (5.9k) | 2.30 GB/s     (2.2k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: NUQ(NUQ04S38)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
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
 Netflix:				Originals Only
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				
 Netflix Preferred CDN:			Los Angeles, CA  
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
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱：No
  yandex邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: US 城市: Los Angeles 服务商: AS142036 Hosteons Pte. Ltd.
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
0.66 ms 	* RFC1918
0.46 ms 	AS26042 美国 犹他州 盐湖城 FiberState, LLC
12.01 ms 	AS174 [COGENT-BONE] 美国 犹他州 盐湖城 cogentco.com
12.10 ms 	AS174 [COGENT-BONE] 美国 犹他州 盐湖城 cogentco.com
17.10 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 旧金山 cogentco.com
17.28 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 圣何塞 cogentco.com
18.34 ms 	AS174 美国 加利福尼亚州 圣克拉拉 cogentco.com
173.92 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
174.84 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
178.59 ms 	AS4134 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.com.cn 电信
176.40 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.76 ms 	* RFC1918
0.68 ms 	AS26042 美国 犹他州 盐湖城 FiberState, LLC
2.56 ms 	AS6939 [HURRICANE-1] 美国 犹他州 盐湖城 he.net
116.71 ms 	AS6939 [HURRICANE-11] 美国 加利福尼亚州 洛杉矶 he.net
199.77 ms 	AS6939 美国 加利福尼亚州 洛杉矶 HE-CU-POP-100GE he.net
190.04 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
198.80 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
214.24 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
193.04 ms 	AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
184.11 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
197.38 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
 	
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 4156.31 Mbps	 2843.37 Mbps	 1.14	  0.0%
洛杉矶		 2372.05 Mbps	 657.44 Mbps	 17.19	  0.0%
日本东京	 879.32 Mbps	 366.66 Mbps	 122.53	  NULL
联通WuXi	 180.62 Mbps	 693.96 Mbps	 194.66	  0.0%
联通郑州5G	 414.82 Mbps	 288.99 Mbps	 210.69	  NULL
电信Zhenjiang5G	 394.50 Mbps	 641.49 Mbps	 151.10	  NULL
电信Nanjing5G	 60.59 Mbps	 327.93 Mbps	 147.01	  0.0%
移动Chengdu	 539.13 Mbps	 394.08 Mbps	 345.93	  0.3%
------------------------------------------------------------------------
 总共花费      : 6 分 36 秒
 时间          : Thu Oct 19 09:33:55 CST 2023
------------------------------------------------------------------------
```

### Google One ON

```
测评频道: https://t.me/vps_reviews                    
版本：2023.10.09
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 5950X 16-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 3393.597 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 512.00 KB / L3: 32.00 MB
 硬盘空间          : 1.21 GiB / 1006.85 GiB
 启动盘路径        : /dev/sdc
 内存              : 314.90 MiB / 1.86 GiB
 Swap              : 0 KiB / 1.00 GiB
 系统在线时间      : 0 days, 0 hour 4 min
 负载              : 0.21, 0.06, 0.02
 系统              : Ubuntu 22.04.1 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.90.1-microsoft-standard-WSL2
 TCP加速方式       : cubic
 虚拟化架构        : Dedicated
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS36492 Google, LLC
 IPV4 位置         : New York City / New York / US
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		4780 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		29430.11 MB/s
 单线程写测试:		21954.92 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		34.6 MB/s (8444 IOPS, 3.03s)		37.8 MB/s (9239 IOPS, 2.77s)
 1GB-1M Block		2.8 GB/s (2678 IOPS, 0.37s)		2.4 GB/s (2320 IOPS, 0.43s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 20.84 MB/s    (5.2k) | 325.54 MB/s   (5.0k)
Write      | 20.85 MB/s    (5.2k) | 327.26 MB/s   (5.1k)
Total      | 41.70 MB/s   (10.4k) | 652.80 MB/s  (10.1k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 923.96 MB/s   (1.8k) | 971.08 MB/s    (948)
Write      | 973.05 MB/s   (1.9k) | 1.03 GB/s     (1.0k)
Total      | 1.89 GB/s     (3.7k) | 2.00 GB/s     (1.9k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: LGA(LGA25S82)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
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
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				New York, NY 
 Netflix Preferred CDN:			New York, NY  
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
欺诈分数(越低越好): 2②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):business①  business⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No② ⑥ ⑨ 
  移动网络(mobile):  Yes⑥ 
  代理(proxy):  No① ②   Yes⑥ ⑦ ⑧ ⑨ 
  VPN(vpn):  No①   Yes② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  Yes⑦ ⑧   No⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  Yes①   No⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  qq邮箱：No
  outlook邮箱: Yes
  yandex邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: US 城市: New York City 服务商: AS36492 Google, LLC
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    测试超时
北京移动 221.179.155.161 测试超时
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     测试超时
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    测试超时
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.88 ms 	* RFC1918
49.85 ms 	AS36492 美国 纽约州 纽约
48.44 ms 	* 美国 加利福尼亚州 山景城 Google
48.61 ms 	AS15169 [GOOGLE] 美国 纽约州 纽约 google.com
287.17 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
 	
广州移动 120.196.165.24
0.52 ms 	* RFC1918
49.60 ms 	AS36492 美国 纽约州 纽约
49.47 ms 	* 美国 加利福尼亚州 山景城 Google
48.89 ms 	AS15169 [GOOGLE] 美国 纽约州 纽约 google.com
49.87 ms 	AS15169 [GOOGLE] 美国 纽约州 纽约 google.com
66.10 ms 	AS15169 [GOOGLE] 美国 伊利诺伊州 芝加哥 google.com
79.43 ms 	AS15169 [GOOGLE] 美国 德克萨斯州 达拉斯 google.com
85.49 ms 	AS15169 [GOOGLE] 美国 德克萨斯州 达拉斯 google.com
85.60 ms 	AS15169 [GOOGLE] 美国 德克萨斯州 达拉斯 google.com
113.82 ms 	AS15169 [GOOGLE] 美国 加利福尼亚州 洛杉矶 google.com
120.07 ms 	AS15169 [GOOGLE] 美国 加利福尼亚州 洛杉矶 google.com
121.49 ms 	AS15169 [GOOGLE] 美国 加利福尼亚州 洛杉矶 google.com
119.46 ms 	AS15169 [GOOGLE] 美国 加利福尼亚州 洛杉矶 google.com
121.37 ms 	AS15169 [GOOGLE] 美国 加利福尼亚州 洛杉矶 google.com
121.47 ms 	AS58453 [CMI-INT] 美国 加利福尼亚州 洛杉矶 cmi.chinamobile.com 移动
306.55 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
260.69 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
284.70 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
287.02 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
290.50 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
304.47 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 147.97 Mbps	 142.19 Mbps	 51.10	  NULL
洛杉矶		 189.19 Mbps	 150.31 Mbps	 114.08	  0.0%
法兰克福	 150.79 Mbps	 147.53 Mbps	 127.64	  0.0%
联通WuXi	 259.52 Mbps	 105.96 Mbps	 275.34	  0.0%
电信合肥5G	 11.83 Mbps	 23.45 Mbps	 301.92	  0.0%
电信天津	 9.19 Mbps	 120.50 Mbps	 278.74	  NULL
移动Chengdu	 148.12 Mbps	 122.66 Mbps	 304.86	  0.0%
------------------------------------------------------------------------
 总共花费      : 7 分 59 秒
 时间          : Thu Oct 19 09:25:49 CST 2023
------------------------------------------------------------------------
```

### Google One 流媒体解锁

```bash
 ** 测试时间: Thu Oct 19 09:42:29 CST 2023

 ** 正在测试IPv4解锁情况
--------------------------------
 ** 您的网络为: Google One VPN (162.120.*.*)


============[ Multination ]============
 Dazn:                                  Yes (Region: US)
 HotStar:                               Yes (Region: US)
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: US)
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 Viu.com:                               No
 YouTube CDN:                           Chicago, IL
 Netflix Preferred CDN:                 New York, NY
 Spotify Registration:                  Yes (Region: US)
 Steam Currency:                        USD
 ChatGPT:                               Yes
=======================================
==============[ Taiwan ]===============
 KKTV:                                  No
 LiTV:                                  No
 MyVideo:                               No
 4GTV.TV:                               No
 LineTV.TW:                             No
 Hami Video:                            No
 CatchPlay+:                            No
 HBO GO Asia:                           No
 Bahamut Anime:                         Failed (Network Connection)
 Bilibili Taiwan Only:                  No
=======================================
=============[ Hong Kong ]=============
 Now E:                                 Failed (Unexpected Result: )
 Viu.TV:                                No
 MyTVSuper:                             No
 HBO GO Asia:                           No
 BiliBili Hongkong/Macau/Taiwan:        No
=======================================
===============[ Japan ]===============
 DMM:                                   Yes
 DMM TV:                                No
 Abema.TV:                              Oversea Only
 Niconico:                              No
 music.jp:                              No
 Telasa:                                No
 U-NEXT:                                Failed (Network Connection)
 Hulu Japan:                            No
 TVer:                                  Failed (Network Connection)
 GYAO!:                                 Yes
 WOWOW:                                 Failed
 VideoMarket:                           Failed (Unexpected Result: 404)
 FOD(Fuji TV):                          No
 Radiko:                                No
 Karaoke@DAM:                           No
 J:com On Demand:                       No
 ---Game---
 Kancolle Japan:                        No
 Pretty Derby Japan:                    Yes
 Konosuba Fantastic Days:               No
 Princess Connect Re:Dive Japan:        Yes
 World Flipper Japan:                   Yes
 Project Sekai: Colorful Stage:         Yes
=======================================
===========[ North America ]===========
 FOX:                                   Yes
 Hulu:                                  Failed
 NFL+:                                  Yes
 ESPN+:[Sponsored by Jam]               Yes
 Epix:                                  Yes
 Starz:                                 Yes
 Philo:                                 Yes
 FXNOW:                                 Yes
 TLC GO:                                Yes
 HBO Max:                               Yes
 Shudder:                               Yes
 BritBox:                               Yes
 Crackle:                               Yes
 CW TV:                                 Yes
 A&E TV:                                No
 NBA TV:                                Yes
 NBC TV:                                Yes
 Fubo TV:                               No
 Tubi TV:                               Yes
 Sling TV:                              Yes
 Pluto TV:                              Yes
 Acorn TV:                              Yes
 SHOWTIME:                              Yes
 encoreTVB:                             Yes
 Funimation:                            Yes (Region: US)
 Discovery+:                            Yes
 Paramount+:                            Yes
 Peacock TV:                            Yes
 Popcornflix:                           Yes
 Crunchyroll:                           Yes
 KBS American:                          Failed (Network Connection)
 KOCOWA:                                Yes
 Maths Spot:                            Failed
 ---CA---
 CBC Gem:                               No
 Crave:                                 Yes
=======================================
===========[ South America ]===========
 Star+:                                 CDN Relay Available
 HBO Max:                               Yes
 DirecTV Go:                            Yes (Region: CO)
 Funimation:                            Yes (Region: US)
=======================================
===============[ Europe ]==============
 Rakuten TV:                            Yes
 Funimation:                            Yes (Region: US)
 SkyShowTime:                           No
 HBO Max:                               Yes
 Maths Spot:                            Failed
 ---GB---
 Sky Go:                                Yes
 BritBox:                               Yes
 ITV Hub:                               No
 Channel 4:                             No
 Channel 5:                             No
 BBC iPLAYER:                           No
 Discovery+ UK:                         No
 ---FR---
 Salto:                                 Failed (Network Connection)
 Canal+:                                No
 Molotov:                               No
 ---DE---
 Joyn:                                  No
 Sky:                                   No
 ZDF:                                   No
 ---NL---
 NLZIET:                                Failed
 videoland:                             Failed (Network Connection)
 NPO Start Plus:                        No
 ---ES---
 PANTAYA:                               Failed (Network Connection)
 ---IT---
 Rai Play:                              Yes
 ---RU---
 Amediateka:                            Yes
=======================================
==============[ Oceania ]==============
 NBA TV:                                Yes
 Acorn TV:                              Yes
 SHOWTIME:                              Yes
 BritBox:                               Yes
 Funimation:                            Yes (Region: US)
 Paramount+:                            Yes
 ---AU---
 Stan:                                  Yes
 Binge:                                 Failed (Network Connection)
 Docplay:                               No
 7plus:                                 No
 Channel 9:                             No
 Channel 10:                            No
 ABC iView:                             No
 Kayo Sports:                           No
 Optus Sports:                          No
 SBS on Demand:                         No
 ---NZ---
 Neon TV:                               Yes
 SkyGo NZ:                              No
 ThreeNow:                              No
 Maori TV:                              Yes
=======================================
==============[ Korean ]===============
 Wavve:                                 No
 Tving:                                 No
 Coupang Play:                          No
 Naver TV:                              No
 Afreeca TV:                            Yes
 KBS Domestic:                          Failed (Network Connection)
=======================================
当前主机不支持IPv6,跳过...

本次测试已结束，感谢使用此脚本

检测脚本当天运行次数: 1433; 共计运行次数: 7493137
```

