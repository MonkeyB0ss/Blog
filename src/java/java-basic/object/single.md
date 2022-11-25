---
date: 2022-11-25
category: 基础
tag:

- JAVA

---

# 单例模式

## 设计模式的说明

::: tip 设计模式
是在大量的实践中总结和理论化之后优的代码结构、编程风格、以及解决问题的思考方式.
:::
::: info 常用设计模式

23种经典的设计模式

- 创建型模式，共 :five: 种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。
- 结构型模式，共 :seven: 种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。
- 行为型模式，共 :one::one: 种：策略模式、模板方法模式、观察者模式、迭代器模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。

:::
## 单例模式
### 要解决的问题
所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例。
### 具体代码的实现
饿汉式1：
```java
class Bank{

	// 1.私化类的构造器
	private Bank(){
	}
	
	// 2.内部创建类的对象
	// 4.要求此对象也必须声明为静态的
	private static Bank instance = new Bank();
	
	// 3.提供公共的静态的方法，返回类的对象
	public static Bank getInstance(){
		return instance;
	}

}
```
饿汉式2：使用了静态代码块
```java
class Order{

	// 1.私化类的构造器
	private Order(){
	}
	
	// 2.声明当前类对象，没初始化
	// 4.此对象也必须声明为static的
	private static Order instance = null;

	static{
		instance = new Order();
    }

	// 3.声明public、static的返回当前类对象的方法
	public static Order getInstance(){
		return instance;
	}

}
```
懒汉式：
```java
class Order{

	// 1.私化类的构造器
	private Order(){
	}
	
	// 2.声明当前类对象，没初始化
	// 4.此对象也必须声明为static的
	private static Order instance = null;
	
	// 3.声明public、static的返回当前类对象的方法
	public static Order getInstance(){
		if(instance == null){
			instance = new Order();
		}
		return instance;
	}
}
```
### 两种方式的对比
::: tip 饿汉式
**坏处**：对象加载时间过长。  
**好处**：饿汉式是线程安全的
:::
::: tip 懒汉式
**好处**：延迟对象的创建。  
目前的写法**坏处**：==线程不安全==
:::

