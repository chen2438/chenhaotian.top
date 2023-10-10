---
description: 发布于 2023-10-10
categories:
- mac
date: 2023-10-10
slug: mac-uninstall-python
title: Mac 卸载 Python
updated: 
tags:
- mac
- python
copyright: false
---

# Mac 卸载 Python

### 卸载

在终端中运行，需要 sudo root 权限

```bash
# 填入你要卸载的 Python 版本
python_version_number=3.10
sudo rm -rf /Library/Frameworks/Python.framework/Versions/${python_version_number}/
sudo rm -rf "/Applications/Python ${python_version_number}/"
cd /usr/local/bin && ls -l | grep "/Library/Frameworks/Python.framework/Versions/${python_version_number}" | awk '{print $9}' | sudo xargs rm
```

### 参考

https://stackoverflow.com/questions/72005302/completely-uninstall-python-3-on-mac
