---
description: 发布于 2023-09-06
categories:
- vps
date: 2023-09-06
slug: hypernat-hk
title: HyperNAT 香港 WTT NAT VPS 测评
updated: 
tags: 
- vps
- hypernat
copyright: true
---

# HyperNAT 香港 WTT NAT VPS 测评

9月6日正式开业的新商家，现已开通香港WTT NAT VPS一期，原生香港动态IP，解锁当地流媒体，三网直连，到内地速度优秀，线路质量优于普通HKBN

## 规格

WTT1-NAT-VPS 512M

1共享原生IPv4（20个自选端口）

独享/60 IPv6段（非原生）

包含1备份+1快照

1 Core CPU

512MB RAM

10GB（企业级Nvme） 硬盘

300Mbps 带宽

1TB 流量

¥19.99 CNY 每月

> 为了帮助我们更好的提升服务质量，我们诚邀新用户填写我们提供的调查问卷，
> 完成答题后至少可获得￥12无门槛优惠券+新用户￥25季付优惠券+新用户年付循环八折优惠券（后两者二选一使用）
> 优质回答大概率获得额外奖励！
> 调查问卷链接：https://forms.office.com/r/Y0a8UrSVYq

## 测试

注意是 NAT 机，请综合考虑、谨慎购买。

![](https://media.opennet.top/i/2023/09/06/12gbarr-0.png)

![image-20230906233558087](https://media.opennet.top/i/2023/09/06/12mszec-0.png)

```
测评频道: https://t.me/vps_reviews                    
版本：2023.08.26
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2697 v3 @ 2.60GHz
 CPU 核心数        : 1
 CPU 频率          : 2593.992 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 256.00 KB / L3: 35.00 MB
 硬盘空间          : 2.90 GiB / 9.51 GiB
 启动盘路径        : /dev/vda1
 内存              : 162.59 MiB / 454.27 MiB
 Swap              : 18.36 MiB / 1024.00 MiB
 系统在线时间      : 0 days, 0 hour 2 min
 负载              : 0.41, 0.27, 0.11
 系统              : Ubuntu 22.04.3 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-83-generic
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS9381 HKBN Enterprise Solutions HK Limited
 IPV4 位置         : Hong Kong / Central and Western / HK
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		959 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		19042.21 MB/s
 单线程写测试:		15543.24 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		43.8 MB/s (10.69 IOPS, 2.40s)		70.8 MB/s (17292 IOPS, 1.48s)
 1GB-1M Block		484 MB/s (462 IOPS, 2.16s)		1.7 GB/s (1625 IOPS, 0.62s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 127.29 MB/s  (31.8k) | 1.14 GB/s    (17.8k)
Write      | 127.63 MB/s  (31.9k) | 1.15 GB/s    (17.9k)
Total      | 254.92 MB/s  (63.7k) | 2.29 GB/s    (35.8k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 1.62 GB/s     (3.1k) | 1.66 GB/s     (1.6k)
Write      | 1.71 GB/s     (3.3k) | 1.77 GB/s     (1.7k)
Total      | 3.34 GB/s     (6.5k) | 3.44 GB/s     (3.3k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 香港(HK)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS15S45)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：美国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				Yes (Region: HK)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			HKD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			San Jose, CA  
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
欺诈分数(越低越好): 19②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Fixed Line ISP⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  isp⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No② ⑥ ⑨ 
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
  qq邮箱：No
  outlook邮箱: Yes
  yandex邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS9381 HKBN Enterprise Solutions HK Limited
北京电信 219.141.136.12  电信163 [普通线路]           
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
2023/09/06 15:18:39 测试完成!
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.47 ms 	* [RFC1918] 局域网
1.43 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
2.14 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
2.05 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
2.21 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
6.87 ms 	AS4134 [CHINANET-BB] 中国 香港 chinatelecom.com.cn 电信
* ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 I-C chinatelecom.com.cn 电信
108.91 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
109.79 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
14.29 ms 	AS4134 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.com.cn 电信
12.56 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.53 ms 	* [RFC1918] 局域网
2.41 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
1.55 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
2.70 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
2.28 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
4.11 ms 	AS4837 [CU169-BACKBONE] 中国 北京市 chinaunicom.cn 联通
7.71 ms 	AS4837 [CU169-BACKBONE] 中国 山西省 太原市 chinaunicom.cn 联通
14.34 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
15.00 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
9.07 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
13.98 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
16.21 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
12.94 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.54 ms 	* [RFC1918] 局域网
2.29 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
2.09 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
2.66 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
2.73 ms 	AS9381 [HKBNES-HK] 中国 香港 hkbnes.net
3.27 ms 	AS4788 马来西亚 吉隆坡联邦直辖区 吉隆坡 tm.com.my
50.54 ms 	* 新加坡
61.19 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
43.79 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
51.24 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
44.43 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
46.23 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
47.38 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
46.49 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 432.18 Mbps	 591.35 Mbps	 1.89	  NULL
中国香港	 411.85 Mbps	 591.68 Mbps	 2.04	  NULL
新加坡		 424.85 Mbps	 591.31 Mbps	 35.39	  0.0%
联通Fuzhou	 293.05 Mbps	 261.42 Mbps	 20.87	  0.7%
联通郑州5G	 400.38 Mbps	 395.80 Mbps	 30.82	  NULL
电信Suzhou5G	 409.16 Mbps	 392.71 Mbps	 32.41	  NULL
移动Chengdu	 423.06 Mbps	 569.48 Mbps	 59.37	  2.0%
移动Lanzhou	 427.71 Mbps	 212.37 Mbps	 120.59	  NULL
------------------------------------------------------------------------
 总共花费      : 5 分 45 秒
 时间          : Wed Sep  6 15:22:48 UTC 2023
------------------------------------------------------------------------
```
