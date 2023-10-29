---
description: 发布于 2023-09-27
categories:
- windows
date: 2023-09-27
slug: tencent-install-windows
title: 腾讯云 国内云 安装 Windows 11 专业版
updated:
tags:
- windows
- tencent
copyright: true
---

# 腾讯云 国内云 安装 Windows 11 专业版

本文提供给希望使用 Windows 普通版本而不是 Windows Server 的读者

本文没有使用 dd 命令，不需要 DD 脚本，不需要更换 Debian 源

本文不适用于原来就无法安装 Windows Server 的腾讯云海外轻量服务器

思路：在 Windows Server 上使用 Insider Preview 镜像就地安装 Windows 11 Pro

## 安装 Windows Server

![image-20230927133308286](https://media.opennet.top/i/2023/09/27/m1oups-0.png)

我这里选择 2022 版本

## 下载 Windows 11 预览版镜像

前往 https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewiso

登录微软账号，选择一个合适的版本下载，下载链接有时效

我这里选择 Beta Channel

![image-20230927142904981](https://media.opennet.top/i/2023/09/27/nmtrbn-0.png)

![image-20230927142949030](https://media.opennet.top/i/2023/09/27/nn3a3j-0.png)

此处可能需要你的微软账户有预览体验资格，如果没有可尝试我存的 https://storage.opennet.top/directlink/local/os/Windows11_InsiderPreview_Client_x64_zh-cn_22621.iso （套CF，国内下载慢）

## 跳过 TPM 检测

双击打开下载的 ISO 文件，打开 setup

![image-20230927140023289](https://media.opennet.top/i/2023/09/27/n5nxsk-0.png)

选择【更改安装程序下载更新的方式】，选择【不是现在】

![image-20230927140039725](https://media.opennet.top/i/2023/09/27/n5rhcb-0.png)

点击下一页，显示不满足要求；演示机是腾讯云轻量 2C2G，实际运行最好有 4G 内存

![image-20230927140243635](https://media.opennet.top/i/2023/09/27/n6z9zl-0.png)

打开【显示隐藏的文件】

![image-20230927140403050](https://media.opennet.top/i/2023/09/27/n7x9sk-0.png)

前往 `C:\$WINDOWS.~BT\Sources\Panther`，编辑`Appraiser_Data`的权限，全部拒绝

![image-20230927140534962](https://media.opennet.top/i/2023/09/27/n8pkkc-0.png)

然后在安装程序返回上一步，再点下一页，此时如果展示产品密钥界面即成功跳过

![image-20230927140856690](https://media.opennet.top/i/2023/09/27/namkkt-0.png)

## 输入产品密钥

在 https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys 获取对应密钥

![image-20230927141038115](https://media.opennet.top/i/2023/09/27/nbplmy-0.png)

Win 11 Pro 的密钥为 `W269N-WFGWX-YVC9B-4J6C9-T83GX`

此时，如果是官网下载的家庭版镜像需要自行寻找密钥，如果是 Win 11 Insider Preview 的镜像输入Win 11 Pro 的密钥即可

![image-20230927143324325](https://media.opennet.top/i/2023/09/27/npbei5-0.png)

## 准备安装

要保留的内容一般选择无

![image-20230927143543728](https://media.opennet.top/i/2023/09/27/nqmltv-0.png)

![image-20230927143630005](https://media.opennet.top/i/2023/09/27/nr4yev-0.png)

## 开始安装

![image-20230927143656545](https://media.opennet.top/i/2023/09/27/nraqwo-0.png)

接下来安静等待即可，可以进腾讯云 VNC 查看进度

![image-20230927144025055](https://media.opennet.top/i/2023/09/27/nthlkd-0.png)

![image-20230927150531146](https://media.opennet.top/i/2023/09/27/ow87nw-0.png)

## 进入系统

![image-20230927151116438](https://media.opennet.top/i/2023/09/27/ozpr1c-0.png)

自动检查更新并重启

![image-20230927151255185](https://media.opennet.top/i/2023/09/27/p0jbra-0.png)

![image-20230927151414405](https://media.opennet.top/i/2023/09/27/p1hfc5-0.png)

在登录微软账户时耐心等待，有可能因网络问题登录失败，多试几次，如果一直卡住可在腾讯云控制台关机再启动，**或者不选择个人账号，选择企业**，这样就是本地账户

![image-20230927151620879](https://media.opennet.top/i/2023/09/27/p2pqw7-0.png)

![image-20230927154514927](https://media.opennet.top/i/2023/09/27/pjz3nm-0.png)

最后还会重启

![image-20230927155859279](https://media.opennet.top/i/2023/09/27/ps6wde-0.png)

进系统

![image-20230927160125094](https://media.opennet.top/i/2023/09/27/qhcpg7-0.png)

![image-20230927160221914](https://media.opennet.top/i/2023/09/27/qhx7o8-0.png)

![image-20230927160304634](https://media.opennet.top/i/2023/09/27/qif0og-0.png)

![image-20230927160338492](https://media.opennet.top/i/2023/09/27/qime9z-0.png)