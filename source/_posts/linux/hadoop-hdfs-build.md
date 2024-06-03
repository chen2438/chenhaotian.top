---
description: 发布于 2024-04-09
categories:
- linux
date: 2024-04-09
slug: hadoop-hdfs-build
title: Hadoop3 分布式集群搭建 (Ubuntu)
updated: 2024-05-26
tags:
- linux
- hadoop
- hdfs
copyright: true
---

# Hadoop3 分布式集群搭建 (Ubuntu)

## 0 架构

|      | node1             | node2       | node3       |
| ---- | ----------------- | ----------- | ----------- |
| HDFS | NameNode          | DataNode    | DataNode    |
|      | SecondaryNameNode |             |             |
|      | DataNode          |             |             |
| YARN | ResourceManager   | NodeManager | NodeManager |
|      | NodeManager       |             |             |

## 1 在所有机器安装 JDK8

使用 Adoptium 源安装 temurin-8-jdk

```bash
sudo apt-get install -y wget apt-transport-https gnupg
wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | sudo apt-key add -
echo "deb https://packages.adoptium.net/artifactory/deb $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/adoptium.list
sudo apt-get update
sudo apt-get install temurin-8-jdk
```

## 2 SSH、环境变量、hosts、主机名设置

### SSH

```bash
vim /etc/ssh/sshd_config
```

修改PermitRootLogin所在行为`PermitRootLogin yes`

### 环境变量

```bash
echo 'export JAVA_HOME=/usr/lib/jvm/temurin-8-jdk-amd64' >> ~/.bashrc
echo 'export HADOOP_HOME=/usr/local/hadoop' >> ~/.bashrc
echo 'export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin' >> ~/.bashrc
source ~/.bashrc
```

### hosts 文件

```bash
vim /etc/hosts
```

修改为你实际的IP地址和域名、主机名。所有机器文件内容一致。

```
127.0.0.1 localhost
10.0.3.2 node1
10.0.3.3 node2
10.0.3.4 node3
```

### 主机名

分别修改3台虚拟机的主机名

```bash
sudo hostnamectl set-hostname node1
sudo hostnamectl set-hostname node2
sudo hostnamectl set-hostname node3
```

修改后`reboot`重启

## 3 在所有机器下载 Hadoop

```bash
cd
wget https://dlcdn.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz
sudo tar zxvf hadoop-3.3.6.tar.gz -C /usr/local/
sudo mv /usr/local/hadoop-3.3.6 /usr/local/hadoop
rm hadoop-3.3.6.tar.gz
```

## 4 在 node1 配置 SSH 免密登录

在 NameNode 上执行。

编辑~/.ssh/config文件

```bash
vim ~/.ssh/config
```

填入以下内容：

```
Host node1
HostName 10.0.3.2
Port 22
User root

Host node2
HostName 10.0.3.3
Port 22
User root

Host node3
HostName 10.0.3.4
Port 22
User root
```

生成密钥并拷贝到3台机器上

```bash
ssh-keygen -t rsa -P ''

ssh-copy-id node1
ssh-copy-id node2
ssh-copy-id node3
```

## 5 在所有机器配置 Hadoop

### hadoop-env.sh

```bash
vim $HADOOP_HOME/etc/hadoop/hadoop-env.sh
```

在文件末尾追加

```bash
export JAVA_HOME=/usr/lib/jvm/temurin-8-jdk-amd64
export HDFS_NAMENODE_USER=root
export HDFS_DATANODE_USER=root
export HDFS_SECONDARYNAMENODE_USER=root
export YARN_RESOURCEMANAGER_USER=root
export YARN_NODEMANAGER_USER=root
```

### core-site.xml

```bash
vim $HADOOP_HOME/etc/hadoop/core-site.xml
```

在configuration标签中添加以下内容

```xml
    <!-- 默认文件系统的名称。通过URI中schema区分不同文件系统 -->
    <!-- file://本地文件系统 hdfs://hadoop分布式文件系统 -->
    <!-- gfs://google文件系统 -->
    <!-- hdfs文件系统访问地址：http://node1:8020 -->
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://node1:8020</value>
    </property>

    <!-- 设置Hadoop本地保存数据路径 -->
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/usr/local/hadoop/tmp</value>
    </property>

    <!-- 设置HDFS web UI用户身份 -->
    <property>
        <name>hadoop.http.staticuser.user</name>
        <value>root</value>
    </property>
```

### hdfs-site.xml

```bash
vim $HADOOP_HOME/etc/hadoop/hdfs-site.xml
```

在configuration标签中添加以下内容

```xml
    <property>
        <name>dfs.replication</name>
        <value>3</value>
    </property>
    <property>
        <name>dfs.namenode.secondary.http-address</name>
        <value>node1:50090</value>
    </property>
```

### mapred-site.xml

