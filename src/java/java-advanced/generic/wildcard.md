---
date: 2022-12-03
category: 基础进阶
tag:

- JAVA

---

# 通配符

## 通配符的使用

通配符：`?`

类A是类B的父类，`G<A>`和`G<B>`是没关系的，二者共同的父类是：`G<?>`

```java
@Test
public void test3(){
	List<Object> list1 = null;
	List<String> list2 = null;
	
	List<?> list = null;
	
	list = list1;
	list = list2;
	// 编译通过
	// print(list1);
	// print(list2);
	
	List<String> list3 = new ArrayList<>();
	list3.add("AA");
	list3.add("BB");
	list3.add("CC");
	list = list3;
	// 添加(写入)：对于List<?>就不能向其内部添加数据。
	// 除了添加null之外。
	// list.add("DD");
	// list.add('?');
	
	list.add(null);
	
	// 获取(读取)：允许读取数据，读取的数据类型为Object。
	Object o = list.get(0);
	System.out.println(o);
}
	
public void print(List<?> list){
	Iterator<?> iterator = list.iterator();
	while(iterator.hasNext()){
		Object obj = iterator.next();
		System.out.println(obj);
	}
}
```

## 有限制条件的通配符的使用

限制条件的通配符的使用。

1. `? extends A`: `G<? extends A>` 可以作为`G<A>`和`G<B>`的父类，其中B是A的子类
2. `? super A`: `G<? super A>` 可以作为`G<A>`和`G<B>`的父类，其中B是A的父类

```java
@Test
public void test4(){

	List<? extends Person> list1 = null;
	List<? super Person> list2 = null;
	
	List<Student> list3 = new ArrayList<Student>();
	List<Person> list4 = new ArrayList<Person>();
	List<Object> list5 = new ArrayList<Object>();
	
	list1 = list3;
	list1 = list4;
	// list1 = list5;
	
	// list2 = list3;
	list2 = list4;
	list2 = list5;
	
	//读取数据：
	list1 = list3;
	Person p = list1.get(0);
	// 编译不通过
	// Student s = list1.get(0);
	
	list2 = list4;
	Object obj = list2.get(0);
	// 编译不通过
	// Person obj = list2.get(0);
	
	// 写入数据：
	// 编译不通过
	// list1.add(new Student());
	
	// 编译通过
	list2.add(new Person());
	list2.add(new Student());

}	 
```
