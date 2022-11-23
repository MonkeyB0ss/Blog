---
date: 2022-11-21
category: 基础
tag:

- JAVA

---

# Object类的使用

## java.lang.Object类的说明

1. `Object`类是所Java类的根父类
2. 如果在类的声明中未使用extends关键字指明其父类，则默认父类为`java.lang.Object`类
3. `Object类`中的功能(属性、方法)就具通用性。
   ::: info
   属性：无  
   方法：equals() / toString() / getClass() /hashCode() / clone() / finalize()
   wait() 、 notify()、notifyAll()
   :::

4. Object类只声明了一个空参的构造器

## equals()方法

### equals()的使用

1. 是一个方法，而非运算符
2. 只能适用于引用数据类型
3. `Object`类中`equals()`的定义：

   ```java
   public boolean equals(Object obj) {
      return (this == obj);
   }
   ```
   ::: info
   `Object`类中定义的`equals()`和`==`的作用是相同的：比较两个对象的地址值是否相同.即两个引用是否指向同一个对象实体
   :::

4. 像`String`、`Date`、`File`、`包装类`等都重写了`Object`类中的`equals()`方法。重写以后，比较的不是
   两个引用的地址是否相同，而是比较两个对象的`实体内容`是否相同。

5. 通常情况下，我们自定义的类如果使用`equals()`的话，也通常是比较两个对象的`实体内容`是否相同。那么，我们
   就需要对`Object`类中的`equals()`进行重写
   ::: tip 重写的原则
   比较两个对象的实体内容是否相同

### 如何重写equals()

手动重写举例：

```java
   class User{
      String name;
      int age;
      // 重写其equals()方法
      public boolean equals(Object obj){
         if(obj == this){
         return true;
      }
      if(obj instanceof User){
         User u = (User)obj;
         return this.age == u.age && this.name.equals(u.name);
      }
         return false;
      }
   }
```

### 回顾 == 运算符的使用

`==` ：运算符

1. 可以使用在基本数据类型变量和引用数据类型变量中
2. 如果比较的是基本数据类型变量：比较两个变量保存的数据是否相等。（不一定类型要相同）  
   如果比较的是引用数据类型变量：比较两个对象的地址值是否相同.即两个引用是否指向同一个对象实体  
   *补充： `==` 符号使用时，必须保证符号左右两边的变量类型一致。*

## toString()方法

### toString()的使用

1. 当我们输出一个对象的引用时，实际上就是调用当前对象的`toString()`

2. `Object`类中`toString()`的定义：

   ```java
   public String toString() {
       return getClass().getName() + "@" + Integer.toHexString(hashCode());
   }
   ```
3. 像`String`、`Date`、`File`、`包装类`等都重写了`Object`类中的`toString()`方法。
   使得在调用对象的`toString()`时，返回`实体内容`信息

4. 自定义类也可以重写`toString()`方法，当调用此方法时，返回对象的`实体内容`

## 面试题

1. `final`、`finally`、`finalize`的区别？
2. `==` 和 `equals()` 区别


