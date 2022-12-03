---
date: 2022-12-03
category: 基础进阶
tag:

- JAVA

---

# 泛型的理解

## 泛型的概念

所谓泛型，就是允许在定义类、接口时通过一个标识表示类中某个属性的类型或者是某个方法的返
回值及参数类型。这个类型参数将在使用时（例如，继承或实现这个接口，用这个类型声明变量、 创建对象时确定（即传入实际的类型参数，也称为类型实参）。

## 泛型的引入背景

集合容器类在设计阶段/声明阶段不能确定这个容器到底实际存的是什么类型的对象，所以在==JDK1.5之前只能把元素类型设计为Object，JDK1.5之后使用泛型来解决==。
因为这个时候除了元素的类型不确定，其他的部分是确定的，例如关于这个元素如何保存，如何管理等是确定的，因此此时==把元素的类型设计成一个参数，这个类型参数叫做泛型==。
`Collection<E>`,`List<E>`,`ArrayList<E>`这个`<E>`就是类型参数，即泛型。