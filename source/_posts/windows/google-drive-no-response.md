---
description: 发布于 2024-04-26
categories:
- windows
date: 2024-04-26
slug: google-drive-no-response
title: Google Drive/云端硬盘 偏好设置无响应的解决方法
updated:
tags:
- windows
- google-drive
copyright: true
---

# Google Drive/云端硬盘 偏好设置无响应的解决方法

### 问题产生原因

修改`Google 云端硬盘流式传输位置` 为文件夹后有可能触发。

![image-20240426105930457](https://media.opennet.top/i/2024/04/26/h4x8ec-0.png)

此时卸载并重装 Google Drive、重启电脑无法解决。

### 解决方案

1. 在任务管理器中结束所有 Google Drive 进程。

![image-20240426105401959](https://media.opennet.top/i/2024/04/26/h1jhwu-0.png)

2. 注册表进入 `计算机\HKEY_CURRENT_USER\Software\Google\DriveFS` 并修改 `PerAccountPreferences`的 `mount_point_path` 为一个未分配盘符。

![image-20240426105631051](https://media.opennet.top/i/2024/04/26/h34wpa-0.png)

3. 重新启动 Google Drive 即可恢复正常，此时Google 云端硬盘流式传输位置被复原成盘符。