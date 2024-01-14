---
date: 2024-01-14
category: 笔记
tag:

- 架构相关

---

# docker下nacos的配置

[官方文档](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html)

自定义compose
```yaml
version: "3.8"
services:
  nacos:
    image: nacos/nacos-server:latest
    container_name: nacos
    environment:
      - MODE=standalone
      - SPRING_DATASOURCE_PLATFORM=mysql
      - MYSQL_SERVICE_HOST=mysql-master
      - MYSQL_SERVICE_DB_NAME=nacos
      - MYSQL_SERVICE_PORT=3306
      - MYSQL_SERVICE_USER=nacos
      - MYSQL_SERVICE_PASSWORD=nacos
      # MySQL8下需要此参数
      - MYSQL_SERVICE_DB_PARAM=characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true
      # 开启nacos鉴权 官方说明：https://nacos.io/zh-cn/docs/v2/guide/user/auth.html
      - NACOS_AUTH_ENABLE=true
      # 2.2.1版本后无下列参数默认值，需手动配置
      - NACOS_AUTH_TOKEN=######
      - NACOS_AUTH_IDENTITY_KEY=######
      - NACOS_AUTH_IDENTITY_VALUE=######
    volumes:
      - /mnt/monkeyboss/MyCluster/Nacos/logs:/home/nacos/logs
    ports:
      - "8848:8848"
      - "9848:9848"
    restart: always
    networks:
      - monkeyboss-network

# 保持和MySQL同一个network否则连接不上数据库
networks:
  monkeyboss-network:
    external: true
```

拉起镜像
```bash
docker-compose -f docker-nacos.yml up -d
```
