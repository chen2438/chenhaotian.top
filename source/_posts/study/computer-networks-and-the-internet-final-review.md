---
description: 发布于 2025-12-18
categories:
- study
date: 2025-12-18
slug: computer-networks-and-the-internet-final-review
title: 计算机网络与互联网 期末复习
updated:
tags:
- study
- bristol
copyright: false
---

# 计算机网络与互联网 期末复习

> University of Bristol
>
> EEMEM0011
>
> Computer Networks and the Internet
>
> Final Review
>
> Msc Internet of Things with AI 物联网与人工智能
>
> 布里斯托大学 2025 计算机网络与互联网
>
> 所涉及版权归原作者所有
>
> The copyrights involved belong to the original author
>
> Program Link: https://upc.bristol.ac.uk/unit-programme-catalogue/UnitDetails.jsa?ayrCode=25%2F26&unitCode=EEMEM0011
>
> 注意：时间原因，本文不包括后三周的授课内容，即应用层（DNS、Email、HTTP等）、网络安全（加密、签名、证书等）的内容。后三周的内容多为概念，很少涉及计算。

## 1 Concept

### Network

PAN – Personal Area Network: Bluetooth, Wi-Fi (hotspot)

LAN – Local Area Network: Wi-Fi (router)

MAN – Metropolitan Area Network: university campus network

WAN – Wide Area Network: Internet

### Protocol Hierarchies

协议层次结构

**Layered Design:** divide network functionality. 

​	**分层设计：** 将网络功能划分为不同层。

Protocols communicate logically with same layer, but implemented using lower layers.

​	协议逻辑上与对等层通信，但实际通过下层实现。

Transmission: each layer adds headers; reception removes headers.

​	传输时逐层加头部，接收时逐层去头部。

A layer offers a service To the layer IMMEDIATELY above

​	一层只向其上一层提供服务

A layer uses a protocol To talk to the same layer on a different device

​	一层使用 协议 与不同设备上的同一层通信

### OSI Model

![image-20251002214146448](https://media.opennet.top/i/2025/10/03/7au9a6-0.png)

| 7    | Application  | -    | Functions needed by users          |
| ---- | ------------ | ---- | ---------------------------------- |
| 6    | Presentation | -    | Converts different representations |
| 5    | Session      | -    | Manages task dialogs               |
| 4    | Transport    | -    | Provides End-to-End delivery       |
| 3    | Network      | -    | Sends packets over multiple links  |
| 2    | Data Link    | -    | Sends **frames of information**    |
| 1    | Physical     | -    | Sends bits as signals              |

| 7 | 应用层 | - | 用户所需的功能 |
| ---- | ------------ | ---- | ---------------------------------- |
| 6 | 表示层 | - | 转换不同的表示形式 |
| 5 | 会话层 | - | 管理任务对话 |
| 4 | 传输层 | - | 提供端到端传输 |
| 3 | 网络层 | - | 通过多个链路发送数据包 |
| 2 | 数据链路层 | - | 发送信息帧 |
| 1 | 物理层 | - | 将比特作为信号发送 |

**Link Layer:**

Framing, MAC Addressing, Error Detection and Handling, Flow Control, Medium Access Control

封装成帧、MAC寻址、差错检测、流控、介质访问控制

### Hop-by-Hop vs End-to-End

**End-to-End (L4–L7):** communication between source and destination processes.

​	**端到端（第4–7层）：** 进程间通信。

**Hop-by-Hop (L1–L3):** transmitting data across each physical hop.

- L1: bits, may have errors.
- L2: frames, retransmission + medium access control.
- L3: packets, routing across multiple hops.
- **逐跳传输（第1–3层）：** 每一跳的数据传递。
    - L1：比特，可能出错。
    - L2：帧，可重传 + 媒体接入控制。
    - L3：分组，路由，跨越多跳传输。

### TCP/IP

OSI:
	+ influential, clear concepts 有影响力，概念清晰
	- Bogged down by politics and complexity 受政治和复杂性的困扰
	TCP/IP:
	+ successful, simple protocols, that actually work 成功，协议简单，有效
	- Weak model, derived after the fact: Protocols came before the model 模型薄弱，事后推导：协议先于模型


![image-20251002214848579](https://media.opennet.top/i/2025/10/03/7f0va3-0.png)

### Reference model

![image-20251002214918477](https://media.opennet.top/i/2025/10/03/7ffw9l-0.png)

### Questions

## 2 Basics of Link Layer

### Data Link Layer Design Issues

**Physical Layer**: delivers bits of information

functions of Data Link Layer

- Providing **service interface** to the network layer
- Dealing with **transmission errors**.
- Regulating the **flow** of data
- Sender Takes the packets from Network layer, and **Encapsulates** them into **frames** 

### Framing - Byte Count

字符计数法

Each frame begins with byte count

在帧头部用一个计数字段标明帧内字节数

Difficult to re-synchronise 难以重新同步

### Framing - Byte stuffing

字符填充的首位定界符法

FLAG byte delimits frames (marks start & end)

用FLAG字节限定帧的开始和结束

FLAG must be ESCaped when appearing in the frame

在原始帧内的所有 FLAG 和 ESC 之前加 ESC

### Jan 2017

A byte stuffing algorithm uses the FLAG byte as the starting and ending delimiter for frames and uses the ESC flag to escape accidental appearances of the FLAG byte in the data stream. The following data segment occurs in the middle of a data stream:

![image-20251003144951340](https://media.opennet.top/i/2025/10/03/zjrrby-0.png)

**What is the output after stuffing?**

**Answer**: `A   B   ESC ESC   C   ESC ESC   ESC FLAG   ESC FLAG   D`

### Jan 2018

A byte stuffing algorithm uses the FLAG byte as the starting and ending delimiter for frames and uses the ESC byte to escape accidental appearances of the FLAG byte in the data stream. **The algorithm does not escape accidental appearances of the ESC byte**.

---

(a) Shortly after initialisation, the receiver receives the following sequence of bytes:

```FLAG   B   ESC   ESC   F   D   FLAG```

**What are the original frame bytes recovered by the receiver after unstuffing?**

**Answer**: `B  ESC  ESC  F  D`

---

**(b)** Using a similar diagram, provide a sequence of bytes that demonstrates that this algorithm is flawed. Explain what the flaw is.

**Answer**:

**Given rule:**

- `FLAG` delimits start/end of a frame.
- Sender *only* escapes `FLAG` (by prefixing it with `ESC`).
- `ESC` itself is **never** escaped.

**Example:** 

Frame 1 data = `X  ESC`, Frame 2 data = `Y`

Bytes put by the sender: `FLAG  X  ESC  FLAG  FLAG  Y  FLAG`

What the receiver does:

- Sees `FLAG` → start of frame
- Reads `X`
- Sees `ESC FLAG` → interprets as **escaped FLAG data**, outputs `FLAG` and **drops the ESC**
- Next `FLAG` ends the frame

Receiver’s recovered Frame 1 = `X  FLAG` (should have been `X  ESC`) → **data corruption**.

**Flaw:** Because `ESC` isn’t escaped, the pair `ESC FLAG` is ambiguous: it might mean “data FLAG” (escape sequence) or “literal ESC followed by end-of-frame”. 

---

**(c)** Describe a possible fix for this algorithm. For the frame in (a), what would be the outcome of stuffing on the sender’s side with your fix in place?

**Fix (standard):** Escape **both** control bytes.

`FLAG` in data → transmit `ESC FLAG`

`ESC` in data → transmit `ESC ESC`

**With this fix, how would the sender stuff the frame from Q2(a)?**

original frame bytes (payload): `B  ESC  ESC  F  D`

Full transmitted frame = `FLAG  B  ESC ESC  ESC ESC  F  D  FLAG`

### Stop & Wait

Receiver sends an **acknowledgement** (ACK) frame when ready to receive next

Sender only sends after reception of ACK

发送方每发送一帧，都要等待 ACK 才能发送下一帧

---

Automatic Repeat reQuest (ARQ)

自动重传请求

If no ACK received, sender will retransmit after timeout

未收到ACK，发送方重传数据帧

若ACK损坏，接收方收到重传数据帧时会丢弃该帧，仅重传ACK

to detect duplicate frames, use **Frame sequence numbers** in the header

为区分重复帧，在头部使用帧序号

对于停止等待协议，使用1bit

### One-Bit Sliding Window

单帧滑动窗口

ACKs are sent as part of data framesTechnique called **Piggybacking**

捎带确认：将确认捎带在一个回复帧中

### Go-Back-N

后退 N 帧协议

Pipelining：Allow sender to send **W=2^k-1** frames in a row before waiting for an ACK.

流水线：允许发送方在等待 ACK 之前连续发送 **W=2^k-1** 个帧。

Receiver only accepts frames that arrive in order

size of the receiver’s sliding window = 1

接收方仅按顺序接收帧 

接收方的窗口大小 = 1

发送方窗口大小 = 2^k - 1 (**不是 2^k**, 为了防止丢帧时产生二义性)

Sender times-out and resends all outstanding frames

发送方超时并重传所有未完成的帧

### frame sequence number

We need $W+1$ sequence numbers in [0, W]

$b$ bits in the header, $2^b ≥ W+1$

Good W: $W = 2*BD+1$, where BD is in units of frames. 

BD (Bandwidth–Delay Product, 带宽时延积), 以帧为单位

`2 * BD = Link Rate * RTT / frame size`

### Jan 2017

A Data Link Layer protocol uses fixed-size, 250-byte frames (including the header and tail). 4 bits of the header are used for frame sequence numbers.

**a)** What is the range of available sequence numbers? (2)

**Answer**: 0 - 15

**b)** The same protocol uses Go-Back-N. What is the size of the receiver’s sliding window? (2)

**Answer**: 1

**c)** How many frames can the sender transmit in a pipeline before it has to wait for an acknowledgement to arrive? (2)

**Answer**: W = $2^k-1$ = 15

**d)** In the worst case scenario, how many frames will the sender have to retransmit? **Briefly describe a situation where this may happen.** (4)

**Answer**: 15 frames.

If the first frame, seq 0, is lost, the receiver discards all subsequent out-of-order frames and keeps ACKing the last in-order seq. The sender times out and retransmit from the lost one.

**e)** Assume that this protocol is used in a link that has a **20 Megabit per second** bandwidth and a **propagation delay of 20 msec per direction**. **How long does it take to transmit a frame?** (3)

**Answer**: 0.1ms

Frame size = 250 B = 2000 b

Link rate = 20 Mbps

Transmission time = 2000 / 20,000,000 = 1e-4 s = 0.1ms

> If they meant “time until the receiver has the whole frame,” add one one-way propagation: $20\,\text{ms} + 0.1\,\text{ms} \approx \mathbf{20.1\,ms}$

