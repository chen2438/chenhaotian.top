---
description: 发布于 2024-03-08
categories:
- vps
date: 2024-03-08
slug: tototel-hk-bgp
title: ToToTel/VmShell 香港 BGP VPS 测评
updated: 
tags: 
- vps
- tototel
- vmshell
copyright: true
---

# ToToTel/VmShell 香港 BGP VPS 测评

**此机器为赞助机，在此感谢老板对站长与开发者的支持**

ToToTel/VmShell 三周年活动之免费赞助建站服务器，具体如下：

https://t.me/vmshell/1405

>完整版喝醉了发三周年活动！
>免费送建站服务器！长期免费
>要求：
>1，有网站
>2，网站好看
>3，不涉政治
>4，有价值！
>5，开发者优先！
>6，数量暂不限
>7，本公司审核最终权
>8，tototel发工单
>9，需要啥配置自己工单提需求
>10，建站服务器有数据备份

https://t.me/vmshell/1407

> VmShell三周年免费赞助活动
> 继续第二批次免费送建站服务器
> 申请者最低要求：
> 1，有网站（内容不能太少了吧，不然感觉到纯粹是忽悠）
> 2，网站好看（设计UI风格认真点）
> 3，不涉政治（香港🇭🇰也是属于中国的）
> 4，有价值（你花时间做的如果没意义，还不如泡妹子）
> 5，开发者优先（Github/开源/脚本/应用开发者）
> 6，数量暂不限（Maybe会长期考虑选择，因为有些申请者的东西真的很不错，我们愿意支持）
> 7，本公司审核最终权（不要因为没收到赞助就埋怨我们，有时候啊，人心态要好，得之我幸，不得到，我不怨🤣我们被没得到的一个人埋怨咯，我擦！）
> 8，参与方式：https://tototel.com 官网申请者发工单说明信息即可
> 9，需要啥配置自己工单提需求我们做参考，或者给的更高，随缘吧
> 10，建站服务器有数据备份（官网可以设置自动全部镜像备份时间）还阔以迁移到任何云服务器商😆
> 另外：不要因为我们做VPS，以为我们就只选择VPS评测站，我们就是赞助愿意支持各种想尝试的人！加油👏

AFF：https://portal.tototel.com/aff.php?aff=118

## 规格

4C 4G 100G 4T

```
Virtual Server OSCentOS-7-64Bit
VCPUs4VCPUs $192.00 USD
Amount Of RAM4 GB RAM $432.00 USD
Disk SpaceSSD-100GB $3,000.00 USD
Bandwidth4 TB/Monthly
Backups SizeBackups 50 GB $1,080.00 USD
Looking-Glasshttp://103.172.135.6:7788
Smart Pinghttp://103.172.135.6:8899
IPv4 Addresses1 * Dedicated IP
```

## 测试

### IPv4

直连会有部分丢包

