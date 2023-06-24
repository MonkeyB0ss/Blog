const e=JSON.parse('{"key":"v-5c881476","path":"/other/audition/JUC/Semaphore.html","title":"Semaphore：信号量","lang":"zh-CN","frontmatter":{"date":"2023-03-31T00:00:00.000Z","category":"面试","tag":["JUC"]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1680279876000,"updatedTime":1680279876000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"other/audition/JUC/Semaphore.md","localizedDate":"2023年3月31日","excerpt":"<h1> Semaphore：信号量</h1>\\n<h2> 概念</h2>\\n<p>信号量主要用于两个目的</p>\\n<ul>\\n<li>一个是用于共享资源的互斥使用</li>\\n<li>另一个用于并发线程数的控制</li>\\n</ul>\\n<h2> 代码</h2>\\n<p>我们模拟一个抢车位的场景，假设一共有6个车，3个停车位</p>\\n<p>那么我们首先需要定义信号量为3，也就是3个停车位</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token doc-comment comment\\">/**\\n* 初始化一个信号量为3，默认是false 非公平锁， 模拟3个停车位\\n*/</span>\\n<span class=\\"token class-name\\">Semaphore</span> semaphore <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Semaphore</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};