---
description: 发布于 2023-07-17
categories:
- linux-app
date: 2023-07-17
slug: easy-image
title: 不使用宝塔面板 安装 EasyImage 简单图床
updated:
tags:
- linux-app
- easy-image
copyright: true
---

# 不使用宝塔面板 安装 EasyImage 简单图床

## 前言

如果不希望安装宝塔面板或其国际版 aapanel（尽管宝塔面板可以在安装后关闭），那么可以参考这篇文章。

**本文安装环境为 Debian 11, 在 Ubuntu 20.04 测试通过**

## 安装 PHP

安装 PHP 7.4

```bash
apt update -y
apt install php7.4 php7.4-fpm 
```

安装 PHP 拓展

```bash
apt install php7.4-fileinfo php7.4-iconv php7.4-zip php7.4-mbstring php7.4-gd
```

配置 PHP

```bash
vim /etc/php/7.4/fpm/php.ini
```

查找 `upload_max_filesize` `post_max_size` `memory_limit` ，按需求设置。

![image-20230717101346573](https://media.opennet.top/i/2023/07/17/64b4a3dc314e0.png)

![image-20230717101502521](https://media.opennet.top/i/2023/07/17/p1jpgw-2.png)

![image-20230717153827746](https://media.opennet.top/i/2023/07/17/pfuskn-2.png)

重启 PHP

```bash
systemctl restart php7.4-fpm
```

## 安装 Nginx

安装 Nginx

```bash
apt install nginx
```

拉取网站代码

```bash
cd /var/www/html
git clone https://github.com/icret/EasyImages2.0.git
```

赋予适当权限

```bash
chmod -R 755 /var/www/html/EasyImages2.0/
chown -R www-data:www-data /var/www/html/EasyImages2.0/
```

配置 Nginx

```bash
rm /etc/nginx/sites-enabled/default
vim /etc/nginx/sites-enabled/default
```

填入以下配置，**注意更改域名**

此时不需要配置 443 监听和 SSL，之后由 Certbot 自动配置

```bash
server {
    server_name image.example.com;  # 你的域名
    listen 80;
    root /var/www/html/EasyImages2.0/;
    index index.php index.html;

    client_header_timeout 300s;
    client_body_timeout 300s; # 防止大图片上传超时
    client_max_body_size 2000m; # 应不小于100m，防止上传大图片 HTTP 413 错误

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }

    location ~* ^/(config|docs|i|public)/.*\.(php|php5)$ {
        deny all; # 安全设置
    }
}
```

检查配置文件

```bash
nginx -t
```

如果出现以下内容表示正常

```bash
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

重启 Nginx

```bash
systemctl restart nginx
```

使用 Certbot 为 Nginx 配置 SSL 证书

```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d your_domain #你的域名
```

测试证书自动更新

```bash
certbot renew --dry-run
```

安装环境部署完毕，访问你的域名即可进行网站初始化。

如果一切正常，检测结果应为全部通过。

![image-20230717100543832](https://media.opennet.top/i/2023/07/17/qnej20-0.png)

## 注意事项 / 提示

- 官方 Github 仓库：https://github.com/icret/EasyImages2.0/
- 所有操作以 root 权限进行
- Vim 的操作可自行寻找教程或询问 ChatGPT
- 更改 PHP 和 Nginx 配置文件后记得重启

	```bash
	systemctl restart php7.4-fpm
	systemctl restart nginx
	```

- 从其他图床迁移图片后记得更改图片权限为 0755 (或0644) 和 www-data

    ```bash
    chmod -R 755 /var/www/html/EasyImages2.0/
    chown -R www-data:www-data /var/www/html/EasyImages2.0/
    ```
