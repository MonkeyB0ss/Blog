import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.22b533d7.js";const p="/Blog/assets/StreamAPI1.91e772ad.png",e="/Blog/assets/StreamAPI2.55918a86.png",o="/Blog/assets/StreamAPI3.9d8c92bc.png",c="/Blog/assets/StreamAPI4.646b6567.png",l="/Blog/assets/StreamAPI5.b47ab3b0.png",i="/Blog/assets/StreamAPI6.14243e19.png",u="/Blog/assets/StreamAPI7.837d2d23.png",r="/Blog/assets/StreamAPI8.b590241d.png",k={},m=t(`<h1 id="stream-api" tabindex="-1"><a class="header-anchor" href="#stream-api" aria-hidden="true">#</a> Stream API</h1><h2 id="stream-api的理解" tabindex="-1"><a class="header-anchor" href="#stream-api的理解" aria-hidden="true">#</a> Stream API的理解</h2><ol><li><p>Stream关注的是对数据的运算，与CPU打交道;集合关注的是数据的存储，与内存打交道</p></li><li><p>java8提供了一套api,使用这套api可以对内存中的数据进行过滤、排序、映射、归约等操作。类似于sql对数据库中表的相关操作。</p></li></ol><h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2><ol><li>Stream 自己不会存储元素。</li><li>Stream 不会改变源对象。相反，他们会返回一个持有结果的新Stream。</li><li>Stream 操作是延迟执行的。这意味着他们会等到需要结果的时候才执行。</li></ol><h2 id="stream的使用流程" tabindex="-1"><a class="header-anchor" href="#stream的使用流程" aria-hidden="true">#</a> Stream的使用流程</h2><ol><li>Stream的实例化</li><li>一系列的中间操作（过滤、映射、...)</li><li>终止操作</li></ol><h2 id="使用流程的注意点" tabindex="-1"><a class="header-anchor" href="#使用流程的注意点" aria-hidden="true">#</a> 使用流程的注意点</h2><ol><li>一个中间操作链，对数据源的数据进行处理</li><li>一旦执行终止操作，就执行中间操作链，并产生结果。之后，不会再被使用</li></ol><h2 id="步骤一-stream实例化" tabindex="-1"><a class="header-anchor" href="#步骤一-stream实例化" aria-hidden="true">#</a> 步骤一：Stream实例化</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建 Stream方式一：通过集合</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> employees <span class="token operator">=</span> <span class="token class-name">EmployeeData</span><span class="token punctuation">.</span><span class="token function">getEmployees</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">// default Stream&lt;E&gt; stream() : 返回一个顺序流</span>
	<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> employees<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">// default Stream&lt;E&gt; parallelStream() : 返回一个并行流</span>
	<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> parallelStream <span class="token operator">=</span> employees<span class="token punctuation">.</span><span class="token function">parallelStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建 Stream方式二：通过数组</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 调用Arrays类的static &lt;T&gt; Stream&lt;T&gt; stream(T[] array): 返回一个流</span>
	<span class="token class-name">IntStream</span> stream <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token class-name">Employee</span> e1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Employee</span> e2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span><span class="token string">&quot;Jerry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Employee</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>e1<span class="token punctuation">,</span>e2<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> stream1 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建 Stream方式三：通过Stream的of()</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建 Stream方式四：创建无限流</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 迭代</span>
	<span class="token comment">// public static&lt;T&gt; Stream&lt;T&gt; iterate(final T seed, final UnaryOperator&lt;T&gt; f)</span>
	<span class="token comment">//遍历前10个偶数</span>
	<span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> t <span class="token operator">-&gt;</span> t <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 生成</span>
	<span class="token comment">// public static&lt;T&gt; Stream&lt;T&gt; generate(Supplier&lt;T&gt; s)</span>
	<span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token operator">::</span><span class="token function">random</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤二-中间操作" tabindex="-1"><a class="header-anchor" href="#步骤二-中间操作" aria-hidden="true">#</a> 步骤二：中间操作</h2><p><img src="`+p+'" alt="img.png" loading="lazy"><img src="'+e+'" alt="img_1.png" loading="lazy"><img src="'+o+'" alt="img_2.png" loading="lazy"></p><h2 id="步骤三-终止操作" tabindex="-1"><a class="header-anchor" href="#步骤三-终止操作" aria-hidden="true">#</a> 步骤三：终止操作</h2><p><img src="'+c+'" alt="img_3.png" loading="lazy"><img src="'+l+'" alt="img_4.png" loading="lazy"><img src="'+i+'" alt="img_5.png" loading="lazy"><img src="'+u+'" alt="img_6.png" loading="lazy"></p><h2 id="collector需要使用collectors提供实例" tabindex="-1"><a class="header-anchor" href="#collector需要使用collectors提供实例" aria-hidden="true">#</a> Collector需要使用Collectors提供实例</h2><p><img src="'+r+'" alt="img_8.png" loading="lazy"></p>',17),d=[m];function v(b,g){return s(),a("div",null,d)}const y=n(k,[["render",v],["__file","StreamAPI.html.vue"]]);export{y as default};
