---
description: 转载于 2023-05-21
categories:
- debian
date: 2023-05-21
slug: l-uninstall-qcloud-monitor
title: 腾讯云卸载安全监控组件
updated:
tags:
- linux
- qcloud
- tencent
copyright: false
---

# 腾讯云卸载安全监控组件

转载于： https://cloud.tencent.com/developer/article/1381482

腾讯云的服务器会自动安装[云监控](https://cloud.tencent.com/product/cm?from=20065&from_column=20065)、云镜等安全服务，方便在控制台查看产品运行状态等

可以看一下服务器的定时任务：

```javascript
$ crontab -l

*/1 * * * * /usr/local/qcloud/stargate/admin/start.sh > /dev/null 2>&1 &

0 0 * * * /usr/local/qcloud/YunJing/YDCrontab.sh > /dev/null 2>&1 &
```

从来不看腾讯云的云监控控制台，要这东西有何用，卸载

云监控 Linux 安装目录是`/usr/local/qcloud/stargate`和`/usr/local/qcloud/monitor`

还有一个[主机安全](https://cloud.tencent.com/product/hs?from=20065&from_column=20065)，也就是所谓的云镜，新开服务器不取消勾选都会默认安装

云镜 Linux 安装目录是`/usr/local/qcloud/YunJing`

统统卸载！！！

直接在腾讯[云服务器](https://cloud.tencent.com/product/cvm?from=20065&from_column=20065)上运行以下代码

```javascript
/usr/local/qcloud/stargate/admin/uninstall.sh
/usr/local/qcloud/YunJing/uninst.sh
/usr/local/qcloud/monitor/barad/admin/uninstall.sh
```

这些都是腾讯云自带的卸载脚本，如果你不想用也可以使用打包好的 shell

```javascript
wget -qO- https://cdn.jsdelivr.net/gh/lufei/TencentAgentRemove@master/remove.sh | bash
```

此脚本卸载完腾讯云的监控，但是腾讯云文件夹并不是只有监控，为了保险起见，脚本不会`rm -rf /usr/local/qcloud`，不作死就不会死

卸载完以后可以通过如下命令来查看是否卸载干净

```javascript
ps -A | grep agent
```

如无任何输出，则已卸载干净，如果有输出，请检查是否你自己的程序

如果你想用的话可以具体了解一下腾讯云的服务，[云监控](https://qq52o.me/go/aHR0cHM6Ly9jbG91ZC50ZW5jZW50LmNvbS9kb2N1bWVudC9wcm9kdWN0LzI0OC8xMzQ2Ng==)，[主机安全(云镜)](https://qq52o.me/go/aHR0cHM6Ly9jbG91ZC50ZW5jZW50LmNvbS9kb2N1bWVudC9wcm9kdWN0LzI5Ng==)

