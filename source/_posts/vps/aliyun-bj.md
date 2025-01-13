---
description: 发布于 2024-01-13
categories:
- vps
date: 2024-01-13
slug: aliyun-bj
title: 阿里云 北京 ECS VPS 测评
updated: 
tags: 
- vps
- aliyun
copyright: true
---

# 阿里云 北京 ECS VPS 测评

前年买的阿里云99，挂了一个小服务

![image-20250113195831394](https://media.opennet.top/i/2025/01/13/uqevhp-0.png)

## 规格

ecs.e-c1m1.large

**2**核(vCPU)， **2** GiB， **3** Mbps

## 测试

### 延迟表现

![image-20250113195542152](https://media.opennet.top/i/2025/01/13/uoos4u-0.png)

![image-20250113195436352](https://media.opennet.top/i/2025/01/13/uo23jt-0.png)

![image-20250113195653630](https://media.opennet.top/i/2025/01/13/upctyw-0.png)

### 融合怪

```
                   测评频道: https://t.me/vps_reviews                    
VPS融合怪版本：2025.01.02
Shell项目地址：https://github.com/spiritLHLS/ecs
Go项目地址：https://github.com/oneclickvirt/ecs
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum
 CPU 核心数        : 2
 CPU 频率          : 2500.002 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 33.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 698.42 MiB / 1.69 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 6.45 GiB / 39.02 GiB
 启动盘路径        : /dev/vda3
 系统在线时间      : 438 days, 22 hour 24 min
 负载              : 0.10, 0.09, 0.03
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-13-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Port Restricted Cone
 IPV4 ASN          : AS37963 Hangzhou Alibaba Advertising Co.,Ltd.
 IPV4 位置         : Beijing / Beijing / CN
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		1048 Scores
 2 线程测试(多核)得分: 		2071 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		21251.51 MB/s
 单线程写测试:		17361.71 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		6.7 MB/s (1646 IOPS, 15.55s)		5.8 MB/s (1424 IOPS, 17.97s)
 1GB-1M Block		111 MB/s (106 IOPS, 9.44s)		112 MB/s (106 IOPS, 9.39s)
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
ASN滥用得分(越低越好): 0.0004 (Very Low) [A] 
公司滥用得分(越低越好): 0.0039 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting [9] hosting - moderate probability [C] Commercial [3] business [0 7 8 A]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7] 
是否数据中心: No [8 C] Yes [0 1 6 A]
是否移动设备: Yes [E] No [A C]
是否代理: Yes [E] No [0 1 4 6 7 8 9 A B C]
是否VPN: Yes [E] No [0 1 6 7 A C]
是否Tor: No [0 1 3 6 7 8 A B C E] 
是否Tor出口: No [1 7] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8] 
是否攻击者: No [7 8] 
是否滥用者: No [7 8 A C E] 
是否威胁: No [7 8 C] 
是否中继: No [0 7 8 C] 
是否Bogon: No [7 8 A C]
是否机器人: No [E] 
DNS-黑名单: 314(Total_Check) 0(Clean) 3(Blacklisted) 6(Other) 
Google搜索可行性：NO
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✔     ✘     ✔     ✘    
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
 联通太原	   9   | 联通大连	   20  | 联通南充	   43  |
 联通福州	   47  | 联通上海	   22  | 电信苏州	   22  |
 电信南京	   22  | 电信杭州	   25  | 电信扬州	   24  |
 电信武汉	   22  | 电信宁波	   30  | 电信长沙	   43  |
 电信Zhenjiang	   19  | 移动杭州	   27  | 移动成都	   40  |
 移动福州	   52  | 移动Beijing	   5   |
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟
Speedtest.net	 3.85Mbps	 111.09Mbps	 5.02ms	
洛杉矶		 3.85Mbps	 73.01Mbps	 156.80ms	
中国香港	 2.50Mbps	 0.04Mbps	 752.87ms	
联通成都	 3.91Mbps	 7.75Mbps	 47.52ms	
电信Suzhou5G	 3.88Mbps	 109.29Mbps	 23.18ms	
电信Zhenjiang5G	 3.98Mbps	 109.09Mbps	 23.17ms	
移动Beijing	 3.93Mbps	 111.24Mbps	 3.64ms	
移动杭州5G	 3.98Mbps	 110.00Mbps	 26.67ms	
------------------------------------------------------------------------
 总共花费      : 8 分 3 秒
 时间          : Mon Jan 13 19:46:46 CST 2025
------------------------------------------------------------------------
```

