---
date: 2024-01-29
category: 笔记
tag:

- 架构相关
- Github

---

# [解决]git-ssh: connect to host github.com port 22: Connection timed out

提交代码时报错如下
```text
$ git pull project develop
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.
```
本以为是网络的问题或者被墙了，在确认本地 git 可以访问和几次尝试后依旧报这个错，查了各种资料，最后参考 git 官网给的[解决办法](https://help.github.com/en/github/authenticating-to-github/using-ssh-over-the-https-port)，使用 ssh 443端口

## 先测试可用性
```bash
ssh -T -p 443 git@ssh.github.com
```
如果提示如下说明可用
![](https://raw.githubusercontent.com/MonkeyB0ss/PicGo/master/MyNotes/images/202401292021876.png)
## 然后编辑 ~/.ssh/config 文件，如果没有config文件的话就直接创建并加入以下内容
```text
Host github.com
Hostname ssh.github.com
Port 443
```

## 再次测试`ssh -T git@github.com`
提示如下就说明成功了
![](https://raw.githubusercontent.com/MonkeyB0ss/PicGo/master/MyNotes/images/202401292023069.png)
