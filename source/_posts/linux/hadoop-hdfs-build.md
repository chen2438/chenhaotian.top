---
description: 发布于 2024-04-09
categories:
- linux
date: 2024-04-09
slug: hadoop-hdfs-build
title: 
updated: 
tags:
- linux
- hadoop
- hdfs
copyright: true
---

# Hadoop HDFS 分布式集群搭建

> NameNode 搭建在 Debian 12，2 台 DataNode 分别搭建在 Debian 11 和Ubuntu 20.04

## 1 在 NameNode 和 DataNode 安装 JDK8

使用 Adoptium 源安装 temurin-8-jdk

```bash
sudo apt-get install -y wget apt-transport-https gnupg
wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | sudo apt-key add -
echo "deb https://packages.adoptium.net/artifactory/deb $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/adoptium.list
sudo apt-get update
sudo apt-get install temurin-8-jdk
```

## 2 在 NameNode 和 DataNode 创建 Hadoop 用户

为了提高安全性，避免使用 root 用户运行 Hadoop。

```bash
sudo adduser hadoop_user

sudo usermod -aG sudo hadoop_user
su hadoop_user
cd
```

设置环境变量

```bash
echo 'export JAVA_HOME=/usr/lib/jvm/temurin-8-jdk-amd64' >> ~/.bashrc
echo 'export HADOOP_HOME=/usr/local/hadoop' >> ~/.bashrc
echo 'export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin' >> ~/.bashrc
source ~/.bashrc
```

## 3 在 NameNode 和 DataNode 下载 Hadoop

```bash
cd
wget https://dlcdn.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz
sudo tar zxvf hadoop-3.3.6.tar.gz -C /usr/local/
sudo mv /usr/local/hadoop-3.3.6 /usr/local/hadoop
sudo chown -R hadoop_user:hadoop_user /usr/local/hadoop/
sudo chown -R hadoop_user:hadoop_user /usr/lib/jvm/
rm hadoop-3.3.6.tar.gz
```

## 4 在 NameNode 配置 SSH 免密登录

在 NameNode 上执行。**这里使用了SSH非标准端口，如果不需要，删去`-p 2200`。**

```bash
ssh-keygen -t rsa -P ''

ssh-copy-id -p 2200 hadoop_user@namenode.vayki.com
ssh-copy-id -p 2200 hadoop_user@datanode1.vayki.com
ssh-copy-id -p 2200 hadoop_user@datanode2.vayki.com
```

这里使用了SSH非标准端口，还需编辑~/.ssh/config文件以配置hadoop正常运行。**如果不需要，略过此部分**

```bash
cd
mkdir .ssh
vim ~/.ssh/config
```

填入以下内容：

```
Host namenode.vayki.com
HostName namenode.vayki.com
Port 2200
User hadoop_user

Host datanode1.vayki.com
HostName datanode1.vayki.com
Port 2200
User hadoop_user

Host datanode2.vayki.com
HostName datanode2.vayki.com
Port 2200
User hadoop_user
```

然后更改权限600以保证安全

```
chmod 600 ~/.ssh/config
```

## 5 在 NameNode 和 DataNode 配置 Hadoop

在core-site.xml设置fs.defaultFS：

```bash
vim /usr/local/hadoop/etc/hadoop/core-site.xml
```

```xml
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://namenode.vayki.com:9000</value>
        <!-- 注意修改此处为你的namnode -->
    </property>
```

在hdfs-site.xml设置dfs.replication、dfs.namenode.name.dir、dfs.datanode.data.dir和dfs.namenode.secondary.http-address：

```bash
vim /usr/local/hadoop/etc/hadoop/hdfs-site.xml
```

```xml
    <property>
        <name>dfs.replication</name>
        <value>2</value>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>file:///usr/local/hadoop/hdfs/namenode</value>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>file:///usr/local/hadoop/hdfs/datanode</value>
    </property>
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>namenode.vayki.com:50090</value>
        <!-- 注意修改此处为你的secondary namnode,一般与namenode一致 -->
    </property>
```

在workers设置datanode的主机名

```bash
vim /usr/local/hadoop/etc/hadoop/workers
```

```
datanode1.vayki.com
datanode2.vayki.com
```

在hadoop-env.sh追加环境变量。

