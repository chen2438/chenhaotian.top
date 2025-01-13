---
description: 发布于 2024-01-13
categories:
- vps
date: 2024-01-13
slug: tencent-bj
title: 腾讯云 北京 轻量云 VPS 测评
updated: 
tags: 
- vps
- tencent
copyright: true
---

# 腾讯云 北京 轻量云 VPS 测评

去年在腾讯云轻量周年庆上买的

IPv6不用的话还是关掉好，占带宽很不舒服

![image-20250113193051419](https://media.opennet.top/i/2025/01/13/u9v5hr-0.png)

## 规格

CPU - 2核 内存 - 2GB

系统盘 - SSD云硬盘 50GB

流量包 - 300GB/月（带宽：4Mbps）

## 测试

### IPv4

![image-20250113193254210](https://media.opennet.top/i/2025/01/13/ub2d3h-0.png)

![image-20250113193450158](https://media.opennet.top/i/2025/01/13/uc8l7m-0.png)

![image-20250113193518463](https://media.opennet.top/i/2025/01/13/ucngzv-0.png)

### IPv6

![image-20250113193607480](https://media.opennet.top/i/2025/01/13/ud6dl9-0.png)

![image-20250113193945912](https://media.opennet.top/i/2025/01/13/uf6v6g-0.png)

### 融合怪

```
                   测评频道: https://t.me/vps_reviews                    
VPS融合怪版本：2025.01.02
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7K62 48-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 2595.124 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 8.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 423.38 MiB / 1.80 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 3.03 GiB / 49.10 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 15 days, 7 hour 15 min
 负载              : 0.02, 0.03, 0.00
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-26-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS45090 Shenzhen Tencent Computer Systems Company Limited
 IPV4 位置         : Beijing / Beijing / CN
 IPV6 ASN          : AS45090 Tencent cloud computing
 IPV6 位置         : China
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		1636 Scores
 2 线程测试(多核)得分: 		1695 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		43606.56 MB/s
 单线程写测试:		19755.07 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		4.7 MB/s (1159 IOPS, 22.08s)		16.7 MB/s (4071 IOPS, 6.29s)
 1GB-1M Block		148 MB/s (142 IOPS, 7.07s)		301 MB/s (286 IOPS, 3.49s)
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 0 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2] 
安全信息:
使用类型: hosting - high probability [C] DataCenter/WebHosting/Transit [3] hosting [0 7 9] business [8]
公司类型: hosting [0 7] 
是否云提供商: Yes [7 D] 
是否数据中心: No [5 6 8] Yes [0 1 C]
是否移动设备: No [5 C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 B C D] Yes [E]
是否VPN: No [0 1 6 7 C D] Yes [E]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 C D] 
是否机器人: No [E] 
DNS-黑名单: 314(Total_Check) 0(Clean) 6(Blacklisted) 12(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1] 
是否代理: No [1 B D] 
是否VPN: No [1 D] 
是否Tor: No [1 3 B D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [B] 
是否匿名: No [1 D]
是否攻击者: No [D] 
是否滥用者: No [D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [D] 
DNS-黑名单: 314(Total_Check) 0(Clean) 0(Blacklisted) 314(Other) 
Google搜索可行性：NO
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✘     ✘     ✔     ✘    
Yandex    ✘     ✔     ✔     ✘     ✔     ✘    
Gmail     ✘     ✔     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✘     ✔     ✘     ✘     ✔     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✔     ✔     ✘     ✔     ✘    
-----------------------全国延迟检测--本脚本原创-------------------------
 联通天津	   8   | 联通大连	   20  | 联通太原	   12  |
 联通南充	   43  | 联通福州	   43  | 联通上海	   24  |
 电信南京	   21  | 电信扬州	   24  | 电信苏州	   23  |
 电信武汉	   25  | 电信长沙	   30  | 电信杭州	   30  |
 电信宁波	   37  | 电信Zhenjiang	   20  | 移动杭州	   29  |
 移动成都	   39  | 移动福州	   51  | 移动Beijing	   6   |
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟
Speedtest.net	 2.61Mbps	 100.59Mbps	 5.75ms	
中国香港	 1.18Mbps	 1.03Mbps	 69.36ms	
洛杉矶		 2.23Mbps	 76.62Mbps	 175.92ms	
联通成都	 2.92Mbps	 11.07Mbps	 48.64ms	
电信Suzhou5G	 3.21Mbps	 139.23Mbps	 23.99ms	
电信Zhenjiang5G	 3.08Mbps	 159.53Mbps	 22.43ms	
移动Beijing	 2.95Mbps	 97.42Mbps	 6.44ms	
移动杭州5G	 3.07Mbps	 163.45Mbps	 29.53ms	
------------------------------------------------------------------------
 总共花费      : 13 分 44 秒
 时间          : Mon Jan 13 19:45:23 CST 2025
------------------------------------------------------------------------
```
