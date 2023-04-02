const n=JSON.parse('{"key":"v-bfc9df00","path":"/java/java-advanced/reflection/reflection.html","title":"反射的概述","lang":"zh-CN","frontmatter":{"date":"2022-12-04T00:00:00.000Z","category":"基础进阶","tag":["JAVA"]},"headers":[{"level":2,"title":"关于反射的理解","slug":"关于反射的理解","link":"#关于反射的理解","children":[]},{"level":2,"title":"体会反射机制的\\"动态性\\"","slug":"体会反射机制的-动态性","link":"#体会反射机制的-动态性","children":[]},{"level":2,"title":"反射机制能提供的功能","slug":"反射机制能提供的功能","link":"#反射机制能提供的功能","children":[]},{"level":2,"title":"相关API","slug":"相关api","link":"#相关api","children":[]}],"git":{"createdTime":1670087861000,"updatedTime":1670087861000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"java/java-advanced/reflection/reflection.md","localizedDate":"2022年12月4日","excerpt":"<h1> 反射的概述</h1>\\n<h2> 关于反射的理解</h2>\\n<p>Reflection（反射)是被视为动态语言的关键，反射机制允许程序在执行期借助于Reflection API取得任何类的内部信息，并能直接操作任意对象的内部属性及方法。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>框架 = 反射 + 注解 + 设计模式。</p>\\n</div>\\n<h2> 体会反射机制的\\"动态性\\"</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Test</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">test2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">;</span>i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">int</span> num <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Random</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">nextInt</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//0,1,2</span>\\n\\t\\t<span class=\\"token class-name\\">String</span> classPath <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token keyword\\">switch</span><span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token keyword\\">case</span> <span class=\\"token number\\">0</span><span class=\\"token operator\\">:</span>\\n\\t\\t\\t\\tclassPath <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"java.util.Date\\"</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token keyword\\">case</span> <span class=\\"token number\\">1</span><span class=\\"token operator\\">:</span>\\n\\t\\t\\t\\tclassPath <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"java.lang.Object\\"</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token keyword\\">case</span> <span class=\\"token number\\">2</span><span class=\\"token operator\\">:</span>\\n\\t\\t\\t\\tclassPath <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"com.atguigu.java.Person\\"</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">break</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\n\\t\\t<span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token class-name\\">Object</span> obj <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span>classPath<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>obj<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Exception</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\te<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">printStackTrace</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">/*\\n * 创建一个指定类的对象。\\n * classPath: 指定类的全类名\\n */</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Object</span> <span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> classPath<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">Exception</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token class-name\\">Class</span> clazz <span class=\\"token operator\\">=</span>  <span class=\\"token class-name\\">Class</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forName</span><span class=\\"token punctuation\\">(</span>classPath<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> clazz<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">newInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
