---
description: 发布于 2025-06-16
categories:
- study
date: 2025-06-16
slug: nowcoder-sql-fast
title: 牛客 SQL快速入门 学习笔记
updated: 
tags:
- study
- sql
copyright: true
---

# 牛客 SQL快速入门 学习笔记

> 排序按题目顺序，与标题会有出入
>
> 复习时直接 Ctrl+F 查找对应关键字

题目链接: https://www.nowcoder.com/exam/oj?page=1&tab=SQL%E7%AF%87&topicId=199

示例表格1

`user_profile`

| id   | device_id | gender | age  | university | province |
| ---- | --------- | ------ | ---- | ---------- | -------- |
| 1    | 2138      | male   | 21   | 北京大学   | Beijing  |
| 2    | 3214      | male   |      | 复旦大学   | Shanghai |
| 3    | 6543      | female | 20   | 北京大学   | Beijing  |
| 4    | 2315      | female | 23   | 浙江大学   | ZheJiang |
| 5    | 5432      | male   | 25   | 山东大学   | Shandong |

示例表格2

`user_profile`

| id   | device_id | gender | age  | university   | gpa  |
| ---- | --------- | ------ | ---- | ------------ | ---- |
| 1    | 2138      | male   | 21   | 北京大学     | 3.4  |
| 2    | 3214      | male   |      | 复旦大学     | 4.0  |
| 3    | 6543      | female | 20   | 北京大学     | 3.2  |
| 4    | 2315      | female | 23   | 浙江大学     | 3.6  |
| 5    | 5432      | male   | 25   | 山东大学     | 3.8  |
| 6    | 2131      | male   | 28   | 北京师范大学 | 3.3  |

## Select

**查询所有列**：现在运营想要查看用户信息表中所有的数据，请你取出相应结果

```sql
select *
from user_profile
```

**查询多列**：现在运营同学想要用户的设备id对应的性别、年龄和学校的数据，请你取出相应数据

```sql
select device_id,gender,age,university
from user_profile;
```

### Distinct

**查询结果去重**：现在运营需要查看用户来自于哪些学校，请从用户信息表中取出学校的 **去重** 数据。

```sql
select distinct university
from user_profile
```

### Limit

**限制返回行数**：现在运营只需要查看 **前2个** 用户明细设备ID数据，请你从用户信息表 user_profile 中取出相应结果。

```sql
select device_id
from user_profile
limit 2
```

### As

**列重新命名**：现在你需要查看前2个用户明细设备ID数据，并将列名改为 'user_infos_example',，请你从用户信息表取出相应结果。

```sql
select device_id as user_infos_example
from user_profile
limit 2
```

## Where

**查找特定学校的学生**：现在运营想要筛选出所有北京大学的学生进行用户调研，请你从用户信息表中取出满足条件的数据，结果返回设备id和学校。

```sql
select device_id, university
from user_profile
where university='北京大学'
```

**查找年龄大于24岁的用户**：现在运营想要针对24岁以上的用户开展分析，请你取出满足条件的设备ID、性别、年龄、学校。

```sql
select device_id,gender,age,university
from user_profile
where age > 24
```

### Between

**查找某个年龄段的用户信息**：现在运营想要针对20岁及以上且23岁及以下的用户开展分析，请你取出满足条件的设备ID、性别、年龄。

```sql
select device_id,gender,age from user_profile 
where age between 20 and 23
```

**查找除复旦大学的用户信息**：现在运营想要查看除复旦大学以外的所有用户明细包括的字段有 device_id、gender、age、university，请你取出相应数据

```sql
select device_id,gender,age,university
from user_profile
where university!='复旦大学'
```

### Is

**用where过滤空值**：现在运营想要对用户的年龄分布开展分析，在分析时想要剔除没有获取到年龄的用户，请你取出所有年龄值不为空的用户的设备ID，性别，年龄，学校的信息。

```sql
select device_id,gender,age,university
from user_profile
where age is not null
```

**高级操作符练习(1)**：现在运营想要找到male且GPA在3.5以上(不包括3.5)的用户进行调研，请你取出相关数据。

```sql
select device_id,gender,age,university,gpa
from user_profile
where gender='male' and gpa>3.5
```

