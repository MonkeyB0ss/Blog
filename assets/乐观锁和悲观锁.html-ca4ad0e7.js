import{_ as n}from"./img-e5cd67ba.js";import{_ as e,X as a,Y as s,a2 as i}from"./framework-a20dc394.js";const t={},r=i(`<h1 id="乐观锁和悲观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁和悲观锁" aria-hidden="true">#</a> 乐观锁和悲观锁</h1><h2 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>乐观锁：顾名思义，就是十分乐观，它总是认为不会出现问题，无论干什么都不去上锁~，如果出现了问题，再次更新值测试，这里使用了version字段。</p><p>也就是每次更新的时候同时维护一个version字段</p><h3 id="乐观锁实现方式" tabindex="-1"><a class="header-anchor" href="#乐观锁实现方式" aria-hidden="true">#</a> 乐观锁实现方式</h3><ul><li>取出记录时，获取当前的version</li><li>更新时，带上这个version</li><li>执行更新时，set version = newVersion where version = oldVersion</li><li>如果version不对，就更新失败</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>乐观锁：1：先查询，获得版本号 version =1

-- A 线程
update user set name = &quot;XX&quot;, version = version + 1 
where id = 2 and version = 1

-- B 线程抢先完成，这个时候Version = 2，导致A修改失败
update user set name = &quot;XX&quot;, version = version + 1 
where id = 2 and version = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mybatisplus使用乐观锁" tabindex="-1"><a class="header-anchor" href="#mybatisplus使用乐观锁" aria-hidden="true">#</a> MybatisPlus使用乐观锁</h2><p>首先需要在数据库增加version字典，默认为1</p><p><img src="`+n+`" alt="img.png"></p><p>然后在实体类增加对应的字段</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 乐观锁Version注解</span>
<span class="token annotation punctuation">@Version</span>
<span class="token keyword">private</span> <span class="token class-name">Integer</span> version<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册组件，在MybatisPlusConfig中配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 注册乐观锁</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">OptimisticLockerInterceptor</span> <span class="token function">optimisticLockerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">OptimisticLockerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁" aria-hidden="true">#</a> 悲观锁</h2><p>顾名思义，就是十分悲观，它总是认为什么时候都会出现问题，无论什么操作都会上锁，再次操作</p>`,17),d=[r];function l(o,c){return a(),s("div",null,d)}const v=e(t,[["render",l],["__file","乐观锁和悲观锁.html.vue"]]);export{v as default};
