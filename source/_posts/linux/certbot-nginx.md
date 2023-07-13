---
description: 发布于 2023-07-13
categories:
- linux
date: 2023-07-13
slug: certbot-nginx
title: 使用 Certbot 为 Nginx 自动配置 SSL 证书
updated: 
tags: 
- linux
- certbot
- nginx
- tls
- ssl
copyright: true
---

# 使用 Certbot 为 Nginx 自动配置 SSL 证书

## 配置步骤

以 Debian 11 为例

**1. 安装Certbot和Nginx插件**

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```

**2. 获取和安装证书**

运行 Certbot 自动安装 SSL 证书。注意替换`your_domain`：

```bash
sudo certbot --nginx -d your_domain
```

Certbot 将自动与 Let's Encrypt 的服务器通信，验证域名，请求SSL证书。

**3. 测试自动更新**

Let's Encrypt 的证书每 90 天需要更新一次。运行以下命令来测试自动更新是否正常工作：

```bash
sudo certbot renew --dry-run
```

若测试成功，证书将自动更新，无需任何其他操作。

## 配置过程示例

若是第一次配置，会要求输入一个合法邮箱提供给 Let's Encrypt。若自动更新失效，Let's Encrypt 会在证书失效前给你发邮件。

```bash
root@VM-PV30VGNA7611:~# sudo certbot --nginx -d storage.opennet.top
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for storage.opennet.top
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/default

Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 1

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations! You have successfully enabled https://storage.opennet.top

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=storage.opennet.top
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/storage.opennet.top/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/storage.opennet.top/privkey.pem
   Your cert will expire on 2023-10-11. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

自动更新测试

```bash
root@VM-PV30VGNA7611:~# sudo certbot renew --dry-run
Saving debug log to /var/log/letsencrypt/letsencrypt.log

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Processing /etc/letsencrypt/renewal/storage.opennet.top.conf
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Cert not due for renewal, but simulating renewal for dry run
Plugins selected: Authenticator nginx, Installer nginx
Renewing an existing certificate
Performing the following challenges:
http-01 challenge for storage.opennet.top
Waiting for verification...
Cleaning up challenges

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
new certificate deployed with reload of nginx server; fullchain is
/etc/letsencrypt/live/storage.opennet.top/fullchain.pem
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
** DRY RUN: simulating 'certbot renew' close to cert expiry
**          (The test certificates below have not been saved.)

Congratulations, all renewals succeeded. The following certs have been renewed:
  /etc/letsencrypt/live/storage.opennet.top/fullchain.pem (success)
** DRY RUN: simulating 'certbot renew' close to cert expiry
**          (The test certificates above have not been saved.)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