![image-20240308170614582](https://media.opennet.top/i/2024/03/08/ra2yyf-0.png)

![image-20240308170927666](https://media.opennet.top/i/2024/03/08/rc6u8v-0.png)

### IPv6

无

### 融合怪

```bash
测评频道: https://t.me/vps_reviews                    
版本：2024.02.22
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Gold 6148 CPU @ 2.40GHz
 CPU 核心数        : 4
 CPU 频率          : 2394.518 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 16.00 MB / L3: 16.00 MB
 硬盘空间          : 1.72 GiB / 98.26 GiB
 启动盘路径        : /dev/sda1
 内存              : 342.30 MiB / 3.80 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 10 min
 负载              : 0.93, 0.32, 0.16
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS23881 UDomain Web Hosting Company Ltd
 IPV4 位置         : Sham Shui Po / Sham Shui Po / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		1016 Scores
 4 线程测试(多核)得分: 		4071 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		17177.58 MB/s
 单线程写测试:		16787.15 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		75.4 MB/s (18.40 IOPS, 1.39s)		91.3 MB/s (22298 IOPS, 1.15s)
 1GB-1M Block		3.3 GB/s (3176 IOPS, 0.31s)		4.9 GB/s (4654 IOPS, 0.21s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 15.49 MB/s    (3.8k) | 107.89 MB/s   (1.6k)
Write      | 15.52 MB/s    (3.8k) | 108.46 MB/s   (1.6k)
Total      | 31.01 MB/s    (7.7k) | 216.35 MB/s   (3.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------   | ---            ----  | ----           ---- 
Read       | 280.61 MB/s    (548) | 455.67 MB/s    (444)
Write      | 295.52 MB/s    (577) | 486.02 MB/s    (474)
Total      | 576.14 MB/s   (1.1k) | 941.69 MB/s    (918)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX17S56)
Youtube识别地域: 无信息(null)
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
 YouTube Premium:			No  (Region: CN) 
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Los Angeles, CA 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			HKD
 ChatGPT:				Only Available with Mobile APP
 Bing Region:				HK
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
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
  数据中心(datacenter):  Yes⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Sham Shui Po 服务商: AS23881 UDomain Web Hosting Company Ltd
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 联通4837[普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 联通4837[普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  联通4837[普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
6.20 ms  AS23881  中国, 香港, pkihk.ltd
0.33 ms  *  局域网
0.30 ms  *  局域网
17.42 ms  *  局域网
0.97 ms  *  局域网
1.04 ms  AS4515  中国, 香港, pccw.com
1.83 ms  AS3491,AS31713  中国, 香港, pccw.com
38.82 ms  AS3491,AS31713  中国, 北京, pccw.com
38.14 ms  AS4134  中国, 北京, chinatelecom.com.cn, 电信
43.30 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
43.38 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.74 ms  AS23881  中国, 香港, pkihk.ltd
0.32 ms  *  局域网
0.88 ms  *  局域网
0.81 ms  *  局域网
2.57 ms  AS10099  中国, 香港, chinaunicom.com, 联通
6.59 ms  *  中国, 香港, chinaunicom.com, 联通
2.09 ms  AS10099  中国, 香港, chinaunicom.com, 联通
7.27 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
11.17 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
10.94 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
14.78 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
10.21 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
3.57 ms  AS23881  中国, 香港, pkihk.ltd
0.27 ms  *  局域网
0.30 ms  *  局域网
0.84 ms  *  局域网
0.89 ms  *  局域网
3.37 ms  AS4515  中国, 香港, pccw.com
1.78 ms  AS3491,AS31713  中国, 香港, pccw.com
1.95 ms  AS3491,AS31713  中国, 香港, pccw.com
15.68 ms  AS58453  中国, 香港, chinamobile.com, 移动
60.18 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
59.20 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
44.59 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
46.95 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
53.23 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 406.23 Mbps	 354.84 Mbps	 1.20	  NULL
中国香港	 416.48 Mbps	 83.57 Mbps	 37.43	  0.0%
新加坡		 406.49 Mbps	 78.92 Mbps	 47.41	  NULL
联通海南	 0.30 Mbps	 44.64 Mbps	 95.91	  NULL
联通上海5G	 1.81 Mbps	 30.65 Mbps	 35.66	  15.0%
电信Suzhou5G	 2.00 Mbps	 64.56 Mbps	 45.32	  NULL
电信Nanjing5G	 	 85.12 Mbps
85.12 Mbps	 28.81	  NULL
移动Lanzhou	 2.81 Mbps	 84.80 Mbps	 99.15	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 47 秒
 时间          : Fri Mar  8 13:12:28 CST 2024
------------------------------------------------------------------------
```

### GB5

```bash
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#            专用于服务器的GB5测试             #
#                 v2023-10-18                  #
#         bash <(curl -sL bash.icu/gb5)        #
#         https://github.com/i-abc/gb5         #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

当前时间：2024-03-08 15:05:48 CST
净测试时长：2分37秒

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-cloud-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.1-0-g3208b098f51a-prebuilt.qemu.org

处理器信息
  Name                          Intel Xeon Gold 6148
  Topology                      1 Processor, 4 Cores
  Identifier                    GenuineIntel Family 6 Model 85 Stepping 4
  Base Frequency                2.39 GHz
  L1 Instruction Cache          32.0 KB x 4
  L1 Data Cache                 32.0 KB x 4
  L2 Cache                      4.00 MB x 4
  L3 Cache                      16.0 MB

内存信息
  Size                          3.80 GB

单核测试分数：612
多核测试分数：2263
详细结果链接：https://browser.geekbench.com/v5/cpu/22298605
```

