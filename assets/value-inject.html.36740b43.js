import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.c62a3edb.js";const t={},p=e(`<h1 id="springboot注入配置文件值" tabindex="-1"><a class="header-anchor" href="#springboot注入配置文件值" aria-hidden="true">#</a> SpringBoot注入配置文件值</h1><h2 id="configurationproperties注解的方式自动注入" tabindex="-1"><a class="header-anchor" href="#configurationproperties注解的方式自动注入" aria-hidden="true">#</a> @ConfigurationProperties注解的方式自动注入</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 小明
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">12</span>
  <span class="token key atrule">birth</span><span class="token punctuation">:</span> 2018/9/9
  <span class="token key atrule">maps</span><span class="token punctuation">:</span>
    <span class="token key atrule">k1</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">k2</span><span class="token punctuation">:</span> v2
  <span class="token key atrule">list</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> a
    <span class="token punctuation">-</span> b
    <span class="token punctuation">-</span> c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="value注解的方式自动注入" tabindex="-1"><a class="header-anchor" href="#value注解的方式自动注入" aria-hidden="true">#</a> @Value注解的方式自动注入</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 小明
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">12</span>
  <span class="token key atrule">birth</span><span class="token punctuation">:</span> 2018/9/9
  <span class="token key atrule">maps</span><span class="token punctuation">:</span> <span class="token string">&quot;{key1: &#39;value1&#39;, key2: &#39;value2&#39;}&quot;</span>
  <span class="token key atrule">list</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;#{\${person.maps}}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> maps<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;#{&#39;\${person.list}&#39;.split(&#39;,&#39;)}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${person.name}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function l(c,o){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","value-inject.html.vue"]]);export{d as default};
