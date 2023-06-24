const n=JSON.parse('{"key":"v-463a97a4","path":"/java/java-advanced/new-features/constructor.html","title":"构造器引用与数组引用","lang":"zh-CN","frontmatter":{"date":"2022-12-04T00:00:00.000Z","category":"基础进阶","tag":["JAVA"]},"headers":[{"level":2,"title":"构造器引用格式","slug":"构造器引用格式","link":"#构造器引用格式","children":[]},{"level":2,"title":"构造器引用使用要求","slug":"构造器引用使用要求","link":"#构造器引用使用要求","children":[]},{"level":2,"title":"构造器引用举例","slug":"构造器引用举例","link":"#构造器引用举例","children":[]},{"level":2,"title":"数组引用格式","slug":"数组引用格式","link":"#数组引用格式","children":[]},{"level":2,"title":"数组引用举例","slug":"数组引用举例","link":"#数组引用举例","children":[]}],"git":{"createdTime":1670089651000,"updatedTime":1670089651000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":0.97,"words":290},"filePathRelative":"java/java-advanced/new-features/constructor.md","localizedDate":"2022年12月4日","excerpt":"<h1> 构造器引用与数组引用</h1>\\n<h2> 构造器引用格式</h2>\\n<p>类名::new</p>\\n<h2> 构造器引用使用要求</h2>\\n<p>和方法引用类似，函数式接口的抽象方法的形参列表和构造器的形参列表一致。抽象方法的返回值类型即为构造器所属的类的类型</p>\\n<h2> 构造器引用举例</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// Supplier中的T get()</span>\\n<span class=\\"token comment\\">// Employee的空参构造器：Employee()</span>\\n<span class=\\"token annotation punctuation\\">@Test</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">test1</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\n\\t<span class=\\"token class-name\\">Supplier</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">&gt;</span></span> sup <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Supplier</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token annotation punctuation\\">@Override</span>\\n\\t\\t<span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Employee</span> <span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*******************\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token class-name\\">Supplier</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">&gt;</span></span>  sup1 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>sup1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*******************\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token class-name\\">Supplier</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">&gt;</span></span>  sup2 <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Employee</span> <span class=\\"token operator\\">::</span> <span class=\\"token keyword\\">new</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>sup2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// Function中的R apply(T t)</span>\\n<span class=\\"token annotation punctuation\\">@Test</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">test2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token class-name\\">Function</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">&gt;</span></span> func1 <span class=\\"token operator\\">=</span> id <span class=\\"token operator\\">-&gt;</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">Employee</span> employee <span class=\\"token operator\\">=</span> func1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1001</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>employee<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*******************\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token class-name\\">Function</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">&gt;</span></span> func2 <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Employee</span> <span class=\\"token operator\\">::</span> <span class=\\"token keyword\\">new</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">Employee</span> employee1 <span class=\\"token operator\\">=</span> func2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1002</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>employee1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// BiFunction中的R apply(T t,U u)</span>\\n<span class=\\"token annotation punctuation\\">@Test</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">test3</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token class-name\\">BiFunction</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">&gt;</span></span> func1 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">,</span>name<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">(</span>id<span class=\\"token punctuation\\">,</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>func1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1001</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"Tom\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*******************\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\n\\t<span class=\\"token class-name\\">BiFunction</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">Employee</span><span class=\\"token punctuation\\">&gt;</span></span> func2 <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Employee</span> <span class=\\"token operator\\">::</span> <span class=\\"token keyword\\">new</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>func2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1002</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"Tom\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};