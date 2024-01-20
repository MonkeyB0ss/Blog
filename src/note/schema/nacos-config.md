---
date: 2024-01-20
category: 笔记
tag:

- 架构相关
- Nacos

---

# Spring Cloud接入Nacos service和Nacos config

[官方文档](https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-config)

## 引入starter
```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```

## 配置config
```yaml
spring:
  application:
    name: gateway
  cloud:
    nacos:
      config:
        file-extension: yaml
        namespace: 97ee9fc4-7541-4112-856f-4b0d304cbc04
      server-addr: 192.168.3.2:8848
      # 如果nacos开启鉴权需要此配置
      username: '######'
      password: '######'
  config:
    import:
      - nacos:${spring.application.name}.${spring.cloud.nacos.config.file-extension}?refresh=true
```
