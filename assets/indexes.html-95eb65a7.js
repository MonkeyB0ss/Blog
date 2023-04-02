const l=JSON.parse('{"key":"v-7ac575f5","path":"/mysql/mysql-advanced/indexes.html","title":"第06章_索引的数据结构","lang":"zh-CN","frontmatter":{"date":"2022-12-13T00:00:00.000Z","category":"基础进阶","tag":["MySQL"]},"headers":[{"level":2,"title":"1. 索引及其优缺点","slug":"_1-索引及其优缺点","link":"#_1-索引及其优缺点","children":[{"level":3,"title":"1.1 索引概述","slug":"_1-1-索引概述","link":"#_1-1-索引概述","children":[]},{"level":3,"title":"1.2 优点","slug":"_1-2-优点","link":"#_1-2-优点","children":[]},{"level":3,"title":"1.3 缺点","slug":"_1-3-缺点","link":"#_1-3-缺点","children":[]}]},{"level":2,"title":"2. InnoDB中索引的推演","slug":"_2-innodb中索引的推演","link":"#_2-innodb中索引的推演","children":[{"level":3,"title":"2.1 索引之前的查找","slug":"_2-1-索引之前的查找","link":"#_2-1-索引之前的查找","children":[]},{"level":3,"title":"2.2 设计索引","slug":"_2-2-设计索引","link":"#_2-2-设计索引","children":[]},{"level":3,"title":"2.3 常见索引概念","slug":"_2-3-常见索引概念","link":"#_2-3-常见索引概念","children":[]},{"level":3,"title":"2.4 InnoDB的B+树索引的注意事项","slug":"_2-4-innodb的b-树索引的注意事项","link":"#_2-4-innodb的b-树索引的注意事项","children":[]}]},{"level":2,"title":"3. MyISAM中的索引方案","slug":"_3-myisam中的索引方案","link":"#_3-myisam中的索引方案","children":[{"level":3,"title":"3.1 MyISAM索引的原理","slug":"_3-1-myisam索引的原理","link":"#_3-1-myisam索引的原理","children":[]},{"level":3,"title":"3.2 MyISAM 与 InnoDB对比","slug":"_3-2-myisam-与-innodb对比","link":"#_3-2-myisam-与-innodb对比","children":[]}]},{"level":2,"title":"4. 索引的代价","slug":"_4-索引的代价","link":"#_4-索引的代价","children":[]},{"level":2,"title":"5. MySQL数据结构选择的合理性","slug":"_5-mysql数据结构选择的合理性","link":"#_5-mysql数据结构选择的合理性","children":[{"level":3,"title":"5.1 二叉搜索树","slug":"_5-1-二叉搜索树","link":"#_5-1-二叉搜索树","children":[]},{"level":3,"title":"5.2 AVL树","slug":"_5-2-avl树","link":"#_5-2-avl树","children":[]},{"level":3,"title":"5.3 B-Tree","slug":"_5-3-b-tree","link":"#_5-3-b-tree","children":[]},{"level":3,"title":"5.4 B+Tree","slug":"_5-4-b-tree","link":"#_5-4-b-tree","children":[]}]}],"git":{"createdTime":1670945864000,"updatedTime":1670945864000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":24.61,"words":7383},"filePathRelative":"mysql/mysql-advanced/indexes.md","localizedDate":"2022年12月13日","excerpt":"<h1> 第06章_索引的数据结构</h1>\\n<h2> <strong>1.</strong> <strong>索引及其优缺点</strong></h2>\\n<h3> <strong>1.1</strong> <strong>索引概述</strong></h3>\\n<p>MySQL官方对索引的定义为：<strong>索引（Index）是帮助MySQL高效获取数据的数据结构</strong>。</p>\\n<p><strong>索引的本质</strong>：索引是数据结构。你可以简单理解为\\"排好序的快速查找数据结构\\"，满足特定查找算法。这些数据结构以某种方式指向数据，\\n这样就可以在这些数据结构的基础上实现<code>高级查找算法</code>。</p>"}');export{l as data};
