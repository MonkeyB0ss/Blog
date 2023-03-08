---
date: 2023-03-08
category: 笔记
tag:

- Spring

---

# SpringBoot字段验证器

## 添加POM坐标

在SpringBoot2.3.0以后，我们需要给 pom.xml 加入下面的依赖项，SpringBoot 校验属性 @Valid 才会起作用

```pom
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

## 给Bean添加校验注解:`javax.validation.constraints`

```java
// 可自定义Message提示
@NotBlank
private String name;

@URL
@NotEmpty(message = "url不能为空")
private String url;
```

可用注解: `@Email`,`@Max`,`@Min`,`@NotBlank`,`@NotEmpty`,`@NotNull`,`@Pattern`...

## 开启校验功能`@Valid`

```java{2}
@RequestMapping("/save")
public R save(@Valid @RequestBody BrandEntity brand) {
	brandService.save(brand);
	return R.ok();
}
```

## 获取校验结果

给校验的Bean后紧跟一个BindingResult，即可获取到校验的结果

```java
@RequestMapping("/save")
public R save(@Valid @RequestBody BrandEntity brand, BindingResult bindingResult) {
	if (bindingResult.hasErrors()) {
		HashMap<String, String> map = new HashMap<>();
		bindingResult.getFieldErrors().forEach(e->{
			map.put(e.getField(), e.getDefaultMessage());
		});
		return R.error("校验失败").put("data", map);
	}
	brandService.save(brand);
	return R.ok();
}
```

## 分组校验
1. 新建用于分组的类AddGroup.java、UpdateGroup.java
2. 给校验注解添加分组信息

   ```java
	@NotBlank(groups = {AddGroup.class, UpdateGroup.class})
	private String name;
	
	@URL
	@NotEmpty(message = "url不能为空", groups = {UpdateGroup.class})
	private String url;
	```
3. @Valid注解替换为@Validated

	```java
	@RequestMapping("/save")
	public R save(@Validated({AddGroup.class}) @RequestBody BrandEntity brand) {
		brandService.save(brand);
		return R.ok();
	}
	```

::: tip 注意
没有指定分组的校验注解，在分组校验的情况下不生效
:::

## 自定义校验
1. 编写一个自定义的校验注解
2. 编写一个自定义的校验器
	```java
	public class 自定义校验器 implements ConstraintValidator<自定义校验注解,校验字段类型> {
		private Set<校验字段类型> set = new HashSet<>();
		//初始化方法
		@Override
		public void initialize(自定义校验注解 constraintAnnotation) {
		
			int[] vals = constraintAnnotation.vals();
			for (int val : vals) {
				set.add(val);
			}
		
		}
		
		/**
		 *
		 * @param value 需要校验的值
		 * @param context
		 * @return
		 */
		@Override
		public boolean isValid(自定义校验注解 value, ConstraintValidatorContext context) {
			/*
				校验逻辑
			*/
			return true/false;
		}
	}
	```
3. 关联自定义的校验器和自定义的校验注解
	```java
	@Documented
	@Constraint(validatedBy = {自定义校验器})
	@Target({ METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER, TYPE_USE })
	@Retention(RUNTIME)
	@Repeatable(List.class)
	public @interface 自定义注解 {
	```
