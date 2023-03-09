import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.c44abe88.js";const t={},c=e(`<h1 id="线程安全的单例模式-懒汉式" tabindex="-1"><a class="header-anchor" href="#线程安全的单例模式-懒汉式" aria-hidden="true">#</a> 线程安全的单例模式(懒汉式)</h1><p><strong>使用同步机制将单例模式中的懒汉式改写为线程安全的。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Bank</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 方式一：效率稍差</span>
        <span class="token comment">// synchronized (Bank.class) {</span>
        <span class="token comment">// if(instance == null){</span>
            <span class="token comment">// instance = new Bank();</span>
        <span class="token comment">// }</span>
        <span class="token comment">// return instance;</span>
        <span class="token comment">// }</span>
        <span class="token comment">// 方式二：效率更高</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Bank</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[c];function p(l,o){return s(),a("div",null,i)}const u=n(t,[["render",p],["__file","single-threadsafety.html.vue"]]);export{u as default};