**f)** How long after the start of frame transmission will the sender receive an acknowledgement? (Assume that the time required for the receiver to process a frame and to transmit an acknowledgement is negligible). (3)

**Answer**: 

T = Transmission time+Propagation (forward)+Propagation (backward) 

$T = 0.1 \, \text{ms} + 20 \, \text{ms} + 20 \, \text{ms} = 40.1 \, \text{ms}$

**g)** What sender window size would be required to maximise link utilisation? How many bits would we require for sequence numbers in the header in order to be able to support this window size? (5)

**Answer**: 

Frame size $L$ = 2000b

Link Rate $R$ = 20Mbps

Transmission time $T_t$ = 0.1ms

RTT = 40ms

To keep the link 100% busy, sender window must cover 1 RTT of data
$$
W_{\min} \ge \frac{\text{RTT}}{T_t} + 1
= \frac{40\,\text{ms}}{0.1\,\text{ms}} + 1
= \mathbf{401\ frames}.
$$

> Why 401 not 400?
>
> The sender transmits 400 frames → the pipe is full.
>
> But now it must **stop and wait** until the first ACK comes back, before it can send frame 401.

 sender window $\le 2^k - 1$.
 We need $2^k - 1 \ge 401 \Rightarrow 2^k \ge 402 \Rightarrow k = \lceil \log_2 402 \rceil = \mathbf{9}$.

### Jan 2019

A Wide Area Network (WAN) **10 Gbps** point-to-point copper link connects devices A and B. The link’s length is **4 km**. Devices A and B communicate at the data link layer using a **Go-Back-N** protocol. All data frames have a fixed size of **1250 bytes**, including the data link layer header and tail.

Assume:

- Instant transmission of acknowledgement (ACK) frames (zero-byte ACKs).
- Instantaneous frame processing on the receiver (zero processing delay).
- Link propagation speed = 200,000,000 m/s (**2 × 10^8 m/s**) (propagation speed of electricity in copper).

**(a)** What is the transmission time in microseconds (µs) of each individual frame? (3 Marks)

**Answer:**

1250B / 10Gbps = 1us

**(b)** What is the link’s propagation delay? (3 Marks)

**Answer**:

4km / (2e8 m/s) = 20us

**(c)** What is the one-way **bandwidth–delay product** for this link? Show your calculations and provide your answer using either bytes or frame count. (4 Marks)

**Answer:**

BDP = 10Gbps * 20us = 200,000 b = 25,000 B

**(d)** What is the sender window size required to maximise link utilisation? Show your calculation. (3 Marks)

**Answer:**

T0 = transmission time = 1us

W >= RTT / T0 + 1 = 40us / 1us + 1 = 41 frames

**(e)** How many bits would we require for frame sequence numbers in the data link layer header in order to be able to support this window size? (2 Marks)

**Answer:**

W = 41 <= 2^k - 1

2^k >= 42

k = 6

## 3 MAC Layer

### Delay

Total Delay = Transmission Delay + Propagation Delay + Queuing Delay

​	总延迟 =  传输延迟 + 传播延迟 + 排队延迟

Transmission Delay: The time required to put N bits to the wire

Propagation Delay: The time for a single bit need to cross to the other side

### Bandwidth Delay Product

The BD product expresses the maximum amount of data on the network circuit at any given time.

​	带宽时延积表示任意给定时间内网络电路上的最大数据量

### Jan 2019

A Wide Area Network (WAN) **10 Gbps** point-to-point copper link connects devices A and B. The link’s length is **4 km**. Devices A and B communicate at the data link layer using a **Go-Back-N** protocol. All **data frames** have a fixed size of **1250 bytes**, including the data link layer header and tail.

Assume:

- Instant transmission of acknowledgement (ACK) frames (zero-byte ACKs).
- Instantaneous frame processing on the receiver (zero processing delay).
- Link **propagation speed** = 200,000,000 m / s (**2 × 10^8 m / s**).
     (propagation speed of electricity in copper).

**(a) What is the transmission time in microseconds (µs) of each individual frame? (3 Marks)**

* **Given**
    - Link rate $R = 10\,\text{Gbps} = 10\times10^9\ \text{b/s}$
    - Frame size $= 1250\ \text{bytes} = 1250\times8 = 10{,}000\ \text{bits}$
    - Link length $d = 4\ \text{km} = 4000\ \text{m}$
    - Propagation speed $v = 2\times10^8\ \text{m/s}$

$$
T_\text{tx}=\frac{\text{bits}}{R}=\frac{10{,}000}{10\times10^{9}}
=1.0\times10^{-6}\ \text{s}= \boxed{1\ \mu\text{s}}
$$

**(b) What is the link’s propagation delay? (3 Marks)**
$$
T_\text{prop}=\frac{d}{v}=\frac{4000}{2\times10^{8}}
=2.0\times10^{-5}\ \text{s}= \boxed{20\ \mu\text{s}}
$$
**(c) What is the one-way bandwidth-delay product for this link? Show your calculations and provide your answer using either bytes or frame count. (4 Marks)**
$$
BDP = 10\,\text{Gbps} \times 20\,\mu s = 200{,}000\ \text{bits}
$$
 = **25,000 bytes**
 = **20 frames**

**(d)** **What is the sender window size required to maximise link utilisation? Show your calculation.**

- One-way BDP = **25,000 bytes** = **20 frames** (from part c).

- Effective RTT (ACK is zero-byte) = $2T_p + T_{tx}$.
    $$
    W_{\min}=\left\lceil 2\cdot \frac{\text{BDP}}{\text{frame size}} + 1 \right\rceil
    $$

- With $\text{BDP}/\text{frame size}=20$:

$$
W_{\min}=\lceil 2\times 20 + 1 \rceil=\boxed{41\ \text{frames}}
$$

(That +1 accounts for the 1-µs data‐frame serialization in the RTT when ACK size is negligible.)

**(e)** **How many bits would we require for frame sequence numbers in the *data link layer* *header* in order to be able to support this window size?**

For **GBN ARQ**, the sequence number field ≥ window size + 1

=> field ≥ 42

- $2^6 = 64 \ge 41$

So, **6 bits** are required.

### Channel Allocation

​	信道划分

**Static allocation**

- FDM, Frequency Division Multiplexing 频分多路复用
- TDM, Time Division Multiplexing 时分多路复用

**Dynamic allocation**

Gives access to users when they need it.

### [Quiz 2.1]

[判断]ALOHA is a multiaccess, collision-based technology that uses static channel allocation

---

错，**ALOHA 协议** 是一种**随机接入 (Random Access)** 协议，它属于**动态信道分配 (Dynamic Channel Allocation)**。

### Pure ALOHA

​	纯 ALOHA

- Users transmit when they have data

- Retry after random time after collisions

- Efficient. Low delay under low load

无需检测，立即发送数据；若未收到确认，等待随机时间后重传

### Slotted ALOHA

​	时隙 ALOHA

- Synchronises senders to time slots

- Twice as efficient compared to pure ALOHA

所有站时间同步，将时间划分为时隙，时隙开始时才能发送

**最佳设计/默认情况：**规定时隙长度 $T_{slot}$ **等于** 帧的传输时间 $T_{fr}$。

> 纯/时隙ALOHA协议任何时候都**无需监听信道**

### [Quiz 2.2]

[填空]Assume that frame transmission time is 2ms. In a pure ALOHA system, the vulnerable period is **[4ms]**. In slotted ALOHA the vulnerable period is **[2ms]**.

---

帧的传输时间为 $T_{fr}$，在本题中 $T_{fr} = 2\text{ms}$。

**纯 ALOHA：**有数据时可以**立即**发送，任何在 $(t_0 - T_{fr})$ 到 $(t_0 + T_{fr})$ 这个内**开始**的传输都会碰撞。**易受攻击期：** $T_{fr} + T_{fr} = 2 \times T_{fr} = 2 \times 2\text{ms} = \mathbf{4}\text{ms}$

**分隙 ALOHA：**只有在**同一个时隙开始**的传输才会互相碰撞。**易受攻击期：** $T_{fr}=2ms$  

### CSMA

​	Carrier Sense Multiple Access 载波监听多路访问

**1-persistent CSMA** 1-坚持 CSMA

Sense the channel：

- If free, transmit
- If busy, sensing till free, then send immediately (greedy)

侦听信道，若空闲，立即发送；否则持续监听直到空闲

若发生冲突，等待随机时间后再监听

**Non-persistent CSMA** 非坚持 CSMA

Sense the channel:

- If free, transmit

- If busy, wait random time before retrying

若信道忙，等待随机时间后再监听

**p-persistent CSMA** p-坚持 CSMA

Slotted designs only 仅适用于时隙信道

- If free, TX with probability p. Or wait for next slot with probability 1-p. At the start of the next time slot apply the same logic.
- If busy, wait random time 

时隙开始时，若信道空闲，以概率p发送，以概率1-p推迟到下一个时隙

若信道忙，等待随机时间（王道2023认为是持续监听）

### [Quiz 2.3]

A network uses 0.2-persistent CSMA. At some point in time a station has a frame to transmit and the channel is free. What will the station do next?

选项 A
It will transmit immediately

选项 B
It will transmit with probability 0.8 (1 - 0.2)

**选项 C**
**It will transmit with probability 0.2**

### Collision-Free protocol

​	无冲突协议

Senders must know when to TX

- Bitmap 位图
- Token Ring 令牌环

- Binary Countdown 二进制倒计数

### [Quiz 2.4]

[判断]Token-Ring is collision-free.

正确。

### Collision Detection (CD)

​	冲突检测

Collision detection can take as long as 2τ.

 	冲突检测时间为 2τ，τ = 传播时延

### CSMA/CD

​	载波监听多路访问/冲突检测

improvement: Early abort of TX if a collision is detected

​	先听后发，边听边发，冲突停发，随机重发

**Contention Slot**: **minimum time interval** in which a station can detect a collision

For CSMA/CD, **slot time = 2τ**

**Contention Window (CW)**: the range of **slots** a station waits before attempting to retransmit after a collision.
$$
CW = [0, 2^k - 1]
$$
where $k = \min(\text{number of collisions}, 10)$.

> No need to learn the formula.

### Ethernet

以太网 MAC 地址长度是 **48 位 (bits)**。

表示为 6 组十六进制数，每组 1 字节，例如：`00:1A:2B:3C:4D:5E`。

前 24 位构成了 **OUI (Organizationally Unique Identifier)**，“组织唯一标识符”。

---

**Classic Ethernet Physical Layer**

Shared coaxial cable with all hosts attached

​	所有主机共享同轴电缆

10Mbps

---

**Ethernet Cabling**

- 10Base5, coaxial cable 同轴电缆, 总线形
- 10Base2, coaxial cable 同轴电缆, 总线形
- 10Base-T, twisted pair 双绞线, 星形
- 10Base-FL, 光纤, 点对点 (PPT未提及)

---

