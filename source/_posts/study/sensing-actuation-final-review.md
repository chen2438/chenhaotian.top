---
description: 发布于 2025-12-12
categories:
- study
date: 2025-12-12
slug: sensing-actuation-final-review
title: 传感、执行和能源技术 期末复习
updated: 
tags:
- study
- bristol
copyright: false
---

# 传感、执行和能源技术 期末复习

> University of Bristol
>
> EEMEM0019
>
> Sensing, Actuation, and Energy Technologies
>
> Msc Internet of Things with AI 物联网与人工智能
>
> 布里斯托大学 2025 传感、驱动和能源技术
>
> 所涉及版权归原作者所有
>
> The copyrights involved belong to the original author
>
> Program Link: https://upc.bristol.ac.uk/unit-programme-catalogue/UnitDetails.jsa?ayrCode=25%2F26&unitCode=EEMEM0019

## 1 Sensors vs Actuators

### Concepts

**Transducer 换能器**

A device that converts energy from one form to another

​	能量形式转换器

umbrella term for sensors & actuators.

​	传感器 & 执行器的总称

**Sensor 传感器**

convert **mechanical** inputs into **electrical** outputs.

机械输入 → 电信号输出

- Active 有源 **讲义认为有源=需要外部电源**

- Passive 无源

**Actuators 执行器**

convert electrical inputs into mechanical outputs

​	电信号输入 → 机械输出

### Smart Systems and Control

Smart System = sensors + actuators + control system

​	智能系统：传感器 + 执行器 + 控制系统

Control system types:

- **Open-loop**: relies on pre-set inputs (e.g., traffic lights).
    - 开环：依赖预设输入 (例：交通灯)
- **Closed-loop**: uses feedback to maintain output (e.g., insulin pump).
    - 闭环：利用反馈维持目标输出 (例：胰岛素泵)
- **Feedforward**: anticipates disturbances and adjusts **in advance**.
    - 前馈：根据预测输入**提前**调整
- **Feedback**: measures actual output and corrects deviations
    - 反馈：实时测量并修正

### [Quiz 1.1]

1. Which of the following statements correctly distinguishes a feedforward system from a feedback system? *

- A feedforward system continuously compares the output with the desired value and corrects the error.
- **A feedforward system acts before an error occurs, while a feedback system acts after an error is detected.**
- In a feedforward system, the control action depends on the output signal.
- A feedback system cannot compensate for disturbances.

### [Mock 1]

Q1: Identify the **correct** statement: (2 marks)

A. Sensors convert electrical inputs into mechanical outputs, while actuators work in the opposite direction.

B. Both open-loop and closed-loop control systems use sensed feedback to 
maintain a desired output.

**C. Feedforward systems perform faster than feedback systems as they detect** 
**disturbances as soon as they appear.**

> **前馈系统 (Feedforward systems)** 比反馈系统反应更快

D. None of the above statements is correct.

### [Quiz 3.9]

9 Draw block diagrams to compare feedback and feedforward closedloop control systems. *

