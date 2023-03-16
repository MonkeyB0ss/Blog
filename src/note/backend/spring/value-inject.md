---
date: 2023-03-16
category: 笔记
tag:

- Spring

---

# SpringBoot注入配置文件值

## @ConfigurationProperties注解的方式自动注入

```yaml
person:
  name: 小明
  age: 12
  birth: 2018/9/9
  maps:
    k1: v1
    k2: v2
  list:
    - a
    - b
    - c
```

```java
@Data
@Component
@ConfigurationProperties(prefix = "person")
public class Person {
    public String name;
    private int age;
    private Date birth;

    private Map<String,Object> maps;
    private List<String> list;
    
}
```

## @Value注解的方式自动注入

```yaml
person:
  name: 小明
  age: 12
  birth: 2018/9/9
  maps: "{key1: 'value1', key2: 'value2'}"
  list: [a,b,c]
```

```java
@Value("#{${person.maps}}")
private Map<String, String> maps;

@Value("#{'${person.list}'.split(',')}")
private List<String> list;

@Value("${person.name}")
private String name;
```
