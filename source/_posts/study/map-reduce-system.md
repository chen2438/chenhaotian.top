---
description: 发布于 2024-04-28
categories:
- study
date: 2024-04-28
slug: map-reduce-system
title: MapReduce 系统模拟构建
updated: 
tags: 
- study
- map-reduce
copyright: false
---

# MIT 6.5840 Lab 1: MapReduce

> 由GPT-4翻译自：https://pdos.csail.mit.edu/6.824/labs/lab-mr.html
>
> 略有改动.

### 引言

在这个实验中，您将构建一个MapReduce系统。您将实现一个工作进程，该进程调用应用程序的Map和Reduce函数，并处理文件的读写；还有一个协调器进程，负责将任务分发给工作进程并处理失败的工作进程。您将构建的系统类似于[MapReduce论文](http://research.google.com/archive/mapreduce-osdi04.pdf)中描述的系统。（注意：本实验使用“协调器”而不是论文中的“主节点”。）

### 开始
您需要[设置Go环境](https://pdos.csail.mit.edu/6.824/labs/go.html)来进行实验。

使用[git](https://git-scm.com/)（一个版本控制系统）获取初始实验软件。要了解更多关于git的信息，可以查看[Pro Git书籍](https://git-scm.com/book/en/v2)或[git用户手册](http://www.kernel.org/pub/software/scm/git/docs/user-manual.html)。
```
$ git clone git://g.csail.mit.edu/6.5840-golabs-2024 6.5840
$ cd 6.5840
$ ls
Makefile src
```

我们为您提供了一个简单的顺序mapreduce实现在`src/main/mrsequential.go`中。它一次运行一个map和一个reduce，在单个进程中。我们还为您提供了几个MapReduce应用程序：在`mrapps/wc.go`中的词频统计和在`mrapps/indexer.go`中的文本索引器。您可以按照以下方式顺序运行词频统计：
```
$ cd ~/6.5840
$ cd src/main
$ go build -buildmode=plugin ../mrapps/wc.go
$ rm mr-out*
$ go run mrsequential.go wc.so pg*.txt
$ more mr-out-0
A 509
ABOUT 2
ACT 8
...
```

`mrsequential.go`将其输出保存在名为`mr-out-0`的文件中。输入来自名为`pg-xxx.txt`的文本文件。

您可以从`mrsequential.go`中借用代码。您还应该查看`mrapps/wc.go`，以了解MapReduce应用程序代码的外观。

对于此实验和其他所有实验，我们可能会更新我们提供给您的代码。为确保您可以获取这些更新并使用`git pull`轻松合并，最好保留我们在原始文件中提供的代码。您可以按照实验说明中的指示添加到我们提供的代码中；只是不要移动它。将您自己的新函数放在新文件中是可以的。

### 您的任务

您的任务是实现一个分布式MapReduce，包括两个程序：协调器和工作进程。将有一个协调器进程和一个或多个并行执行的工作进程。在真实系统中，工作进程将在不同的机器上运行，但在本实验中，您将在单个机器上运行它们。工作进程将通过RPC与协调器通信。每个工作进程将在循环中请求任务、从一个或多个文件中读取任务的输入、执行任务、将任务的输出写入一个或多个文件，然后再次请求新任务。如果协调器注意到工作进程在合理的时间内（本实验中使用十秒）没有完成其任务，应将同一任务交给不同的工作进程。

我们为您提供了一些起始代码。协调器和工作进程的"main"例程分别位于`main/mrcoordinator.go`和`main/mrworker.go`中；请不要更改这些文件。您应该将您的实现放在`mr/coordinator.go`、`mr/worker.go`和`mr/rpc.go`中。

以下是在词频统计MapReduce应用程序上运行您的代码的方法。首先，确保词频统计插件是新构建的：
```
$ go build -buildmode=plugin ../mrapps/wc.go
```
在`main`目录中，运行协调器。将`mrcoordinator.go`的参数`pg-*.txt`作为输入文件；每个文件对应一个"分片"，是一个Map任务的输入。

```
$ rm mr-out*
$ go run mrcoordinator.go pg-*.txt
```
在一个或多个其他窗口中，运行一些工作进程：
```
$ go run mrworker.go wc.so
```
当工作进程和协调器完成后，查看`mr-out-*`中的输出。完成实验后，输出文件的排序合并应与顺序输出相匹配，如下所示：
```
$ cat mr-out-* | sort | more
A 509
ABOUT 2
ACT 8
...
```

我们为您提供了一个测试脚本`main/test-mr.sh`。这些测试检查词频统计和文本索引器MapReduce应用程序在给定`pg-xxx.txt`文件作为输入时是否产生正确的输出。测试还检查您的实现是否并行运行Map和Reduce任务，并且您的实现是否能从运行任务时崩溃的工作进程中恢复。

如果您现在运行测试脚本，它将挂起，因为协调器从未完成：
```
$ cd ~/6.5840/src/main
$ bash test-mr.sh
*** Starting wc test.
```
您可以在`mr/coordinator.go`中的Done函数中将`ret := false`改为true，使得协调器立即退出。然后：
```
$ bash test-mr.sh
*** Starting wc test.
sort: No such file or directory
cmp: EOF on mr-wc-all
--- wc output is not the same as mr-correct-wc.txt
--- wc test: FAIL
$
```

测试脚本期望在名为`mr-out-X`的文件中看到输出，每个reduce任务一个。`mr/coordinator.go`和`mr/worker.go`的空实现不会生成这些文件（或做任何其他事情），因此测试失败。

当您完成后，测试脚本的输出应如下所示：

```
$ bash test-mr.sh
*** Starting wc test.
--- wc test: PASS
*** Starting indexer test.
--- indexer test: PASS
*** Starting map parallelism test.
--- map parallelism test: PASS
*** Starting reduce parallelism test.
--- reduce parallelism test: PASS
*** Starting job count test.
--- job count test: PASS
*** Starting early exit test.
--- early exit test: PASS
*** Starting crash test.
--- crash test: PASS
*** PASSED ALL TESTS
$
```

您可能会看到来自Go RPC包的一些错误，例如：
```
2019/12/16 13:27:09 rpc.Register: method "Done" has 1 input parameters; needs exactly three
```
请忽略这些消息；将协调器注册为[RPC服务器](https://golang.org/src/net/rpc/server.go)时，会检查其所有方法是否适合RPC（需要3个输入）；我们知道`Done`方法不是通过RPC调用的。

此外，根据您终止工作进程的策略，您可能会看到一些形式的错误，例如：
```
2024/02/11 16:21:32 dialing:dial unix /var/tmp/5840-mr-501: connect: connection refused
```
在每次测试中看到少量这类消息是正常的；这些错误出现是因为工作进程在协调器退出后无法联系到协调器的RPC服务器。

### 几条规则：

- Map阶段应将中间键分割成`nReduce`个reduce任务的桶，其中`nReduce`是reduce任务的数量——这是`main/mrcoordinator.go`传递给`MakeCoordinator()`的参数。每个映射器应为reduce任务创建`nReduce`个中间文件。
- 工作进程的实现应将第X个reduce任务的输出放在名为`mr-out-X`的文件中。
- `mr-out-X`文件应包含每个Reduce函数输出的一行。这行应使用Go的`"%v %v"`格式生成，调用键和值。可以在`main/mrsequential.go`中查看被注释为“这是正确格式”的行。如果您的实现与此格式偏差太大，测试脚本将失败。
- 您可以修改`mr/worker.go`、`mr/coordinator.go`和`mr/rpc.go`。您可以临时修改其他文件进行测试，但请确保您的代码能与原始版本一起工作；我们将使用原始版本进行测试。
- 工作进程应将Map任务的中间输出放在当前目录的文件中，以便稍后将其作为Reduce任务的输入读取。
- `main/mrcoordinator.go`期望`mr/coordinator.go`实现一个`Done()`方法，当MapReduce作业完全完成时返回true；此时，`mrcoordinator.go`将退出。
- 当作业完全完成时，工作进程应该退出。一种简单的实现方法是使用`call()`的返回值：如果工作进程未能联系到协调器，它可以假设协调器已经退出，因为作业已完成，所以工作进程也可以终止。根据您的设计，您可能还会发现有一个“请退出”的伪任务对协调器分配给工作进程有帮助。

### 提示：

- [指导页面](https://pdos.csail.mit.edu/6.824/labs/guidance.html)上有一些开发和调试的提示。
- 开始的一种方法是修改`mr/worker.go`的`Worker()`，发送RPC到协调器请求任务。然后修改协调器以响应尚未启动的map任务的文件名。然后修改工作进程读取该文件并调用应用程序Map函数，如`mrsequential.go`所示。
- 应用程序的Map和Reduce函数是在运行时使用Go插件包从以`.so`结尾的文件中加载的。
- 如果您更改了`mr/`目录中的任何内容，您可能需要重新构建您使用的任何MapReduce插件，例如使用`go build -buildmode=plugin ../mrapps/wc.go`。
- 本实验依赖于工作进程共享文件系统。当所有工作进程都在同一台机器上运行时这很简单，但如果工作进程在不同的机器上运行，则需要全局文件系统，如GFS。
- 中间文件的合理命名约定是`mr-X-Y`，其中X是Map任务编号，Y是reduce任务编号。
- 工作进程的map任务代码需要一种将中间键/值对存储在文件中的方法，以便在reduce任务期间正确地读回。一种可能是使用Go的`encoding/json`包。将键/值对以JSON格式写入打开的文件，并读回这样的文件：
  ```go
  enc := json.NewEncoder(file)
  for _, kv := ... {
    err := enc.Encode(&kv)
  }
  dec := json.NewDecoder(file)
  for {
    var kv KeyValue
    if err := dec.Decode(&kv); err != nil {
      break
    }
    kva = append(kva, kv)
  }
  ```
- 您的工作进程的map部分可以使用`worker.go`中的`ihash(key)`函数为给定键选择reduce任务。
- 您可以从`mrsequential.go`中借用一些代码来读取Map输入文件，用于在Map和Reduce之间对中间键/值对进行排序，以及用于将Reduce输出存储在文件中。
- 作为RPC服务器的协调器将是并发的；不要忘记锁定共享数据。
- 使用Go的竞态检测器，命令为`go run -race`。`test-mr.sh`在开始时有一个注释告诉您如何使用`-race`运行它。在评估您的实验室时，我们将**不**使用竞态检测器。尽管如此，如果您的代码有竞态，即使没有使用竞态检测器，我们测试时也有很大可能会失败。
- 工作进程有时需要等待，例如，reduce不能开始直到最后一个map完成。一种可能性是让工作进程定期向协调器请求工作，在每次请求之间使用`time.Sleep()`休眠。另一种可能性是让协调器中的相关RPC处理程序有一个循环等待，使用`time.Sleep()`或`sync.Cond`。Go为每个RPC的处理程序运行其自己的线程，因此一个处理程序的等待并不妨碍协调器处理其他RPC。
- 协调器不能可靠地区分崩溃的工作进程、活着但由于某种原因停滞的工作进程，以及执行但速度太慢无法派上用场的工作进程。您能做的最好的是让协调器等待一段时间，然后放弃并将任务重新分配给另一个工作进程。在本实验中，让协调器等待十秒；之后，协调器应该假设工作进程已经死亡（当然，它可能没有死亡）。
- 如果您选择实施备份任务（第3.6节），请注意，我们测试您的代码在工作进程执行任务而不崩溃时不会调度额外的任务。备份任务应该只在相对较长的时间之后（例如，10秒）被调度。
- 要测试崩溃恢复，您可以使用`mrapps/crash.go`应用程序插件。它会在Map和Reduce函数中随机退出。
- 为了确保在出现崩溃时没有人观察到部分写入的文件，MapReduce论文提到了使用临时文件并在完全写入后原子地重命名它的技巧。您可以使用`ioutil.TempFile`（如果您运行的是Go 1.17或更高版本，则使用`os.CreateTemp`）来创建临时文件，并使用`os.Rename`来原子地重命名它。
- `test-mr.sh`在子目录`mr-tmp`中运行所有其进程，因此如果出了问题，您想查看中间或输出文件，请在那里查看。您可以暂时修改`test-mr.sh`在失败的测试后`exit`，以便脚本不继续测试（并覆盖输出文件）。
- `test-mr-many.sh`连续多次运行`test-mr.sh`，您可能希望这样做以发现低概率的错误。它接受运行测试的次数作为参数。您不应同时运行多个`test-mr.sh`实例，因为协调器将重用相同的套接字，从而导致冲突。
- Go RPC只发送名称以大写字母开头的结构字段。子结构也必须有大写的字段名。
- 在调用RPC `call()`函数时，回复结构应包含所有默认值。RPC调用应该是这样的，不在调用前设置回复结构的任何字段。如果您传递的回复结构包含非默认字段，RPC系统可能会默默返回错误的值。

  ```go
  reply := SomeType{}
  call(..., &reply)
  ```

