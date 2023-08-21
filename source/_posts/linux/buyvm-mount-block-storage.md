---
description: 发布于 2023-07-13
categories:
- linux
date: 2023-07-13
slug: buyvm-mount-block-storage
title: BuyVM 挂载存储块
updated: 
tags: 
- linux
- buyvm
- mount
- mnt
copyright: false
---

# BuyVM 挂载存储块

参考：

- https://zhujitips.com/2653
- https://www.pigji.com/898.html

## 1 控制台操作

存储块购买完毕后，进入后台管理界面，进入对应 VPS 界面，点击 Volumes

![image-20230713081636682](https://media.opennet.top/i/2023/07/13/64af42667294d.png)

然后选择 Attach To Virtual Server

![image-20230713081854982](https://media.opennet.top/i/2023/07/13/64af42f0be15b.png)

在 Attach To中选择可挂载的 VPS ，点击 Attach Volume

如果 VPS 已经重装过系统，可以正常使用，那么不需要重启，直接进系统准备挂载

否则先重装系统

![image-20230713082231205](https://media.opennet.top/i/2023/07/13/64af43c87cf1e.png)

## 2 Linux 终端操作

进系统，列出所有磁盘的唯一标识符

```bash
ls /dev/disk/by-id/
```

![image-20230713083014238](https://media.opennet.top/i/2023/07/13/64af4596e4829.png)

scsi-0BUYVM_SLAB_VOLUME-序列号 就是存储块

格式化存储块

```bash
mkfs.ext4 -F /dev/disk/by-id/scsi-0BUYVM_SLAB_VOLUME-序列号 #注意更改序列号
```

![image-20230713083346530](https://media.opennet.top/i/2023/07/13/64af466b18313.png)

创建挂载目录

```bash
mkdir -p /mnt/slab1
```

挂载存储块到目录

```bash
mount -o discard,defaults /dev/disk/by-id/scsi-0BUYVM_SLAB_VOLUME-序列号 /mnt/slab1
```

查看所有已挂载的文件系统的磁盘使用情况

```bash
df -h
```

![image-20230713084812591](https://media.opennet.top/i/2023/07/13/64af49cd63f43.png)

可以看到已经成功挂载

给予文件夹777或755读写权限

```bash
chmod -R 777 /mnt/slab1
```

**设置开机自动挂载**

```bash
vim /etc/fstab
```

在文件的最后，添加以下行

```bash
/dev/disk/by-id/scsi-0BUYVM_SLAB_VOLUME-序列号 /mnt/slab1 ext4 discard,defaults 0 0
```

测试 `/etc/fstab` 文件没有错误

```bash
mount -a
```

如果没有错误，这个命令不会有输出

注意：谨慎编辑 `/etc/fstab` 文件，若其出错，可能会导致系统启动失败。

## 提示

在访问存储块时，应该访问挂载点 `/mnt/slab1` 而不是文件系统 `/dev/sda`

> 在 Unix 和类 Unix 系统中，`/dev/sda1` 这样的设备文件代表了一个物理设备，但这并不是你可以直接读写文件的地方。这是因为设备文件代表了整个物理设备，而不仅仅是设备上的文件系统。
>
> 当你将 `/dev/sda1` 挂载到 `/mnt/mydisk` 时，你实际上是在告诉操作系统如何解析设备上的文件系统，以便你可以像操作其他文件和目录一样操作设备上的文件。这使得你可以通过路径 `/mnt/mydisk` 访问到设备上的文件，而不是直接操作设备文件 `/dev/sda1`。
>
> 如果你尝试直接读取或写入 `/dev/sda1`，你实际上是在直接操作磁盘块，而不是文件。这通常需要特殊的知识和工具，并且如果操作不当，可能会破坏文件系统，导致数据丢失。
>
> 所以，通常来说，你应该通过挂载点来访问设备上的文件，而不是直接访问设备文件。