```bash
echo 'export HDFS_NAMENODE_USER=hadoop_user' >> /usr/local/hadoop/etc/hadoop/hadoop-env.sh
echo 'export HDFS_DATANODE_USER=hadoop_user' >> /usr/local/hadoop/etc/hadoop/hadoop-env.sh
echo 'export HDFS_SECONDARYNAMENODE_USER=hadoop_user' >> /usr/local/hadoop/etc/hadoop/hadoop-env.sh
echo 'export YARN_RESOURCEMANAGER_USER=hadoop_user' >> /usr/local/hadoop/etc/hadoop/hadoop-env.sh
echo 'export YARN_NODEMANAGER_USER=hadoop_user' >> /usr/local/hadoop/etc/hadoop/hadoop-env.sh
echo 'export JAVA_HOME=/usr/lib/jvm/temurin-8-jdk-amd64' >> /usr/local/hadoop/etc/hadoop/hadoop-env.sh
source /usr/local/hadoop/etc/hadoop/hadoop-env.sh
```

## 6 配置 NameNode 和 DataNode 的 hosts 文件

```bash
vim /etc/hosts
```

修改为你实际的IP地址和域名、主机名。所有机器文件内容一致。

```
127.0.0.1 localhost
154.9.239.202 namenode.vayki.com namenode
185.212.62.40 datanode1.vayki.com datanode1
82.115.31.90 datanode2.vayki.com datanode2
```

## 7 格式化 NameNode

在 NameNode 上执行格式化命令，只需执行一次

```bash
hdfs namenode -format
```

## 8 启动 Hadoop 集群

在 NameNode 执行启动命令

```bash
start-dfs.sh
```

## 9 验证集群状态

在 NameNode 查看集群健康状态

```bash
hdfs dfsadmin -report
```

如果一切顺利，将如下显示：

```bash
Starting namenodes on [namenode.vayki.com]
Starting datanodes
Starting secondary namenodes [namenode.vayki.com]
root@namenode:~# hdfs dfsadmin -report
Configured Capacity: 19999629312 (18.63 GB)
Present Capacity: 7336538112 (6.83 GB)
DFS Remaining: 5864693760 (5.46 GB)
DFS Used: 1471844352 (1.37 GB)
DFS Used%: 20.06%
Replicated Blocks:
        Under replicated blocks: 2
        Blocks with corrupt replicas: 0
        Missing blocks: 0
        Missing blocks (with replication factor 1): 0
        Low redundancy blocks with highest priority to recover: 0
        Pending deletion blocks: 0
Erasure Coded Block Groups: 
        Low redundancy block groups: 0
        Block groups with corrupt internal blocks: 0
        Missing block groups: 0
        Low redundancy blocks with highest priority to recover: 0
        Pending deletion blocks: 0

-------------------------------------------------
Live datanodes (2):

Name: 185.212.62.40:9866 (datanode1.vayki.com)
Hostname: datanode1.vayki.com
Decommission Status : Normal
Configured Capacity: 10017955840 (9.33 GB)
DFS Used: 735916032 (701.82 MB)
Non DFS Used: 4703199232 (4.38 GB)
DFS Remaining: 4119302144 (3.84 GB)
DFS Used%: 7.35%
DFS Remaining%: 41.12%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 0
Last contact: Tue Apr 09 00:45:22 UTC 2024
Last Block Report: Tue Apr 09 00:08:34 UTC 2024
Num of Blocks: 11


Name: 82.115.31.90:9866 (datanode2.vayki.com)
Hostname: datanode2.vayki.com
Decommission Status : Normal
Configured Capacity: 9981673472 (9.30 GB)
DFS Used: 735928320 (701.84 MB)
Non DFS Used: 7027331072 (6.54 GB)
DFS Remaining: 1745391616 (1.63 GB)
DFS Used%: 7.37%
DFS Remaining%: 17.49%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 0
Last contact: Tue Apr 09 00:45:20 UTC 2024
Last Block Report: Tue Apr 09 00:08:32 UTC 2024
Num of Blocks: 11
```

也可以前往 Web UI 界面 `http://namenode.vayki.com:9870/`

![image-20240409085132064](https://media.opennet.top/i/2024/04/09/dqg04e-0.png)
