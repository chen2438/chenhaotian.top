---
description: 发布于 2025-01-06
categories:
- algorithm
date: 2025-01-06
slug: ning's-road-to-olympiad
title: ZSTUOJ 宁宁的奥数路
updated: 
tags: 
- algorithm
copyright: false
---

# ZSTUOJ 宁宁的奥数路

## 题目描述

宁宁参加奥数班，他遇到的第一个问题是这样的：口口口+口口口=口口口，宁宁需要将1~9 九个数分别填进对应的空格内，使等式成立。现在宁宁填了一个算式，你能帮他验证是否正确么？

**输入**

 分别输入三个三位数，依次表示等式里的三个数。

**输出**

 如果等式成立，输出：YES!，否则输出：NO!

**样例输入**

```
173 286 459
```

**样例输出**

```
YES!
```

## 代码

注意：**有一组测试数据疑似为多组测试**，题目中未说明

### 传统做法

```cpp
#include <iostream>
using namespace std;

int bucket[10];

int main() {
    int a, b, c;
    while (cin >> a >> b >> c) {
        bool ans = true;
        if (a + b != c) ans = false;
        for (int i = 0; i < 10; i++) {
            bucket[i] = 0;
        }
        for (int i = 0; i < 3; i++) {
            bucket[a % 10]++;
            a /= 10;
            bucket[b % 10]++;
            b /= 10;
            bucket[c % 10]++;
            c /= 10;
        }
        for (int i = 0; i < 10; i++) {
            if (bucket[i] > 1) {
                ans = false;
                break;
            }
        }
        if (bucket[0] > 0) ans = false;
        if (ans)
            cout << "YES!" << endl;
        else
            cout << "NO!" << endl;
    }
}
```

### STL做法

```cpp
#include <iostream>
#include <set>
#include <string>
using namespace std;

bool isValidEquation(int a, int b, int c) {
    if (a + b != c) return false;
    string combined = to_string(a) + to_string(b) + to_string(c);
    if (combined.length() != 9) return false;
    set<char> digits(combined.begin(), combined.end());
    return digits.size() == 9 && digits.count('0') == 0;
}

int main() {
    int a, b, c;
    while (cin >> a >> b >> c) {
        if (isValidEquation(a, b, c)) {
            cout << "YES!" << endl;
        } else {
            cout << "NO!" << endl;
        }
    }
    return 0;
}
```