**高级操作符练习(2）**：现在运营想要找到学校为北大 **或** GPA在3.7以上(不包括3.7)的用户进行调研，请你取出相关数据（使用OR实现）

```sql
select device_id,gender,age,university,gpa
from user_profile
where university='北京大学' or gpa>3.7
```

### In

**Where in 和Not in**：现在运营想要找到学校为北大、复旦和山大的同学进行调研，请你取出相关数据。

```sql
select device_id,gender,age,university,gpa
from user_profile
where university in ('北京大学','复旦大学','山东大学')
```

**操作符混合运用**：现在运营想要找到gpa在3.5以上(不包括3.5)的山东大学用户 或 gpa在3.8以上(不包括3.8)的复旦大学同学进行用户调研，请你取出相应数据,取出的数据按照device_id升序排列

```sql
select device_id,gender,age,university,gpa
from user_profile
where gpa>3.5 and university='山东大学'
    or gpa>3.8 and university='复旦大学'
```

### Like

**查看学校名称中含北京的用户**：现在运营想查看所有大学中带有"北京"的用户的信息(device_id,age,university)，请你取出相应数据。

```sql
select device_id,age,university
from user_profile
where university like '%北京%'
```

### Max

**查找GPA最高值**：运营想要知道复旦大学学生gpa最高值是多少，请你取出相应数据

```sql
select max(gpa) as gpa
from user_profile
where university='复旦大学'
```

### Count Avg

**计算男生人数以及平均GPA**：现在运营想要看一下男性用户有多少人以及他们的平均gpa是多少，用以辅助设计相关活动，请你取出相应数据。

```sql
select 
    count(gender) as male_num,
    avg(gpa) as avg_gpa
from user_profile
where gender='male'
```

## Group Order

**分组计算练习题**：现在运营想要对每个学校不同性别的用户活跃情况和发帖数量进行分析，请分别计算出每个学校每种性别的用户数、30天内平均活跃天数和平均发帖数量。

用户信息表：user_profile

30天内活跃天数字段（active_days_within_30）

发帖数量字段（question_cnt）

回答数量字段（answer_cnt）

| id   | device_id | gender | age  | university | gpa  | active_days_within_30 | question_cnt | answer_cnt |
| ---- | --------- | ------ | ---- | ---------- | ---- | --------------------- | ------------ | ---------- |
| 1    | 2138      | male   | 21   | 北京大学   | 3.4  | 7                     | 2            | 12         |
| 2    | 3214      | male   |      | 复旦大学   | 4.0  | 15                    | 5            | 25         |
| 3    | 6543      | female | 20   | 北京大学   | 3.2  | 12                    | 3            | 30         |
| 4    | 2315      | female | 23   | 浙江大学   | 3.6  | 5                     | 1            | 2          |
| 5    | 5432      | male   | 25   | 山东大学   | 3.8  | 20                    | 15           | 70         |
| 6    | 2131      | male   | 28   | 山东大学   | 3.3  | 15                    | 7            | 13         |
| 7    | 4321      | male   | 26   | 复旦大学   | 3.6  | 9                     | 6            | 52         |

第一行表示:id为1的用户的常用信息为使用的设备id为2138，性别为男，年龄21岁，北京大学，gpa为3.4在过去的30天里面活跃了7天，发帖数量为2，回答数量为12

你的查询返回结果需要对**性别和学校分组**，示例如下，结果保留1位小数，1位小数之后的四舍五入,查询出来的结果按照gender、university升序排列：

| gender | university | user_num | avg_active_day | avg_question_cnt |
| ------ | ---------- | -------- | -------------- | ---------------- |
| female | 北京大学   | 1        | 12.0           | 3.0              |
| female | 浙江大学   | 1        | 5.0            | 1.0              |
| male   | 北京大学   | 1        | 7.0            | 2.0              |
| male   | 复旦大学   | 2        | 12.0           | 5.5              |
| male   | 山东大学   | 2        | 17.5           | 11.0             |

解释:

第一行表示：北京大学的男性用户个数为1，平均活跃天数为12天，平均发帖量为3

```sql
select gender, university,
    count(device_id) as user_num,
    avg(active_days_within_30) as avg_active_day,
    avg(question_cnt) as avg_question_cnt
from user_profile
group by gender, university
order by gender, university;
```

### Having

**分组过滤练习题**：现在运营想查看每个学校用户的平均发贴和回帖情况，寻找低活跃度学校进行重点运营，请取出平均发贴数低于5的学校或平均回帖数小于20的学校。

```sql
select university,
    avg(question_cnt) as avg_question_cnt,
    avg(answer_cnt) as avg_answer_cnt
from user_profile
group by university
having avg_question_cnt<5 
    or avg_answer_cnt<20
```

**分组排序练习题**：现在运营想要查看不同大学的用户平均发帖情况，并期望结果按照平均发帖情况进行升序排列，请你取出相应数据。

```sql
select university,
    avg(question_cnt) as avg_question_cnt
from user_profile
group by university
order by avg_question_cnt
```

## Join

### 简单连接

**浙江大学用户题目回答情况**：现在运营想要查看所有来自浙江大学的用户题目回答明细情况，请你取出相应数据

示例 ：question_practice_detail

| id   | device_id | question_id | result |
| ---- | --------- | ----------- | ------ |
| 1    | 2138      | 111         | wrong  |
| 2    | 3214      | 112         | wrong  |
| 3    | 3214      | 113         | wrong  |
| 4    | 6543      | 114         | right  |
| 5    | 2315      | 115         | right  |
| 6    | 2315      | 116         | right  |
| 7    | 2315      | 117         | wrong  |

第一行表示:id为1的用户的常用信息为使用的设备id为2138，在question_id为111的题目上，回答错误

示例：user_profile

| id   | device_id | gender | age  | university | gpa  | active_days_within_30 | question_cnt | answer_cnt |
| ---- | --------- | ------ | ---- | ---------- | ---- | --------------------- | ------------ | ---------- |
| 1    | 2138      | male   | 21   | 北京大学   | 3.4  | 7                     | 2            | 12         |
| 2    | 3214      | male   |      | 复旦大学   | 4.0  | 15                    | 5            | 25         |
| 3    | 6543      | female | 20   | 北京大学   | 3.2  | 12                    | 3            | 30         |
| 4    | 2315      | female | 23   | 浙江大学   | 3.6  | 5                     | 1            | 2          |
| 5    | 5432      | male   | 25   | 山东大学   | 3.8  | 20                    | 15           | 70         |
| 6    | 2131      | male   | 28   | 山东大学   | 3.3  | 15                    | 7            | 13         |
| 7    | 4321      | female | 26   | 复旦大学   | 3.6  | 9                     | 6            | 52         |

第一行表示:id为1的用户的常用信息为使用的设备id为2138，性别为男，年龄21岁，北京大学，gpa为3.4在过去的30天里面活跃了7天，发帖数量为2，回答数量为12

根据示例，你的查询应返回以下结果，查询结果根据question_id升序排序：

| device_id | question_id | result |
| --------- | ----------- | ------ |
| 2315      | 115         | right  |
| 2315      | 116         | right  |
| 2315      | 117         | wrong  |

解释:

根据题目的数据只有1个浙江大学的用户，那么把浙江大学这个用户所有答题数据查询出来就行

法1 隐式连接

```sql
select q.device_id,
    q.question_id,
    q.result
from user_profile as u, 
    question_practice_detail as q
where q.device_id=u.device_id
    and u.university='浙江大学'
```

法2 显式连接

```sql
select q.device_id,
    q.question_id,
    q.result
from user_profile as u 
join question_practice_detail as q
on q.device_id=u.device_id
    and u.university='浙江大学'
```

法3 子查询

```sql
select q.device_id,
    q.question_id,
    q.result
from question_practice_detail as q
where q.device_id in(
    select device_id
    from user_profile as u
    where university='浙江大学'
)
```

### Join-group

**统计每个学校的答过题的用户的平均答题数**：运营想要了解每个学校答过题的用户平均答题数量情况，请你取出数据。

用户信息表 user_profile，其中device_id指终端编号（认为每个用户有唯一的一个终端），gender指性别，age指年龄，university指用户所在的学校，gpa是该用户平均学分绩点，active_days_within_30是30天内的活跃天数。

| device_id | gender | age  | university | gpa  | active_days_within_30 |
| --------- | ------ | ---- | ---------- | ---- | --------------------- |
| 2138      | male   | 21   | 北京大学   | 3.4  | 7                     |
| 3214      | male   | NULL | 复旦大学   | 4    | 15                    |
| 6543      | female | 20   | 北京大学   | 3.2  | 12                    |
| 2315      | female | 23   | 浙江大学   | 3.6  | 5                     |
| 5432      | male   | 25   | 山东大学   | 3.8  | 20                    |
| 2131      | male   | 28   | 山东大学   | 3.3  | 15                    |
| 4321      | male   | 28   | 复旦大学   | 3.6  | 9                     |

第一行表示:用户的常用信息为使用的设备id为2138，性别为男，年龄21岁，北京大学，gpa为3.4，在过去的30天里面活跃了7天

**答题情况明细表** **question_practice_detail，其中question_id是题目编号，result是答题结果。**

| device_id | question_id | result |
| --------- | ----------- | ------ |
| 2138      | 111         | wrong  |
| 3214      | 112         | wrong  |
| 3214      | 113         | wrong  |
| 6543      | 111         | right  |
| 2315      | 115         | right  |
| 2315      | 116         | right  |
| 2315      | 117         | wrong  |
| 5432      | 118         | wrong  |
| 5432      | 112         | wrong  |
| 2131      | 114         | right  |
| 5432      | 113         | wrong  |

第一行表示用户的常用信息为使用的设备id为2138，在question_id为111的题目上，回答错误

请你写SQL查找每个学校用户的平均答题数目(说明：某学校用户平均答题数量计算方式为该学校用户答题总次数除以答过题的不同用户个数)根据示例，你的查询应返回以下结果（结果保留4位小数），注意：**结果按照university升序排序！！！**

| university | avg_answer_cnt |
| ---------- | -------------- |
| 北京大学   | 1.0000         |
| 复旦大学   | 2.0000         |
| 山东大学   | 2.0000         |
| 浙江大学   | 3.0000         |

解释:

第一行：北京大学总共有2个用户，2138和6543，2个用户在**question_practice_detail里面答了2题，平均答题数目为2/2=1.0000**

```sql
select u.university,
    count(q.question_id)
    /count(distinct q.device_id)
    as avg_answer_cnt
from question_practice_detail as q
join user_profile as u
	on q.device_id=u.device_id
group by university
order by university
```

### 三张表-1

**统计每个学校各难度的用户平均刷题数**：运营想要计算一些**参加了答题**的不同学校、不同难度的用户平均答题量，请你写SQL取出相应数据

用户信息表：user_profile

| id   | device_id | gender | age  | university | gpa  | active_days_within_30 | question_cnt | answer_cnt |
| ---- | --------- | ------ | ---- | ---------- | ---- | --------------------- | ------------ | ---------- |
| 1    | 2138      | male   | 21   | 北京大学   | 3.4  | 7                     | 2            | 12         |
| 2    | 3214      | male   |      | 复旦大学   | 4    | 15                    | 5            | 25         |
| 3    | 6543      | female | 20   | 北京大学   | 3.2  | 12                    | 3            | 30         |
| 4    | 2315      | female | 23   | 浙江大学   | 3.6  | 5                     | 1            | 2          |
| 5    | 5432      | male   | 25   | 山东大学   | 3.8  | 20                    | 15           | 70         |
| 6    | 2131      | male   | 28   | 山东大学   | 3.3  | 15                    | 7            | 13         |
| 7    | 4321      | male   | 28   | 复旦大学   | 3.6  | 9                     | 6            | 52         |

第一行表示:id为1的用户的常用信息为使用的设备id为2138，性别为男，年龄21岁，北京大学，gpa为3.4，在过去的30天里面活跃了7天，发帖数量为2，回答数量为12

题库练习明细表：question_practice_detail

| id   | device_id | question_id | result |
| ---- | --------- | ----------- | ------ |
| 1    | 2138      | 111         | wrong  |
| 2    | 3214      | 112         | wrong  |
| 3    | 3214      | 113         | wrong  |
| 4    | 6543      | 111         | right  |
| 5    | 2315      | 115         | right  |
| 6    | 2315      | 116         | right  |
| 7    | 2315      | 117         | wrong  |
| 8    | 5432      | 117         | wrong  |
| 9    | 5432      | 112         | wrong  |
| 10   | 2131      | 113         | right  |
| 11   | 5432      | 113         | wrong  |
| 12   | 2315      | 115         | right  |
| 13   | 2315      | 116         | right  |
| 14   | 2315      | 117         | wrong  |
| 15   | 5432      | 117         | wrong  |
| 16   | 5432      | 112         | wrong  |
| 17   | 2131      | 113         | right  |
| 18   | 5432      | 113         | wrong  |
| 19   | 2315      | 117         | wrong  |
| 20   | 5432      | 117         | wrong  |
| 21   | 5432      | 112         | wrong  |
| 22   | 2131      | 113         | right  |
| 23   | 5432      | 113         | wrong  |

第一行表示:id为1的用户的常用信息为使用的设备id为2138，在question_id为111的题目上，回答错误

表：question_detail

| id   | question_id | difficult_level |
| ---- | ----------- | --------------- |
| 1    | 111         | hard            |
| 2    | 112         | medium          |
| 3    | 113         | easy            |
| 4    | 115         | easy            |
| 5    | 116         | medium          |
| 6    | 117         | easy            |

第一行表示: 题目id为111的难度为hard

请你写一个SQL查询，计算不同学校、不同难度的用户平均答题量，根据示例，你的查询应返回以下结果(结果在小数点位数保留4位，4位之后四舍五入)：

| university | difficult_level | avg_answer_cnt |
| ---------- | --------------- | -------------- |
| 北京大学   | hard            | 1.0000         |
| 复旦大学   | easy            | 1.0000         |
| 复旦大学   | medium          | 1.0000         |
| 山东大学   | easy            | 4.5000         |
| 山东大学   | medium          | 3.0000         |
| 浙江大学   | easy            | 5.0000         |
| 浙江大学   | medium          | 2.0000         |

解释：

第一行：北京大学有设备id为2138，6543这2个用户，这2个用户在question_practice_detail表下都只有一条答题记录，且答题题目是111，从question_detail可以知道这个题目是hard，故 北京大学的用户答题为hard的题目平均答题为2/2=1.0000

```sql
select up.university,
    qd.difficult_level,
    count(qpd.id)
    /count(distinct up.device_id)
    as avg_answer_cnt
from user_profile as up
join question_practice_detail as qpd
	on up.device_id=qpd.device_id
join question_detail as qd
	on qpd.question_id=qd.question_id
group by university, difficult_level
order by university, difficult_level
```

### 三张表-2

**统计每个用户的平均刷题数**：运营想要查看**参加了答题**的山东大学的用户在不同难度下的平均答题题目数，请取出相应数据

用户信息表：user_profile

| id   | device_id | gender | age  | university | gpa  | active_days_within_30 | question_cnt | answer_cnt |
| ---- | --------- | ------ | ---- | ---------- | ---- | --------------------- | ------------ | ---------- |
| 1    | 2138      | male   | 21   | 北京大学   | 3.4  | 7                     | 2            | 12         |
| 2    | 3214      | male   | NULL | 复旦大学   | 4    | 15                    | 5            | 25         |
| 3    | 6543      | female | 20   | 北京大学   | 3.2  | 12                    | 3            | 30         |
| 4    | 2315      | female | 23   | 浙江大学   | 3.6  | 5                     | 1            | 2          |
| 5    | 5432      | male   | 25   | 山东大学   | 3.8  | 20                    | 15           | 70         |
| 6    | 2131      | male   | 28   | 山东大学   | 3.3  | 15                    | 7            | 13         |
| 7    | 4321      | male   | 28   | 复旦大学   | 3.6  | 9                     | 6            | 52         |

第一行表示:id为1的用户的常用信息为使用的设备id为2138，性别为男，年龄21岁，北京大学，gpa为3.4，在过去的30天里面活跃了7天，发帖数量为2，回答数量为12

题库练习明细表：question_practice_detail

| id   | device_id | question_id | result |
| ---- | --------- | ----------- | ------ |
| 1    | 2138      | 111         | wrong  |
| 2    | 3214      | 112         | wrong  |
| 3    | 3214      | 113         | wrong  |
| 4    | 6534      | 111         | right  |
| 5    | 2315      | 115         | right  |
| 6    | 2315      | 116         | right  |
| 7    | 2315      | 117         | wrong  |
| 8    | 5432      | 117         | wrong  |
| 9    | 5432      | 112         | wrong  |
| 10   | 2131      | 113         | right  |
| 11   | 5432      | 113         | wrong  |
| 12   | 2315      | 115         | right  |
| 13   | 2315      | 116         | right  |
| 14   | 2315      | 117         | wrong  |
| 15   | 5432      | 117         | wrong  |
| 16   | 5432      | 112         | wrong  |
| 17   | 2131      | 113         | right  |
| 18   | 5432      | 113         | wrong  |
| 19   | 2315      | 117         | wrong  |
| 20   | 5432      | 117         | wrong  |
| 21   | 5432      | 112         | wrong  |
| 22   | 2131      | 113         | right  |
| 23   | 5432      | 113         | wrong  |

第一行表示:id为1的用户的常用信息为使用的设备id为2138，在question_id为111的题目上，回答错误

表：question_detail

| id   | question_id | difficult_level |
| ---- | ----------- | --------------- |
| 1    | 111         | hard            |
| 2    | 112         | medium          |
| 3    | 113         | easy            |
| 4    | 115         | easy            |
| 5    | 116         | medium          |
| 6    | 117         | easy            |

第一行表示: 题目id为111的难度为hard

请你写一个SQL查询，计算山东、不同难度的用户平均答题量，根据示例，你的查询应返回以下结果(结果在小数点位数保留4位，4位之后四舍五入)：

| university | difficult_level | avg_answer_cnt |
| ---------- | --------------- | -------------- |
| 山东大学   | easy            | 4.5000         |
| 山东大学   | medium          | 3.0000         |

山东大学有设备id为5432和2131这2个用户，这2个用户总共在question_practice_detail表下有12条答题记录，且答题题目是112，113，117，且数目分别为3，6，3，从question_detail可以知道题目难度分别为medium,easy,easy，所以，easy共有9个，故easy的题目平均答题量= 9(easy=9)/2 (device_id=3214 or device_id=5432) =4.5000，medium共有3个，medium的答题只有device_id=5432的用户，故medium的题目平均答题量= 3(medium=9)/1 ( device_id=5432) =3.0000

法1

```sql
select university,
    difficult_level,
    count(qpd.id)/count(distinct qpd.device_id)
    as avg_answer_cnt
from user_profile as u
join question_practice_detail as qpd
    on u.device_id=qpd.device_id
join question_detail as qd
    on qpd.question_id=qd.question_id
group by university,difficult_level
	having university='山东大学'
```

法2

```sql
select university,
    difficult_level,
    count(qpd.id)/count(distinct qpd.device_id)
    as avg_answer_cnt
from user_profile as u
join question_practice_detail as qpd
    on u.device_id=qpd.device_id
join question_detail as qd
    on qpd.question_id=qd.question_id
where university='山东大学'
group by university,difficult_level
```

## Union

**查找山东大学或者性别为男生的信息**：现在运营想要分别查看学校为山东大学或者性别为男性的用户的device_id、gender、age和gpa数据，请取出相应结果，**结果不去重**。

> `UNION ALL` 的意思是**“将两个或多个查询的结果垂直地合并在一起，并且保留所有行，不过滤任何重复的行”**。

```sql
select device_id, gender, age, gpa
from user_profile
where university='山东大学'

union all

select device_id, gender, age, gpa
from user_profile
where gender='male'
```

## Case

**计算25岁以上和以下的用户数量**：现在运营想要将用户划分为25岁以下和25岁及以上两个年龄段，分别查看这两个年龄段用户数量

**本题注意：age为null 也记为 25岁以下**

```sql
select
    case
        when age<25 or age is null 
            then '25岁以下'
        else '25岁及以上'
    end as age_cut,
    count(*) as number
from user_profile
group by age_cut
```

**查看不同年龄段的用户明细**：现在运营想要将用户划分为**20岁以下，20-24岁，25岁及以上**三个年龄段，分别查看不同年龄段用户的明细情况，请取出相应数据。（注：若**年龄为空**请返回**其他**。）

```sql
select
    device_id,
    gender,
    case
        when age<20 then '20岁以下'
        when age<25 then '20-24岁'
        when age>=25 then '25岁及以上'
        else '其他'
    end as age_cut
from user_profile
```

## Day-Month-Year

**计算用户8月每天的练题数量**：现在运营想要计算出**2021年8月每天用户练习题目的数量**，请取出相应数据。

**示例：question_practice_detail**

| id   | device_id | question_id | result | date       |
| ---- | --------- | ----------- | ------ | ---------- |
| 1    | 2138      | 111         | wrong  | 2021-05-03 |
| 2    | 3214      | 112         | wrong  | 2021-05-09 |
| 3    | 3214      | 113         | wrong  | 2021-06-15 |
| 4    | 6543      | 111         | right  | 2021-08-13 |
| 5    | 2315      | 115         | right  | 2021-08-13 |
| 6    | 2315      | 116         | right  | 2021-08-14 |
| 7    | 2315      | 117         | wrong  | 2021-08-15 |
| 8    | 3214      | 112         | wrong  | 2021-05-09 |
| 9    | 3214      | 113         | wrong  | 2021-08-15 |
| 10   | 6543      | 111         | right  | 2021-08-13 |
| 11   | 2315      | 115         | right  | 2021-08-13 |
| 12   | 2315      | 116         | right  | 2021-08-14 |
| 13   | 2315      | 117         | wrong  | 2021-08-15 |
| 14   | 3214      | 112         | wrong  | 2021-08-16 |
| 15   | 3214      | 113         | wrong  | 2021-08-18 |
| 16   | 6543      | 111         | right  | 2021-08-13 |

根据示例，你的查询应返回以下结果：

| day  | question_cnt |
| ---- | ------------ |
| 13   | 5            |
| 14   | 2            |
| 15   | 3            |
| 16   | 1            |
| 18   | 1            |

```sql
select
    day(date) as day,
    count(*) as question_cnt
from question_practice_detail
where
    year(date)='2021'
    and month(date)='8'
group by day
```

### date_add

**计算用户的平均次日留存率**：现在运营想要查看用户在某天刷题后第二天还会再来刷题的留存率。请你取出相应数据。

**示例：question_practice_detail**

| id   | device_id | question_id | result | date       |
| ---- | --------- | ----------- | ------ | ---------- |
| 1    | 2138      | 111         | wrong  | 2021-05-03 |
| 2    | 3214      | 112         | wrong  | 2021-05-09 |
| 3    | 3214      | 113         | wrong  | 2021-06-15 |
| 4    | 6543      | 111         | right  | 2021-08-13 |
| 5    | 2315      | 115         | right  | 2021-08-13 |
| 6    | 2315      | 116         | right  | 2021-08-14 |
| 7    | 2315      | 117         | wrong  | 2021-08-15 |
| 8    | 3214      | 112         | wrong  | 2021-05-09 |
| 9    | 3214      | 113         | wrong  | 2021-08-15 |
| 10   | 6543      | 111         | right  | 2021-08-13 |
| 11   | 2315      | 115         | right  | 2021-08-13 |
| 12   | 2315      | 116         | right  | 2021-08-14 |
| 13   | 2315      | 117         | wrong  | 2021-08-15 |
| 14   | 3214      | 112         | wrong  | 2021-08-16 |
| 15   | 3214      | 113         | wrong  | 2021-08-18 |
| 16   | 6543      | 111         | right  | 2021-08-13 |

根据示例，你的查询应返回以下结果：

| avg_ret |
| ------- |
| 0.3000  |

```sql
select
    round(count(t2.date)/count(t1.date),4) as avg_ret
from
# distinct 作用于后面跟着的所有列，将其作为整体去重，只有所有列都相同才会被去掉
    (select distinct 
         device_id, date
    from question_practice_detail)
    as t1
    left join
    (select distinct 
         device_id, date
    from question_practice_detail)
    as t2
    on t1.device_id=t2.device_id
        and t2.date=date_add(t1.date, interval 1 day);
```

## SUBSTRING_INDEX

### 标准语法

```
SUBSTRING_INDEX(str, delim, count)
```

**参数解释:**

1. `str`: 原始字符串。

2. `delim`: 你用作“剪刀”的分隔符。可以是一个字符（如 `','`）或多个字符（如 `'--'`）。

3. `count`: 计数器，这是最核心的参数，它的正负决定了行为：
    - **如果 `count` 是正数（比如 `N`）**: 函数会从**左边**开始数，找到第 `N` 个分隔符，然后**返回该分隔符左边所有的内容**。
    - **如果 `count` 是负数（比如 `-N`）**: 函数会从**右边**开始数，找到第 `N` 个分隔符，然后**返回该分隔符右边所有的内容**。

**统计每种性别的人数**：现在运营举办了一场比赛，收到了一些参赛申请，表数据记录形式如下所示，现在运营想要统计每个性别的用户分别有多少参赛者，请取出相应结果

示例：user_submit

| device_id | profile              | blog_url            |
| --------- | -------------------- | ------------------- |
| 2138      | 180cm,75kg,27,male   | http:/url/bigboy777 |
| 3214      | 165cm,45kg,26,female | http:/url/kittycc   |
| 6543      | 178cm,65kg,25,male   | http:/url/tiger     |
| 4321      | 171cm,55kg,23,female | http:/url/uhksd     |
| 2131      | 168cm,45kg,22,female | http:/urlsydney     |

根据示例，你的查询应返回以下结果：

| gender | number |
| ------ | ------ |
| male   | 2      |
| female | 3      |

法1 Case-When-End

```sql
select
    case 
        when profile like '%female'
        then 'female'
        else 'male'
    end as gender,
    count(*) as number
from user_submit
group by gender
```

法2 Substring_index

```sql
select
    substring_index(profile,',',-1)
        as gender,
    count(*) as number
from user_submit
group by gender;
```

---

**提取博客URL中的用户名**：对于申请参与比赛的用户，blog_url字段中url字符后的字符串为用户个人博客的用户名，现在运营想要把用户的个人博客用户字段提取出单独记录为一个新的字段，请取出所需数据。

```sql
select
    device_id,
    # 提取最后一个/后的所有字符
    substring_index(blog_url,'/',-1)
        as user_name
from user_submit
```

---

**截取出年龄**：现在运营举办了一场比赛，收到了一些参赛申请，表数据记录形式如下所示，现在运营想要统计每个年龄的用户分别有多少参赛者，请取出相应结果

```sql
select
    substring_index(
        substring_index(profile,',',-2),
        ',',
        1
    ) as age,
    count(*) as number
from user_submit
group by age
```

## over

**找出每个学校GPA最低的同学**：现在运营想要找到每个学校gpa最低的同学来做调研，请你取出每个学校的最低gpa。


示例：user_profile

| id   | device_id | gender | age  | university | gpa  | active_days_within_30 | question_cnt | answer_cnt |
| ---- | --------- | ------ | ---- | ---------- | ---- | --------------------- | ------------ | ---------- |
| 1    | 2138      | male   | 21   | 北京大学   | 3.4  | 7                     | 2            | 12         |
| 2    | 3214      | male   |      | 复旦大学   | 4    | 15                    | 5            | 25         |
| 3    | 6543      | female | 20   | 北京大学   | 3.2  | 12                    | 3            | 30         |
| 4    | 2315      | female | 23   | 浙江大学   | 3.6  | 5                     | 1            | 2          |
| 5    | 5432      | male   | 25   | 山东大学   | 3.8  | 20                    | 15           | 70         |
| 6    | 2131      | male   | 28   | 山东大学   | 3.3  | 15                    | 7            | 13         |
| 7    | 4321      | female | 26   | 复旦大学   | 3.6  | 9                     | 6            | 52         |

根据示例，你的查询结果应参考以下格式，输出结果按university升序排序：

| device_id | university | gpa  |
| --------- | ---------- | ---- |
| 6543      | 北京大学   | 3.2  |
| 4321      | 复旦大学   | 3.6  |
| 2131      | 山东大学   | 3.3  |
| 2315      | 浙江大学   | 3.6  |

```sql
select
    device_id,
    university,
    gpa
from(
    select
        device_id,
        university,
        gpa,
        row_number() over (
            partition by university
            order by gpa
        ) as rnk # rank 是关键字，避免使用
    	# 窗口函数，在不改变原有行数的情况下，为每一行数据添加一个计算出来的列（这里新列命名为 rnk）
    from user_profile
) as ranked_users # FROM 子句中的子查询必须有别名
where rnk=1
order by university
```

### COALESCE - SUM

**`COALESCE` 函数会返回其参数列表中的第一个非 `NULL` 的值。**

它会从左到右依次检查你提供给它的每个参数，一旦遇到第一个不是 `NULL` 的值，就立刻返回这个值，并停止向右检查。

**统计复旦用户8月练题情况**： 现在运营想要了解复旦大学的每个用户在8月份练习的总题目数和回答正确的题目数情况，请取出相应明细数据，对于在8月份没有练习过的用户，答题数结果返回0.

示例：用户信息表user_profile

| id   | device_id | gender | age  | university | gpa  | active_days_within_30 |
| ---- | --------- | ------ | ---- | ---------- | ---- | --------------------- |
| 1    | 2138      | male   | 21   | 北京大学   | 3.4  | 7                     |
| 2    | 3214      | male   |      | 复旦大学   | 4.0  | 15                    |
| 3    | 6543      | female | 20   | 北京大学   | 3.2  | 12                    |
| 4    | 2315      | female | 23   | 浙江大学   | 3.6  | 5                     |
| 5    | 5432      | male   | 25   | 山东大学   | 3.8  | 20                    |
| 6    | 2131      | male   | 28   | 山东大学   | 3.3  | 15                    |
| 7    | 4321      | female | 28   | 复旦大学   | 3.6  | 9                     |

示例：question_practice_detail

| id   | device_id | question_id | result | date       |
| ---- | --------- | ----------- | ------ | ---------- |
| 1    | 2138      | 111         | wrong  | 2021-05-03 |
| 2    | 3214      | 112         | wrong  | 2021-05-09 |
| 3    | 3214      | 113         | wrong  | 2021-06-15 |
| 4    | 6543      | 111         | right  | 2021-08-13 |
| 5    | 2315      | 115         | right  | 2021-08-13 |
| 6    | 2315      | 116         | right  | 2021-08-14 |
| 7    | 2315      | 117         | wrong  | 2021-08-15 |
| ……   |           |             |        |            |

根据示例，你的查询应返回以下结果：

| device_id | university | question_cnt | right_question_cnt |
| --------- | ---------- | ------------ | ------------------ |
| 3214      | 复旦大学   | 3            | 0                  |
| 4321      | 复旦大学   | 0            | 0                  |

```sql
SELECT
    up.device_id,
    up.university,
    COUNT(qpd.question_id) AS question_cnt,
    -- 若SUM返回NULL，COALESCE返回0
    COALESCE(
        SUM(
            CASE
                WHEN qpd.result = 'right'
                THEN 1 ELSE 0
            END
        ),
        0
    ) AS right_question_cnt
FROM
    user_profile as up
LEFT JOIN
    question_practice_detail as qpd
    ON up.device_id = qpd.device_id
        AND MONTH(qpd.date) = 8
WHERE
    up.university = '复旦大学'
GROUP BY
    up.device_id, up.university;
```

**浙大不同难度题目的正确率**

：现在运营想要了解**浙****江大学的用户****在不同难度题目下答题的正确率情况**，请取出相应数据，并按照准确率升序输出。

示例： user_profile

| id   | device_id | gender | age  | university | gpa  | active_days_within_30 | question_cnt | answer_cnt |
| ---- | --------- | ------ | ---- | ---------- | ---- | --------------------- | ------------ | ---------- |
| 1    | 2138      | male   | 21   | 北京大学   | 3.4  | 7                     | 2            | 12         |
| 2    | 3214      | male   |      | 复旦大学   | 4    | 15                    | 5            | 25         |
| 3    | 6543      | female | 20   | 北京大学   | 3.2  | 12                    | 3            | 30         |
| 4    | 2315      | female | 23   | 浙江大学   | 3.6  | 5                     | 1            | 2          |
| 5    | 5432      | male   | 25   | 山东大学   | 3.8  | 20                    | 15           | 70         |
| 6    | 2131      | male   | 28   | 山东大学   | 3.3  | 15                    | 7            | 13         |
| 7    | 4321      | female | 26   | 复旦大学   | 3.6  | 9                     | 6            | 52         |

示例： question_practice_detail

| id   | device_id | question_id | result |
| ---- | --------- | ----------- | ------ |
| 1    | 2138      | 111         | wrong  |
| 2    | 3214      | 112         | wrong  |
| 3    | 3214      | 113         | wrong  |
| 4    | 6543      | 111         | right  |
| 5    | 2315      | 115         | right  |
| 6    | 2315      | 116         | right  |
| 7    | 2315      | 117         | wrong  |

示例： question_detail

| question_id | difficult_level |
| ----------- | --------------- |
| 111         | hard            |
| 112         | medium          |
| 113         | easy            |
| 115         | easy            |
| 116         | medium          |
| 117         | easy            |

根据示例，你的查询应返回以下结果：

| difficult_level | correct_rate |
| --------------- | ------------ |
| easy            | 0.5000       |
| medium          | 1.0000       |

```sql
select
    qd.difficult_level,
    sum(
        case
            when qpd.result='right'
            then 1 else 0
        end
    ) / count(qpd.question_id)
    as correct_rate
from
    user_profile as u
join
    question_practice_detail as qpd
    on u.device_id=qpd.device_id
        and u.university='浙江大学'
join
    question_detail as qd
    on qpd.question_id=qd.question_id
group by 
    qd.difficult_level
order by
    correct_rate asc
```

## order by

> 牛客的题号顺序不太合理啊

**查找后排序**：现在运营想要取出用户信息表中的用户设备ID和用户年龄，请取出相应数据，并按照年龄升序排序。

```sql
select device_id,age
from user_profile
order by age asc
```

**查找后多列排序**：现在运营想要取出用户信息表中的device_id、年龄和gpa数据，并先按照gpa升序排序，再按照年龄升序排序输出，请取出相应数据。

```sql
select device_id,gpa,age
from user_profile
order by gpa,age
```

**查找后降序排列**

```sql
select device_id,gpa,age
from user_profile
order by gpa desc,age desc
```

## REGEXP

**电话号码格式校验**：在一张contacts表中，存储了用户的联系信息。请查询出所有符合以下条件的电话号码，并按id升序输出所有字段：

1. 电话号码必须是 10 位数字。
2. 电话号码的第一位不能以 0 开头。
3. 电话号码的格式可以是连续的 10 位数字，或以-分隔的格式（如123-456-7890）。

### 表contacts

| id   | name    | phone_number |
| :--- | :------ | :----------- |
| 1    | Alice   | 1234567890   |
| 2    | Bob     | 0123456789   |
| 3    | Charlie | 123-456-7890 |
| 4    | David   | 123-4567-890 |
| 5    | Eve     | 9876543210   |

### 输出

| id   | name    | phone_number |
| :--- | :------ | :----------- |
| 1    | Alice   | 1234567890   |
| 3    | Charlie | 123-456-7890 |
| 5    | Eve     | 9876543210   |

```sql
select
    id, name, phone_number
from
    contacts
where 
    phone_number
    REGEXP '^[1-9][0-9]{9}$|^[1-9][0-9]{2}-[0-9]{3}-[0-9]{4}$'
```

## Over2

**计算每日累计利润**

在一张daily_profits表中，存储了公司每天的利润记录。请计算每一种产品每一天的累计利润，并按profit_date升序输出所有字段。

具体要求如下：

1. 计算每一天的累计利润。
2. 输出结果按profit_date升序排列。

daily_profits表

| profit_id | profit_date | profit |
| :-------- | :---------- | :----- |
| 1         | 2024-01-01  | 100.00 |
| 2         | 2024-01-02  | 150.00 |
| 3         | 2024-01-03  | 200.00 |
| 4         | 2024-01-04  | 250.00 |
| 5         | 2024-01-05  | 300.00 |

输出示例表格

| profit_id | profit_date | profit | cumulative_profit |
| :-------- | :---------- | :----- | :---------------- |
| 1         | 2024-01-01  | 100.00 | 100.00            |
| 2         | 2024-01-02  | 150.00 | 250.00            |
| 3         | 2024-01-03  | 200.00 | 450.00            |
| 4         | 2024-01-04  | 250.00 | 700.00            |
| 5         | 2024-01-05  | 300.00 | 1000.00           |

```sql
select *,
    sum(profit) over(order by profit_date)
        as cumulative_profit
from daily_profits
```

## abs ceil floor round

**基本数学函数**

在一张 numbers 表中，存储了一些数值。请使用 SQL 的基本数学函数，计算每个数值的绝对值、向上取整、向下取整、四舍五入到一位小数，并输出这些计算结果。
具体要求如下：

1. 计算每个数值的绝对值。
2. 计算每个数值的向上取整值。
3. 计算每个数值的向下取整值。
4. 计算每个数值四舍五入到一位小数。

输出结果按 id 升序排列。

numbers 表

| id   | value |
| :--- | :---- |
| 1    | 3.14  |
| 2    | -2.71 |
| 3    | 1.41  |
| 4    | -5.67 |
| 5    | 0.99  |

输出示例表格

| id   | value | absolute_value | ceiling_value | floor_value | rounded_value |
| :--- | :---- | :------------- | :------------ | :---------- | :------------ |
| 1    | 3.14  | 3.14           | 4             | 3           | 3.1           |
| 2    | -2.71 | 2.71           | -2            | -3          | -2.7          |
| 3    | 1.41  | 1.41           | 2             | 1           | 1.4           |
| 4    | -5.67 | 5.67           | -5            | -6          | -5.7          |
| 5    | 0.99  | 0.99           | 1             | 0           | 1.0           |

```sql
select *,
    abs(value) as absolute_value,
    ceil(value) as ceiling_value, #向上取整
    floor(value) as floor_value, #向下取整
    round(value,1) as rounded_value
from numbers
```

