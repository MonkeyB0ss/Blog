---
date: 2022-11-19
category: 基础
tag:

- JAVA

---

# 类的结构之二：方法

**描述类应该具的功能**

::: info 比如
Math类：sqrt()、random() ...  
Scanner类：nextXxx() ...  
Arrays类：sort()、binarySearch()、toString()、equals() ...
:::
举例：

```java
public void eat(){}
public void sleep(int hour){}
public String getName(){}
public String getNation(String nation){}
```

方法的声明：

```java
权限修饰符 返回值类型 方法名(形参列表) {
 	方法体
}
```

::: tip 说明

1. 关于权限修饰符：`private` `public` `缺省` `protected`
2. 返回值类型：  
   返回值 🆚 没返回值
    - 如果方法返回值，则必须在方法声明时，指定返回值的类型。同时，方法中，需要使用`return`
      关键字来返回指定类型的变量或常量：`return 数据`。
    - 如果方法没返回值，则方法声明时，使用`void`来表示。通常，没返回值的方法中，就不需要使用`return`
      ，但是，如果使用的话，只能`return;`表示结束此方法的意思。
3. 方法名：属于标识符，遵循标识符的规则和规范，“见名知意”
4. 形参列表：方法可以声明0个，1个，或多个形参。
    - 格式：数据类型1 形参1,数据类型2 形参2,...
5. 方法体：方法功能的体现

:::

::: warning
方法的使用中，可以调用当前类的属性或方法   
特殊的：方法A中又调用了方法A:*递归方法*。  
**方法中，不可以定义方法**。
:::

## return关键字

### 使用范围

使用在方法体中

### 作用

1. 结束方法
2. 针对于返回值类型的方法，使用`return 数据`方法返回所要的数据。
3. 注意点：`return`关键字后面不可以声明执行语句。

## 方法的重载

### 概念

定义：
在同一个类中，允许存在一个以上的同名方法，只要它们的参数个数或者参数类型不同即可。

总结：**"两同一不同"**
同一个类、相同方法名  
参数列表不同：参数个数不同，参数类型不同

### 举例

举例一：Arrays类中重载的sort()、binarySearch()；PrintStream中的println()

举例二：  
如下的4个方法构成了重载

```java
public void getSum(int i,int j){
    System.out.println("1");
}
public void getSum(double d1,double d2){
	System.out.println("2");
}
public void getSum(String s ,int i){
	System.out.println("3");
}
public void getSum(int i,String s){
	System.out.println("4");
}
```

如下的3个方法不能与上述4个方法构成重载

```java
public int getSum(int i,int j){
	return 0;
}
public void getSum(int m,int n){
		
}
private void getSum(int i,int j){
		
}
```

::: tip 如何判断是否构成方法的重载？
严格按照定义判断：两同一不同。  
跟方法的权限修饰符、返回值类型、形参变量名、方法体都没关系！
:::

## 可变个数形参的方法

### 说明

1. jdk 5.0新增的内容
2. 具体使用：
    - 可变个数形参的格式：数据类型 ... 变量名
    - 当调用可变个数形参的方法时，传入的参数个数可以是：0个，1个,2个，。。。
    - 可变个数形参的方法与本类中方法名相同，形参不同的方法之间构成重载
    - 可变个数形参的方法与本类中方法名相同，形参类型也相同的数组之间不构成重载。换句话说，二者不能共存。
    - 可变个数形参在方法的形参中，必须声明在末尾
    - 可变个数形参在方法的形参中,最多只能声明一个可变形参。

### 举例

```java
public void show(int i){

}
	
public void show(String s){
   System.out.println("show(String)");
}
	
public void show(String ... strs){
   System.out.println("show(String ... strs)");
   for(int i = 0;i < strs.length;i++){
      System.out.println(strs[i]);
   }
}
// 不能与上一个方法同时存在
public void show(String[] strs){

}
// 调用时：
test.show("hello");
test.show("hello","world");
test.show();
test.show(new String[]{"AA","BB","CC"});
```

## Java的值传递机制

### 举例

```java
System.out.println("***********基本数据类型：****************");
int m = 10;
int n = m;
System.out.println("m = " + m + ", n = " + n);
n = 20;
System.out.println("m = " + m + ", n = " + n);
System.out.println("***********引用数据类型：****************");
Order o1 = new Order();
o1.orderId = 1001;
// 赋值以后，o1和o2的地址值相同，都指向了堆空间中同一个对象实体。
Order o2 = o1;
System.out.println("o1.orderId = " + o1.orderId + ",o2.orderId = " +o2.orderId);
o2.orderId = 1002;
System.out.println("o1.orderId = " + o1.orderId + ",o2.orderId = " +o2.orderId);
```

::: tip 规则
如果变量是基本数据类型，此时赋值的是变量所保存的数据值。  
如果变量是引用数据类型，此时赋值的是变量所保存的数据的地址值。
:::

### 针对于方法的参数概念

`形参`：方法定义时，声明的小括号内的参数  
`实参`：方法调用时，实际传递给形参的数据

### Java中参数传递机制

==**值传递**==
::: tip 规则
如果参数是基本数据类型，此时实参赋给形参的是实参真实存储的数据值。  
如果参数是引用数据类型，此时实参赋给形参的是实参存储数据的地址值
:::
::: info 推广
如果变量是基本数据类型，此时赋值的是变量所保存的数据值。  
如果变量是引用数据类型，此时赋值的是变量所保存的数据的地址值。
:::

## 递归方法

### 定义

一个方法体内调用它自身。

### 如何理解❓

1. 方法递归包含了一种隐式的循环，它会重复执行某段代码，但这种重复执行无须循环控制。
2. 递归一定要向已知方向递归，否则这种递归就变成了无穷递归，类似于死循环。

### 举例

例1：计算1-n之间所自然数的和

```java
public int getSum(int n) {
   if (n == 1) {
      return 1;
   } else {
	  return n + getSum(n - 1);
   }
}
```

例2：计算1-n之间所自然数的乘积:n!

```java
public int getSum1(int n) {
   if (n == 1) {
      return 1;
   } else {
      return n * getSum1(n - 1);
   }
}
```

例3：已知一个数列：f(0) = 1,f(1) = 4,f(n+2)=2*f(n+1) + f(n),

```java
//其中n是大于0的整数，求f(10)的值。
public int f(int n){
   if(n == 0) {
      return 1;
   } else if (n == 1) {
      return 4;
   } else {
      // return f(n + 2) - 2 * f(n + 1);
      return 2*f(n - 1) + f(n - 2);
   }
}
```
