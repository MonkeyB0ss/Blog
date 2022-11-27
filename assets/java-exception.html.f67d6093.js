import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.83f8fc33.js";const e="/Blog/assets/exception1.c1a3ba31.png",p="/Blog/assets/exception2.cb452cdd.png",c={},o=t(`<h1 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h1><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2><h3 id="异常的体系结构" tabindex="-1"><a class="header-anchor" href="#异常的体系结构" aria-hidden="true">#</a> 异常的体系结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> java.lang.Throwable
 	|-----java.lang.Error:一般不编写针对性的代码进行处理。
 	|-----java.lang.Exception:可以进行异常的处理
 		|------编译时异常(checked)
 			|-----IOException
 				|-----FileNotFoundException
 			|-----ClassNotFoundException
 		|------运行时异常(unchecked,RuntimeException)
 			|-----NullPointerException
 			|-----ArrayIndexOutOfBoundsException
 			|-----ClassCastException
 			|-----NumberFormatException
 			|-----InputMismatchException
 			|-----ArithmeticException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+'" alt="img.png" loading="lazy"></p><h3 id="异常对比" tabindex="-1"><a class="header-anchor" href="#异常对比" aria-hidden="true">#</a> 异常对比</h3><p><img src="'+p+`" alt="img.png" loading="lazy"></p><p><code>编译时异常</code>：执行javac.exe命名时，可能出现的异常</p><p><code>运行时异常</code>：执行java.exe命名时，出现的异常</p><h3 id="常见的异常类型" tabindex="-1"><a class="header-anchor" href="#常见的异常类型" aria-hidden="true">#</a> 常见的异常类型</h3><p>运行时异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">// ArithmeticException</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">/</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// InputMismatchException</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> score <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>

        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// NumberFormatException</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>
        str <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

    <span class="token comment">// ClassCastException</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// IndexOutOfBoundsException</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ArrayIndexOutOfBoundsException</span>
	    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    
        <span class="token comment">// StringIndexOutOfBoundsException</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// NullPointerException</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
        str <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译时异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> data <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            data <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常的处理" tabindex="-1"><a class="header-anchor" href="#异常的处理" aria-hidden="true">#</a> 异常的处理</h2><h3 id="java异常处理的抓抛模型" tabindex="-1"><a class="header-anchor" href="#java异常处理的抓抛模型" aria-hidden="true">#</a> java异常处理的抓抛模型</h3><ol><li><p><code>抛</code>：程序在正常执行的过程中，一旦出现异常，就会在异常代码处生成一个对应异常类的对象。并将此对象抛出。一旦抛出对象以后，其后的代码就不再执行。</p><div class="custom-container tip"><p class="custom-container-title">关于异常对象的产生</p><ul><li>系统自动生成的异常对象</li><li>手动的生成一个异常对象，并抛出（<code>throw</code>）</li></ul></div></li><li><p><code>抓</code>：可以理解为异常的处理方式：</p><ul><li><code>try-catch-finally</code></li><li><code>throws</code></li></ul></li></ol><h3 id="处理方式一" tabindex="-1"><a class="header-anchor" href="#处理方式一" aria-hidden="true">#</a> 处理方式一</h3><p><code>try-catch-finally</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">//可能出现异常的代码</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>异常类型<span class="token number">1</span> 变量名<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//处理异常的方式1</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>异常类型<span class="token number">2</span> 变量名<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//处理异常的方式2</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>异常类型<span class="token number">3</span> 变量名<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//处理异常的方式3</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token comment">//一定会执行的代码</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">说明</p><ol><li>finally是可的。</li><li>使用try将可能出现异常代码包装起来，在执行过程中，一旦出现异常，就会生成一个对应异常类的对象，根据此对象的类型，去catch中进行匹配</li><li>一旦try中的异常对象匹配到某一个catch时，就进入catch中进行异常的处理。一旦处理完成，就跳出当前的try-catch结构（在没写finally的情况。继续执行其后的代码</li><li>catch中的异常类型如果没子父类关系，则谁声明在上，谁声明在下无所谓。catch中的异常类型如果满足子父类关系，则要求子类一定声明在父类的上面。否则，报错</li><li>常用的异常对象处理的方式： ① String getMessage() ② printStackTrace()</li><li>在try结构中声明的变量，再出了try结构以后，就不能再被调用</li><li>try-catch-finally结构可以嵌套</li></ol></div><div class="custom-container info"><p class="custom-container-title">如何看待代码中的编译时异常和运行时异常？</p><p>体会1：使用<code>try-catch-finally</code> 处理编译时异常，是得程序在编译时就不再报错，但是运行时仍可能报错。相当于我们使用<code>try-catch-finally</code>将一个编译时可能出现的异常，延迟到运行时出现。</p><p>体会2：开发中，由于运行时异常比较常见，所以我们通常就不针对运行时异常编写<code>try-catch-finally</code>了。针对于编译时异常，我们说一定要考虑异常的处理。</p></div><h3 id="处理方式二" tabindex="-1"><a class="header-anchor" href="#处理方式二" aria-hidden="true">#</a> 处理方式二</h3><p><code>throws + 异常类型</code>写在方法的声明处。指明此方法执行时，可能会抛出的异常类型。 一旦当方法体执行时，出现异常，仍会在异常代码处生成一个异常类的对象，此对象满足<code>throws</code>后异常类型时，就会被抛出。异常代码后续的代码，就不再执行！</p><h3 id="对比两种处理方式" tabindex="-1"><a class="header-anchor" href="#对比两种处理方式" aria-hidden="true">#</a> 对比两种处理方式</h3><p><code>try-catch-finally</code>: 真正的将异常给处理掉了。 <code>throws</code>的方式只是将异常抛给了方法的调用者。并没真正将异常处理掉。</p><h3 id="如何选择" tabindex="-1"><a class="header-anchor" href="#如何选择" aria-hidden="true">#</a> 如何选择</h3><ol><li>如果父类中被重写的方法没<code>throws</code> 方式处理异常，则子类重写的方法也不能使用throws，意味着如果子类重写的方法中异常，必须使用<code>try-catch-finally</code>方式处理。</li><li>执行的方法a中，先后又调用了另外的几个方法，这几个方法是递进关系执行的。我们建议这几个方法使用<code>throws</code> 的方式进行处理。而执行的方法a可以考虑使用<code>try-catch-finally</code>方式进行处理。</li></ol><div class="custom-container info"><p class="custom-container-title">补充:方法重写的规则之一</p><p>子类重写的方法抛出的异常类型不大于父类被重写的方法抛出的异常类型</p></div><h2 id="手动抛出异常对象" tabindex="-1"><a class="header-anchor" href="#手动抛出异常对象" aria-hidden="true">#</a> 手动抛出异常对象</h2><h3 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h3><p>在程序执行中，除了自动抛出异常对象的情况之外，我们还可以手动的throw一个异常类的对象。</p><h3 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h3><p><code>throw</code> 和 <code>throws</code>区别：</p><p><code>throw</code> 表示抛出一个异常类的对象，生成异常对象的过程。声明在方法体内。</p><p><code>throws</code> 属于异常处理的一种方式，声明在方法的声明处。</p><h3 id="典型例题" tabindex="-1"><a class="header-anchor" href="#典型例题" aria-hidden="true">#</a> 典型例题</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
   <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>

   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">regist</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
         <span class="token comment">// 手动抛出异常对象</span>
         <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的数据非法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;您输入的数据非法！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token string">&quot;不能输入负数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;Student [id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义异常类" tabindex="-1"><a class="header-anchor" href="#自定义异常类" aria-hidden="true">#</a> 自定义异常类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
   <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">7034897193246939L</span><span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),i=[o];function l(u,d){return s(),a("div",null,i)}const v=n(c,[["render",l],["__file","java-exception.html.vue"]]);export{v as default};
