---
description: 发布于 2023-07-19
categories:
- vps
date: 2023-07-19
slug: greencloud-gb
title: GreenCloud 绿云 英国 考文垂 VPS 测评
updated: 
tags: 
- vps
- greencloud
copyright: true
---

# GreenCloud 绿云 英国 考文垂 VPS 测评

AFF：https://greencloudvps.com/billing/aff.php?aff=5581

CPU 拉跨

解锁奈飞、ChatGPT

### 规格

计算：1C 2G 20G 

网络：2TB 1Gbps

无中国大陆优化

### 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.16
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2698 v4 @ 2.20GHz
 CPU 核心数        : 1
 CPU 频率          : 2199.938 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 12.95 GiB / 18.67 GiB
 启动盘路径        : /dev/vda1
 内存              : 324.23 MiB / 1.93 GiB
 Swap              : 10.43 MiB / 3.00 GiB
 系统在线时间      : 1 days, 22 hour 22 min
 负载              : 1.56, 0.44, 0.15
 系统              : Ubuntu 20.04.6 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.4.0-153-generic
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS42831 UK Dedicated Servers Limited
 IPV4 位置         : Coventry / England / GB
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		485 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		10628.05 MB/s
 单线程写测试:		7299.64 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		13.2 MB/s (3219 IOPS, 7.95s)		16.8 MB/s (4105 IOPS, 6.24s)
 1GB-1M Block		939 MB/s (896 IOPS, 1.12s)		1.1 GB/s (1044 IOPS, 0.96s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 70.39 MB/s   (17.5k) | 401.39 MB/s   (6.2k)
Write      | 70.57 MB/s   (17.6k) | 403.50 MB/s   (6.3k)
Total      | 140.97 MB/s  (35.2k) | 804.89 MB/s  (12.5k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 318.00 MB/s    (621) | 525.65 MB/s    (513)
Write      | 334.90 MB/s    (654) | 560.66 MB/s    (547)
Total      | 652.91 MB/s   (1.2k) | 1.08 GB/s     (1.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR25S41)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
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
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: GB)
 YouTube Premium:			Yes
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
 Tiktok Region:		【GB】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：49
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
ip234数据库：
  欺诈分数(越低越好)：14
ip-api数据库:
  手机流量: Yes
  代理服务: No
  数据中心: Yes
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/07/19 20:24:52 北京电信 219.141.136.12  测试超时
2023/07/19 20:24:52 北京联通 202.106.50.1    联通4837[普通线路]           
2023/07/19 20:24:52 北京移动 221.179.155.161 测试超时
2023/07/19 20:24:52 上海电信 202.96.209.133  电信163 [普通线路]           
2023/07/19 20:24:52 上海联通 210.22.97.1     联通4837[普通线路]           
2023/07/19 20:24:52 上海移动 211.136.112.200 测试超时
2023/07/19 20:24:52 广州电信 58.60.188.222   电信163 [普通线路]           
2023/07/19 20:24:52 广州联通 210.21.196.6    联通4837[普通线路]           
2023/07/19 20:24:52 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/07/19 20:24:52 成都电信 61.139.2.69     电信163 [普通线路]           
2023/07/19 20:24:52 成都联通 119.6.6.6       联通4837[普通线路]           
2023/07/19 20:24:52 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
3.91 ms  AS42831  英国, 西米德兰兹郡, 考文垂, ukservers.com
6.22 ms  AS42831  英国, 西米德兰兹郡, 考文垂, ukservers.com
5.32 ms  AS174  英国, 伦敦, cogentco.com
5.80 ms  AS174  英国, 伦敦, cogentco.com
58.91 ms  AS174  英国, 伦敦, cogentco.com
297.78 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
306.56 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
299.65 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
309.40 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
310.66 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.80 ms  AS42831  英国, 西米德兰兹郡, 考文垂, ukservers.com
4.68 ms  AS42831  英国, 伦敦, ukservers.com
5.46 ms  AS3257  英国, 伦敦, gtt.net
32.69 ms  AS3257  德国, 黑森州, 法兰克福, gtt.net
225.54 ms  AS4837  德国, 黑森州, 法兰克福, chinaunicom.com, 联通
231.32 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
239.36 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
236.54 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
234.40 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
18.89 ms  AS42831  英国, 西米德兰兹郡, 考文垂, ukservers.com
4.74 ms  AS42831  英国, 西米德兰兹郡, 考文垂, ukservers.com
5.32 ms  AS174  英国, 伦敦, cogentco.com
6.55 ms  AS174  英国, 伯克郡, 斯劳, cogentco.com
6.39 ms  AS174  英国, 伯克郡, 斯劳, cogentco.com
6.18 ms  AS174  英国, 伯克郡, 斯劳, cogentco.com
248.60 ms  AS58453  中国, 上海, chinamobile.com, 移动
249.55 ms  AS9808  中国, 上海, chinamobile.com, 移动
249.35 ms  AS9808  中国, 上海, chinamobile.com, 移动
239.52 ms  AS9808  中国, 上海, chinamobile.com, 移动
261.42 ms  AS9808  中国, 北京, chinamobile.com, 移动
261.83 ms  AS9808  中国, 北京, chinamobile.com, 移动
263.55 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 756.71 Mbps	 1186.04 Mbps	 1.41	  0.0%
新加坡		 498.48 Mbps	 1606.91 Mbps	 192.95	  0.0%
中国香港	 358.05 Mbps	 524.37 Mbps	 245.33	  0.0%
联通WuXi	 488.63 Mbps	 8.06 Mbps	 252.32	  NULL
联通沈阳	 223.83 Mbps	 22.48 Mbps	 221.22	  0.0%
电信合肥5G	 30.80 Mbps	 75.25 Mbps	 314.41	  16.8%
电信武汉	 6.27 Mbps	 289.46 Mbps	 295.68	  NULL
移动陕西5G	 608.08 Mbps	 545.56 Mbps	 302.09	  0.0%
------------------------------------------------------------------------
 总共花费      : 7 分 21 秒
 时间          : Wed Jul 19 20:30:08 CST 2023
------------------------------------------------------------------------
```

