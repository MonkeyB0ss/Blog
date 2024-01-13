---
date: 2024-01-13
category: 笔记
tag:

- 架构相关

---

# MySQL主从配置

在 Docker 中实现 MySQL 主从（Master-Slave）的设置，可以使用 Docker Compose 来定义和管理多个 MySQL 容器，并配置它们之间的主从关系

## 创建 Docker Compose 文件

创建一个名为 docker-compose.yml 的文件，并添加以下内容：

```yaml
version: '3.8'

services:
  mysql-master:
    image: mysql:latest
    container_name: mysql-master
    restart: always
    privileged: true
    volumes:
      - /mnt/monkeyboss/Mysql/master/log:/var/log/mysql  
      - /mnt/monkeyboss/Mysql/master/conf.d:/etc/mysql/conf.d
      - /mnt/monkeyboss/Mysql/master/data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: ######
      MYSQL_USER: synchronize-user
      MYSQL_PASSWORD: ######
    ports:
      - "3306:3306"
    networks:
      - mysql-network

  mysql-slave1:
    image: mysql:latest
    container_name: mysql-slave1
    restart: always
    privileged: true
    volumes:
      - /mnt/monkeyboss/Mysql/slave1/log:/var/log/mysql  
      - /mnt/monkeyboss/Mysql/slave1/conf.d:/etc/mysql/conf.d
      - /mnt/monkeyboss/Mysql/slave1/data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: ######
    networks:
      - mysql-network

  mysql-slave2:
    image: mysql:latest
    container_name: mysql-slave2
    restart: always
    privileged: true
    volumes:
      - /mnt/monkeyboss/Mysql/slave2/log:/var/log/mysql  
      - /mnt/monkeyboss/Mysql/slave2/conf.d:/etc/mysql/conf.d
      - /mnt/monkeyboss/Mysql/slave2/data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: ######
    networks:
      - mysql-network

networks:
  mysql-network:
```

在这个示例中，我们定义了三个 MySQL 服务：一个主节点 (mysql-master) 和两个从节点 (mysql-slave1 和 mysql-slave2)。它们都连接到一个自定义网络 mysql-network。

## 启动容器
在包含 docker-compose.yml 文件的目录中，执行以下命令启动容器：
```bash
docker-compose up -d
```

## 配置主从关系
连接到 MySQL 主节点，为用于复制的用户赋权，并记录主节点状态：
```bash
docker exec -it mysql-master mysql -uroot -p
```
```sql
# 进入 MySQL 命令行后执行以下 SQL 语句
GRANT REPLICATION SLAVE ON *.* TO 'synchronize-user'@'%' with grant option;
FLUSH PRIVILEGES;
SHOW MASTER STATUS;
```

记录输出中的文件名(File)和位置(Position)。

![](https://raw.githubusercontent.com/MonkeyB0ss/PicGo/master/MyNotes/images/202401130038989.png)

## 配置从节点

#### 连接到 MySQL 从节点
```bash
docker exec -it mysql-slave1 mysql -uroot -p
```
#### 先链接主节点验证网络是否通
```bash
mysql -usynchronize-user -hmysql-master -p
```
#### 登录从节点配置复制主节点的数据：
```bash
mysql -uroot -p
```
```sql
# 进入 MySQL 命令行后执行以下 SQL 语句，注意替换以下参数
CHANGE MASTER TO
  MASTER_HOST='mysql-master',
  MASTER_PORT=3306,
  MASTER_USER='synchronize-user',
  MASTER_PASSWORD='######',
  MASTER_LOG_FILE='[master_log_file]',
  MASTER_LOG_POS=[master_log_pos];

START SLAVE;
```
请替换 [master_log_file] 和 [master_log_pos] 为前面主节点 SHOW MASTER STATUS; 的输出。

#### 查看主从复制是否开启成功
```sql
show slave status \G;
```
确保 Slave_IO_Running 和 Slave_SQL_Running 的值都为 Yes

![](https://raw.githubusercontent.com/MonkeyB0ss/PicGo/master/MyNotes/images/202401131431675.png)


::: tip 注意
当 MySQL 主从复制中每次启动后，File 和 Position 的值都会变更，这可能会导致主从复制失败。这是因为主服务器的二进制日志（binary log）在关闭和重新启动时会生成新的文件，并且每个文件都有自己的位置信息。

解决这个问题的一种方法是使用 CHANGE MASTER TO 命令来更新从服务器的复制信息。在每次重新启动主从服务器后，你都需要获取新的主服务器的二进制日志文件名和位置，并将它们应用到从服务器上。以下是一般的步骤：

1. 在主服务器上执行以下 SQL 命令，获取新的二进制日志信息：
    ```sql
    SHOW MASTER STATUS;
    ```
2. 在从服务器上执行以下 SQL 命令，更新复制信息：
    ```sql
    STOP SLAVE;
   
    CHANGE MASTER TO
      MASTER_LOG_FILE='new_master_log_file',
      MASTER_LOG_POS=new_master_log_position;
   
    START SLAVE;
    ```
   请用主服务器输出的实际值替换 'new_master_log_file' 和 new_master_log_position。
3. 检查从服务器的复制状态：
    ```sql
    SHOW SLAVE STATUS\G;
    ```
:::

## 启动第二个从节点
重复配置从节点步骤来配置第二个从节点 (mysql-slave2)。