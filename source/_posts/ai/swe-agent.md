---
description: 发布于 2024-12-28
categories:
- ai
date: 2024-12-28
slug: swe-agent
title: SWE-agent 项目使用记录
updated: 
tags: 
- ai
- swe-agent
copyright: false
---

# SWE-agent 项目使用记录

> 官方文档：https://swe-agent.com/1.0/
>
> LLM 以 gpt-4o 为例

## 在 Codespaces 中安装

点击 [此链接](https://codespaces.new/SWE-agent/SWE-agent) 构建一个Codespaces项目。新建`.env`文件，将OpenAI API Key 填入其中。

```bash
OPENAI_API_KEY='OpenAI API Key Here if using OpenAI Model'
```

## Hello, world

在本教程中，我们将使用命令行界面修复 SWE-agent 的 github 问题。

我们将在 Docker 沙箱中执行代码，因此请确保您已安装 docker（codespaces中已预装）。

从一个简单的例子开始，解决一个关于简单语法错误（ `swe-agent/test-repo #1` ）的问题

>  如果出现 docker 权限问题，可以`sudo -i`后再执行下面的命令

```bash
sweagent run --agent.model.name=gpt-4o --agent.model.per_instance_cost_limit=2.00   --env.repo.github_url=https://github.com/SWE-agent/test-repo  --problem_statement.github_url=https://github.com/SWE-agent/test-repo/issues/1
```

执行结果（过程很长，只截开始和结束）：

![image-20241228205051351](https://media.opennet.top/i/2024/12/28/watty6-0.png)

![image-20241228205159718](https://media.opennet.top/i/2024/12/28/wbgtiv-0.png)

来自gpt-4o的分析：

```

这个过程描述了一个自动化编程智能体（SWE-agent）如何在一个代码库中修复一个 Python 语法错误。下面是详细的步骤：

1. **加载配置文件与初始化环境**：  
   - 加载了默认配置文件 `default.yaml`，并从 `.env` 文件加载环境变量。
   - 设置了问题声明，通过 GitHub 问题 URL 获取错误信息。
   - 启动了一个 Docker 容器，并初始化运行时环境。

2. **问题定位**：
   - 通过搜索命令定位到问题中提到的文件 `missing_colon.py`，它位于 `tests` 目录下。
   - 打开文件查看代码，发现问题出在第 4 行的函数定义中缺少了冒号 (`:`)，这是 Python 函数定义的必需部分。

3. **修复代码**：
   - 在第 4 行函数定义末尾添加了缺失的冒号，修复了语法错误。

4. **测试修复**：
   - 运行了修复后的文件，确认修复后的代码能正确执行。
   - 编写了一个新的测试脚本 `test_division.py` 来验证修复是否有效，测试了普通的除法运算以及除以零的情况，确保能够正确处理 `ZeroDivisionError`。

5. **清理和提交**：
   - 测试成功后，删除了临时测试脚本 `test_division.py`。
   - 最后，将修改的内容提交到代码库。

6. **提交信息与补丁文件**：
   - 生成了补丁文件，可以应用到本地代码库中，确保修改被正确应用。

这些操作涵盖了定位问题、修复代码、验证修复以及最终提交修改的整个过程，体现了一个自动化编程助手的工作流程。
```

## 解决编程问题

将问题放在一个 markdown 文件 `problem.md` 中

该问题要求寻找最小的未出现的正整数

```bash
Given an unsorted integer array nums.
Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

## Example 1:

> Input: nums = [1,2,0]
> Output: 3
> Explanation: The numbers in the range [1,2] are all in the array.

## Example 2:

> Input: nums = [3,4,-1,1]
> Output: 2
> Explanation: 1 is in the array but 2 is missing.

## Example 3:

> Input: nums = [7,8,9,11,12]
> Output: 1
> Explanation: The smallest positive integer 1 is missing.

## Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
```

指定一个 SWE-agent 将要工作的存储库。初始化一个git存储库（在 SWE-agent 存储库之外），并添加一个 `main.py` 文件。

```bash
cd
mkdir repo
cd repo
git init
touch main.py
echo "*.pyc" > .gitignore  # to avoid binary files in patches
```

最好在`main.py`手动指定函数入口，尽管SWE-agent也可以自行添加

```python
from typing import List

class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
```

将所有更改提交到存储库

```bash
git add . && git commit -m "Add problem stub"
```

运行SWE-agent（注意各种文件路径）

```bash
cd
sweagent run  --config /workspaces/SWE-agent/config/coding_challenge.yaml  --problem_statement.path=/workspaces/SWE-agent/problem.md  --env.repo.path=/root/repo  --agent.model.name=gpt-4o  --agent.model.per_instance_cost_limit 3.0  --actions.apply_patch_locally=True
```

执行结果（过程很长，只截开始和结束）：

注意，有概率陷入死循环，请注意token消耗。Ctrl+C终止后注意 docker stop 对应容器

![image-20241228211657768](https://media.opennet.top/i/2024/12/28/xe5a0k-0.png)

![image-20241228211916857](https://media.opennet.top/i/2024/12/28/xfg8z3-0.png)

可以发现 git apply 失败了，但是我们可以查看patch文件

```bash

diff --git a/main.py b/main.py
index 1e7f08f..d13142b 100644
--- a/main.py
+++ b/main.py
@@ -3,3 +3,13 @@ from typing import List
 
 class Solution:
     def firstMissingPositive(self, nums: List[int]) -> int:
+
+        # Create a set from the list to allow O(1) lookups
+        num_set = set(nums)
+        
+        # Start checking from 1 upwards to find the first missing positive integer
+        i = 1
+        while i in num_set:
+            i += 1
+        
+        return i
diff --git a/test.py b/test.py
new file mode 100644
index 0000000..c108c2a
--- /dev/null
+++ b/test.py
@@ -0,0 +1,16 @@
+
+from main import Solution
+
+def test_firstMissingPositive():
+    solution = Solution()
+    
+    # Test cases
+    assert solution.firstMissingPositive([1, 2, 0]) == 3
+    assert solution.firstMissingPositive([3, 4, -1, 1]) == 2
+    assert solution.firstMissingPositive([7, 8, 9, 11, 12]) == 1
+    assert solution.firstMissingPositive([1, 2, 3, 4, 5]) == 6
+    assert solution.firstMissingPositive([]) == 1
+
+    print('All test cases passed')
+
+test_firstMissingPositive()
\ No newline at end of file

```

发现已给出解决方案和测试，运行后通过。

![image-20241228221104951](https://media.opennet.top/i/2024/12/28/yy5t2s-0.png)

## 注意事项

如果配置不当或模型原因，陷入死循环，会快速消耗tokens，请在有人值守的情况下运行。

![image-20241228221400285](https://media.opennet.top/i/2024/12/28/yzwp6u-0.png)

根据论文`SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering`，成功实例的均值成本（GPT-4）为\$1.21，步骤数为12；不成功的均值成本为\$2.52，步骤数为21；成功的运行通常会更早完成，且加大预算不会显著提高性能。
