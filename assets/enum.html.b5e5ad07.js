import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.912b6410.js";const p={},e=t(`<h1 id="枚举类的使用" tabindex="-1"><a class="header-anchor" href="#枚举类的使用" aria-hidden="true">#</a> 枚举类的使用</h1><h2 id="枚举类的说明" tabindex="-1"><a class="header-anchor" href="#枚举类的说明" aria-hidden="true">#</a> 枚举类的说明</h2><ol><li>枚举类的理解：类的对象只有有限个，确定的。我们称此类为枚举类</li><li>当需要定义一组常量时，强烈建议使用枚举类</li><li>如果枚举类中只一个对象，则可以作为单例模式的实现方式。</li></ol><h2 id="如何自定义枚举类❓" tabindex="-1"><a class="header-anchor" href="#如何自定义枚举类❓" aria-hidden="true">#</a> 如何自定义枚举类❓</h2><p>步骤：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//自定义枚举类</span>
<span class="token keyword">class</span> <span class="token class-name">Season</span><span class="token punctuation">{</span>
   <span class="token comment">// 1.声明Season对象的属性:private final修饰</span>
   <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
   <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>
   
   <span class="token comment">// 2.私化类的构造器,并给对象属性赋值</span>
   <span class="token keyword">private</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span><span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token comment">// 3.提供当前枚举类的多个对象：public static final的</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">SPRING</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">&quot;春天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;春暖花开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">SUMMER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">&quot;夏天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;夏日炎炎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">AUTUMN</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">&quot;秋天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;秋高气爽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> <span class="token constant">WINTER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">&quot;冬天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;冰天雪地&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
   <span class="token comment">// 4.其他诉求1：获取枚举类对象的属性</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 4.其他诉求1：提供toString()</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Season{&quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;seasonName=&#39;&quot;</span> <span class="token operator">+</span> seasonName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
      <span class="token string">&quot;, seasonDesc=&#39;&quot;</span> <span class="token operator">+</span> seasonDesc <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
      <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdk-5-0-新增使用enum定义枚举类" tabindex="-1"><a class="header-anchor" href="#jdk-5-0-新增使用enum定义枚举类" aria-hidden="true">#</a> jdk 5.0 新增使用enum定义枚举类</h2><p>步骤：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用enum关键字枚举类</span>
<span class="token keyword">enum</span> <span class="token class-name">Season1</span> <span class="token punctuation">{</span>
   <span class="token comment">// 1.提供当前枚举类的对象，多个对象之间用&quot;,&quot;隔开，末尾对象&quot;;&quot;结束</span>
   <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token string">&quot;春天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;春暖花开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token string">&quot;夏天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;夏日炎炎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token string">&quot;秋天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;秋高气爽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token string">&quot;冬天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;冰天雪地&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
   <span class="token comment">//2.声明Season对象的属性:private final修饰</span>
   <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
   <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>
   
   <span class="token comment">//2.私化类的构造器,并给对象属性赋值</span>
   
   <span class="token keyword">private</span> <span class="token class-name">Season1</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span><span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token comment">//4.其他诉求1：获取枚举类对象的属性</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> seasonName<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSeasonDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> seasonDesc<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举类常用方法" tabindex="-1"><a class="header-anchor" href="#枚举类常用方法" aria-hidden="true">#</a> 枚举类常用方法</h2><p>继承于java.lang.Enum类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Season1</span> summer <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token constant">SUMMER</span><span class="token punctuation">;</span>
<span class="token comment">//toString():返回枚举类对象的名称</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>summer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// System.out.println(Season1.class.getSuperclass());</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;****************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//values():返回所的枚举类对象构成的数组</span>
<span class="token class-name">Season1</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> values<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;****************&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread<span class="token punctuation">.</span>State</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values1 <span class="token operator">=</span> <span class="token class-name">Thread<span class="token punctuation">.</span>State</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> values1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>values1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//valueOf(String objName):返回枚举类中对象名是objName的对象。</span>
<span class="token class-name">Season1</span> winter <span class="token operator">=</span> <span class="token class-name">Season1</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token string">&quot;WINTER&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//如果没objName的枚举类对象，则抛异常：IllegalArgumentException</span>

<span class="token comment">// Season1 winter = Season1.valueOf(&quot;WINTER1&quot;);</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>winter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举类对象分别实现接口" tabindex="-1"><a class="header-anchor" href="#枚举类对象分别实现接口" aria-hidden="true">#</a> 枚举类对象分别实现接口</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Info</span><span class="token punctuation">{</span>
   <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//使用enum关键字枚举类</span>
<span class="token keyword">enum</span> <span class="token class-name">Season1</span> <span class="token keyword">implements</span> <span class="token class-name">Info</span><span class="token punctuation">{</span>
   <span class="token comment">//1.提供当前枚举类的对象，多个对象之间用&quot;,&quot;隔开，末尾对象&quot;;&quot;结束</span>
   <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token string">&quot;春天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;春暖花开&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;春天在哪里？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token string">&quot;夏天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;夏日炎炎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;宁夏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token string">&quot;秋天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;秋高气爽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;秋天不回来&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token string">&quot;冬天&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;冰天雪地&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;大约在冬季&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","enum.html.vue"]]);export{r as default};