```bash
vim $HADOOP_HOME/etc/hadoop/mapred-site.xml
```

在configuration标签中添加以下内容

```xml
    <!-- 设置MR程序默认运行模式： yarn集群模式 local本地模式 -->
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>

    <!-- MR程序历史服务地址 -->
    <property>
        <name>mapreduce.jobhistory.address</name>
        <value>node1:10020</value>
    </property>

    <!-- MR程序历史服务器web端地址 -->
    <property>
        <name>mapreduce.jobhistory.webapp.address</name>
        <value>node1:19888</value>
    </property>

    <property>
        <name>yarn.app.mapreduce.am.env</name>
        <value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>
    </property>

    <property>
        <name>mapreduce.map.env</name>
        <value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>
    </property>

    <property>
        <name>mapreduce.reduce.env</name>
        <value>HADOOP_MAPRED_HOME=${HADOOP_HOME}</value>
    </property>
```

### yarn-site.xml

```bash
vim $HADOOP_HOME/etc/hadoop/yarn-site.xml
```

在configuration标签中添加以下内容

```xml
    <!-- 设置YARN集群主角色运行机器位置 -->
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>node1</value>
    </property>

    <!-- ModeManager上运行的附属服务，需配置成mapreduce_shuffle才可运行程序。 -->
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
    </property>
```

### workers

添加主机名称或IP

```bash
rm $HADOOP_HOME/etc/hadoop/workers
vim $HADOOP_HOME/etc/hadoop/workers
```

```bash
node1
node2
node3
```


## 7 格式化 NameNode

在 NameNode 上执行格式化命令，只需执行一次

```bash
hdfs namenode -format
```

## 8 启动 Hadoop 集群

在 NameNode 执行启动命令。如果不成功，可能是SSH、hosts文件、主机名配置问题。主机名不能相同。

HDFS集群

```bash
start-dfs.sh
stop-dfs.sh
```

YARN集群

```bash
start-yarn.sh
stop-yarn.sh
```

所有集群

```bash
start-all.sh
stop-all.sh
```

## 9 验证集群状态

在 NameNode 查看HDFS集群健康状态

```bash
hdfs dfsadmin -report
```

如果一切顺利，将如下显示：

```bash
root@node1:~# hdfs dfsadmin -report
Configured Capacity: 24163061760 (22.50 GB)
Present Capacity: 5636493312 (5.25 GB)
DFS Remaining: 5636395008 (5.25 GB)
DFS Used: 98304 (96 KB)
DFS Used%: 0.00%
Replicated Blocks:
        Under replicated blocks: 0
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
Live datanodes (3):

Name: 10.0.3.2:9866 (node1)
Hostname: node1
Decommission Status : Normal
Configured Capacity: 8054353920 (7.50 GB)
DFS Used: 32768 (32 KB)
Non DFS Used: 5746188288 (5.35 GB)
DFS Remaining: 1876959232 (1.75 GB)
DFS Used%: 0.00%
DFS Remaining%: 23.30%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 0
Last contact: Sun May 26 14:36:19 UTC 2024
Last Block Report: Sun May 26 14:29:56 UTC 2024
Num of Blocks: 0


Name: 10.0.3.3:9866 (node2)
Hostname: node2
Decommission Status : Normal
Configured Capacity: 8054353920 (7.50 GB)
DFS Used: 32768 (32 KB)
Non DFS Used: 5743456256 (5.35 GB)
DFS Remaining: 1879691264 (1.75 GB)
DFS Used%: 0.00%
DFS Remaining%: 23.34%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 0
Last contact: Sun May 26 14:36:17 UTC 2024
Last Block Report: Sun May 26 14:29:49 UTC 2024
Num of Blocks: 0


Name: 10.0.3.4:9866 (node3)
Hostname: node3
Decommission Status : Normal
Configured Capacity: 8054353920 (7.50 GB)
DFS Used: 32768 (32 KB)
Non DFS Used: 5743403008 (5.35 GB)
DFS Remaining: 1879744512 (1.75 GB)
DFS Used%: 0.00%
DFS Remaining%: 23.34%
Configured Cache Capacity: 0 (0 B)
Cache Used: 0 (0 B)
Cache Remaining: 0 (0 B)
Cache Used%: 100.00%
Cache Remaining%: 0.00%
Xceivers: 0
Last contact: Sun May 26 14:36:17 UTC 2024
Last Block Report: Sun May 26 14:29:49 UTC 2024
Num of Blocks: 0
```

也可以前往HDFS Web UI 界面 `http://node1:9870/`

![image-20240526224035014](https://media.opennet.top/i/2024/05/26/10lkyat-0.png)

YARN集群UI界面：`http://node1:8088`

![image-20240526224100041](https://media.opennet.top/i/2024/05/26/10lqgke-0.png)
