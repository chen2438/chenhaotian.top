---
description: 发布于 2023-08-02
categories:
- vps
date: 2023-08-02
slug: globalvm-kp
title: GlobalVM 朝鲜 NAT VPS 测评
updated: 
tags: 
- vps
- globalvm
copyright: true
---

# GlobalVM 朝鲜 NAT VPS 测评

GlobalVM 是 XihuanCloud 新开的分站。

官网：https://globalvm.top/

朝鲜 VPS 实际位于香港。使用 WARP 获取朝鲜 IPv4。

给了一个朝鲜的 IPv6，用于入口访问，不能用于出口访问。出口只能使用 WARP 的 IPv4。

思路猜测：广播了一个注册在朝鲜的 v6 地址给香港母鸡，然后母鸡套WARP，禁止小鸡IPv6出口访问（防止被IP库识别）。这样在外界看不到 IPv6，可以延长 v6 朝鲜位置的存活时间。可以发现 v6 是 PoloCloud 广播的。

**IPv6 Whois 信息**

```
inet6num:       2a12:dd47:2a2::/48
netname:        PoloNetwork-IPv6-KP
descr:          PoloNetwork-IPv6-KP
country:        KP
admin-c:        BW3948-RIPE
tech-c:         BW3948-RIPE
status:         ASSIGNED
mnt-by:         PoloCloud_Network-MNT
created:        2023-07-13T14:50:06Z
last-modified:  2023-07-13T14:50:06Z
source:         RIPE

person:         Boluo Wang
address:        ???????2-16?
phone:          +1 726 666 0615
nic-hdl:        BW3948-RIPE
mnt-by:         PoloCloud_Network-MNT
created:        2022-10-28T17:07:05Z
last-modified:  2022-10-28T17:07:05Z
source:         RIPE

route6:         2a12:dd47:2a2::/48
origin:         AS151338
mnt-by:         PoloCloud_Network-MNT
created:        2023-07-13T14:51:37Z
last-modified:  2023-07-13T14:51:37Z
source:         RIPE
```

## 规格

东亚-512M

PU：1c

RAM：512M

硬盘：10G SSD

流量：350G单向

共享带宽 无任何保证

1独立IPv6入口+1共享IPv4出口

5 CNY 每月

带宽：共享 300Mbps

地区：朝鲜

## 测试

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
 CPU 核心数        : 1
 CPU 频率          : 2397.222 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 3.00 GiB / 9.68 GiB
 启动盘路径        : /dev/sda1
 内存              : 124.50 MiB / 475.76 MiB
 Swap              : 268 KiB / 1024.00 MiB
 系统在线时间      : 0 days, 2 hour 39 min
 负载              : 0.24, 0.06, 0.02
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-23-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS13335 Cloudflare
 IPV4 位置         : Pyongyang / Pyongyang
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		616 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		13022.65 MB/s
 单线程写测试:		8695.53 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		4.1 MB/s (1003 IOPS, 25.51s)		4.1 MB/s (1002 IOPS, 25.53s)
 1GB-1M Block		106 MB/s (101 IOPS, 9.89s)		106 MB/s (100 IOPS, 9.90s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 3.98 MB/s      (996) | 63.73 MB/s     (995)
Write      | 4.01 MB/s     (1.0k) | 64.13 MB/s    (1.0k)
Total      | 7.99 MB/s     (1.9k) | 127.86 MB/s   (1.9k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 97.73 MB/s     (190) | 96.76 MB/s      (94)
Write      | 102.92 MB/s    (201) | 103.20 MB/s    (100)
Total      | 200.66 MB/s    (391) | 199.96 MB/s    (194)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA15S37)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA15S37)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
Netflix在您的出口IP所在的国家不提供服务
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
 Disney+:				Failed
 Netflix:				No
 YouTube Premium:			No 
 Amazon Prime Video:			Yes (Region: KP)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Frankfurt 
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 6②  49⑦
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):Content Delivery Network⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No②   Yes⑥ ⑧ ⑨ 
  VPN(vpn):  No② ⑧ 
  TOR(tor):  No② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱：No
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
0.71 ms  *  局域网
2.60 ms  AS13335  中国, 香港, cloudflare.com
2.16 ms  AS13335  中国, 香港, cloudflare.com
3.03 ms  AS13335  中国, 香港, cloudflare.com
4.44 ms  AS1299  中国, 香港, telia.com
158.94 ms  AS1299  美国, 加利福尼亚州, 圣何塞, telia.com
159.87 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
336.62 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
328.47 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.51 ms  *  局域网
3.37 ms  AS13335  中国, 香港, cloudflare.com
2.16 ms  AS13335  中国, 香港, cloudflare.com
3.35 ms  AS13335  中国, 香港, cloudflare.com
2.43 ms  AS1299  中国, 香港, telia.com
156.87 ms  AS1299  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, telia.com
189.21 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
189.19 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
360.38 ms  AS4837  德国, 黑森州, 法兰克福, chinaunicom.com, 联通
329.07 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
363.52 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
366.53 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
346.29 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
362.47 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.43 ms  *  局域网
3.30 ms  AS13335  中国, 香港, cloudflare.com
1.54 ms  AS13335  中国, 香港, cloudflare.com
3.03 ms  AS13335  中国, 香港, cloudflare.com
2.40 ms  AS6453  中国, 香港, tatacommunications.com
3.27 ms  AS6453  中国, 香港, tatacommunications.com
3.56 ms  AS6453  中国, 香港, tatacommunications.com
4.80 ms  AS2914  中国, 香港, ntt.com
8.45 ms  AS58453  中国, 香港, chinamobile.com, 移动
174.44 ms  AS58453  中国, 上海, chinamobile.com, 移动
32.98 ms  AS9808  中国, 上海, chinamobile.com, 移动
199.26 ms  AS9808  中国, 北京, chinamobile.com, 移动
198.90 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 223.55 Mbps	 303.43 Mbps	 161.06	  11.4%
HongKong	 312.80 Mbps	 287.91 Mbps	 2.37	  0.0%
Singapore	 313.17 Mbps	 301.86 Mbps	 33.67	  0.0%
联通WuXi	 110.64 Mbps	 302.75 Mbps	 188.95	  12.9%
联通海南	 64.25 Mbps	 303.75 Mbps	 225.91	  NULL
电信天津5G	 4.82 Mbps	 41.49 Mbps	 309.70	  12.3%
电信武汉	 49.57 Mbps	 286.27 Mbps	 337.24	  NULL
移动Beijing	 312.43 Mbps	 301.84 Mbps	 192.77	  NULL
移动陕西5G	 306.76 Mbps	 302.63 Mbps	 211.54	  0.4%
------------------------------------------------------------------------
 总共花费      : 9 分 51 秒
 时间          : Wed Aug  2 16:01:11 CST 2023
------------------------------------------------------------------------
```

## 提示

我这台小鸡的 WARP 共享 IPv4 不能访问 GitHub 等许多网站，注意使用代理安装软件。
