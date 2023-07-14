---
description: 发布于 2023-07-14
categories:
- debian
date: 2023-07-14
slug: d-upd-nodejs
title: Debian 11 更新 Node.js 版本
updated: 
tags: 
- debian
- nodejs
copyright: true
---

# Debian 11 更新 Node.js 版本

## 步骤

从 NodeSource 服务下载需要的 Node.js 安装脚本。注意更换版本号。当前的 LTS 版本是 18.x

```bash
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

现在可以直接从 apt 安装（更新）noedjs

```bash
sudo apt install -y nodejs
```

查看 node 版本

```bash
node -v
```

## 过程演示

```bash
root@VM-PV30VGNA7611:~# curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -

## Installing the NodeSource Node.js 18.x repo...


## Populating apt-get cache...

+ apt-get update
命中:1 http://deb.debian.org/debian buster InRelease
命中:2 http://deb.debian.org/debian buster-updates InRelease
获取:3 http://deb.debian.org/debian buster-backports InRelease [51.4 kB]
命中:4 https://download.docker.com/linux/debian buster InRelease
命中:5 http://security.debian.org/debian-security buster/updates InRelease
已下载 51.4 kB，耗时 1秒 (62.1 kB/s)
正在读取软件包列表... 完成

## Confirming "buster" is supported...

+ curl -sLf -o /dev/null 'https://deb.nodesource.com/node_18.x/dists/buster/Release'

## Adding the NodeSource signing key to your keyring...

+ curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | tee /usr/share/keyrings/nodesource.gpg >/dev/null

## Creating apt sources list file for the NodeSource Node.js 18.x repo...

+ echo 'deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x buster main' > /etc/apt/sources.list.d/nodesource.list                                                                                                                     
+ echo 'deb-src [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x buster main' >> /etc/apt/sources.list.d/nodesource.list                                                                                                                

## Running `apt-get update` for you...

+ apt-get update
命中:1 http://security.debian.org/debian-security buster/updates InRelease
命中:2 http://deb.debian.org/debian buster InRelease
命中:3 http://deb.debian.org/debian buster-updates InRelease
命中:4 http://deb.debian.org/debian buster-backports InRelease
命中:5 https://download.docker.com/linux/debian buster InRelease
获取:6 https://deb.nodesource.com/node_18.x buster InRelease [4,584 B]
获取:7 https://deb.nodesource.com/node_18.x buster/main amd64 Packages [776 B]
已下载 5,360 B，耗时 1秒 (6,592 B/s)
正在读取软件包列表... 完成


## Run `sudo apt-get install -y nodejs` to install Node.js 18.x and npm
## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn


