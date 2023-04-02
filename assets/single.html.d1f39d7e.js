import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.c62a3edb.js";const t={},c=e(`<h1 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h1><h2 id="设计模式的说明" tabindex="-1"><a class="header-anchor" href="#设计模式的说明" aria-hidden="true">#</a> 设计模式的说明</h2><div class="custom-container tip"><p class="custom-container-title">设计模式</p><p>是在大量的实践中总结和理论化之后优的代码结构、编程风格、以及解决问题的思考方式.</p></div><div class="custom-container info"><p class="custom-container-title">常用设计模式</p><p>23种经典的设计模式</p><ul><li>创建型模式，共 5️⃣ 种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。</li><li>结构型模式，共 7️⃣ 种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。</li><li>行为型模式，共 1️⃣1️⃣ 种：策略模式、模板方法模式、观察者模式、迭代器模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。</li></ul></div><h2 id="单例模式-1" tabindex="-1"><a class="header-anchor" href="#单例模式-1" aria-hidden="true">#</a> 单例模式</h2><h3 id="要解决的问题" tabindex="-1"><a class="header-anchor" href="#要解决的问题" aria-hidden="true">#</a> 要解决的问题</h3><p>所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例。</p><h3 id="具体代码的实现" tabindex="-1"><a class="header-anchor" href="#具体代码的实现" aria-hidden="true">#</a> 具体代码的实现</h3><p>饿汉式1：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Bank</span><span class="token punctuation">{</span>

	<span class="token comment">// 1.私化类的构造器</span>
	<span class="token keyword">private</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 2.内部创建类的对象</span>
	<span class="token comment">// 4.要求此对象也必须声明为静态的</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 3.提供公共的静态的方法，返回类的对象</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>饿汉式2：使用了静态代码块</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Order</span><span class="token punctuation">{</span>

	<span class="token comment">// 1.私化类的构造器</span>
	<span class="token keyword">private</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 2.声明当前类对象，没初始化</span>
	<span class="token comment">// 4.此对象也必须声明为static的</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token keyword">static</span><span class="token punctuation">{</span>
		instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

	<span class="token comment">// 3.声明public、static的返回当前类对象的方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>懒汉式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Order</span><span class="token punctuation">{</span>

	<span class="token comment">// 1.私化类的构造器</span>
	<span class="token keyword">private</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 2.声明当前类对象，没初始化</span>
	<span class="token comment">// 4.此对象也必须声明为static的</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 3.声明public、static的返回当前类对象的方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两种方式的对比" tabindex="-1"><a class="header-anchor" href="#两种方式的对比" aria-hidden="true">#</a> 两种方式的对比</h3><div class="custom-container tip"><p class="custom-container-title">饿汉式</p><p><strong>坏处</strong>：对象加载时间过长。<br><strong>好处</strong>：饿汉式是线程安全的</p></div><div class="custom-container tip"><p class="custom-container-title">懒汉式</p><p><strong>好处</strong>：延迟对象的创建。<br> 目前的写法<strong>坏处</strong>：<mark>线程不安全</mark></p></div>`,17),i=[c];function p(l,o){return s(),a("div",null,i)}const u=n(t,[["render",p],["__file","single.html.vue"]]);export{u as default};
