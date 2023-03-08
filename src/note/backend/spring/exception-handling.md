---
date: 2023-03-08
category: 笔记
tag:

- Spring

---

# SpringBoot统一的异常处理

## 编写异常处理类

使用@ControllerAdvice/@RestControllerAdvice

```java
@RestControllerAdvice(basePackages = "")
public class ExceptionControllerAdvice {
}
```

## 使用@ExceptionHandler标注方法可以处理的异常

```java
@RestControllerAdvice(basePackages = "")
public class ExceptionControllerAdvice {
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public R handleValidException(MethodArgumentNotValidException e) {
		HashMap<String, String> map = new HashMap<>();
		e.getAllErrors().forEach(item -> map.put(item.getObjectName(), item.getDefaultMessage()));
		return R.error(400, "数据不合法").put("data", map);
	}
}
```

