import{_ as n,X as s,Y as a,a2 as t}from"./framework-a20dc394.js";const p={},e=t(`<h1 id="其它的流的使用" tabindex="-1"><a class="header-anchor" href="#其它的流的使用" aria-hidden="true">#</a> 其它的流的使用</h1><h2 id="标准的输入输出流" tabindex="-1"><a class="header-anchor" href="#标准的输入输出流" aria-hidden="true">#</a> 标准的输入输出流</h2><p><code>System.in</code>:标准的输入流，默认从键盘输入</p><p><code>System.out</code>:标准的输出流，默认从控制台输出</p><p>修改默认的输入和输出行为：</p><p>System类的<code>setIn(InputStream is)</code> / <code>setOut(PrintStream ps)</code>方式重新指定输入和输出的流。</p><h2 id="打印流" tabindex="-1"><a class="header-anchor" href="#打印流" aria-hidden="true">#</a> 打印流：</h2><p><code>PrintStream</code> 和 <code>PrintWriter</code></p><div class="hint-container info"><p class="hint-container-title">说明</p><p>提供了一系列重载的print()和println()方法，用于多种数据类型的输出</p><p>System.out返回的是PrintStream的实例</p></div><h2 id="数据流" tabindex="-1"><a class="header-anchor" href="#数据流" aria-hidden="true">#</a> 数据流：</h2><p><code>DataInputStream</code> 和 <code>DataOutputStream</code></p><div class="hint-container info"><p class="hint-container-title">作用</p><p>用于读取或写出基本数据类型的变量或字符串</p></div><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><p>将内存中的字符串、基本数据类型的变量写出到文件中。</p><div class="hint-container tip"><p class="hint-container-title">注意</p><p>处理异常的话，仍然应该使用<code>try-catch-finally</code></p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.</span>
	<span class="token class-name">DataOutputStream</span> dos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 2.</span>
	dos<span class="token punctuation">.</span><span class="token function">writeUTF</span><span class="token punctuation">(</span><span class="token string">&quot;MonkeyBoss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 刷新操作，将内存中的数据写入文件</span>
	dos<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dos<span class="token punctuation">.</span><span class="token function">writeBoolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 3.</span>
	dos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将文件中存储的基本数据类型变量和字符串读取到内存中，保存在变量中。</p><div class="hint-container tip"><p class="hint-container-title">注意点</p><p>读取不同类型的数据的顺序要与当初写入文件时，保存的数据的顺序一致！</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.</span>
	<span class="token class-name">DataInputStream</span> dis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;data.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 2.</span>
	<span class="token class-name">String</span> name <span class="token operator">=</span> dis<span class="token punctuation">.</span><span class="token function">readUTF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> age <span class="token operator">=</span> dis<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">boolean</span> isMale <span class="token operator">=</span> dis<span class="token punctuation">.</span><span class="token function">readBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name = &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;age = &quot;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;isMale = &quot;</span> <span class="token operator">+</span> isMale<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 3.</span>
	dis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","other.html.vue"]]);export{d as default};