**Ethernet MAC Sublayer Protocol**

> 数据链路层 = 逻辑链路控制（LLC）子层 + 介质访问控制（MAC）子层
>
> 其中 LLC 作用不大

Frame formats: **(a)** DIX Ethernet, **(b)** IEEE 802.3.

> Preamble (前同步码) 是以太网 *物理层传输* 的一部分，但 *不* 属于以太网 *数据链路层帧 (L2 Frame)* 的一部分。

![image-20251013205354439](https://media.opennet.top/i/2025/10/14/5uhyfz-0.png)

以太网帧的 **Type/Length 字段** 有两种含义：

- **≤ 1500 (0x05DC)** ：表示 **Payload 长度**，**单位为Byte**（Length）
- **≥ 1536 (0x0600)** ：表示 EtherType（Type）

---

以太网标准 (IEEE 802.3) 规定，为了让碰撞检测机制 (CSMA/CD) 正常工作，一个以太网帧（不含前导码）的**最小总长度必须是 64 字节**。

于是**“数据负载 (Payload)”**（包括真实数据和填充）字段的最小长度必须是：$64 \text{ 字节 (最小总帧长)} - 18 \text{ 字节 (头部和尾部)} = \mathbf{46} \text{ 字节}$

---

**Switched Ethernet**

Switches isolate ports

​	交换机隔离端口

**Gigabit Ethernet**

Commonly over twisted pair

### [Quiz 2.5]

The EtherType (Type/Length) field of an ethernet frame has value 0x400. This means that:

选项 A The frame's total length is 0x400 bits

选项 B The payload of the frame is of type 0x400

选项 C The frame's total length is 0x400 bytes

**选项 D The frame contains a payload of size 0x400 bytes**

### [Quiz 2.6]

An ethernet frame has value 0x10 in the Type/Length field. How many bytes of padding in the payload? (Answer using a number).

---

以太网帧的**最小总长度 = 64 字节**。**数据负载 (Payload)**字段的最小长度 = 46 字节

本次传输的真实数据 (Data) 长度： 16 字节 (由 0x10 字段得知)

$\boxed{Padding = 46 - 16 = 30 \ Byte}$

### [Quiz 2.7]

Ethernet MAC addresses are **[48] bits** long (fill the gap using a number). The Organizationally Unique Identifier is formed by the **[first]** (first/last) **[24]bits** (fill the gap using a number) of the address.

### [Quiz 2.10]

Ethernet uses ACK frames for reliability. When a station transmits a frame it waits for an ACK. If it does not receive one within a timeout, it retransmits the last outgoing frame.

---

错。以太网（数据链路层，L2）是不可靠的协议。

### Eg.

**Ethernet Frame has value 0x100 in the EtherType Field. What does this tell us about the frame’s payload length?**

- 100 bytes
- 100 bits
- **256 bytes**
- 256 bits
- Nothing. The field indicates the layer 3 protocol in the frame’s payload

0x100 < 0x600, then it is interpreted a Length

0x100 = 256 (decimal), unit is byte

---

**Ethernet Frame has value 0x800 in the EtherType Field. What does this tell us about the frame’s payload length?**

- 800 bytes
- 800 bits
- 2048 bytes
- 2048 bits
- **Nothing. The field indicates the layer 3 protocol in the frame’s payload**

> **0x0800** → IPv4
>
> **0x0806** → ARP
>
> **0x86DD** → IPv6

---

**What’s the minimum payload length of a classic ethernet frame?**

- 64 bytes
- 64 bits
- 46 bytes
- 46 bits

> 此题题意存疑

**64 bytes** → minimum *frame size*

**46 bytes** → minimum *payload size*

---

**When EtherType indicates length, where is the type?**

Ethernet II (DIX): 2-byte field after the Source MAC is **EtherType**

IEEE 802.3: the **protocol type is carried inside the LLC/SNAP headers** immediately after the length field.

---

**In pure ALOHA, the transmission time of a single frame is t. What is the period during which a collision may happen (also called the "vulnerable period")?**

- t
- 2t
- t/2
- None of the above

> 此题存在疑问。老师给出的答案似乎是 t 和 t/2

---

**In slotted ALOHA, a sender is ready to transmit in the middle of a time slot. What will it do?**

- Transmit immediately 
- Check if the channel is free. If it is then transmit 
- **Wait for the start of the next time slot and transmit** 
- Wait for the start of the next time slot, check if the channel is free. If it is then transmit

纯/时隙ALOHA协议任何时候都**无需监听信道**

---

**In p-persistent CSMA, a sender is ready to transmit at the start of a time slot. What will it do?**

- Sense the channel. If the channel is free, then transmit with probability 1 
- Transmit with probability p without sensing the channel. Or wait till next time slot with probability 1-p and then try again. 
- Defer to the next time slot with probability p, then try again. Or transmit with probability 1-p. 
- **Sense the channel. If the channel is free, then transmit with probability p. Or wait till next time slot with probability 1-p and then try again.**

---

**Multiple stations are connected in a LAN using a single copper cable. The time the signal needs to propagate between the two farthest stations is t. What is the duration of the contention window?**

- t/2 
- t
-  **2t**
-  None of the above

## 4.1 Learning Bridge, Spanning Tree

### Bridge & Switch

网桥把一个大网络分成几个小段，每段之间用网桥隔开。

这样能减少冲突（Collision Domain），提高整体性能。

> A 屋有三台电脑，B 屋有三台电脑。
>
> 如果都用集线器（Hub）连在一起，所有数据都会广播，效率低。
>
> 如果在两屋之间加一个 **网桥**，它会学习 MAC 地址，知道 A 屋的电脑在哪一侧、B 屋的电脑在哪一侧。这样 A 屋内通信就不会打扰 B 屋。

### Backward Learning

For each input frame, how to decide what port to output it to?

​	如何决定每个帧的输出端口？

- Associate frame source address with input port
    - 帧的 **源 MAC 地址** 和进入的 **端口号** 建立映射
- Frames with known destination address sent to learned port
    - 若输出MAC在表里已知端口，直接转发
- Frames with unknown destination sent to all ports (except the input port)
    - 未知的，广播（除了输入端口）
- Have a big **hash table** inside switch.
    - 维护 MAC 哈希表
- Forget unused entries to allow address reuse
    - 删除很久不用的地址-端口映射

### [Quiz 2.8]

Learning bridges can figure out which machine is available through which port by inspecting the destination MAC address field of the frame header.

> 学习型网桥可以通过检查帧头的目标 MAC 地址字段来确定哪个端口对应哪台机器。

---

**错误**。它混淆了网桥（或交换机）的**学习**和**转发**。

1. **学习 (Learning):**
    - 网桥（Learning Bridge）检查帧的**源 MAC 地址 (Source MAC address)** 来“学习”。
2. **转发 (Forwarding):**
    - 当网桥需要决定将一个帧发送到**哪里**时，它才会查看该帧的**目标 MAC 地址 (Destination MAC address)**。

### Spanning Tree

Each Bridge periodically broadcasts a configuration message to all the neighbours.

网桥定期向邻居广播配置信息

The cost information will be in their configuration message

成本信息在配置信息中

Choose a root bridge – based on their ID - lowest MAC address wins

选择MAC最小的网桥作为 root

Spanning Tree: A tree of the shortest path (lowest cost) from the root to every bridge

生成树：包含从root到每个网桥的最短路径

### [Quiz 2.9]

In a bridge topology, to prevent frames getting forwarded in loops bridges create a 

[**spanning**] tree. To achieve this, bridges exchange [**configuration**] messages. These messages contain bridge identifiers. The bridge with the [**lowest**] (lowest/highest) identifier is elected as root of the tree.

### Eg.

Figure 2 shows a network with three learning bridges **B1, B2 and B3** (boxes) and six stations (black circles). To prevent frame forwarding loops, the bridges use the **Spanning Tree Protocol**.
 The identifier of **B1 is 18**, the identifier of **B2 is 72**, and the identifier of **B3 is 30**.

<img src="https://media.opennet.top/i/2025/10/19/518bjx-0.png" alt="image-20251018200435523" style="zoom:50%;" />

**Figure 2: Ethernet network with 3 learning bridges and 6 stations.**

**(a)** Spanning tree formation starts with bridge **B1** broadcasting a configuration message, followed by a second configuration message broadcast by **B2**. **In your own words, describe the content of the configuration message sent by B2.** *(5 Marks)*

在 生成树协议 STP 中，**ID 最小的桥成为 Root Bridge**

B1(18) < B3(30) < B2(72)，所以 **B1 是根桥**。

Message:

BridgeID = 72

RootID = 18

Cost = 1

---

**(b)** Draw the final spanning tree for this topology. *(4 Marks)*

<img src="https://media.opennet.top/i/2025/10/19/5gqonu-0.png" alt="IMG_2294" style="zoom:50%;" />

---

**(c)** After the spanning tree has been created, six frames are sent in the order shown in **Table 2**. In the last column of the table, write down which of the links (**L1, L2, L3**) each packet will get transmitted through. Assume that the hash tables of all bridges are empty at the time of transmission of **Frame 1**.

<img src="https://media.opennet.top/i/2025/10/19/5komv8-0.png" alt="image-20251018203704652" style="zoom:50%;" />

**Table 2: Frame transmissions in order.**

| Frame | From | To   | Transmitted Through Links |
| ----- | ---- | ---- | ------------------------- |
| 1     | F    | D    | **L2, L1**                |
| 2     | C    | F    | **L1, L2**                |
| 3     | A    | F    | **L2**                    |
| 4     | E    | C    | **L2, L1**                |
| 5     | B    | A    | **None**                  |
| 6     | D    | B    | **L1**                    |

> Note: L3 is blocked acording to Spanning Tree Protocol

## 4.2 The Network Layer

The Network Layer is the lowest layer that deals with e2e transmission

​	网络层是端到端传输的最底层

### Connectionless (datagrams)

​	无连接（数据报）

Packets are injected to the network individually and routed independently of each other, no advance setup is needed.

各数据包独立路由；无需提前设置

![image-20251019213810501](https://media.opennet.top/i/2025/10/20/78uznp-0.png)

> 路由表中 Line 表示下一跳；发生阻塞时路由表会更改

### Connection-Oriented (Virtual Circuit) 

面向连接（虚电路）

A path from the source router to the destination router must be established before any data packet can be sent.

发送数据包前先建立路径。

![image-20251019214626913](https://media.opennet.top/i/2025/10/20/7dpsc5-0.png)

> 路由表：输入端口, 所属VC ID | 输出端口, 所属VCID

- VC (Virtual Circuit) setup in advance (avoid choosing a new route for every packet sent)
    - 提前设置好虚电路

- Forwarding based on VC tag
    - 基于连接标识符转发

- Different packets: Same path

---

| Issue                                            | 数据报 (Datagram network)                                    | 虚电路 (Virtual-circuit network)                             |
| ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **电路建立 (Circuit setup)**                     | 不需要 (Not needed)                                          | 需要 (Required)                                              |
| **寻址 (Addressing)**                            | 每个分组包含完整的源地址和目的地址 (Each packet contains the full source and destination address) | 每个分组只包含一个简短的虚电路号 (Each packet contains a short VC number) |
| **状态信息 (State information)**                 | 路由器不保存任何连接的状态信息 (Routers do not hold state information about connections) | 每个虚电路需要路由器表中为该连接保留空间 (Each VC requires router table space per connection) |
| **路由 (Routing)**                               | 每个分组独立路由 (Each packet is routed independently)       | 在虚电路建立时选择路由，所有分组沿同一路径传输 (Route chosen when VC is set up; all packets follow it) |
| **路由器失效的影响 (Effect of router failures)** | 没有影响，除了崩溃时丢失的分组 (None, except for packets lost during the crash) | 所有经过失效路由器的虚电路都会被终止 (All VCs that passed through the failed router are terminated) |
| **服务质量 (Quality of service)**                | 难以实现 (Difficult)                                         | 如果能为每个虚电路提前分配足够的资源，就容易实现 (Easy if enough resources can be allocated in advance for each VC) |
| **拥塞控制 (Congestion control)**                | 难以实现 (Difficult)                                         | 如果能为每个虚电路提前分配足够的资源，就容易实现 (Easy if enough resources can be allocated in advance for each VC) |

> VPN 属于虚电路，Transaction processing systems 属于数据报

### The Optimality Principle

最优性原则

**Sink tree:** The set of optimal routes from all sources to a given destination form a tree routed at the destination.

汇集树：从所有源点到某个给定目的地的最优路由集合，形成一棵以该目的地为根的树。（单源最短路径）

汇集树是所有最优路径的集合

**Directed Acyclic Graph (DAG)**: If we allow all of the possible paths to be chosen.

有向无环图：如果允许选择所有可能的路径，那么结果是一个 DAG

### [Quiz 3.8]

In a network with multiple routers and links, the correct sink tree for router X is the tree where:

选项 A Router X is the root, and all other routers are leaf nodes.

**选项 B Router X is the destination, and the tree represents the shortest paths from all other routers to router X.**

选项 C Router X is the intermediate node, and the tree represents the shortest paths to all other routers.

选项 D Router X forwards traffic to all other routers using random paths.

---

**Sink tree**（汇聚树）定义为：

> 以某个路由器 X 为 **目的地（destination）**，从网络中所有其它路由器到 X 的 **最短路径树**。

### Dijkstra

> 从起点开始，逐个对每个已确定最短路径的点，利用它的最短路径更新其他点的最短路径；每一轮都将确定一个最短路径点。

1. **目标**

    - 给定一个网络（图）$G=(V,E)$，其中 $V$ 是节点（路由器），$E$ 是带权边（链路及其开销/代价 $w(u,v)\ge0$）。
    - 从一个源点 $s \in V$ 出发，找到到其他所有节点的最短路径。

2. **初始化**

    - 源点 $s$：设定距离 $dist[s] = 0$。
    - 其它所有节点 $v \in V\setminus\{s\}$：设定 $dist[v] = \infty$（表示未知）。
    - 每个节点还有一个前驱 $pred[v]$，用于记录路径。

3. **基本过程**

    - 重复以下步骤，直到所有节点都处理完：

        1. 在未确定的节点里，选择当前 $dist[v]$ 最小的节点 $u$。

        2. 将 $u$ 标记为“已确定”（即最短路确定）。

        3. 对于 $u$ 的所有邻居 $v$，检查是否有
            $$
            dist[u] + w(u,v) < dist[v]
            $$
            如果更小，就更新 $dist[v]$ 和 $pred[v]$。

    - 用自然语言描述就是：“一步步扩散，先确定最近的，再用它去更新更远的节点。”

![image-20251019221549777](https://media.opennet.top/i/2025/10/20/8ixhkp-0.png)

### Eg.

**(c) Briefly describe the "optimality principle" as used in the context of routing. (4 Marks)**

Try to fins best path using sink tree

---

**Draw a Sink Tree (Root: A)**

![image-20251019221929358](https://media.opennet.top/i/2025/10/20/8l6vel-0.png)

> 对于点C，有两条长度相同的路径。任选一条即可。

![IMG_2297](https://media.opennet.top/i/2025/10/20/8sg4jh-0.png)

## 5 Network Layer

### Distance Vector Routing

距离-向量路由算法（eg. RIP）

It is a distributed algorithm:

- Each router maintain a table 
- Compute shortest path to all destinations 
- Computation is often (but not always) based on the “Distributed Bellman-Ford” algorithm

每个路由器维护自己的路由表，计算到所有点的最短距离，Bellman-Ford算法

Logic:

- Each router knows “distance” to its neighbours.
- Routers periodically share their shortest known distance to all network destinations (Distance Vector).
- They share this information only with their neighbouring routers.
- Routers use received vectors to update their own.

每个路由器最初知道邻居的距离，定期和邻居共享自己的路由表（距离向量），更新自己

### Count-to-Infinity Problem

**Good News Travel Fast**

好消息（某个节点可达）传播速度是一跳/一次交换

**Bad News Travel Slow**

假设 A 宕机，B 误以为 “C 知道到 A 的路径”，C以为 “D 知道到 A 的路径”，互相引用，距离不断增加，直到无穷大。

> RIP 规定跳数=16 为不可达

### Link State Routing

链路状态路由算法

- Routers share information about the state oftheir own links only (Link State).
- They share this information with all other routers (flood).
- Based on the above information, all routers can compute the full network graph.
- Routers run Dijkstra’s algorithm to compute shortest paths to all destinations.

路由器使用 洪泛法 通告自己**直接相连链路**的状态 （**而不是自己的路由表**）

路由器独立构建完整网络图，用 Dijkstra 计算最短路径

- Require each link to have a distance or cost metric for finding the shortest path 
- Cost is normally set up to be inversely proportional to the bandwidth of the link
- If the network is geographically spread out, the delay of the links may be factored
- To determine this delay is to send over the line a special ECHO packet

cost 通常与带宽成反比（带宽高 → cost 低），距离远时也考虑时延 

发送 ECHO 包以测试 delay

### Link State Packet

链路状态分组

![image-20251027125742796](https://media.opennet.top/i/2025/10/27/y0y545-0.png)

包含：**邻居信息 + 度量值 (cost) + 序列号 (Seq) + 老化时间 (Age)**

**LSP Distribution** 链路状态分组的分发

![image-20251027130015890](https://media.opennet.top/i/2025/10/27/yqdvjx-0.png)

Flooding（泛洪）

路由器识别 最新的 LSP。Age 值逐渐减小，到 0 时 LSP 失效。

路由器在收到 LSP 后，要向发送方发送确认 (ACK)。

路由器维护 LSP 数据库，运行 **Dijkstra 算法** 计算最短路径树 (SPF Tree)。

### [Quiz 3.1]

[判断]Link state routing suffers from the Count-to-Infinity problem. True or False?

---

错。Link State 链路状态路由算法没有 Count-to-Infinity 问题，只有 Distance Vector Routing 距离向量路由算法（RIP）有。

### Hierarchical Routing

层次路由

![image-20251027175559212](https://media.opennet.top/i/2025/10/28/2kvplj-0.png)

Partition network in regions

longer (sub-optimal) paths to individual nodes

Reduces size of routing table

Makes computation easier/faster

**Routing tables contain paths to:**

- Nodes within same region
- Other regions (but not to nodes within them)

网络分区；可能到某个节点的路径变长；减小路由表大小；加快运算

路由表包含：区域内的节点；到其他区域的入口节点

### Jan 2019

**The graph in Figure 1 displays the topology of a network with 7 routers. The numbers next to edges represent link cost. Routers in this network use a Link State protocol to populate their routing tables.**

![image-20251027180810371](https://media.opennet.top/i/2025/10/28/3fwp0l-0.png)

​		**Figure 1:** A network topology with 7 routers.

**(a)** Draw a sink tree of this network using destination router G as the root.
 *(6 Marks)*

> 做题时或许可以使用dfs/bfs 而不是dijkstra

![IMG_2311](https://media.opennet.top/i/2025/10/28/3t515f-0.png)

---

**(b)** Table 1 shows part of router **B**’s routing table. Complete the table.

> B 独立运行 Dijkstra，而不是基于 sink tree

*Table 1: Excerpt of Router B’s Routing Table*

| Destination | Distance | Next Hop |
| ----------- | -------- | -------- |
| A           | 6        | A        |
| C           | 5        | D        |
| D           | 2        | D        |
| E           | 4        | E        |
| F           | 5        | D        |
| G           | 6        | E        |

---

**(c)** Since this is a Link State routing protocol, routers share information using Link State Packets (LSPs). Each LSP contains a list of Destination-Distance pairs. What is the content of LSPs sent by router D? Ignore the “Age” and “Sequence Number” fields.
 *(4 Marks)*

> 路由器使用 洪泛法 通告自己**直接相连链路**的状态 （**而不是自己的路由表**）

(B, 2)

(C, 3)

(E, 3)

(F, 3)

---

**(d)** Which routers will router D sent its LSPs to?
 *(3 Marks)*

B, C, E, F

### Jan 2017

![image-20251027185549470](https://media.opennet.top/i/2025/10/28/484clp-0.png)

**Table 1: Excerpt of Router E’s Routing Table**

| Destination | Distance | Next Hop |
| ----------- | -------- | -------- |
| A           | 8        | C        |
| B           | 6        | C        |
| C           | 2        | C        |
| D           | 4        | F        |
| F           | 3        | F        |

### Traffic Management

![image-20251027190525407](https://media.opennet.top/i/2025/10/28/51qv4w-0.png)

**Network provisioning**
 网络资源配置（增加带宽/硬件资源）

**Traffic-aware routing**
 感知流量的路由（根据网络负载动态选择路径）

**Admission control**
 接纳控制（决定是否允许新的流量进入网络）

**Traffic throttling**
 流量限制/流量节流（强制降低部分流量的发送速率）

**Load shedding**
 负载丢弃（直接丢弃部分数据流量来缓解拥塞）

这些方法可以用于 **预防拥塞**，也可以在拥塞发生后 **进行应对**

### [Quiz 3.9]

[判断]Traffic management is to protect slow receivers from fast senders.

---

错误。这句话描述的是 **流量控制 (Flow Control)** 的功能，而不是 **流量管理 (Traffic Management)**。

**流量控制 (Flow Control):**

- **定义：** 这正是题目中描述的功能——“保护慢速接收方免受快速发送方的影响”。
- **目的：** 它是端到端（点对点）的机制，确保发送方发送数据的速度不会超过接收方处理数据的速度（例如 TCP 的滑动窗口机制）。

**流量管理 / 拥塞控制 (Traffic Management / Congestion Control):**

- **定义：** 这是为了防止过多的数据注入到**网络**中。
- **目的：** 它的目标是保护**网络本身**（路由器、交换机和链路）不被数据“堵死”，确保整个网络的负载不超过其处理能力。

### [Quiz 3.13]

In the context of load shedding during network congestion, which of the following statements is true for **real-time** media applications (e.g., video streaming)?

**选项 A Dropping older packets is preferable because new packets are more time-sensitive (milk method).**

选项 B Dropping newer packets is preferable because older packets are more important (wine method).

选项 C All packets, regardless of age, are equally important and should be discarded randomly.

选项 D Routers should never drop any packets for real-time media applications to avoid quality degradation.

### [Quiz 3.15]

Which of the following best describes the concept of overprovisioning in traffic management?

**选项 A Building a network with sufficient capacity to handle any possible traffic load.**

选项 B Prioritizing high-traffic flows by reserving additional bandwidth for them during peak traffic times.

选项 C Limiting the amount of traffic entering the network to prevent congestion.

选项 D Using traffic engineering to optimize routes for data packets to avoid congestion points.

> **Overprovisioning（超额预置）** ：网络容量建设得远高于实际需求

### Traffic-Aware Routing

![image-20251027193614271](https://media.opennet.top/i/2025/10/28/5k52he-0.png)

*A network in which the East and West parts are connected by two links.*

**What are the possible ways in traffic-aware routing?** 

- **Dynamic link weights** **动态**链路权重
    - 权重 = f(带宽, 传播延迟, 排队延迟)

- **Multipath routing** 多路径路由（负载均衡）
- **Slow traffic shifting** 缓慢流量迁移以避免法1造成的路由震荡
- **Traffic engineering** 流量工程（由 ISP 控制）

### [Quiz 3.10]

In traffic-aware routing, how are **link weights** typically adjusted to manage traffic load and prevent network congestion?

选项 A Link weights are kept constant, based on fixed bandwidth and propagation delay, regardless of traffic load.

选项 B Link weights are set to prioritize the shortest physical distance between nodes, without considering traffic load.

**选项 C Link weights are dynamically adjusted based on a combination of fixed link bandwidth, propagation delay, and measured load or queueing delay.**

选项 D Link weights are only updated manually by network operators during significant topology changes.

### Admission Control

![image-20251027195110053](https://media.opennet.top/i/2025/10/28/5t1jnp-0.png)



*(a) A congested network. (b) The portion of the network that is not congested. A virtual circuit from A to B is also shown.*

**What are the ways of achieving admission control?**

- **Rejecting new virtual circuits if congestion may occur**
    - **拒绝可能导致拥塞的新虚电路**
- Traffic characterization (rate and shape)
    - 流量特征描述（速率和形状）
- **Capacity reservation 容量预留**
- Statistical admission control 统计性准入控制

### [Quiz 3.11]

A network link has a **capacity of 200 Mbps**, and **virtual circuits** passing through the link can transmit at a maximum rate of **20 Mbps**. Assume that the network uses **admission control** to prevent congestion, and it is observed that, on average, only **40%** of the bandwidth of **each virtual circuit** is utilised at any given time. What is the **maximum** number of **admission** throught this link? Answer in numerical value. 

---

N * 20Mbps * 40% = 200Mbps => N = $\boxed{25}$

### [Quiz 3.12]

What is the primary goal of admission control in virtual-circuit networks?

**选项 A To prevent the establishment of new virtual circuits when adding more traffic would lead to network congestion.**

选项 B To allow new virtual circuits to be set up at all times.

选项 C To prioritize real-time traffic over other types of traffic in the network.

选项 D To increase network capacity by dynamically adjusting the bandwidth of existing virtual circuits.

### QoS & QoE

**Quality of Service**: **bandwidth, latency/delay, packet loss, jitter** (technical parameters )

Quality of Experience: subjective perception of users regarding the quality of their communication or multimedia experience 

QoS: 带宽 延迟 丢包 抖动

QoE: 用户主观感受

### [Quiz 3.14]

What factors are considered for quality of service for different applications? 

**选项 A Delay**

选项 B Response time

**选项 C Jitter**

**选项 D Loss**

选项 E Accuracy

**选项 F Bandwidth**

### Packet Scheduling

数据包调度

- FIFO
- Fair queueing 公平排队
    - Round-robin fair queueing 轮询公平队列
    - Weighted fair queueing 加权公平排队

### Round-Robin Queueing

​	轮询公平队列

![image-20251027202949851](https://media.opennet.top/i/2025/10/28/73q3dm-0.png)

- Different queues for different flows
- The router scans the queues Round-Robin and each host gets to send one packet in order  

每个流量使用独立的队列，路由器轮询每个队列

缺点：数据包都很小的流量（队列）吃亏

### Weighted Fair Queueing

​	加权公平排队

![image-20251027203544523](https://media.opennet.top/i/2025/10/28/779941-0.png)

- Byte-by-byte round robin, instead of packet-by-packet
- Compute a virtual time that is the number of the round at which each packet would finish being sent 

按 字节 轮询

各个流量按权重公平分配带宽
$$
F_i = \max(A_i, F_{i-1}) + \frac{L_i}{W}
$$

- $F_i$：包的完成时间
- $A_i$：包的到达时间
- $L_i$：包的长度
- $W$：队列权重

### Connecting Heterogeneous Networks

​	异构网络的互联

**网关 (Gateway)** 作为边界设备

eg. **802.11 (WiFi)** → **MPLS (多协议标签交换，面向连接)** → **Ethernet (以太网)**

**IP 层保持端到端一致**，但 **链路层协议随链路而变**

### Connecting Endpoints Across Heterogeneous Networks

​	终端跨异构网络的互联

**Pv6 over IPv4 隧道** 

两个 IPv6 网络之间通过 IPv4 中转

把整个 **IPv6 包当作 IPv4 的“有效载荷”**，即 **封装 (encapsulation)**。

路由器在两端解封装

只提供点到点的连接

类似 **VPN (虚拟专用网)** 

## 7 IPv4

### IP – best effort

尽力而为

No error correction
No reliability guarantees
Packets do not necessarily arrive in the order at which they were sent

### IPv4

IPv4 datagram(数据报) = header + payload 

Header = 20B + variable-length

![image-20251107210334327](https://media.opennet.top/i/2025/11/08/8boltj-0.png)

**Version（版本）**：IPv4 / IPv6

**IHL（Internet Header Length，头部长度）**：以 **32 位字（4 字节）为单位**说明头部有多长

**Differentiated Services（区分服务字段）**：用于区分不同的服务类别

**Total length（总长度）**：最大 **65535 字节**

**Identification（标识）**：帮助目的主机判断某个新到达的片段属于哪一个分片数据报

**Time to live（生存时间）**

**Protocol（协议）**

**Header checksum（头部校验和）**

**Source address / Destination address（源地址 / 目的地址）**：即 IP 地址字段

**Options（可选字段，可以有 0 个或多个字）**

### IP Datagram Fragmentation

IP 数据报分片

涉及的字段:

| 字段                     | 用途                                         |
| ------------------------ | -------------------------------------------- |
| **Identification**       | 标识同一原始 IP 数据报的所有分片，用于重组   |
| **DF（Don’t Fragment）** | DF=1 表示禁止分片                            |
| **MF（More Fragments）** | MF=1 表示后面还有分片；MF=0 表示最后一个片段 |
| **Fragment offset**      | 表示该分片在原始数据报中的位置               |

### [Quiz 3.2]

Which of the following fields of the Internet Protocol header are used for datagram fragmentation and re-assembly?

选项 A Version

选项 B IHL

选项 C Total length

**选项 D Identification**

**选项 E DF**

**选项 F MF**

**选项 G Fragment offset**

选项 H Time to live

选项 I Protocol

选项 J Source address

选项 K Destination address

### [Quiz 3.5]

All fragments of a packet have the same identification number.

---

对。

### [Quiz 3.6]

The MF bit is set for the first fragment in the packet. 

---

对。此处的 `set` 表示启用/使能。**第一片**：后面一定还有分片 → **MF = 1**

### IPv6

128 bits = 16 Bytes,  $2^{128}$ unique addresses

approxmately 3.4×10^38

![image-20251107211104178](https://media.opennet.top/i/2025/11/08/8g9ncn-0.png)

| 字段                            | 描述                                     |
| ------------------------------- | ---------------------------------------- |
| Version（版本）                 |                                          |
| Diff. Serv.（区分服务）         |                                          |
| Flow label（流标签）            |                                          |
| Payload length（有效载荷长度）  |                                          |
| Next header（下一个头部）       | （说明将由哪个上层协议处理，如 TCP/UDP） |
| Hop limit（跳数限制）           | （类似于 IPv4 的 TTL）                   |
| Source address（源地址）        | 16 字节                                  |
| Destination address（目的地址） | 16 字节                                  |

IPv4 头部中有 Protocol 字段，但在 IPv6 固定头部中没有。为什么？

因为 **IPv6 用 “Next Header” 字段取代了 IPv4 的 “Protocol” 字段**

### [Quiz 3.3]

What is the length of an IPv6 address? Answer with a number in bytes. (Answer using numerical characters, not text - e.g. 90, not ninety).

---

$\boxed{16} \ Byte$

### IP Addressing ※

If a host is on two networks, it must have two IP addresses 

Routers have multiple interfaces and thus multiple IP addresses 

如果一个主机连接在 **两个网络** 上，它必须拥有 **两个 IP 地址**

路由器具有 **多个网络接口（multiple interfaces）**，因此也就拥有 **多个 IP 地址**

---

点分十进制表示法（Dot-Decimal Notation）

| Dot-Decimal | 137.222.0.37                        |
| ----------- | ----------------------------------- |
| Binary      | 10001001 11011110 00000000 00100101 |
| Raw Value   | 2313027621                          |

![image-20251107212935853](https://media.opennet.top/i/2025/11/08/8r670g-0.png)

| Dot-Decimal | 137.222.0.37 / 20                   |
| ----------- | ----------------------------------- |
| Binary      | 10001001 11011110 00000000 00100101 |

> /10 : "slash ten"

### Subnet mask

子网掩码

![image-20251107213617657](https://media.opennet.top/i/2025/11/08/8v8an6-0.png)

子网掩码可以与 IP 地址进行 **按位与（AND）运算**，以提取出 **网络部分**。

路由器应该选用 **最长前缀匹配（Longest Prefix Match）**
 即：**选择网络前缀最长（最具体）的那个子网**

### Subnet  Eg 1

An organization is assigned the network number **193.1.1.0/24** and it needs to define **six subnets**. The **largest** subnet is required to support **25 hosts**. 

1. Define Subnet Mask:
2. Define Hosts per subnet:
3. List the Subnets
4. List the Hosts per subnet#2

Answer:

**(1):** **Define Subnet Mask**

available hosts = 2^(host bits) - 2 >= 25

so, hosts bits = 5

32 - 5 = 27

so, **Subnet mask:** **/27**

In dotted decimal: **255.255.255.224**

> 224 = [11100000]

**(2) ** **Define Hosts per subnet:**

 $2^5 - 2 = 32 - 2 = 30$

**30 usable hosts** per subnet.

**(3)** **List the Subnets**

> 此题答案可能有误，子网下标可能是从0开始的

Subnet 1: **193.1.1.0**

Subnet 2: **193.1.1.32**

Subnet 3: **193.1.1.64**

Subnet 4: **193.1.1.96**

Subnet 5: **193.1.1.128**

Subnet 6: **193.1.1.160**

**(4) List the Hosts per subnet **#2

> 此题答案可能有误，子网下标可能是从0开始的

Subnet #2 is **193.1.1.32/27**

- Network address: **193.1.1.32**
- Usable hosts: **193.1.1.33 – 193.1.1.62**
- Broadcast address: **193.1.1.63**

### Subnet Eg 2

Assume that you have been assigned the **132.45.0.0/16** network block. You need to establish **eight subnets**.

1- Specify the **extended network prefix** that allows the creation of **eight** subnets.

2- Express the **subnet #3** in binary format and dotted-decimal notation:

3- List the **range of host addresses** that can be assigned to Subnet #3:

4- What is the **broadcast address** for Subnet #3

**(1) Extended Network Prefix**

To create 8 subnets, we need **3 additional bits** (because $2^3 = 8$).
$$
/16 + 3 = \mathbf{/19}
$$
**Extended prefix:** **/19**
 **Subnet mask:** **255.255.224.0**

**(2) Subnet #3 (in order)**

> 此题答案可能有误，子网下标可能是从0开始的

The subnets increase in blocks of size:
$$
256 - 224 = 32 \text{ (in the 3rd octet)}
$$

| Subnet # | Network Address (/19) |
| -------- | --------------------- |
| #1       | 132.45.0.0/19         |
| #2       | 132.45.32.0/19        |
| **#3**   | **132.45.64.0/19**    |
| #4       | 132.45.96.0/19        |
| …        |                       |

So: **Subnet #3 = 132.45.64.0/19**

 **Binary format**

132 = 10000100
 45 = 00101101
 64 = 01000000
 0 = 00000000

**Binary:**

```
10000100.00101101.01000000.00000000   (/19)
```

**(3) Host Address Range for Subnet #3**

**132.45.64.1 → 132.45.95.254**

**(4) Broadcast Address for Subnet #3**

**Broadcast:** **132.45.95.255**

### Variable Length Subnet Masks (VLSM)

Subnetting can be done recursively

![image-20251107230753316](https://media.opennet.top/i/2025/11/08/bp957z-0.png)

### VLSM Eg #1

An organization has been assigned the network number **140.25.0.0/16** and it plans to deploy **VLSM**. The figure below provides a graphic display of the VLSM design for the organisation.

![image-20251109150916081](https://media.opennet.top/i/2025/11/09/126tczt-0.png)

Solution Breakdown:



**1- Specify the subnet#3 of 140.25.0.0/16**

The parent network **140.25.0.0/16** is split into 8 subnets

To get 8 subnets, you need 3 bits ($2^3 = 8$).

The new prefix is /16 + 3 = **/19**.

![image-20251109155338672](https://media.opennet.top/i/2025/11/09/12x5hv8-0.png)

Subnet #3: 140.25.96.0/19

**2- List the host addresses that can be assigned to Subnet #3**

Host Range: 140.25.96.1 to 140.25.127.254

**3- Specify the Subnet #6-3:**

Subnet #6:  140.25.192.0/19

![image-20251109160014417](https://media.opennet.top/i/2025/11/10/3f8u-0.png)

#6-3： 140.25.198.0/23

**4- List the host addresses that can be assigned to Subnet #6-3**

Host Range: 140.25.198.1 to 140.25.199.254

**5- Identify the broadcast address for Subnet #6-3**

140.25.199.255

**6- Specify the subnets of Subnet #6-14-2**

Subnet #6 (140.25.192.0/19).

Subnet #6-14: 140.25.(192 + 14 * 2).0/23 = 140.25.220.0/23.

Subnet #6-14-2: 140.25.220.128/26

**7- List the host addresses that can be assigned to Subnet #6-14-2**

Host Range: 140.25.220.129 to 140.25.220.190

**8- Identify the broadcast address for Subnet #6-14-2**

140.25.220.191

### Classful and Special Addressing

Class A: /8—128 networks –16 million addresses
Class B: /16– 16384 networks-65536 addresses—just right  
Class C: /24--2 million networks- 256 addresses

![image-20251109160528096](https://media.opennet.top/i/2025/11/10/35b38-0.png)

1- Express 145.32.59.24 in binary format and identify the classful prefix length

10010001.00100000.00111011.00011000

145 is in the range **128–191**, so it is **Class B** → **Prefix length = /16**

2- Express 200.42.129.16 in binary format and identify the classful prefix length

11001000.00101010.10000001.00010000

200 is in the range **192–223**, so it is **Class C** → **Prefix length = /24**

3- Express 14.82.19.54 in binary format and identify the classful prefix length

00001110.01010010.00010011.00110110

14 is in the range **1–126**, so it is **Class A** → **Prefix length = /8**

### CIDR

CIDR（Classless Inter-Domain Routing，无类域间路由）

Route Aggregation 路由聚合：为减小路由表大小，将多个小前缀合并为一个大前缀

Example:

1- List the individual network numbers defined by the CIDR block 200.56.168.0/21

> "各个网络号" (individual network numbers) 通常是指该 CIDR 块所包含的更小、更标准的网络（通常是 C 类 /24 网络）。

```
200.56.168.0/24
200.56.169.0/24
200.56.170.0/24
200.56.171.0/24
200.56.172.0/24
200.56.173.0/24
200.56.174.0/24
200.56.175.0/24
```

2- List the individual network numbers defined by the CIDR block 195.24/13.

> "各个网络号" 在这里最可能指它所包含的 B 类（/16）网络。

```
195.24.0.0/16
195.25.0.0/16
195.26.0.0/16
195.27.0.0/16
195.28.0.0/16
195.29.0.0/16
195.30.0.0/16
195.31.0.0/16
```

3- Aggregate the following set of four /24 IP network addresses to the highest degree possible.

212.56.132.0/24
212.56.133.0/24
212.56.134.0/24
212.56.135.0/24

第一个八位字节：8 位共同

第二个八位字节：8 位共同

第三个八位字节：6 位共同

**总共同前缀** = $8 + 8 + 6 = 22$ 位。

最终聚合的地址（超网）是：`212.56.132.0/22`

### [Quiz 3.7]

How many bits are reserved for the host when the IP block is 128.208.2.0/26?

---

32 − 26 = $\boxed{6}$ 位

### Jan 2018

You work as a network administrator for a medium-sized company. Your network has **three subnets** (A, B and C) and you have allocated the following IP address ranges to each one of them:

- Subnet A: 189.10.20.0 /27
- Subnet B: 189.10.20.64 /26
- Subnet C: 189.10.20.128 /25

**(a) Write down the subnet mask of Subnet B in dot decimal notation.**
 (3 Marks)

Converting each 8-bit octet to decimal:

- `11111111` = 255
- `11111111` = 255
- `11111111` = 255
- `11000000` = 128 + 64 = 192

$\boxed{255.255.255.19}$

**(b) What is the range of addresses available for hosts in Subnet B?**
 (4 Marks)

**Find the total addresses:** A /26 prefix has $32 - 26 = 6$ host bits. This provides $2^6 = 64$ total IP addresses in the subnet.

**First Host IP:** `189.10.20.65` (Network Address + 1)

**Last Host IP:** `189.10.20.126` (Broadcast Address - 1)

**(c) All three subnets are connected to the internet through a single router. The router aggregates all subnets using a single supernet. What is the network address and prefix length of this supernet?**
 (4 Marks)

**1. List the subnets and their ranges:**

- **Subnet A (189.10.20.0 / 27):** Covers `189.10.20.0` to `189.10.20.31`
- **Subnet B (189.10.20.64 / 26):** Covers `189.10.20.64` to `189.10.20.127`
- **Subnet C (189.10.20.128 / 25):** Covers `189.10.20.128` to `189.10.20.255`

The **lowest address** in the group is `189.10.20.0`.

The **highest address** in the group is `189.10.20.255`.

A single network that covers every address from `189.10.20.0` to `189.10.20.255` is the entire /24 block.

$\boxed{189.10.20.0/24}$

**(d) The aggregation from Q3.c also contains a contiguous block of addresses that are not allocated to your subnets. Provide a network address and prefix length that encompasses exactly this address block.**

The unallocated block is the range **`189.10.20.32`** to **`189.10.20.63`**.

$\boxed{189.10.20.32/27}$

### Jan 2019

**Q2:** An Internet Service Provider has allocated to a company the IP address range **130.10.128.0/17**. The company will be using Variable-Length Subnet Masks (VLSM) internally within its network.

**(a)** Write down the subnet mask of this address range using dot decimal notation.
 *(3 Marks)*

**Binary:** `11111111.11111111.10000000.00000000`

$\boxed{255.255.128.0}$

**(b)** What is the broadcast address of this network?
 *(3 Marks)*

**Broadcast (Binary):** `10000010.00001010.11111111.11111111` (Set the last 15 bits to '1')

$\boxed{130.10.255.255}$

**(c)** How many devices can this network host?
 *(3 Marks)*

We have 15 host bits (from $32 - 17$).

$2^{15} = 32,768$.

$32,768 - 2 = \boxed{32,766}$

**(d)** What is the range of addresses available for hosts in this network?
 *(3 Marks)*

130.10.128.1 ~ 130.10.255.254

**(e)** Using VLSM, break this network down into **four equally-sized subnets**. Write down the network address and prefix length for each of those subnets.
 *(8 Marks)*

To get 4 subnets ($2^2$), we must borrow **2 bits** from the host portion.

$/17 + 2 = \textbf{/19}$

```
1. 130.10.128.0 /19
2. 130.10.160.0 /19
3. 130.10.192.0 /19
4. 130.10.224.0 /19
```

## 8 Transport Layer

### Purpose

> * **Segments** (transport layer) are contained in packets.
> * **Packets** (network layer) are contained in frames.
> * **Frames** (data link layer).
>
> ---
>
> - The **network layer** runs mainly on **routers**.
>
> - The **transport layer** runs on **end-user machines**, allowing user-level control and reliability mechanisms.

To deliver data across networks with the desired reliability or quality.

**Network layer:** delivery from/to devices.

**Transport layer:** delivery from/to **processes** (software applications).

### [Quiz 4.20]

Which of the following do we mean by "bytes in flight"?

选项 A Bytes that have yet to be sent

选项 B Bytes sent and acknowledged

**选项 C Bytes sent but not acknowledged**

选项 D Bytes delivered by the application layer to the transport layer and buffered at the sender

### Services Provided to Upper Layer

 **Transport Entity**

> “The software or hardware within the transport layer that makes use of the services provided by the network layer.”

- The entity can be implemented in software (OS kernel) or hardware (NIC).
- It communicates with a peer transport entity using **segments** (also called TPDUs — Transport Protocol Data Units).

 **Connection-Oriented vs Connectionless Services**

- **Connectionless Service:**
     Each message (segment) is sent independently, with no prior setup.
     Examples: UDP, DNS, SNMP.

- **Connection-Oriented Service:**
     Requires **three phases**:

    1. **Establishment**
    2. **Data transfer**
    3. **Release**

    Used when reliability and sequencing are needed (e.g., TCP).

### [Quiz 4.3]

In the TCP/IP model, the services offered by the transport layer can be:

选项 A Connection-oriented only

选项 B Connectionless only

**选项 C Connection-oriented as well as connectionless**

选项 D Neither connection-oriented nor connectionless

### [Quiz 4.10]

Among the choices below, select all that apply to the transport layer used in today's internet

**选项 A The transport layer can provide connection-oriented service**

**选项 B The transport layer can provide connectionless service**

选项 C The transport layer can provide delay guarantees

**选项 D The transport layer can provide guaranteed in-order delivery of packets**

选项 E The transport layer can provide bandwidth guarantees

**选项 F The transport layer can provide flow control**

**选项 G The transport layer can provide congestion control**

**选项 H The transport layer provides end-to-end error detection**

选项 I The transport layer provides end-to-end forward error correction

**选项 J The transport layer provides error correction via retransmissions of broken/lost segments**

---

注意错误项： **I — Forward error correction（前向纠错）**

运输层**没有 FEC**（通常在链路层或应用层实现）。

### [Quiz 4.16]

The transport layer provides:

选项 A A physical communication channel between two devices

选项 B A logical communication channel between a process and a device

**选项 C A logical communication channel between two processes**

选项 D A logical communication channel between two devices

### Transport Service Primitives

![image-20251114194845788](https://media.opennet.top/i/2025/11/15/5rgwtf-0.png)

服务器执行 LISTEN 操作。

当客户端想要与服务器通信时，它会执行 CONNECT 操作。

客户端的 CONNECT 调用会向服务器发送一个 CONNECTION REQUEST 段。

当该段到达服务器时，传输实体会检查服务器是否处于 LISTEN 阻塞状态（即是否准备好处理请求）。如果是，则解除服务器阻塞状态，并向客户端发送一个 CONNECTION ACCEPTED 段。当该段到达客户端时，客户端的阻塞状态解除，连接建立。

之后可以使用 SEND 和 RECEIVE 操作交换数据。

### **Addressing: TSAPs and NSAPs**

* To set up a connection, an application process must specify which process on the remote endpoint to connect to.
* **Ports:** Transport addresses to which processes can listen for connection requests.
* **Transport Service Access Point (TSAP):** A specific endpoint in the Transport Layer.
* **Network Service Access Point (NSAP):** The analogous endpoints in the network layer (e.g., IP addresses).
* Application processes attach to a local TSAP to connect to a remote TSAP. These connections run through NSAPs on each host.
* **Purpose of TSAPs:** To distinguish multiple transport endpoints that share a single NSAP. 区分共享单个 NSAP 的多个传输端点。

### [Quiz 4.12]

In both the TCP and UDP headers, the Source/Destination port fields are **[2]** -bytes wide. The minimum possible port number is **[0]**. The maximum possible port number is **[65535]**. 

### **3-way handshake**

1.  Host 1 sends a CONNECTION REQUEST (CR) segment to host 2.
2.  Host 2 replies with an ACK segment.
3.  Host 1 sends DATA.

* This handshake handles scenarios like a normal operation, an old duplicate CR (which does no damage), or the worst case of a duplicate CR and duplicate ACK.

![image-20251114205802539](https://media.opennet.top/i/2025/11/15/7kpd57-0.png)

### **Connection Release**

* **Asymmetric Release 非对称释放:** When one party hangs up, the connection is broken. This is abrupt and could lead to loss of data. 
    * 当一方挂断时，连接就会断开。这种中断非常突然，可能会导致数据丢失。

* **Symmetric Release 对称释放:** Treats the connection as two separate unidirectional connections, requiring each to be released separately. A host can continue to receive data after sending a DISCONNECT. However, this protocol does not always work. 
    * 该协议将连接视为两个独立的单向连接，需要分别释放每个连接。主机在发送 DISCONNECT 请求后仍可继续接收数据。此协议并非总是有效。

* Error cases (like lost ACKs or responses) are handled through ACKs, timers, and retransmissions.

### **Multiplexing**

* **Multiplexing:** Used when sharing several conversations over connections when only one network address is available on the host. All transport connections must use it. For example, 4 distinct transport connections can use the same network connection (IP address).
    * 主机上只有一个网络地址，需要通过多个连接共享多个会话时，使用此协议。所有传输连接都必须使用此协议。例如，4 个不同的传输连接可以使用同一个网络连接（IP 地址）。
* **Inverse multiplexing:** Used to run a connection using multiple network interfaces, distributing the traffic across them.
    * **反向复用：**用于使用多个网络接口运行连接，并将流量分配到这些接口上。

### [Quiz 4.18]

[多选]Which of the fields/headers below does TCP use to achieve demultiplexing(解复用) on the receiving host?

选项 A Source address in the MAC layer header

**选项 B Source IP address**

**选项 C Source port in the TCP header**

选项 D Destination address in the MAC header

**选项 E Destination IP address**

**选项 F Destination port in the TCP header**

### [Quiz 4.19]

[单选]Which of the fields/headers below does UDP use to achieve demultiplexing on the receiving host?

选项 A MAC layer source address

选项 B MAC layer destination address

选项 C Source IP address

选项 D Destination IP address

选项 E Source port the UDP header

**选项 F Destination port in the UDP header**

### **UDP**

User Datagram Protocol 

* **Connectionless**, **without establishing a connection.**
* **"Best Effort"**, without acknowledgements.
* Transmits **segments** with an **8-byte header** followed by the **payload**.
* **Error Detection** (UDP **checksum**) but no correction.
* UDP uses **Ports** (TSAPs) for addressing.
* The UDP header contains: Source port, Destination port, UDP length, and UDP checksum.

![image-20251115125152445](https://media.opennet.top/i/2025/11/15/xxfgf4-0.png)

### [Quiz 4.4]

What is the width of the "**Source Port**" field in the User Datagram Protocol (UDP) header? Answer with a number in bits.

---

$\boxed{16}$

### [Quiz 4.5]

Which of the following statements are true for the User Datagram Protocol (UDP)? Select all that apply.

选项 A It guarantees delivery of segments in the right order

**选项 B It performs error detection based on a checksum field in the header**

选项 C It performs flow control

选项 D It performs congestion control

选项 E It uses acknowledgments for error correction

选项 F It guarantees error-free delivery of segments

选项 G It is connection-oriented

**选项 H It is an end-to-end protocol**

**选项 I It provides a "best effort" service**

### **UDP Port**

* 0 to 65535.
* **Well-known Ports (0-1023):** Common services (e.g., HTTP, FTP, DNS).
* **Registered Ports (1024-49151):** User applications.
* **Dynamic/Private Ports (49152-65535):** Used for dynamic or private purposes.

### **TCP**

Transmission Control Protocol

> MSS（Maximum Segment Size，最大报文段长度）：最大应用层数据（payload） 的大小，不包括 TCP 和 IP 头部。

* Provides a **reliable byte stream** between exactly two processes over an unreliable internetwork.
* If the network works, TCP guarantees:
    * Delivery of all data (without any losses)
    * Without errors
    * In the correct order
* The TCP service is obtained by creating end points called **sockets**.
* A socket address consists of the host's **IP address** and a **16-bit port number** (TSAP).

### TCP Service Model

* TCP uses **well-known ports** (below 1024) for common services, such as FTP (20, 21), SSH (22), SMTP (25), HTTP (80), and HTTPS (443).
* TCP provides a **byte stream service**. If a sending application transmits 2048 bytes, TCP might **split** this into four 512-byte **segments**. The receiving application sees the 2048 bytes of data delivered as a single chunk.

![image-20251115125843242](https://media.opennet.top/i/2025/11/15/y1jg2y-0.png)

### **TCP Header**

* 20-byte header.
* The connection is identified by a **5-tuple**: [protocol (TCP), source IP, source port, destination IP, destination port].
* **Sequence number**: 该 TCP 段中“第一个字节”的偏移量。**payload** 的每个 **Byte** 消耗一个序列号。SYN 和 FIN 各自也会消耗 1 个序列号。连接期间序列号不会重置。
* **Acknowledgement number (Ack):** The next in-order byte **expected**, *not* the last byte correctly received.  期望收到的下一个字节的序号
* **Window size:** How many bytes may be sent starting at the byte acknowledged.

![image-20251115130602214](https://media.opennet.top/i/2025/11/15/ytvpw0-0.png)

### [Quiz 4.1]

A TCP segment has sequence number 0 and contains 512 bytes in its payload. What is the sequence number of the next segment of the same TCP connection? 

---

$$
\text{Next Seq} = 0 + 512 = \boxed{512}
$$

### [Quiz 4.2]

A connection has been established between processes P1 and P2. P1 receives from P2 a segment that has value **1023 in the "Acknowledgement Number"** field. What is the sequence number of the next chunk of data that P1 is now allowed to send?

---

$$\boxed{1023}$$

### [Quiz 4.3]

A TCP segment has sequence number 100 and contains 35 application layer bytes in its payload. If the segment gets received without errors, the receiver will respond with a segment using what value in the acknowledgement number field? (Assume that all previous segments in this session have been received and ACKd correctly).

---

- 发送方序号（Seq）= **100**
- 负载 = **35 字节**

这些字节覆盖的范围是： $100 \text{ to } 134$

所以接收方期望的下一个字节序号是：$134 + 1 = \boxed{135}$

### [Quiz 4.8]

A TCP session uses MSS=4096. One of the devices sends four maximum-sized segments in a pipeline. The first segment has sequence number 10000. The sequence numbers of the second, third and fourth segment in this pipeline will be **[14096]**, **[18192]** and **[22288]** respectively.

The first segment gets received with a bit error which the receiver detects during checksum validation. The receiver discards the segment and immediately sends a segment with ACK number **[10000]**. The second, third and fourth segments are received correctly. Upon reception of each one of them, the receiver will respond with segments using ACK numbers **[10000]**, **[10000]** and **[10000]** respectively.

Upon reception of those ACKs, the sender will retransmit the broken segment, using sequence number **[10000]**. This time round, the segment gets received correctly and the receiver responds using ACK number **[~~14096~~ 26384]**.

Assume that both cwnd and rwnd are large enough to accommodate the pipelining specified above. Assume that all prior segments in this session have been received and acknowledged correctly. Provide all answers using integers without a thousand separator (e.g. use 10000, not 10,000).

---

1. **四个段的序列号**

第 1 段：Seq = 10000

第 2 段：Seq = 10000 + 4096 = 14096

第 3 段：Seq = 14096 + 4096 = 18192

第 4 段：Seq = 18192 + 4096 = 22288

答案：14096, 18192, 22288

2. **第 1 段损坏，接收方立即回复 ACK**

损坏段被丢弃 → 接收方仍然期望 10000
因此：

ACK = 10000

3. **第 2、3、4 段被正确接收，但因为第 1 段丢失，接收方只能发送重复 ACK**

收到第 2 段 → 仍缺第 1 段 → ACK = 10000

收到第 3 段 → 仍缺第 1 段 → ACK = 10000

收到第 4 段 → 仍缺第 1 段 → ACK = 10000

答案：10000, 10000, 10000

4. **发送方根据这些重复 ACK 重传第 1 段**

重传段的序号仍然是：

Seq = 10000

5. **这次第 1 段收到正确 → 接收方期待下一个字节：**

receiver 已经缓存了 第二、第三、第四段的所有数据（因为它们没有丢）。

所有缓存的数据都可以顺序交付，因此 ACK 必须跳到：
$$
10000 + 4 \times 4096 = 26384
$$

### [Quiz 4.14]

The "sequence number" and "acknowledgement number" fields in the TCP header count

选项 A segment numbers

**选项 B bytes**

选项 C multiples of MSS

选项 D multiples of the "cwnd" variable

### **Header Flags (Control Bits):**

* **CWR (Congestion Window Reduced 拥塞窗口减少):** Signal from sender to receiver that it has slowed down. 发送方向接收方发出减速信号
* **ECE (Explicit Congestion Notification Error 显式拥塞通知错误):** Set to signal a TCP sender to slow down. 设置此信号以向 TCP 发送方发出减速信号。
* **URG:** Indicates the urgent pointer is used. 指示使用了紧急指针
* **ACK:** Indicates the Acknowledgement number is valid. 指示确认号有效
* **PSH (Pushed data):** Tells the receiver to deliver the data to the application upon arrival, not buffer it. 指示接收方在数据到达时立即将其传递给应用程序，而不是缓存。
* **RST (Reset):** Abruptly resets a confused connection or rejects an invalid segment/connection attempt. 突然重置混乱的连接或拒绝无效的段/连接尝试
* **SYN (Synchronize):** Used to establish connections. (SYN=1, Ack=0 for request; SYN=1, Ack=1 for acceptance). 用于建立连接。（SYN=1，Ack=0 表示请求；SYN=1，Ack=1 表示接受）
* **FIN (Finish):** Used for releasing a connection. The sender has no more data to transmit but can still receive data. 用于释放连接。发送方没有更多数据要发送，但仍可以接收数据。

### [Quiz 4.15]

The TCP header has a sequence of single-bit fields (the UAPRSF fields). Match the bits with the descriptions of their functionality. One of the possible answers applies to two of those bits.

| Bit             | 名称        | 正确描述                                                     |
| :-------------- | ----------- | ------------------------------------------------------------ |
| **URG (U bit)** | Urgent      | **Not used extensively**                                     |
| **PSH (P bit)** | Push        | **Not used extensively**                                     |
| **FIN (F bit)** | Finish      | **Used to gracefully close a TCP connection**                |
| **SYN (S bit)** | Synchronize | **Used during TCP connection setup**                         |
| **ACK (A bit)** | Acknowledge | **Used to acknowledge reception of data. May be combined with 'S' or 'F'** |
| **RST (R bit)** | Reset       | **Used to terminate a connection abruptly**                  |

### **TCP Connection Establishment & Release**

* **Establishment:** Uses the three-way handshake. This can be normal or simultaneous on both sides. 两个Host可以同时建立TCP连接（不常见）

> 在正常的三次握手中，一方主动发起（Active Open），另一方被动监听（Passive Open）。
>
> 但 TCP 协议允许 **双方都处于主动打开状态**（Active Open）。
>
> 场景：P2P，NAT穿透/打洞

![image-20251115132305384](https://media.opennet.top/i/2025/11/15/z40mn1-0.png)

* **Release:** To release a connection, either party sends a TCP segment with the FIN bit set. When the FIN is acknowledged, that direction is shut down for new data. Data may continue to flow in the other direction. The connection is released when both directions have been shut down.
    * 要释放连接，任一方发送一个 FIN 位已设置的 TCP 数据段。当 FIN 被确认后，该方向的数据传输将被关闭。数据可以继续沿另一个方向传输。当两个方向的数据都关闭后，连接才会被释放。

### **Flow Control (Sliding Window)**

> **流控**：防止**发送方发得太快**。接收方告诉发送方 **rwnd（Receiver Window）**
>
> rwnd 就是 TCP Header 中的 **Window Size 字段**

* The receiver advertises a **Window size** (e.g., WIN=2048) in its ACK
* If the receiver's **buffer** becomes full, it advertises WIN=0.
* The sender is then blocked and may not send more data (except for probes) until the application reads data and the receiver sends an update with a non-zero window (e.g., WIN=2048).
    * 然后发送方将被阻止，并且不能发送更多数据（探测除外），直到应用程序读取数据并且接收方发送具有非零窗口（例如，WIN=2048）的更新。

![image-20251115132504814](https://media.opennet.top/i/2025/11/15/z579rf-0.png)

### Regulating the Sending Rate

![image-20251115132945131](https://media.opennet.top/i/2025/11/15/z7tonq-0.png)

AIMD（Additive Increase, Multiplicative Decrease）控制算法

AIMD = 加性增加、乘性减少

当网络没有拥塞时：**加性增加**（每次加一点）

当出现拥塞时：**乘性减少**（例如减半）

> **(a) Fairness line 公平性线（对角线）**
> 表示两用户带宽一样的情况，越靠近这条线就越公平。
> **(b) Efficiency line 效率线（靠右上角的虚线）**
> 表示两用户的带宽利用率总和达到最大（100%）。

### **Congestion Control**

> **拥塞控制**：防止**网络里数据太多**. 使用 **cwnd（Congestion Window）**
>
> **cwnd 从不在 TCP 报文中发送，完全是发送端内部维护的变量。**

* 当网络负载超过其处理能力时，就会出现拥塞。路由器的队列增长，导致丢包。传输层根据此反馈降低发送速率。
* **Ack clock:** Returning Acks help preserve the slow link timing at the sender. This helps TCP smooth out traffic and avoid unnecessary queues.
    * **确认时钟：** 返回确认信息有助于保持发送端的慢速链路时序。这有助于 TCP 平滑流量并避免不必要的队列。

$$
发送窗口 = min(cwnd, rwnd)
$$

**Congestion Window (cwnd)**：**发送端最多能在网络中的未确认数据量。**

受 *拥塞控制* 影响。

**Flow Control Window（接收端窗口）**：接收方能接收/缓存的数据量。

受 *接收端能力* 影响。

![image-20251115134934733](https://media.opennet.top/i/2025/11/15/zjo8js-0.png)

---

TCP 在 Slow Start 阶段通过 ACK clock 指数增加 cwnd，从 1 → 2 → 4 → 8，直到填满网络瓶颈链路。

![image-20251115134957482](https://media.opennet.top/i/2025/11/15/zjt2bq-0.png)

When the sender gets an acknowledgement, it increases the cwnd by 1 and immediately sends 2 packets

**收到 1 个 ACK → cwnd +1**

因为 cwnd 值变大了，发送端可以立即再发送更多的数据

---

At the end of each RTT, the sender’s cwnd has grown enough that it can inject an additional packet into the network.
每个 RTT 结束后，cwnd 会增加 1，允许发送端再向网络多发一个包。

A quick way for the sender to detect packet loss:
packets beyond the lost packet arrive → receiver sends same ACK number → duplicate ACK → 3 duplicate ACK → fast retransmission.

一个快速检测丢包的方法是：
丢失包后续的包先到达接收方 → 接收方不断发相同的 ACK → Sender 收到 3 次重复 ACK → 快速重传丢失的包。

---

* **Regulating the Sending Rate:**
    * The goal is to operate near the "Optimal point" on a "Fairness line" and "Efficiency line".
    * TCP uses **AIMD (Additive Increase Multiplicative Decrease)** as its control law.
    
    * **Slow Start:** Begins with an initial cwnd of one segment. When the sender gets an acknowledgement, it increases the cwnd by 1. (This results in an exponential increase in packets per RTT, e.g., 1, 2, 4).
    
    * **Additive Increase:** After slow start, at the end of each RTT, the sender's cwnd grows enough to inject one additional packet into the network. (This is linear growth, e.g., cwnd 1, 2, 3, 4, 5).
    * **Fast Retransmit:** A packet loss can be detected quickly if the receiver sends 3 duplicate acknowledgements. This triggers a retransmission of the lost packet before the retransmission timeout fires.

### [Quiz 4.11]

For flow control and congestion control, TCP uses the rwnd (Receiver Window) and cwnd (Congestion Window) variables. Of the statements below, select those that are true.

选项 A rwnd is used for congestion control

**选项 B rwnd is used for flow control**

选项 C* cwnd may never exceed rwnd

选项 D rwnd counts in multiples of the MSS

**选项 E The unit for rwnd is bytes**

选项 F The maximum number of bytes in flight may never exceed MAX(rwnd , cwnd)

选项 G rwnd and cwnd are the same for both directions of a TCP connection

选项 H Information about cwnd is exchanged between devices using a field in the TCP header

**选项 I Each device sends its rwnd to the other device using a field of the TCP header**

**选项 J During TCP's "Slow Start" state, cwnd increases exponentially until it reaches a value called the "Slow Start Threshold" (ssthres). It then increases additively (linearly) until a loss is detected.**

---

> *教师答案认为 选项 C cwnd may never exceed rwnd 是正确的。此点存疑。

D: rwnd 单位是 **字节**，不是 MSS 的倍数。

G: 每个方向都有独立的 rwnd 和 cwnd。TCP 是 **双工**的。

H: **cwnd 从不在 TCP 报文中发送**，完全是发送端内部维护的变量。

I: rwnd 就是 TCP Header 中的 **Window Size 字段**。

J: TCP 的 Slow Start 行为描述：

- cwnd 指数增长直到 ssthresh
- 超过后线性增长（拥塞避免）
- 一旦丢包 → cwnd 减小
