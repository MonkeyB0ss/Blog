const n=JSON.parse('{"key":"v-5531c820","path":"/java/java-advanced/collection/list.html","title":"Collection子接口：List接口","lang":"zh-CN","frontmatter":{"date":"2022-12-01T00:00:00.000Z","category":"基础进阶","tag":["JAVA"]},"headers":[{"level":2,"title":"存储的数据特点","slug":"存储的数据特点","link":"#存储的数据特点","children":[]},{"level":2,"title":"常用方法💡","slug":"常用方法💡","link":"#常用方法💡","children":[]},{"level":2,"title":"常用实现类","slug":"常用实现类","link":"#常用实现类","children":[]},{"level":2,"title":"源码分析🔔","slug":"源码分析🔔","link":"#源码分析🔔","children":[{"level":3,"title":"ArrayList的源码分析","slug":"arraylist的源码分析","link":"#arraylist的源码分析","children":[]},{"level":3,"title":"LinkedList的源码分析","slug":"linkedlist的源码分析","link":"#linkedlist的源码分析","children":[]},{"level":3,"title":"Vector的源码分析","slug":"vector的源码分析","link":"#vector的源码分析","children":[]}]},{"level":2,"title":"存储的元素的要求","slug":"存储的元素的要求","link":"#存储的元素的要求","children":[]}],"git":{"createdTime":1669908955000,"updatedTime":1669908955000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":2.23,"words":668},"filePathRelative":"java/java-advanced/collection/list.md","localizedDate":"2022年12月1日","excerpt":"<h1> Collection子接口：List接口</h1>\\n<h2> 存储的数据特点</h2>\\n<p>存储序的、可重复的数据。</p>\\n<h2> 常用方法💡</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>增：<span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Object</span> obj<span class=\\"token punctuation\\">)</span>\\n删：<span class=\\"token function\\">remove</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> index<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> <span class=\\"token function\\">remove</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Object</span> obj<span class=\\"token punctuation\\">)</span>\\n改：<span class=\\"token function\\">set</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> index<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Object</span> ele<span class=\\"token punctuation\\">)</span>\\n查：<span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> index<span class=\\"token punctuation\\">)</span>\\n插：<span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> index<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Object</span> ele<span class=\\"token punctuation\\">)</span>\\n长度：<span class=\\"token function\\">size</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n遍历：\\n① <span class=\\"token class-name\\">Iterator</span>迭代器方式\\n② 增强<span class=\\"token keyword\\">for</span>循环\\n③ 普通的循环\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
