import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.c8c7e49e.js";const e={},p=t(`<h1 id="节点流-或文件流" tabindex="-1"><a class="header-anchor" href="#节点流-或文件流" aria-hidden="true">#</a> 节点流（或文件流）</h1><h2 id="filereader-filewriter的使用" tabindex="-1"><a class="header-anchor" href="#filereader-filewriter的使用" aria-hidden="true">#</a> FileReader/FileWriter的使用</h2><h3 id="filereader的使用" tabindex="-1"><a class="header-anchor" href="#filereader的使用" aria-hidden="true">#</a> FileReader的使用</h3><p>将day09下的hello.txt文件内容读入程序中，并输出到控制台</p><div class="custom-container info"><p class="custom-container-title">说明点</p><ol><li><code>read()</code>的理解：返回读入的一个字符。如果达到文件末尾，返回-1</li><li>异常的处理：为了保证流资源一定可以执行关闭操作。需要使用<code>try-catch-finally</code>处理</li><li>读入的文件一定要存在，否则就会报<code>FileNotFoundException</code>。</li></ol></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFileReader1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token comment">// 1.File类的实例化</span>
		<span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 2.FileReader流的实例化</span>
		fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 3.读入的操作</span>
		<span class="token comment">// read(char[] cbuf):返回每次读入cbuf数组中的字符的个数。如果达到文件末尾，返回-1</span>
		<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cbuf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> len<span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 方式一：</span>
			<span class="token comment">// 错误的写法</span>
			<span class="token comment">// for(int i = 0;i &lt; cbuf.length;i++){</span>
			<span class="token comment">//      System.out.print(cbuf[i]);</span>
			<span class="token comment">// }</span>
			<span class="token comment">// 正确的写法</span>
			<span class="token comment">// for(int i = 0;i &lt; len;i++){</span>
			<span class="token comment">//      System.out.print(cbuf[i]);</span>
			<span class="token comment">// }</span>
			<span class="token comment">// 方式二：</span>
			<span class="token comment">// 错误的写法,对应着方式一的错误的写法</span>
			<span class="token comment">// String str = new String(cbuf);</span>
			<span class="token comment">// System.out.print(str);</span>
			<span class="token comment">// 正确的写法</span>
			<span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>fr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 4.资源的关闭</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				fr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filewriter的使用" tabindex="-1"><a class="header-anchor" href="#filewriter的使用" aria-hidden="true">#</a> FileWriter的使用</h3><p>从内存中写出数据到硬盘的文件里。</p><div class="custom-container info"><p class="custom-container-title">说明</p><ol><li>输出操作，对应的File可以不存在的。并不会报异常</li><li><ul><li>File对应的硬盘中的文件如果不存在，在输出的过程中，会自动创建此文件。</li><li>File对应的硬盘中的文件如果存在： <ul><li>如果流使用的构造器是：FileWriter(file,false) / FileWriter(file):对原文件的覆盖</li><li>如果流使用的构造器是：FileWriter(file,true):不会对原文件覆盖，而是在原文件基础上追加内容</li></ul></li></ul></li></ol></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFileWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token comment">// 1.提供File类的对象，指明写出到的文件</span>
		<span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;hello1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 2.提供FileWriter的对象，用于数据的写出</span>
		fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 3.写出的操作</span>
		fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;I have a dream!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;you need to have a dream!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token comment">// 4.流资源的关闭</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>fw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本文件的复制" tabindex="-1"><a class="header-anchor" href="#文本文件的复制" aria-hidden="true">#</a> 文本文件的复制</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFileReaderFileWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token comment">// 1.创建File类的对象，指明读入和写出的文件</span>
		<span class="token class-name">File</span> srcFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">File</span> destFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;hello2.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 不能使用字符流来处理图片等字节数据</span>
		<span class="token comment">// File srcFile = new File(&quot;爱情与友情.jpg&quot;);</span>
		<span class="token comment">// File destFile = new File(&quot;爱情与友情1.jpg&quot;);</span>
		
		<span class="token comment">// 2.创建输入流和输出流的对象</span>
		fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
		fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>destFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 3.数据的读入和写出操作</span>
		<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cbuf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> len<span class="token punctuation">;</span><span class="token comment">// 记录每次读入到cbuf数组中的字符的个数</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 每次写出len个字符</span>
			fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token comment">// 4.关闭流资源</span>
		<span class="token comment">// 方式一：</span>
		<span class="token comment">// try {</span>
		<span class="token comment">//      if(fw != null)</span>
		<span class="token comment">//      fw.close();</span>
		<span class="token comment">// } catch (IOException e) {</span>
		<span class="token comment">//      e.printStackTrace();</span>
		<span class="token comment">// }finally{</span>
		<span class="token comment">//      try {</span>
		<span class="token comment">//          if(fr != null)</span>
		<span class="token comment">//          fr.close();</span>
		<span class="token comment">//      } catch (IOException e) {</span>
		<span class="token comment">//          e.printStackTrace();</span>
		<span class="token comment">//      }</span>
		<span class="token comment">// }</span>
		<span class="token comment">// 方式二：</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>fw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
			fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>fr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
			fr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fileinputstream-fileoutputstream的使用" tabindex="-1"><a class="header-anchor" href="#fileinputstream-fileoutputstream的使用" aria-hidden="true">#</a> FileInputStream / FileOutputStream的使用</h2><ol><li>对于文本文件(.txt,.java,.c,.cpp)，使用字符流处理</li><li>对于非文本文件(.jpg,.mp3,.mp4,.avi,.doc,.ppt,...)，使用字节流处理</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
 * 实现对图片的复制操作
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFileInputOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token comment">// 1.造文件</span>
		<span class="token class-name">File</span> srcFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;爱情与友情.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">File</span> destFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;爱情与友情2.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 2.造流</span>
		fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
		fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>destFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// 3.复制的过程</span>
		<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> len<span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>fos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 4.关闭流</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>fis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p><p>相对路径在IDEA和Eclipse中使用的区别？</p><ol><li><p>IDEA</p><ul><li>如果使用单元测试方法，相对路径基于当前的Module的。</li><li>如果使用main()测试，相对路径基于当前Project的。</li></ul></li><li><p>Eclipse</p><ul><li>单元测试方法还是main(),相对路径都是基于当前Project的。</li></ul></li></ol></div>`,16),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","file-reader.html.vue"]]);export{r as default};
