---
description: 发布于 2023-07-16
categories:
- vps
date: 2023-07-16
slug: digitalvirt-us-cmin2
title: DigitalVirt 洛杉矶 CMIN2 VPS 测评
updated: 
tags: 
- vps
- digitalvirt
- cmin2
copyright: true
---

# DigitalVirt 洛杉矶 CMIN2 VPS 测评

官网链接（含AFF）：https://digitalvirt.com/aff.php?aff=459

美国西海岸 四网回程 CMIN2 移动新线路。

晚高峰延迟 165ms 左右，不丢包，非常稳定。

大陆优化美国机 相较 大陆优化亚洲机 更加稳定，不容易被D到空路由，适合建站。

流媒体解锁很好，详见测试。

注意，测速似乎会被黑洞。

## 规格

测试的 VPS 是预售款，CPU 内存 流量翻倍。

P1-1C1G

¥ 59 月付

- 核心**1核**
- 内存**1GB**
- 系统盘**10G**
- 带宽**500Mbps**
- 流量包**1000G/月**

## 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.10
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
 CPU 核心数        : 2
 CPU 频率          : 2399.996 MHz
 CPU 缓存          : L1: 0.00 KB / L2: 0.00 KB / L3: 0.00 KB
 硬盘空间          : 6.93 GiB / 9.68 GiB
 启动盘路径        : /dev/vda1
 内存              : 583.29 MiB / 1.95 GiB
 Swap              : 111.25 MiB / 4.00 GiB
 系统在线时间      : 55 days, 8 hour 35 min
 负载              : 0.31, 0.09, 0.05
 系统              : Debian GNU/Linux 10 (buster) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 4.19.0-24-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS979 NetLab Global
 IPV4 位置         : Los Angeles / California / US
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		858 Scores
 2 线程测试(多核)得分: 		1795 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		18074.96 MB/s
 单线程写测试:		12361.46 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		8.9 MB/s (2169 IOPS, 11.80s)		8.8 MB/s (2153 IOPS, 11.89s)
 1GB-1M Block		833 MB/s (794 IOPS, 1.26s)		1.0 GB/s (999 IOPS, 1.00s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 8.03 MB/s     (2.0k) | 122.04 MB/s   (1.9k)
Write      | 8.06 MB/s     (2.0k) | 122.68 MB/s   (1.9k)
Total      | 16.09 MB/s    (4.0k) | 244.72 MB/s   (3.8k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 638.79 MB/s   (1.2k) | 523.89 MB/s    (511)
Write      | 672.74 MB/s   (1.3k) | 558.78 MB/s    (545)
Total      | 1.31 GB/s     (2.5k) | 1.08 GB/s     (1.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: NUQ(NUQ04S38)
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
 Dazn:					No
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				San Francisco, CA 
 Netflix Preferred CDN:			Los Angeles, CA  
 Spotify Registration:			No
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：17
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
ip234数据库：
  欺诈分数(越低越好)：6
ip-api数据库:
  手机流量: No
  代理服务: No
  数据中心: No
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/07/15 21:02:49 北京电信 219.141.136.12  移动CMI [普通线路]           
2023/07/15 21:02:49 北京联通 202.106.50.1    移动CMI [普通线路]           
2023/07/15 21:02:49 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/07/15 21:02:49 上海电信 202.96.209.133  移动CMI [普通线路]           
2023/07/15 21:02:49 上海联通 210.22.97.1     移动CMI [普通线路]           
2023/07/15 21:02:49 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/07/15 21:02:49 广州电信 58.60.188.222   移动CMI [普通线路]           
2023/07/15 21:02:49 广州联通 210.21.196.6    移动CMI [普通线路]           
2023/07/15 21:02:49 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/07/15 21:02:49 成都电信 61.139.2.69     移动CMI [普通线路]           
2023/07/15 21:02:49 成都联通 119.6.6.6       移动CMI [普通线路]           
2023/07/15 21:02:49 成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
20.74 ms  AS979  美国, 加利福尼亚州, 洛杉矶, cogentco.com
0.42 ms  *  局域网
1.09 ms  AS58807  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
131.06 ms  AS58807  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
126.32 ms  AS58807  中国, 上海, chinamobile.com, 移动
127.21 ms  AS58807  中国, 上海, chinamobile.com, 移动
128.84 ms  AS9808  中国, 上海, chinamobile.com, 移动
128.28 ms  AS9808  中国, 上海, chinamobile.com, 移动
128.98 ms  AS9808  中国, 上海, chinamobile.com, 移动
155.88 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
157.87 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
169.56 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
163.09 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
18.36 ms  AS979  美国, 加利福尼亚州, 洛杉矶, cogentco.com
0.60 ms  *  局域网
0.87 ms  AS58807  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
127.63 ms  AS58807  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
126.42 ms  AS58807  中国, 上海, chinamobile.com, 移动
127.25 ms  AS58807  中国, 上海, chinamobile.com, 移动
128.76 ms  AS9808  中国, 上海, chinamobile.com, 移动
129.46 ms  AS9808  中国, 上海, chinamobile.com, 移动
128.95 ms  AS9808  中国, 上海, chinamobile.com, 移动
160.88 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
160.61 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
168.92 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
165.37 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
168.41 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
166.31 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
21.44 ms  AS979  美国, 加利福尼亚州, 洛杉矶, cogentco.com
0.73 ms  *  局域网
3.98 ms  AS58807  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
126.92 ms  AS58807  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
126.43 ms  AS58807  中国, 上海, chinamobile.com, 移动
128.26 ms  AS9808  中国, chinamobile.com, 移动
127.90 ms  AS9808  中国, 上海, chinamobile.com, 移动
132.76 ms  AS9808  中国, 上海, chinamobile.com, 移动
153.06 ms  AS9808  中国, 北京, chinamobile.com, 移动
155.72 ms  AS9808  中国, 北京, chinamobile.com, 移动
156.33 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 467.21 Mbps	 484.19 Mbps	 49.48	  0.0%
洛杉矶		 480.10 Mbps	 479.51 Mbps	 4.17	  0.0%
日本东京	 425.37 Mbps	 480.05 Mbps	 132.52	  0.0%
联通上海5G	 442.14 Mbps	 467.37 Mbps	 130.60	  0.0%
联通WuXi	 384.22 Mbps	 314.39 Mbps	 145.19	  0.0%
电信合肥5G	 421.45 Mbps	 367.24 Mbps	 157.09	  0.0%
电信上海	 217.22 Mbps	 29.06 Mbps	 143.72	  NULL
移动杭州5G	 445.81 Mbps	 17.56 Mbps	 134.29	  0.0%
移动陕西5G	 383.83 Mbps	 527.92 Mbps	 152.08	  0.0%
------------------------------------------------------------------------
 总共花费      : 7 分 8 秒
 时间          : Sat Jul 15 21:07:38 CST 2023
------------------------------------------------------------------------
```

## 晚高峰网速测试

测速测到一半被限制了，大概看看吧。500 Mbps 带宽是足的。

```
——————————————————————————————————————————————————————————
 SuperSpeed 全面测速修复版. By UXH & ernisn & oooldking
 节点更新: 2022/11/28 | 脚本更新: 2022/11/28
 Github: https://github.com/uxh/superspeed
——————————————————————————————————————————————————————————
  测速类型:    0. 取消测速    1. 三网测速    2. 详细测速
               3. 电信节点    4. 联通节点    5. 移动节点
  请输入数字选择测速类型: 1
——————————————————————————————————————————————————————————
ID    测速服务器信息       上传/Mbps   下载/Mbps   延迟/ms
3633  电信|上海　　　　　　↑ 419.86    ↓ 468.07    133.47  
34115 电信|天津５Ｇ　　　　↑ 447.55    ↓ 462.86    156.31  
17145 电信|安徽合肥５Ｇ　　↑ 397.57    ↓ 13.69     146.93  
3973  电信|甘肃兰州　　　　↑ 423.96    ↓ 466.00    175.74  
26352 电信|江苏南京５Ｇ　　↑ 453.88    ↓ 477.83    158.03  
24447 联通|上海５Ｇ　　　　↑ 427.56    ↓ 444.07    130.95  
36646 联通|河南郑州５Ｇ　　↑ 412.33    ↓ 477.57    153.61  
4870  联通|湖南长沙　　　　↑ 445.17    ↓ 273.78    146.98  
——————————————————————————————————————————————————————————
  测试完成, 本次测速耗时: 4 分 18 秒
  当前时间: 2023-07-16 20:37:42
```

