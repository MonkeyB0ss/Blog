const l=JSON.parse('{"key":"v-4aece2b8","path":"/mysql/mysql-basic/procedure.html","title":"第15章_存储过程与函数","lang":"zh-CN","frontmatter":{"date":"2022-12-12T00:00:00.000Z","category":"基础","tag":["MySQL"]},"headers":[{"level":2,"title":"1. 存储过程概述","slug":"_1-存储过程概述","link":"#_1-存储过程概述","children":[{"level":3,"title":"1.1 理解","slug":"_1-1-理解","link":"#_1-1-理解","children":[]},{"level":3,"title":"1.2 分类","slug":"_1-2-分类","link":"#_1-2-分类","children":[]}]},{"level":2,"title":"2. 创建存储过程","slug":"_2-创建存储过程","link":"#_2-创建存储过程","children":[{"level":3,"title":"2.1 语法分析","slug":"_2-1-语法分析","link":"#_2-1-语法分析","children":[]},{"level":3,"title":"2.2 代码举例","slug":"_2-2-代码举例","link":"#_2-2-代码举例","children":[]}]},{"level":2,"title":"3. 调用存储过程","slug":"_3-调用存储过程","link":"#_3-调用存储过程","children":[{"level":3,"title":"3.1 调用格式","slug":"_3-1-调用格式","link":"#_3-1-调用格式","children":[]},{"level":3,"title":"3.2 代码举例","slug":"_3-2-代码举例","link":"#_3-2-代码举例","children":[]},{"level":3,"title":"3.3 如何调试","slug":"_3-3-如何调试","link":"#_3-3-如何调试","children":[]}]},{"level":2,"title":"4. 存储函数的使用","slug":"_4-存储函数的使用","link":"#_4-存储函数的使用","children":[{"level":3,"title":"4.1 语法分析","slug":"_4-1-语法分析","link":"#_4-1-语法分析","children":[]},{"level":3,"title":"4.2 调用存储函数","slug":"_4-2-调用存储函数","link":"#_4-2-调用存储函数","children":[]},{"level":3,"title":"4.3 代码举例","slug":"_4-3-代码举例","link":"#_4-3-代码举例","children":[]},{"level":3,"title":"4.4 对比存储函数和存储过程","slug":"_4-4-对比存储函数和存储过程","link":"#_4-4-对比存储函数和存储过程","children":[]}]},{"level":2,"title":"5. 存储过程和函数的查看、修改、删除","slug":"_5-存储过程和函数的查看、修改、删除","link":"#_5-存储过程和函数的查看、修改、删除","children":[{"level":3,"title":"5.1 查看","slug":"_5-1-查看","link":"#_5-1-查看","children":[]},{"level":3,"title":"5.2 修改","slug":"_5-2-修改","link":"#_5-2-修改","children":[]},{"level":3,"title":"5.3 删除","slug":"_5-3-删除","link":"#_5-3-删除","children":[]}]},{"level":2,"title":"6. 关于存储过程使用的争议","slug":"_6-关于存储过程使用的争议","link":"#_6-关于存储过程使用的争议","children":[{"level":3,"title":"6.1 优点","slug":"_6-1-优点","link":"#_6-1-优点","children":[]},{"level":3,"title":"6.2 缺点","slug":"_6-2-缺点","link":"#_6-2-缺点","children":[]}]}],"git":{"createdTime":1670862218000,"updatedTime":1670862218000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":17.88,"words":5363},"filePathRelative":"mysql/mysql-basic/procedure.md","localizedDate":"2022年12月12日","excerpt":"<h1> 第15章_存储过程与函数</h1>\\n<p>MySQL从5.0版本开始支持存储过程和函数。存储过程和函数能够将复杂的SQL逻辑封装在一起，应用程序无须关注存储过程和函数内部复杂的SQL逻辑，而只需要简单地调用存储过程和函数即可。</p>\\n<h2> 1. 存储过程概述</h2>\\n<h3> 1.1 理解</h3>\\n<p><strong>含义</strong>：存储过程的英文是 <code>Stored Procedure</code>。它的思想很简单，就是一组经过<code>预先编译</code>的 SQL 语句的封装。</p>\\n<p>执行过程：存储过程预先存储在 MySQL 服务器上，需要执行的时候，客户端只需要向服务器端发出调用存储过程的命令，服务器端就可以把预先存储好的这一系列\\nSQL 语句全部执行。</p>"}');export{l as data};