---
date: 2022-11-26
category: 基础
tag:

- JAVA

---

# main()的使用说明

1. `main()`方法作为程序的入口
2. `main()`方法也是一个普通的静态方法
3. `main()`方法可以作为我们与控制台交互的方式。（之前：使用Scanner）

::: tip
如何将控制台获取的数据传给形参：String[] args?  
运行时：java 类名 "Tom" "Jerry" "123" "true"

```java
// "Tom"
sysout(args[0]);
// "true"  -->Boolean.parseBoolean(args[3]);
sysout(args[3]);
// 报异常
sysout(args[4]);
```

:::

## 小结

权限修饰符：`private` `缺省` `protected` `pubilc` ---->封装性

修饰符：`static` \ `fina`l \ `abstract` \ `native` 可以用来修饰方法

返回值类型： 无返回值 / 有返回值 -->return

方法名：需要满足标识符命名的规则、规范；`见名知意`

形参列表：`重载` vs `重写`；参数的值传递机制；体现对象的多态性

方法体：来体现方法的功能

```java
public static void main(String[] args){//方法体}

main(){
    Person p = new Man();
    p.eat();
    //p.earnMoney();

    Man man = new Man();
    man.eat();
    man.earnMoney();
}
```





