---
description: 发布于 2023-08-29
categories:
- vps
date: 2023-08-29
slug: globalvm-mn
title: GlobalVM 蒙古 WARP NAT VPS 测评
updated: 
tags: 
- vps
- globalvm
copyright: true
---

# GlobalVM 蒙古 WARP NAT VPS 测评

宿主机位于香港，使用 WARP 获取蒙古 IP

## 规格

亚洲-512M

PU：1c
RAM：512M
硬盘：10G SSD
流量：350G单向
共享带宽 无任何保证
1独立IPv6入口+1共享IPv4出口

## 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.08.26
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
 CPU 核心数        : 1
 CPU 频率          : 2397.222 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.44 GiB / 9.81 GiB
 启动盘路径        : /dev/sda1
 内存              : 96.79 MiB / 475.55 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 5 min
 负载              : 0.64, 0.56, 0.26
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-11-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS13335 Cloudflare, Inc.
 IPV4 位置         : Ulan Bator / Ulaanbaatar / MN
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		565 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		12367.89 MB/s
 单线程写测试:		7878.02 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		4.1 MB/s (1002 IOPS, 25.56s)		4.1 MB/s (1003 IOPS, 25.50s)
 1GB-1M Block		106 MB/s (101 IOPS, 9.90s)		106 MB/s (100 IOPS, 9.90s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
dd Sequential Disk Speed Tests:
---------------------------------
       | Test 1      | Test 2      | Test 3      | Avg        
       |             |             |             |            
Write  | 65.8 MB/s   | 65.9 MB/s   | 65.9 MB/s   | 65.87  MB/s
Read   | 106 MB/s    | 106 MB/s    | 106 MB/s    | 106.00 MB/s
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 捷克 布拉格(PRG03S08)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 捷克 布拉格(PRG03S08)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：蒙古
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
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
 Netflix:				Yes (Region: MN)
 YouTube Premium:			No 
 Amazon Prime Video:			Yes (Region: MN)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				
 Spotify Registration:			Yes (Region: MN)
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【MN】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 11②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Content Delivery Network⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ②   Yes⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑦ ⑧   Yes⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/29 13:33:04 北京电信 219.141.136.12  电信163 [普通线路]           
2023/08/29 13:33:04 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/29 13:33:04 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/29 13:33:04 上海电信 202.96.209.133  电信163 [普通线路]           
2023/08/29 13:33:04 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/29 13:33:04 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/29 13:33:04 广州电信 58.60.188.222   电信163 [普通线路]           
2023/08/29 13:33:04 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/29 13:33:04 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/29 13:33:04 成都电信 61.139.2.69     电信163 [普通线路]           
2023/08/29 13:33:04 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/29 13:33:04 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
10.22 ms 	* [RFC1918] 局域网
2.63 ms 	* United States of America Texas Dallas
73.00 ms 	AS13335 [CLOUDFLARENET] 中国 香港 cloudflare.com
4.63 ms 	AS13335 [CLOUDFLARENET] 中国 香港 cloudflare.com
162.38 ms 	AS1299 [ARELION-NET] 美国 加利福尼亚州 圣何塞 arelion.com
162.37 ms 	AS4134 [CHINANET-US] 美国 加利福尼亚州 圣何塞 Cogent/Telia-CT-PoP chinatelecom.com.cn 电信
* ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
318.42 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
* ms 	AS4134 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.com.cn 电信
321.54 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.51 ms 	* [RFC1918] 局域网
3.35 ms 	* United States of America Texas Dallas
5.61 ms 	AS13335 [CLOUDFLARENET] 中国 香港 cloudflare.com
13.95 ms 	AS13335 [CLOUDFLARENET] 中国 香港 cloudflare.com
160.25 ms 	AS1299 [ARELION-NET] 法国 普罗旺斯-阿尔卑斯-蓝色海岸大区 马赛 arelion.com
191.49 ms 	AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
177.60 ms 	AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
333.46 ms 	AS4837 [CU169-BACKBONE] 德国 黑森州 美茵河畔法兰克福 chinaunicom.cn 联通
340.91 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
388.94 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
424.58 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
395.58 ms 	AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
330.09 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
372.63 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.27 ms 	* [RFC1918] 局域网
2.46 ms 	* United States of America Texas Dallas
3.48 ms 	AS13335 [CLOUDFLARENET] 中国 香港 cloudflare.com
4.43 ms 	AS13335 [CLOUDFLARENET] 中国 香港 cloudflare.com
9.17 ms 	AS6453 [TATA-COMMUNICATIONS] 中国 香港 tatacommunications.com
5.18 ms 	AS6453 [TATA-COMMUNICATIONS] 中国 香港 tatacommunications.com
5.13 ms 	AS6453 [TATA-COMMUNICATIONS] 中国 香港 tatacommunications.com
4.98 ms 	AS2914 [NTT-GLOBAL] 中国 香港 ntt.net
13.68 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
11.39 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
12.85 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
167.24 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
15.43 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
171.21 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
16.19 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
21.79 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
中国香港	 312.40 Mbps	 267.02 Mbps	 1.84	  0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 59 秒
 时间          : Tue Aug 29 13:36:03 UTC 2023
------------------------------------------------------------------------
```
