import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,e}from"./app.db07fe51.js";const t="/Blog/assets/collections.5d49f392.png",c={},p=e(`<h1 id="collections工具类的使用" tabindex="-1"><a class="header-anchor" href="#collections工具类的使用" aria-hidden="true">#</a> Collections工具类的使用</h1><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>操作Collection和Map的工具类</p><h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">)</span>：反转 <span class="token class-name">List</span> 中元素的顺序
<span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">)</span>：对 <span class="token class-name">List</span> 集合元素进行随机排序
<span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">)</span>：根据元素的自然顺序对指定 <span class="token class-name">List</span> 集合元素升序排序
<span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span>，<span class="token class-name">Comparator</span><span class="token punctuation">)</span>：根据指定的 <span class="token class-name">Comparator</span> 产生的顺序对 <span class="token class-name">List</span> 集合元素进行排序
<span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">List</span>，<span class="token keyword">int</span>， <span class="token keyword">int</span><span class="token punctuation">)</span>：将指定 list 集合中的 i 处元素和 j 处元素进行交换
<span class="token class-name">Object</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">)</span>：根据元素的自然顺序，返回给定集合中的最大元素
<span class="token class-name">Object</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span>，<span class="token class-name">Comparator</span><span class="token punctuation">)</span>：根据 <span class="token class-name">Comparator</span> 指定的顺序，返回给定集合中的最大元素
<span class="token class-name">Object</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">)</span>
<span class="token class-name">Object</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">Collection</span>，<span class="token class-name">Comparator</span><span class="token punctuation">)</span>
<span class="token keyword">int</span> <span class="token function">frequency</span><span class="token punctuation">(</span><span class="token class-name">Collection</span>，<span class="token class-name">Object</span><span class="token punctuation">)</span>：返回指定集合中指定元素的出现次数
<span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">List</span> dest<span class="token punctuation">,</span><span class="token class-name">List</span> src<span class="token punctuation">)</span>：将src中的内容复制到dest中
<span class="token keyword">boolean</span> <span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token class-name">List</span> list，<span class="token class-name">Object</span> oldVal，<span class="token class-name">Object</span> newVal<span class="token punctuation">)</span>：使用新值替换 <span class="token class-name">List</span> 对象的所旧值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+'" alt="img.png" loading="lazy"></p><div class="custom-container info"><p class="custom-container-title">说明</p><p>ArrayList和HashMap都是线程不安全的，如果程序要求线程安全，我们可以将ArrayList、HashMap转换为线程的。</p><p>使用<code>synchronizedList(List list)</code> 和 <code>synchronizedMap(Map map)</code></p></div>',7),o=[p];function l(i,u){return n(),a("div",null,o)}const d=s(c,[["render",l],["__file","collections.html.vue"]]);export{d as default};
