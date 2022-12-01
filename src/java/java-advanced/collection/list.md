---
date: 2022-12-01
category: 基础进阶
tag:

- JAVA

---

# Collection子接口：List接口

## 存储的数据特点

存储序的、可重复的数据。

## 常用方法💡

```java
增：add(Object obj)
删：remove(int index) / remove(Object obj)
改：set(int index, Object ele)
查：get(int index)
插：add(int index, Object ele)
长度：size()
遍历：
① Iterator迭代器方式
② 增强for循环
③ 普通的循环
```

## 常用实现类

```text
|----Collection接口：单列集合，用来存储一个一个的对象
	|----List接口：存储序的、可重复的数据。  -->“动态”数组,替换原的数组
		|----ArrayList：作为List接口的主要实现类；线程不安全的，效率高；底层使用Object[] elementData存储
		|----LinkedList：对于频繁的插入、删除操作，使用此类效率比ArrayList高；底层使用双向链表存储
		|----Vector：作为List接口的古老实现类；线程安全的，效率低；底层使用Object[] elementData存储
```

## 源码分析🔔

### ArrayList的源码分析

#### jdk 7情况下

```java {1,3,6}
// 底层创建了长度是10的Object[]数组elementData
ArrayList list = new ArrayList();
// elementData[0] = new Integer(123);
list.add(123);
...
// 如果此次的添加导致底层elementData数组容量不够，则扩容。
list.add(11);
```

::: tip
默认情况下，扩容为原来的容量的1.5倍，同时需要将原有数组中的数据复制到新的数组中。
:::
::: info 结论
建议开发中使用带参的构造器：ArrayList list = new ArrayList(int capacity)
:::

#### jdk 8中ArrayList的变化

```java {1,3}
// 底层Object[] elementData初始化为{}.并没创建长度为10的数组
ArrayList list = new ArrayList();
// 第一次调用add()时，底层才创建了长度10的数组，并将数据123添加到elementData[0]
list.add(123);
...
```

::: tip
后续的添加和扩容操作与jdk 7 无异。
:::

#### 小结

jdk7中的ArrayList的对象的创建类似于单例的饿汉式，而jdk8中的ArrayList的对象的创建类似于单例的懒汉式，延迟了数组的创建，节省内存。

### LinkedList的源码分析

```java {1,3,6}
// 内部声明了Node类型的first和last属性，默认值为null
LinkedList list = new LinkedList();
// 将123封装到Node中，创建了Node对象。
list.add(123);

// 其中，Node定义为：体现了LinkedList的双向链表的说法
private static class Node<E> {
   E item;
   Node<E> next;
   Node<E> prev;
   
   Node(Node<E> prev, E element, Node<E> next) {
      this.item = element;
      this.next = next;
      this.prev = prev;
   }
}
```

### Vector的源码分析

1. jdk7和jdk8中通过Vector()构造器创建对象时，底层都创建了长度为10的数组。
2. 在扩容方面，默认扩容为原来的数组长度的2倍。

## 存储的元素的要求

添加的对象，所在的类要重写equals()方法
