import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.28ace696.js";const e="/Blog/assets/abstract.ed164fb8.png",p="/Blog/assets/abstract1.f76da676.png",o={},c=t('<h1 id="关键字-abstract" tabindex="-1"><a class="header-anchor" href="#关键字-abstract" aria-hidden="true">#</a> 关键字：abstract</h1><p><code>abstract</code>: 抽象的</p><h2 id="可以用来修饰" tabindex="-1"><a class="header-anchor" href="#可以用来修饰" aria-hidden="true">#</a> 可以用来修饰</h2><p>类、方法</p><h2 id="具体" tabindex="-1"><a class="header-anchor" href="#具体" aria-hidden="true">#</a> 具体</h2><h3 id="修饰类-抽象类" tabindex="-1"><a class="header-anchor" href="#修饰类-抽象类" aria-hidden="true">#</a> 修饰类：抽象类</h3><ol><li>此类不能实例化</li><li>抽象类中一定有构造器，便于子类实例化时调用（涉及：子类对象实例化的全过程）</li><li>开发中，都会提供抽象类的子类，让子类对象实例化，完成相关的操作 ---&gt;抽象的使用前提：继承性</li></ol><h3 id="修饰方法-抽象方法" tabindex="-1"><a class="header-anchor" href="#修饰方法-抽象方法" aria-hidden="true">#</a> 修饰方法：抽象方法</h3><ol><li>抽象方法只方法的声明，没方法体</li><li>包含抽象方法的类，一定是一个抽象类。反之，抽象类中可以没有抽象方法的。</li><li>若子类重写了父类中的所的抽象方法后，此子类方可实例化</li><li>若子类没重写父类中的所的抽象方法，则此子类也是一个抽象类，需要使用abstract修饰</li></ol><h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2><ol><li>abstract不能用来修饰：属性、构造器等结构</li><li>abstract不能用来修饰私方法、静态方法、final的方法、final的类</li></ol><h2 id="abstract的应用举例" tabindex="-1"><a class="header-anchor" href="#abstract的应用举例" aria-hidden="true">#</a> abstract的应用举例</h2><p>举例一：</p><p><img src="'+e+`" alt="img.png" loading="lazy"></p><p>举例二：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">GeometricObject</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">double</span> <span class="token function">findArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">GeometricObject</span><span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例三： IO流中设计到的抽象类：<code>InputStream</code> / <code>OutputStream</code> / <code>Reader</code> / <code>Writer</code></p><p>在其内部定义了抽象的<code>read()</code>、<code>write()</code>方法。</p><h2 id="模板方法的设计模式" tabindex="-1"><a class="header-anchor" href="#模板方法的设计模式" aria-hidden="true">#</a> 模板方法的设计模式</h2><ol><li>解决的问题<div class="custom-container tip"><p class="custom-container-title">提示</p><p>在软件开发中实现一个算法时，整体步骤很固定、通用，这些步骤已经在父类中写好了。但是某些部分易变，易变部分可以抽象出来，供不同子类实现。这就是一种模板模式。</p></div></li><li>举例<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Template</span><span class="token punctuation">{</span>
   <span class="token comment">// 计算某段代码执行所需要花费的时间</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">spendTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">code</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//不确定的部分、易变的部分</span>
        
        <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;花费的时间为：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">code</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubTemplate</span> <span class="token keyword">extends</span> <span class="token class-name">Template</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">code</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">boolean</span> isFlag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>j <span class="token operator">&lt;=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">%</span> j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    isFlag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>isFlag<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>应用场景 <img src="`+p+'" alt="img.png" loading="lazy"></li></ol>',20),l=[c];function i(u,r){return s(),a("div",null,l)}const v=n(o,[["render",i],["__file","keyword-abstract.html.vue"]]);export{v as default};
