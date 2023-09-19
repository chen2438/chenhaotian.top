---
description: 发布于 2023-09-19
categories:
- vps
date: 2023-09-19
slug: akilecloud-hk-nat
title: AkileCloud 香港 HKT 盲盒 NAT VPS 测评
updated: 
tags: 
- vps
- akilecloud
copyright: true
---

# AkileCloud 香港 HKT 盲盒 NAT VPS 测评

HKTNAT盲盒  共享1IPV4 10个端口，IP无法访问自动换IP

## 规格

HKTNAT-Blind-Box

CPU 1核 ｜ 内存 512 M

硬盘 5 GB ｜ 带宽 100-300M

流量 500-2000G/月 ｜ 超出后限速10Mbps

重置流量 ¥10.00

IPV4 1个 ｜ IPV6 0个

售价￥19.99/月

购买链接（含AFF）：[https://akile.io/shop/server?areaId=3&nodeId=23&planId=255&aff_code=7757a50f-522e-40a9-a088-891f3f581d51](https://akile.io/shop/server?areaId=3&nodeId=23&planId=255&aff_code=7757a50f-522e-40a9-a088-891f3f581d51)

## 测试

动态IP，NAT机，被墙自动更换IP，请考虑服务中断风险并做好 DDNS

非晚高峰测试，不代表晚高峰情况，当前 IP 移动部分地区连通性很差

![image-20230919095146292](https://media.opennet.top/i/2023/09/19/fqh5va-0.png)

![image-20230919095417719](https://media.opennet.top/i/2023/09/19/fs3cnt-0.png)

![image-20230919095429511](https://media.opennet.top/i/2023/09/19/fs5km3-0.png)

![image-20230919095449076](https://media.opennet.top/i/2023/09/19/fs9zn3-0.png)

![image-20230919095040681](https://media.opennet.top/i/2023/09/19/fpusoz-0.png)

```bash
测评频道: https://t.me/vps_reviews                    
版本：2023.09.19
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7551P 32-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 1999.999 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 3.06 GiB / 4.88 GiB
 启动盘路径        : /dev/sda1
 内存              : 95.99 MiB / 454.62 MiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 0 days, 0 hour 2 min
 负载              : 0.12, 0.14, 0.06
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.5.3-x64v3-xanmod1
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS4760 HKT Limited
 IPV4 位置         : Hong Kong / Central and Western / HK
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1365 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		34000.12 MB/s
 单线程写测试:		14712.81 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		22.4 MB/s (5468 IOPS, 4.68s)		47.1 MB/s (11504 IOPS, 2.23s)
 1GB-1M Block		219 MB/s (209 IOPS, 4.78s)		765 MB/s (729 IOPS, 1.37s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
Less than 2GB of space available. Skipping disk test...
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG12S20)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
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
 Netflix Preferred CDN:			Associated with [Netvigator] in [Hong Kong ]
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
欺诈分数(越低越好): 20②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Unknown (Maybe Fixed Line ISP)⑤  isp⑧  business⑨  
  公司类型(company_type):isp①  isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No② ⑥ ⑨ 
  移动网络(mobile):  Yes⑥ 
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
国家: HK 城市: Hong Kong 服务商: AS4760 HKT Limited
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
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.27 ms 	* RFC1918
18.49 ms 	* RFC1918
1.38 ms 	* RFC1918
1.55 ms 	AS4760 [NETVIGATOR] 中国 香港 netvigator.com
2.27 ms 	AS4760 [NETVIGATOR] 中国 香港 netvigator.com
8.42 ms 	* RFC1918
7.34 ms 	AS4134 [CHINANET-BB] 中国 香港 chinatelecom.com.cn 电信
7.20 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 X-I chinatelecom.com.cn 电信
7.66 ms 	AS4134 [CHINANET-BB] 中国 chinatelecom.com.cn 电信
10.82 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
12.82 ms 	AS4134 [APNIC-AP] 中国 广东省 深圳市 chinatelecom.com.cn 电信
 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.31 ms 	* RFC1918
1.50 ms 	* RFC1918
1.89 ms 	* RFC1918
2.96 ms 	AS4760 [NETVIGATOR] 中国 香港 netvigator.com
2.20 ms 	AS4760 [NETVIGATOR] 中国 香港 netvigator.com
3.41 ms 	* RFC1918
3.65 ms 	AS3491 [PCCW-BACKBONE] 韩国 pccwglobal.com
18.34 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
20.38 ms 	AS4837 [CU169-BACKBONE] 中国 北京市 chinaunicom.cn
12.79 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
13.93 ms 	AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.23 ms 	* RFC1918
1.87 ms 	* RFC1918
1.48 ms 	* RFC1918
2.15 ms 	AS4760 [NETVIGATOR] 中国 香港 netvigator.com
2.71 ms 	AS4760 [NETVIGATOR] 中国 香港 netvigator.com
3.98 ms 	* RFC1918
4.09 ms 	* [HKIX-HK] 中国 香港
10.08 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
10.88 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
11.57 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
13.61 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
12.83 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
15.63 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
13.22 ms 	AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 215.00 Mbps	 209.43 Mbps	 1.52	  NULL
中国香港	 214.14 Mbps	 209.16 Mbps	 2.17	  NULL
新加坡		 211.43 Mbps	 209.29 Mbps	 35.51	  0.0%
联通海南	 206.46 Mbps	 209.29 Mbps	 49.73	  NULL
联通Fuzhou	 205.23 Mbps	 212.41 Mbps	 50.03	  0.0%
电信合肥5G	 202.31 Mbps	 208.16 Mbps	 425.34	  0.0%
电信Zhenjiang5G	 191.54 Mbps	 210.60 Mbps	 143.01	  NULL
移动Chengdu	 195.50 Mbps	 163.41 Mbps	 58.19	  0.0%
------------------------------------------------------------------------
 总共花费      : 4 分 43 秒
 时间          : Mon Sep 18 21:28:22 EDT 2023
------------------------------------------------------------------------
```

