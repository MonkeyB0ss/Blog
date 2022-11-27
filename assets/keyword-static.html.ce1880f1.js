import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,b as n,d as s,a as o,w as l,e as a,r as p}from"./app.83f8fc33.js";const d="/Blog/assets/static.067014b9.png",u={},r=a('<h1 id="关键字-static" tabindex="-1"><a class="header-anchor" href="#关键字-static" aria-hidden="true">#</a> 关键字：static</h1><p><code>static</code>: <strong>静态的</strong></p><h2 id="可以用来修饰的结构" tabindex="-1"><a class="header-anchor" href="#可以用来修饰的结构" aria-hidden="true">#</a> 可以用来修饰的结构</h2><p>主要用来修饰类的内部结构<br><code>属性</code>、<code>方法</code>、<code>代码块</code>、<code>内部类</code></p><h2 id="static修饰属性-静态变量-或类变量" tabindex="-1"><a class="header-anchor" href="#static修饰属性-静态变量-或类变量" aria-hidden="true">#</a> static修饰属性：静态变量（或类变量）</h2><ol><li><p>属性，是否使用static修饰，又分为：<code>静态属性</code> vs <code>非静态属性</code>(<code>实例变量</code>)</p><ul><li><code>实例变量</code>：我们创建了类的多个对象，每个对象都独立的拥一套类中的非静态属性。当修改其中一个对象中的非静态属性时，不会导致其他对象中同样的属性值的修改。</li><li><code>静态变量</code>：我们创建了类的多个对象，多个对象共享同一个静态变量。当通过某一个对象修改静态变量时，会导致其他对象调用此静态变量时，是修改过了的。</li></ul></li><li><p>static修饰属性的其他说明</p><ul><li>静态变量随着类的加载而加载。可以通过<code>类.静态变量</code>的方式进行调用</li><li>静态变量的加载要早于对象的创建。</li><li>由于类只会加载一次，则静态变量在内存中也只会存在一份：存在方法区的静态域中。</li></ul></li><li><p>静态属性举例：<code>System.out</code>; <code>Math.PI</code>;</p></li></ol><h2 id="静态变量内存解析" tabindex="-1"><a class="header-anchor" href="#静态变量内存解析" aria-hidden="true">#</a> 静态变量内存解析</h2><p><img src="'+d+'" alt="img.png" loading="lazy"></p><h2 id="static修饰方法-静态方法、类方法" tabindex="-1"><a class="header-anchor" href="#static修饰方法-静态方法、类方法" aria-hidden="true">#</a> static修饰方法：静态方法、类方法</h2><ol><li><p>随着类的加载而加载，可以通过<code>类.静态方法</code>的方式进行调用</p></li><li><p>静态方法 非静态方法</p></li><li><p>静态方法中，只能调用静态的方法或属性 非静态方法中，既可以调用非静态的方法或属性，也可以调用静态的方法或属性</p></li></ol><h2 id="static的注意点" tabindex="-1"><a class="header-anchor" href="#static的注意点" aria-hidden="true">#</a> static的注意点</h2><ol><li>在静态的方法内，不能使用<code>this</code>关键字、<code>super</code>关键字</li><li>关于静态属性和静态方法的使用，大家都从生命周期的角度去理解。</li></ol><h2 id="如何判定属性和方法应该使用static关键字" tabindex="-1"><a class="header-anchor" href="#如何判定属性和方法应该使用static关键字" aria-hidden="true">#</a> 如何判定属性和方法应该使用static关键字</h2><ol><li><p>关于属性</p><ul><li>属性是可以被多个对象所共享的，不会随着对象的不同而不同的。</li><li>类中的常量也常常声明为static</li></ul></li><li><p>关于方法</p><ul><li>操作静态属性的方法，通常设置为static的</li><li>工具类中的方法，习惯上声明为static的。 比如：Math、Arrays、Collections</li></ul></li></ol><h2 id="使用举例" tabindex="-1"><a class="header-anchor" href="#使用举例" aria-hidden="true">#</a> 使用举例</h2>',15),k=n("li",null,"举例一：Arrays、Math、Collections等工具类",-1),v=n("li",null,"举例三：",-1),m=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
	<span class="token comment">// 自动赋值</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		id <span class="token operator">=</span> init<span class="token operator">++</span><span class="token punctuation">;</span>
		total<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span><span class="token punctuation">{</span>
		 <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// id = init++;</span>
         <span class="token comment">// total++;</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 记录创建的圆的个数</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> total<span class="token punctuation">;</span>
	<span class="token comment">// static声明的属性被所对象所共享</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> init <span class="token operator">=</span> <span class="token number">1001</span><span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		 <span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getRadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 <span class="token keyword">return</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRadius</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 <span class="token keyword">return</span> id<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  	<span class="token keyword">return</span> total<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(h,y){const t=p("RouterLink");return i(),c("div",null,[r,n("ul",null,[k,n("li",null,[s("举例二："),o(t,{to:"/java/java-basic/design-patterns/single.html"},{default:l(()=>[s("单例模式")]),_:1})]),v]),m])}const f=e(u,[["render",b],["__file","keyword-static.html.vue"]]);export{f as default};