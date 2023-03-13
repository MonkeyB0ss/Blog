import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,e as s}from"./app.c0047b93.js";const d={},t=s(`<h1 id="第05章-存储引擎" tabindex="-1"><a class="header-anchor" href="#第05章-存储引擎" aria-hidden="true">#</a> 第05章_存储引擎</h1><h2 id="_1-查看存储引擎" tabindex="-1"><a class="header-anchor" href="#_1-查看存储引擎" aria-hidden="true">#</a> <strong>1.</strong> <strong>查看存储引擎</strong></h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> engines<span class="token punctuation">;</span>
<span class="token comment"># 或</span>
<span class="token keyword">show</span> engines\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-设置系统默认的存储引擎" tabindex="-1"><a class="header-anchor" href="#_2-设置系统默认的存储引擎" aria-hidden="true">#</a> <strong>2.</strong> <strong>设置系统默认的存储引擎</strong></h2><ul><li>查看默认的存储引擎：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%storage_engine%&#39;</span><span class="token punctuation">;</span> 
<span class="token comment">#或</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@default_storage_engine</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改默认的存储引擎</li></ul><p>如果在创建表的语句中没有显式指定表的存储引擎的话，那就会默认使用<code>InnoDB</code>作为表的存储引擎。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> DEFAULT_STORAGE_ENGINE<span class="token operator">=</span>MyISAM<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者修改<code>my.cnf</code>文件：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">default-storage-engine</span><span class="token punctuation">=</span><span class="token value attr-value">MyISAM</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重启服务 </span>
systemctl restart mysqld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-设置表的存储引擎" tabindex="-1"><a class="header-anchor" href="#_3-设置表的存储引擎" aria-hidden="true">#</a> <strong>3.</strong> <strong>设置表的存储引擎</strong></h2><p>存储引擎是负责对表中的数据进行提取和写入工作的，我们可以为<code>不同的表设置不同的存储引擎</code>，也就是说不同的表可以有不同的物理存储结构，不同的提取和写入方式。</p><h3 id="_3-1-创建表时指定存储引擎" tabindex="-1"><a class="header-anchor" href="#_3-1-创建表时指定存储引擎" aria-hidden="true">#</a> <strong>3.1</strong> <strong>创建表时指定存储引擎</strong></h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">(</span>
    建表语句<span class="token punctuation">;</span> 
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> 存储引擎名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-修改表的存储引擎" tabindex="-1"><a class="header-anchor" href="#_3-2-修改表的存储引擎" aria-hidden="true">#</a> <strong>3.2</strong> <strong>修改表的存储引擎</strong></h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ENGINE</span> <span class="token operator">=</span> 存储引擎名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-引擎介绍" tabindex="-1"><a class="header-anchor" href="#_4-引擎介绍" aria-hidden="true">#</a> <strong>4.</strong> <strong>引擎介绍</strong></h2><h3 id="_4-1-innodb-引擎-具备外键支持功能的事务存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-1-innodb-引擎-具备外键支持功能的事务存储引擎" aria-hidden="true">#</a> <strong>4.1 InnoDB</strong> <strong>引擎：具备外键支持功能的事务存储引擎</strong></h3><ul><li>MySQL从3.23.34a开始就包含InnoDB存储引擎。<code>大于等于5.5之后，默认采用InnoDB引擎</code>。</li><li>InnoDB是MySQL的<code>默认事务型引擎</code>，它被设计用来处理大量的短期(short-lived)事务。可以确保事务的完整提交(Commit)和回滚( Rollback)。</li><li>除了增加和查询外，还需要更新、删除操作，那么，应优先选择InnoDB存储引擎。</li><li><strong>除非有非常特别的原因需要使用其他的存储引擎，否则应该优先考虑InnoDB引擎。</strong></li><li>数据文件结构： <ul><li>表名.frm 存储表结构（MySQL8.0时，合并在表名.ibd中）</li><li>表名.ibd 存储数据和索引</li></ul></li><li><h2 id="innodb是为处理巨大数据量的最大性能设计。" tabindex="-1"><a class="header-anchor" href="#innodb是为处理巨大数据量的最大性能设计。" aria-hidden="true">#</a> InnoDB是<code>为处理巨大数据量的最大性能设计</code>。</h2> 在以前的版本中，字典数据以元数据文件、非事务表等来存储。现在这些元数据文件被删除了。比如：<code>.frm</code>，<code>.par</code>，<code>.trn</code>，<code>.isl</code>，<code>.db.opt</code> 等都在MySQL8.0中不存在了。</li><li>对比MyISAM的存储引擎，<code>InnoDB写的处理效率差一些</code>，并且会占用更多的磁盘空间以保存数据和索引。</li><li>MyISAM只缓存索引，不缓存真实数据；InnoDB不仅缓存索引还要缓存真实数据，<code>对内存要求较高</code>，而且内存大小对性能有决定性的影响。</li></ul><h3 id="_4-2-myisam-引擎-主要的非事务处理存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-2-myisam-引擎-主要的非事务处理存储引擎" aria-hidden="true">#</a> <strong>4.2 MyISAM</strong> <strong>引擎：主要的非事务处理存储引擎</strong></h3><ul><li>MyISAM提供了大量的特性，包括全文索引、压缩、空间函数(GIS)等，但MyISAM<code>不支持事务、行级锁、外键</code> ，有一个毫无疑问的缺陷就是<code>崩溃后无法安全恢复</code>。</li><li><code>5.5之前默认的存储引擎</code></li><li>优势是访问的<code>速度快</code>，对事务完整性没有要求或者以SELECT、INSERT为主的应用</li><li>针对数据统计有额外的常数存储。故而 count(*) 的查询效率很高</li><li>数据文件结构： <ul><li>表名.frm 存储表结构</li><li>表名.MYD 存储数据 (MYData)</li><li>表名.MYI 存储索引 (MYIndex)</li></ul></li><li>应用场景：只读应用或者以读为主的业务</li></ul><h3 id="_4-3-archive-引擎-用于数据存档" tabindex="-1"><a class="header-anchor" href="#_4-3-archive-引擎-用于数据存档" aria-hidden="true">#</a> <strong>4.3 Archive</strong> <strong>引擎：用于数据存档</strong></h3><h3 id="_4-4-blackhole-引擎-丢弃写操作-读操作会返回空内容" tabindex="-1"><a class="header-anchor" href="#_4-4-blackhole-引擎-丢弃写操作-读操作会返回空内容" aria-hidden="true">#</a> <strong>4.4 Blackhole</strong> <strong>引擎：丢弃写操作，读操作会返回空内容</strong></h3><h3 id="_4-5-csv-引擎-存储数据时-以逗号分隔各个数据项" tabindex="-1"><a class="header-anchor" href="#_4-5-csv-引擎-存储数据时-以逗号分隔各个数据项" aria-hidden="true">#</a> <strong>4.5 CSV</strong> <strong>引擎：存储数据时，以逗号分隔各个数据项</strong></h3><h3 id="_4-6-memory-引擎-置于内存的表" tabindex="-1"><a class="header-anchor" href="#_4-6-memory-引擎-置于内存的表" aria-hidden="true">#</a> <strong>4.6 Memory</strong> <strong>引擎：置于内存的表</strong></h3><h3 id="_4-7-federated-引擎-访问远程表" tabindex="-1"><a class="header-anchor" href="#_4-7-federated-引擎-访问远程表" aria-hidden="true">#</a> <strong>4.7 Federated</strong> <strong>引擎：访问远程表</strong></h3><h3 id="_4-8-merge引擎-管理多个myisam表构成的表集合" tabindex="-1"><a class="header-anchor" href="#_4-8-merge引擎-管理多个myisam表构成的表集合" aria-hidden="true">#</a> <strong>4.8 Merge引擎：管理多个MyISAM表构成的表集合</strong></h3><h3 id="_4-9-ndb引擎-mysql集群专用存储引擎" tabindex="-1"><a class="header-anchor" href="#_4-9-ndb引擎-mysql集群专用存储引擎" aria-hidden="true">#</a> <strong>4.9 NDB引擎：MySQL集群专用存储引擎</strong></h3><h2 id="_5-myisam和innodb" tabindex="-1"><a class="header-anchor" href="#_5-myisam和innodb" aria-hidden="true">#</a> <strong>5. MyISAM和InnoDB</strong></h2><table><thead><tr><th>对比项</th><th><strong>MyISAM</strong></th><th><strong>InnoDB</strong></th></tr></thead><tbody><tr><td>外键</td><td>不支持</td><td>支持</td></tr><tr><td>事务</td><td>不支持</td><td>支持</td></tr><tr><td>行表锁</td><td>表锁，即使操作一条记录也会锁住整个表，不适合高并发的操作</td><td>行锁，操作时只锁某一行，不对其它行有影响，适合高并发的操作</td></tr><tr><td>缓存</td><td>只缓存索引，不缓存真实数据</td><td>不仅缓存索引还要缓存真实数据，对内存要求较高，而且内存大小对性能有决定性的影响</td></tr><tr><td>自带系统表使用</td><td>Y</td><td>N</td></tr><tr><td>关注点</td><td>性能：节省资源、消耗少、简单业务</td><td>事务：并发写、事务、更大资源</td></tr><tr><td>默认安装</td><td>Y</td><td>Y</td></tr><tr><td>默认使用</td><td>N</td><td>Y</td></tr></tbody></table>`,32),r=[t];function i(o,l){return e(),a("div",null,r)}const u=n(d,[["render",i],["__file","engines.html.vue"]]);export{u as default};