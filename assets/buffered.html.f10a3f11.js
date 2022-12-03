import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.2f82c418.js";const e={},p=t(`<h1 id="缓冲流的使用" tabindex="-1"><a class="header-anchor" href="#缓冲流的使用" aria-hidden="true">#</a> 缓冲流的使用</h1><h2 id="缓冲流涉及到的类" tabindex="-1"><a class="header-anchor" href="#缓冲流涉及到的类" aria-hidden="true">#</a> 缓冲流涉及到的类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BufferedInputStream</span>
<span class="token class-name">BufferedOutputStream</span>
<span class="token class-name">BufferedReader</span>
<span class="token class-name">BufferedWriter</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>提供流的读取、写入的速度</p><div class="custom-container tip"><p class="custom-container-title">提高读写速度的原因</p><p>内部提供了一个缓冲区。默认情况下是8kb</p></div><h2 id="典型代码" tabindex="-1"><a class="header-anchor" href="#典型代码" aria-hidden="true">#</a> 典型代码</h2><h3 id="处理非文本文件" tabindex="-1"><a class="header-anchor" href="#处理非文本文件" aria-hidden="true">#</a> 处理非文本文件</h3><p>使用<code>BufferedInputStream</code>和<code>BufferedOutputStream</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 实现文件复制的方法</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">copyFileWithBuffered</span><span class="token punctuation">(</span><span class="token class-name">String</span> srcPath<span class="token punctuation">,</span><span class="token class-name">String</span> destPath<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">BufferedInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token comment">// 1.造文件</span>
		<span class="token class-name">File</span> srcFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">File</span> destFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>destPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 2.造流</span>
		<span class="token comment">// 2.1 造节点流</span>
		<span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>destFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 2.2 造缓冲流</span>
		bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>fis<span class="token punctuation">)</span><span class="token punctuation">;</span>
		bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 3.复制的细节：读取、写入</span>
		<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> len<span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> bis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token comment">// 4.资源关闭</span>
		<span class="token comment">// 要求：先关闭外层的流，再关闭内层的流</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>bos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				bos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>bis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				bis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 说明：关闭外层流的同时，内层流也会自动的进行关闭。关于内层流的关闭，我们可以省略.</span>
		<span class="token comment">// fos.close();</span>
		<span class="token comment">// fis.close();</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理文本文件" tabindex="-1"><a class="header-anchor" href="#处理文本文件" aria-hidden="true">#</a> 处理文本文件</h3><p>使用<code>BufferedReader</code>和<code>BufferedWriter</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testBufferedReaderBufferedWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">BufferedWriter</span> bw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token comment">// 创建文件和相应的流</span>
		br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;dbcp.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;dbcp1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 读写操作</span>
		<span class="token comment">// 方式一：使用char[]数组</span>
		
		<span class="token comment">// char[] cbuf = new char[1024];</span>
		<span class="token comment">// int len;</span>
		<span class="token comment">// while((len = br.read(cbuf)) != -1){</span>
		<span class="token comment">//      bw.write(cbuf,0,len);</span>
		<span class="token comment">//      bw.flush();</span>
		<span class="token comment">// }</span>
		
		<span class="token comment">// 方式二：使用String</span>
		<span class="token class-name">String</span> data<span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 方法一：</span>
			<span class="token comment">// bw.write(data + &quot;\\n&quot;);// data中不包含换行符</span>
			<span class="token comment">// 方法二：</span>
			bw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// data中不包含换行符</span>
			bw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 提供换行的操作</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token comment">// 关闭资源</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>bw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				bw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>br <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","buffered.html.vue"]]);export{d as default};
