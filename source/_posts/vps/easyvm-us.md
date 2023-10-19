---
description: 发布于 2023-10-19
categories:
- vps
date: 2023-10-19
slug: easyvm-us
title: EasyVM 达拉斯 VPS 测评
updated: 
tags: 
- vps
- easyvm
copyright: true
---

# EasyVM 达拉斯 VPS 测评

商家正在五折促销

LET原帖：https://lowendtalk.com/discussion/comment/3731149

## 规格

2 Core - 4GB RAM - 50GB SSD - 4TB Bandwidth - ~~10.00/mo~~ 5.00/mo

## 测试

不代表晚高峰情况

### 缝合怪

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.10.09
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2678 v3 @ 2.50GHz
 CPU 核心数        : 2
 CPU 频率          : 2499.984 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 256.00 KB / L3: 30.00 MB
 硬盘空间          : 2.20 GiB / 48.78 GiB
 启动盘路径        : /dev/vda1
 内存              : 186.06 MiB / 3.84 GiB
 Swap              : 0 KiB / 1023.00 MiB
 系统在线时间      : 0 days, 1 hour 4 min
 负载              : 0.79, 0.50, 0.21
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-8-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS398395 Dot-Tech LLC
 IPV4 位置         : Dallas / Texas / US
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		683 Scores
 2 线程测试(多核)得分: 		1287 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		9944.66 MB/s
 单线程写测试:		9495.88 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		5.2 MB/s (1280 IOPS, 19.99s)		20.2 MB/s (4931 IOPS, 5.19s)
 1GB-1M Block		216 MB/s (206 IOPS, 4.86s)		406 MB/s (387 IOPS, 2.58s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 7.91 MB/s     (1.9k) | 83.26 MB/s    (1.3k)
Write      | 7.94 MB/s     (1.9k) | 83.70 MB/s    (1.3k)
Total      | 15.85 MB/s    (3.9k) | 166.97 MB/s   (2.6k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 128.17 MB/s    (250) | 165.99 MB/s    (162)
Write      | 134.98 MB/s    (263) | 177.04 MB/s    (172)
Total      | 263.16 MB/s    (513) | 343.03 MB/s    (334)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  达拉斯(DFW25S40)
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
 YouTube CDN:				Dallas, TX 
 Netflix Preferred CDN:			Dallas, TX  
 Spotify Registration:			No
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
  yandex邮箱: Yes
  qq邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: US 城市: Dallas 服务商: AS398395 Dot-Tech LLC
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     测试超时
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
106.90 ms 	AS398395 美国 德克萨斯州 达拉斯 dot-tech.net
125.87 ms 	AS29802 美国 德克萨斯州 达拉斯 hivelocity.net
103.44 ms 	* RFC1918
21.86 ms 	* RFC1918
1.11 ms 	* RFC1918
1.10 ms 	AS174 美国 德克萨斯州 达拉斯 cogentco.com
1.57 ms 	AS174 [COGENT-BONE] 美国 德克萨斯州 达拉斯 cogentco.com
11.28 ms 	AS174 [COGENT-BONE] 美国 密苏里州 堪萨斯城 cogentco.com
22.54 ms 	AS174 [COGENT-BONE] 美国 科罗拉多州 丹佛 cogentco.com
33.23 ms 	AS174 [COGENT-BONE] 美国 犹他州 盐湖城 cogentco.com
47.38 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 旧金山 cogentco.com
48.48 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 圣何塞 cogentco.com
49.07 ms 	AS174 美国 加利福尼亚州 圣克拉拉 cogentco.com
291.10 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
294.73 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
292.27 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
199.65 ms 	AS4134 [APNIC-AP] 中国 广东省 深圳市 chinatelecom.com.cn 电信
196.26 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
244.87 ms 	AS398395 美国 德克萨斯州 达拉斯 dot-tech.net
2.35 ms 	AS29802 美国 德克萨斯州 达拉斯 hivelocity.net
12.64 ms 	* RFC1918
34.68 ms 	* RFC1918
0.53 ms 	* RFC1918
37.33 ms 	AS3356 美国 加利福尼亚州 洛杉矶 level3.com
33.94 ms 	AS3356 美国 加利福尼亚州 洛杉矶 level3.com
216.19 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
216.78 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
225.19 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
235.45 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
220.90 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
13.97 ms 	AS398395 美国 德克萨斯州 达拉斯 dot-tech.net
6.45 ms 	AS29802 美国 德克萨斯州 达拉斯 hivelocity.net
17.54 ms 	* RFC1918
16.81 ms 	* RFC1918
0.50 ms 	* RFC1918
37.89 ms 	AS3356 美国 加利福尼亚州 洛杉矶 level3.com
38.04 ms 	AS3356 美国 加利福尼亚州 洛杉矶 level3.com
37.83 ms 	AS58453 [CMI-INT] 美国 加利福尼亚州 洛杉矶 cmi.chinamobile.com 移动
202.43 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
201.72 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
201.31 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
302.16 ms 	AS9808 [CMNET] 中国 上海市 chinamobile.com 移动
202.24 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
205.67 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
206.48 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 928.98 Mbps	 940.95 Mbps	 0.56	  0.0%
洛杉矶		 369.42 Mbps	 720.60 Mbps	 47.12	  0.0%
法兰克福	 311.65 Mbps	 4.56 Mbps	 124.42	  0.0%
联通湖南5G	 14.20 Mbps	 7.00 Mbps	 226.38	  NULL
联通Fuzhou	 69.30 Mbps	 14.95 Mbps	 268.91	  0.0%
电信Nanjing5G	 7.89 Mbps	 519.12 Mbps	 173.66	  0.3%
电信Suzhou5G	 327.83 Mbps	 732.79 Mbps	 179.06	  NULL
移动Chengdu	 259.97 Mbps	 918.32 Mbps	 240.46	  0.0%
------------------------------------------------------------------------
 总共花费      : 7 分 55 秒
 时间          : Wed Oct 18 22:07:07 EDT 2023
------------------------------------------------------------------------
```

### GB5

```bash
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-09-06                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2023-10-18 22:11:50 EDT
净测试时长：3分32秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-8-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.0-3.module+el8.7.0+1084+97b81f61

处理器信息
  Name                          Intel Xeon E5-2678 v3
  Topology                      2 Processors, 2 Cores
  Identifier                    GenuineIntel Family 6 Model 63 Stepping 2
  Base Frequency                2.50 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      256 KB
  L3 Cache                      30.0 MB

内存信息
  Size                          3.84 GB

单核测试分数：462
多核测试分数：755
详细结果链接：https://browser.geekbench.com/v5/cpu/21853540
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=Intel%20Xeon%20E5-2678%20v3

个人保存链接：https://browser.geekbench.com/v5/cpu/21853540/claim?key=612208
```

