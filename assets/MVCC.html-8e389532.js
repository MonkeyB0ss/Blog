import{_ as e,X as a,Y as d,a2 as n}from"./framework-a20dc394.js";const s="/assets/MVCC1-1b199259.png",o="/assets/MVCC2-7e469607.png",i="/assets/MVCC3-2ee8b88b.png",t="/assets/MVCC4-4c42fc9d.png",r="/assets/MVCC5-080f5dc1.png",c="/assets/MVCC6-25218bdd.png",p="/assets/MVCC7-56a15e86.png",l={},_=n('<h1 id="第16章-多版本并发控制" tabindex="-1"><a class="header-anchor" href="#第16章-多版本并发控制" aria-hidden="true">#</a> 第16章_多版本并发控制</h1><h2 id="_1-什么是mvcc" tabindex="-1"><a class="header-anchor" href="#_1-什么是mvcc" aria-hidden="true">#</a> <strong>1.</strong> <strong>什么是MVCC</strong></h2><p>MVCC （Multiversion Concurrency Control），多版本并发控制。顾名思义，MVCC 是通过数据行的多个版本管理来实现数据库的<code>并发控制</code> 。这项技术使得在InnoDB的事务隔离级别下执行<code>一致性读</code> 操作有了保证。换言之，就是为了查询一些正在被另一个事务更新的行，并且可以看到它们被更新之前的值，这样在做查询的时候就不用等待另一个事务释放锁。</p><h2 id="_2-快照读与当前读" tabindex="-1"><a class="header-anchor" href="#_2-快照读与当前读" aria-hidden="true">#</a> <strong>2.</strong> <strong>快照读与当前读</strong></h2><p>MVCC在MySQL InnoDB中的实现主要是为了提高数据库并发性能，用更好的方式去处理<code>读-写冲突</code> ，做到即使有读写冲突时，也能做到<code>不加锁</code>，<code>非阻塞并发读</code>，而这个读指的就是<code>快照读</code>, 而非<code>当前读</code> 。当前读实际上是一种加锁的操作，是悲观锁的实现。而MVCC本质是采用乐观锁思想的一种方式。</p><h3 id="_2-1-快照读" tabindex="-1"><a class="header-anchor" href="#_2-1-快照读" aria-hidden="true">#</a> <strong>2.1</strong> <strong>快照读</strong></h3><p>快照读又叫一致性读，读取的是快照数据。<strong>不加锁的简单的</strong> <strong>SELECT</strong> <strong>都属于快照读</strong>，即不加锁的非阻塞读。</p><p>之所以出现快照读的情况，是基于提高并发性能的考虑，快照读的实现是基于MVCC，它在很多情况下，避免了加锁操作，降低了开销。</p><p>既然是基于多版本，那么快照读可能读到的并不一定是数据的最新版本，而有可能是之前的历史版本。</p><p>快照读的前提是隔离级别不是串行级别，串行级别下的快照读会退化成当前读。</p><h3 id="_2-2-当前读" tabindex="-1"><a class="header-anchor" href="#_2-2-当前读" aria-hidden="true">#</a> <strong>2.2</strong> <strong>当前读</strong></h3><p>当前读读取的是记录的最新版本（最新数据，而不是历史版本的数据），读取时还要保证其他并发事务不能修改当前记录，会对读取的记录进行加锁。加锁的 SELECT，或者对数据进行增删改都会进行当前读。</p><h2 id="_3-复习" tabindex="-1"><a class="header-anchor" href="#_3-复习" aria-hidden="true">#</a> <strong>3.</strong> <strong>复习</strong></h2><h3 id="_3-1-再谈隔离级别" tabindex="-1"><a class="header-anchor" href="#_3-1-再谈隔离级别" aria-hidden="true">#</a> <strong>3.1</strong> <strong>再谈隔离级别</strong></h3><p>我们知道事务有 4 个隔离级别，可能存在三种并发问题：</p><p><img src="'+s+'" alt="image-20220405153617536"></p><p>另图：</p><p><img src="'+o+'" alt="image-20220405153632021"></p><h3 id="_3-2-隐藏字段、undo-log版本链" tabindex="-1"><a class="header-anchor" href="#_3-2-隐藏字段、undo-log版本链" aria-hidden="true">#</a> <strong>3.2</strong> <strong>隐藏字段、Undo Log版本链</strong></h3><p>回顾一下undo日志的版本链，对于使用<code>InnoDB</code>存储引擎的表来说，它的聚簇索引记录中都包含两个必要的隐藏列。</p><ul><li><code>trx_id</code>：每次一个事务对某条聚簇索引记录进行改动时，都会把该事务的<code>事务id</code>赋值给trx_id 隐藏列。</li><li><code>roll_pointer</code>：每次对某条聚簇索引记录进行改动时，都会把旧的版本写入到 undo日志 中，然后这个隐藏列就相当于一个指针，可以通过它来找到该记录修改前的信息。</li></ul><h2 id="_4-mvcc实现原理之readview" tabindex="-1"><a class="header-anchor" href="#_4-mvcc实现原理之readview" aria-hidden="true">#</a> <strong>4. MVCC实现原理之ReadView</strong></h2><p>MVCC 的实现依赖于：<strong>隐藏字段、Undo Log、Read View</strong>。</p><h3 id="_4-1-什么是readview" tabindex="-1"><a class="header-anchor" href="#_4-1-什么是readview" aria-hidden="true">#</a> <strong>4.1</strong> <strong>什么是ReadView</strong></h3><p>ReadView就是事务在使用MVCC机制进行快照读操作时产生的读视图。当事务启动时，会生成数据库系统当前的一个快照，InnoDB为每个事务构造了一个数组，用来记录并维护系统当前<code>活跃事务</code> 的ID（&quot;活跃&quot;指的就是，启动了但还没提交）。</p><h3 id="_4-2-设计思路" tabindex="-1"><a class="header-anchor" href="#_4-2-设计思路" aria-hidden="true">#</a> <strong>4.2</strong> <strong>设计思路</strong></h3><p>使用<code>READ UNCOMMITTED</code>隔离级别的事务，由于可以读到未提交事务修改过的记录，所以直接读取记录的最新版本就好了。</p><p>使用<code>SERIALIZABLE</code>隔离级别的事务，InnoDB规定使用加锁的方式来访问记录。</p><p>使用<code>READ COMMITTED</code>和<code>REPEATABLE READ</code>隔离级别的事务，都必须保证读到<code>已经提交了的</code> 事务修改过的记录。假如另一个事务已经修改了记录但是尚未提交，是不能直接读取最新版本的记录的，核心问题就是需要判断一下版本链中的哪个版本是当前事务可见的，这是ReadView要解决的主要问题。</p><p>这个ReadView中主要包含4个比较重要的内容，分别如下：</p><ol><li><code>creator_trx_id</code>，创建这个 Read View 的事务 ID。</li></ol><blockquote><p>说明：只有在对表中的记录做改动时（执行INSERT、DELETE、UPDATE这些语句时）才会为事务分配事务id，否则在一个只读事务中的事务id值都默认为0。</p></blockquote><ol start="2"><li><p><code>trx_ids</code>，表示在生成ReadView时当前系统中活跃的读写事务的<code>事务id列表</code>。</p></li><li><p><code>up_limit_id</code>，活跃的事务中最小的事务 ID。</p></li><li><p><code>low_limit_id</code>，表示生成ReadView时系统中应该分配给下一个事务的<code>id</code>值。low_limit_id 是系统最大的事务id值，这里要注意是系统中的事务id，需要区别于正在活跃的事务ID。</p></li></ol><blockquote><p>注意：low_limit_id并不是trx_ids中的最大值，事务id是递增分配的。比如，现在有id为1， 2，3这三个事务，之后id为3的事务提交了。那么一个新的读事务在生成ReadView时，trx_ids就包括1和2，up_limit_id的值就是1，low_limit_id的值就是4。</p></blockquote><h3 id="_4-3-readview的规则" tabindex="-1"><a class="header-anchor" href="#_4-3-readview的规则" aria-hidden="true">#</a> <strong>4.3 ReadView的规则</strong></h3><p>有了这个ReadView，这样在访问某条记录时，只需要按照下边的步骤判断记录的某个版本是否可见。</p><ul><li>如果被访问版本的trx_id属性值与ReadView中的<code>creator_trx_id</code>值相同，意味着当前事务在访问它自己修改过的记录，所以该版本可以被当前事务访问。</li><li>如果被访问版本的trx_id属性值小于ReadView中的<code>up_limit_id</code>值，表明生成该版本的事务在当前事务生成ReadView前已经提交，所以该版本可以被当前事务访问。</li><li>如果被访问版本的trx_id属性值大于或等于ReadView中的<code>low_limit_id</code>值，表明生成该版本的事务在当前事务生成ReadView后才开启，所以该版本不可以被当前事务访问。</li><li>如果被访问版本的trx_id属性值在ReadView的<code>up_limit_id</code>和<code>low_limit_id</code>之间，那就需要判断一下trx_id属性值是不是在 trx_ids 列表中。 <ul><li>如果在，说明创建ReadView时生成该版本的事务还是活跃的，该版本不可以被访问。</li><li>如果不在，说明创建ReadView时生成该版本的事务已经被提交，该版本可以被访问。</li></ul></li></ul><h3 id="_4-4-mvcc整体操作流程" tabindex="-1"><a class="header-anchor" href="#_4-4-mvcc整体操作流程" aria-hidden="true">#</a> <strong>4.4 MVCC整体操作流程</strong></h3><p>了解了这些概念之后，我们来看下当查询一条记录的时候，系统如何通过MVCC找到它：</p><ol><li><p>首先获取事务自己的版本号，也就是事务 ID；</p></li><li><p>获取 ReadView；</p></li><li><p>查询得到的数据，然后与 ReadView 中的事务版本号进行比较；</p></li><li><p>如果不符合 ReadView 规则，就需要从 Undo Log 中获取历史快照；</p></li><li><p>最后返回符合规则的数据。</p></li></ol><p>在隔离级别为读已提交（Read Committed）时，一个事务中的每一次 SELECT 查询都会重新获取一次Read View。</p><p>如表所示：</p><p><img src="'+i+'" alt="image-20220405154948505"></p><blockquote><p>注意，此时同样的查询语句都会重新获取一次 Read View，这时如果 Read View 不同，就可能产生不可重复读或者幻读的情况。</p></blockquote><p>当隔离级别为可重复读的时候，就避免了不可重复读，这是因为一个事务只在第一次 SELECT 的时候会获取一次 Read View，而后面所有的 SELECT 都会复用这个 Read View，如下表所示：</p><p><img src="'+t+'" alt="image-20220405155041964"></p><h2 id="_5-举例说明" tabindex="-1"><a class="header-anchor" href="#_5-举例说明" aria-hidden="true">#</a> <strong>5.</strong> <strong>举例说明</strong></h2><h3 id="_5-1-read-committed隔离级别下" tabindex="-1"><a class="header-anchor" href="#_5-1-read-committed隔离级别下" aria-hidden="true">#</a> <strong>5.1 READ COMMITTED隔离级别下</strong></h3><p><strong>READ COMMITTED</strong> <strong>：每次读取数据前都生成一个ReadView</strong>。</p><h3 id="_5-2-repeatable-read隔离级别下" tabindex="-1"><a class="header-anchor" href="#_5-2-repeatable-read隔离级别下" aria-hidden="true">#</a> <strong>5.2 REPEATABLE READ隔离级别下</strong></h3><p>使用<code>REPEATABLE READ</code>隔离级别的事务来说，只会在第一次执行查询语句时生成一个 ReadView ，之后的查询就不会重复生成了。</p><h3 id="_5-3-如何解决幻读" tabindex="-1"><a class="header-anchor" href="#_5-3-如何解决幻读" aria-hidden="true">#</a> <strong>5.3</strong> <strong>如何解决幻读</strong></h3><p>假设现在表 student 中只有一条数据，数据内容中，主键 id=1，隐藏的 trx_id=10，它的 undo log 如下图所示。</p><p><img src="'+r+`" alt="image-20220405155640520"></p><p>假设现在有事务 A 和事务 B 并发执行，<code>事务 A</code>的事务 id 为<code>20</code>，<code>事务 B</code>的事务 id 为<code>30</code>。</p><p>步骤1：事务 A 开始第一次查询数据，查询的 SQL 语句如下。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> id <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在开始查询之前，MySQL 会为事务 A 产生一个 ReadView，此时 ReadView 的内容如下：<code>trx_ids= [20,30]</code>，<code>up_limit_id=20</code>，<code>low_limit_id=31</code>，<code>creator_trx_id=20</code>。</p><p>由于此时表 student 中只有一条数据，且符合 where id&gt;=1 条件，因此会查询出来。然后根据 ReadView机制，发现该行数据的trx_id=10，小于事务 A 的 ReadView 里 up_limit_id，这表示这条数据是事务 A 开启之前，其他事务就已经提交了的数据，因此事务 A 可以读取到。</p><p>结论：事务 A 的第一次查询，能读取到一条数据，id=1。</p><p>步骤2：接着事务 B(trx_id=30)，往表 student 中新插入两条数据，并提交事务。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> student<span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">insert</span> <span class="token keyword">into</span> student<span class="token punctuation">(</span>id<span class="token punctuation">,</span>name<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;王五&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时表student 中就有三条数据了，对应的 undo 如下图所示：</p><p><img src="`+c+'" alt="image-20220405155909223"></p><p>步骤3：接着事务 A 开启第二次查询，根据可重复读隔离级别的规则，此时事务 A 并不会再重新生成ReadView。此时表 student 中的 3 条数据都满足 where id&gt;=1 的条件，因此会先查出来。然后根据ReadView 机制，判断每条数据是不是都可以被事务 A 看到。</p><p>1）首先 id=1 的这条数据，前面已经说过了，可以被事务 A 看到。</p><p>2）然后是 id=2 的数据，它的 trx_id=30，此时事务 A 发现，这个值处于 up_limit_id 和 low_limit_id 之间，因此还需要再判断 30 是否处于 trx_ids 数组内。由于事务 A 的 trx_ids=[20,30]，因此在数组内，这表示 id=2 的这条数据是与事务 A 在同一时刻启动的其他事务提交的，所以这条数据不能让事务 A 看到。</p><p>3）同理，id=3 的这条数据，trx_id 也为 30，因此也不能被事务 A 看见。</p><p><img src="'+p+'" alt="image-20220405155941753"></p><p>结论：最终事务 A 的第二次查询，只能查询出 id=1 的这条数据。这和事务 A 的第一次查询的结果是一样的，因此没有出现幻读现象，所以说在 MySQL 的可重复读隔离级别下，不存在幻读问题。</p><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> <strong>6.</strong> <strong>总结</strong></h2><p>这里介绍了<code>MVCC</code>在<code>READ COMMITTD</code>、<code>REPEATABLE READ</code> 这两种隔离级别的事务在执行快照读操作时访问记录的版本链的过程。这样使不同事务的<code>读-写</code>、<code>写-读</code>操作并发执行，从而提升系统性能。</p><p>核心点在于 ReadView 的原理，<code>READ COMMITTD</code>、<code>REPEATABLE READ</code>这两个隔离级别的一个很大不同就是生成ReadView的时机不同：</p><ul><li><code>READ COMMITTD</code>在每一次进行普通SELECT操作前都会生成一个ReadView</li><li><code>REPEATABLE READ</code>只在第一次进行普通SELECT操作前生成一个ReadView，之后的查询操作都重复使用这个ReadView就好了。</li></ul>',74),h=[_];function g(u,m){return a(),d("div",null,h)}const R=e(l,[["render",g],["__file","MVCC.html.vue"]]);export{R as default};
