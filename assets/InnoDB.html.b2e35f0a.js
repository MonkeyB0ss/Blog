import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,e as o}from"./app.912b6410.js";const c={},r=o(`<h1 id="第07章-innodb数据存储结构" tabindex="-1"><a class="header-anchor" href="#第07章-innodb数据存储结构" aria-hidden="true">#</a> 第07章_InnoDB数据存储结构</h1><h2 id="_1-数据库的存储结构-页" tabindex="-1"><a class="header-anchor" href="#_1-数据库的存储结构-页" aria-hidden="true">#</a> 1. 数据库的存储结构：页</h2><p>索引结构给我们提供了高效的索引方式，不过索引信息以及数据记录都保存在文件上的，确切说是存储在页结构中。另一方面，索引是在存储引擎中实现的，MySQL服务器上的<code>存储引擎</code> 负责对表中数据的读取和写入工作。不同存储引擎中<code>存放的格式</code>一般不同的，甚至有的存储引擎比如Memory都不用磁盘来存储数据。</p><p>由于<code>InnoDB</code>是MySQL的<code>默认存储引擎</code>，所以本章剖析InooDB存储引擎的数据存储结构。</p><h3 id="_1-1-磁盘与内存交互基本单位-页" tabindex="-1"><a class="header-anchor" href="#_1-1-磁盘与内存交互基本单位-页" aria-hidden="true">#</a> 1.1 磁盘与内存交互基本单位：页</h3><p>InnoDB将数据划分为若干个页，InnoDB中页的大小默认为<code>16KB</code>。</p><p>以<code>页</code> 作为磁盘和内存之间交互的基本单位，也就是一次最少从磁盘中读取16KB的内容到内存中，一次最少把内存中的16KB内容刷新到磁盘中。 也就是说，<strong>在数据库中，不论读一行，还是读多行，都是将这些行所在的页进行加载。 也就是说，数据库管理存储空间的基本单位是页（Page），数据库I/O操作的最小单位是页。</strong> 一个页中可以存储多个行记录。</p><blockquote><p>记录是按照行来存储的，但是数据库的读取并不以行为单位，否则一次读取（也就是一次I/O操作）只能处理一行数据，效率会非常低。</p></blockquote><h3 id="_1-2-页结构概述" tabindex="-1"><a class="header-anchor" href="#_1-2-页结构概述" aria-hidden="true">#</a> 1.2 页结构概述</h3><p>页a、页b、页c...页n这些页可以<code>不在物理结构上相连</code>，只要通过<code>双向链表</code> 相关联即可。每个数据页中的记录会按照主键值从小到大的顺序组成一个<code>单向链表</code> ，每个数据页都会为存储在它里边的记录生成一个<code>页目录</code>，在通过主键查找某条记录的时候可以在页目录中<code>使用二分法</code> 快速定位到对应的槽，然后再遍历该槽对应的分组中的记录即可快速找到指定的记录。</p><h3 id="_1-3-页的上层结构" tabindex="-1"><a class="header-anchor" href="#_1-3-页的上层结构" aria-hidden="true">#</a> 1.3 页的上层结构</h3><p>区（Extent）是比页大一级的存储结构，在InnoDB存储引擎中，一个区会分配<code>64个连续的页</code> 。因为InnoDB中的页大小默认是16KB，所以一个区的大小是64*16KB=<code>1MB</code>。</p><p>段（Segment）由一个或多个区组成，区在文件系统是一个连续分配的空间（在InnoDB中是连续的64个页），不过在段中不要求区与区之间是相邻的。<code>段是数据库中的分配单位，不同类型的数据库对象以不同的段形式存在。</code> 当我们创建数据表、索引的时候，就会相应创建对应的段，比如创建一张表时会创建一个表段，创建一个索引时会创建一个索引段。</p><p>表空间（Tablespace）是一个逻辑容器，表空间存储的对象是段，在一个表空间中可以有一个或多个段，但是一个段只能属于一个表空间。数据库由一个或多个表空间组成，表空间从管理上可以划分为<code>系统表空间</code>、<code>用户表空间</code>、<code>撤销表空间</code>、<code>临时表空间</code> 等。</p><h2 id="_2-页的内部结构" tabindex="-1"><a class="header-anchor" href="#_2-页的内部结构" aria-hidden="true">#</a> 2. 页的内部结构</h2><h3 id="_2-1-第1部分-文件头部和文件尾部" tabindex="-1"><a class="header-anchor" href="#_2-1-第1部分-文件头部和文件尾部" aria-hidden="true">#</a> 2.1 第1部分：文件头部和文件尾部</h3><h2 id="_2-1-1-file-header-文件头部-38字节" tabindex="-1"><a class="header-anchor" href="#_2-1-1-file-header-文件头部-38字节" aria-hidden="true">#</a> 2.1.1 File Header（文件头部）（38字节）</h2><p><strong>作用</strong>： 描述各种页的通用信息。（比如页的编号、其上一页、下一页是谁等）</p><p><strong>大小</strong>：38字节</p><table><thead><tr><th>名称</th><th>占用空间大小</th><th>描述</th></tr></thead><tbody><tr><td><code>FIL_PAGE_SPACE_OR_CHKSUM</code></td><td><code>4</code>字节</td><td>页的校验和（checksum值）</td></tr><tr><td><code>FIL_PAGE_OFFSET</code></td><td><code>4</code>字节</td><td>页号</td></tr><tr><td><code>FIL_PAGE_PREV</code></td><td><code>4</code>字节</td><td>上一个页的页号</td></tr><tr><td><code>FIL_PAGE_NEXT</code></td><td><code>4</code>字节</td><td>下一个页的页号</td></tr><tr><td>FIL_PAGE_LSN</td><td><code>8</code>字节</td><td>页面被最后修改时对应的日志序列位置</td></tr><tr><td><code>FIL_PAGE_TYPE</code></td><td><code>2</code>字节</td><td>该页的类型</td></tr><tr><td>FIL_PAGE_FILE_FLUSH_LSN</td><td><code>8</code>字节</td><td>仅在系统表空间的一个页中定义，代表文件至少被刷新到了对应的LSN值</td></tr><tr><td><code>FIL_PAGE_ARCH_LOG_NO_OR_SPACE_ID</code></td><td><code>4</code>字节</td><td>页属于哪个表空间</td></tr></tbody></table><ul><li><code>FIL_PAGE_OFFSET（4字节）</code>：每一个页都有一个单独的页号，就跟你的身份证号码一样，InnoDB通过页号可以唯一定位一个页。</li><li><code>FIL_PAGE_TYPE（2字节）</code>：这个代表当前页的类型。</li></ul><table><thead><tr><th>类型名称</th><th>十六进制</th><th>描述</th></tr></thead><tbody><tr><td>FIL_PAGE_TYPE_ALLOCATED</td><td>0x0000</td><td>最新分配，还没有使用</td></tr><tr><td><code>FIL_PAGE_UNDO_LOG</code></td><td>0x0002</td><td>Undo日志页</td></tr><tr><td>FIL_PAGE_INODE</td><td>0x0003</td><td>段信息节点</td></tr><tr><td>FIL_PAGE_IBUF_FREE_LIST</td><td>0x0004</td><td>Insert Buffer空闲列表</td></tr><tr><td>FIL_PAGE_IBUF_BITMAP</td><td>0x0005</td><td>Insert Buffer位图</td></tr><tr><td><code>FIL_PAGE_TYPE_SYS</code></td><td>0x0006</td><td>系统页</td></tr><tr><td>FIL_PAGE_TYPE_TRX_SYS</td><td>0x0007</td><td>事务系统数据</td></tr><tr><td>FIL_PAGE_TYPE_FSP_HDR</td><td>0x0008</td><td>表空间头部信息</td></tr><tr><td>FIL_PAGE_TYPE_XDES</td><td>0x0009</td><td>扩展描述页</td></tr><tr><td>FIL_PAGE_TYPE_BLOB</td><td>0x000A</td><td>溢出页</td></tr><tr><td><code>FIL_PAGE_INDEX</code></td><td>0x45BF</td><td>索引页，也就是我们所说的<code>数据页</code></td></tr></tbody></table><ul><li><code>FIL_PAGE_PREV（4字节）和FIL_PAGE_NEXT（4字节）</code> ：InnoDB都是以页为单位存放数据的，如果数据分散到多个不连续的页中存储的话需要把这些页关联起来，FIL_PAGE_PREV和FIL_PAGE_NEXT就分别代表本页的上一个和下一个页的页号。这样通过建立一个双向链表把许许多多的页就都串联起来了，保证这些页之间 <strong>不需要是物理上的连续，而是逻辑上的连续。</strong></li><li><code>FIL_PAGE_SPACE_OR_CHKSUM（4字节）</code>：代表当前页面的校验和（checksum）。文件头部和文件尾部都有属性：FIL_PAGE_SPACE_OR_CHKSUM</li></ul><p><strong>作用：</strong></p><p>InnoDB存储引擎以页为单位把数据加载到内存中处理，如果该页中的数据在内存中被修改了，那么<code>在修改后的某个时间需要把数据同步到磁盘中。</code> 但是在同步了一半的时候断电了，造成了该页传输的不完整。</p><p>为了检测一个页是否完整（也就是在同步的时候有没有发生只同步一半的尴尬情况），这时可以通过文件尾的校验和（checksum 值）与文件头的校验和做比对，如果两个值不相等则证明页的传输有问题，需要重新进行传输，否则认为页的传输已经完成。</p><ul><li><code>FIL_PAGE_LSN（8字节）</code>：页面被最后修改时对应的日志序列位置（英文名是：Log Sequence Number）</li></ul><h2 id="_2-1-2-file-trailer-文件尾部-8字节" tabindex="-1"><a class="header-anchor" href="#_2-1-2-file-trailer-文件尾部-8字节" aria-hidden="true">#</a> 2.1.2 File Trailer（文件尾部）（8字节）</h2><ul><li>前4个字节代表页的校验和：这个部分是和File Header中的校验和相对应的。</li><li>后4个字节代表页面被最后修改时对应的日志序列位置（LSN）：这个部分也是为了校验页的完整性的，如果首部和尾部的LSN值校验不成功的话，就说明同步过程出现了问题。</li></ul><h3 id="_2-2-第2部分-空闲空间、用户记录和最小最大记录" tabindex="-1"><a class="header-anchor" href="#_2-2-第2部分-空闲空间、用户记录和最小最大记录" aria-hidden="true">#</a> 2.2 第2部分：空闲空间、用户记录和最小最大记录</h3><h2 id="_2-2-1-free-space-空闲空间" tabindex="-1"><a class="header-anchor" href="#_2-2-1-free-space-空闲空间" aria-hidden="true">#</a> 2.2.1 Free Space (空闲空间)</h2><p>我们自己存储的记录会按照指定的<code>行格式</code>存储到<code>User Records</code>部分。但是在一开始生成页的时候，其实并没有User Records这个部分，<code>每当我们插入一条记录，都会从Free Space部分，也就是尚未使用的存储空间中申请一个记录大小的空间划分到User Records部分</code> ，当Free Space部分的空间全部被User Records部分替代掉之后，也就意味着这个页使用完了，如果还有新的记录插入的话，就需要去<code>申请新的页</code>了。</p><h2 id="_2-2-2-user-records-用户记录" tabindex="-1"><a class="header-anchor" href="#_2-2-2-user-records-用户记录" aria-hidden="true">#</a> 2.2.2 User Records (用户记录)</h2><p>User Records中的这些记录按照<code>指定的行格式</code>一条一条摆在User Records部分，相互之间形成<code>单链表</code>。</p><h2 id="_2-2-3-infimum-supremum-最小最大记录" tabindex="-1"><a class="header-anchor" href="#_2-2-3-infimum-supremum-最小最大记录" aria-hidden="true">#</a> 2.2.3 Infimum + Supremum（最小最大记录）</h2><p><strong>记录可以比较大小吗</strong>？ 是的，记录可以比大小，对于一条完整的记录来说，比较记录的大小就是<code>比较主键</code> 的大小。比方说我们插入的4行记录的主键值分别是：1、2、3、4，这也就意味着这4条记录是从小到大依次递增。</p><p>InnoDB规定的最小记录与最大记录这两条记录的构造十分简单，都是由5字节大小的记录头信息和8字节大小的一个固定的部分组成的。</p><h3 id="_2-3-第3部分-页目录和页面头部" tabindex="-1"><a class="header-anchor" href="#_2-3-第3部分-页目录和页面头部" aria-hidden="true">#</a> 2.3 第3部分：页目录和页面头部</h3><h2 id="_2-3-1-page-directory-页目录" tabindex="-1"><a class="header-anchor" href="#_2-3-1-page-directory-页目录" aria-hidden="true">#</a> 2.3.1 Page Directory（页目录）</h2><p><strong>为什么需要页目录</strong>？ 在页中，记录是以<code>单向链表</code>的形式进行存储的。单向链表的特点就是插入、删除非常方便，但是<code>检索效率不高</code> ，最差的情况下需要遍历链表上的所有节点才能完成检索。因此在页结构中专门设计了页目录这个模块，<code>专门给记录做一个目录</code> ，通过<code>二分查找法</code>的方式进行检索，提升效率。</p><p><strong>页目录，二分法查找</strong></p><ol><li>将所有的记录<code>分成几个组</code>，这些记录包括最小记录和最大记录，但不包括标记为&quot;已删除&quot;的记录。</li><li>第 1 组，也就是最小记录所在的分组只有 1 个记录； 最后一组，就是最大记录所在的分组，会有 1-8 条记录； 其余的组记录数量在 4-8 条之间。 这样做的好处是，除了第 1 组（最小记录所在组）以外，其余组的记录数会<code>尽量平分</code>。</li><li>在每个组中最后一条记录的头信息中会存储该组一共有多少条记录，作为 n_owned 字段。</li><li><code>页目录用来存储每组最后一条记录的地址偏移量</code>，这些地址偏移量会按照<code>先后顺序存储</code> 起来，每组的地址偏移量也被称之为<code>槽（slot）</code>，每个槽相当于指针指向了不同组的最后一个记录。</li></ol><p><strong>为什么最小记录的n_owned值为1，而最大记录的n_owned值为5呢？</strong></p><p>InnoDB规定：对于最小记录所在的分组只能有1条记录，最大记录所在的分组拥有的记录条数只能在1~8条之间，剩下的分组中记录的条数范围只能在是 4~8 条之间。</p><p>分组是按照下边的步骤进行的：</p><ul><li>初始情况下一个数据页里只有最小记录和最大记录两条记录，它们分属于两个分组。</li><li>之后每插入一条记录，都会从页目录中找到主键值比本记录的主键值大并且差值最小的槽，然后把该槽对应的记录的n_owned值加1，表示本组内又添加了一条记录，直到该组中的记录数等于8个。</li><li>在一个组中的记录数等于8个后再插入一条记录时，会将组中的记录拆分成两个组，一个组中4条记录，另一个5条记录。这个过程会在页目录中新增一个槽来记录这个新增分组中最大的那条记录的偏移量。</li></ul><h2 id="_2-3-2-page-header-页面头部" tabindex="-1"><a class="header-anchor" href="#_2-3-2-page-header-页面头部" aria-hidden="true">#</a> 2.3.2 Page Header（页面头部）</h2><p>为了能得到一个数据页中存储的记录的状态信息，比如本页中已经存储了多少条记录，第一条记录的地址是什么，页目录中存储了多少个槽等等，特意在页中定义了一个叫Page Header的部分，这个部分占用固定的56个字节，专门存储各种状态信息。</p><table><thead><tr><th>名称</th><th>占用空间大小</th><th>描述</th></tr></thead><tbody><tr><td>PAGE_N_DIR_SLOTS</td><td>2字节</td><td>在页目录中的槽数量</td></tr><tr><td>PAGE_HEAP_TOP</td><td>2字节</td><td>还未使用的空间最小地址，也就是说从该地址之后就是<code>Free Space</code></td></tr><tr><td>PAGE_N_HEAP</td><td>2字节</td><td>本页中的记录的数量（包括最小和最大记录以及标记为删除的记录）</td></tr><tr><td>PAGE_FREE</td><td>2字节</td><td>第一个已经标记为删除的记录的记录地址（各个已删除的记录通过<code>next_record</code>也会组成一个单链表，这个单链表中的记录可以被重新利用）</td></tr><tr><td>PAGE_GARBAGE</td><td>2字节</td><td>已删除记录占用的字节数</td></tr><tr><td>PAGE_LAST_INSERT</td><td>2字节</td><td>最后插入记录的位置</td></tr><tr><td>PAGE_DIRECTION</td><td>2字节</td><td>记录插入的方向</td></tr><tr><td>PAGE_N_DIRECTION</td><td>2字节</td><td>一个方向连续插入的记录数量</td></tr><tr><td>PAGE_N_RECS</td><td>2字节</td><td>该页中记录的数量（不包括最小和最大记录以及被标记为删除的记录）</td></tr><tr><td>PAGE_MAX_TRX_ID</td><td>8字节</td><td>修改当前页的最大事务ID，该值仅在二级索引中定义</td></tr><tr><td>PAGE_LEVEL</td><td>2字节</td><td>当前页在B+树中所处的层级</td></tr><tr><td>PAGE_INDEX_ID</td><td>8字节</td><td>索引ID，表示当前页属于哪个索引</td></tr><tr><td>PAGE_BTR_SEG_LEAF</td><td>10字节</td><td>B+树叶子段的头部信息，仅在B+树的Root页定义</td></tr><tr><td>PAGE_BTR_SEG_TOP</td><td>10字节</td><td>B+树非叶子段的头部信息，仅在B+树的Root页定义</td></tr></tbody></table><h2 id="_3-innodb行格式-或记录格式" tabindex="-1"><a class="header-anchor" href="#_3-innodb行格式-或记录格式" aria-hidden="true">#</a> 3. InnoDB行格式（或记录格式）</h2><h3 id="_3-1-指定行格式的语法" tabindex="-1"><a class="header-anchor" href="#_3-1-指定行格式的语法" aria-hidden="true">#</a> 3.1 指定行格式的语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 <span class="token punctuation">(</span>列的信息<span class="token punctuation">)</span> ROW_FORMAT<span class="token operator">=</span>行格式名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 ROW_FORMAT<span class="token operator">=</span>行格式名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-compact行格式" tabindex="-1"><a class="header-anchor" href="#_3-2-compact行格式" aria-hidden="true">#</a> 3.2 COMPACT行格式</h3><p>在MySQL 5.1版本中，默认设置为Compact行格式。一条完整的记录其实可以被分为记录的额外信息和记录的真实数据两大部分。</p><h2 id="_3-2-1-变长字段长度列表" tabindex="-1"><a class="header-anchor" href="#_3-2-1-变长字段长度列表" aria-hidden="true">#</a> 3.2.1 变长字段长度列表</h2><p>MySQL支持一些变长的数据类型，比如VARCHAR(M)、VARBINARY(M)、TEXT类型，BLOB类型，这些数据类型修饰列称为<code>变长字段</code> ，变长字段中存储多少字节的数据不是固定的，所以我们在存储真实数据的时候需要顺便把这些数据占用的字节数也存起来。<code>在Compact行格式中，把所有变长字段的真实数据占用的字节长度都存放在记录的开头部位，从而形成一个变长字段长度列表。</code></p><blockquote><p>注意：这里面存储的变长长度和字段顺序是反过来的。比如两个varchar字段在表结构的顺序是a(10)，b(15) 。那么在变长字段长度列表中存储的长度顺序就是15，10，是反过来的。</p></blockquote><h2 id="_3-2-2-null值列表" tabindex="-1"><a class="header-anchor" href="#_3-2-2-null值列表" aria-hidden="true">#</a> 3.2.2 NULL值列表</h2><p>Compact行格式会把可以为NULL的列统一管理起来，存在一个标记为NULL值列表中。如果表中没有允许存储 NULL 的列，则 NULL值列表也不存在了。 <strong>为什么定义NULL值列表？</strong> 之所以要存储NULL是因为数据都是需要对齐的，如果<code>没有标注出来NULL值的位置</code>，就有可能在查询数据的时候<code>出现混乱</code> 。如果使用<code>一个特定的符号</code>放到相应的数据位表示空置的话，虽然能达到效果，但是这样很浪费空间，所以直接就在行数据得头部开辟出一块空间专门用来记录该行数据哪些是非空数据，哪些是空数据，格式如下：</p><ol><li>二进制位的值为1时，代表该列的值为NULL。</li><li>二进制位的值为0时，代表该列的值不为NULL。</li></ol><blockquote><p>注意：同样顺序也是反过来存放的</p></blockquote><h2 id="_3-2-3-记录头信息-5字节" tabindex="-1"><a class="header-anchor" href="#_3-2-3-记录头信息-5字节" aria-hidden="true">#</a> 3.2.3 记录头信息（5字节）</h2><table><thead><tr><th>名称</th><th>大小（单位：bit）</th><th>描述</th></tr></thead><tbody><tr><td><code>预留位1</code></td><td>1</td><td>没有使用</td></tr><tr><td><code>预留位2</code></td><td>1</td><td>没有使用</td></tr><tr><td><code>delete_mask</code></td><td>1</td><td>标记该记录是否被删除</td></tr><tr><td><code>mini_rec_mask</code></td><td>1</td><td>B+树的每层非叶子节点中的最小记录都会添加该标记</td></tr><tr><td><code>n_owned</code></td><td>4</td><td>表示当前记录拥有的记录数</td></tr><tr><td><code>heap_no</code></td><td>13</td><td>表示当前记录在记录堆的位置信息</td></tr><tr><td><code>record_type</code></td><td>3</td><td>表示当前记录的类型，<code>0</code>表示普通记录，<code>1</code>表示B+树非叶子节点记录，<code>2</code>表示最小记录，<code>3</code>表示最大记录</td></tr><tr><td><code>next_record</code></td><td>16</td><td>表示下一条记录的相对位置</td></tr></tbody></table><ul><li><code>delete_mask</code>：这个属性标记着当前记录是否被删除，占用1个二进制位。 <ul><li>值为0：代表记录并没有被删除</li><li>值为1：代表记录被删除掉了</li></ul></li></ul><p><strong>被删除的记录为什么还在页中存储呢？</strong> 你以为它删除了，可它还在真实的磁盘上。这些被删除的记录之所以不立即从磁盘上移除，是因为移除它们之后其他的记录在磁盘上需要<code>重新排列，导致性能消耗</code> 。所以只是打一个删除标记而已，所有被删除掉的记录都会组成一个所谓的<code>垃圾链表</code> ，在这个链表中的记录占用的空间称之为<code>可重用空间</code>，之后如果有新记录插入到表中的话，可能把这些被删除的记录占用的存储空间覆盖掉。</p><ul><li><code>min_rec_mask</code>：B+树的每层非叶子节点中的最小记录都会添加该标记，min_rec_mask值为1。我们自己插入的四条记录的min_rec_mask值都是0，意味着它们都不是B+树的非叶子节点中的最小记录。</li><li><code>record_type</code>：这个属性表示当前记录的类型，一共有4种类型的记录： <ul><li>0：表示普通记录</li><li>1：表示B+树非叶节点记录</li><li>2：表示最小记录</li><li>3：表示最大记录</li></ul></li><li><code>heap_no</code>：这个属性表示当前记录在本页中的位置。</li></ul><p><strong>怎么不见heap_no值为0和1的记录呢</strong>？ MySQL会自动给每个页里加了两个记录，由于这两个记录并不是我们自己插入的，所以有时候也称为<code>伪记录</code>或者<code>虚拟记录</code> 。这两个伪记录一个代表<code>最小记录</code>，一个代表<code>最大记录</code>。最小记录和最大记录的heap_no值分别是0和1，也就是说它们的位置最靠前</p><ul><li><code>n_owned</code>：页目录中每个组中最后一条记录的头信息中会存储该组一共有多少条记录，作为 n_owned 字段</li><li><code>next_record</code>：记录头信息里该属性非常重要，它表示从当前记录的真实数据到下一条记录的真实数据的<code>地址偏移量</code>。</li></ul><h2 id="_3-2-4-记录的真实数据" tabindex="-1"><a class="header-anchor" href="#_3-2-4-记录的真实数据" aria-hidden="true">#</a> 3.2.4 记录的真实数据</h2><table><thead><tr><th>列名</th><th>是否必须</th><th>占用空间</th><th>描述</th></tr></thead><tbody><tr><td>row_id</td><td>否</td><td>6字节</td><td>行ID，唯一标识一条记录</td></tr><tr><td>transaction_id</td><td>是</td><td>6字节</td><td>事务ID</td></tr><tr><td>roll_pointer</td><td>是</td><td>7字节</td><td>回滚指针</td></tr></tbody></table><p>一个表没有手动定义主键，则会选取一个Unique键作为主键，如果连Unique键都没有定义的话，则会为表默认添加一个名为row_id的隐藏列作为主键。所以row_id是在没有自定义主键以及Unique键的情况下才会存在的。</p><h3 id="_3-3-dynamic和compressed行格式" tabindex="-1"><a class="header-anchor" href="#_3-3-dynamic和compressed行格式" aria-hidden="true">#</a> 3.3 Dynamic和Compressed行格式</h3><p>我们可以知道一个页的大小一般是16KB，也就是16384字节，而一个VARCHAR(M) 类型的列就最多可以存储65533个字节，这样就可能出现一个页存放不了一条记录，这种现象称为<code>行溢出</code></p><p>在Compact和Reduntant行格式中，对于占用存储空间非常大的列，在记录的真实数据处只会存储该列的一部分数据，把剩余的数据分散存储在几个其他的页中进行<code>分页存储</code> ，然后记录的真实数据处用20个字节存储指向这些页的地址（当然这20个字节中还包括这些分散在其他页面中的数据的占用的字节数），从而可以找到剩余数据所在的页。这称为<code>页的扩展</code>。</p><p>在MySQL 8.0中，默认行格式就是Dynamic，Dynamic、Compressed行格式和Compact行格式挺像，只不过在处理行溢出数据时有分歧</p><ul><li>Compressed和Dynamic两种记录格式对于存放在BLOB中的数据采用了完全的行溢出的方式。如图，在数据页中只存放20个字节的指针（溢出页的地址），实际的数据都存放在Off Page（溢出页）中。</li><li>Compact和Redundant两种格式会在记录的真实数据处存储一部分数据（存放768个前缀字节）。</li></ul><h2 id="_4-区、段和碎片区" tabindex="-1"><a class="header-anchor" href="#_4-区、段和碎片区" aria-hidden="true">#</a> 4. 区、段和碎片区</h2><h3 id="_4-1-为什么要有区" tabindex="-1"><a class="header-anchor" href="#_4-1-为什么要有区" aria-hidden="true">#</a> 4.1 为什么要有区？</h3><p><code>B+</code>树的每一层中的页都会形成一个双向链表，如果是以<code>页为单位</code> 来分配存储空间的话，双向链表相邻的两个页之间的<code>物理位置可能离得非常远</code> 。我们介绍B+树索引的使用场景的时候特别提到范围查询只需要定位到最左边的记录和最右边的记录，然后沿着双向链表一直扫描就可以了，而如果链表中相邻的两个页物理位置离得非常远，就是所谓的<code>随机I/O</code> 。再一次强调，磁盘的速度和内存的速度差了好几个数量级，<code>随机I/O是非常慢</code> 的，所以我们应该尽量让链表中相邻的页的物理位置也相邻，这样进行范围查询的时候才可以使用所谓的<code>顺序I/O</code>。</p><p>引入<code>区</code>的概念，一个区就是物理位置上连续的<code>64个页</code>。因为InnoDB中的页的大小默认是16KB，所以一个区的大小是64*16KB=<code>1MB</code> 。在表中<code>数据量大</code>的时候，为某个索引分配空间的时候就不再按照页的单位分配了，而是按照<code>区为单位分配</code> ，甚至在表中的数据特别多的时候，可以一次性分配多个连续的区。虽然可能造成<code>一点点空间的浪费</code> （数据不足以填充满整个区），但是从性能角度看，可以消除很多的随机I/O，<code>功大于过</code>！</p><h3 id="_4-2-为什么要有段" tabindex="-1"><a class="header-anchor" href="#_4-2-为什么要有段" aria-hidden="true">#</a> 4.2 为什么要有段？</h3><p>对于范围查询，其实是对B+树叶子节点中的记录进行顺序扫描，而如果不区分叶子节点和非叶子节点，统统把节点代表的页面放到申请到的区中的话，进行范围扫描的效果就大打折扣了。所以InnoDB对B+树的<code>叶子节点</code> 和<code>非叶子节点</code> 进行了区别对待，也就是说叶子节点有自己独有的区，非叶子节点也有自己独有的区。存放叶子节点的区的集合就算是一个<code>段（segment）</code> ，存放非叶子节点的区的集合也算是一个段。也就是说一个索引会生成2个段，一个<code>叶子节点段</code>，一个<code>非叶子节点段</code>。</p><p>除了索引的叶子节点段和非叶子节点段之外，InnoDB中还有为存储一些特殊的数据而定义的段，比如回滚段。所以，常见的段有<code>数据段</code>、<code>索引段</code>、<code>回滚段</code> 。数据段即为B+树的叶子节点，索引段即为B+树的非叶子节点。</p><p>在InnoDB存储引擎中，对段的管理都是由引擎自身所完成，DBA不能也没有必要对其进行控制。这从一定程度上简化了DBA对于段的管理。</p><p>段其实不对应表空间中的某一个连续的物理区域，而是一个逻辑上的概念，由若干个零散的页面以及一些完整的区组成。</p><h3 id="_4-3-为什么要有碎片区" tabindex="-1"><a class="header-anchor" href="#_4-3-为什么要有碎片区" aria-hidden="true">#</a> 4.3 为什么要有碎片区？</h3><p>默认情况下，一个使用InnoDB存储引擎的表只有一个聚簇索引，一个索引会生成2个段，而段是以区为单位申请存储空间的，一个区默认占用1M（64* 16KB=1024KB）存储空间，所以<strong>默认情况下一个只存在几条记录的小表也需要2M的存储空间么？</strong> 以后每次添加一个索引都要多申请2M的存储空间么？这对于存储记录比较少的表简直是天大的浪费。这个问题的症结在于到现在为止我们介绍的区都是非常<code>纯粹</code> 的，也就是一个区被整个分配给某一个段，或者说区中的所有页面都是为了存储同一个段的数据而存在的，即使段的数据填不满区中所有的页面，那余下的页面也不能挪作他用。</p><p>为了考虑以完整的区为单位分配给某个段对于<code>数据量较小</code>的表太浪费存储空间的这种情况，InnoDB提出了一个<code>碎片（fragment）区</code> 的概念。在一个碎片区中，并不是所有的页都是为了存储同一个段的数据而存在的，而是碎片区中的页可以用于不同的目的，比如有些页面用于段A，有些页面用于段B，有些页甚至哪个段都不属于。<code>碎片区直属于表空间</code> ，并不属于任何一个段。</p><p>所以此后为某个段分配存储空间的策略是这样的：</p><ul><li>在刚开始向表中插入数据的时候，段是从某个碎片区以单个页面为单位来分配存储空间的。</li><li>当某个段已经占用了<code>32个碎片区</code>页面之后，就会申请以完整的区为单位来分配存储空间。</li></ul><p>所以现在段不能仅定义为是某些区的集合，更精确的应该是<code>某些零散的页面</code>已经<code>一些完整的区</code>的集合。</p><h3 id="_4-4-区的分类" tabindex="-1"><a class="header-anchor" href="#_4-4-区的分类" aria-hidden="true">#</a> 4.4 区的分类</h3><p>区大体上可以分为4种类型：</p><ul><li><code>空闲的区(FREE)</code>：现在还没有用到这个区中的任何页面。</li><li><code>有剩余空间的碎片区(FREE_FRAG)</code>：表示碎片区中还有可用的页面。</li><li><code>没有剩余空间的碎片区(FULL_FRAG)</code>：表示碎片区中的所有页面都被使用，没有空闲页面。</li><li><code>附属于某个段的区(FSEG)</code>：每一索引都可以分为叶子节点段和非叶子节点段</li></ul><p>处于<code>FREE</code>、<code>FREE_FRAG</code>以及<code>FULL_FRAG</code>这三种状态的区都是独立的，直属于表空间。而处于<code>FSEG</code>状态的区是附属于某个段的。</p>`,96),a=[r];function n(i,h){return e(),t("div",null,a)}const s=d(c,[["render",n],["__file","InnoDB.html.vue"]]);export{s as default};
