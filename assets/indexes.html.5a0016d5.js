import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,e as d}from"./app.912b6410.js";const s="/Blog/assets/indexes1.8c8a4fe1.png",c="/Blog/assets/indexes2.e08903af.png",a="/Blog/assets/indexes3.048783dc.png",p="/Blog/assets/indexes4.a50ad35d.png",t="/Blog/assets/indexes5.47703a12.png",r="/Blog/assets/indexes6.3c0d50d9.png",i="/Blog/assets/indexes7.55756e88.png",l="/Blog/assets/indexes8.107485c7.png",g="/Blog/assets/indexes9.c82c2ada.png",h="/Blog/assets/indexes10.f8c14cf6.png",u="/Blog/assets/indexes11.6a9183c5.png",B="/Blog/assets/indexes12.ba780d99.png",_="/Blog/assets/indexes13.15b4dc4d.png",m="/Blog/assets/indexes14.5a4fa95b.png",k="/Blog/assets/indexes15.ded5b293.png",y={},b=d(`<h1 id="第06章-索引的数据结构" tabindex="-1"><a class="header-anchor" href="#第06章-索引的数据结构" aria-hidden="true">#</a> 第06章_索引的数据结构</h1><h2 id="_1-索引及其优缺点" tabindex="-1"><a class="header-anchor" href="#_1-索引及其优缺点" aria-hidden="true">#</a> <strong>1.</strong> <strong>索引及其优缺点</strong></h2><h3 id="_1-1-索引概述" tabindex="-1"><a class="header-anchor" href="#_1-1-索引概述" aria-hidden="true">#</a> <strong>1.1</strong> <strong>索引概述</strong></h3><p>MySQL官方对索引的定义为：<strong>索引（Index）是帮助MySQL高效获取数据的数据结构</strong>。</p><p><strong>索引的本质</strong>：索引是数据结构。你可以简单理解为&quot;排好序的快速查找数据结构&quot;，满足特定查找算法。这些数据结构以某种方式指向数据， 这样就可以在这些数据结构的基础上实现<code>高级查找算法</code>。</p><h3 id="_1-2-优点" tabindex="-1"><a class="header-anchor" href="#_1-2-优点" aria-hidden="true">#</a> <strong>1.2</strong> <strong>优点</strong></h3><p>（1）类似大学图书馆建书目索引，提高数据检索的效率，降低<code>数据库的IO成本</code>，这也是创建索引最主要的原因。</p><p>（2）通过创建唯一索引，可以保证数据库表中每一行<code>数据的唯一性</code>。</p><p>（3）在实现数据的参考完整性方面，可以<code>加速表和表之间的连接</code>。换句话说，对于有依赖关系的子表和父表联合查询时，可以提高查询速度。</p><p>（4）在使用分组和排序子句进行数据查询时，可以显著<code>减少查询中分组和排序的时间</code>，降低了CPU的消耗。</p><h3 id="_1-3-缺点" tabindex="-1"><a class="header-anchor" href="#_1-3-缺点" aria-hidden="true">#</a> <strong>1.3</strong> <strong>缺点</strong></h3><p>（1）创建索引和维护索引要<code>耗费时间</code>，并且随着数据量的增加，所耗费的时间也会增加。</p><p>（2）索引需要占<code>磁盘空间</code>，除了数据表占数据空间之外，每一个索引还要占一定的物理空间<code>存储在磁盘上</code> ，如果有大量的索引，索引文件就可能比数据文件更快达到最大文件尺寸。</p><p>（3）虽然索引大大提高了查询速度，同时却会<code>降低更新表的速度</code>。当对表中的数据进行增加、删除和修改的时候，索引也要动态地维护，这样就降低了数据的维护速度。</p><h2 id="_2-innodb中索引的推演" tabindex="-1"><a class="header-anchor" href="#_2-innodb中索引的推演" aria-hidden="true">#</a> <strong>2. InnoDB中索引的推演</strong></h2><h3 id="_2-1-索引之前的查找" tabindex="-1"><a class="header-anchor" href="#_2-1-索引之前的查找" aria-hidden="true">#</a> <strong>2.1</strong> <strong>索引之前的查找</strong></h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">[</span>列名列表<span class="token punctuation">]</span> <span class="token keyword">FROM</span> 表名 <span class="token keyword">WHERE</span> 列名 <span class="token operator">=</span> xxx<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>1.在一个页中的查找</strong></p><p>假设目前表中的记录比较少，所有的记录都可以被存放在一个页中，在查找记录的时候可以根据搜索条件的不同分为两种情况：</p><ul><li>以主键为搜索条件 <ul><li>可以在页目录中使用<code>二分法</code>快速定位到对应的槽，然后再遍历该槽对应分组中的记录即可快速找到指定的记录。</li></ul></li><li>以其他列作为搜索条件 <ul><li>因为在数据页中并没有对非主键建立所谓的页目录，所以我们无法通过二分法快速定位相应的槽。这种情况下只能从最小记录开始依次遍历单链表中的每条记录，然后对比每条记录是不是符合搜索条件。很显然，这种查找的效率是非常低的。</li></ul></li></ul><p><strong>2.在很多页中查找</strong></p><p>大部分情况下我们表中存放的记录都是非常多的，需要好多的数据页来存储这些记录。在很多页中查找记录的话可以分为两个步骤：</p><ol><li>定位到记录所在的页。</li><li>从所在的页内查找相应的记录。</li></ol><p>在没有索引的情况下，不论是根据主键列或者其他列的值进行查找，由于我们并不能快速的定位到记录所在的页，所以只能<code>从第一个页</code> 沿着<code>双向链表</code> 一直往下找，在每一个页中根据我们上面的查找方式去查找指定的记录。因为要遍历所有的数据页，所以这种方式显然是<code>超级耗时</code>的。</p><h3 id="_2-2-设计索引" tabindex="-1"><a class="header-anchor" href="#_2-2-设计索引" aria-hidden="true">#</a> <strong>2.2</strong> <strong>设计索引</strong></h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> index_demo<span class="token punctuation">(</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> c1 <span class="token keyword">INT</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> c2 <span class="token keyword">INT</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> c3 <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">)</span> ROW_FORMAT <span class="token operator">=</span> Compact<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个新建的<code>index_demo</code>表中有2个INT类型的列，1个CHAR(1)类型的列，而且我们规定了c1列为主键，这个表使用<code>Compact</code> 行格式来实际存储记录的。这里我们简化了index_demo表的行格式示意图：</p><p><img src="`+s+'" alt="indexes1.png" loading="lazy"></p><ul><li><code>record_type</code>：记录头信息的一项属性，表示记录的类型，<code>0</code>表示普通记录、<code>1</code>表示目录项记录、<code>2</code>表示最小记录、<code>3</code>表示最大记录。</li><li><code>next_record</code>：记录头信息的一项属性，表示下一条地址相对于本条记录的地址偏移量，我们用箭头来表明下一条记录是谁。</li><li><code>各个列的值</code>：这里只记录在<code>index_demo</code>表中的三个列，分别是<code>c1</code>、<code>c2</code>和<code>c3</code>。</li><li><code>其他信息</code>：除了上述3种信息以外的所有信息，包括其他隐藏列的值以及记录的额外信息。</li></ul><p>将记录格式示意图的其他信息项暂时去掉并把它竖起来的效果就是这样：</p><p><img src="'+c+'" alt="indexes2.png" loading="lazy"></p><p>把一些记录放到页里的示意图就是：</p><p><img src="'+a+'" alt="indexes3.png" loading="lazy"></p><p><strong>1.</strong> <strong>一个简单的索引设计方案</strong></p><p>我们在根据某个搜索条件查找一些记录时为什么要遍历所有的数据页呢？因为各个页中的记录并没有规律，我们并不知道我们的搜索条件匹配哪些页中的记录，所以不得不依次遍历所有的数据页。所以如果我们<code>想快速的定位到需要查找的记录在哪些数据页</code> 中该咋办？我们可以为快速定位记录所在的数据页而<code>建立一个目录</code>，建这个目录必须完成下边这些事：</p><ul><li><strong>下一个数据页中用户记录的主键值必须大于上一个页中用户记录的主键值。</strong></li><li><strong>给所有的页建立一个目录项。</strong></li></ul><p><img src="'+p+'" alt="indexes4.png" loading="lazy"></p><p>以<code>页28</code>为例，它对应<code>目录项2</code>，这个目录项中包含着该页的页号<code>28</code>以及该页中用户记录的最小主键值<code>5</code> 。我们只需要把几个目录项在物理存储器上连续存储（比如：数组），就可以实现根据主键值快速查找某条记录的功能了。比如：查找主键值为<code>20</code> 的记录，具体查找过程分两步：</p><ol><li><p>先从目录项中根据<code>二分法</code>快速确定出主键值为<code>20</code>的记录在<code>目录项3</code>中（因为 12 &lt; 20 &lt; 209 ），它对应的页是<code>页9</code>。</p></li><li><p>再根据前边说的在页中查找记录的方式去<code>页9</code>中定位具体的记录。</p></li></ol><p>至此，针对数据页做的简易目录就搞定了。这个目录有一个别名，称为<code>索引</code>。</p><p><strong>2. InnoDB中的索引方案</strong></p><p><strong>① 迭代1次：目录项纪录的页</strong></p><p>我们把前边使用到的目录项放到数据页中的样子就是这样：</p><p><img src="'+t+'" alt="indexes5.png" loading="lazy"></p><p>从图中可以看出来，我们新分配了一个编号为30的页来专门存储目录项记录。这里再次强调<code>目录项记录</code>和普通的<code>用户记录</code>的**不同点 **：</p><ul><li><code>目录项记录</code>的<code>record_type</code>值是1，而<code>普通用户记录</code>的<code>record_type</code>值是0。</li><li>目录项记录只有<code>主键值和页的编号</code>两个列，而普通的用户记录的列是用户自己定义的，可能包含<code>很多列</code>，另外还有InnoDB自己添加的隐藏列。</li><li>了解：记录头信息里还有一个叫<code>min_rec_mask</code>的属性，只有在存储<code>目录项记录</code>的页中的主键值最小的<code>目录项记录</code>的<code>min_rec_mask</code> 值为<code>1</code>，其他别的记录的<code>min_rec_mask</code>值都是<code>0</code>。</li></ul><p>**相同点：**两者用的是一样的数据页，都会为主键值生成<code>Page Directory</code>（页目录），从而在按照主键值进行查找时可以使用<code>二分法</code> 来加快查询速度。</p><p>现在以查找主键为<code>20</code>的记录为例，根据某个主键值去查找记录的步骤就可以大致拆分成下边两步：</p><ol><li><p>先到存储<code>目录项记录</code>的页，也就是页30中通过<code>二分法</code>快速定位到对应目录项，因为 12 &lt; 20 &lt; 209 ，所以定位到对应的记录所在的页就是页9。</p></li><li><p>再到存储用户记录的页9中根据<code>二分法</code>快速定位到主键值为<code>20</code>的用户记录。</p></li></ol><p><strong>② 迭代2次：多个目录项纪录的页</strong></p><p><img src="'+r+'" alt="indexes6.png" loading="lazy"></p><p>从图中可以看出，我们插入了一条主键值为320的用户记录之后需要两个新的数据页：</p><ul><li>为存储该用户记录而新生成了<code>页31</code>。</li><li>因为原先存储目录项记录的<code>页30的容量已满</code>（我们前边假设只能存储4条目录项记录），所以不得不需要一个新的<code>页32</code>来存放<code>页31</code> 对应的目录项。</li></ul><p>现在因为存储目录项记录的页不止一个，所以如果我们想根据主键值查找一条用户记录大致需要3个步骤，以查找主键值为<code>20</code>的记录为例：</p><ol><li><p>确定<code>目录项记录页</code>我们现在的存储目录项记录的页有两个，即<code>页30</code>和<code>页32</code>，又因为页30表示的目录项的主键值的范围是 [1, 320) ，页32表示的目录项的主键值不小于 320 ，所以主键值为<code>20</code>的记录对应的目录项记录在<code>页30</code>中。</p></li><li><p>通过目录项记录页<code>确定用户记录真实所在的页</code>。在一个存储<code>目录项记录</code>的页中通过主键值定位一条目录项记录的方式说过了。</p></li><li><p>在真实存储用户记录的页中定位到具体的记录。</p></li></ol><p><strong>③ 迭代3次：目录项记录页的目录页</strong></p><p><img src="'+i+'" alt="indexes7.png" loading="lazy"></p><p>如图，我们生成了一个存储更高级目录项的<code>页33</code>，这个页中的两条记录分别代表页30和页32，如果用户记录的主键值在<code>[1, 320)</code> 之间，则到页30中查找更详细的目录项记录，如果主键值<code>不小于320</code>的话，就到页32中查找更详细的目录项记录。</p><p>我们可以用下边这个图来描述它：</p><p><img src="'+l+'" alt="indexes8.png" loading="lazy"></p><p>这个数据结构，它的名称是<code>B+树</code>。</p><p><strong>④</strong> <strong>B+Tree</strong></p><p>一个B+树的节点其实可以分成好多层，规定最下边的那层，也就是存放我们用户记录的那层为第<code>0</code> 层，之后依次往上加。之前我们做了一个非常极端的假设：存放用户记录的页<code>最多存放3条记录</code>，存放目录项记录的页<code>最多存放4条记录</code> 。其实真实环境中一个页存放的记录数量是非常大的，假设所有存放用户记录的叶子节点代表的数据页可以存放<code>100条用户记录</code> ，所有存放目录项记录的内节点代表的数据页可以存放<code>1000条目录项记录</code>，那么：</p><ul><li>如果B+树只有1层，也就是只有1个用于存放用户记录的节点，最多能存放<code>100</code>条记录。</li><li>如果B+树有2层，最多能存放<code>1000×100=10,0000</code>条记录。</li><li>如果B+树有3层，最多能存放<code>1000×1000×100=1,0000,0000</code>条记录。</li><li>如果B+树有4层，最多能存放<code>1000×1000×1000×100=1000,0000,0000</code>条记录。相当多的记录！！！</li></ul><p>你的表里能存放<code>100000000000</code>条记录吗？所以一般情况下，我们<code>用到的B+树都不会超过4层</code> ，那我们通过主键值去查找某条记录最多只需要做4个页面内的查找（查找3个目录项页和一个用户记录页），又因为在每个页面内有所谓的<code>Page Directory</code> （页目录），所以在页面内也可以通过<code>二分法</code>实现快速定位记录。</p><h3 id="_2-3-常见索引概念" tabindex="-1"><a class="header-anchor" href="#_2-3-常见索引概念" aria-hidden="true">#</a> <strong>2.3</strong> <strong>常见索引概念</strong></h3><p><strong>1.</strong> <strong>聚簇索引</strong></p><p><strong>特点：</strong></p><ol><li><p>使用记录主键值的大小进行记录和页的排序，这包括三个方面的含义：</p><ul><li><p><code>页内</code>的记录是按照主键的大小顺序排成一个<code>单向链表</code>。</p></li><li><p>各个存放<code>用户记录的页</code>也是根据页中用户记录的主键大小顺序排成一个<code>双向链表</code>。</p></li><li><p>存放<code>目录项记录的页</code>分为不同的层次，在同一层次中的页也是根据页中目录项记录的主键大小顺序排成一个<code>双向链表</code>。</p></li></ul></li><li><p>B+树的<code>叶子节点</code>存储的是完整的用户记录。</p><p>所谓完整的用户记录，就是指这个记录中存储了所有列的值（包括隐藏列）。</p></li></ol><p><strong>优点：</strong></p><ul><li><code>数据访问更快</code>，因为聚簇索引将索引和数据保存在同一个B+树中，因此从聚簇索引中获取数据比非聚簇索引更快</li><li>聚簇索引对于主键的<code>排序查找</code>和<code>范围查找</code>速度非常快</li><li></li></ul><p>按照聚簇索引排列顺序，查询显示一定范围数据的时候，由于数据都是紧密相连，数据库不用从多个数据块中提取数据，所以<code>节省了大量的io操作</code>。</p><p><strong>缺点：</strong></p><ul><li><code>插入速度严重依赖于插入顺序</code>，按照主键的顺序插入是最快的方式，否则将会出现页分裂，严重影响性能。因此，对于InnoDB表，我们一般都会定义一个 <strong>自增ID列为主键</strong></li><li><code>更新主键的代价很高</code>，因为将会导致被更新的行移动。因此，对于InnoDB表，我们一般定义<strong>主键为不可更新</strong></li><li><code>二级索引访问需要两次索引查找</code>，第一次找到主键值，第二次根据主键值找到行数据</li></ul><p><strong>2.</strong> <strong>二级索引（辅助索引、非聚簇索引）</strong></p><p><img src="'+g+'" alt="indexes9.png" loading="lazy"></p><p><strong>概念：回表</strong> 我们根据这个以c2列大小排序的B+树只能确定我们要查找记录的主键值，所以如果我们想根据c2列的值查找到完整的用户记录的话，仍然需要到<code>聚簇索引</code> 中再查一遍，这个过程称为<code>回表</code>。也就是根据c2列的值查询一条完整的用户记录需要使用到<code>2</code>棵B+树！</p><p><strong>3.</strong> <strong>联合索引</strong></p><p>我们也可以同时以多个列的大小作为排序规则，也就是同时为多个列建立索引，比方说我们想让B+树按照<code>c2和c3列</code>的大小进行排序，这个包含两层含义：</p><ul><li><p>先把各个记录和页按照c2列进行排序。</p></li><li><p>在记录的c2列相同的情况下，采用c3列进行排序</p></li></ul><p>注意一点，以c2和c3列的大小为排序规则建立的B+树称为<code>联合索引</code>，本质上也是一个二级索引。它的意思与分别为c2和c3列分别建立索引的表述是不同的，不同点如下：</p><ul><li><p>建立<code>联合索引</code>只会建立如上图一样的1棵B+树。</p></li><li><p>为c2和c3列分别建立索引会分别以c2和c3列的大小为排序规则建立2棵B+树。</p></li></ul><h3 id="_2-4-innodb的b-树索引的注意事项" tabindex="-1"><a class="header-anchor" href="#_2-4-innodb的b-树索引的注意事项" aria-hidden="true">#</a> <strong>2.4 InnoDB的B+树索引的注意事项</strong></h3><p><strong>1.</strong> <strong>根页面位置万年不动</strong></p><p>我们前边介绍B+索引的时候，为了大家理解上的方便，先把存储用户记录的叶子节点都画出来，然后接着画存储目录项记录的内节点，实际上B+树的形成过程是这样的：</p><ul><li>每当为某个表创建一个B+树索引（聚簇索引不是人为创建的，默认就有）的时候，都会为这个索引创建一个<code>根节点</code> 页面。最开始表中没有数据的时候，每个B+树索引对应的<code>根节点</code>中既没有用户记录，也没有目录项记录。</li><li>随后向表中插入用户记录时，先把用户记录存储到这个<code>根节点</code>中。</li><li>当根节点中的可用<code>空间用完时</code>继续插入记录，此时会将根节点中的所有记录复制到一个新分配的页，比如<code>页a</code> 中，然后对这个新页进行<code>页分裂</code>的操作，得到另一个新页，比如<code>页b</code> 。这时新插入的记录根据键值（也就是聚簇索引中的主键值，二级索引中对应的索引列的值）的大小就会被分配到<code>页a</code>或者<code>页b</code> 中，而<code>根节点</code>便升级为存储目录项记录的页。</li></ul><p>这个过程特别注意的是：一个B+树索引的根节点自诞生之日起，便不会再移动。这样只要我们对某个表建立一个索引，那么它的根节点的页号便会被记录到某个地方，然后凡是<code>InnoDB</code> 存储引擎需要用到这个索引的时候，都会从那个固定的地方取出根节点的页号，从而来访问这个索引。</p><p><strong>2.</strong> <strong>内节点中目录项记录的唯一性</strong></p><p><strong>3.</strong> <strong>一个页面最少可以存储2条记录</strong></p><p>一个B+树只需要很少的层级就可以轻松存储数亿条记录，查询速度相当不错！这是因为B+树本质上就是一个大的多层级目录，每经过一个目录时都会过滤掉许多无效的子目录，直到最后访问的存储真实数据的目录。那如果一个大的目录中只存放一个子目录是个啥效果呢？那就是目录层级非常非常非常多，而且最后的那个存放真实数据的目录中存放一条记录。费了半天劲只能存放一条真实的用户记录？所以<code>InnoDB的一个数据页至少可以存放两条记录</code></p><h2 id="_3-myisam中的索引方案" tabindex="-1"><a class="header-anchor" href="#_3-myisam中的索引方案" aria-hidden="true">#</a> <strong>3. MyISAM中的索引方案</strong></h2><p><strong>B树索引适用存储引擎如表所示：</strong></p><table><thead><tr><th>索引/存储引擎</th><th>MyISAM</th><th>InnoDB</th><th>Memory</th></tr></thead><tbody><tr><td>B-Tree索引</td><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table><p>即使多个存储引擎支持同一种类型的索引，但是他们的实现原理也是不同的。Innodb和MyISAM默认的索引是Btree索引；而Memory默认的索引是Hash索引。</p><p>MyISAM引擎使用<code>B+Tree</code>作为索引结构，叶子节点的data域存放的是<code>数据记录的地址</code>。</p><h3 id="_3-1-myisam索引的原理" tabindex="-1"><a class="header-anchor" href="#_3-1-myisam索引的原理" aria-hidden="true">#</a> <strong>3.1 MyISAM索引的原理</strong></h3><p><img src="'+h+'" alt="indexes10.png" loading="lazy"></p><h3 id="_3-2-myisam-与-innodb对比" tabindex="-1"><a class="header-anchor" href="#_3-2-myisam-与-innodb对比" aria-hidden="true">#</a> <strong>3.2 MyISAM</strong> <strong>与</strong> <strong>InnoDB对比</strong></h3><p><strong>MyISAM的索引方式都是&quot;非聚簇&quot;的，与InnoDB包含1个聚簇索引是不同的。</strong></p><p><strong>小结两种引擎中索引的区别：</strong></p><p>① 在InnoDB存储引擎中，我们只需要根据主键值对<code>聚簇索引</code>进行一次查找就能找到对应的记录，而在<code>MyISAM</code>中却需要进行一次<code>回表</code> 操作，意味着MyISAM中建立的索引相当于全部都是<code>二级索引</code>。</p><p>② InnoDB的数据文件本身就是索引文件，而MyISAM索引文件和数据文件是<code>分离的</code>，索引文件仅保存数据记录的地址。</p><p>③ InnoDB的非聚簇索引data域存储相应记录<code>主键的值</code>，而MyISAM索引记录的是<code>地址</code>。换句话说，InnoDB的所有非聚簇索引都引用主键作为data域。</p><p>④ MyISAM的回表操作是十分<code>快速</code>的，因为是拿着地址偏移量直接到文件中取数据的，反观InnoDB是通过获取主键之后再去聚簇索引里找记录，虽然说也不慢，但还是比不上直接用地址去访问。</p><p>⑤ InnoDB要求表<code>必须有主键</code>（<code>MyISAM可以没有</code> ）。如果没有显式指定，则MySQL系统会自动选择一个可以非空且唯一标识数据记录的列作为主键。如果不存在这种列，则MySQL自动为InnoDB表生成一个隐含字段作为主键，这个字段长度为6个字节，类型为长整型。</p><h2 id="_4-索引的代价" tabindex="-1"><a class="header-anchor" href="#_4-索引的代价" aria-hidden="true">#</a> <strong>4.</strong> <strong>索引的代价</strong></h2><p>索引是个好东西，可不能乱建，它在空间和时间上都会有消耗：</p><ul><li><strong>空间上的代价</strong></li></ul><p>每建立一个索引都要为它建立一棵B+树，每一棵B+树的每一个节点都是一个数据页，一个页默认会占用<code>16KB</code> 的存储空间，一棵很大的B+树由许多数据页组成，那就是很大的一片存储空间。</p><ul><li><strong>时间上的代价</strong></li></ul><p>每次对表中的数据进行<code>增、删、改</code> 操作时，都需要去修改各个B+树索引。而且我们讲过，B+树每层节点都是按照索引列的值<code>从小到大的顺序排序</code>而组成了<code>双向链表</code> 。不论是叶子节点中的记录，还是内节点中的记录（也就是不论是用户记录还是目录项记录）都是按照索引列的值从小到大的顺序而形成了一个单向链表。而增、删、改操作可能会对节点和记录的排序造成破坏，所以存储引擎需要额外的时间进行一些<code>记录移位</code>，<code>页面分裂</code>、<code>页面回收</code> 等操作来维护好节点和记录的排序。如果我们建了许多索引，每个索引对应的B+树都要进行相关的维护操作，会给性能拖后腿。</p><h2 id="_5-mysql数据结构选择的合理性" tabindex="-1"><a class="header-anchor" href="#_5-mysql数据结构选择的合理性" aria-hidden="true">#</a> <strong>5. MySQL数据结构选择的合理性</strong></h2><h3 id="_5-1-二叉搜索树" tabindex="-1"><a class="header-anchor" href="#_5-1-二叉搜索树" aria-hidden="true">#</a> <strong>5.1</strong> <strong>二叉搜索树</strong></h3><p>如果我们利用二叉树作为索引结构，那么磁盘的IO次数和索引树的高度是相关的。</p><p><img src="'+u+'" alt="indexes11.png" loading="lazy"></p><p>为了提高查询效率，就需要<code>减少磁盘IO数</code>。为了减少磁盘IO的次数，就需要尽量<code>降低树的高度</code>，需要把原来&quot;瘦高&quot;的树结构变的&quot;矮胖&quot; ，树的每层的分叉越多越好。</p><h3 id="_5-2-avl树" tabindex="-1"><a class="header-anchor" href="#_5-2-avl树" aria-hidden="true">#</a> <strong>5.2 AVL树</strong></h3><p><img src="'+B+'" alt="indexes12.png" loading="lazy"></p><p>针对同样的数据，如果我们把二叉树改成<code>M 叉树</code>（M&gt;2）呢？当 M=3 时，同样的 31 个节点可以由下面的三叉树来进行存储：</p><p><img src="'+_+'" alt="indexes13.png" loading="lazy"></p><h3 id="_5-3-b-tree" tabindex="-1"><a class="header-anchor" href="#_5-3-b-tree" aria-hidden="true">#</a> <strong>5.3 B-Tree</strong></h3><p>B 树的结构如下图所示：</p><p><img src="'+m+'" alt="indexes14.png" loading="lazy"></p><p>一个 M 阶的 B 树（M&gt;2）有以下的特性：</p><ol><li><p>根节点的儿子数的范围是 [2,M]。</p></li><li><p>每个中间节点包含 k-1 个关键字和 k 个孩子，孩子的数量 = 关键字的数量 +1，k 的取值范围为[ceil(M/2), M]。</p></li><li><p>叶子节点包括 k-1 个关键字（叶子节点没有孩子），k 的取值范围为 [ceil(M/2), M]。</p></li><li><p>假设中间节点节点的关键字为：Key[1], Key[2], …, Key[k-1]，且关键字按照升序排序，即 Key[i] &lt;Key[i+1]。此时 k-1 个关键字相当于划分了 k 个范围，也就是对应着 k 个指针，即为：P[1], P[2], …,P[k]，其中 P[1] 指向关键字小于 Key[1] 的子树，P[i] 指向关键字属于 ( Key[i-1], Key[i]) 的子树，P[k]指向关键字大于 Key[k-1] 的子树。</p></li><li><p>所有叶子节点位于同一层。</p></li></ol><p>上面那张图所表示的 B 树就是一棵 3 阶的 B 树。我们可以看下磁盘块 2，里面的关键字为（8，12），它有 3 个孩子 (3，5)，(9，10) 和 ( 13，15)，你能看到 (3，5) 小于 8，(9，10) 在 8 和 12 之间，而 (13，15)大于 12，刚好符合刚才我们给出的特征。</p><p>然后我们来看下如何用 B 树进行查找。假设我们想要<code>查找的关键字是 9</code>，那么步骤可以分为以下几步：</p><ol><li><p>我们与根节点的关键字 (17，35）进行比较，9 小于 17 那么得到指针 P1；</p></li><li><p>按照指针 P1 找到磁盘块 2，关键字为（8，12），因为 9 在 8 和 12 之间，所以我们得到指针 P2；</p></li><li><p>按照指针 P2 找到磁盘块 6，关键字为（9，10），然后我们找到了关键字 9。</p></li></ol><p>你能看出来在 B 树的搜索过程中，我们比较的次数并不少，但如果把数据读取出来然后在内存中进行比较，这个时间就是可以忽略不计的。而读取磁盘块本身需要进行 I/O 操作，消耗的时间比在内存中进行比较所需要的时间要多，是数据查找用时的重要因素。<code>B 树相比于平衡二叉树来说磁盘 I/O 操作要少</code> ，在数据查询中比平衡二叉树效率要高。所以<code>只要树的高度足够低，IO次数足够少，就可以提高查询性能</code>。</p><p><strong>再举例1：</strong></p><p><img src="'+k+'" alt="indexes15.png" loading="lazy"></p><h3 id="_5-4-b-tree" tabindex="-1"><a class="header-anchor" href="#_5-4-b-tree" aria-hidden="true">#</a> <strong>5.4 B+Tree</strong></h3><p><strong>B+</strong> <strong>树和</strong> <strong>B</strong> <strong>树的差异：</strong></p><ol><li><p>有 k 个孩子的节点就有 k 个关键字。也就是孩子数量 = 关键字数，而 B 树中，孩子数量 = 关键字数+1。</p></li><li><p>非叶子节点的关键字也会同时存在在子节点中，并且是在子节点中所有关键字的最大（或最小）。</p></li><li><p>非叶子节点仅用于索引，不保存数据记录，跟记录有关的信息都放在叶子节点中。而 B 树中， <code>非叶子节点既保存索引，也保存数据记录</code>。</p></li><li><p>所有关键字都在叶子节点出现，叶子节点构成一个有序链表，而且叶子节点本身按照关键字的大小从小到大顺序链接。</p></li></ol><blockquote><p>B 树和 B+ 树都可以作为索引的数据结构，在 MySQL 中采用的是 B+ 树。</p><p>但B树和B+树各有自己的应用场景，不能说B+树完全比B树好，反之亦然。</p></blockquote><p><strong>思考题：为了减少IO，索引树会一次性加载吗？</strong></p><blockquote><p>1、数据库索引是存储在磁盘上的，如果数据量很大，必然导致索引的大小也会很大，超过几个G。</p><p>2、当我们利用索引查询时候，是不可能将全部几个G的索引都加载进内存的，我们能做的只能是：逐一加载每一个磁盘页，因为磁盘页对应着索引树的节点。</p></blockquote><p><strong>思考题：B+树的存储能力如何？为何说一般查找行记录，最多只需1~3次磁盘IO</strong></p><blockquote><p>InnoDB存储引擎中页的大小为16KB，一般表的主键类型为INT(占用4个字节)或BIGINT(占用8个字节) ，指针类型也一般为4或8个字节，也就是说一个页（B+Tree中的一个节点）中大概存储16KB/(8B+8B) =1K个键值，因为是估算，为了方便计算，这里的K取值为10<sup>3。也就是说一个深度为3的B+Tree索引可以维护10</sup>3 * 10^3 * 10^3 = 10亿条记录。（这里假定一个数据页也存储10^3条行记录数据了）</p><p>实际情况中每个节点可能不能填充满，因此在数据库中，<code>B+Tree的高度一般都在2~4层</code> 。MySQL的InnoDB存储引擎在设计时是将根节点常驻内存的，也就是说查找某一键值的行记录时最多只需要1~3次磁盘I/O操作</p></blockquote><p><strong>思考题：为什么说B+树比B-树更适合实际应用中操作系统的文件索引和数据库索引？</strong></p><blockquote><p>1.B+树的磁盘读写代价更低</p></blockquote><p>B+树的内部结点并没有指向关键字具体信息的指针。因此其内部结点相对于B树更小。如果把所有同一内部结点的关键字存放在同一盘块中，那么盘块所能容纳的关键字数量也越多。一次性读入内存中的需要查找的关键字也就越多。相对来说IO读写次数也就降低了。</p><blockquote><p>2、B+树的查询效率更加稳定</p><p>由于非终结点并不是最终指向文件内容的节点，而只是叶子结点中关键字的索引。所有任何关键字的查找必须走一条从根结点到叶子结点的路。所有关键字查询的路径长度相同，导致每一个数据的查询效率相当。</p></blockquote><p><strong>思考题：Hash索引与B+树索引的区别</strong></p><blockquote><p>1、Hash索引<code>不能进行范围查询</code>，而B+树可以。这是因为Hash索引指向的数据是无序的，而B+树的叶子节点是个有序的链表。</p><p>2、Hash索引<code>不支持联合索引的最左侧原则</code></p></blockquote><p>（即联合索引的部分索引无法使用），而B+树可以。对于联合索引来说，Hash索引在计算Hash值的时候是将索引键合并后再一起计算Hash值，所以不会针对每个索引单独计算Hash值。因此如果用到联合索引的一个或者几个索引时，联合索引无法被利用。</p><blockquote><p>3、Hash索引<code>不支持 ORDER BY 排序</code>，因为Hash索引指向的数据是无序的，因此无法起到排序优化的作用，而B+树索引数据是有序的，可以起到对该字段ORDER BY 排序优化的作用。同理，我们也无法用Hash索引进行<code>模糊查询</code>，而B+树使用LIKE进行模糊查询的时候，LIKE后面后模糊查询（比如%结尾）的话就可以起到优化作用。</p><p>4、<code>InnoDB不支持哈希索引</code></p></blockquote>',147),x=[b];function I(M,f){return e(),n("div",null,x)}const D=o(y,[["render",I],["__file","indexes.html.vue"]]);export{D as default};