root@VM-PV30VGNA7611:~# sudo apt install -y nodejs
正在读取软件包列表... 完成
正在分析软件包的依赖关系树
正在读取状态信息... 完成
下列软件包是自动安装的并且现在不需要了：
  gyp javascript-common libbrotli1 libc-ares2 libjs-inherits libjs-is-typedarray libssl-dev libuv1 libuv1-dev node-abbrev node-ajv node-ansi node-ansi-align
  node-ansi-regex node-ansi-styles node-ansistyles node-aproba node-archy node-are-we-there-yet node-asn1 node-assert-plus node-asynckit node-aws-sign2 node-aws4
  node-balanced-match node-bcrypt-pbkdf node-bluebird node-boxen node-brace-expansion node-builtin-modules node-builtins node-cacache node-call-limit node-camelcase
  node-caseless node-chalk node-chownr node-cli-boxes node-cliui node-clone node-co node-color-convert node-color-name node-combined-stream node-concat-map
  node-concat-stream node-config-chain node-console-control-strings node-copy-concurrently node-core-util-is node-cross-spawn node-cyclist node-dashdash
  node-decamelize node-decompress-response node-deep-extend node-defaults node-delayed-stream node-delegates node-detect-indent node-detect-newline node-duplexer3
  node-duplexify node-ecc-jsbn node-editor node-encoding node-end-of-stream node-errno node-escape-string-regexp node-execa node-extend node-extsprintf node-find-up
  node-flush-write-stream node-forever-agent node-form-data node-from2 node-fs-vacuum node-fs-write-stream-atomic node-fs.realpath node-gauge node-get-caller-file
  node-get-stream node-getpass node-glob node-got node-graceful-fs node-har-schema node-har-validator node-has-flag node-has-symbol-support-x node-has-to-string-tag-x
  node-has-unicode node-hosted-git-info node-http-signature node-iconv-lite node-iferr node-import-lazy node-imurmurhash node-inflight node-inherits node-ini
  node-invert-kv node-is-builtin-module node-is-npm node-is-object node-is-plain-obj node-is-retry-allowed node-is-stream node-is-typedarray node-isarray node-isexe
  node-isstream node-isurl node-jsbn node-json-parse-better-errors node-json-schema node-json-stable-stringify node-json-stringify-safe node-jsonify node-jsonparse
  node-jsonstream node-jsprim node-latest-version node-lazy-property node-lcid node-libnpx node-locate-path node-lockfile node-lowercase-keys node-lru-cache node-mem
  node-mime-types node-mimic-fn node-mimic-response node-minimatch node-minimist node-mississippi node-mkdirp node-move-concurrently node-mute-stream node-node-uuid
  node-nopt node-normalize-package-data node-npm-package-arg node-npm-run-path node-npmlog node-oauth-sign node-object-assign node-once node-opener node-os-locale
  node-osenv node-p-cancelable node-p-finally node-p-limit node-p-locate node-p-timeout node-package-json node-parallel-transform node-path-exists
  node-path-is-absolute node-path-is-inside node-performance-now node-prepend-http node-process-nextick-args node-promise-inflight node-promzard node-proto-list
  node-prr node-pump node-pumpify node-punycode node-qs node-qw node-rc node-read node-read-package-json node-readable-stream node-registry-auth-token
  node-registry-url node-request node-require-directory node-require-main-filename node-resolve-from node-retry node-rimraf node-run-queue node-safe-buffer node-semver
  node-semver-diff node-set-blocking node-sha node-shebang-command node-shebang-regex node-signal-exit node-slash node-slide node-sorted-object node-spdx-correct
  node-spdx-expression-parse node-spdx-license-ids node-sshpk node-ssri node-stream-each node-stream-iterate node-stream-shift node-string-decoder node-string-width
  node-strip-ansi node-strip-eof node-strip-json-comments node-supports-color node-tar node-term-size node-text-table node-through node-through2 node-timed-out
  node-tough-cookie node-tunnel-agent node-tweetnacl node-typedarray node-uid-number node-unique-filename node-unpipe node-url-parse-lax node-url-to-options
  node-util-deprecate node-uuid node-validate-npm-package-license node-validate-npm-package-name node-verror node-wcwidth.js node-which node-which-module
  node-wide-align node-widest-line node-wrap-ansi node-wrappy node-write-file-atomic node-xdg-basedir node-xtend node-y18n node-yallist node-yargs node-yargs-parser
  python-pkg-resources
使用'sudo apt autoremove'来卸载它(它们)。
下列软件包将被【卸载】：
  libnode-dev libnode64 node-gyp nodejs-doc npm
下列软件包将被升级：
  nodejs
升级了 1 个软件包，新安装了 0 个软件包，要卸载 5 个软件包，有 5 个软件包未被升级。
需要下载 28.7 MB 的归档。
解压缩后会消耗 146 MB 的额外空间。
获取:1 https://deb.nodesource.com/node_18.x buster/main amd64 nodejs amd64 18.16.1-deb-1nodesource1 [28.7 MB]
已下载 28.7 MB，耗时 1秒 (44.7 MB/s)
apt-listchanges: 读取变更记录(changelogs)...
(正在读取数据库 ... 系统当前共安装有 38371 个文件和目录。)
正在卸载 npm (5.8.0+ds6-4+deb10u2) ...
正在卸载 node-gyp (3.8.0-6) ...
正在卸载 libnode-dev:amd64 (10.24.0~dfsg-1~deb10u3) ...
正在卸载 nodejs-doc (10.24.0~dfsg-1~deb10u3) ...
dpkg: libnode64:amd64：有依赖问题，但是如您所愿，将继续卸载：
 nodejs 依赖于 libnode64 (= 10.24.0~dfsg-1~deb10u3).

正在卸载 libnode64:amd64 (10.24.0~dfsg-1~deb10u3) ...
(正在读取数据库 ... 系统当前共安装有 35778 个文件和目录。)
准备解压 .../nodejs_18.16.1-deb-1nodesource1_amd64.deb  ...
正在解压 nodejs (18.16.1-deb-1nodesource1) 并覆盖 (10.24.0~dfsg-1~deb10u3) ...
正在设置 nodejs (18.16.1-deb-1nodesource1) ...
正在处理用于 libc-bin (2.28-10+deb10u2) 的触发器 ...
正在处理用于 man-db (2.8.5-2) 的触发器 ...
root@VM-PV30VGNA7611:~# node -v
v18.16.1
```

