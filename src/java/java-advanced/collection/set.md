---
date: 2022-12-01
category: 基础进阶
tag:

- JAVA

---

# Collection子接口：Set接口

## 存储的数据特点

无序的、不可重复的元素

具体的:以HashSet为例说明

1. 无序性：不等于随机性。存储的数据在底层数组中并非照数组索引的顺序添加，而是根据数据的哈希值决定的。
2. 不可重复性：保证添加的元素照equals()判断时，不能返回true.即：相同的元素只能添加一个。

## 元素添加过程

以HashSet为例

1. 我们向HashSet中添加元素a,首先调用元素a所在类的hashCode()方法，计算元素a的哈希值，
2. 此哈希值接着通过某种算法计算出在HashSet底层数组中的存放位置（即为：索引位置，判断
3. 数组此位置上是否已经元素：
	- 如果此位置上没其他元素，则元素a添加成功。 --->情况1
	- 如果此位置上其他元素b(或以链表形式存在的多个元素，则比较元素a与元素b的hash值：
		- 如果hash值不相同，则元素a添加成功。--->情况2
		- 如果hash值相同，进而需要调用元素a所在类的equals()方法：
			- equals()返回true,元素a添加失败
			- equals()返回false,则元素a添加成功。--->情况2

对于添加成功的情况2和情况3而言：元素a 与已经存在指定索引位置上数据以链表的方式存储。
::: info 总结：七上八下
jdk 7 :元素a放到数组中，指向原来的元素。

jdk 8 :原来的元素在数组中，指向元素a
:::

::: tip HashSet底层
数组+链表的结构。（前提：jdk7)
:::

## 常用方法

Set接口中没额外定义新的方法，使用的都是Collection中声明过的方法。

## 常用实现类：

```text
|----Collection接口：单列集合，用来存储一个一个的对象
	|----Set接口：存储无序的、不可重复的数据   -->高中讲的“集合”
		|----HashSet：作为Set接口的主要实现类；线程不安全的；可以存储null值
			|----LinkedHashSet：作为HashSet的子类；遍历其内部数据时，可以按照添加的顺序遍历
			在添加数据的同时，每个数据还维护了两个引用，记录此数据前一个数据和后一个数据。                   对于频繁的遍历操作，LinkedHashSet效率高于HashSet.
		|----TreeSet：可以照添加对象的指定属性，进行排序。
```

## 存储对象所在类的要求

1. `HashSet`/`LinkedHashSet`:
	- 要求：向Set(主要指：HashSet、LinkedHashSet)中添加的数据，其所在的类一定要重写hashCode()和equals()
	- 要求：重写的hashCode()和equals()尽可能保持一致性：相等的对象必须具有相等的散列码

   ::: tip
   重写两个方法的小技巧：对象中用作 equals() 方法比较的 Field，都应该用来计算 hashCode 值。
   :::

2. `TreeSet`:
	- 自然排序中，比较两个对象是否相同的标准为：compareTo()返回0.不再是equals().
	- 定制排序中，比较两个对象是否相同的标准为：compare()返回0.不再是equals().

## TreeSet的使用

### 使用说明

1. 向TreeSet中添加的数据，要求是相同类的对象。
2. 两种排序方式：`自然排序`(实现Comparable接口) 和 `定制排序`(Comparator)

### 常用的排序方式

方式一：自然排序

```java
@Test
public void test1(){
	TreeSet set = new TreeSet();
	
	//失败：不能添加不同类的对象
	
	// set.add(123);
	// set.add(456);
	// set.add("AA");
	// set.add(new User("Tom",12));
	
	//举例一：
	
	// set.add(34);
	// set.add(-34);
	// set.add(43);
	// set.add(11);
	// set.add(8);
	
	//举例二：
	set.add(new User("Tom",12));
	set.add(new User("Jerry",32));
	set.add(new User("Jim",2));
	set.add(new User("Mike",65));
	set.add(new User("Jack",33));
	set.add(new User("Jack",56));
	
	Iterator iterator = set.iterator();
	while(iterator.hasNext()){
		System.out.println(iterator.next());
	}

}
```

方式二：定制排序

```java
@Test
public void test2(){
	Comparator com = new Comparator() {
	//照年龄从小到大排列
		@Override
		public int compare(Object o1, Object o2) {
			if(o1 instanceof User && o2 instanceof User){
				User u1 = (User)o1;
				User u2 = (User)o2;
				return Integer.compare(u1.getAge(),u2.getAge());
			}else{
				throw new RuntimeException("输入的数据类型不匹配");
			}
		}
	};
	
	TreeSet set = new TreeSet(com);
	set.add(new User("Tom",12));
	set.add(new User("Jerry",32));
	set.add(new User("Jim",2));
	set.add(new User("Mike",65));
	set.add(new User("Mary",33));
	set.add(new User("Jack",33));
	set.add(new User("Jack",56));
	
	Iterator iterator = set.iterator();
	while(iterator.hasNext()){
		System.out.println(iterator.next());
	}
}
```
