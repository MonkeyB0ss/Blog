---
date: 2024-01-29
category: 笔记
tag:

- 架构相关
- Docker-Desktop

---

# 解决在Windows11上新安装的Docker Desktop一直显示"starting the Docker Engine"登录不上去的问题

在Windows11上新安装Docker Desktop后登录时出现下图的问题，等了很久都没有登录进去。通过在全网进行一番查询，最终成功解决了上述问题，在此记录一下。
## 检查CPU是否开启虚拟化

![](https://raw.githubusercontent.com/MonkeyB0ss/PicGo/master/MyNotes/images/20240129195943.png)

若看到“虚拟化：已启用”，说明开启CPU虚拟化功能。若看到"虚拟化：已禁用"，说明未开启CPU虚拟化功能，需要进入BIOS设置，以联想的笔记本为例，进入BIOS按键是F2，进入后按左右键选择configuration，找到 Intel Virtual Technology（Intel虚拟化技术），确认为enable。

## 开启Hyper-V虚拟机
控制面板--程序--程序和功能--启用或关闭windows功能 ，勾选Hyper-V
![](https://raw.githubusercontent.com/MonkeyB0ss/PicGo/master/MyNotes/images/202401292003321.png)

## 启动docker服务

```bash
net start com.docker.service
```

![](https://raw.githubusercontent.com/MonkeyB0ss/PicGo/master/MyNotes/images/202401292007060.png)

::: tip 注意
注意管理员方式启动
:::

## 安装wsl并执行SwitchDaemon

::: tip 注意
同样管理员方式启动
:::

```bash
wsl --update
cd C:\Program Files\Docker\Docker
.\DockerCli.exe -SwitchDaemon
```
