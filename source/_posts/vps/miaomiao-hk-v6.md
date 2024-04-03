---
description: 发布于 2024-03-25
categories:
- vps
date: 2024-03-25
slug: miaomiao-hk-v6
title: 喵云 香港 HKIDC IPv6 NAT VPS 测评
updated: 
tags: 
- vps
- miaomiao
copyright: true
---

# 喵云 香港 HKIDC IPv6 NAT VPS 测评

移动直连 共享一个基于DNS64的HKBN IPv4出口 不提供IPv4入口 无技术支持 无退款 购买前请确保掌握基础使用知识

AFF：https://miaomiao.moe/aff.php?aff=147

> DNS64与普通的共享IPv4出口并不一样，请注意
>
> IPv6会跳谷歌验证码

## 规格

HKIDCv6-Nano

```
CPU：1C
RAM：512M
硬盘：10G SSD
带宽：1000M 共享
流量：1000G 双向
1 * /64 香港 IPv6
共享 1* HKBN IPv4 出口 (DNS64)
```

¥9.90CNY 每月

## 测试

### IPv4

IPv4出口为HKBN，当前IP段为`59.148.64.0/18`

![image-20240325192944934](https://media.opennet.top/i/2024/03/25/vlins0-0.png)

![image-20240325192915529](https://media.opennet.top/i/2024/03/25/vlc8wf-0.png)

### IPv6

![image-20240325190339060](https://media.opennet.top/i/2024/03/25/ui70p3-0.png)

![image-20240325193025346](https://media.opennet.top/i/2024/03/25/vlzsc6-0.png)

### 融合怪

```
测评频道: https://t.me/vps_reviews                    
版本：2024.03.20
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2640 v4 @ 2.40GHz
 CPU 核心数        : 1
 CPU 频率          : 2399.996 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 2.11 GiB / 9.50 GiB
 启动盘路径        : /dev/vda1
 内存              : 144.46 MiB / 461.34 MiB
 Swap              : 5.54 MiB / 255.99 MiB
 系统在线时间      : 0 days, 0 hour 16 min
 负载              : 0.63, 0.49, 0.21
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-23-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 无法检测
 IPV4 ASN          : AS9269 Hong Kong Broadband Network Ltd.
 IPV4 位置         : Hong Kong / Hong Kong / HK
 IPV6 ASN          : AS151338 Polonetwork
 IPV6 位置         : Hong Kong
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		933 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		19525.59 MB/s
 单线程写测试:		13635.47 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		72.2 MB/s (17.62 IOPS, 1.45s)		92.9 MB/s (22669 IOPS, 1.13s)
 1GB-1M Block		214 MB/s (204 IOPS, 4.90s)		214 MB/s (204 IOPS, 4.90s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 163.11 MB/s  (40.7k) | 205.76 MB/s   (3.2k)
Write      | 163.54 MB/s  (40.8k) | 206.85 MB/s   (3.2k)
Total      | 326.65 MB/s  (81.6k) | 412.62 MB/s   (6.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 196.44 MB/s    (383) | 193.90 MB/s    (189)
Write      | 206.88 MB/s    (404) | 206.81 MB/s    (201)
Total      | 403.33 MB/s    (787) | 400.71 MB/s    (390)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的网络可能没有正常配置IPv4，或者没有IPv4网络接入
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：香港区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
 以下为IPV6网络测试，若无IPV6网络则无输出
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
 Netflix Preferred CDN:			Failed
 Spotify Registration:			No
 Steam Currency:			HKD
 ChatGPT:				Only Available with Mobile APP
 Bing Region:				HK
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  ① | scamalytics数据库 ②  | virustotal数据库  ③ | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库  ⑥ | ipwhois数据库     ⑦  | ipregistry数据库  ⑧ | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
ipapiis数据库 ⑪ | ipapicom数据库    ⑫  | abstractapi数据库 ⑬ | ipqualityscore数据库 ⑭ 
以下为IPV6检测
IP类型: 
  使用类型(usage_type):isp⑧  business⑨  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No⑥ ⑦ ⑧ ⑨ 
  VPN(vpn):  No⑦ ⑧ 
  TOR(tor):  No⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱：No
欺诈分数(越低越好): 0②  abuse得分(越低越好): 0⑤  威胁等级: low②  
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
纯IPV6网络无法查询
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自nexttrace，请知悉!
广州电信 240e:97c:2f:3000::44
0.47 ms 	AS151338 瑞士
0.34 ms 	* RFC4193
0.45 ms 	* RFC4193
148.90 ms 	AS174 美国 哥伦比亚特区 华盛顿 cogentco.com
151.44 ms 	AS174 美国 加利福尼亚州 旧金山 cogentco.com
429.86 ms 	AS4134 中国 广东 广州 chinatelecom.com.cn 电信
434.46 ms 	AS4134 中国 广东 广州 chinatelecom.com.cn 电信
325.84 ms 	AS4134 中国 广东 广州 chinatelecom.com.cn 电信
* ms 	AS58466 中国 ofidc.com
332.87 ms 	AS58466 中国 ofidc.com
333.66 ms 	AS45090 中国 tencent.com
328.94 ms 	AS45090 中国 tencent.com
318.42 ms 	AS45090 中国 tencent.com
322.00 ms 	AS58466 中国 ofidc.com
广州联通 2408:8756:f50:1001::c
0.28 ms 	AS151338 瑞士
0.34 ms 	* RFC4193
0.66 ms 	* RFC4193
140.05 ms 	AS174 美国 华盛顿州 西雅图 cogentco.com
150.74 ms 	AS701 美国 verizon.com
151.96 ms 	AS701 美国 弗吉尼亚州 阿什本 verizon.com
* ms 	AS701 美国 verizon.com
560.68 ms 	AS4837 中国 北京 chinaunicom.cn 联通
418.57 ms 	AS4837 中国 广东 广州 chinaunicom.cn 联通
371.98 ms 	AS136958 中国 chinaunicom.cn
364.51 ms 	AS136958 中国 chinaunicom.cn
436.43 ms 	AS45090 中国 tencent.com
* ms 	AS45090 中国 tencent.com
372.86 ms 	AS45090 中国 tencent.com
441.63 ms 	AS136958 中国 chinaunicom.cn
广州移动 2409:8c54:871:1001::12
0.32 ms 	AS151338 瑞士
0.51 ms 	* RFC4193
0.48 ms 	* RFC4193
0.99 ms 	* RFC4193
1.41 ms 	AS3356 中国 香港 level3.com
2.65 ms 	AS3356 中国 香港 level3.com
5.77 ms 	AS58453 中国 香港 cmi.chinamobile.com 移动
3.75 ms 	AS58453 中国 香港 cmi.chinamobile.com
12.03 ms 	AS58453 中国 香港 cmi.chinamobile.com
10.86 ms 	AS9808 中国 广东 广州 chinamobile.com 移动
12.01 ms 	AS9808 中国 广东 广州 chinamobile.com 移动
21.19 ms 	AS9808 中国 广东 广州 chinamobile.com 移动
25.42 ms 	AS56040 中国 广东 chinamobile.com
23.76 ms 	AS56040 中国 广东 广州 IDC chinamobile.com 移动
28.79 ms 	AS56040 中国 chinamobile.com
33.49 ms 	AS45090 中国 tencent.com
172.36 ms 	AS45090 中国 tencent.com
25.36 ms 	AS45090 中国 tencent.com
29.26 ms 	AS56040 中国 chinamobile.com
------------------------------------------------------------------------
 总共花费      : 3 分 44 秒
 时间          : Sat Mar 23 22:11:27 EDT 2024
------------------------------------------------------------------------
```
