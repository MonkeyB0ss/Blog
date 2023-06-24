const l=JSON.parse('{"key":"v-3c744a85","path":"/mysql/mysql-advanced/NF.html","title":"第11章_数据库的设计规范","lang":"zh-CN","frontmatter":{"date":"2022-12-14T00:00:00.000Z","category":"基础进阶","tag":["MySQL"]},"headers":[{"level":2,"title":"1. 范 式","slug":"_1-范-式","link":"#_1-范-式","children":[{"level":3,"title":"1.1 范式简介","slug":"_1-1-范式简介","link":"#_1-1-范式简介","children":[]},{"level":3,"title":"1.2 范式都包括哪些","slug":"_1-2-范式都包括哪些","link":"#_1-2-范式都包括哪些","children":[]},{"level":3,"title":"1.3 键和相关属性的概念","slug":"_1-3-键和相关属性的概念","link":"#_1-3-键和相关属性的概念","children":[]},{"level":3,"title":"1.4 第一范式(1st NF)","slug":"_1-4-第一范式-1st-nf","link":"#_1-4-第一范式-1st-nf","children":[]},{"level":3,"title":"1.5 第二范式(2nd NF)","slug":"_1-5-第二范式-2nd-nf","link":"#_1-5-第二范式-2nd-nf","children":[]},{"level":3,"title":"1.6 第三范式(3rd NF)","slug":"_1-6-第三范式-3rd-nf","link":"#_1-6-第三范式-3rd-nf","children":[]},{"level":3,"title":"1.7 小结","slug":"_1-7-小结","link":"#_1-7-小结","children":[]}]},{"level":2,"title":"2. 反范式化","slug":"_2-反范式化","link":"#_2-反范式化","children":[{"level":3,"title":"2.1 概述","slug":"_2-1-概述","link":"#_2-1-概述","children":[]},{"level":3,"title":"2.2 反范式的新问题","slug":"_2-2-反范式的新问题","link":"#_2-2-反范式的新问题","children":[]},{"level":3,"title":"2.3 反范式的适用场景","slug":"_2-3-反范式的适用场景","link":"#_2-3-反范式的适用场景","children":[]}]},{"level":2,"title":"3. BCNF(巴斯范式)","slug":"_3-bcnf-巴斯范式","link":"#_3-bcnf-巴斯范式","children":[]},{"level":2,"title":"4. ER模型","slug":"_4-er模型","link":"#_4-er模型","children":[{"level":3,"title":"4.1 ER 模型包括那些要素？","slug":"_4-1-er-模型包括那些要素","link":"#_4-1-er-模型包括那些要素","children":[]},{"level":3,"title":"4.2 关系的类型","slug":"_4-2-关系的类型","link":"#_4-2-关系的类型","children":[]}]},{"level":2,"title":"5. 数据表的设计原则","slug":"_5-数据表的设计原则","link":"#_5-数据表的设计原则","children":[]},{"level":2,"title":"6. 数据库对象编写建议","slug":"_6-数据库对象编写建议","link":"#_6-数据库对象编写建议","children":[{"level":3,"title":"6.1 关于库","slug":"_6-1-关于库","link":"#_6-1-关于库","children":[]},{"level":3,"title":"6.2 关于表、列","slug":"_6-2-关于表、列","link":"#_6-2-关于表、列","children":[]},{"level":3,"title":"6.3 关于索引","slug":"_6-3-关于索引","link":"#_6-3-关于索引","children":[]},{"level":3,"title":"6.4 SQL编写","slug":"_6-4-sql编写","link":"#_6-4-sql编写","children":[]}]}],"git":{"createdTime":1671029305000,"updatedTime":1671029305000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":14.92,"words":4476},"filePathRelative":"mysql/mysql-advanced/NF.md","localizedDate":"2022年12月14日","excerpt":"<h1> 第11章_数据库的设计规范</h1>\\n<h2> <strong>1.</strong> <strong>范 式</strong></h2>\\n<h3> <strong>1.1</strong> <strong>范式简介</strong></h3>\\n<p><strong>在关系型数据库中，关于数据表设计的基本原则、规则就称为范式。</strong>\\n可以理解为，一张数据表的设计结构需要满足的某种设计标准的<code>级别</code>。要想设计一个结构合理的关系型数据库，必须满足一定的范式。</p>\\n<h3> <strong>1.2</strong> <strong>范式都包括哪些</strong></h3>"}');export{l as data};