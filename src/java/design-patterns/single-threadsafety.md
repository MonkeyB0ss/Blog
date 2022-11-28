---
date: 2022-11-28
category: 基础进阶
tag:

- JAVA
- 设计模式

---

# 线程安全的单例模式(懒汉式)

**使用同步机制将单例模式中的懒汉式改写为线程安全的。**

```java {13-19}
class Bank{
    private Bank(){}
    private static Bank instance = null;
    public static Bank getInstance(){
        // 方式一：效率稍差
        // synchronized (Bank.class) {
        // if(instance == null){
            // instance = new Bank();
        // }
        // return instance;
        // }
        // 方式二：效率更高
        if(instance == null){
            synchronized (Bank.class) {
                if(instance == null){
                    instance = new Bank();
                }
            }
        }
        return instance;
    }
}
```
