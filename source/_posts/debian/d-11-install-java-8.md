---
description: 发布于 2023-07-13
categories:
- debian
date: 2023-07-13
slug: d-11-install-java-8
title: Debian 11 使用 AdoptOpenJDK 安装 Java 8
updated: 
tags: 
- debian
- java
- adopt-open-jdk
copyright: true
---

# Debian 11 使用 AdoptOpenJDK 安装 Java 8

## 前言

OpenJDK 8 在 Debian 11 不再提供支持

```bash
root@localhost:~# apt update -y 
命中:1 http://security.debian.org/debian-security bullseye-security InRelease
命中:2 https://download.docker.com/linux/debian bullseye InRelease                     
命中:3 http://ftp.us.debian.org/debian bullseye InRelease                              
命中:4 http://ftp.us.debian.org/debian bullseye-updates InRelease
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成                 
所有软件包均为最新。
root@localhost:~# apt install -y openjdk-8-jre-headless
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成                 
没有可用的软件包 openjdk-8-jre-headless，但是它被其它的软件包引用了。
这可能意味着这个缺失的软件包可能已被废弃，
或者只能在其他发布源中找到

E: 软件包 openjdk-8-jre-headless 没有可安装候选
```

## 安装步骤

1. 更新系统包列表

   ```
   sudo apt update
   ```

2. 安装必要的软件包

   ```
   sudo apt install wget curl gnupg2 ca-certificates lsb-release apt-transport-https
   ```

3. 添加AdoptOpenJDK的公钥到系统中，此步骤使用更安全的 `trusted.gpg.d` 目录而不是已被弃用的 `apt-key` 命令

   ```
   curl https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | gpg --dearmor | sudo tee /usr/share/keyrings/adoptopenjdk-archive-keyring.gpg >/dev/null
   ```

4. 添加AdoptOpenJDK的仓库到系统中

   ```
   echo "deb [signed-by=/usr/share/keyrings/adoptopenjdk-archive-keyring.gpg] https://adoptopenjdk.jfrog.io/adoptopenjdk/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/adoptopenjdk.list
   ```

5. 更新包列表以包含AdoptOpenJDK的仓库

   ```
   sudo apt update
   ```

6. 安装Java 8

   ```
   sudo apt install adoptopenjdk-8-hotspot
   ```

7. 确认Java 8已经安装成功

   ```
   java -version
   ```

   成功安装的输出：

   ```
   root@localhost:~# java -version
   openjdk version "1.8.0_292"
   OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_292-b10)
   OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.292-b10, mixed mode)
   ```

## 过程示意

省略了1、2步骤

```bash
root@localhost:~# curl https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | gpg --dearmor | sudo tee /usr/share/keyrings/adoptopenjdk-archive-keyring.gpg >/dev/null
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  3149    0  3149    0     0  11534      0 --:--:-- --:--:-- --:--:-- 11534

root@localhost:~# echo "deb [signed-by=/usr/share/keyrings/adoptopenjdk-archive-keyring.gpg] https://adoptopenjdk.jfrog.io/adoptopenjdk/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/adoptopenjdk.list
deb [signed-by=/usr/share/keyrings/adoptopenjdk-archive-keyring.gpg] https://adoptopenjdk.jfrog.io/adoptopenjdk/deb bullseye main

root@localhost:~# sudo apt update
命中:1 http://security.debian.org/debian-security bullseye-security InRelease
命中:2 https://download.docker.com/linux/debian bullseye InRelease                    
命中:3 http://ftp.us.debian.org/debian bullseye InRelease                             
命中:4 http://ftp.us.debian.org/debian bullseye-updates InRelease           
获取:5 https://adoptopenjdk.jfrog.io/adoptopenjdk/deb bullseye InRelease [6,159 B]
获取:6 https://adoptopenjdk.jfrog.io/adoptopenjdk/deb bullseye/main amd64 Packages [4,062 B]
已下载 10.2 kB，耗时 1秒 (18.5 kB/s)
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成                 
所有软件包均为最新。

root@localhost:~# sudo apt install adoptopenjdk-8-hotspot
正在读取软件包���表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成                 
下列软件包是自动安装的并且现在不需要了：
  linux-image-5.10.0-18-amd64
使用'sudo apt autoremove'来卸载它(它们)。
将会同时安装下列软件：
  fontconfig-config fonts-dejavu fonts-dejavu-core fonts-dejavu-extra java-common libasound2 libasound2-data libfontconfig1 libx11-6 libx11-data libxau6 libxcb1
  libxdmcp6 libxext6 libxi6 libxrender1 libxtst6 x11-common
建议安装：
  default-jre libasound2-plugins alsa-utils
推荐安装：
  alsa-ucm-conf alsa-topology-conf
下列【新】软件包将被安装：
  adoptopenjdk-8-hotspot fontconfig-config fonts-dejavu fonts-dejavu-core fonts-dejavu-extra java-common libasound2 libasound2-data libfontconfig1 libx11-6 libx11-data
  libxau6 libxcb1 libxdmcp6 libxext6 libxi6 libxrender1 libxtst6 x11-common
升级了 0 个软件包，新安装了 19 个软件包，要卸载 0 个软件包，有 0 个软件包未被升级。
需要下载 109 MB 的归档。
解压缩后会消耗 222 MB 的额外空间。
您希望继续执行吗？ [Y/n] 
(安装过程省略)

root@localhost:~# java -version
openjdk version "1.8.0_292"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_292-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.292-b10, mixed mode)
```

