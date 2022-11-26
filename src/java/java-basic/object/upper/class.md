---
date: 2022-11-19
category: 基础
tag:

- JAVA

---

# 类与对象

## 面向对象学习的三条主线

### 1. Java类及类的成员

`属性` `方法` `构造器` `代码块` `内部类`

### 2. 面向对象的大特征

`封装性` `继承性` `多态性(抽象性)`

### 3. 其它关键字

`this` `super` `static` `final` `abstract` `interface` `package` `import` ...
::: tip
大处着眼，小处着手
:::

## 面向对象与面向过程（理解）

### 面向过程

强调的是功能行为，以函数为最小单位，考虑怎么做。

### 面向对象

强调具备了功能的对象，以类/对象为最小单位，考虑谁来做。
::: info 举例对比
人把大象装进冰箱
:::

### 完成一个项目（或功能）的思路

![img.png](../../images/thought.png)

### 面向对象中两个重要的概念

- `类`：对一类事物的描述，是抽象的、概念上的定义
- `对象`：是实际存在的该类事物的每个个体，因而也称为实例(instance)

::: tip
面向对象程序设计的重点是类的设计
设计类，就是设计类的成员
:::

::: warning 二者的关系
`对象`，是由`类`==new出来的，派生出来的==。
:::

### 面向对象思想落地实现的规则

1. 创建类，设计类的成员
2. 创建类的对象
3. 通过`对象.属性`或`对象.方法`调用对象的结构

::: info 补充：几个概念的使用说明
属性 = 成员变量 = field = 域、字段  
方法 = 成员方法 = 函数 = method  
创建类的对象 = 类的实例化 = 实例化类
:::

### 对象的创建与对象的内存解析

典型代码：

```java
Person p1 = new Person();
Person p2 = new Person();
// 没有新创建一个对象，共用一个堆空间中的对象实体。
Person p3 = p1;
```

::: tip 说明
如果创建了一个类的多个对象，则每个对象都独立的拥有一套类的属性。（非static的）  
意味着：如果我们修改一个对象的属性a，则不影响另外一个对象属性a的值。
:::

内存解析：

![img_2.png](../../images/memory.png)

### 匿名对象

我们创建的对象，没显式的赋给一个变量名。即为`匿名对象`  
::: info
特点：匿名对象只能调用一次。

举例：

```java
new Phone().sendEmail();
new Phone().playGame();
new Phone().price = 1999;
// 0.0
new Phone().showPrice();
```

应用场景：

```java
PhoneMall mall = new PhoneMall();
```

匿名对象的使用：

```java
mall.show(new Phone());
// 其中，
class PhoneMall{
    public void show(Phone phone){
        phone.sendEmail();
        phone.playGame();
    }
}
```

:::

### "万事万物皆对象"

1. 在Java语言范畴中，我们都将功能、结构等封装到类中，通过类的实例化，来调用具体的功能结构
    - Scanner,String等
    - 文件：File
    - 网络资源：URL
2. 涉及到Java语言与前端Html、后端的数据库交互时，前后端的结构在Java层面交互时，都体现为类、对象。




