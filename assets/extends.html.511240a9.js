import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.4b0087e4.js";const e={},p=t(`<h1 id="泛型在继承上的体现" tabindex="-1"><a class="header-anchor" href="#泛型在继承上的体现" aria-hidden="true">#</a> 泛型在继承上的体现</h1><p>虽然类A是类B的父类，但是<code>G&lt;A&gt;</code> 和<code>G&lt;B&gt;</code>二者不具备子父类关系，二者是并列关系。</p><div class="custom-container info"><p class="custom-container-title">补充</p><p>类A是类B的父类，<code>A&lt;G&gt;</code> 是 <code>B&lt;G&gt;</code> 的父类</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

	<span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	obj <span class="token operator">=</span> str<span class="token punctuation">;</span>
	
	<span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	arr1 <span class="token operator">=</span> arr2<span class="token punctuation">;</span>
	<span class="token comment">// 编译不通过</span>
	<span class="token comment">// Date date = new Date();</span>
	<span class="token comment">// str = date;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 此时的list1和list2的类型不具子父类关系</span>
	<span class="token comment">// 编译不通过</span>
	<span class="token comment">// list1 = list2;</span>
	<span class="token comment">/*
	反证法：
	假设 list1 = list2;
	list1.add(123);导致混入非String的数据。出错。
	*/</span>
	<span class="token function">show</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">show1</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show1</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list3 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	
	list1 <span class="token operator">=</span> list3<span class="token punctuation">;</span>
	list2 <span class="token operator">=</span> list3<span class="token punctuation">;</span>
	
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function l(o,i){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","extends.html.vue"]]);export{r as default};