![image-20251105192328984](https://media.opennet.top/i/2025/11/06/5chfm4-0.png)

| 控制方式 | 依据         | 优点           | 缺点                   |
| -------- | ------------ | -------------- | ---------------------- |
| 前馈     | 事先知道扰动 | 反应快         | 依赖模型，误差难免     |
| 反馈     | 输出误差     | 自动校正精度高 | 反应慢，需要先出现误差 |

### Embedded Computers

**Programmable Logic Devices (PLDs, SPLD)** – less common now

​	**可编程逻辑器件 (PLDs, SPLD)** – 已较少使用

**Reconfigurable computers (CPLD, FPGA)** – hardware concurrency, HDL programming

​	包括 Complex PLD (CPLD) and field programmable gate arrays 现场可编程门阵列 (FPGA)

> 现场可编程门阵列 (FPGA) 可以包含 **微控制器** 核心

​	**可重构计算机 (CPLD, FPGA)** – 硬件并行逻辑，HDL（Hardware Description Language，硬件描述语言）

**Microcomputers (Arduino, PIC, µC)**

​	微型计算机 – 如 Arduino、PIC、µC

- **µC = microcontroller =  MCU = 微控制器 = 单片机**:  processor, memory, I/O
  
    - **微控制器 MCU**：**CPU + Flash + RAM + 外设**
- > A **μC** is a specialized type of **microcomputer** that is optimized for control tasks
    >
    > • **微控制器** 是一种专用于控制任务的 **微型计算机**
- 编程语言: Embedded C, MicroPython, Arduino C++
- [构成](#Microcontroller Components)

**Single-board computers (SBC)** – e.g., Raspberry Pi, run OS

​	**单板计算机 (SBC)** – Raspberry Pi （不属于微控制器）

**Mobile computing devices** – smartphones, tablets

​	**移动计算设备** – 智能手机/平板

### [Mock 2]

Q2: Identify the correct statement: (2 marks)

**A. Field programmable gate arrays (FPGAs) can include a microcontroller core.**

B. A microcomputer can be thought of as a specialized type of microcontroller that is optimized for control tasks.

C. All microcomputers are microcontrollers.

D. None of the above statements is correct.

### [Quiz 1.2]

2. Which statement best describes the role of a microcontroller (µC) in the context of embedded computer systems? *

- **A microcontroller is a specialized type of microcomputer that integrates CPU, memory, and I/O peripherals, optimized for dedicated control tasks within embedded systems.**
- A microcontroller functions only as an external peripheral to a microprocessor
- A microcontroller is primarily used as a data-storage unit in embedded systems.
- A microcontroller is a general-purpose computer designed for multitasking and user interaction.

### Programming: Computer vs Embedded

**PC**: interacts with hardware via OS & APIs  通过操作系统和 API 与硬件交互

**Embedded system**:

- With OS → multitasking efficiency (e.g., airbag system)
    - 有 OS：注重多任务效率（如汽车安全气囊系统）
- Without OS → direct hardware interaction (e.g., microwave controller)
    - 无 OS：直接硬件交互（如微波炉控制器）

### Group Session

**2.1. Explain the difference between a microprocessor and microcontroller.**

解释微处理器和微控制器之间的区别。

**Answer:** The main difference is that a **microprocessor** requires several other **external components** for its operation as a computer, such as program memory and data memory, I/O module, and external clock module. 

A **microcontroller** on the other hand has all these support chips **incorporated inside** the same chip.

主要区别在于，**微处理器**需要一些其他**外部组件**才能像计算机一样运行，例如程序存储器和数据存储器、I/O模块和外部时钟模块。而**微控制器**则将所有这些支持芯片**集成在同一芯片**内。

**2.2. It is required to monitor the temperature of an oven remotely and to display the temperature on a PC screen. Assuming that we have available a digital temperature sensor, and a Bluetooth transmitter-receiver module, draw a block diagram to show how the system may be configured.**

需要远程监控烤箱的温度，并在电脑屏幕上显示温度。假设我们有一个数字温度传感器和一个蓝牙收发模块，请绘制一个框图来展示系统的配置方式。

**Answer:**
 [Oven] → [Digital Temperature Sensor] → [Microcontroller] → [Bluetooth Transmitter] → [Bluetooth Receiver (PC)] → [PC with display]

[烤箱] → [数字温度传感器] → [微控制器] → [蓝牙发射器] → [蓝牙接收器（PC）] → [带显示屏的PC]

## 2 Control System Component

### Data Acquisition Systems

​	数据采集系统

- Sensors collect data from objects
    - 传感器从对象采集数据。
- Some sensors do not need contact (e.g., radiation detector).
    - 部分传感器无需物理接触（例：辐射探测器）。
- Some sensors require **signal conditioning** before use.
    - 部分传感器需要 **信号调理** 才能使用。
- Sensors may be **active** (**need external power**) or **passive** (**no external power**).
    - 传感器分为 **有源 (需要外部电源)** 和 **无源 (无需外部电源)**。
- Multiplexer (MUX) feeds multiple sensor outputs into ADC for digitisation.
    - 多路复用器 (MUX) 将多个传感器信号送入 ADC 转换为数字信号。

### [Mock 3]

![image-20251203221435618](https://media.opennet.top/i/2025/12/04/a5t231-0.png)

Identify the statement that **correctly** defines the components in Figure Q3:

**A. Sensors 1 and 3 need an interface circuit because their outputs are not suitable.** 

​	正确。传感器1和3需要接口电路，因为它们的输出不适合直接使用。

B. A/D converts each sensor's digital output to analogue. 

​	错误。弄反了。

C. Sensor 4 is a passive sensor, as it requires an external power source for its  operation. 

​	错误。传感器4 是有源的，因为它连接到 Excitation Circuit （激励电路）。无源传感器不需要外部电源（**存在争议，考试以讲义为准： 有源 = 需要外部电源**）

​	讲义认为 无源传感器不需要外部电源，有源传感器需要外部电源

D. None of the above statements is correct.

---

根据图片，回答问题：

1. **Why sensors 1 and 3 need an interface circuit?**

因为传感器1和3不能直接连接到标准电路。它们的**输出信号不合适**（inappropriate output signals，例如应变仪），因此需要一个接口电路（即信号调节器）来进行处理。

2. **Which sensor is active and which one is passive?**

无源传感器 (Passive)： 传感器 **1, 2, 3, 和 5**。

- *说明：* 它们不需要外部电源（例如热电偶）。

有源传感器 (Active)： 传感器 **4**。

- *说明：* 它需要外部电源/激励电路（例如热敏电阻）。

3. **Why do we need MUX?**

MUX 用于将多个传感器的数据**一次一个地**（one at a time）传输到模数转换器 (A/D) 中。

4. **What is the difference between sensors 1 and 5 vs sensors 2, 3, and 4?**

区别在于与物体的**物理接触**情况。

- 传感器 1 和 5： 与物体**没有**物理接触（not in physical contact），例如辐射探测器。
- 传感器 2、3 和 4： 虽然文中未直接写出，但根据图示和对1、5的描述，隐含这些传感器与物体有物理接触。

5. **What is A/D and why do we need it?**

什么是 A/D： 它是**模数转换器** (Analogue-to-Digital Converter)。

为什么需要它： 如果传感器产生的是**模拟信号** (analogue signal)，就需要 A/D 将其转换（以便计算机处理）。

### [Mock 4]

Q4: Fill the blank with a correct phrase: 

An anaesthetic vapor delivery system includes several sensors to control the level of anaesthetic drugs delivered to a patient through inhalation during a surgical procedure. All sensors’ data are multiplexed, digitized, and fed into a …… which calculates the actual vapor concentration. (2 marks)

A. Microcontroller

**B. Digital signal processor**

> L2 讲义的 Data Acquisition Systems – Example 2 部分：
>
> All sensors’ data are multiplexed, digitized, and fed into a **digital signal processor (DSP)** which calculates the actual vapor concentration

C. Actuator

D. None of the above phrases is correct

### Interface Circuits

​	接口电路

A **sensing module** includes: sensor + signal conditioning + converting + communication.

​	**传感模块** 包含：传感器 + 信号调理 + 转换 + 通信电路。

**Signal conditioning**: amplification, filtering, impedance matching, level shifting.

​	**信号调理**：放大、滤波、阻抗匹配、电平转换。

Needed to make weak/noisy sensor signals usable.

​	作用：让微弱或含噪的传感器信号可被处理器使用。

### Signal Conditioner

​	信号调理器

A signal conditioning circuit brings a signal from the sensing element up to
the format that is **compatible** with the load device (typically an ADC).

​	信号调理电路将来自传感元件的信号转换为与负载设备（通常为 ADC）兼容的格式，有：放大、滤波、隔离、电平转换、整形、线性化

![image-20251124132447725](https://media.opennet.top/i/2025/11/24/z4vav6-0.png)

![telegram-cloud-photo-size-1-4983278879871011588-y](https://media.opennet.top/i/2025/11/24/z6ewmf-0.jpg)

### [Mock 5]

Q5: Identify the correct signal conditioner for the sensor type presented in Figure Q5: (2 marks)

![image-20251205182956220](https://media.opennet.top/i/2025/12/06/3sp47j-0.png)

A. Voltage follower

B. Noninverting follower 

**C. Current-to-voltage converter**

D. Capacitance-to-voltage converter

### Amplifiers ※

​	放大器

Sensor outputs often too weak (μV, pA). Need **amplifiers (OP-AMPS)**.

​	**运算放大器**用于增强传感器输出

Closed-loop OP-AMPS use **negative feedback** for stability.

​	运算放大器 通过 **负反馈** 提高稳定性（**解题：V- 约等于 V+，列电阻分压公式**）。

Types:

- **Non-inverting amplifier** → low-voltage signals
    - **（非反向）同相放大器** → 低电压信号
- **Voltage follower (buffer)** → high input, low output impedance
    - **电压跟随器** → 高输入阻抗、低输出阻抗
- **Current-to-voltage converter → e.g., photodiodes** ※
    - **电流-电压转换器** → 适合光电二极管 ※
- **Charge-to-voltage converter → e.g., piezoelectric sensors** ※
    - **电荷-电压转换器** → 适合压电传感器 ※
- **Capacitance-to-Voltage converter** -> e.g., Pressure sensor, **Accelerometer**
    - **电容-电压转换器** -> 压力传感器、加速度计


![image-20251001220026916](https://media.opennet.top/i/2025/10/02/89uta7-0.png)

![image-20251001220143298](https://media.opennet.top/i/2025/10/02/8ajrfn-0.png)

### [Quiz 1.3]

3.  A data acquisition system is designed to measure signals from one photodiode and one piezoelectric sensor. Which of the following combinations of components is most appropriate for this system?

- A charge-to-voltage amplifier for the photodiode, a current-to-voltage amplifier for the piezoelectric sensor, a multiplexer to select between signals, and an analogue-to-digital converter (ADC).
- **A current-to-voltage amplifier for the photodiode, a charge-to-voltage amplifier for the piezoelectric sensor, a multiplexer to select between signals, and an analogue-to-digital converter (ADC).**
- Two voltage followers connected directly to an analogue-to-digital converter (ADC).

> photodiode generates **current**.  光电二极管产生**电流**。
>
> piezoelectric sensor generates **charge** (very small). 压电传感器产生**电荷**（非常小）。
>
> 传感器 -> MUX -> ADC

### [Quiz 1.5]

5. Select the correct component for the correct action. 

- Start-up circuit: [Power up the system]
- **Capacitance-to-voltage converter**: [Connect an **accelerometer** to a microcontroller]
- Voltage regulator: [Step down/up voltage]
- Storage unit: [Store generated power from a solar panel]

### [Quiz 3.8]

8 Calculate the gain for the amplifier presented in the Figure. * 

![image-20251105192007460](https://media.opennet.top/i/2025/11/06/5akl2a-0.png)

由于运放有负反馈（ R2 把输出接回反相输入端）

=>$ V_{-} \approx V_{+} = V_{in}$ , 即虚短

=> Vin / R1 = Vout / (R1+R2)

=> 增益 Gain = Vout / Vin = 1 + R2/R1 = 11

### Microcontroller Components

微控制器的组成

**CPU** (microprocessor) 微处理器

**On-chip memory** (program/data) 片上内存

**I/O devices** (parallel, UART, etc.)

**Clock oscillator** 时钟振荡器

**Timers** 定时器

**ADC/DAC** 模数/数模转换器

**ICSP** (In-circuit programming/debugging) 在线串行编程/调试

### Communication Protocols ※

​	通信协议

**Serial communication**: simplex, half duplex, full duplex

​	**串行通信**：单工、半双工、全双工

baud rate is equivalent to the number of bits per second (bps) transferred

​	波特率等于每秒传输的比特数

**Asynchronous transfer** 异步传输 不共享公共时钟信号

**Synchronous transfer** 同步传输 有公共时钟信号 或 接收端能从接收到的信号跳变中获得时钟信号

**Protocols**:

- **UART**, Universal **Asynchronous** Receiver–Transmitter 通用**异步**收发器
    - **asynchronous**, full duplex **异步，全双工**

- **SPI**, Serial Peripheral Interface 串行外设接口
    - **synchronous**, full duplex **同步，全双工**

- **I²C, Inter-Integrated Circuit 内部集成电路 ※**
    - → **synchronous**, multi-device bus, **half duplex** **同步**，多设备总线，**半双工**

- CAN → automotive/industrial, message-based 汽车/工业网络，基于消息
- USB → host-device mode 主机-设备模式，用以替代 UART
- Ethernet / Wi-Fi / Bluetooth → network/IoT 网络/物联网

| Protocol      | Type                      | Line/Signals                | Speed    | Use case           |
| ------------- | ------------------------- | --------------------------- | -------- | ------------------ |
| **UART**      | 异步（Asynchronous）      | TX，RX，GND                 | 中等     | 调试、简单串行通信 |
| **SPI**       | 同步（Synchronous）       | COPI, CIPI, SCK, CS         | 高       | 高速外设           |
| **I2C**       | 同步（Synchronous）       | SDA, SCL                    | 低到中等 | 多设备共享总线     |
| **CAN**       | 基于消息（Message-based） | CAN High, CAN Low           | 中等     | 汽车、工业网络     |
| **USB**       | 串行（Serial）            | 差分对（Differential pair） | 低到高   | 外设、电源传输     |
| **Ethernet**  | 网络（Network）           | 多条线路（Multiple）        | 高       | 局域网 LAN         |
| **Wi-Fi**     | 无线（Wireless）          | 无线                        | 可变     | 无线通信           |
| **Bluetooth** | 无线（Wireless）          | 无线                        | 可变     | 短距离无线         |

### [Quiz 1.4]

4. Which of the following communication protocols is most suitable for high-speed, **half-duplex** data transfer between a microcontroller and a peripheral device? *

- SPI (Serial Peripheral Interface)
- **I²C (Inter-Integrated Circuit)**
- UART (Universal Asynchronous Receiver–Transmitter)
- USB (Universal Serial Bus)

### PMIC

**Power Management Integrated Circuits** 

​	电源管理集成电路

All electronic systems require **stable DC supply**.

​	**所有**电子系统需要 **稳定直流电源**。

Voltage limits:

​	电压约束：

- Max → reliability (oxide breakdown, gate thickness)
    - 最大值 → 可靠性（栅氧化层厚度、击穿极限）
- Min → performance (processor needs min. voltage for freq.)
    - 最小值 → 性能（处理器需要最低电压才能正常运行）

Energy sources: batteries, solar, thermal, vibration, RF, grid.

​	能源来源：电池、太阳能、热能、振动、射频、交流电网。

PMIC functions:

- Voltage conversion & regulation 电压转换与稳压
- EMI filtering EMI 滤波
- Step-down / step-up conversion 降压/升压转换
- Power harvesting (AC–DC, storage in battery or supercap)
    - 能量采集（AC–DC 转换，存储于电池或超级电容）

### Group Session*

**Question 1: Reference 1 demonstrates a closed-loop deep brain acquisition-stimulation system.**
 **问题1：参考文献1展示了一个闭环深部脑部采集-刺激系统。**

**1.1. Explain the type of sensors and actuators used, their application purpose, and how they formed a closed-loop operation?**
 **1.1. 解释使用的传感器和执行器的类型，它们的应用目的，以及它们如何形成闭环操作？**

**Answer:** A surface electrode (placed on brain surface) and a needle electrode (inserted into brain) to form two simultaneous neurostimulation (actuating) channels and a surface electrode (placed on skull) and a needle electrode (inserted into brain) to form two simultaneous acquisition (sensing) channels. The acquisition electrodes read the biopotential signals from the brain and based on that adjust the pulse width and the amplitude of the stimulation signals applied by the neurostimulation electrodes to the brain.
 **回答：** 一个表面电极（放置在大脑表面）和一个针状电极（插入大脑）形成两个同时工作的神经刺激（执行）通道；一个表面电极（放置在颅骨上）和一个针状电极（插入大脑）形成两个同时工作的采集（感知）通道。采集电极读取来自大脑的生物电位信号，并根据这些信号调整神经刺激电极施加到大脑的刺激信号的脉宽和幅度。

**1.2. How was the system powered and explain why a power management circuit was required?**
 **1.2. 系统是如何供电的，并解释为什么需要电源管理电路？**

**Answer:** The power supply of the system consists of a 3.7 V lithium polymer battery that supplies a step-down +3.3 V for the neurostimulator circuit and a step-up +12 V for the acquisition circuit.
 **回答：** 系统的电源由一个 3.7 V 锂聚合物电池组成，它提供降压 +3.3 V 给神经刺激电路，同时提供升压 +12 V 给采集电路。

**1.3. Explain the signal conditioning steps of the system.**
 **1.3. 解释该系统的信号调理步骤。**

**Answer (Neurostimulation circuit):** The user sets the **pulse signals** that are communicated to the **ESP32 microcontroller**. The **DAC** converts the **microcontroller signals** to **digital signals** that pass through a buffer and applied by HCP (current pump) and inputted to the **electrodes**.
 **回答（神经刺激电路）：** 用户设置**信号脉冲**并传输到 **ESP32 微控制器**。数模转换器（DAC）将微控制器信号转换为数字信号，这些信号经过缓冲器并由 HCP（电流泵）施加后输入到电极。

**Answer (Acquisition circuit):** The acquisition circuit receives the signals delivered by electrodes. The first stage of the circuit has two channels with **low-noise amplifiers (LNAs)** in the differential configuration to block the DC signals that are often present on the acquired signal. In the second stage, acquisition channels’ output goes through a **multiplexer (MUX)** and then a buffer to promote a good impedance match. The next stage is an **analogue notch filter (ANF)** to remove the noise component from the supply. Then comes an **active low-pass filter (ALPF)** to attenuate high-frequency noise and provide gain. Finally, the signal is sent to **ADC** of the **ESP32 microcontroller**.
 **回答（采集电路）：** 采集电路接收由电极传输的信号。电路的第一阶段有两个差分配置的**低噪声放大器（LNA）**，用来阻断采集信号中常见的直流分量。第二阶段，采集通道输出传递到**多路复用器（MUX）**，然后通过缓冲器，以改善级间阻抗匹配。下一步是**模拟陷波滤波器（ANF）**，用于去除电源噪声分量。随后是**有源低通滤波器（ALPF）**，用来衰减高频噪声并提供增益。最后，信号被送入 **ESP32 微控制器的 ADC**。

**Question 2: Reference 2 used an FPGA-based electronic control unit to control torque in a vehicle.**
 **问题2：参考文献2使用基于 FPGA 的电子控制单元来控制车辆的扭矩。**

**2.1. Explain how the system works.**
 **2.1. 解释该系统如何工作。**

**Answer:** The driver sets the torque target using a **potentiometer with a 12-bit analogue-to-digital converter** (i.e., throttle) and sends it to the **FPGA**. The **speed sensors** collect wheel and roller speed and send to FPGA to calculate **angular velocity**. FPGA sends processed data to **ARM cores** to set control signals, which are then sent via **CAN** to the **permanent magnet synchronous motor (PMSM)**. Additional IMU and GPS data make the system more like real road tests, but not related to torque setting.
 **回答：** 驾驶员使用一个**带有 12 位模数转换器的电位器**（即油门）设置扭矩目标，并将其发送到 **FPGA**。**速度传感器**收集车轮和滚筒的速度并发送到 FPGA，用来计算**角速度**。FPGA 将处理后的数据发送到 **ARM 核心**，ARM 核心设定控制信号，并通过 **CAN 总线**发送到**永磁同步电机（PMSM）**。另外，惯性测量单元（IMU）和 GPS 数据被用来让系统更接近实际道路测试，但与扭矩设置无关。

**2.2. What type of communication protocols were used between different elements of the system?**
 **2.2. 系统中不同元素之间使用了哪种通信协议？**

**Answer:** **Controller area network (CAN)** between the board and motor. **UART** between IMU and GPS and the board. **Serial peripheral interface (SPI)** between the throttle potentiometer sensor and the FPGA.
 **回答：** **控制器局域网（CAN）**用于控制板与电机之间通信。**UART** 用于 IMU、GPS 与控制板之间通信。**串行外设接口（SPI）**用于油门电位器传感器与 FPGA 之间通信。

## 3 Models, Materials, and  Fabrication

### Modeling Concepts ※

**Analytical/equation-based models:**  Use physical laws

​	分析/基于方程的模型

 **Numerical methods** 数值方法

-  **Finite Element Method (FEM)**: Divide the system into small elements (known as meshing)
    - eg: stress analysis in a pressure sensor **压力传感器**中的应力分析
    - **有限元法**：将系统分为小单元（网格划分）；适用于复杂几何
-  **Finite Difference Method** (**FDM**): For time-dependent or distributed systems. Approximate derivatives with finite differences.
    - **有限差分法**：对于随时间变化或空间分布的问题。用有限差分来近似导数。
    - **temperature sensor 温度传感器**

---

-  **Statistical and data-driven models**: statistical methods or ML
    - 统计和数据驱动模型：采用统计方法或机器学习
-  Transfer function/state-space models 传递函数/状态空间模型
    - 为动态行为提供数学表示；e.g. 执行器等效电路
-  **Stochastic/probabilistic models 随机/概率模型**
    - eg. **gas sensors 气体传感器**
-  **Empirical/curve-fitting models  经验/曲线拟合模型**
    - eg. pressure sensors 压力传感器
-  **Multiphysics and coupled models  多物理场和耦合模型**
    - eg. **electro-mechanical 机电耦合**

### [Quiz 2.4]

**Select the correct sensor that can be modelled by using each modeling approach.** 

Finite Difference Method (FDM): **Temperature sensors** 

Curve-fitting: **Nonlinear sensors**

Multi-physics and coupled models: **Electromechanical sensors**

Stochastic/probabilistic models: **Gas sensors**

### Modelling Example*

**Modelling of a Capacitive Pressure Sensor**

**Sensor Structure & Working Principle**

- The pressure sensor has two main parts:
    - Top: dielectric layer on flat electrode.
    - Bottom: deformable micro-pyramids with electrode coating.
- Pressure increases the contact area → increases capacitance.
- Analytical modelling uses micro-cones (simpler) then extended to pyramids.
- Method: dimensionality reduction (3D → 2D).

- 压力传感器由两部分组成：
    - 顶部：平面电极上的介电层。
    - 底部：带电极涂层的可变形微金字塔。
- 压力增大接触面积 → 电容增加。
- 分析建模：先用微锥简化，再推广到微金字塔。
- 方法：降维（3D → 2D 平面模型）。

------

**Analytical Modelling (Equations)**

- Displacement $d$ and contact radius $a$ related to geometry & angle.
- Normal load force $F_N$ depends on effective Young’s modulus $E^*$.
- For small strain → linear elasticity, Hooke’s law applies ($\sigma = E\epsilon$).
- For large strain → nonlinear elasticity, $E$ increases with strain.
- Micro-cones → Micro-pyramids via scaling factor $k_c$.

- 位移 $d$ 与接触半径 $a$ 受几何与角度影响。
- 法向载荷 $F_N$ 与有效杨氏模量 $E^*$ 有关。
- 小应变时 → 线性弹性，满足胡克定律 ($\sigma = E\epsilon$)。
- 大应变时 → 非线性弹性，杨氏模量随应变增加而增大。
- 微锥结果通过常数 $k_c$ 转换为微金字塔模型。

---

**FEM (Finite Element Modelling)**

- FEM simulations used to validate analytical model.
- Deformation studied at different pressures & pyramid angles.
- Comparison shows analytical ≈ FEM for deformation, modulus, and capacitance changes.

- 使用有限元方法（FEM）验证解析模型。
- 在不同压力与角度下研究变形。
- 对比表明：解析解与 FEM 结果在变形、模量、电容变化上高度一致。

---

**Equivalent Circuit Model**

- Total capacitance = sum of three parallel capacitors:
    - $C_1$: tip region
    - $C_2$: sidewalls (air + dielectric)
    - $C_3$: spacing region (air + dielectric)
- Capacitance increases with displacement & contact area.

- 总电容 = 三个并联电容之和：
    - $C_1$：金字塔尖端区域
    - $C_2$：侧壁区域（空气 + 介电层）
    - $C_3$：间隙区域（空气 + 介电层）
- 电容随位移和接触面积的增加而增大。

---

**Analytical–Circuit Link**

- Relationship between displacement $d$, load $F_N$, and total capacitance $C_{sum}$.
- Establishes model $C_{sum}(F_N)$.
- Enables prediction of wide pressure ranges.
- Can also generate data for NN training (inverse design).

- 建立位移 $d$、载荷 $F_N$、总电容 $C_{sum}$ 的关系。
- 得到 $C_{sum}(F_N)$ 的解析模型。
- 可预测宽范围内的压力响应。
- 还能生成数据用于神经网络训练，实现传感器反向设计。

---

**Neural Network (NN) Approach**

- Input: sensor design parameters (geometry, spacing, dielectric thickness, constants).
- NN trained with 10,000 samples from analytical model.
- Approximates analytical solution with <1% error.
- Can inversely design sensor parameters for target performance.

- 输入：传感器设计参数（几何尺寸、间距、介电层厚度、材料常数）。
- 使用 10,000 个解析模型生成的数据训练神经网络。
- NN 近似解析解，误差 <1%。
- 可通过反向设计获得满足目标性能的传感器参数。

### Materials*

> 根据模拟试卷，未考察材料部分

**Semiconductors** 半导体

Inorganic materials: Silicon (Si),  Germanium (Ge), and diamond

​	无机材料：硅 (Si)、锗 (Ge) 和金刚石

For active components: be doped with donor (n-type) or acceptor (p-type) impurities

制造有源器件：掺杂N或P型杂质

**Metals** 金属

Ferrous metals: eg. steel, magnetic sensors, magnetic shields

​	黑色金属：例如钢，用于磁传感器和磁屏蔽

Nonferrous metals: permeable to magnetic fields

​	有色金属可穿透磁场

Copper (Cu): excellent thermal and electrical properties; difficult to machine

​	铜：导热导电性能好；难加工（铝作为替代）

Aluminium (Al): high strength-to-weight ratio; anticorrosion

​	铝：高强度重量比；抗腐蚀（氧化）

 Gold (Au): soft and chemically inert. eg. electrical contacts 

​	金：软；化学稳定；制造电触点

Silver (Ag):  Least costly of all precious metals; malleable; corrosion resistant; highest electrical and thermal conductivity

​	银：成本低；延展性；耐腐蚀；导电导热

Platinum (Pt): malleable, ductile and corrosion resistant; Its positive temperature coefficient of resistance is stable and reproducible; eg. temperature sensing

​	铂：延展性；韧性；耐腐蚀；电阻的正温度系数稳定；用于温度传感

**Ceramics** 陶瓷

high structural strength, thermal stability, light weight, resistance to many chemicals

​	高结构强度、热稳定、轻、耐多种化学品

可用于 sensor substrates （传感器基板）

**Plastics (Polymers)** 塑料（聚合物）

Thermoplastic: becomes soft and moldable when heated and hardens again when cooled without undergoing any chemical change in its structure.

​	热塑性塑料：加热变软可塑，冷却后结构不变。

### Micro/nanofabrication of Sensors

​	传感器的微/纳米制造

**Semiconductor devices (e.g., transistors)**: 

​	半导体器件 eg 晶体管

Fabrication:
➢ Photolithography/ e-beam lithography
➢ Thin film deposition (Physical Vapour deposition
(PVD), Chemeical Vapour Deposition (CVD), Atomic
Layer Deposition (ALD))
➢ Etching (Reactive Ion Etching (RIE), Deep RIE
(DRIE), wet etch)
➢ Doping/implantation
➢ Wafer bonding

制造：
➢ 光刻/电子束光刻
➢ 薄膜沉积（物理气相沉积 (PVD)、化学气相沉积 (CVD)、原子层沉积 (ALD)）
➢ 刻蚀（反应离子刻蚀 (RIE)、深反应离子刻蚀 (DRIE)、湿法刻蚀）
➢ 掺杂/注入
➢ 晶圆键合

**Sensors**

Fabrication:
➢ Photolithography
➢ Thin film deposition (PVD, CVD, ALD)
➢ Etching (RIE, DRIE, wet etch)
➢ Wafer bonding

制造：
➢ 光刻
➢ 薄膜沉积（PVD、CVD、ALD）
➢ 刻蚀（RIE、DRIE、湿法刻蚀）
➢ 晶圆键合

### Cleanroom

​	洁净室

A highly controlled environment with very low levels of pollutants (dust, airborne microbes, aerosol particles, chemical vapors). Essential for semiconductor and sensor fabrication.

一种高度控制的环境，内部污染物（灰尘、空气微生物、气溶胶、化学蒸汽）极低。是半导体与传感器制造的必需条件。

### Micro/nanofabrication

​	微纳米制造

**Top-Down** （自上而下）

Start from bulk material, carve down to nanoscale using lithography & etching.

从大块材料开始，通过光刻、刻蚀等方式逐步“雕刻”到纳米尺度。

Pros 优点: High precision, reproducible. 高精度、可重复。

Cons 缺点: Expensive, requires advanced equipment. 成本高、设备昂贵。

**Bottom-Up** （自下而上）

Build structures atom-by-atom or molecule-by-molecule via self-assembly, CVD, ALD.

从原子或分子逐步“搭建”结构，常用方法有自组装、化学气相沉积 (CVD)、原子层沉积 (ALD)。

Pros 优点: Enables novel nanomaterials. 可开发新型纳米材料。

Cons 缺点: Large-area patterning is difficult. 大面积图案难以实现。

### Fabrication Method ※

#### **Spin Coating** 旋涂

<img src="https://media.opennet.top/i/2025/11/25/3mmpqr-0.png" alt="image-20251124181938650" style="zoom: 67%;" />

该工艺用于在**基底 (substrate)** 上形成一层 薄的（0.1 – 50 μm）**有机溶液 (organic solution)**的**共形薄膜 (conformal layer)**。例如，在**硅晶圆 (Si wafer)** 上**沉积(coating)** PI（聚酰亚胺）。

溶液首先被倒在**基底 (substrate)** 上（步骤 a），然后样品以很高的速度旋转——通常超过每秒 10 转。离心力将材料铺展开来（步骤 b），多余的材料会被甩到边缘之外。

气流会吹干大部分溶剂（步骤 c），在溶剂蒸发后，样品表面会留下 **一层薄膜**（步骤 d）。

旋涂后通常会进行**烘烤(baking)**，使薄膜固化成一个稳定的**固体层 (solid layer)**。

---

#### **Vacuum Deposition** 真空沉积

<img src="https://media.opennet.top/i/2025/11/25/3sk46o-0.png" alt="image-20251124182935510" style="zoom:67%;" />

该工艺用于在**基底 (substrate)** 上形成 一层薄的**金属 (metal)** **共形薄膜 (conformal layer)**。例如，在**硅晶圆 (Si wafer)** 上**沉积(coating)** 铝（Al）。

该系统由一个**真空腔体 (vacuum chamber)**组成，通过扩散泵将腔体内空气抽至 10⁻⁶–10⁻⁷ Torr 的真空度。

目标金属被放置在一个陶瓷坩埚中，并通过钨丝加热到高于金属熔点，使其转变为气态，然后在基底表面凝结并沉积成膜。

另一种加热方式是使用 **电子束（electron beam）** 加热。

---

#### **Sputtering** 溅射

该工艺用于在**基底 (substrate)**上形成 一层薄的**金属 (metal)** **共形薄膜 (conformal layer)**。例如，在**硅晶圆 (Si wafer)** 上**沉积(coating)** 铝（Al）。

与真空沉积方法类似，溅射同样在**真空腔体 (vacuum chamber)**内进行；但不同的是，在抽空空气之后，会向腔体中引入**惰性气体 (inert gas)**，例如氩气或氦气，压力约为 2×10⁻⁶ – 5×10⁻⁶ Torr。

一个外部高电压的直流或交流电源连接到阴极（靶材），而阴极由目标金属制成。

基底连接到阳极，并与阴极保持一定距离。

高电压会点燃惰性气体形成等离子体，气体离子会轰击靶材表面。

轰击离子携带的动能会将靶材表面的部分金属原子击出。

这些被溅射出来的金属原子会沉积到样品的表面，形成薄膜。

---

#### **Chemical Vapor Deposition (CVD)** 化学气相沉积

该工艺用于在基底上形成 **一层薄的或厚的晶体薄膜 (thin/thick crystalline layer)**。例如，在 InP 基底(substrate)上沉积 Ga₀.₄₇In₀.₅₃As，或在硅基底上沉积二氧化硅（SiO₂）。

**基底或晶圆(substrates or wafers)**放置在一个**固定或旋转(stationary or rotating)**的托盘（基底支撑台 **substrate holder**）上，托盘的温度由加热元件提升至所需水平。

腔体顶盖有一个载气（H₂）入口，该载气中可以加入不同的前驱体（precursors）和掺杂剂（dopants）。

这些添加物被载气带到加热后的基底表面，在其上形成薄膜。

气体混合物从分布锥出口均匀流向晶圆上方的表面，并从排气口排出。

在此过程中会产生化学副产物，这些副产物与未反应的前驱体气体一起被排出腔体。

---

#### **Electroplating** 电镀

电镀是利用电流在导电物体表面沉积一层 **金属涂层** 的过程。例如，在 PI（聚酰亚胺）基底上镀金（Au）。

电镀所使用的工艺称为 **电沉积（electrodeposition）**。
 需要镀层的部件放置在一个包含一种或多种金属盐溶液的浴槽或槽内。

需要镀层的部件连接到电路中，成为电路的 **阴极（负极）**；而一个电极（通常使用同种金属制成）作为 **阳极（正极）**。

电镀槽中的阳极和阴极连接至直流电源。
 阳极中的金属被氧化，形成带正电荷的 **金属阳离子（cations）**。

这些阳离子与溶液中的阴离子结合，并最终在阴极表面被还原，沉积成 **金属态的涂层**。

---

#### **Photolithography** 光刻

<img src="https://media.opennet.top/i/2025/11/25/47cwrg-0.png" alt="image-20251124185421038"  />

**在基底上进行微/纳米结构图案化（Patterning）**

例如，在硅晶圆上形成光刻胶的微尺度图案。通常，这些已图案化的光刻胶层会用于对其下方的其他材料层（如 SiO₂）进行刻蚀，从而实现图案转移。

整个流程从制作掩膜（mask）开始（例如：玻璃板上的铬图案）。

晶圆随后被涂上一层对紫外光（ultraviolet light，UV）敏感的聚合物（光刻胶 photoresist）。

紫外光通过掩膜(mask)照射到光刻胶上。

光刻胶随后经过显影（developing），将掩膜上的图案转移到光刻胶层中。

光刻胶有两种类型：**正性（positive）光刻胶** 和 **负性（negative）光刻胶**。

> 曝光区域为图示中间部分

- UV 照射**正性**光刻胶 → 削弱聚合物，使其在显影时被溶解 → **曝光区域被去除**。
- UV 照射**负性**光刻胶 → 曝光区域变硬 → **未曝光区域被去除**。

随后使用化学方法（或其他方法）去除光刻胶图案中暴露出来的 SiO₂。

最后通过溶液去除剩余光刻胶，留下具有图案的 SiO₂ 层。

#### [Mock 6]

Q6: Figure Q6 illustrates the photolithography steps for patterning the photoresist layer. Identify the incorrect statement: (2 marks)

![image-20251205184423565](https://media.opennet.top/i/2025/12/06/41fgtb-0.png)

A. Baking is usually required after the second step.

**B. A negative photoresist is used in this process.**

C. Developing the photoresist in the last step enables transferring the pattern of the mask to the photoresist. 

D. None of the above statements is incorrect.

---

#### **Wet Etching** 湿法刻蚀

将晶圆浸入化学刻蚀液的液槽中，从而去除材料。
 湿法刻蚀剂主要分为两类：

1. **[默认] 各向同性 刻蚀（Isotropic etchants）**
    - 在所有方向上的刻蚀速率相同。
    - 示例：使用 **氢氟酸（HF）** 刻蚀 SiO₂。
2. **各向异性刻蚀（Anisotropic etchants）**
    - 在不同晶向的刻蚀速率不同，因此可更好地控制最终结构形状。
    - 示例：使用 **氢氧化钾（KOH）** 刻蚀硅晶圆。

#### Dry Etching 干法刻蚀

最常见的形式是 **反应离子刻蚀（Reactive Ion Etching, RIE）**。

- 高能离子被加速朝向要刻蚀的材料表面。
- **各向异性（Anisotropic）刻蚀技术**。
- 能刻蚀深槽与深坑（深度可达十几微米），并能保持接近垂直的壁。
- 适用于多种材料：硅（Si）、氧化物、氮化物等。
- 也可用于刻蚀聚合物。

![image-20251124194438551](https://media.opennet.top/i/2025/11/25/5p1rx3-0.png)

> **a：各向同性湿法刻蚀**（侧向也会被刻掉 → 圆弧状侧壁）
>
> **b：各向异性湿法刻蚀**（因不同晶向刻蚀速率不同 → 形成斜面）
>
> **c：先干法后湿法刻蚀，用于形成尖端结构**

#### [Quiz 3.7]

7 Describe the difference between **reactive** **ion etching** and **hydrofluoric acid (HF)** for etching of silicon dioxide. * 

Reactive ion etching is **anisotropic** (**different etching rate at different directions**) but HF etching is **isotropic** (**etched at the same rate in all directions**).

反应离子刻蚀（RIE）是**各向异性**的，刻蚀方向性强（垂直向下刻蚀）。
 氢氟酸（HF）刻蚀是**各向同性**的，刻蚀会向各个方向均匀扩散。

---

#### **Lift-off** 剥离

![image-20251124200734875](https://media.opennet.top/i/2025/11/25/6qj0n4-0.png)

> 图左侧是刻蚀法流程，右侧是 lift-off 流程

**Lift-off 是一种常用于金属薄膜图案化的模板刻蚀技术（stencilling technique）。**

首先，在硅基底上涂覆一层**光刻胶**，并通过**光刻**工艺对其进行图案化。
 随后，在整个表面沉积一层金属薄膜。

接着使用光刻胶去除液（photoresist remover）溶解光刻胶。
 当光刻胶被溶解时，**其上方的金属层也会一起被“抬走”（lift off）**，
 从而只在基底上保留下未被光刻胶覆盖的金属图案。

---

#### **Printing Methods for Polymers** 聚合物打印方法

![image-20251124201054084](https://media.opennet.top/i/2025/11/25/6sfkgd-0.png)

> (a) 丝网印刷示意图
> (b) 喷墨打印示意图
> (c) 纳米压印光刻（NIL）示意图

**• 喷墨打印（Ink-jet printing）：**

打印机包括：含墨盒、喷头，以及喷头位置控制系统。
 通常，体积为数皮升（pico-liters）的小液滴通过各种机理（如电驱动或热驱动）从喷头喷射出来，形成图案。

**• 丝网印刷（Screen printing）：**

油墨通过模板（screen）被压印到基底上。
 刮刀沿着表面移动并刮除多余的油墨，从而留下所需的图案。

**• 纳米压印光刻（Nano-Imprinting Lithography, NIL）：**

带有纳米级图案的模具（stamp）首先被制备（通常由硅、石英或金属制成）。
 基底上涂覆一层薄的聚合物薄膜（光刻胶/resist）。
 模具在受控压力下压入聚合物薄膜中，有时需要加热或紫外光。
 聚合物固化后，移除模具，纳米图案就被转移到基底上。

### Example*

**Organic Electrochemical Transistor**

​	有机电化学晶体管 – 离子检测传感器

Substrate 基片: Mylar (聚酯薄膜)。

Electrodes 电极: Au (via lift-off).

Channel 通道: PEDOT:PSS polymer (导电高分子)。

Process 工艺: Spin coating + photolithography + RIE.

Flexible ion sensor for biochemical detection.

一种柔性离子传感器，可用于生化检测。

> Micro/nano fabrication combines top-down & bottom-up methods.
>  Steps: spin coating, deposition, patterning, etching, lift-off, printing.
>
> 微纳制造综合了自上而下与自下而上的方法。
> 常见工艺包括：旋涂、薄膜沉积、图案化、刻蚀、剥离、打印。

## 4 Sensors

要求能画结构图、解释原理

### Conductometric

​	电导传感器

* **Principle:** Mechanical strain → dimension change → resistance change (ΔR).
    * 机械应变 → 尺寸变化 → 电阻变化

* **Circuit:** Measured by a Wheatstone bridge → output voltage $\propto$ applied stress.
    * 惠斯通电桥测量 → 输出电压 $\propto$ 施加的应力

* **Example:** Strain gauge (应变计).
* **Key idea:** Length ↑ + width ↓ → resistance ↑.
    * 金属条长度 ↑ + 宽度 ↓ → 电阻 ↑

![image-20251211111225321](https://media.opennet.top/i/2025/12/11/vmiuaz-0.png)


---

### Capacitive

​	电容式传感器

* **Structure:** Two electrodes (parallel plates or interdigitated comb fingers).
    * 两个电极（平行板 或 交叉梳齿）

* **Equation:** **C = ε A / d  (介电常数 × 面积 ÷ 距离).**
* **Features:** High sensitivity for small displacement/pressure; good stability.
    * 对小位移/压力具有高灵敏度；稳定性好

* **Linearization:** Geometry optimization improves linearity.
    * 线性化：几何优化提高了线性度

### [Mock 12]

Calculate the equivalent capacitance for the parallel-plate and interdigitated (IDT) electrodes capacitors presented in **Figure Q12**. The gap of both capacitors is filled with air with the permittivity of ε. For simplicity, we assume fringe capacitance is negligible when computing the IDT’s equivalent capacitance.

![image-20251206211144616](https://media.opennet.top/i/2025/12/07/8gixeb-0.png)

此题很多（多模态）大模型都答不对，在于识图方面的问题

（1）平行板电容器

由 $$C = \frac{\varepsilon A}{d}$$

其中面积 $$A = 20t \times t$$

距离 $$ d = t$$

则 $C = \varepsilon 4 t$

（2）叉指电容器

纵向两个相同电容区域，横向三个相同电容区域，电容相加
$$
\varepsilon \left[ 2\left(\frac{11t \cdot t}{5t}\right) + 3\left(\frac{4t \cdot t}{5t}\right) \right]
= \varepsilon \left[ \left(\frac{22}{5}\right)t + \left(\frac{12}{5}\right)t \right]
= \varepsilon \left(\frac{34}{5}\right)t
$$

------


---

### Piezoelectric ※

​	压电传感器

![image-20251208115947558](https://media.opennet.top/i/2025/12/08/wen4ts-0.png)

* **Effect:** **Mechanical stress → charge generation** (direct effect).
  Electric field → mechanical strain (converse effect).
  
  * 机械应力 → 产生电荷（正压电效应）
    电场 → 机械应变（逆压电效应）
  
* **Voltage relation:** $V = g t \sigma$ (g: voltage coefficient).

    * 压电效应公式：电压 = 电压系数 * 厚度 * 应力
    * **V**：在压电片两端产生的电压 (Volt)
    * **g**：压电电压系数 (Vm/N)
    * **t**：压电片的厚度 (m)
    * **σ**：应力 (N/m²)

* 力学与电场的耦合方程 eq3

    * **σ = cS - eE**

    * **σ**：应力 (N/m²)。

        **c**：弹性刚度常数。

        **S**：应变 (strain, 无量纲)。

        **e**：压电常数。

        **E**：电场强度 (V/m)。

    * 当压电材料受应力时，两端产生电压，电压与应力成正比，并与厚度相关

* 电场与应变耦合方程 eq4

    * **D = ε₀E + eS**

    * **D**：电通量

        **ε₀**：介电常数

        **S**：应变 (strain, 无量纲)。

        **e**：压电常数。

        **E**：电场强度 (V/m)。

    * 应力不仅与应变成正比（胡克定律部分），还会受到电场的影响（压电效应的反作用）

* 当 **E = 0** 时：
     Eq 3: $\sigma = cS$ （应力 = 刚度 * 应变），即 **胡克定律 Hooke’s law**。

     Eq 4: $D = eS$（电通 = 压电 * 应变），单纯应变也能产生极化，是 **直接压电效应 Direct piezoelectric effect**
    
* 当 **S = 0** 时：
  
    - Eq 3: $\sigma = -eE$（应力 = - 压电 * 电场），是 **反压电效应 converse piezoelectric effect**（电场导致应力）。
     - Eq 4: $D = \varepsilon_0 E$ （电通 = 介电 * 电场），是 **电介质关系式 dielectric relation**。
    
     当 **E = 0** 时：
    
* **Features:** Self-generating (no external power), only responds to dynamic signals.

    * 自发电（无需外部电源），仅对**动态**信号有响应

* **Applications:** Force, pressure, microphones, accelerometers etc.

    * 力、压力、麦克风、加速度计

* **Materials:** PZT, lead metaniobate, PVDF 等。

### [Quiz 2.2]

The relationship between the dipole moment and the mechanical deformation in a piezoelectric sensor is expressed by: **σ = cS − eE (Eq 1)** and **D = ε0E + eS (Eq 2)**, where σ: Stress, S: Strain, E: Electric field, D: Electric flux density, c: Elastic stiffness constant, e: Piezoelectric constant, ε0: permittivity of free space. Describe the dominant phenomena in both equations **when E = 0**.

**Answer**: When E = 0 in Eq 1, σ = cS defines the **Hooke’s law** presenting the relation between stress and strain. If E = 0 in Eq 2, D = eS defines the **direct piezoelectric effect** where strain alone can induce polarisation and electrical output.

>Stress 应力：物体内部由于外力作用而产生的 **内力强度**，是 **单位面积上的内力**，单位 Pascal (Pa) = N/m²
>
>Strain 应变：材料在受力后产生的变形程度，$\varepsilon = \frac{\Delta L}{L_0}$，长度变化的比例
>
>Elastic stiffness constant 弹性刚度常数：类似劲度系数。
>
>Hooke's Law: Stress 应力 = Strain 应变 * 比例系数
>
>Direct Piezoelectric Effect 直接压电效应：
>
>当在某一方向施加应力 $\sigma$ 时，压电材料会在相应方向上产生电位移/电通量密度/电荷密度 ： $ D = d \cdot \sigma $，电通量密度 = 压电常数 * 应力

---

### Magnetostrictive

​	磁致伸缩传感器

> 通过非接触的方式来测量一个活动磁铁的绝对位置
>
> 利用“应变脉冲的传播时间 $\propto$ 距离”来测量位移或位置

* **Principle:** 见 [Mock 11]
* **Pickup:** Coil or piezoceramic transducer.
    * **拾音器**：线圈或压电陶瓷换能器
* **Feature:** Electromechanical coupling modelled as a transformer.
    * 以变压器形式建模的机电耦合

![image-20251208124023137](https://media.opennet.top/i/2025/12/08/xqprjp-0.png)

![image-20251208124039468](https://media.opennet.top/i/2025/12/08/xqsxss-0.png)

![image-20251206174649267](https://media.opennet.top/i/2025/12/07/2f88rw-0.png)

### [Mock 11]

Q11: The input current pulse and time base waveforms are presented in Figure Q11.  Illustrate a magnetostrictive sensor that works based on the presented waveforms and  explain how this sensor can be used as a position sensor. (10 marks)

![image-20251206174541465](https://media.opennet.top/i/2025/12/07/2elp0x-0.png)

consists: a **magnetostrictive wire**, a **pickup circiut**, a **movable position magnet**.

构成：磁致伸缩线、拾取电路、可移动磁体

原理：电流脉冲->磁致伸缩线，产生磁场，与可移动磁体作用，产生应变脉冲。应变脉冲传播到拾取电路。可多次测量。

1. **The current pulse** is applied to one end of **magnetostrictive wire**. The **time base waveform** denotes the **rising edge (上升沿)**  of the **current pulse waveform**.
    1. 电流脉冲施加到磁致伸缩线的一端。时间基准波形表示电流脉冲波形的上升沿。
2. **circular** **magnetic field** is generated around the wire , and travels across the wire.
    1. 环形磁场在导线周围生成，并沿导线传播
3. It interact with **Magnetic field** from **moveable position magnet**
    1. 位置磁体产生的磁场 与 环形磁场 作用
4. produces a **strain pulse.**
    1. 产生应变脉冲（机械波）
5. Travel time of the **strain pulse** to the **pick-up circuit** is **proportional** to the distance the pulse travels. It defines the **position of the movable magnet**.
    1. 应变脉冲到拾取电路的传播时间 与其距离成**比例**。它决定了可移动磁体的位置
6. The **travel time** can be measured multiple times for accurate prediction of the movable magnet position.
    1. 传播时间可被多次测量，精确预测可移动磁体的位置。

### [Quiz 2.5]

**Identify the sensor that doesn't use changes of resistance for measuring the input stimuli.** 

- Piezoresistive sensors
- Thermistors
- **Magnetostrictive sensors**
- Conductometric sensors

> **Piezoresistive sensors** → 通过机械应变引起电阻变化来工作。
>
> **Thermistors** → 温度敏感电阻，依赖温度引起的电阻变化。
>
> **Magnetostrictive sensors** → 利用磁致伸缩效应（磁场 ↔ 材料形变 ↔ 应力/应变），主要检测机械波/振动，而不是电阻变化。
>
> **Conductometric sensors** → 检测气体或溶液的电导率变化，本质上也是电阻变化。


---

### Piezoresistive

​	压阻传感器

![image-20251208124901263](https://media.opennet.top/i/2025/12/08/xvxhh6-0.png)

* **Effect:** Mechanical strain → resistance change.
    * 机械应变 → 电阻变化

* **Example:** Silicon diaphragm with four resistors in **Wheatstone bridge** → temperature compensation.
    * 惠斯通电桥中带有四个电阻的硅膜片 → 温度补偿

* **Equation:** ΔR/R = (1 + 2ν) Δl/l + Δρ/ρ (Eq 5).
* **Materials:** Metals (Pt), Si, PEDOT:PSS, CNT composites, SnO₂ etc.

### [Quiz 3.3]

**3 Identify the parameter in the piezoresistors that will be changed by applying a perpendicular force to the silicon diaphragm in the Figure. **

<img src="https://media.opennet.top/i/2025/11/06/3f9e8g-0.png" alt="image-20251105180700928" style="zoom: 50%;" />

- Capacitance of the piezoresistors
- **Length of the piezoresistors**
- Poison ratio of the piezoresistors
- None of the above statements is correct.

> 压阻效应（Piezoresistive effect）的本质是：
> **应力 → 引起压阻条的形状（长度/截面积）和电阻率变化 → 导致电阻变化。**
>
> 在图中，硅膜片受压会弯曲，放置在应力集中区的压阻条 **会随之被拉伸或压缩**，因此选：
>
> **Length of the piezoresistors（压阻条的长度）**

---

### Optical

​	光学传感器

![image-20251208125005482](https://media.opennet.top/i/2025/12/08/xwk0mm-0.png)

* **Types:** **Intensity-based** (measure light loss/absorption/scattering) and **interferometric**.
    * 基于强度（测量光损耗/吸收/散射）和干涉测量

* **Example:** **Photodiode** (PIN, avalanche).
    * 光电二极管

* **Interferometer:** Uses **Doppler**, Sagnac, or magneto-optic effects; fiber mirror distance → intensity modulation.
    * 干涉仪

![image-20251208130450530](https://media.opennet.top/i/2025/12/08/ysz9tb-0.png)

* **Applications:** Displacement, vibration, magnetic field measurement.
    * 位移、振动、磁场测量


---

### Resonant

​	共振传感器

- consists: frame, thin **diaphragm**, micro **beam**, **driving electrode**

由一个框架、一个**薄膜**和一根悬于腔体上 方的双端夹持**微梁**组成，腔体底部在梁下方设有一个驱动电极。

- applying an **AC signal** to the **driving electrode**, then **beam vibrates**
- vibration sensed by [piezoresistors](#Piezoresistive) 
- **signal** output is sent to a circuit, then fed back to the **driving electrode** to maintain a **close-loop oscillation**

通过向驱动电极施加交流信号使微梁振动。微梁的振动可由压阻传感器检测。信号输出被送入由放大器、检波器、自动增益控制等组成的电路，然后反馈到驱动电极，以在谐振频率下 维持幅值恒定的闭环振荡。

![image-20251208181723783](https://media.opennet.top/i/2025/12/09/3lch9p-0.png)

* **Principle:** Applied strain → resonant frequency change (f).
    * 施加的应变 → 谐振频率变化 (f)
* **Relation:** Pressure p ∝ resonant frequency f.
    * 压力 p ∝ 谐振频率 f
* **Features:** High precision, closed-loop oscillation for stability.
    * 高精度，闭环振荡，稳定性好


---

### Transistor-based

​	晶体管式传感器

* **Device:** Movable-gate FET (MOSFET variant).
    * 可动栅极场效应晶体管（MOSFET 变体）
* **Mechanism:** 见 [Quiz 3.6]
* **Note:** Constant threshold voltage by keeping gap fixed; air gap dominates capacitance for thin insulators.
    * 通过保持间隙不变来实现恒定阈值电压；对于薄绝缘体，气隙决定电容

### [Quiz 3.6]

6 A **movable-gate field effect transistor** is fabricated, where the **suspended gate** is moving laterally above the **channel**. Explain how this structure can be used as a **displacement** **sensor**.

- by **lateral movement** of the **suspended gate** over the **channel**
- the **width of the channel** (W) **covered** by the **suspended gate** is **changing**
- result in changes in the **current of the transistor**: $I_D \propto W$


 悬浮栅在横向移动时会改变其覆盖的沟道宽度 $W$。由于漏极电流与 $W$ 成正比 $(I_D \propto W)$，因此通过测量漏极电流的变化即可实现栅极位移的检测。


---

### Acoustic

​	声学传感器

consists:

- piezoelectric wafer, IDT, reflectors
- IDTs are used for exciting and detecting the SAW

SAW表面声波器件由压电晶片、互指电极(IDTs)和边缘的反射器组成。IDTs 用于激励以及检测声表面波

- a harmonic **voltage** is applied to the **electrodes**
- **stress** induced by a **finger pair** **travels** **along** the surface of the **crystal** in both directions
- To ensure constructive interference and in-phase stress
-  the **distance** between two neighbouring fingers should be **equal to half the elastic wavelength, $\lambda_R$.**

如果在电极上施加一个谐波电压 $v = v_0 \exp(j\omega t)$，由一对叉指产生的应力会沿晶体表面向两个方向传播。为了确保相长干涉和应力同相，相邻两根叉指之间的距离应等于弹性波长的一半，即 $\lambda_R$ 的一半。

* **Principle:** Convert electrical energy ↔ acoustic waves (SAW devices).
    * 将电能转换为声波（SAW 器件）
* **Condition:** Finger spacing = ½ elastic wavelength $λ_R$.
    * 指间距 = ½ 弹性波长 $λ_R$
* **Applications:** Gas, vapor, strain, chemical detection.
    * 气体、蒸汽、应变、化学检测

### [Quiz 2.1]

**Select the correct statement for the shown Surface Acoustic Wave (SAW) sensor**

![image-20251022195553810](https://media.opennet.top/i/2025/10/23/485gk9-0.png)

- The patterned metal interdigitated (IDT) electrodes are prepared using
    chemical vapour deposition.
- The substrate has magnetostriction property.
- **The distance between two neighbouring fingers of the IDT is equal to half of the elastic wavelength.**
- This sensor only works based on the conversion of electrical energy to
    mechanical energy.


---

### Temperature

​	温度传感器

* **Contact types:**
  * Thermocouples (TC): Seebeck effect.
      * 热电偶 (TC)：塞贝克效应（由两种不同金属在一端连接 → 产生与温度成比例的电压）
  * RTDs (e.g., Pt100): metal resistance ↑ with T.
      * 热电阻（例如 Pt100）：金属电阻随温度升高而升高。
  * Thermistors (半导体): NTC ↓, PTC ↑.
      * 热敏电阻（半导体）：NTC ↓，PTC ↑。
* **Non-contact:** Infrared thermopiles / pyrometers → detect IR radiation to estimate temperature.
    * **非接触式**：红外热电堆/高温计 → 通过检测红外辐射来估算温度。


---

### Polymer

​	高分子（聚合物）传感器

* **Categories:** Piezoelectric (e.g. PVDF, P(VDF-TrFE)) & Piezoresistive (PDMS-Ag composites).
    * 压电和压阻

* **Advantages:** Low cost, flexible, lightweight, broadband, disposable.
    * 低成本、灵活、轻便、宽带、一次性

* **PVDF:** Half crystalline → polarizable when stretched at high T; amorphous regions polarized by E-field.
    * 半结晶 → 在高温下拉伸时可极化；非晶区通过电场极化


---

### Key Parameters ※

关键性能指标

| Parameter         | 中文释义 | Description                                       |
| ----------------- | -------- | ------------------------------------------------- |
| Sensitivity       | 灵敏度   | Output change / Input change                      |
| Resolution        | 分辨率   | Smallest detectable input change                  |
| Range             | 量程     | Usable input span                                 |
| Accuracy          | 准确度   | Deviation from true value                         |
| Calibration error | 校准误差 | Factory allowed error                             |
| Hysteresis        | 滞后     | Output diff. approaching from opposite directions |
| Linearity         | 线性度   | Deviation from ideal straight line                |
| Saturation        | 饱和     | Output cannot increase further                    |
| Repeatability     | 重复性   | Max difference between cycles                     |
| Dead band         | 死区     | Input range with no response                      |
| Stability         | 稳定性   | Long-term performance consistency                 |
| Response time     | 响应时间 | Time to reach 63 % / 90 % of final output         |
| Bandwidth         | 频带宽度 | Frequency range of accurate response              |
| Lifetime          | 寿命     | Duration before degradation                       |
| Selectivity       | 选择性   | Response only to target signal                    |
| Power consumption | 功耗     | Important for portable devices                    |
| SNR               | 信噪比   | Useful signal vs noise                            |

<img src="https://media.opennet.top/i/2025/10/23/7lh2aj-0.png" alt="image-20251022215932716" style="zoom:50%;" />

> 校准误差: 理论理想值和工厂校准输出之间的差别
>
> 校准误差 = 真实线（real line）和校准线（calibrated line）的最大差距

<img src="https://media.opennet.top/i/2025/10/23/7lj87j-0.png" alt="image-20251022215942698" style="zoom:50%;" />

> 迟滞: 当输入信号从一个方向增加，再从相反方向减小时，传感器在相同输入点给出的输出值不同

![image-20251022220008140](https://media.opennet.top/i/2025/10/23/89qqym-0.png)

> Linearity（线性度）: 衡量传感器输出和输入之间关系接近直线程度。
>
> Saturation（饱和）：当输入信号过大时，传感器无法再按照比例输出，而是“顶到头”不再增长。
>
> Repeatability（重复性）：同一个输入条件下，多次测试时输出结果的最大差异。
>
> Dead band（死区/盲区）：在某个输入范围内，传感器对输入信号变化完全没有响应。

### [Quiz 2.3]

**Select the correct key sensor parameter that is defined by the shown figure.** 

<img src="https://media.opennet.top/i/2025/10/23/7k7fwj-0.png" alt="fdc2e695-43eb-448b-ace1-2e3ccd0b6d7b" style="zoom: 50%;" />

- Repeatability error
- **Hysteresis**
- Calibration error
- Dead band

### Noise

传感器与电路噪声

**Inherent Noise** 固有噪声

* **Thermal** (Johnson–Nyquist) 噪声：热运动。
* Shot noise：电流跨结。
* 1/f (Flicker) 噪声：载流子俘获/释放。
* Generation–recombination noise：半导体载流子产生/复合。
* **Circuit noise**：放大器、ADC、基准电路噪声。

**Interference Noise** 外部干扰噪声

* Electromagnetic Interference (**EMI**) 电磁干扰。
* **Mechanical vibration** 机械振动。
* Temperature fluctuations 温度波动。
* Quantization noise 量化噪声。

## 5 Actuators

### Electrostatic ※

静电执行器

- **Principle**: Based on capacitor structure. One plate is movable and displacement occurs under applied bias voltage → converts electrical energy to mechanical energy.
    - 基于电容器结构。其中一块极板可移动，在施加偏压下发生位移→将电能转换为机械能。
    
    - 官方答案：
    
        - applying AC  V₁ and V₂ to fixed plates
    
        - applying DC V₀ to movable comb
    
        - movable comb move and resonate laterally due to alternating electrostatic force.
    
    
        对两侧固定板施加交流电V1, V2，对可移动梳齿施加直流电V0。由于交交变静电力，可移动梳齿会横向移动并震动。
    
- **Energy Components**:
    - *Electrostatic energy (We)* + *Mechanical energy (Wm)* = Total system energy (Wf).
        - *静电能 (We)* + *机械能 (Wm)* = 系统总能量 (Wf)。
    - Derived equations link **force, displacement, voltage, and charge**.
        - 导出的方程将**力、位移、电压和电荷**联系起来。
    
- **Comb Drive Actuators** **梳状驱动执行器**
    - Equivalent circuit includes: 等效电路
        - 等效原理：电功率 $V \cdot I$ = 机械功率 $F \cdot v$。
        - **$C_{01}, C_{02}$：input & output**
        - **电感 Inductor（$L_m$）**：**质量**（mass）。
        - **电容 capacitor（$C_k=1/k$）**：**刚度**（stiffness）。
        - **电阻 Resistor（$R_m=b$）**：**阻尼**（damping）。
        - **变压器 Transformer（比值  $\Gamma$）**：**电-机械能相互转换**，。
    - Electromechanical coupling coefficient Γ = V (dC/dx).
        - 机电耦合系数Γ=V（dC/dx）。

![image-20251025133526215](https://media.opennet.top/i/2025/10/25/xnrahy-0.png)

**Applications**: Accelerometers 加速度计

### [Quiz 3.1]

**1 Explain the working principle of a comb-type electrostatic actuator by drawing a simple schematic for it. Describe the role of each highlighted element in its equivalent circuit that is shown in the Figure.**

![image-20251105172312502](https://media.opennet.top/i/2025/11/06/21bj24-0.png)

Answer: 

![image-20251105172344309](https://media.opennet.top/i/2025/11/06/21i42j-0.png)

By applying two V_ac voltages of V₁ and V₂ to the fixed plates and biasing the movable comb at a dc voltage of V₀, the movable comb will move and resonate laterally due to an alternating electrostatic force.

原理如上图，对两侧固定板施加交流电V1, V2，对可移动梳齿施加直流电V0。由于交变静电力，可移动梳齿会横向移动并共振。

The equivalent circuit for this actuator includes **transformers** that represent conversion of electrical to mechanical energy and vice versa, **electrical capacitances (C₀₁, C₀₂)** at input and output, **a capacitor** representing the total stiffness of two parallel folded beam spring (with a total stiffness of k), **an inductor** representing the mass, and **a resistance** representing the viscous damping.

等效电路：

Transformer: electrical <=>  mechanical energy

**electrical capacitances (C₀₁, C₀₂)**: input and output

C=1/k: stiffness of  two folded beam spring 两折叠梁的弹簧刚度

inductor: mass 电感器: 质量

resistance:  viscous damping 粘性阻尼

### Electromagnetic

电磁执行器（电生磁）

- **Structure**: Coil inductor (N turns) wound on core/yoke. Current (i) generates magnetic flux (Φ) across air gap → force attracts movable plate.
    - 线圈电感器（N 匝）绕制在磁芯/磁轭上。电流 (i) 产生 穿过气隙的 磁通量 (Φ) → 磁力吸引动片
- **Materials**: Armature and moving part = ferromagnetic materials.
    - 电枢和动片 = 铁磁材料
- **Magnetic Circuit**: Low-reluctance path ensures efficient flux transfer.
    - **磁路**：低磁阻路径确保高效的磁通传输
- **Energy Relation**: Stored magnetic energy WM = ½ L(x) i².
    - 储存的磁能 WM = ½ L(x) i²
- **Variables**:
    - i = coil current 线圈电流
    - μ = permeability of yoke 磁轭磁导率
    - Ae = effective plate area 有效动片面积
    - Ψ = electromechanical coupling constant 机电耦合常数
- **Equivalent Circuit**: Includes gyrator, transformer, shunt capacitor, and spring stiffness (k* = k - Ψ²/L0). 
    - 回转器（电压->电流）、变压器（电<->机械）、并联电容器和弹簧刚度 (k* = k - Ψ²/L0)
    - **gyrator : convert Voltage to Current**
    - **capacitor: inductance（电感）$L_0$**
    - **Capacitor（右上角）: model the mechinical part（教师原句）**
    - **Transformer: conversion of electrical and mechinal** energy
    - impedance: stiffness （图中未提及）

![image-20251210212854582](https://media.opennet.top/i/2025/12/11/8qp1v3-0.png)

<img src="https://media.opennet.top/i/2025/10/25/z2fljk-0.png" alt="IMG_1653" style="zoom: 67%;" />

- **Stability**: A spring element maintains equilibrium of moving plate.
    - 弹簧元件维持动片的平衡

**Applications**: Motors, relays, actuators in robotics.

​	机器人中的电机、继电器、执行器

### Electrodynamic

​	电动执行器

- **Principle**: 见 [Quiz 3.4]

- **Key Equations**: Laplace’s Law for force on a conductor in magnetic field.

    - 拉普拉斯定律适用于磁场中导体的力。

    - > 在电磁学中，**拉普拉斯定律**（Laplace’s Law）说明了 **载流导体在磁场中受到的力**，公式为
        > $$
        > dF = i \, (dl \times B)
        > $$

- **Equivalent Circuit**: Includes inductance (L0), gyrator, and impedance components.

    - 包含电感 (L0)、回转器和阻抗元件
        - **gyrator: convert voltage to current(有 coil 就有 gyrator)**
        - **Impedance 阻抗: coil's inductance 电感**
        - **Capacitor(in the output): model the mechanical part**
        - ![image-20251210212823704](https://media.opennet.top/i/2025/12/11/8qiv4a-0.png)

- **Transduction Factor (Ψ)**: Represents electromechanical conversion efficiency.

    - **转换因子 (Ψ)**：表示机电转换效率。

**Applications**: Loudspeakers, vibration systems.

​	扬声器、振动系统。

### [Quiz 3.4]

4 An **electrodynamic** **actuator** is designed by placing an N-turn coil(线圈) on a rotational pole inside the magnetic field of a permanent magnet. Write down the **equation** for the **applied force** onto the **coil** and describe the reason for the **pole rotation**. 

Equation: **Laplace’s force law**: $dF_{mag} = idl \times$B

Reason for the pole rotation: The permanent magnet create radial induction B across the air-gap. A light coil (N turns) sits in that gap on a rotational pole. When current i passes through the coil, each active conductor segment with length dl in the gap experiences a Lorentz force. The two opposite sides of the coil feel equal and opposite forces, producing a torque that results in the pole rotation

简化版：

- **Permanent magnet** create induction **B**. 
- **Coil** sits on a **rotational pole.** 
- **Current** i **passes** through the **coil**.  
- each **conductor segment**  **dl** experiences a **Lorentz force**. 
- Two sides of the coil feel equal and opposite forces -> rotation

电流通过线圈 → 导线在磁场中受力 → 对称力形成力矩 → 线圈带动转轴旋转

### Piezoelectric

压电执行器

* **Poling Process**: 

    * Applied **E** to the material during cooling process
    * Domains are aligned in the direction of **E**
    * After that, when external **E** is applied, material produced **strain**
    * **极化工艺**：在制备过程中对材料施加电场（极化），这些畴会沿电场方向取向。对极化后的材料施加外部电场时，材料内部会产生应变

* **Working Principle**: External electric field → induces strain (converse piezoelectric effect).

    * 外部电场→诱导应变（逆压电效应）。
    * > **Direct piezoelectric effect（正压电效应）**：施加 **机械应力** → 材料内部偶极矩重新取向 → 产生  电荷。
        >
        > **Converse piezoelectric effect（逆压电效应）**：施加 **电场** → 晶格畸变（偶极矩方向改变） → 材料产生 **机械应变**。

* **Modes of Vibration**: **记忆：length最大，length振动；thickness最小，thickness振动**

  * **If length ≫ width, thickness → length direction vibration.**
      * **长度≫宽度，厚度→长度方向振动。**
  * **If length and width ≫ thickness → thickness direction vibration.**
      * **长度和宽度≫厚度→厚度方向振动**

![image-20251025143400156](https://media.opennet.top/i/2025/10/25/zaj5hf-0.png)

* **Equivalent Circuit**: Includes static capacitance (C0), transfer factor (Γ), and spring constant (k).
    * 包含静态电容 (C0)、传递因子 (Γ) 和弹簧常数 (k)
    * Transformer: convert electrical to mechanical
    * Capacitor C0: capacitance of the structure
    * Capacitor(in the output): mechanical stiffness 

**Applications**: Precision positioning, ultrasonic actuators. 精密定位、超声波执行器。

### [Mock 7]

Q7: The actuator consists of a slab of piezoelectric material with length (l), width (b), and thickness (h). An AC electric field is applied across the thickness of the slab. Identify the correct statement for the resonating behaviour of the slab: (2 marks)

**A. If (l and b) ≫ h, the slab will vibrate in the thickness direction.**

B. If (l and b) ≫ h, the slab will vibrate along the length direction.

C. If l ≫ (b and h), the slab will vibrate along the thickness direction.

D. None of the above statements is correct.

### Electrostrictive

​	电致伸缩执行器

* **Principle**: 见 [mock 14]
* **Comparison with Piezoelectricity**:
  * Piezoelectric: **Linear** strain-field relation.
      * 压电效应：应变场与电场呈**线性**关系。
  * Electrostrictive: **Quadratic** relation.
      * 电致伸缩效应：应变场与电场呈**二次**关系。
* **Equivalent Circuit**: 见 [Mock 14]

### [Mock 14]

![image-20251206221408877](https://media.opennet.top/i/2025/12/07/a5mwe9-0.png)

(a) Explain the operation of an electrostrictive actuator shown in **Figure Q14(a)** when an electric field, **E**, is applied to its electrodes.
 (5 marks)

- applied E **polarize**  **electrostrictive material**
-  ions shift away  from  natural  positions
- generates **strain**
- Both **E>0** and **E<0** expand thickness of electrostrictive layer

​	电场 E 极化电致伸缩材料，离子（ions）偏离，造成应变（strain）。E>0 或 E<0都会延长电致伸缩层的厚度

---

(b) The equivalent electrical circuit for the electrostrictive actuator is shown in **Figure Q14(b)** where **N** is the transduction factor. Explain the role of the transformer and components **C₁**, **Cₘ**, **Rₘ** and **Lₘ**.
 (15 marks)

- **transformer**: **conversion** of **electrical to mechanical** energy.
- $C_1$ : **static capacitance** formed between two electrodes.
- $C_M$: **motional capacitance (Representing stiffness 刚度),**
- $R_M$: **motional resistance (Representing damping 阻尼)**,
- $L_M$: **motional inductance (Representing Effective mass 有效质量)**.

---

(c) Describe the **benefit** of the **electrostrictive** actuator compared to a **piezoelectric** actuator with the same dimensions and under the same applied **E**.
 (5 marks)

For the same applied $E$, the generated **displacement** in a piezoelectric actuator is **proportional** to $E$, while for the electrostrictive actuator, is **proportional** to $E^2$.

### [Quiz 3.5]

5 Write down two **differences** between **electrostriction** and **piezoelectricity** phenomenon in electrostrictive and piezoelectric actuators. *

The piezoelectric material has a spontaneous polarization Ps due to the asymmetric crystal structure. Under the action of a polarization electric field Epol, Ps reorientates toward the Epol. After the polarization electric field is removed, the material still retains a polarization Pr . Under the excitation of an external AC electric field, the material will extend and contract alternately, yielding positive and negative strains.

The polarization in electrostrictive materials is field induced. Electrostriction is a measure of the polarization induced by ions shifting away from their natural equilibrium positions. In centrosymmetric crystals, the induced shifts of equivalent ions almost cancel each other out, while the difference in the shifts because of applied field generates strain (i.e., the extension of the lattice)

The relationship between the force produced and applied field is linear in piezoelectrics, it is quadratic in electrostrictive materials.

简化版：

Piezoelectric materials have **spontaneous polarization** due to **non-centrosymmetric crystal structures**.

 Electrostrictive materials have **no spontaneous polarization**; their polarization is **induced by the electric field**.

压电材料因为**晶体结构不对称**，本身具有**自发极化（制备的时候外加电场极化）**。

电致伸缩材料**没有自发极化**，其极化是**由外加电场诱导产生**的。

In piezoelectric materials, the **strain is linear** with the electric field.

In electrostrictive materials, the **strain is quadratic** with the electric field.

**压电效应**中，应变与电场**成线性关系**。

**电致伸缩效应**中，应变与电场**成二次关系**（平方关系）。

### Magnetostrictive

磁致伸缩执行器

* **Principle**: Strain generated by applied magnetic field. 施加磁场产生的应变。
    * consists of E-shaped **core** of iron, **coil**, iron **fixtures**
    * **coil** is **wound** on the **core**
    * **current** flowing in the **coil**
    * a **close magnetic loop** is constructed
    * Both **positive** and **negative** **magnetizations** cause **positive** **magnetostriction**
    * produces elongation in the **longitudinal** direction
    * 由 E 形磁芯、线圈和铁夹具组成。线圈缠绕在磁芯上。线圈通电时，磁芯与夹具在闭合磁路中形成回路。正向和反向磁化都会引起正向磁致伸缩，产生伸长。
    * ![image-20251210221657752](https://media.opennet.top/i/2025/12/11/a7cli0-0.png)


* **Equivalent Circuit**:
  * gyrator: covert current to voltage
  * L0: input impedance
  * Capacitor: model the structure
  * Coil inductance (L0). 线圈电感 (L0)。
  * 

![image-20251025144748704](https://media.opennet.top/i/2025/10/25/zikffu-0.png)

**Applications**: High-force actuators, vibration control.

### Electrothermal

​	电热执行器

* **Principle**: current flowing -> Joule heating → thermal expansion → displacement. 
  
    * 电流 -> 焦耳加热 → 热膨胀 → 位移。
    
* **Types**:

  1. **Bimorph actuators**: Two materials with different CTE expand differently → bending displacement.
      1. **双压电晶片执行器**：两种热膨胀系数不同的材料以不同的方式膨胀 → 弯曲位移。
  2. **Chevron (V-shape) actuators**: Geometry-driven displacement; symmetric heating produces linear motion.
      1. **V 形执行器**：几何驱动位移；对称加热产生线性运动。
  3. **Hot-arm/Cold-arm actuators**: Different resistances → rotation towards cold arm.
      1. **热臂/冷臂执行器**：不同的电阻 → 朝向冷臂旋转。
  
  ![image-20251210223726104](https://media.opennet.top/i/2025/12/11/ajfjsd-0.png)

**Applications**: MEMS actuators, microgrippers. MEMS 执行器、微夹钳。

### Key Parameters

> 热 最慢 能量密度最高 形变高
>
> 静电 高效
>
> 电磁 形变高
>
> 压电 高效 快
>
> 磁致伸缩 快
>
> 电致伸缩 高效

![image-20251105175814486](https://media.opennet.top/i/2025/11/06/2m6gzj-0.png)

> Fractional stroke = 位移占最大行程的比例，用来衡量致动器运动是否在线性、安全的工作范围内。

* **Electrostatic**: Preferred for micro devices (simple, but sensitive to environment).
    * **静电**：适用于微型器件（简单，但对环境敏感）。
* **Electromagnetic/Electrodynamic**: Lorentz force-based, good for high current/low voltage; issues with power dissipation.
    * **电磁/电动力**：基于洛伦兹力，适用于高电流/低电压；存在功耗问题。
* **Piezoelectric/Electrostrictive/Magnetostrictive**: Material strain-based.
  * **压电/电致伸缩/磁致伸缩**：基于材料应变。
  * Max strain: Electrostrictive 最大应变：电致伸缩
  * Max force: Magnetostrictive 最大力：磁致伸缩
  * Linearity: Piezoelectric (linear), Electrostrictive (quadratic). 线性度：压电（线性），电致伸缩（二次）。
* **Performance Metrics**: Stroke, linearity, energy density, efficiency, speed.
    * **性能指标**：行程、线性、能量密度、效率、速度。
* **Non-linearity**: Often present → mitigated by operating around DC bias with small-signal variations.
    * **非线性**：通常存在 → 通过在直流偏置下进行小信号变化操作来缓解。

### [Quiz 3.2]

2 **Select the correct actuator for the presented key parameter.**

Electrostatic actuator: High  efficiency

Thermal actuator: Minimal  speed

Piezoelectric actuator: Low fractional  stroke

![image-20251105175814486](https://media.opennet.top/i/2025/11/06/2m6gzj-0.png)

> Fractional stroke = 位移占最大行程的比例，用来衡量致动器运动是否在线性、安全的工作范围内。

### **Summary**

* **Actuation mechanisms**:

  * Electrostatic: Voltage → displacement.
  * Electromagnetic: Current → magnetic field → motion.
  * Electrodynamic: Lorentz force.
  * Piezoelectric: Voltage → strain.
  * Electrostrictive: Similar, quadratic relation.
  * Magnetostrictive: Magnetic field → elongation.
  * Electrothermal: Heating → expansion.
* Each actuator type has unique trade-offs in strain, force, energy efficiency, and environmental tolerance.

* **驱动机制**：

* 静电驱动：电压 → 位移。
* 电磁驱动：电流 → 磁场 → 运动。
* 电动力驱动：洛伦兹力。
* 压电驱动：电压 → 应变。
* 电致伸缩驱动：类似的二次关系。
* 磁致伸缩驱动：磁场 → 伸长。
* 电热驱动：加热 → 膨胀。
* 每种类型的执行器在应变、力、能量效率和环境耐受性方面都有独特的权衡。

## 7 Packaging

### Sensor Packaging

* allow exposure to environment 允许暴露在环境中
* need protective coatings  保护涂层（防污、疏水、生物相容）
  
* hybrid integration with semiconductor devices, microfluidics, electrodes, optical paths
  * 混合集成（半导体器件、微流体、电极、光路）

* withstand external stresses 承受外部应力
* Afect performance( long-term drift and stability) 影响长期漂移和稳定性
* the design should be developed in parallel with the sensor itself
  * 封装设计与传感器同步进行，因为其成本可能是传感器的许多倍

### Standard  IC Packages

标准集成电路(Integrated Circuits)封装

Key considerations: reliability (affected by packaging stresses and moisture ingress), heat flow, ease and cost of manufacture, and electrical characteristics (lead resistance, capacitance, and inductance)

关键因素：可靠性（受封装应力和湿气进入的影响）、热流、制造难度和成本，电气特性（引线电阻、电容和电感）

- Ceramic package: expensive; better electrical, thermal, and mechanical properties
    - 陶瓷封装：贵；电、热、机械性能好
- Plastic package: reduce cost
    - 塑料封装：便宜
- Metal package: Hermetic seals (resistive to moisture)
    - 金属封装：气密（防潮）

### Hierarchy of Packaging

电子封装的层级结构

![image-20251106115544669](https://media.opennet.top/i/2025/11/06/wc8dyr-0.png)

1. **Zero-Level Packaging** 零级封装
    - silicon wafer -> **bare dies**.
    - 硅片 -> 裸芯片
2. **First-Level Packaging**
    - Die **glued** onto a **chip carrier**. 裸片**粘接**到**芯片载体**上
    - **Wire bonding** 金丝键合
    - encapsulated using **epoxy molding** 环氧树脂封装
3. **Second-Level Packaging**
    - The packaged IC is soldered onto a **PCB**. 芯片焊接到PCB
    - 两种方式:
        - **Through-hole mount**: 通孔插装
        - **Surface mount**: 表面贴装
        - ![image-20251106115630869](https://media.opennet.top/i/2025/11/06/wcqom6-0.png)
4. **Third-Level Packaging**
    - Multiple PCBs are assembled onto a **motherboard**
    - 多个 PCB 装到更大的母板

### First Level Packages Over a Decade

**1970s**

- **DIP**（Dual In-line Package）双列直插封装

**1980s**

- **SOP**（Small Outline Package）小外形封装
- **QFP**（Quad Flat Package）四边扁平封装
     → **Surface mount（表面贴装）**
     → **For narrower pin pitch（用于更小的引脚间距）**
- **LCC**（Leadless Chip Carrier）无引脚芯片载体

**1990s**

- **PGA**（Pin Grid Array）针栅阵列封装
- **BGA**（Ball Grid Array）球栅阵列封装
     → **Increased number of pin（引脚数量增加）**

**2000s**

- **CSP**（Chip-scale Package）芯片级封装
- **QFN**（Quad Flat No-leads Package）无引脚四边扁平封装
- **SIP**（System in Package）系统级封装

**2010s**

- **Several devices (dies)/packages in a package（多个芯片/封装集成在一起）**
- **WLP**（Wafer Level Package）晶圆级封装
  
- **2.5D Package**
  
- **3D Package**

### SoC & SiP

**Future Concept of the Advanced Electronic Package**

System-on-Chip (SoC): Long design times, integration complexities, high costs

​	SoC集成复杂，设计周期长；晶圆制造成本高、测试成本高；混合信号处理复杂

在 **系统级封装（System-in-package, SIP）** 中, 需要**深反应离子刻蚀（Deep RIE, DRIE）** 制作垂直通孔（vias）

![image-20251106121153663](https://media.opennet.top/i/2025/11/06/x9mg5g-0.png)

### [Mock 8]

Q8: Identify the correct statement: (2 marks)

A. System-on-chip packaging makes the fabrication process less complicated.

**B. System-in-package is achievable by etching vertical vias through the thickness of each wafer.**

C. Flip-chip bonding is suitable for dual-in-line packages.

> **Flip-chip bonding (倒装芯片键合)** 是使用焊料凸点直接连接芯片和基板，常用于 BGA、CSP 等高性能、高密度的封装。
>
> **Dual-in-Line Packages (DIP / 双列直插式封装)** 是一种较老式的、低密度的封装，通常使用传统的**引线键合（Wire Bonding）**进行连接。

D. None of the above statements is correct.

### Integration of MEMS with CMOS Transistors

MEMS 与 CMOS 晶体管的集成

> MEMS: Micro-Electro-Mechanical Systems, 微机电系统
>
> 把**微型机械结构和微型电子器件**集成在**同一芯片**
>
> CMOS: Complementary Metal-Oxide-Semiconductor, 互补金属氧化物半导体
>
> 用于制造**集成电路中晶体管**

1. **CMOS first（先做 CMOS）：**
     Transistors are fabricated first using conventional processes, then polysilicon microstructures are built on top after passivating with SiN and a PSG sacrificial layer.

    晶体管首先通过常规工艺制造，然后在其上方沉积氮化硅（SiN）和磷硅酸盐玻璃（PSG）牺牲层，再在顶层制作多晶硅微结构。

2. **MEMS first（先做 MEMS）：**

    MEMS structures are fabricated first in trenches filled with SiN and sacrificial oxide. A polysilicon layer connects MEMS to CMOS. Transistors are fabricated afterward, and the sacrificial oxide is removed.

    MEMS 结构首先在硅片上制造，在沟槽中填充 SiN 和牺牲氧化层。然后沉积一层多晶硅连接 MEMS 和晶体管。晶体管随后被制造，最后去除覆盖 MEMS 结构的牺牲氧化层。

3. **Intermediate process（中间工艺）：**

    The simplest integrated method where existing transistor fabrication layers are reused for MEMS mechanical structures, with only a few additional masking and etching steps.

    最简单的集成 MEMS 方式，使用现有用于制造晶体管的层，同时只需增加少量的掩膜和刻蚀步骤即可形成 MEMS 的机械结构部分。

### Packaging of MEMS Sensors

**晶圆级封装（Wafer level capping）：**

Challenge: On-chip electrical interconnects must not compromise the hermetic seal.
 Vertical vias can help in forming through-wafer interconnects.

挑战在于：从封盖区域通过芯片上的电连接到接触焊盘时必须保持封盖的气密性。
 垂直通孔（vertical vias）可以帮助实现晶圆贯穿互连。

**二级封装（Second order package）：**

The MEMS die is placed inside another package so the sensor is exposed to the stimulus (here: pressure).

 MEMS 裸片被放置于另一个封装之中，使传感器能够暴露在外界刺激（此处为压力）之下。

**机械解耦（Mechanical decoupling）：**

Stress-relieving flexible regions may be incorporated to isolate sensor mechanically from package.

 通过加入释放应力的柔性结构区域，使传感器与封装之间实现机械隔离。

## 8 Power Sources

### What is a Battery

A **battery** converts **chemical energy into electrical energy** and vice versa.

It **consists** of one or more **cells(电芯)**, each with:

- **Cathode (positive electrode)** 正极
- **Anode (negative electrode)** 负极
- **Electrolyte(电解质)** allowing ion flow.

When connected to a load:
 ➢ Electrons flow from **anode to cathode** through the external circuit, providing power.

**电池类型：**

- **Primary (Non-rechargeable)**: Alkaline 碱性, Zinc-Air 锌-空气
- **Secondary (rechargeable)**: Li-ion 锂离子, LiPo 锂聚合物, Redox Flow 氧化还原液流, Solid-State 固态, Lead-Acid 铅酸, NiMH 镍氢

### [Mock 15.b]

(b) Describe how batteries can be classified, providing examples of each type.  (5 marks)

Batteries can be classified as Primary (non - rechargeable) and Secondary (Rechargeable).

Non-rechargeable: Alkaline Batteries, Zinc – Air Batteries 

Rechargeable: Lithium – Ion (Li – Ion) Batteries, Lithium Cobalt Oxide (LCO) Batteries, Lithium Manganese Oxide (LMO), Lithium Nickel Manganese Cobalt Oxide, Lithium Iron Phosphate (LiFePO 4 ) Batteries, Lithium – Polymer (LiPo) Batteries, Redox Flow Batteries, Solid - State Batteries, Lead - Acid Batteries, Nickel – Metal Hydride (NiMH)

### Li–Ion

锂离子电池

![image-20251207110405436](https://media.opennet.top/i/2025/12/07/vhn8wn-0.png)

- **正极 Cathode:** lithium metal oxide 锂金属氧化物
- **负极 Anode:** carbon 碳（graphit 石墨）
- **Electrolyte:** 含有Li ion
- **Separator:** Prevents short-circuit, allows ion transport.
- **Advantages:** High number of charge/discharge cycles 充放电循环次数多
- **Disadvantages:** Expensive, risk of fire/overcharge 贵，火灾隐患

### [Mock 15.a]

(a) Define **what is a battery**, identifying its **main components** and explaining its **principle  of operation** based on Figure Q15(锂离子电池原理图)

**what is a battery:** A battery is a device that converts chemical energy into electrical energy and *vice versa* (*反之亦然*) (if rechargeable)

**main components**: 

- It is a rechargeable Li-ion battery
- cathode: Li metal oxide
- Anode: carbon (graphite)
- Electrolyte: Li ion

​	Li-ion 电池，锂金属氧化物正极（cathode），石墨（graphite）负极（anode），锂离子电解质（electrolyte）

**principle  of operation**: 

- Discharge: Li ion move from anode to cathode through electrolyte
- electrons flow though external circuit, providing power
- Charge: the reaction reverse

​	放电操作：锂离子从负极anode到正极cathode(经电解质electrolyte)，电子electrons流动（经外部电路），为设备供能。充电操作则相反（reactions reverse）

> 放电时，电子从负极流向正极（外部电路），为维持电荷平衡，Li⁺ 必须也从负极到正极

### Li-Co-O

Lithium Cobalt Oxide (LCO) 钴酸锂

与 Li-ion 类似。正极 cathode由 $LiCoO_2$ 构成（也是锂金属氧化物）

- **High energy density**, used in consumer electronics.
- **Disadvantages:** Short lifespan, safety issues, cobalt scarcity.

<img src="https://media.opennet.top/i/2025/12/07/xalexx-0.png" alt="image-20251207121313905" style="zoom: 50%;" />

### **Li-Mn-O**

Lithium Manganese Oxide (LMO) 锰酸锂

正极由锰酸锂 (LiMn2O4) 制成

- Used in **medical devices and power tools**.
- **Advantages:** High thermal stability, low cost
- **Disadvantages:** Manganese dissolution(溶解) shortens lifespan.

<img src="https://media.opennet.top/i/2025/12/07/xj2px2-0.png" alt="image-20251207122738992" style="zoom:50%;" />

### **Li-Ni-Mn-Co-O (NMC)**

Lithium Nickel Manganese Cobalt Oxide (NMC) 镍锰钴酸锂

正极是镍、锰和钴的组合 (LiNiMn2O4)

- Used in **EVs, medical devices, industrial applications**.
- **Advantages:** High energy density, good stability
- **Disadvantages:** Poor thermal stability, fire risk.

![image-20251207123024823](https://media.opennet.top/i/2025/12/07/xkrd85-0.png)

### **Li-Iron-P (LiFePO₄) **

Lithium Iron Phosphate (LiFePO₄) 磷酸铁锂

频繁充电和放电

正极结合了磷酸铁锂 (LiFePO4) 和橄榄石结构

- **Olivine（橄榄石） structure** for stable ion migration.
- **Advantages:** Long cycle life, thermally stable, safe
- **Disadvantages:** Lower power density.

![image-20251207123040240](https://media.opennet.top/i/2025/12/07/xkuwss-0.png)

### **LiPo**

Lithium–Polymer (LiPo) 锂聚合物

- **Solid polymer electrolyte** in aluminum pouch. 铝箔袋 装 **固体聚合物**电解质
- **Advantages:** Flexible, lightweight
- **Disadvantages:** Same overcharge/heat issues as Li-ion.

![image-20251207123157423](https://media.opennet.top/i/2025/12/07/xljzk1-0.png)

### **Redox Flow **

氧化还原液流

**components**

- 2 external tanks: liquid electrolyte solutions
- Separated by a membrane
- pumped through a cell stack to undergo redox reactions
- releasing electrons and generating electricity

被膜（membrane）分隔的两种液态电解质（electrolyte）溶液被储存在外部罐（tanks）中，并被泵入（pumped through）电池堆(stack)中进行氧化还原反应（redox reactions），释放电子（electrons）并产生电能

- **Advantages:** Scalable energy storage, good for grids
- **Disadvantages:** Hard to miniaturize（小型化）.

![image-20251207123541599](https://media.opennet.top/i/2025/12/07/xnupyd-0.png)

### Solid-State

Solid-State Batteries 固态电池

固态电解质同时承担**电解液 + 隔膜**的作用

- Use **solid electrolytes** for improved safety.
- **Advantages:** No leakage, high energy density
- **Disadvantages:** Expensive, complex fabrication.

### **Lead–Acid **

铅酸

Comprise:

- **PbO₂** **positive** plate, **Pb** **negative** plate
- immersed in **H₂SO₄** eletrolyte solution

由 PbO₂ 正极板和 Pb 负极板组成，浸入**H₂SO₄电解液**中

Discharge:

- Both plates react with **H₂SO₄** , produce **PbSO₄ + H₂O + Electricity**

$$
\text{PbO}_2 + \text{Pb} + 2\text{H}_2\text{SO}_4 \rightarrow 2\text{PbSO}_4 + 2\text{H}_2\text{O}
$$
放电过程：两个极板都与 H₂SO₄ 反应生成 PbSO₄ 和 H₂O。该反应释放电子，提供电力。

Charge:

- **PbSO₄ + H₂O** convert to **PbO₂ + Pb +** **H₂SO₄**

▪ Charging process: lead sulphate and water are converted back into PbO₂ , Pb, and sulphuric acid.
$$
2\text{PbSO}_{4} + 2\text{H}_{2}\text{O} \;\rightarrow\; \text{PbO}_{2} + \text{Pb} + 2\text{H}_{2}\text{SO}_{4}
$$
充电过程：PbO₂ 和 H₂O 被转化回 PbO₂、Pb、H₂SO₄。

- **PbO₂ cathode**, **Pb anode**, **H₂SO₄ electrolyte**.
- **Advantages:** Cost-effective, reliable
- **Disadvantages:** Low energy density, sulphation 硫酸化.

![image-20251207181815677](https://media.opennet.top/i/2025/12/08/3lwmdj-0.png)

### NiMH

Nickel–Metal Hydride (NiMH) 镍氢

comprise:

- Cathode: Ni(OH)₂ 
- Anode: metal alloy capable of forming hydrides

由 Ni(OH)₂ 制成的正极 和 能形成氢化物(hydrides) 的金属合金负极组成。

Discharging operation: the nickel hydroxide at the cathode oxidises to nickel oxyhydroxide and releases electrons. The metal alloy at the anode reacts with hydroxide ions to form a metal hydride.
$$
\text{Ni(OH)}_{2} + \text{Metal alloy} \rightarrow \text{NiOOH} + \text{Metal Hydride}
$$
**放电**：正极的 Ni(OH)₂ 氧化成 NiOOH 并释放 电子。负极的金属合金与 OH⁻ 反应形成金属氢化物。

Charging operation: these reactions reverse.

**充电：** 这些反应会逆向进行。

- **Positive:** Ni(OH)₂, **Negative:** Metal hydride alloy.
- **Advantages:** High energy density, low memory effect 记忆效应”更低
- **Disadvantages:** High self-discharge rate.

![image-20251207191507333](https://media.opennet.top/i/2025/12/08/57lupx-0.png)

### **Alkaline**

碱性电池  **Non-rechargeable.**

- Cathod: **MnO₂**
- Anode: **Zn**
- alkaline Electrolyte (**KOH**)

通过 MnO₂ 正极和锌 **Zn** 负极之间的电化学反应工作，浸没在碱性电解液（alkaline electrolyte）中，典型为氢氧化钾（**KOH**）。

Discharge: 

- Zn -> ZnO, releasing electrons.
- **MnO₂** is reduced, consuming electrons.
- flow of electrons from anode to cathode produces electrical power

$$
\text{Zn} + 2\text{MnO}_{2} \rightarrow \text{ZnO} + \text{Mn}_{2}\text{O}_{3}
$$
**放电过程：** 负极的 **Zn** 发生氧化，释放电子并生成氧化锌（**ZnO**）。正极的二氧化锰 MnO₂ 被还原并消耗电子。电子从负极流向正极，从而产生电能。

- **Advantages:** Low cost, long shelf life
- **Disadvantages:** Non-rechargeable.

![image-20251207193536441](https://media.opennet.top/i/2025/12/08/5jovtd-0.png)

### **Zinc–Air**

锌-空气 **Non-rechargeable.**

Comprise:

- Cathode: air (**O₂**)
- Anode: Zn
- Alkaline electrolyte

它由锌（**Zn**）负极、空气（氧气，**O₂**）正极以及碱性电解液组成。

Discharge:

- Air cathode enables O₂ to take part in reactions
- electrons flow, produce electricity

$$
2\text{Zn} + \text{O}_{2} \rightarrow 2\text{ZnO}
$$
**放电过程：** Air 正极使周围空气中的**O₂**参与电化学反应，并促进电子流动，从而产生电能。

- **Advantages:** High energy density, long-term low power

![image-20251207194219254](https://media.opennet.top/i/2025/12/08/5nr29p-0.png)

### **Key Parameters**

- **Energy density**
    - **Gravimetric Energy Density / Specific Energy**: energy per  mass, **Wh/kg**
        -  重量能量密度/比能量：每个电池单位质量存储的能量

    - **Volumetric Energy Density:** energy per volume, **Wh/L**
        - 体积能量密度：电池单位体积可以储存的能量
- **Power density**
    - **Gravimetric power density, W/Kg**
    - **volumetric power density, W/L**
- Temperature range
- Longevity (shelf life, cycle life)
- **Nominal cell voltage 标称电池电压**
- **Shelf life  保质期:** time stored without degradation.
- **Cycle life:** number of charge–discharge cycles before performance loss.
- **Operating temperature** – affects capacity and aging.
- **Energy efficiency** – discharged/charged energy ratio.
- **Safety** – application-specific (e.g., wearables).
- **Cost (include Environmental cost)** – toxicity, recyclability.

### [Mock 9]

Q9: Fill the blank […] with the correct words: (2 marks)

[…] is the amount of energy stored per battery’s unit mass and is measured in watt-hours per kilogram (Wh/kg).

A. Electrochemical energy density

B. Power density

C. Nominal voltage density

**D. None of the above options is correct**

> 题述的是 Gravimetric Energy Density 的定义
>
> 注意能量密度 Wh/kg, Wh/L 和功率密度 W/kg, W/L的单位

### Battery Selection 

不考 或只涉及概念

 **Battery–Application Compatibility Matrix** 应用兼容性矩阵

Used to **evaluate and compare** batteries for specific applications by **quantifying compatibility** between characteristics and system requirements.

**Steps:**

1. Define objective (applications, batteries).
2. Select battery types (e.g., Li-ion, LiFePO₄, NiMH).
3. Define evaluation criteria.
4. Assess criteria for each battery. 评估每种电池的评估标准
5. Normalize data (0–1 scale). 数据归一化
6. Assign weights per application (Σw = 1). 分配权重
7. Compute weighted scores. 计算加权得分
8. Scale to 0–100 range.
9. Construct and interpret matrix. 构建并解释矩阵

**Key Formulas**

- **Normalization:**
    $x'_{ij} = |(x_{ij} - \min(x_i)) / (\max(x_i) - \min(x_i))|$
- **Weighted sum:**
    $S_{jk} = \sum_i (w_{ik} \times x'_{ij})$
- **Scaled score:**
    $S^{(100)}_{jk} = 100 \times S_{jk}$
- **Weight constraint:**
    $\sum_i w_{ik} = 1$

------

### **Applications**

| Application    | Example Devices     | Requirements                            |
| -------------- | ------------------- | --------------------------------------- |
| Smart City     | Sensors, meters     | Long life, low maintenance              |
| Smart Home     | Locks, thermostats  | Safety, moderate energy                 |
| Smart Health   | Wearables, implants | Small size, safety, long cycle life     |
| Smart Industry | Industrial IoT      | High reliability, temperature tolerance |
| Smart Farm     | Remote sensors      | Long-term low power, durability         |

## 9 Energy Harvesters

能量收集器

### Limits of Batterries

**leakage / Self-discharge** 泄露/自放电 → batteries deplete when idle.

**Environmental constraints** 受限于环境 → performance degrades in harsh conditions

**Environmental impact** 有害环境 → chemicals make recycling difficult.

**Size & weight trade-offs** 尺寸和重量的权衡 → more capacity requires larger and heavier batteries.

### [Mock 15.c]

(c) Describe the main limitations of battery-operated devices. (5 marks)

– **Leakage and/or self-discharge** can lead to battery depletion even during periods of inactivity 

– **Environmental constraints**: Battery performance degrades in harsh conditions, causing capacity and power losses 

– **Size & weight trade-off**: Larger and heavier batteries are required to increase capacity 

– **Environmental impact**: Hazardous chemicals make batteries difficult to recycle and dispose of safely

### **Harvesting vs Storage**

**Energy Harvesting**

- Captures energy from ambient/external sources: light, heat, vibrations, RF, etc. 
    - 从周围（光、热、震动、无线电射频）捕获能量
- Two architectures:
    1. **Harvest–Use 收集-使用** : directly powers load; device turns off when insufficient energy. 
        1. 收集的能量直接用于供电
    2. **Harvest–Store–Use 收集-存储-使用**: harvested energy stored (battery/supercap) for later use.

---

**Harvesting vs Storing**

- **Battery**: finite energy 有限的; depletes. 
- **Harvester**: continuous 持续的—works when the source is available.

### **Advantages of EH**

EH(Engergy Harvestor)

- Economical, simple, sustainable fabrication. 便宜 简单 可持续
- Can use biodegradable / biocompatible materials. 生物兼容
- Lower maintenance, Lower carbon footprint. 更少维护、碳排放
- Integrates well with wireless communication. 与无线通信集成
- Hybrid EH → combine multiple sources to improve reliability. 混合能量收集

### **EH Power Sources – Considerations**

- 环境适配：Choose harvester based on **application environment**:
    - Predictability可预测, controllability可控, energy magnitude量级.
- **Average load power 平均负载功率** is key to deciding how much harvesting is required.
- Compare device consumption vs available ambient power.

### **Mechanical EH**

机械能量收集

vibration 震动, motion 运动, deformation 形变.

**Transduction Mechanisms 转换机制**

1. **Electrostatic 静电**

    - Relative motion of capacitor plates changes capacitance.
        - 电容两电极板板的相对移动
    - Energy $E=\frac{1}{2}CV^2$.
    - 电压高、成本低、适合微型化、电容低

2. **Electromagnetic 电磁**

    - Faraday’s law 法拉第定律
        $$
        \mathcal{E} = -N\frac{d\Phi}{dt}
        $$
    - 电流大、可靠、电压低、难微型化

3. **Piezoelectric 压电**

    - Mechanical deformation generates charge.
    - 电压高、电容大、成本高

### **Solar / Light EH**

 **Principle**

- PV（光伏） cells convert photon energy to electricity via semiconductor PN junctions.
    - 光伏电池通过半导体PN结将光子转化为电能

**Power Model**

> 功率 = 效率 * 辐照 * 面积

$$
P = \eta \cdot G \cdot A
$$

- $\eta$ = efficiency
- $G$ = solar irradiance 太阳辐照度 $W/m^2$
- $A$ = area 面积

**Advantages**

- Mature technology 技术成熟
- High power density under sunlight (~100 mW/cm²) 高功率密度

**Disadvantages**

- Intermittency (night, shading, weather) 间歇性
- Requires MPPT (nonlinear output) 非线性
- Indoor light gives ~1/3 efficiency of solar 室内低效

### [Problem 1]

**Power from an indoor solar cell**

- A solar cell of area **A = 25 cm²** is placed indoors where the irradiance is **G = 300 W/m²**

1. **If the photovoltaic conversion efficiency is η = 15%, find the electrical power output**

---

The output power of a PV(光伏) cell is given by
$$
P_{\text{out}} = \eta G A
$$
Substitute the values:
$$
A = 25\,\text{cm}^2 = 0.0025\,\text{m}^2,\quad
G = 300\,\text{W/m}^2,\quad
\eta = 0.15
$$
Compute:
$$
P_{\text{out}} = 0.15 \times 300 \times 0.0025
= 0.1125\,\text{W}
$$

### **Wind EH**

Uses airflow, fluttering structures, or flags. 使用颤振或旗帜结构

**Power Model**

> 功率 = 效率 * 1/2 * 空气密度 * 有效面积 * 风速的三次方

$$
P_T = C_P \cdot P_0 = C_P \cdot \frac{1}{2} \rho A v^3
$$

- $P_T$：Turbine（涡轮） output power 风力涡轮机输出功率
- $P_0$：max wind power available 最大可用风功率
- $C_P$：performance coefficient 转换效率
- $\rho$：Air density 空气密度 kg/m³
- $v$：Wind speed 风速
- $A$：Swept area of turbine 叶片扫过面积/有效面积

 **Advantages**

- Works in outdoor windy environments.
- Can be miniaturised (piezo flags). 可小型化

**Disadvantages**

- Intermittent 间歇性
- Mechanical fatigue 机械疲劳
- Requires tuning; may cause noise/vibration. 需要调整；噪声

### [Problem 2]

**Power from a wind EH**

- A wind turbine-based harvester experiences airflow of speed $v = 6\,\text{m/s}$, with air density $\rho = 1.2\,\text{kg/m}^3$, and effective swept area $A = 0.01\,\text{m}^2$.
- If the harvester converts only $5\%$ of that into usable electrical power, **find the harvested power**.

---

$$
P_T = C_P \cdot P_0 = \frac{1}{2} C_P \rho A v^3 .
$$

$$
P_T = \frac{1}{2}\,(0.05)(1.2)(0.01)(6^3)
$$

$$
\boxed{P_T = 0.0648~\text{W}}
$$





### RF EH

射频

**Operation**

- Antenna 天线 → matching network → RF-DC rectifier 整流器 → storage/load.

**Model**

> 电功率 = 效率 * 发射功率 * 天线增益 * (波长/ 4 Pi d )的平方
>
> 其中 $\lambda = \frac{c}{f}$

$$
P = \eta \cdot P_{RF} \cdot G \cdot \left( \frac{\lambda}{4 \pi d} \right)^2
$$

- P = electrical power output 电功率输出 [W]
-  η = rectifier’s conversion efficiency 整流器转换效率
- $P_{RF}$ = transmitted RF power 发射射频功率 [W]
- G = antenna gain 天线增益 (dimensionless) （无量纲）
- λ = RF signal wavelength 射频信号波长 [m]
- d = distance between the RF source and the antenna 射频源与天线之间的距离 [m]

**Advantages**

- Uses existing signals, no added infrastructure. 无需额外基础设施

**Disadvantages**

- Very low power density. 功率密度低
- Strongly distance-dependent. 距离依赖性

### [Problem 3]

**Power from a RF EH**

A RF transmitter radiates $P_{RF} = 4\,\text{W}$ at $f = 2.4\,\text{GHz}$.
 The receive (harvester) antenna has gain $G = 0\,\text{dBi}$ and the separation between transmitter and harvester is $R = 10\,\text{m}$.

If the conversion efficiency is $\eta = 20\%$, **find the output power $P_{\text{out}}$**.

---

**Step 1 — Compute wavelength**
$$
\lambda = \frac{c}{f}
$$

$$
\lambda = \frac{3\times 10^8}{2.4\times 10^9} = 0.125\,\text{m}
$$

**Step 2 — Substitute into the formula**
$$
P = 0.2 \cdot 4 \cdot 1 \left( \frac{0.125}{4\pi \cdot 10} \right)^2 = 7.92\times 10^{-7} W
$$

### **Thermal (Heat) EH**

Uses temperature differences or fluctuations.

Thermoelectric Generators （TEG），热电发电机，当材料两端存在温度差时会产生电压

- **Equations/Models (TEGs):**

- > 电压 = Seebeck 系数 * 温差
    >
    > 功率 = 电压^2 / (负载电阻 + 内阻)

$$
V = S \cdot \Delta T
$$

- **V = generated voltage 生成电压 [V]** 
- **S = Seebeck coefficient 塞贝克系数 [V/K]**
- **$\Delta T$ = temperature difference 温差 [K]**

$$
P =\frac{V^2}{R} = \frac{S^2 \cdot \Delta T^2}{R_{load} + R_{int}}
$$

- **P = output power 输出功率 [V]**
- **$R_{load}$ = load resistance 负载电阻 [Ω]**
- **$R_{int}$ = internal resistance of the TEG 热电发电机内阻 [Ω]**

**Pyroelectric EH** 热释电能量收集器

- Uses materials whose polarization changes with temperature fluctuations. 热释电发电机用极化材料，极化变化响应温度变化，产生电流

**Pros**

- Small, can harvest waste heat. 小；可收集废热

 **Cons**

- Low efficiency 低效
- Requires thermal gradient or cyclic change 需要温度梯度或循环变化
- Thermal management is challenging

### [Problem 4]

**Problem 4: Power from Thermal EH**

- A thermoelectric generator (TEG) has Seebeck coefficient $\alpha = 200\,\mu\text{V/K} = 2\times10^{-4}\,\text{V/K}$ and internal resistance $R_i = 5\,\Omega$.
- The temperature difference is $\Delta T = 30\,\text{K}$, and the load resistance in series is $R_L = 5\,\Omega$.
- **Find the voltage and output power.**

---

**Given**

- Seebeck coefficient: $S = 2\times10^{-4}\,\text{V/K}$
- Temperature difference: $\Delta T = 30\,\text{K}$
- Internal resistance: $R_{int} = 5\,\Omega$
- Load resistance: $R_{load} = 5\,\Omega$

------

**Step 1 — Voltage**
$$
V = S \Delta T = (2\times10^{-4})(30)
$$
**Step 2 — Output Power**
$$
P = \frac{S^2 \Delta T^2}{R_{load} + R_{int}}
$$
Compute numerator:
$$
S^2 = (2\times10^{-4})^2 = 4\times10^{-8}
$$
Denominator:
$$
R_{load} + R_{int} = 5 + 5 = 10
$$
Now:
$$
P = \frac{3.6\times10^{-5}}{10} = 3.6\times10^{-6}\,\text{W}
$$

### Hydro EH

水利

Uses water flow (kinetic or oscillating).

**Power Model**
$$
P_T = \rho g H Q 
$$
𝜌 = water/liquid density, 𝑔 = gravitational acceleration,
𝑄 = flowrate, 𝐻 = height

𝜌 = 密度，𝑔 = 重力加速度，𝑄 = 流量，𝐻 = 高度

**Advantages**

- Continuous in pipes/rivers 持续
- High power density 高功率密度
- Predictable flow in controlled systems 可预测

**Disadvantages**

- Only works in water environments 仅水环境
- Corrosion, sedimentation, fouling  腐蚀、沉积、污垢
- Long-term material degradation 长期材料降解

### [Problem 5]

**Problem 5: Power from Hydro EH**

- A hydro turbine–based harvester at height $H = 1.529\,\text{m}$ experiences a water flowrate $Q = 0.002\,\text{m}^3/\text{s}$.
- If the water density is $\rho = 1000\,\text{kg/m}^3$, $g = 9.81\,\text{m/s}^2$, and the harvester converts $40\%$ of that into usable electrical power, **find the harvested power**.

---

Given:

- $\rho = 1000\,\text{kg/m}^3$
- $g = 9.81\,\text{m/s}^2$
- $Q = 0.002\,\text{m}^3/\text{s}$
- $H = 1.529\,\text{m}$
- Conversion efficiency = $40\%$

power generated by a hydro turbine is:
$$
P_T = \rho g H Q
$$

$$
P_T = 1000 \cdot 9.81 \cdot 0.002 \cdot 1.529 = 29.987 W
$$

$$
P_{\text{out}} = 40\% \cdot 29.987 = 11.9948\,\text{W}
$$

### [Mock 13]

**Q13:** Determine the height $H$ for a 12 W hydro turbine-based harvester if it experiences a water flowrate $Q = 0.002 \, \text{m}^3/\text{s}$, the water density is $\rho = 1000 \, \text{kg/m}^3$, $g = 9.81 \, \text{m/s}^2$ and the harvester converts **40%** of that into usable electrical power.
 (10 marks)

▪ **Relevant Equation:**
$$
P_{\text{out}} = \eta \cdot P_T = \eta \cdot \rho \cdot g \cdot Q \cdot H
$$
▪ **Data:**
 ▪ $\eta = 0.4$
 ▪ $\rho = 1000 \, \text{kg/m}^3,\; g = 9.81 \, \text{m/s}^2$
 ▪ $Q = 0.002 \, \text{m}^3/\text{s}$
 ▪ $P_{\text{out}} = 12 \, \text{W}$

▪ **Solution**
$$
H = \frac{\eta \cdot \rho \cdot g \cdot Q}{P_{\text{out}}}
= \frac{0.4 \times 1000 \times 9.81 \times 0.002}{12}
= 1.529 \, \text{m}
$$
▪ **Answer**
$$
\boxed{H = 1.529 \, \text{m}}
$$

------

### Aeroelastic EH

气动弹性能量收集

它利用流体流动（例如，空气）引起的结构振动，通过材料变形（通常是压电材料）来发电。

Uses fluid–structure interactions (flutter, galloping, vortex shedding).

**Principle**

- Flow excites structures → vibrations → piezoelectric deformation → electricity.
- 流动激发结构→振动→压电形变→产生电流。

**Pros**

- Good for persistent airflow 持续
- Can power sensors on aircraft or tall structures 

**Cons**

- Requires precise tuning 需要精确调谐
- Complex modelling
- Mechanical fatigue

### **Sound (Acoustic) EH**

声（声学）能量收集

Uses pressure oscillations from sound waves.

利用声波产生的压力振荡。

**Mechanisms**

- Piezoelectric deformation 压电形变
- Triboelectric nanogenerators (contact–separation by sound pressure) 摩擦纳米发电机（声压接触分离）

 **Pros**

- Can use ambient noise 利用噪声

**Cons**

- Very low, inconsistent power 能量很低
- Frequency mismatches → energy loss 频率不匹配，能量损失
- Complex mechanical design

### **Chemical & Bio EH**

**Microbial Fuel Cells (MFCs)** 微生物燃料电池

- Bacteria oxidize organic matter → electrons flow from anode to cathode.
- 细菌氧化有机物→电子从阳极流向阴极。

**Enzymatic Biofuel Cells** 酶生物燃料电池

- Use enzymes as catalysts. 利用酶作为催化剂。

**Pros**

- Uses abundant waste/organic material 利用有机材料
- Potentially continuous 可持续

**Cons**

- Very low power per cell → must connect many in series/parallel 单电池功率极低 → 必须串联/并联
- Maintenance due to biological degradation 生物降解导致维护困难
- Large size required 体积较大
- Low power density & slow response 功率密度低 响应慢

## 10 Self-Powered Systems

### Power Converter

Rectification (AC to DC) 整流

Inversion (DC to AC) 逆变

Conversion (DC to DC, AC to AC)

#### Rectification Diodes

​	整流二极管 AC->DC

- **Diodes:** Semiconductor devices that conduct current in one direction (forward bias) and block it in the reverse (reverse bias). Silicon diodes typically have a 0.7V threshold.
    - 正向偏置时导通。硅管的阈值为 0.7V
- **Configurations:** Can be used as Half-Wave, Full-Wave, or Bridge Rectifiers.
    - 用作半波整流器、全波整流器、桥式整流器
- **Smoothing:** Capacitors are added to the output to smooth out voltage ripples.
    - 在输出端添加 电容 以平滑电压纹波

#### **Linear Regulators**

​	线性稳压器 DC->DC

- *Mechanism:* Uses a transistor/MOSFET as a variable resistor to divide input voltage.
    - 基于电压按电阻分配的原理(滑动变阻器)，使用晶体管/MOSFET 作为可变电阻器来分压输入电压。
- *Pros:* Low noise, low cost, low design difficulty.
- *Cons:* Can only step-down voltage; efficiency drops significantly if the input/output voltage difference is high.
    - 只能降压；如果输入/输出电压差较大，效率会显著下降。

![image-20251125215728578](https://media.opennet.top/i/2025/11/26/97swe0-0.png)

#### **Switching Regulators**

​	开关稳压器 DC->DC

- *Mechanism:* Switches input on/off rapidly into a pulse wave, smoothed by an inductor/capacitor. The duty cycle determines the output.
    - 快速开/关输入，形成脉冲波，再通过电感/电容平滑处理。占空比决定输出。
- *Types:* Buck (Step-down 降压), Boost (Step-up 升压), **Buck-Boost** (Both).
- *Pros:* High efficiency (80-90%), handles high current, can step-up voltage.
- *Cons:* Generates EMI noise, higher cost, higher design complexity.

![image-20251125215745493](https://media.opennet.top/i/2025/11/26/97wh6q-0.png)

| 项目             | 线性稳压器                                       | 开关稳压器                                          |
| ---------------- | ------------------------------------------------ | --------------------------------------------------- |
| 可驱动的电路类型 | 放大电路、高频电路、小电流电路、成本敏感型电路等 | 处理器、存储器、显卡芯片、网络控制器、液晶、OLED 等 |
| 电压转换能力     | 仅能降压（Step-down） ❌                          | 可降压、升压、升降压（支持/不支持极性反转） ✅       |
| 输出电流能力     | 通常为数百 mA 到约 1A ❌                          | 根据外接功率器件，可输出 100 A 或更高电流 ✅         |
| 能量效率         | 输入与输出电压差较大时效率会大幅下降 ❌           | 约 80%～90%（最高可达 98%） ✅                       |
| 噪声             | 几乎不产生噪声 ✅                                 | 由于工作原理必然产生噪声 ❌                          |
| 技术复杂度       | 低 ✅                                             | 较高（单芯片模块等情况更高） ❌                      |
| 成本             | 低 ✅                                             | 高 ❌                                                |

#### **Inverters**

逆变器

Use high-speed switches (IGBT, MOSFET) to create AC power.

​	使用高速开关（IGBT、MOSFET）的 快速开合 产生交流电

- *Voltage Source Inverter (VSI):* Powered by a DC voltage source with a shunt capacitor.
    - *电压源逆变器（VSI）：* 由带有并联电容器的直流电压源供电。
- *Current Source Inverter (CSI):* Powered by a DC current source (usually via a series inductor).
    - *电流源逆变器（CSI）：* 由直流电流源供电（通常通过串联电感器）。

![image-20251125215933213](https://media.opennet.top/i/2025/11/26/992wka-0.png)

#### Transformers

​	变压器

- Change AC voltage/current levels using mutual inductance without changing frequency. 

    - 利用互感改变交流电压/电流，不改变频率。

The turns ratio ($N$) determines the output:

$$
\frac{N_{p}}{N_{s}}=\frac{V_{p}}{V_{s}} = N
$$

Where $N_p/N_s$ are primary/secondary turns and $V_p/V_s$ are voltages.

### [Problem 1]

- **Problem 1: Transformer Power**
- A voltage transformer has 1500 turns of wire on its primary coil and 500 turns of wire for its secondary coil.

1. What will be the turns ratio *N* of the transformer?

$$
N = \frac{N_p}{N_s} = \frac{1500}{500} = \boxed{3}
$$

2. If 240 volts **rms **(Root Mean Square, 均方根值，表示有效电压) is applied to the primary winding of the same transformer above, what will be the resulting secondary voltage?

$$
V_s = 240 \times \frac{1}{3} = \boxed{80\text{ V}}
$$

### Protection Circuits

Essential for safety and longevity:

1. **Overcharge Protection:** Stops charging when voltage hits a threshold.
    1. **过充保护：** 当电压达到阈值时停止充电。

2. **Over-Discharge Protection:** Disconnects load to prevent voltage dropping below unsafe levels.
    1. **过放保护：** 断开负载，防止电压降至不安全水平以下。

3. **Short Circuit Protection:** Uses fuses/breakers to prevent fire from current surges.
    1. **短路保护：** 使用熔断器/断路器来防止电流浪涌引起的火灾。

4. **Thermal Protection:** Monitors temperature and initiates cooling or shutdown.
    1. **热保护：** 监控温度并启动冷却或关闭。


### Power Management

#### Energy Storage

- **Batteries:** High energy density but limited cycle life and temperature sensitivity.
    - 能量密度高；循环寿命有限、对温度敏感。

- **(Super-)Capacitors:** High power density and long cycle life, but lower energy density and higher cost.
    - 功率密度高、循环寿命长；能量密度低、成本高。

- **Hybrid Systems:** Balance the benefits of both but increase complexity.
    - 兼具两者的优点，但结构复杂。

#### Consumption Optimization

**Adaptive Sampling:** Adjusts the frequency of data collection based on environmental conditions or application needs

**Compression Techniques:** Reduces the amount of data transmitted by compressing sensor data before transmission.

**Duty Cycling:** Alternates between active and sleep modes to reduce energy consumption during idle periods

**Low-Power Communication Protocols:** Uses energy-efficient communication protocols to minimise power use during data transmission

**Efficient Algorithms:** Implements algorithms that minimize computational complexity and energy consumption

**Edge Computing:** Processes data locally on the sensor node to reduce the amount of data transmitted and save energy

**自适应采样 Adaptive Sampling：** 根据环境条件或应用需求调整数据采集频率

**压缩技术 Compression Techniques：** 在传输前压缩传感器数据，以减少需要传输的数据量

**占空比控制 Duty Cycling：** 在活动模式与休眠模式之间切换，以减少空闲时的能耗

**低功耗通信协议 Low-Power Communication Protocols：** 使用节能型通信协议，以在数据传输过程中尽量降低功耗

**高效算法 Efficient Algorithms：** 实现能降低计算复杂度和能源消耗的算法

**边缘计算 Edge Computing：** 在传感器节点本地处理数据，以减少传输数据量并节省能源

#### Management Protocols

- **Energy-Efficient Routing:** Optimizing data paths (e.g., LEACH protocol).
- **Energy Harvesting Aware:** Adjusting consumption based on available harvested energy.
- **Load Balancing:** Distributing tasks to prevent depleting specific nodes.
- **节能路由：**优化数据路径（例如，LEACH 协议）。
- **能量采集感知：**根据已采集到的能量调整功耗。

- **负载均衡：**分配任务以防止特定节点资源耗尽。

### Capacitors

- **Structure:** Two conductive plates separated by a dielectric.
    - 两块导电板之间由电介质隔开。

- **Capacitance ($C$):** $C = \frac{\epsilon A}{d}$ ，介电常数 * 面积 / 距离
- **Energy Stored ($E$):** $E = \frac{1}{2}CV^2$.
- **Impedance ($Z$):** In AC circuits, impedance includes resistance ($R$) and reactance ($X$). Ideally, capacitors block DC and pass AC, but real capacitors have parasitic elements.
    - 在交流电路中，阻抗包括电阻（R）和电抗（X）。理想情况下，电容器会阻隔直流电，允许交流电通过，但实际的电容器存在寄生元件。

![image-20251125235534675](https://media.opennet.top/i/2025/11/26/chqej2-0.png)

### [Mock 10]

**Q10: Identify the correct formula for the energy $E$ stored in an ideal parallel-plate capacitor:**

*(2 marks)*

**A.** $E = \frac{\varepsilon A}{d} V$

**B.** $E = \frac{1}{2} \left(\frac{\varepsilon A}{d}\right)^2 V$

**C.** $E = \frac{1}{2} \frac{\varepsilon A}{d} V^2$

**D.** None of the above formulas is correct.

答案：C

### Parasitic Elements

​	寄生元素

> **Parasitic Elements（寄生元件 / 寄生参数）** 是指电子元件、导线、PCB 走线等在现实中不可避免的非理想特性。

1. **Equivalent Series Resistance (ESR):** Internal resistance causing heat and energy loss. Crucial for efficiency.
    1. **等效串联电阻 (ESR)：**内部电阻，会导致发热和能量损耗。对效率至关重要。

2. **Equivalent Series Inductance (ESL):** Parasitic inductance limiting high-frequency filtering.
    1. **等效串联电感 (ESL)：**寄生电感，限制高频滤波。

3. **Insulation Resistance (IR):** Leakage current through the dielectric (important for long-term storage).
    1. **绝缘电阻（IR）：** 通过介质的泄漏电流（对长期存储很重要）。


### Variable Capacitors

可变电容

![image-20251125163301994](https://media.opennet.top/i/2025/11/26/jo3n3-0.png)

![telegram-cloud-photo-size-1-4985686728731462472-y](https://media.opennet.top/i/2025/11/26/kegrm-0.jpg)

Capacitance is usually changed by changing the area of opposing electrodes. 

​	电容值通常通过改变相对电极的面积来改变

 – **Tuning capacitors**, which can be frequently changed (e.g., radio tuning)

​	**调谐电容器**，可频繁更换（收音机调谐）

 – **Trimmer capacitors**, which are changed only once for adjustment (e.g., during circuit assembly) usually for calibration

​	**微调电容器**，通常仅在调整时（例如，在电路组装期间）更改一次，通常用于校准

Capacitance is changed with a knob or a driver. Its mechanically-based tuning mechanism makes it difficult to produce capacitors with a large capacitance.

电容通过旋钮或驱动器改变。其基于机械的调谐机制使得制造大电容值的电容器变得困难。

### Fixed Capacitors

固定电容

– **Nonpolar capacitors** have no restrictions on the polarity of the voltage applied to their terminals
 (i.e., either terminal can be positive), so they can be directly used in AC.

​	无极性电容 可用于交流电

 ➤ Examples: Ceramic, film, mica, paper, and air capacitors

– **Polar capacitors** have specific positive and negative polarities and must be used with DC voltage or a voltage that varies only on the positive side. However, polar capacitors can provide small and large capacity

​	极性电容 用于直流电 或 仅在正侧变化的电压。

​	可以提供小容量和大容量两种选择。

 ➤ Examples: Aluminum electrolytic capacitors, tantalum electrolytic capacitors, conductive polymer (electrolytic) capacitors, and electric double layer capacitors

#### Ceramic

​	陶瓷

**Non-Polar **非极性

*Pros:* Low ESR (good for high frequencies), high heat resistance, small size, non-polar.

​	低等效串联电阻 ESR（适合高频），耐高温，体积小，无极性。

*Cons:* Capacitance changes with voltage (DC bias), mechanical cracking, noise (squealing).

​	电容随电压变化（直流偏置），易机械开裂，噪声（啸叫）。

#### Film (Plastic)

​	薄膜(塑料) 

**Non-Polar **非极性

*Material:* Uses plastic film (PET, PP, PPS) as dielectric.

​	采用塑料薄膜（PET、PP、PPS）作为电介质。

*Pros:* Low ESR, excellent temperature stability, high voltage handling, no DC bias issues.

​	低 ESR、出色的温度稳定性、高电压处理能力、无直流偏置问题。

*Cons:* Large physical size, high price.

​	尺寸大，价格高。

*Sub-types:* **PP** (Polypropylene) is best for high frequency/large current; **PET** is for general use.

​	**PP**（聚丙烯）最适合高频/大电流；**PET** 适用于一般用途。	

#### **Aluminum Electrolytic**

​	铝电解电容 - 极性

- *Structure:* Aluminum oxide film on foil; liquid electrolyte.
    - 箔上的氧化铝薄膜；液态电解质。
- *Pros:* High capacitance, low impedance at mains frequency, widely used in power supplies.
    - 电容高，市电频率下阻抗低，广泛用于电源。
- *Cons:* High ESR, limited life (electrolyte dries up over time/heat).
    - ESR 高，寿命有限（电解液会随着时间和高温而干涸）。

#### **Tantalum Electrolytic**

​	钽（Ta）电解电容 - 极性

- *Structure:* Sintered tantalum powder with manganese dioxide electrolyte.
    - 用二氧化锰电解质烧结的钽粉。
- *Pros:* Smaller than aluminum, excellent frequency characteristics, long life.
    - 体积比铝电容小，频率特性优异，寿命长
- *Cons:* Expensive, risk of fire/ignition if short-circuited.
    - 价格昂贵，短路时有起火/点燃风险。

#### **Conductive Polymer**

​	导电聚合物电容 - 极性

- *Structure:* Uses solid conductive polymer as electrolyte.
    - 使用固体导电聚合物作为电解质。
- *Pros:* **Very low ESR**, safe, stable over temperature. Ideally used as replacements for other electrolytics.
    - 极低的 ESR，安全，温度稳定性好。理想情况下可用于替代其他电解电容。
- *Cons:* Expensive, low voltage ratings.
    - 昂贵，额定电压低。

### **Selection Strategy**

- **Step 1 (Specs):** Check Capacitance, Voltage, and ESR. For high-frequency/performance, choose Low ESR (Polymer/Ceramic).
    - 检查电容值、电压和等效串联电阻（ESR）。对于高频/高性能应用，选择低 ESR（聚合物/陶瓷）。
- **Step 2 (Reliability):** For mission-critical/long-life IoT, avoid general electrolytic (dry-up risk) and prefer Conductive Polymer.
    - 对于关键任务/长寿命的物联网，避免使用普通电解电容（干涸风险），优先选择导电聚合物。

### Supercapacitors

- A supercapacitor (or ultracapacitor) is a high-capacity capacitor that bridges the gap between electrolytic capacitors and rechargeable batteries:

    - 超级电容性能介于 普通电解电容与 可充电电池 之间

     – Accepts and delivers charge faster than batteries

    ​	充放电速度比电池快

     – Tolerates more charge and discharge cycles than rechargeable batteries

    ​	可承受的充放电循环次数比可充电电池多

- The supercapacitor’s total energy* **E** is the difference between the energy stored at the charging voltage **V₁** and the energy at the cut-off voltage **V₂**:

    - 超级电容器的**可用总能量 E** 为：在充电电压 **V₁** 与截止电压 **V₂** 之间所能释放的能量：

$$
E = \frac{1}{2} C (V_1^2 - V_2^2)
$$

#### [Problem 3]

**Problem 3: Supercapacitor Power**
 **A supercapacitor has a capacitance $C = 76\,F$.
 If the charging voltage is $V_1 = 2.7\text{ V}$ and the cut-off voltage is $V_2 = 1\text{ V}$, find the energy $E$ stored in the supercapacitor.**

---

Energy formula for a supercapacitor:
$$
E = \frac{1}{2} C (V_1^2 - V_2^2)
$$
Substitute values:
$$
E = \frac{1}{2} \times 76 \times (2.7^2 - 1^2)
$$

---

**2. The supercapacitor is used to deliver energy in a smart home application.
 If the energy stored ixn the supercapacitor $E$ is depleted in 5 minutes, what is the power consumption of the application?**

---

Convert time into seconds:
$$
t = 5 \text{ minutes} = 300 \text{ s}
$$
Power formula:
$$
P = \frac{E}{t}
$$
Substitute:
$$
P = \frac{239.02}{300} = 0.797 \text{ W}
$$

#### **EDLC**

Electric Double Layer Capacitor

​	双电层电容器

- **Mechanism:** Electrostatic. Stores charge via a double layer formed at the electrode-electrolyte interface (Helmholtz layer).
    - 静电。通过在电极-电解质界面形成的双电层（亥姆霍兹层）存储电荷。
- **Material:** Uses activated carbon electrodes for ionic adsorption/desorption.
    - 使用活性炭电极进行离子吸附/解吸。

#### **Pseudocapacitors**

​	赝电容

- **Mechanism:** Electrochemical (Faradaic process). Stores charge via electron transfer (Redox reactions) between electrode and electrolyte.
    - 电化学（法拉第过程）。通过电极和电解质之间的电子转移（氧化还原反应）来存储电荷。
- **Performance:** Charges faster than batteries but stores more charge than EDLCs.
    - 充电速度比电池快，但比双电层电容器存储更多的电荷。

#### **Hybrid Capacitors**

​	混合电容

- **Mechanism:** Combines EDLC and Pseudocapacitor technology (e.g., Lithium-ion capacitor).
    - 结合电双层电容（EDLC）和赝电容技术（例如，锂离子电容器）。
- **Pros:** High reliability, rugged (shock/vibration resistant), wide temperature range (-55°C to 200°C).
    - 高可靠性，坚固耐用（抗冲击/振动），宽温度范围（-55°C 至 200°C）。
- **Cons:** High cost. 成本高。