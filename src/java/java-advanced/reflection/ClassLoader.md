---
date: 2022-12-04
category: 基础进阶
tag:

- JAVA

---

# 了解ClassLoader

## 类的加载过程----了解

![img.png](../images/ClassLoader1.png)

## 类的加载器的作用

![img_1.png](../images/ClassLoader2.png)

## 类的加载器的分类

![img_2.png](../images/ClassLoader3.png)

## Java类编译、运行的执行的流程

![img_3.png](../images/ClassLoader4.png)

## 使用Classloader加载src目录下的配置文件

```java
@Test
public void test2() throws Exception {

	Properties pros = new Properties();
	// 此时的文件默认在当前的module下。
	// 读取配置文件的方式一：
	// FileInputStream fis = new FileInputStream("jdbc.properties");
	// FileInputStream fis = new FileInputStream("src\\jdbc1.properties");
	// pros.load(fis);
	
	// 读取配置文件的方式二：使用ClassLoader
	// 配置文件默认识别为：当前module的src下
	ClassLoader classLoader = ClassLoaderTest.class.getClassLoader();
	InputStream is = classLoader.getResourceAsStream("jdbc1.properties");
	pros.load(is);
	
	String user = pros.getProperty("user");
	String password = pros.getProperty("password");
	System.out.println("user = " + user + ",password = " + password);
}
```
