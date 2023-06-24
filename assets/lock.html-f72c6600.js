const l=JSON.parse('{"key":"v-2ee5941c","path":"/mysql/mysql-advanced/lock.html","title":"第15章_锁","lang":"zh-CN","frontmatter":{"date":"2022-12-15T00:00:00.000Z","category":"基础进阶","tag":["MySQL"]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. MySQL并发事务访问相同记录","slug":"_2-mysql并发事务访问相同记录","link":"#_2-mysql并发事务访问相同记录","children":[{"level":3,"title":"2.1 读-读情况","slug":"_2-1-读-读情况","link":"#_2-1-读-读情况","children":[]},{"level":3,"title":"2.2 写-写情况","slug":"_2-2-写-写情况","link":"#_2-2-写-写情况","children":[]},{"level":3,"title":"2.3 读-写或写-读情况","slug":"_2-3-读-写或写-读情况","link":"#_2-3-读-写或写-读情况","children":[]},{"level":3,"title":"2.4 并发问题的解决方案","slug":"_2-4-并发问题的解决方案","link":"#_2-4-并发问题的解决方案","children":[]}]},{"level":2,"title":"3. 锁的不同角度分类","slug":"_3-锁的不同角度分类","link":"#_3-锁的不同角度分类","children":[{"level":3,"title":"3.1 从数据操作的类型划分：读锁、写锁","slug":"_3-1-从数据操作的类型划分-读锁、写锁","link":"#_3-1-从数据操作的类型划分-读锁、写锁","children":[]},{"level":3,"title":"3.2 从数据操作的粒度划分：表级锁、页级锁、行锁","slug":"_3-2-从数据操作的粒度划分-表级锁、页级锁、行锁","link":"#_3-2-从数据操作的粒度划分-表级锁、页级锁、行锁","children":[]},{"level":3,"title":"3.3 从对待锁的态度划分:乐观锁、悲观锁","slug":"_3-3-从对待锁的态度划分-乐观锁、悲观锁","link":"#_3-3-从对待锁的态度划分-乐观锁、悲观锁","children":[]},{"level":3,"title":"3.4 按加锁的方式划分：显式锁、隐式锁","slug":"_3-4-按加锁的方式划分-显式锁、隐式锁","link":"#_3-4-按加锁的方式划分-显式锁、隐式锁","children":[]},{"level":3,"title":"3.5 其它锁之：全局锁","slug":"_3-5-其它锁之-全局锁","link":"#_3-5-其它锁之-全局锁","children":[]},{"level":3,"title":"3.6 其它锁之：死锁","slug":"_3-6-其它锁之-死锁","link":"#_3-6-其它锁之-死锁","children":[]}]},{"level":2,"title":"4. 锁的内存结构","slug":"_4-锁的内存结构","link":"#_4-锁的内存结构","children":[]},{"level":2,"title":"5. 锁监控","slug":"_5-锁监控","link":"#_5-锁监控","children":[]}],"git":{"createdTime":1671116161000,"updatedTime":1671116161000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":27.37,"words":8212},"filePathRelative":"mysql/mysql-advanced/lock.md","localizedDate":"2022年12月15日","excerpt":"<h1> 第15章_锁</h1>\\n<h2> <strong>1.</strong> <strong>概述</strong></h2>\\n<p>在数据库中，除传统的计算资源（如CPU、RAM、I/O等）的争用以外，数据也是一种供许多用户共享的资源。为保证数据的一致性，需要对<code>并发操作进行控制</code>\\n，因此产生了<code>锁</code>。同时<code>锁机制</code>也为实现MySQL的各个隔离级别提供了保证。 锁冲突 也是影响数据库<code>并发访问性能</code>\\n的一个重要因素。所以锁对数据库而言显得尤其重要，也更加复杂。</p>\\n<h2> <strong>2. MySQL并发事务访问相同记录</strong></h2>"}');export{l as data};