---
date: 2022-11-29
category: 基础进阶
tag:

- JAVA

---

# JDK 8之前日期时间API

## 获取系统当前时间

System类中的`currentTimeMillis()`
> 返回当前时间与1970年1月1日0时0分0秒之间以毫秒为单位的时间差。称为时间戳

## java.util.Date类与java.sql.Date类

```text
java.util.Date类
	|---java.sql.Date类
```

### 两个构造器的使用

1. 构造器一：Date()：创建一个对应当前时间的Date对象
2. 构造器二：创建指定毫秒数的Date对象

### 两个方法的使用

1. toString():显示当前的年、月、日、时、分、秒
2. getTime():获取当前Date对象对应的毫秒数。（时间戳）

### java.sql.Date对应着数据库中的日期类型的变量

```java
	@Test
	public void test2(){
		//构造器一：Date()：创建一个对应当前时间的Date对象
		Date date1 = new Date();
		System.out.println(date1.toString());//Sat Feb 16 16:35:31 GMT+08:00 2019
	
		System.out.println(date1.getTime());//1550306204104
	
		//构造器二：创建指定毫秒数的Date对象
		Date date2 = new Date(155030620410L);
		System.out.println(date2.toString());
	
		//创建java.sql.Date对象
		java.sql.Date date3 = new java.sql.Date(35235325345L);
		System.out.println(date3);//1971-02-13
	
		//如何将java.util.Date对象转换为java.sql.Date对象
		//情况一：
		//        Date date4 = new java.sql.Date(2343243242323L);
		//        java.sql.Date date5 = (java.sql.Date) date4;
		//情况二：
		Date date6 = new Date();
		java.sql.Date date7 = new java.sql.Date(date6.getTime());
    }
```

## java.text.SimpleDataFormat类

SimpleDateFormat对日期Date类的格式化和解析

### 两个操作

1. 格式化：日期 --->字符串
2. 解析：格式化的逆过程，字符串 ---> 日期

### SimpleDateFormat的实例化:new + 构造器

```java
// SimpleDateFormat sdf1 = new SimpleDateFormat("yyyyy.MMMMM.dd GGG hh:mm aaa");
SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
// 格式化
String format1 = sdf1.format(date);
System.out.println(format1);//2019-02-18 11:48:27
// 解析:要求字符串必须是符合SimpleDateFormat识别的格式(通过构造器参数体现),
// 否则，抛异常
Date date2 = sdf1.parse("2020-02-18 11:48:27");
System.out.println(date2);
```

## Calendar类：日历类、抽象类

### 实例化

1. 方式一：创建其子类GregorianCalendar的对象
2. 方式二：调用其静态方法getInstance()

```java
Calendar calendar = Calendar.getInstance();
// System.out.println(calendar.getClass());
```

### 常用方法

```java
// get()
int days = calendar.get(Calendar.DAY_OF_MONTH);
System.out.println(days);
System.out.println(calendar.get(Calendar.DAY_OF_YEAR));

// set()
// calendar可变性
calendar.set(Calendar.DAY_OF_MONTH,22);
days = calendar.get(Calendar.DAY_OF_MONTH);
System.out.println(days);

// add()
calendar.add(Calendar.DAY_OF_MONTH,-3);
days = calendar.get(Calendar.DAY_OF_MONTH);
System.out.println(days);

// getTime():日历类---> Date
Date date = calendar.getTime();
System.out.println(date);

// setTime():Date ---> 日历类
Date date1 = new Date();
calendar.setTime(date1);
days = calendar.get(Calendar.DAY_OF_MONTH);
System.out.println(days);
```
