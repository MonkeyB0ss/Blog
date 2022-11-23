import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as e}from"./app.af4c7d9f.js";const o={},c=e(`<h1 id="object类的使用" tabindex="-1"><a class="header-anchor" href="#object类的使用" aria-hidden="true">#</a> Object类的使用</h1><h2 id="java-lang-object类的说明" tabindex="-1"><a class="header-anchor" href="#java-lang-object类的说明" aria-hidden="true">#</a> java.lang.Object类的说明</h2><ol><li><p><code>Object</code>类是所Java类的根父类</p></li><li><p>如果在类的声明中未使用extends关键字指明其父类，则默认父类为<code>java.lang.Object</code>类</p></li><li><p><code>Object类</code>中的功能(属性、方法)就具通用性。</p><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>属性：无<br> 方法：equals() / toString() / getClass() /hashCode() / clone() / finalize() wait() 、 notify()、notifyAll()</p></div></li><li><p>Object类只声明了一个空参的构造器</p></li></ol><h2 id="equals-方法" tabindex="-1"><a class="header-anchor" href="#equals-方法" aria-hidden="true">#</a> equals()方法</h2><h3 id="equals-的使用" tabindex="-1"><a class="header-anchor" href="#equals-的使用" aria-hidden="true">#</a> equals()的使用</h3><ol><li><p>是一个方法，而非运算符</p></li><li><p>只能适用于引用数据类型</p></li><li><p><code>Object</code>类中<code>equals()</code>的定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">相关信息</p><p><code>Object</code>类中定义的<code>equals()</code>和<code>==</code>的作用是相同的：比较两个对象的地址值是否相同.即两个引用是否指向同一个对象实体</p></div></li><li><p>像<code>String</code>、<code>Date</code>、<code>File</code>、<code>包装类</code>等都重写了<code>Object</code>类中的<code>equals()</code>方法。重写以后，比较的不是 两个引用的地址是否相同，而是比较两个对象的<code>实体内容</code>是否相同。</p></li><li><p>通常情况下，我们自定义的类如果使用<code>equals()</code>的话，也通常是比较两个对象的<code>实体内容</code>是否相同。那么，我们 就需要对<code>Object</code>类中的<code>equals()</code>进行重写</p><div class="custom-container tip"><p class="custom-container-title">重写的原则</p><p>比较两个对象的实体内容是否相同</p></div></li></ol><h3 id="如何重写equals" tabindex="-1"><a class="header-anchor" href="#如何重写equals" aria-hidden="true">#</a> 如何重写equals()</h3><p>手动重写举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
      <span class="token class-name">String</span> name<span class="token punctuation">;</span>
      <span class="token keyword">int</span> age<span class="token punctuation">;</span>
      <span class="token comment">// 重写其equals()方法</span>
      <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">User</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token class-name">User</span> u <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span>obj<span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">==</span> u<span class="token punctuation">.</span>age <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
         <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回顾-运算符的使用" tabindex="-1"><a class="header-anchor" href="#回顾-运算符的使用" aria-hidden="true">#</a> 回顾 == 运算符的使用</h3><p><code>==</code> ：运算符</p><ol><li>可以使用在基本数据类型变量和引用数据类型变量中</li><li>如果比较的是基本数据类型变量：比较两个变量保存的数据是否相等。（不一定类型要相同）<br> 如果比较的是引用数据类型变量：比较两个对象的地址值是否相同.即两个引用是否指向同一个对象实体<br><em>补充： <code>==</code> 符号使用时，必须保证符号左右两边的变量类型一致。</em></li></ol><h2 id="tostring-方法" tabindex="-1"><a class="header-anchor" href="#tostring-方法" aria-hidden="true">#</a> toString()方法</h2><h3 id="tostring-的使用" tabindex="-1"><a class="header-anchor" href="#tostring-的使用" aria-hidden="true">#</a> toString()的使用</h3><ol><li><p>当我们输出一个对象的引用时，实际上就是调用当前对象的<code>toString()</code></p></li><li><p><code>Object</code>类中<code>toString()</code>的定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;@&quot;</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>像<code>String</code>、<code>Date</code>、<code>File</code>、<code>包装类</code>等都重写了<code>Object</code>类中的<code>toString()</code>方法。 使得在调用对象的<code>toString()</code>时，返回<code>实体内容</code>信息</p></li><li><p>自定义类也可以重写<code>toString()</code>方法，当调用此方法时，返回对象的<code>实体内容</code></p></li></ol><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><ol><li><code>final</code>、<code>finally</code>、<code>finalize</code>的区别？</li><li><code>==</code> 和 <code>equals()</code> 区别</li></ol>`,17),t=[c];function p(l,i){return a(),s("div",null,t)}const r=n(o,[["render",p],["__file","class-object.html.vue"]]);export{r as default};
