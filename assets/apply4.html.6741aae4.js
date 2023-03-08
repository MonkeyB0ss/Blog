import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.8925ff20.js";const p={},e=t(`<h1 id="反射应用四-动态代理" tabindex="-1"><a class="header-anchor" href="#反射应用四-动态代理" aria-hidden="true">#</a> 反射应用四：动态代理</h1><h2 id="代理模式的原理" tabindex="-1"><a class="header-anchor" href="#代理模式的原理" aria-hidden="true">#</a> 代理模式的原理</h2><p>使用一个代理将对象包装起来, 然后用该代理对象取代原始对象。任何对原始对象的调用都要通过代理。代理对象决定是否以及何时将方法调用转到原始对象上。</p><h2 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h2><h3 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h3><p>实现Runnable接口的方法创建多线程。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span> <span class="token class-name">MyThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//相当于被代理类</span>
<span class="token class-name">Class</span> <span class="token class-name">Thread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//相当于代理类</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">MyThread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//启动线程；调用线程的run()</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态代理的缺点" tabindex="-1"><a class="header-anchor" href="#静态代理的缺点" aria-hidden="true">#</a> 静态代理的缺点</h3><ol><li>代理类和目标对象的类都是在编译期间确定下来，不利于程序的扩展。</li><li>每一个代理类只能为一个接口服务，这样一来程序开发中必然产生过多的代理。</li></ol><h2 id="动态代理的特点" tabindex="-1"><a class="header-anchor" href="#动态代理的特点" aria-hidden="true">#</a> 动态代理的特点</h2><p>动态代理是指客户通过代理类来调用其它对象的方法，并且是在程序运行时根据需要动态创建目标类的代理对象。</p><h2 id="动态代理的实现" tabindex="-1"><a class="header-anchor" href="#动态代理的实现" aria-hidden="true">#</a> 动态代理的实现</h2><h3 id="需要解决的两个主要问题" tabindex="-1"><a class="header-anchor" href="#需要解决的两个主要问题" aria-hidden="true">#</a> 需要解决的两个主要问题</h3><ol><li>问题一：如何根据加载到内存中的被代理类，动态的创建一个代理类及其对象。（通过Proxy.newProxyInstance()实现）</li><li>问题二：当通过代理类的对象调用方法a时，如何动态的去调用被代理类中的同名方法a。( 通过InvocationHandler接口的实现类及其方法invoke())</li></ol><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Human</span><span class="token punctuation">{</span>

	<span class="token class-name">String</span> <span class="token function">getBelief</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token comment">// 被代理类</span>
<span class="token keyword">class</span> <span class="token class-name">SuperMan</span> <span class="token keyword">implements</span> <span class="token class-name">Human</span><span class="token punctuation">{</span>


	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBelief</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;I believe I can fly!&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我喜欢吃&quot;</span> <span class="token operator">+</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HumanUtil</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;====================通用方法一====================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;====================通用方法二====================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">ProxyFactory</span><span class="token punctuation">{</span>
	<span class="token comment">// 调用此方法，返回一个代理类的对象。解决问题一</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//obj:被代理类的对象</span>
		<span class="token class-name">MyInvocationHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyInvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		handler<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">Object</span> obj<span class="token punctuation">;</span><span class="token comment">//需要使用被代理类的对象进行赋值</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> obj<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>   

	<span class="token comment">// 当我们通过代理类的对象，调用方法a时，就会自动的调用如下的方法：invoke()</span>
	<span class="token comment">// 将被代理类要执行的方法a的功能就声明在invoke()中</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
	
		<span class="token class-name">HumanUtil</span> util <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HumanUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		util<span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// method:即为代理类对象调用的方法，此方法也就作为了被代理类对象要调用的方法</span>
		<span class="token comment">// obj:被代理类的对象</span>
		<span class="token class-name">Object</span> returnValue <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		util<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 上述方法的返回值就作为当前类中的invoke()的返回值。</span>
		<span class="token keyword">return</span> returnValue<span class="token punctuation">;</span>
	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SuperMan</span> superMan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// proxyInstance:代理类的对象</span>
		<span class="token class-name">Human</span> proxyInstance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Human</span><span class="token punctuation">)</span> <span class="token class-name">ProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxyInstance</span><span class="token punctuation">(</span>superMan<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 当通过代理类对象调用方法时，会自动的调用被代理类中同名的方法</span>
		<span class="token class-name">String</span> belief <span class="token operator">=</span> proxyInstance<span class="token punctuation">.</span><span class="token function">getBelief</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>belief<span class="token punctuation">)</span><span class="token punctuation">;</span>
		proxyInstance<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;四川麻辣烫&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;*****************************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">NikeClothFactory</span> nikeClothFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NikeClothFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">ClothFactory</span> proxyClothFactory <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ClothFactory</span><span class="token punctuation">)</span> <span class="token class-name">ProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxyInstance</span><span class="token punctuation">(</span>nikeClothFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		proxyClothFactory<span class="token punctuation">.</span><span class="token function">produceCloth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[e];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","apply4.html.vue"]]);export{d as default};
