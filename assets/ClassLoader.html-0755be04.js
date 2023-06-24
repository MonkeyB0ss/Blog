const s=JSON.parse('{"key":"v-4c65917c","path":"/java/java-advanced/reflection/ClassLoader.html","title":"了解ClassLoader","lang":"zh-CN","frontmatter":{"date":"2022-12-04T00:00:00.000Z","category":"基础进阶","tag":["JAVA"]},"headers":[{"level":2,"title":"类的加载过程----了解","slug":"类的加载过程-了解","link":"#类的加载过程-了解","children":[]},{"level":2,"title":"类的加载器的作用","slug":"类的加载器的作用","link":"#类的加载器的作用","children":[]},{"level":2,"title":"类的加载器的分类","slug":"类的加载器的分类","link":"#类的加载器的分类","children":[]},{"level":2,"title":"Java类编译、运行的执行的流程","slug":"java类编译、运行的执行的流程","link":"#java类编译、运行的执行的流程","children":[]},{"level":2,"title":"使用Classloader加载src目录下的配置文件","slug":"使用classloader加载src目录下的配置文件","link":"#使用classloader加载src目录下的配置文件","children":[]}],"git":{"createdTime":1670087861000,"updatedTime":1670087861000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":0.59,"words":176},"filePathRelative":"java/java-advanced/reflection/ClassLoader.md","localizedDate":"2022年12月4日","excerpt":"<h1> 了解ClassLoader</h1>\\n<h2> 类的加载过程----了解</h2>\\n<p></p>\\n<h2> 类的加载器的作用</h2>\\n<p></p>\\n<h2> 类的加载器的分类</h2>\\n<p></p>\\n<h2> Java类编译、运行的执行的流程</h2>\\n<p></p>\\n<h2> 使用Classloader加载src目录下的配置文件</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Test</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">test2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">Exception</span> <span class=\\"token punctuation\\">{</span>\\n\\n\\t<span class=\\"token class-name\\">Properties</span> pros <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Properties</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token comment\\">// 此时的文件默认在当前的module下。</span>\\n\\t<span class=\\"token comment\\">// 读取配置文件的方式一：</span>\\n\\t<span class=\\"token comment\\">// FileInputStream fis = new FileInputStream(\\"jdbc.properties\\");</span>\\n\\t<span class=\\"token comment\\">// FileInputStream fis = new FileInputStream(\\"src\\\\\\\\jdbc1.properties\\");</span>\\n\\t<span class=\\"token comment\\">// pros.load(fis);</span>\\n\\t\\n\\t<span class=\\"token comment\\">// 读取配置文件的方式二：使用ClassLoader</span>\\n\\t<span class=\\"token comment\\">// 配置文件默认识别为：当前module的src下</span>\\n\\t<span class=\\"token class-name\\">ClassLoader</span> classLoader <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">ClassLoaderTest</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getClassLoader</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">InputStream</span> is <span class=\\"token operator\\">=</span> classLoader<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getResourceAsStream</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"jdbc1.properties\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\tpros<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">load</span><span class=\\"token punctuation\\">(</span>is<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token class-name\\">String</span> user <span class=\\"token operator\\">=</span> pros<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getProperty</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"user\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">String</span> password <span class=\\"token operator\\">=</span> pros<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getProperty</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"password\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"user = \\"</span> <span class=\\"token operator\\">+</span> user <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\",password = \\"</span> <span class=\\"token operator\\">+</span> password<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{s as data};