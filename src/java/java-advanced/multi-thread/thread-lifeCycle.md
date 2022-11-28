---
date: 2022-11-28
category: 基础进阶
tag:

- JAVA

---

# Thread的生命周期

![img.png](../images/lifeCycle.png)

1. 生命周期关注两个概念：==状态==、==相应的方法==
2. 关注：状态a:arrow_right:状态b:哪些方法执行了（回调方法）

   某个方法主动调用：状态a:arrow_right:状态b
3. 阻塞：临时状态，不可以作为最终状态

   死亡：最终状态。
