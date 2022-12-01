import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e}from"./app.db07fe51.js";const t="/Blog/assets/map.a8c3c634.png",p={},l=e(`<h1 id="map接口" tabindex="-1"><a class="header-anchor" href="#map接口" aria-hidden="true">#</a> Map接口</h1><h2 id="常用实现类结构" tabindex="-1"><a class="header-anchor" href="#常用实现类结构" aria-hidden="true">#</a> 常用实现类结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|----Map:双列数据，存储key-value对的数据   ---类似于高中的函数：y = f(x)
	|----HashMap:作为Map的主要实现类；线程不安全的，效率高；存储null的key和value
		|----LinkedHashMap:保证在遍历map元素时，可以照添加的顺序实现遍历。
			原因：在原的HashMap底层结构基础上，添加了一对指针，指向前一个和后一个元素。
			对于频繁的遍历操作，此类执行效率高于HashMap。
	|----TreeMap:保证照添加的key-value对进行排序，实现排序遍历。此时考虑key的自然排序或定制排序
			底层使用红黑树
	|----Hashtable:作为古老的实现类；线程安全的，效率低；不能存储null的key和value
		|----Properties:常用来处理配置文件。key和value都是String类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">HashMap的底层</p><p>数组+链表（jdk7及之前)</p><p>数组+链表+红黑树 （jdk 8)</p></div><h2 id="存储结构的理解" tabindex="-1"><a class="header-anchor" href="#存储结构的理解" aria-hidden="true">#</a> 存储结构的理解</h2><ol><li>Map中的key:无序的、不可重复的，使用Set存储所的key ---&gt; key所在的类要重写equals()和hashCode() （以HashMap为例)</li><li>Map中的value:无序的、可重复的，使用Collection存储所的value ---&gt;value所在的类要重写equals()</li><li>一个键值对：key-value构成了一个Entry对象。</li><li>Map中的entry:无序的、不可重复的，使用Set存储所的entry</li></ol><p>图示：</p><p><img src="`+t+`" alt="img.png" loading="lazy"></p><h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>添加：<span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span>
删除：<span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span>
修改：<span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span>
查询：<span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span>
长度：<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
遍历：<span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内存结构说明🔔" tabindex="-1"><a class="header-anchor" href="#内存结构说明🔔" aria-hidden="true">#</a> 内存结构说明🔔</h2><h3 id="hashmap在jdk7中实现原理" tabindex="-1"><a class="header-anchor" href="#hashmap在jdk7中实现原理" aria-hidden="true">#</a> HashMap在jdk7中实现原理</h3><p>HashMap map = new HashMap()</p><ol><li>在实例化以后，底层创建了长度是16的一维数组Entry[] table。</li><li>...可能已经执行过多次put...</li><li>map.put(key1,value1): <ul><li>首先，调用key1所在类的hashCode()计算key1哈希值，此哈希值经过某种算法计算以后，得到在Entry数组中的存放位置。</li><li>如果此位置上的数据为空，此时的key1-value1添加成功。 ----情况1</li><li>如果此位置上的数据不为空，(意味着此位置上存在一个或多个数据(以链表形式存在)),比较key1和已经存在的一个或多个数据的哈希值： <ul><li>如果key1的哈希值与已经存在的数据的哈希值都不相同，此时key1-value1添加成功。----情况2</li><li>如果key1的哈希值和已经存在的某一个数据(key2-value2)的哈希值相同，继续比较：调用key1所在类的equals(key2)方法，比较： <ul><li>如果equals()返回false:此时key1-value1添加成功。----情况3</li><li>如果equals()返回true:使用value1替换value2。</li></ul></li></ul></li></ul></li></ol><div class="custom-container info"><p class="custom-container-title">补充</p><p>关于情况2和情况3：此时key1-value1和原来的数据以链表的方式存储。</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在不断的添加过程中，会涉及到扩容问题，当超出临界值(且要存放的位置非空)时，扩容。默认的扩容方式：扩容为原来容量的2倍，并将原的数据复制过来。</p></div><h3 id="hashmap在jdk8中相较于jdk7在底层实现方面的不同" tabindex="-1"><a class="header-anchor" href="#hashmap在jdk8中相较于jdk7在底层实现方面的不同" aria-hidden="true">#</a> HashMap在jdk8中相较于jdk7在底层实现方面的不同</h3><ol><li>new HashMap():底层没创建一个长度为16的数组</li><li>jdk 8底层的数组是：Node[],而非Entry[]</li><li>首次调用put()方法时，底层创建长度为16的数组</li><li>jdk7底层结构只：数组+链表。jdk8中底层结构：数组+链表+红黑树。 <ul><li>形成链表时，七上八下（jdk7:新的元素指向旧的元素。jdk8：旧的元素指向新的元素）</li><li>当数组的某一个索引位置上的元素以链表形式存在的数据个数 &gt; 8 且当前数组的长度 &gt; 64时，此时此索引位置上的所数据改为使用红黑树存储。</li></ul></li></ol><h3 id="hashmap底层典型属性的属性的说明" tabindex="-1"><a class="header-anchor" href="#hashmap底层典型属性的属性的说明" aria-hidden="true">#</a> HashMap底层典型属性的属性的说明</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">DEFAULT_INITIAL_CAPACITY</span> <span class="token operator">:</span> <span class="token class-name">HashMap</span>的默认容量，<span class="token number">16</span>
<span class="token constant">DEFAULT_LOAD_FACTOR</span>：<span class="token class-name">HashMap</span>的默认加载因子：<span class="token number">0.75</span>
threshold：扩容的临界值，<span class="token operator">=</span>容量填充因子：<span class="token number">16</span><span class="token operator">*</span><span class="token number">0.75</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">12</span>
<span class="token constant">TREEIFY_THRESHOLD</span>：<span class="token class-name">Bucket</span>中链表长度大于该默认值，转化为红黑树<span class="token operator">:</span><span class="token number">8</span>
<span class="token constant">MIN_TREEIFY_CAPACITY</span>：桶中的<span class="token class-name">Node</span>被树化时最小的hash表容量<span class="token operator">:</span><span class="token number">64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkedhashmap的底层实现原理-了解" tabindex="-1"><a class="header-anchor" href="#linkedhashmap的底层实现原理-了解" aria-hidden="true">#</a> LinkedHashMap的底层实现原理(了解)</h3><p>LinkedHashMap底层使用的结构与HashMap相同，因为LinkedHashMap继承于HashMap.</p><div class="custom-container tip"><p class="custom-container-title">区别就在于</p><p>LinkedHashMap内部提供了Entry，替换HashMap中的Node.</p></div><h2 id="treemap的使用" tabindex="-1"><a class="header-anchor" href="#treemap的使用" aria-hidden="true">#</a> TreeMap的使用</h2><p>向TreeMap中添加key-value，要求key必须是由同一个类创建的对象</p><p><strong>因为要对key进行排序：自然排序 、定制排序</strong></p><h2 id="使用properties读取配置文件" tabindex="-1"><a class="header-anchor" href="#使用properties读取配置文件" aria-hidden="true">#</a> 使用Properties读取配置文件</h2><p><code>Properties</code>:常用来处理配置文件。key和value都是String类型</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token class-name">Properties</span> pros <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pros<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>fis<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//加载流对应的文件</span>
		
		<span class="token class-name">String</span> name <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> password <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name = &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;, password = &quot;</span> <span class="token operator">+</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>fis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),c=[l];function o(i,u){return a(),s("div",null,c)}const k=n(p,[["render",o],["__file","map.html.vue"]]);export{k as default};
