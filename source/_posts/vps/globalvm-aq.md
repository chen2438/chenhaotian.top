---
description: 发布于 2023-08-12
categories:
- vps
date: 2023-08-12
slug: globalvm-aq
title: GlobalVM 南极 NAT VPS 测评
updated: 
tags: 
- vps
- globalvm
copyright: true
---

# GlobalVM 南极 NAT VPS 测评

宿主机位于香港，获取 WARP 南极IP

### 规格

南极洲-512M

CPU：1
RAM：512M
硬盘：10G SSD
流量：350G单向
共享带宽 无任何保证
1独立IPv6入口+1共享IPv4出口

起价
¥5.00CNY
每月

### 测试

![image-20230812224659547](https://media.opennet.top/i/2023/08/12/115tffw-0.png)

![image-20230812224708869](https://media.opennet.top/i/2023/08/12/115va8j-0.png)

```
测评频道: https://t.me/vps_reviews                    
版本：2023.07.29
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
 CPU 核心数        : 1
 CPU 频率          : 2397.222 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.93 GiB / 9.68 GiB
 启动盘路径        : /dev/sda1
 内存              : 91.67 MiB / 475.75 MiB
 Swap              : 0 KiB / 512.00 MiB
 系统在线时间      : 0 days, 0 hour 1 min
 负载              : 0.57, 0.18, 0.06
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-24-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS13335 Cloudflare, Inc.
 IPV4 位置         : McMurdo Station / Antarctica / AQ
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		634 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		13313.96 MB/s
 单线程写测试:		9071.63 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		4.1 MB/s (1004 IOPS, 25.51s)		4.1 MB/s (1003 IOPS, 25.50s)
 1GB-1M Block		106 MB/s (101 IOPS, 9.91s)		106 MB/s (101 IOPS, 9.89s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------   | ---            ----  | ----           ---- 
Read       | 3.98 MB/s      (996) | 63.76 MB/s     (996)
Write      | 4.01 MB/s     (1.0k) | 64.18 MB/s    (1.0k)
Total      | 7.99 MB/s     (1.9k) | 127.95 MB/s   (1.9k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 97.74 MB/s     (190) | 96.53 MB/s      (94)
Write      | 102.93 MB/s    (201) | 102.96 MB/s    (100)
Total      | 200.67 MB/s    (391) | 199.49 MB/s    (194)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR48S34)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR48S34)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：南极洲
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
 Dazn:					Yes (Region: AQ)
 HotStar:				No
 Disney+:				Failed
 Netflix:				Yes (Region: AQ)
 YouTube Premium:			No 
 Amazon Prime Video:			Yes (Region: AQ)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				London 
 Netflix Preferred CDN:			Auckland  
 Spotify Registration:			No
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【AQ】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ip234数据库       ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 6②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Content Delivery Network⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ②   Yes⑥ ⑧ ⑨ 
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
Google搜索可行性：NO
端口25检测:
  本地: No
  163邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/08/12 22:02:59 北京电信 219.141.136.12  电信163 [普通线路]           
2023/08/12 22:02:59 北京联通 202.106.50.1    联通4837[普通线路]           
2023/08/12 22:02:59 北京移动 221.179.155.161 移动CMI [普通线路]           
2023/08/12 22:02:59 上海电信 202.96.209.133  电信163 [普通线路]           
2023/08/12 22:02:59 上海联通 210.22.97.1     联通4837[普通线路]           
2023/08/12 22:02:59 上海移动 211.136.112.200 移动CMI [普通线路]           
2023/08/12 22:02:59 广州电信 58.60.188.222   电信163 [普通线路]           
2023/08/12 22:02:59 广州联通 210.21.196.6    联通4837[普通线路]           
2023/08/12 22:02:59 广州移动 120.196.165.24  移动CMI [普通线路]           
2023/08/12 22:02:59 成都电信 61.139.2.69     电信163 [普通线路]           
2023/08/12 22:02:59 成都联通 119.6.6.6       联通4837[普通线路]           
2023/08/12 22:02:59 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
0.62 ms  *  局域网
17.44 ms  AS13335  中国, 香港, cloudflare.com
2.61 ms  AS13335  中国, 香港, cloudflare.com
3.31 ms  AS13335  中国, 香港, cloudflare.com
2.79 ms  AS1299  中国, 香港, telia.com
159.10 ms  AS1299  美国, 加利福尼亚州, 圣何塞, telia.com
161.32 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
310.39 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
307.48 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
324.62 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
306.14 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
317.75 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.45 ms  *  局域网
4.04 ms  AS13335  中国, 香港, cloudflare.com
2.15 ms  AS13335  中国, 香港, cloudflare.com
3.19 ms  AS13335  中国, 香港, cloudflare.com
3.08 ms  AS1299  中国, 香港, telia.com
159.06 ms  AS1299  法国, 普罗旺斯－阿尔卑斯－蓝色海岸大区, 马赛, telia.com
189.40 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
175.87 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
334.63 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
357.05 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
331.32 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
404.95 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
395.34 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.46 ms  *  局域网
3.11 ms  AS13335  中国, 香港, cloudflare.com
5.18 ms  AS13335  中国, 香港, cloudflare.com
2.87 ms  AS13335  中国, 香港, cloudflare.com
6.15 ms  http: 403  http: 403
3.61 ms  http: 403  http: 403
4.27 ms  http: 403  http: 403
6.60 ms  http: 403  http: 403
5.76 ms  http: 403  http: 403
33.03 ms  http: 403  http: 403
200.67 ms  http: 403  http: 403
203.76 ms  http: 403  http: 403
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 312.27 Mbps	 299.02 Mbps	 327.08	  0.0%
中国香港	 309.81 Mbps	 301.34 Mbps	 317.54	  NULL
新加坡		 244.68 Mbps	 301.93 Mbps	 339.87	  NULL
移动Chengdu	 322.80 Mbps	 301.55 Mbps	 375.15	  0.0%
------------------------------------------------------------------------
 总共花费      : 10 分 35 秒
 时间          : Sat Aug 12 22:09:09 CST 2023
------------------------------------------------------------------------
```

