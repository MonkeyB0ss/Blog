import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.71f9ab67.js";const e="/Blog/assets/custom1.279bf922.png",p="/Blog/assets/custom2.8cc3563b.png",c={},o=t(`<h1 id="自定义泛型类、泛型接口、泛型方法" tabindex="-1"><a class="header-anchor" href="#自定义泛型类、泛型接口、泛型方法" aria-hidden="true">#</a> 自定义泛型类、泛型接口、泛型方法</h1><h2 id="order-java" tabindex="-1"><a class="header-anchor" href="#order-java" aria-hidden="true">#</a> Order.java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Order</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token class-name">String</span> orderName<span class="token punctuation">;</span>
	<span class="token keyword">int</span> orderId<span class="token punctuation">;</span>
	
	<span class="token comment">// 类的内部结构就可以使用类的泛型</span>
	
	<span class="token class-name">T</span> orderT<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 编译不通过</span>
		<span class="token comment">// T[] arr = new T[10];</span>
		<span class="token comment">// 编译通过</span>
		<span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderName<span class="token punctuation">,</span><span class="token keyword">int</span> orderId<span class="token punctuation">,</span><span class="token class-name">T</span> orderT<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>orderName <span class="token operator">=</span> orderName<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>orderId <span class="token operator">=</span> orderId<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>orderT <span class="token operator">=</span> orderT<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 如下的个方法都不是泛型方法</span>
	<span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getOrderT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> orderT<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOrderT</span><span class="token punctuation">(</span><span class="token class-name">T</span> orderT<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>orderT <span class="token operator">=</span> orderT<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;Order{&quot;</span> <span class="token operator">+</span>
		<span class="token string">&quot;orderName=&#39;&quot;</span> <span class="token operator">+</span> orderName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
		<span class="token string">&quot;, orderId=&quot;</span> <span class="token operator">+</span> orderId <span class="token operator">+</span>
		<span class="token string">&quot;, orderT=&quot;</span> <span class="token operator">+</span> orderT <span class="token operator">+</span>
		<span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 静态方法中不能使用类的泛型。</span>
	<span class="token comment">// public static void show(T orderT){</span>
	<span class="token comment">//      System.out.println(orderT);</span>
	<span class="token comment">// }</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 编译不通过</span>
		<span class="token comment">// try{</span>
		<span class="token comment">// }catch(T t){</span>
		<span class="token comment">// }</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 泛型方法：在方法中出现了泛型的结构，泛型参数与类的泛型参数没任何关系。</span>
	<span class="token comment">// 换句话说，泛型方法所属的类是不是泛型类都没关系。</span>
	<span class="token comment">// 泛型方法，可以声明为静态的。原因：泛型参数是在调用方法时确定的。并非在实例化类时确定。</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">copyFromArrayToList</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
	
		<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">E</span> e <span class="token operator">:</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
			list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">return</span> list<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="suborder-java" tabindex="-1"><a class="header-anchor" href="#suborder-java" aria-hidden="true">#</a> SubOrder.java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubOrder</span> <span class="token keyword">extends</span> <span class="token class-name">Order</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token comment">// SubOrder:不是泛型类</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">copyFromArrayToList</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
	
		<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">E</span> e <span class="token operator">:</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
			list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> list<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 实例化时，如下的代码是错误的</span>
<span class="token class-name">SubOrder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubOrder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="suborder1-java" tabindex="-1"><a class="header-anchor" href="#suborder1-java" aria-hidden="true">#</a> SubOrder1.java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubOrder1</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Order</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token comment">//SubOrder1&lt;T&gt;:仍然是泛型类</span>
	
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 如果定义了泛型类，实例化没指明类的泛型，则认为此泛型类型为Object类型</span>
	<span class="token comment">// 要求：如果大家定义了类是带泛型的，建议在实例化时要指明类的泛型。</span>
	<span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	order<span class="token punctuation">.</span><span class="token function">setOrderT</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	order<span class="token punctuation">.</span><span class="token function">setOrderT</span><span class="token punctuation">(</span><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//建议：实例化时指明类的泛型</span>
	<span class="token class-name">Order</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> order1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;orderAA&quot;</span><span class="token punctuation">,</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token string">&quot;order:AA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	order1<span class="token punctuation">.</span><span class="token function">setOrderT</span><span class="token punctuation">(</span><span class="token string">&quot;AA:hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">SubOrder</span> sub1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 由于子类在继承带泛型的父类时，指明了泛型类型。则实例化子类对象时，不再需要指明泛型。</span>
	sub1<span class="token punctuation">.</span><span class="token function">setOrderT</span><span class="token punctuation">(</span><span class="token number">1122</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token class-name">SubOrder1</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> sub2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubOrder1</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	sub2<span class="token punctuation">.</span><span class="token function">setOrderT</span><span class="token punctuation">(</span><span class="token string">&quot;order2...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 泛型不同的引用不能相互赋值。</span>
	<span class="token comment">// list1 = list2;</span>
	
	<span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">Person</span> p2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	p1 <span class="token operator">=</span> p2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试泛型方法</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">Order</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 泛型方法在调用时，指明泛型参数的类型。</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> order<span class="token punctuation">.</span><span class="token function">copyFromArrayToList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2><p><img src="`+e+'" alt="img.png"><img src="'+p+`" alt="img.png"></p><h2 id="应用场景举例" tabindex="-1"><a class="header-anchor" href="#应用场景举例" aria-hidden="true">#</a> 应用场景举例</h2><h3 id="dao-java" tabindex="-1"><a class="header-anchor" href="#dao-java" aria-hidden="true">#</a> DAO.java</h3><p>定义了操作数据库中的表的通用操作。ORM思想(数据库中的表和Java中的类对应)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DAO</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token comment">// 表的共性操作的DAO</span>
	
	<span class="token comment">// 添加一条记录</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 删除一条记录</span>
	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//修改一条记录</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 查询一条记录</span>
	<span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 查询多条记录</span>
	<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getForList</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 泛型方法</span>
	<span class="token comment">// 举例：获取表中一共有多少条记录？获取最大的员工入职时间？</span>
	<span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">E</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customerdao-java" tabindex="-1"><a class="header-anchor" href="#customerdao-java" aria-hidden="true">#</a> CustomerDAO.java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 只能操作某一个表的DAO</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomerDAO</span> <span class="token keyword">extends</span> <span class="token class-name">DAO</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="studentdao-java" tabindex="-1"><a class="header-anchor" href="#studentdao-java" aria-hidden="true">#</a> StudentDAO.java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 只能操作某一个表的DAO</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentDAO</span> <span class="token keyword">extends</span> <span class="token class-name">DAO</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[o];function i(u,r){return s(),a("div",null,l)}const v=n(c,[["render",i],["__file","custom.html.vue"]]);export{v as default};
