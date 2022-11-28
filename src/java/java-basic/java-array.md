---
date: 2022-11-19
category: 基础
tag:

- JAVA

---

# 数组

## 概述

### 理解

::: tip 数组(Array)
是多个相同类型数据一定顺序排列的集合，并使用一个名字命名， 并通过编号的方式对这些数据进行统一管理。
:::

### 概念

`数组名` `元素` `角标` `下标` `索引` `数组的长度(元素的个数)`

### 特点

1. 数组是序排列的
2. 数组属于引用数据类型的变量。数组的元素，既可以是基本数据类型，也可以是引用数据类型
3. 创建数组对象会在内存中开辟一整块连续的空间
4. 数组的长度一旦确定，就不能修改。

### 分类

1. 照维数：`一维数组` `二维数组` ...
2. 照数组元素的类型：`基本数据类型元素的数组` `引用数据类型元素的数组`

### 数据结构

1. 数据与数据之间的逻辑关系：`集合` `一对一` `一对多` `多对多`
2. 数据的存储结构：
	- 线性表：`顺序表`（比如：数组） `链表` `栈` `队列`
	- 树形结构：`二叉树`
	- 图形结构

## 一维数组

### 声明与初始化

正确的方式

```java 
//声明
int num;
//初始化
num = 10;
//声明 + 初始化
int id = 1001;
//声明
int[] ids;
//1.1 静态初始化:数组的初始化和数组元素的赋值操作同时进行
ids = new int[]{1001,1002,1003,1004};
//1.2动态初始化:数组的初始化和数组元素的赋值操作分开进行
String[] names = new String[5];
//类型推断
int[] arr4 = {1,2,3,4,5};
```

错误的方式

```java
int[] arr1 = new int[];
int[5] arr2 = new int[5];
int[] arr3 = new int[3]{1,2,3};
```

### 元素的引用

数组的角标（或索引）从==0==开始的，到数组的==长度-1==结束。

```java
names[0] = "王铭";
names[1] = "王赫";
names[2] = "张学良";
names[3] = "孙居龙";
names[4] = "王宏志";
```

### 属性

```java
System.out.println(names.length);
System.out.println(ids.length);
```

::: tip 说明
数组一旦初始化，其长度就是确定的。arr.length
数组长度一旦确定，就不可修改。
:::

### 遍历

```java
for(int i = 0; i < names.length; i++) {
    System.out.println(names[i]);
}
```

### 默认初始化值

- 数组元素是整型：`0`
- 数组元素是浮点型：`0.0`
- 数组元素是char型：`0`或`\u0000`，而非`'0'`
- 数组元素是boolean型：`false`
- 数组元素是引用数据类型：`null`

## 二维数组

### 如何理解

::: tip
数组属于引用数据类型
数组的元素也可以是引用数据类型
一个一维数组A的元素如果还是一个一维数组类型的，则，此数组A称为二维数组。
:::

### 声明与初始化

正确的方式

```java
//一维数组
int[] arr = new int[]{1,2,3};
//静态初始化
int[][] arr1 = new int[][]{{1,2,3},{4,5},{6,7,8}};
//动态初始化1
String[][] arr2 = new String[3][2];
//动态初始化2
String[][] arr3 = new String[3][];
//也是正确的写法：
int[] arr4[] = new int[][]{{1,2,3},{4,5,9,10},{6,7,8}};
//类型推断
int[] arr5[] = {{1,2,3},{4,5},{6,7,8}};
```

错误的方式：

```java
String[][] arr4 = new String[][4];
String[4][3] arr5 = new String[][];
int[][] arr6 = new int[4][3]{{1,2,3},{4,5},{6,7,8}};
```

### 如何调用

```java
System.out.println(arr1[0][1]);
System.out.println(arr2[1][1]);
arr3[1] = new String[4];
System.out.println(arr3[1][0]);
System.out.println(arr3[0]);
```

### 属性

```java
System.out.println(arr4.length);
System.out.println(arr4[0].length);
System.out.println(arr4[1].length);
```

### 遍历

```java
for(int i = 0;i < arr4.length;i++){
	for(int j = 0;j < arr4[i].length;j++){
        System.out.print(arr4[i][j] + "  ");
    }
    System.out.println();
}
```

### 默认初始化值

::: tip 规定
二维数组分为外层数组的元素，内层数组的元素

```java
int[][] arr = new int[4][3];
// 外层元素
arr[0],arr[1]等
// 内层元素
arr[0][0],arr[1][2]等
```

:::

- 方式一

```java
int[][] arr = new int[4][3];
```

外层元素的初始化值为：`地址值`

内层元素的初始化值为：`与一维数组初始化情况相同`

- 方式二

```java
int[][] arr = new int[4][];
```

外层元素的初始化值为：`null`

内层元素的初始化值为：`不能调用，否则报错`

## Arrays工具类

### 理解

1. 定义在java.util包下
2. Arrays:提供了很多操作数组的方法

### 使用

- 判断两个数组是否相等:`boolean equals(int[] a,int[] b)`

```java
int[] arr1 = new int[]{1,2,3,4};
int[] arr2 = new int[]{1,3,2,4};
boolean isEquals = Arrays.equals(arr1, arr2);
System.out.println(isEquals);
```

- 输出数组信息:`String toString(int[] a)`

```java
System.out.println(Arrays.toString(arr1));
```

- 将指定值填充到数组之中:`void fill(int[] a,int val)`

```java
Arrays.fill(arr1,10);
System.out.println(Arrays.toString(arr1));
```

- 对数组进行排序:`void sort(int[] a)`

```java
Arrays.sort(arr2);
System.out.println(Arrays.toString(arr2));
```

- `int binarySearch(int[] a,int key)`

```java
int[] arr3 = new int[]{-98, -34, 2, 34, 54, 66, 79, 105, 210, 333};
int index = Arrays.binarySearch(arr3, 210);
if (index >= 0) {
    System.out.println(index);
} else {
    System.out.println("未找到");
}
```

## 数组常见异常

### ArrayIndexOutOfBoundsException

```java
int[] arr = new int[]{1,2,3,4,5};
for(int i = 0;i <= arr.length;i++){
	System.out.println(arr[i]);
}
System.out.println(arr[-2]);
System.out.println("hello");
```

### NullPointerException

- 情况一

```java
int[] arr1 = new int[]{1,2,3};
arr1 = null;
System.out.println(arr1[0]);
```

- 情况二

```java
int[][] arr2 = new int[4][];
System.out.println(arr2[0][0]);
```

- 情况三

```java
String[] arr3 = new String[]{"AA","BB","CC"};
arr3[0] = null;
System.out.println(arr3[0].toString());
```

::: tip 小知识
一旦程序出现异常，未处理时，就终止执行。
:::
