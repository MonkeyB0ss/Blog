import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.71f9ab67.js";const p={},e=t(`<h1 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h1><h2 id="通配符的使用" tabindex="-1"><a class="header-anchor" href="#通配符的使用" aria-hidden="true">#</a> 通配符的使用</h2><p>通配符：<code>?</code></p><p>类A是类B的父类，<code>G&lt;A&gt;</code>和<code>G&lt;B&gt;</code>是没关系的，二者共同的父类是：<code>G&lt;?&gt;</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	
	list <span class="token operator">=</span> list1<span class="token punctuation">;</span>
	list <span class="token operator">=</span> list2<span class="token punctuation">;</span>
	<span class="token comment">// 编译通过</span>
	<span class="token comment">// print(list1);</span>
	<span class="token comment">// print(list2);</span>
	
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;AA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;BB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list3<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;CC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list <span class="token operator">=</span> list3<span class="token punctuation">;</span>
	<span class="token comment">// 添加(写入)：对于List&lt;?&gt;就不能向其内部添加数据。</span>
	<span class="token comment">// 除了添加null之外。</span>
	<span class="token comment">// list.add(&quot;DD&quot;);</span>
	<span class="token comment">// list.add(&#39;?&#39;);</span>
	
	list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 获取(读取)：允许读取数据，读取的数据类型为Object。</span>
	<span class="token class-name">Object</span> o <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
	
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">Object</span> obj <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="有限制条件的通配符的使用" tabindex="-1"><a class="header-anchor" href="#有限制条件的通配符的使用" aria-hidden="true">#</a> 有限制条件的通配符的使用</h2><p>限制条件的通配符的使用。</p><ol><li><code>? extends A</code>: <code>G&lt;? extends A&gt;</code> 可以作为<code>G&lt;A&gt;</code>和<code>G&lt;B&gt;</code>的父类，其中B是A的子类</li><li><code>? super A</code>: <code>G&lt;? super A&gt;</code> 可以作为<code>G&lt;A&gt;</code>和<code>G&lt;B&gt;</code>的父类，其中B是A的父类</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> list1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> list3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> list4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	list1 <span class="token operator">=</span> list3<span class="token punctuation">;</span>
	list1 <span class="token operator">=</span> list4<span class="token punctuation">;</span>
	<span class="token comment">// list1 = list5;</span>
	
	<span class="token comment">// list2 = list3;</span>
	list2 <span class="token operator">=</span> list4<span class="token punctuation">;</span>
	list2 <span class="token operator">=</span> list5<span class="token punctuation">;</span>
	
	<span class="token comment">//读取数据：</span>
	list1 <span class="token operator">=</span> list3<span class="token punctuation">;</span>
	<span class="token class-name">Person</span> p <span class="token operator">=</span> list1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 编译不通过</span>
	<span class="token comment">// Student s = list1.get(0);</span>
	
	list2 <span class="token operator">=</span> list4<span class="token punctuation">;</span>
	<span class="token class-name">Object</span> obj <span class="token operator">=</span> list2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 编译不通过</span>
	<span class="token comment">// Person obj = list2.get(0);</span>
	
	<span class="token comment">// 写入数据：</span>
	<span class="token comment">// 编译不通过</span>
	<span class="token comment">// list1.add(new Student());</span>
	
	<span class="token comment">// 编译通过</span>
	list2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>	 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","wildcard.html.vue"]]);export{d as default};