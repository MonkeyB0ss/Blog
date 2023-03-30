import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,b as n,d as s,a as t,e,r as l}from"./app.6c68b90f.js";const c="/Blog/assets/img.15a10825.png",u="/Blog/assets/img_1.1cfc18d3.png",r="/Blog/assets/img_2.fd0c9db3.png",d="/Blog/assets/img_3.807f8331.png",k="/Blog/assets/img_4.e5f20b71.png",v="/Blog/assets/img_5.135ec2ac.png",m="/Blog/assets/img_6.911336a9.png",b="/Blog/assets/img_7.df4ab98d.png",q="/Blog/assets/img_8.679dbcc0.png",g="/Blog/assets/img_9.af54ed6d.png",h="/Blog/assets/img_10.496d2b61.png",y="/Blog/assets/img_11.5d570d2a.png",_="/Blog/assets/img_12.4d873c44.png",x={},f=n("h1",{id:"elasticsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch","aria-hidden":"true"},"#"),s(" ElasticSearch")],-1),j=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),E={href:"https://www.elastic.co/cn/what-is/elasticsearch",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,"全文搜索属于最常见的需求，开源的 Elasticsearch 是目前全文搜索引擎的首选。 它可以快速地储存、搜索和分析海量数据。维基百科、Stack Overflow、Github 都采用它 Elastic 的底层是开源库 Lucene。但是，你没法直接用 Lucene，必须自己写代码去调用它的 接口。Elastic 是 Lucene 的封装，提供了 REST API 的操作接口，开箱即用。",-1),T=n("p",null,"REST API：天然的跨平台。",-1),S={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://es.xiaoleilu.com/index.html",target:"_blank",rel:"noopener noreferrer"},R={href:"http://doc.codingdict.com/elasticsearch/0/",target:"_blank",rel:"noopener noreferrer"},G=e('<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><h3 id="index-索引" tabindex="-1"><a class="header-anchor" href="#index-索引" aria-hidden="true">#</a> Index（索引）</h3><p>动词，相当于 MySQL 中的 insert；</p><p>名词，相当于 MySQL 中的 Database</p><h3 id="type-类型" tabindex="-1"><a class="header-anchor" href="#type-类型" aria-hidden="true">#</a> Type（类型）</h3><p>在 Index（索引）中，可以定义一个或多个类型。</p><p>类似于 MySQL 中的 Table；每一种类型的数据放在一起；</p><h3 id="document-文档" tabindex="-1"><a class="header-anchor" href="#document-文档" aria-hidden="true">#</a> Document（文档）</h3><p>保存在某个索引（Index）下，某种类型（Type）的一个数据（Document），文档是 JSON 格 式的，Document 就像是 MySQL 中的某个 Table 里面的内容；</p><h3 id="倒排索引机制" tabindex="-1"><a class="header-anchor" href="#倒排索引机制" aria-hidden="true">#</a> 倒排索引机制</h3><p><img src="'+c+`" alt="img.png"></p><h2 id="docker-安装-es" tabindex="-1"><a class="header-anchor" href="#docker-安装-es" aria-hidden="true">#</a> Docker 安装 Es</h2><h3 id="下载镜像文件" tabindex="-1"><a class="header-anchor" href="#下载镜像文件" aria-hidden="true">#</a> 下载镜像文件</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment">#存储和检索数据</span>
docker pull elasticsearch:8.6.2
<span class="token comment">#可视化检索数据</span>
docker pull kibana:8.6.2 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实例" tabindex="-1"><a class="header-anchor" href="#创建实例" aria-hidden="true">#</a> 创建实例</h3><h4 id="elasticsearch-1" tabindex="-1"><a class="header-anchor" href="#elasticsearch-1" aria-hidden="true">#</a> ElasticSearch</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mydata/elasticsearch/config
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mydata/elasticsearch/data
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http.host: 0.0.0.0&quot;</span> <span class="token operator">&gt;&gt;</span> /mydata/elasticsearch/config/elasticsearch.yml
<span class="token comment"># 保证权限 </span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /mydata/elasticsearch/ 
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> elasticsearch <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms64m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
<span class="token comment"># 以后再外面装好插件重启即可</span>
<span class="token parameter variable">-v</span> /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> elasticsearch:8.6.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">特别注意</p><p>-e ES_JAVA_OPTS=&quot;-Xms64m -Xmx256m&quot; 测试环境下，设置 ES 的初始内存和最大内存，否则导致过大启动不了 ES</p></div><h4 id="kibana" tabindex="-1"><a class="header-anchor" href="#kibana" aria-hidden="true">#</a> Kibana</h4><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run --name kibana -e ELASTICSEARCH_HOSTS=http://192.168.56.10:9200 -p 5601:5601 -d kibana:8.6.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),A={class:"custom-container tip"},I=n("p",{class:"custom-container-title"},"提示",-1),O={href:"http://192.168.56.10:9200",target:"_blank",rel:"noopener noreferrer"},z=e(`<h2 id="初步检索" tabindex="-1"><a class="header-anchor" href="#初步检索" aria-hidden="true">#</a> 初步检索</h2><h3 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> _cat</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /_cat/nodes：查看所有节点
GET /_cat/health：查看 es 健康状况
GET /_cat/master：查看主节点
GET /_cat/indices：查看所有索引 show databases;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引一个文档-保存" tabindex="-1"><a class="header-anchor" href="#索引一个文档-保存" aria-hidden="true">#</a> 索引一个文档（保存）</h3><p>保存一个数据，保存在哪个索引的哪个类型下，指定用哪个唯一标识</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 在 customer 索引下的 external 类型下保存 <span class="token number">1</span> 号数据为
PUT customer/external/<span class="token number">1</span>；
PUT customer/external/<span class="token number">1</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PUT 和 POST 都可以</p><ul><li>POST 新增。如果不指定 id，会自动生成 id。指定 id 就会修改这个数据，并新增版本号</li><li>PUT 可以新增可以修改。PUT 必须指定 id；由于 PUT 需要指定 id，我们一般都用来做修改操作，不指定 id 会报错。</li></ul><h3 id="查询文档" tabindex="-1"><a class="header-anchor" href="#查询文档" aria-hidden="true">#</a> 查询文档</h3><ul><li>GET customer/external/1 结果：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;customer&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//在哪个索引</span>
  <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;external&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//在哪个类型</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//记录 id</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">//版本号</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token comment">//并发控制字段，每次更新就会+1，用来做乐观锁</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token comment">//同上，主分片重新分配，如重启，就会变化</span>
  <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//真正的内容</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新携带 ?if_seq_no=0&amp;if_primary_term=1</p><h3 id="更新文档" tabindex="-1"><a class="header-anchor" href="#更新文档" aria-hidden="true">#</a> 更新文档</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST customer/external/<span class="token number">1</span>/_update
<span class="token punctuation">{</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doew&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST customer/external/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe2&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT customer/external/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不同： POST 操作会对比源文档数据，如果相同不会有什么操作，文档 version 不增加 PUT 操作总会将数据重新保存并增加 version 版本； 带_update 对比元数据如果一样就不进行任何操作。<div class="custom-container info"><p class="custom-container-title">看场景</p><p>对于大并发更新，不带 update； 对于大并发查询偶尔更新，带 update；对比更新，重新计算分配规则。</p></div></li><li>更新同时增加属性<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST customer/external/<span class="token number">1</span>/_update
<span class="token punctuation">{</span> 
    <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jane Doe&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>PUT 和 POST 不带_update 也可以</li></ul><h3 id="删除文档-索引" tabindex="-1"><a class="header-anchor" href="#删除文档-索引" aria-hidden="true">#</a> 删除文档&amp;索引</h3><ul><li>DELETE customer/external/1</li><li>DELETE customer</li></ul><h3 id="bulk-批量-api" tabindex="-1"><a class="header-anchor" href="#bulk-批量-api" aria-hidden="true">#</a> bulk 批量 API</h3><ul><li>POST customer/external/_bulk<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jane Doe&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>复杂实例：<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /_bulk
<span class="token punctuation">{</span> <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;website&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;create&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;website&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My first blog post&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;website&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My second blog post&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;update&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;website&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_retry_on_conflict&quot;</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;doc&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;My updated blog post&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>bulk API 以此按顺序执行所有的 action（动作）。如果一个单个的动作因任何原因而失败，它将继续处理它后面剩余的动作。当 bulk API 返回时，它将提供每个动作的状态（与发送的顺序相同），所以您可以检查是否一个指定的动作是不是失败了。</li></ul><h3 id="样本测试数据" tabindex="-1"><a class="header-anchor" href="#样本测试数据" aria-hidden="true">#</a> 样本测试数据</h3><p>我准备了一份顾客银行账户信息的虚构的 JSON 文档样本。每个文档都有下列的 schema（模式）:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token punctuation">{</span>
  <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token number">16623</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firstname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bradshaw&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mckenzie&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;244 Columbus Place&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;employer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Euron&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bradshawmckenzie@euron.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hobucken&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CO&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),U={href:"https://github.com/elastic/elasticsearch/blob/master/docs/src/test/resources/accounts.json?raw=true",target:"_blank",rel:"noopener noreferrer"},M=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST bank/account/_bulk
测试数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶检索" tabindex="-1"><a class="header-anchor" href="#进阶检索" aria-hidden="true">#</a> 进阶检索</h2><h3 id="searchapi" tabindex="-1"><a class="header-anchor" href="#searchapi" aria-hidden="true">#</a> SearchAPI</h3><p>ES 支持两种基本方式检索 :</p><ul><li>一个是通过使用 REST request URI 发送搜索参数（uri+检索参数）</li><li>另一个是通过使用 REST request body 来发送它们（uri+请求体）</li></ul><h4 id="检索信息" tabindex="-1"><a class="header-anchor" href="#检索信息" aria-hidden="true">#</a> 检索信息</h4><ul><li>一切检索从_search 开始 <ul><li>GET bank/_search 检索 bank 下所有信息，包括 type 和 docs</li><li>GET bank/_search?q=*&amp;sort=account_number:asc 请求参数方式检索</li></ul></li><li>响应结果解释： <ul><li>took - Elasticsearch 执行搜索的时间（毫秒）</li><li>time_out - 告诉我们搜索是否超时</li><li>_shards - 告诉我们多少个分片被搜索了，以及统计了成功/失败的搜索分片</li><li>hits - 搜索结果</li><li>hits.total - 搜索结果</li><li>hits.hits - 实际的搜索结果数组（默认为前 10 的文档）</li><li>sort - 结果的排序 key（键）（没有则按 score 排序）</li><li>score 和 max_score –相关性得分和最高得分（全文检索用）</li></ul></li><li>uri+请求体进行检索<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	  <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> 
  	  <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		  <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
  	  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>需要了解，一旦搜索的结果被返回，Elasticsearch 就完成了这次请求，并且不会维护任何服务端的资源或者结果的 cursor（游标）</p><h3 id="query-dsl" tabindex="-1"><a class="header-anchor" href="#query-dsl" aria-hidden="true">#</a> Query DSL</h3><h4 id="基本语法格式" tabindex="-1"><a class="header-anchor" href="#基本语法格式" aria-hidden="true">#</a> 基本语法格式</h4><p>Elasticsearch 提供了一个可以执行查询的 Json 风格的 DSL（domain-specific language 领域特定语言）。这个被称为 Query DSL。该查询语言非常全面，并且刚开始的时候感觉有点复杂，真正学好它的方法是从一些基础的示例开始的。</p><ul><li>一个查询语句 的典型结构<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   QUERY_NAME<span class="token operator">:</span> <span class="token punctuation">{</span>
  	 ARGUMENT<span class="token operator">:</span> VALUE<span class="token punctuation">,</span> ARGUMENT<span class="token operator">:</span> VALUE<span class="token punctuation">,</span>... 
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>如果是针对某个字段，那么它的结构如下：<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   QUERY_NAME<span class="token operator">:</span> <span class="token punctuation">{</span>
  	 FIELD_NAME<span class="token operator">:</span> <span class="token punctuation">{</span>
  		 ARGUMENT<span class="token operator">:</span> VALUE<span class="token punctuation">,</span> ARGUMENT<span class="token operator">:</span> VALUE<span class="token punctuation">,</span>... 
  	 <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
   <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	 <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> 
   <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> 
   <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> 
  	 <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		 <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
  	 <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>query 定义如何查询，</li><li>match_all 查询类型【代表查询所有的所有】，es 中可以在 query 中组合非常多的查询类型完成复杂查询</li><li>除了 query 参数之外，我们也可以传递其它的参数以改变查询结果。如 sort，size</li><li>from+size 限定，完成分页功能</li><li>sort 排序，多字段排序，会在前序字段相等时后续字段内部排序，否则以前序为准</li></ul><h4 id="返回部分字段" tabindex="-1"><a class="header-anchor" href="#返回部分字段" aria-hidden="true">#</a> 返回部分字段</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;balance&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="match【匹配查询】" tabindex="-1"><a class="header-anchor" href="#match【匹配查询】" aria-hidden="true">#</a> match【匹配查询】</h4><ul><li>基本类型（非字符串），精确匹配<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		<span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>match 返回 account_number=20 的</li><li>字符串，全文检索<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		<span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>最终查询出 address 中包含 mill 单词的所有记录 match 当搜索字符串类型的时候，会进行全文检索，并且每条记录有相关性得分。</li><li>字符串，多个单词（分词+全文检索）<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		<span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill road&quot;</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>最终查询出 address 中包含 mill 或者 road 或者 mill road 的所有记录，并给出相关性得分</li></ul><h4 id="match-phrase【短语匹配】" tabindex="-1"><a class="header-anchor" href="#match-phrase【短语匹配】" aria-hidden="true">#</a> match_phrase【短语匹配】</h4><p>将需要匹配的值当成一个整体单词（不分词）进行检索</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill road&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查出 address 中包含 mill road 的所有记录，并给出相关性得分</p><h4 id="multi-match【多字段匹配】" tabindex="-1"><a class="header-anchor" href="#multi-match【多字段匹配】" aria-hidden="true">#</a> multi_match【多字段匹配】</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;state&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;address&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>state 或者 address 包含 mill</p><h4 id="bool【复合查询】" tabindex="-1"><a class="header-anchor" href="#bool【复合查询】" aria-hidden="true">#</a> bool【复合查询】</h4><p>bool 用来做复合查询：复合语句可以合并 任何 其它查询语句，包括复合语句，了解这一点是很重要的。这就意味着，复合语句之间可以互相嵌套，可以表达非常复杂的逻辑。</p>`,25),D=e(`<li><p>must：必须达到 must 列举的所有条件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	<span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		<span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> 
  			<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				<span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span> 
  			<span class="token punctuation">}</span> 
  		<span class="token punctuation">}</span><span class="token punctuation">,</span>
  		<span class="token punctuation">{</span> 
  			<span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				<span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span> 
  			<span class="token punctuation">}</span> 
  		<span class="token punctuation">}</span><span class="token punctuation">]</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>should：应该达到 should 列举的条件，如果达到会增加相关文档的评分，并不会改变查询的结果。如果 query 中只有 should 且只有一种匹配规则，那么 should 的条件就会被作为默认匹配条件而去改变查询结果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	  <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		  <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> 
  			  <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span> 
  			  <span class="token punctuation">}</span> 
  		  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  		  <span class="token punctuation">{</span> 
  			  <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span> 
  			  <span class="token punctuation">}</span> 
  		  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  		  <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  			  <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lane&quot;</span> 
  			  <span class="token punctuation">}</span>
  		  <span class="token punctuation">}</span><span class="token punctuation">]</span>
  	  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),B=e(`<p>must_not 必须不是指定的情况</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	  <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		  <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> 
  			  <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span> 
  			  <span class="token punctuation">}</span> 
  		  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  		  <span class="token punctuation">{</span> 
  			  <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span> 
  			  <span class="token punctuation">}</span> 
  		  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  		  <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  			  <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lane&quot;</span> 
  			  <span class="token punctuation">}</span>
  		  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  		  <span class="token property">&quot;must_not&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  			  <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;baluba.com&quot;</span> 
  			  <span class="token punctuation">}</span>
  		  <span class="token punctuation">}</span><span class="token punctuation">]</span>
  	  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C={href:"http://baluba.com",target:"_blank",rel:"noopener noreferrer"},N=n("p",null,[n("img",{src:u,alt:"img_1.png"})],-1),J=e(`<h4 id="filter【结果过滤】" tabindex="-1"><a class="header-anchor" href="#filter【结果过滤】" aria-hidden="true">#</a> filter【结果过滤】</h4><p>并不是所有的查询都需要产生分数，特别是那些仅用于 “filtering”（过滤）的文档。为了不计算分数 Elasticsearch 会自动检查场景并且优化查询的执行。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">20000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="term" tabindex="-1"><a class="header-anchor" href="#term" aria-hidden="true">#</a> term</h4><p>和 match 一样。匹配某个属性的值。全文检索字段用 match，其他非 text 字段匹配用 term。</p><p><img src="`+r+`" alt="img_2.png"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;28&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;990 Mill Road&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aggregations-执行聚合" tabindex="-1"><a class="header-anchor" href="#aggregations-执行聚合" aria-hidden="true">#</a> aggregations（执行聚合）</h4><p>聚合提供了从数据中分组和提取数据的能力。最简单的聚合方法大致等于 SQL GROUP BY 和 SQL 聚合函数。在 Elasticsearch 中，您有执行搜索返回hits（命中结果），并且同时返回聚合结果，把一个响应中的所有hits（命中结果）分隔开的能力。这是非常强大且有效的，您可以执行查询和多个聚合，并且在一次使用中得到各自的（任何一个的）返回结果，使用一次简洁和简化的API 来避免网络往返。</p><ul><li>搜索 address 中包含 mill 的所有人的年龄分布以及平均年龄，但不显示这些人的详情。<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span> 
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	  <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
  	  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  	  <span class="token property">&quot;group_by_state&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  			  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span>
  		  <span class="token punctuation">}</span>
  	  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  	  <span class="token property">&quot;avg_age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  		  <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  			  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span>
  		  <span class="token punctuation">}</span>
  	  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>size：0 不显示搜索数据</li><li>aggs：执行聚合。聚合语法如下</li><li>&quot;aggs&quot;: { &quot;aggs_name 这次聚合的名字，方便展示在结果集中&quot;: { &quot;AGG_TYPE 聚合的类型（avg,term,terms）&quot;: {}}}</li><li>复杂：按照年龄聚合，并且请求这些年龄段的这些人的平均薪资<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/account/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  	  <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  	  <span class="token property">&quot;age_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  		  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  			  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> 
  			  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
  		  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  		  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  			  <span class="token property">&quot;banlances_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  				  <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  					  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
  				  <span class="token punctuation">}</span>
  			  <span class="token punctuation">}</span>
  		  <span class="token punctuation">}</span>
  	  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>复杂：查出所有年龄分布，并且这些年龄段中 M 的平均薪资和 F 的平均薪资以及这个年龄段的总体平均薪资<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/account/_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  	  <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  	  <span class="token property">&quot;age_agg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  		  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  			  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
  			  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
  		  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  		  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  			  <span class="token property">&quot;gender_agg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  			  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  				  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gender.keyword&quot;</span><span class="token punctuation">,</span>
  				  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
  			  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  			  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  				  <span class="token property">&quot;balance_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  					  <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  						  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
  					  <span class="token punctuation">}</span>
  				  <span class="token punctuation">}</span>
  			  <span class="token punctuation">}</span>
  		  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  		  <span class="token property">&quot;balance_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  			  <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  				  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
  			  <span class="token punctuation">}</span>
  		  <span class="token punctuation">}</span>
  	  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping" aria-hidden="true">#</a> Mapping</h3><h4 id="字段类型" tabindex="-1"><a class="header-anchor" href="#字段类型" aria-hidden="true">#</a> 字段类型</h4><p><img src="`+d+'" alt="img_3.png"><img src="'+k+'" alt="img_4.png"><img src="'+v+'" alt="img_5.png"><img src="'+m+'" alt="img_6.png"><img src="'+b+'" alt="img_7.png"></p><h4 id="映射" tabindex="-1"><a class="header-anchor" href="#映射" aria-hidden="true">#</a> 映射</h4><p>Mapping（映射）</p><p>Mapping 是用来定义一个文档（document），以及它所包含的属性（field）是如何存储和索引的。比如，使用 mapping 来定义：</p>',16),Q=n("li",null,"哪些字符串属性应该被看做全文本属性（full text fields）。",-1),H=n("li",null,"哪些属性包含数字，日期或者地理位置。",-1),V=n("li",null,"文档中的所有属性是否都能被索引（_all 配置）。",-1),F=n("li",null,"日期的格式。",-1),Y=n("li",null,"自定义映射规则来执行动态添加属性。",-1),K=n("li",null,"查看 mapping 信息： GET bank/_mapping",-1),X={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html",target:"_blank",rel:"noopener noreferrer"},$=n("img",{src:q,alt:"img_8.png"},null,-1),W=e(`<h4 id="新版本改变" tabindex="-1"><a class="header-anchor" href="#新版本改变" aria-hidden="true">#</a> 新版本改变</h4><ul><li>Es7 及以上移除了 type 的概念。 <ul><li>关系型数据库中两个数据表示是独立的，即使他们里面有相同名称的列也不影响使用，但 ES 中不是这样的。elasticsearch 是基于 Lucene 开发的搜索引擎，而 ES 中不同 type下名称相同的 filed 最终在 Lucene 中的处理方式是一样的。 <ul><li>两个不同 type 下的两个 user_name，在 ES 同一个索引下其实被认为是同一个 filed，你必须在两个不同的 type 中定义相同的 filed 映射。否则，不同 type 中的相同字段名称就会在处理中出现冲突的情况，导致 Lucene 处理效率下降。</li><li>去掉 type 就是为了提高 ES 处理数据的效率。</li></ul></li></ul></li><li>Elasticsearch 7.x <ul><li>URL 中的 type 参数为可选。比如，索引一个文档不再要求提供文档类型。</li></ul></li><li>Elasticsearch 8.x <ul><li>不再支持 URL 中的 type 参数。 解决： <ul><li>将索引从多类型迁移到单类型，每种类型文档一个独立索引</li><li>将已存在的索引下的类型数据，全部迁移到指定位置即可。详见数据迁移</li></ul></li></ul></li></ul><ol><li>创建索引并指定映射<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /my-index
