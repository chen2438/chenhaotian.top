---
description: 发布于 2025-08-06
categories:
- life
date: 2025-08-06
slug: ocbc-google-pay
title: 将 OCBC 借记卡添加到 Google Pay
updated: 
tags: 
- life
- ocbc
copyright: true
---

# 将 OCBC 借记卡添加到 Google Pay

根据 [网页链接](https://milelion.com/2025/07/26/psa-add-your-ocbc-cards-to-google-pay-wallet-before-31-july/)，2025年7月31号之后，在Google Pay添加OCBC银行卡时不能通过仅接收OTP或使用OneToken。根据OCBC的要求，需要发送短信到 `72323`，而境外手机号无法直接发送短信到这个短号。

要求：

```
【华侨银行】OCBC: To add a card to Google Wallet, SMS 72323 with: TOKN <space> The cardholder's NRIC/passport no. <space> Last 4 digits of the card no. We will process your request within two days. The OCBC Cardmembers' Agreement and Terms and Conditions governing Electronic Banking Services will apply.
```

## 解决方案

![image-20250806201859346](https://media.opennet.top/i/2025/08/06/xe2h6e-0.png)

通过 Google 搜索发现 `+65 9327 2323` 是 `72323` 的境外号码，于是尝试向该号码发送短信，`+86`手机号实测成功。

OCBC收到短信后会再发一个验证码，要求你将该验证码再原路回复给它。保险起见，我向这条短信的`106`号码和 `+65 9327 2323` 都回复了验证码。

```
【华侨银行】OCBC: Be alert to scams. To authorise a request to add a card to Google Wallet, reply to this SMS with this One-Time Password (OTP): 验证码. It expires in 3 minutes. Do not share it with anyone. If you did not make the request, do not reply to this SMS and call us immediately: OCBC website > Contact us.
```

OCBC随后表示已收到你的验证码。

```
【华侨银行】OCBC: We have received your request to add a card to Google Wallet. Please ensure that you have already entered the card details into the wallet. Requests submitted before 5pm SGT will be processed within one day; those submitted after 5pm SGT will be processed within two days. We will SMS you once the card has been added. The OCBC Cardmembers’ Agreement and Terms and Conditions governing Electronic Banking Services apply. Thank you for your patience.
```

几分钟后审核通过。

```
【华侨银行】OCBC: Your card (-卡号后四位) has been added to Google Pay. Did not do this? Call us immediately using the numbers listed on the OCBC website > Contact us (press 8 to activate our emergency kill switch to protect your accounts).
```

