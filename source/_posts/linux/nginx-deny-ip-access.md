---
description: 发布于 2023-11-14
categories:
- linux
date: 2023-11-14
slug: nginx-deny-ip-access
title: Nginx 禁止 IP 访问并防止泄漏 SSL 证书
updated: 
tags: 
- linux
- nginx
- tls
- ssl
- openssl
copyright: true
---

# Nginx 禁止 IP 访问并防止泄漏 SSL 证书

## 引言

本文旨在使用 Nginx 禁止 IP 直接访问，并防止在`https://ip地址` 访问时暴露网站的 SSL 证书。

## OpenSSL 生成自签证书

安装OpenSSL

```bash
apt update
apt install openssl
```

生成自签名 SSL 证书和密钥

```bash
mkdir /etc/nginx/ssl/
openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout /etc/nginx/ssl/default.key -out /etc/nginx/ssl/default.crt
```

## Nginx 配置

设置一个默认的 server 块来拦截所有未指定的请求（通常是直接通过 IP 访问的）并返回错误代码，比如 444 （无响应，推荐）或者 403 （禁止访问）。

配置示例：

```nginx
# 默认 server 块
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    
    server_name _;
    
    # 为 443 端口配置自签名证书（或任意证书），不要使用实际域名证书
    ssl_certificate /etc/nginx/ssl/default.crt;
    ssl_certificate_key /etc/nginx/ssl/default.key;

    # 返回 444 关闭连接，或者 403 禁止访问
    return 444;
    # return 403;
}

# 你的正常网站 server 块
server {
    listen 80;
    listen [::]:80;
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name example.com www.example.com; # 自行替换

    # SSL 证书路径 自行替换
    ssl_certificate /etc/nginx/ssl/example.com.crt;
    ssl_certificate_key /etc/nginx/ssl/example.com.key;

    # 网站的根目录和其他配置
    root /var/www/html;
    index index.html index.htm;
    
    # 省略其他配置
}
```

重启Nginx

```bash
nginx -t # 测试配置文件是否有语法错误
systemctl restart nginx # 重启Nginx
```

## 完成效果

**HTTP访问**

![截屏2023-11-14 19.25.36](https://media.opennet.top/i/2023/11/14/vutzhv-0.png)

**HTTPS访问**

![截屏2023-11-14 19.26.41](https://media.opennet.top/i/2023/11/14/vvimoq-0.png)

![截屏2023-11-14 19.28.35](https://media.opennet.top/i/2023/11/14/vwpae9-0.png)
