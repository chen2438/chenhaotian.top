---
description: 发布于 2025-01-09
categories:
- algorithm
date: 2025-01-09
slug: the-other-side
title: ZSTUOJ 彼岸
updated: 
tags: 
- algorithm
- dp
copyright: false
---

# ZSTUOJ 彼岸

## 题目描述

突破蝙蝠的包围，yifenfei来到一处悬崖面前，悬崖彼岸就是前进的方向，好在现在的yifenfei已经学过御剑术，可御剑轻松飞过悬崖。现在的问题是：悬崖中间飞着很多红，黄，蓝三种颜色的珠子，假设我们把悬崖看成一条长度为n的线段，线段上的每一单位长度空间都可能飞过红，黄，蓝三种珠子，而yifenfei必定会在该空间上碰到一种颜色的珠子。如果在连续3段单位空间碰到的珠子颜色都不一样，则yifenfei就会坠落。比如经过长度为3的悬崖，碰到的珠子先后为 “红黄蓝”，或者 “蓝红黄” 等类似情况就会坠落，而如果是 “红黄红” 或者 “红黄黄”等情况则可以安全到达。 现在请问：yifenfei安然抵达彼岸的方法有多少种？

**输入**

输入一个正整数n (n<=40)。

**输出**

输出一个整数，表示yifenfei安然抵达彼岸的方法数。

**样例输入**

```
3
```

**样例输出**

```
21
```

## 思路

### 公式推导
#### 定义
-  `dp[j][k][l][i]`  表示长度为`i`的，最后三段的颜色为`j,k,l`的线段的数量

#### 状态转移

`dp[j][k][l][i] += dp[m][j][k][i - 1]`

在满足`不是（连续3段单位空间碰到的珠子颜色都不一样）`，即`!(j!=k && k!=l && l!=j)`的情况下，

长度为`i`的，最后三段的颜色为`j,k,l`的线段的数量
$$
dp[j][k][l][i] = \sum_{m=0}^{2} dp[m][j][k][i-1]
$$

### 初始条件

`dp[i][j][k][3] = 1` ，其中`i != j && j != k && k != i`

## 代码

```cpp
#include <iostream>
using namespace std;

long long dp[3][3][3][50];

int main() {
    int n;
    cin >> n;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 3; k++) {
                if (i != j && j != k && k != i) continue;
                dp[i][j][k][3] = 1;
            }
        }
    }
    for (int i = 4; i <= n; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 3; k++) {
                for (int l = 0; l < 3; l++) {
                    dp[j][k][l][i] = 0;
                    for (int m = 0; m < 3; m++) {
                        if (j != k && k != l && l != j) continue;
                        // if (m != j && j != k && k != m) continue; 不需要此行
                        dp[j][k][l][i] += dp[m][j][k][i - 1];
                    }
                }
            }
        }
    }
    long long ans = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 3; k++) {
                ans += dp[i][j][k][n];
            }
        }
    }
    cout << ans << endl;
    return 0;
}
```

