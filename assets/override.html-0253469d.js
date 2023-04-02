const n=JSON.parse('{"key":"v-af4c19ea","path":"/java/java-basic/object/middle/override.html","title":"方法的重写","lang":"zh-CN","frontmatter":{"date":"2022-11-21T00:00:00.000Z","category":"基础","tag":["JAVA"]},"headers":[{"level":2,"title":"什么是方法的重写❓","slug":"什么是方法的重写❓","link":"#什么是方法的重写❓","children":[]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]},{"level":2,"title":"举例","slug":"举例","link":"#举例","children":[]},{"level":2,"title":"重写的规则","slug":"重写的规则","link":"#重写的规则","children":[]},{"level":2,"title":"面试题","slug":"面试题","link":"#面试题","children":[]}],"git":{"createdTime":1669474184000,"updatedTime":1669474184000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":2.67,"words":802},"filePathRelative":"java/java-basic/object/middle/override.md","localizedDate":"2022年11月21日","excerpt":"<h1> 方法的重写</h1>\\n<h2> 什么是方法的重写❓</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">override 或 overwrite</p>\\n<p>子类继承父类以后，可以对父类中同名同参数的方法，进行覆盖操作.</p>\\n</div>\\n<h2> 应用</h2>\\n<p><code>重写</code>以后，当创建子类对象以后，通过子类对象调用子父类中的同名同参数的方法时，实际执行的是子类重写父类的方法。</p>\\n<h2> 举例</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Circle</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//求面积</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">double</span> <span class=\\"token function\\">findArea</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Cylinder</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Circle</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//求表面积</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">double</span> <span class=\\"token function\\">findArea</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Account</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">withdraw</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">double</span> amt<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">CheckAccount</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Account</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">withdraw</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">double</span> amt<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
