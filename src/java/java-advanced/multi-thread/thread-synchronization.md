---
date: 2022-11-28
category: 基础进阶
tag:

- JAVA

---

# 线程的同步机制

## 背景

::: info 例子

创建个窗口卖票，总票数为100张.使用实现Runnable接口的方式

1. 问题：卖票过程中，出现了重票、错票 ==出现了线程的安全问题==
2. 问题出现的原因：当某个线程操作车票的过程中，尚未操作完成时，其他线程参与进来，也操作车票。
3. 如何解决：当一个线程a在操作ticket的时候，其他线程不能参与进来。直到线程a操作完ticket时，其他线程才可以开始操作ticket。这种情况即使线程a出现了阻塞，也不能被改变。

:::

## 解决方案：==同步机制==

在Java中，我们通过同步机制，来解决线程的安全问题。

### 方式一：同步代码块

```java
synchronized(同步监视器){
	//需要被同步的代码
}
```

::: tip 说明

1. 操作共享数据的代码，即为需要被同步的代码。 -->不能包含代码多了，也不能包含代码少了。
2. 共享数据：多个线程共同操作的变量。比如：ticket就是共享数据。
3. 同步监视器，俗称：锁。任何一个类的对象，都可以充当锁。

==要求==：多个线程必须要共用同一把锁。

:::

::: info 补充

在实现Runnable接口创建多线程的方式中，我们可以考虑使用this充当同步监视器。

在继承Thread类创建多线程的方式中，慎用this充当同步监视器，考虑使用当前类充当同步监视器。

:::

### 方式二：同步方法

如果操作共享数据的代码完整的声明在一个方法中，我们不妨将此方法声明同步的。

关于同步方法的总结：

1. 同步方法仍然涉及到同步监视器，只是不需要我们显式的声明。
2. 非静态的同步方法，同步监视器是：`this`

   静态的同步方法，同步监视器是：当前类本身

### 方式三：Lock锁

JDK5.0新增

## 面试题

`synchronized` 与 `Lock`的异同？

- 相同：二者都可以解决线程安全问题
- 不同：synchronized机制在执行完相应的同步代码以后，自动的释放同步监视器
  Lock需要手动的启动同步（lock()，同时结束同步也需要手动的实现（unlock()）

## 使用的优先顺序

Lock :fast_forward: 同步代码块（已经进入了方法体，分配了相应资源 ) :fast_forward: 同步方法（在方法体之外)

## 利弊

同步的方式，解决了线程的安全问题。

操作同步代码时，只能一个线程参与，其他线程等待。相当于是一个单线程的过程，效率低。

## [线程安全的单例模式(懒汉式)](/java/design-patterns/single-threadsafety.md)

## 死锁问题

### 理解

不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，就形成了线程的死锁

### 说明

1. 出现死锁后，不会出现异常，不会出现提示，只是所的线程都处于阻塞状态，无法继续
2. 我们使用同步时，要避免出现死锁。
3. 举例：
    ```java
    public static void main(String[] args) {
        StringBuffer s1 = new StringBuffer();
        StringBuffer s2 = new StringBuffer();
        new Thread(){
            @Override
            public void run() {
                synchronized (s1){
                    s1.append("a");
                    s2.append("1");
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    synchronized (s2){
                        s1.append("b");
                        s2.append("2");
                        System.out.println(s1);
                        System.out.println(s2);
                    }
                }
            }
        }.start();
        
        new Thread(new Runnable() {
            @Override
            public void run() {
                synchronized (s2){
                    s1.append("c");
                    s2.append("3");
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    synchronized (s1){
                        s1.append("d");
                        s2.append("4");
                        System.out.println(s1);
                        System.out.println(s2);
                    }
                }
            }
        }).start();
    }
    ```