<span class="token punctuation">{</span> 
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
	  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
			  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span> 
		  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
		  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
			  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span> 
		  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
		  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
			  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span> 
		  <span class="token punctuation">}</span>
	  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>添加新的字段映射<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /my-index/_mapping
<span class="token punctuation">{</span> 
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
	  <span class="token property">&quot;employee-id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
		  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span> 
		  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
	  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>更新映射 对于已经存在的映射字段，我们不能更新。更新必须创建新的索引进行数据迁移</li><li>数据迁移 先创建出 new_twitter 的正确映射。然后使用如下方式进行数据迁移<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _reindex <span class="token punctuation">[</span>固定写法<span class="token punctuation">]</span>
<span class="token punctuation">{</span> 
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
	  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;twitter&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
	  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;new_twitter&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>将旧索引的 type 下的数据进行迁移<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _reindex
<span class="token punctuation">{</span> 
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;twitter&quot;</span><span class="token punctuation">,</span> 
	  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tweet&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
	  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tweets&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="分词" tabindex="-1"><a class="header-anchor" href="#分词" aria-hidden="true">#</a> 分词</h4><p>一个 tokenizer（分词器）接收一个字符流，将之分割为独立的 tokens（词元，通常是独立的单词），然后输出 tokens 流。例如，whitespace tokenizer 遇到空白字符时分割文本。它会将文本 &quot;Quick brown fox!&quot; 分割为 [Quick, brown, fox!]。该 tokenizer（分词器）还负责记录各个 term（词条）的顺序或 position 位置（用于 phrase 短语和 word proximity 词近邻查询），以及term（词条）所代表的原始 word（单词）的 start（起始）和 end（结束）的 character offsets（字符偏移量）（用于高亮显示搜索的内容）。Elasticsearch 提供了很多内置的分词器，可以用来构建 custom analyzers（自定义分词器）。</p>`,5),Z={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases?after=v6.4.2",target:"_blank",rel:"noopener noreferrer"},nn=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>进入 es 容器内部 plugins 目录
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器 <span class="token function">id</span> /bin/bash
<span class="token function">wget</span>
https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.6.2/elasticsearch-anal
ysis-ik-8.6.2.zip
<span class="token function">unzip</span> 下载的文件
<span class="token function">rm</span> –rf *.zip
<span class="token function">mv</span> elasticsearch/ ik
可以确认是否安装好了分词器
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/bin
elasticsearch plugin list：即可列出系统的分词器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),sn=e(`<li><p>测试分词器</p><ul><li>使用默认<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _analyze
<span class="token punctuation">{</span> 
	<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是中国人&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>请观察结果</li><li>使用分词器<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _analyze
<span class="token punctuation">{</span> 
	<span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span><span class="token punctuation">,</span> 
	<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是中国人&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>请观察结果</li><li>另外一个分词器ik_max_word<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _analyze
<span class="token punctuation">{</span> 
	<span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span> 
	<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我是中国人&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>请观察结果 能够看出不同的分词器，分词有明显的区别，所以以后定义一个索引不能再使用默认的 mapping 了，要手工建立 mapping, 因为要选择分词器。</li></ul></li><li><p>自定义词库</p><p>修改/usr/share/elasticsearch/plugins/ik/config/中的 IKAnalyzer.cfg.xml</p><p>/usr/share/elasticsearch/plugins/ik/config</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer 扩展配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!--用户可以在这里配置自己的扩展字典 --&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!--用户可以在这里配置远程扩展字典 --&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>remote_ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>http://192.168.128.130/fenci/myword.txt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!--用户可以在这里配置远程扩展停止词字典--&gt;</span>
   <span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_stopwords&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原来的 xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer 扩展配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!--用户可以在这里配置自己的扩展字典 --&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
   <span class="token comment">&lt;!--用户可以在这里配置远程扩展字典 --&gt;</span>
   <span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_dict&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
   <span class="token comment">&lt;!--用户可以在这里配置远程扩展停止词字典--&gt;</span>
   <span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_stopwords&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照标红的路径利用 nginx 发布静态资源,按照请求路径，创建对应的文件夹以及文件，放在nginx 的 html 下</p><p><img src="`+g+'" alt="img_9.png"></p><p>然后重启 es 服务器，重启 nginx。</p><p>在 kibana 中测试分词效果</p><p><img src="'+h+'" alt="img_10.png"></p><p>更新完成后，es 只会对新增的数据用新词分词。历史数据是不会重新分词的。如果想要历史数据重新分词。需要执行：</p><p>POST my_index/_update_by_query?conflicts=proceed</p></li>',2),an=n("h2",{id:"elasticsearch-rest-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch-rest-client","aria-hidden":"true"},"#"),s(" Elasticsearch-Rest-Client")],-1),tn=n("li",null,[s("9300：TCP "),n("ul",null,[n("li",null,[s("spring-data-elasticsearch:transport-api.jar； "),n("ul",null,[n("li",null,"springboot 版本不同， transport-api.jar 不同，不能适配 es 版本"),n("li",null,"7.x 已经不建议使用，8 以后就要废弃")])])])],-1),en=n("li",null,"JestClient：非官方，更新慢",-1),pn=n("li",null,"RestTemplate：模拟发 HTTP 请求，ES 很多操作需要自己封装，麻烦",-1),on=n("li",null,"HttpClient：同上",-1),ln={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html",target:"_blank",rel:"noopener noreferrer"},cn=e(`<ol><li><p>SpringBoot 整合</p><div class="language-pom line-numbers-mode" data-ext="pom"><pre class="language-pom"><code>&lt;dependency&gt;
	&lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
	&lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt;
	&lt;version&gt;8.6.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token class-name">RestHighLevelClient</span> <span class="token function">client</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">RestClientBuilder</span> builder <span class="token operator">=</span> <span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.56.10&quot;</span><span class="token punctuation">,</span> <span class="token number">9200</span><span class="token punctuation">,</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestHighLevelClient</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 参照官方文档：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
	<span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	product<span class="token punctuation">.</span><span class="token function">setSpuName</span><span class="token punctuation">(</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	product<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">10L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">IndexRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;product&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token string">&quot;spuName&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span><span class="token number">20L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token class-name">IndexResponse</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">IndexResponse</span> response2 <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">RequestOptions</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ElasticsearchException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">RestStatus</span><span class="token punctuation">.</span><span class="token constant">CONFLICT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt="img_11.png"></p></li></ol><h2 id="附录-安装-nginx" tabindex="-1"><a class="header-anchor" href="#附录-安装-nginx" aria-hidden="true">#</a> 附录-安装 nginx</h2><ul><li>随便启动一个 nginx 实例，只是为了复制出配置</li><li>docker run -p 80:80 --name nginx -d nginx:1.10</li><li>将容器内的配置文件拷贝到当前目录：docker container cp nginx:/etc/nginx .  别忘了后面的点</li><li>修改文件名称：mv nginx conf 把这个 conf 移动到/mydata/nginx 下</li><li>终止原容器：docker stop nginx</li><li>执行命令删除原容器：docker rm $ContainerId</li><li>创建新的 nginx；执行以下命令<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/conf:/etc/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> nginx:1.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+_+'" alt="img_12.png"></li><li>给 nginx 的 html 下面放的所有资源可以直接访问；</li></ul>',3);function un(rn,dn){const a=l("ExternalLinkIcon");return o(),i("div",null,[f,j,n("p",null,[n("a",E,[s("https://www.elastic.co/cn/what-is/elasticsearch"),t(a)])]),w,T,n("p",null,[s("官方文档："),n("a",S,[s("https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"),t(a)])]),n("p",null,[s("官方中文："),n("a",P,[s("https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html"),t(a)])]),n("p",null,[s("社区中文："),n("a",L,[s("https://es.xiaoleilu.com/index.html"),t(a)])]),n("p",null,[n("a",R,[s("http://doc.codingdict.com/elasticsearch/0/"),t(a)])]),G,n("div",A,[I,n("p",null,[n("a",O,[s("http://192.168.56.10:9200"),t(a)]),s(" 一定改为自己虚拟机的地址")])]),z,n("p",null,[n("a",U,[s("https://github.com/elastic/elasticsearch/blob/master/docs/src/test/resources/accounts.json?raw=true"),t(a)]),s(" 导入测试数据")]),M,n("ul",null,[D,n("li",null,[B,n("p",null,[s("address 包含 mill，并且 gender 是 M，如果 address 里面有 lane 最好不过，但是 email 必须不包含 "),n("a",C,[s("baluba.com"),t(a)])]),N])]),J,n("ul",null,[Q,H,V,F,Y,K,n("li",null,[s("修改 mapping 信息 "),n("a",X,[s("https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html"),t(a)]),s(" 自动猜测的映射类型 "),$])]),W,n("ol",null,[n("li",null,[n("p",null,[s("安装 ik 分词器 注意：不能用默认 elasticsearch-plugin install xxx.zip 进行自动安装 "),n("a",Z,[s("https://github.com/medcl/elasticsearch-analysis-ik/releases?after=v6.4.2"),t(a)]),s(" 对应 es 版本安装")]),nn]),sn]),an,n("ul",null,[tn,n("li",null,[s("9200：HTTP "),n("ul",null,[en,pn,on,n("li",null,[s("Elasticsearch-Rest-Client：官方 RestClient，封装了 ES 操作，API 层次分明，上手简单 最终选择 Elasticsearch-Rest-Client（elasticsearch-rest-high-level-client） "),n("a",ln,[s("https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html"),t(a)])])])])]),cn])}const mn=p(x,[["render",un],["__file","elasticsearch.html.vue"]]);export{mn as default};
