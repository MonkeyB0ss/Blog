import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as n,e as s}from"./app.912b6410.js";const t={},r=s(`<h1 id="第02章-mysql的数据目录" tabindex="-1"><a class="header-anchor" href="#第02章-mysql的数据目录" aria-hidden="true">#</a> 第02章_MySQL的数据目录</h1><h2 id="_1-mysql8的主要目录结构" tabindex="-1"><a class="header-anchor" href="#_1-mysql8的主要目录结构" aria-hidden="true">#</a> <strong>1. MySQL8的主要目录结构</strong></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-1-数据库文件的存放路径" tabindex="-1"><a class="header-anchor" href="#_1-1-数据库文件的存放路径" aria-hidden="true">#</a> <strong>1.1</strong> <strong>数据库文件的存放路径</strong></h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;datadir&#39;</span><span class="token punctuation">;</span> <span class="token comment"># /var/lib/mysql/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-相关命令目录" tabindex="-1"><a class="header-anchor" href="#_1-2-相关命令目录" aria-hidden="true">#</a> <strong>1.2</strong> <strong>相关命令目录</strong></h3><p><strong>相关命令目录：/usr/bin 和/usr/sbin。</strong></p><h3 id="_1-3-配置文件目录" tabindex="-1"><a class="header-anchor" href="#_1-3-配置文件目录" aria-hidden="true">#</a> <strong>1.3</strong> <strong>配置文件目录</strong></h3><p><strong>配置文件目录：/usr/share/mysql-8.0（命令及配置文件），/etc/mysql（如my.cnf）</strong></p><h2 id="_2-数据库和文件系统的关系" tabindex="-1"><a class="header-anchor" href="#_2-数据库和文件系统的关系" aria-hidden="true">#</a> <strong>2.</strong> <strong>数据库和文件系统的关系</strong></h2><h3 id="_2-1-表在文件系统中的表示" tabindex="-1"><a class="header-anchor" href="#_2-1-表在文件系统中的表示" aria-hidden="true">#</a> <strong>2.1</strong> <strong>表在文件系统中的表示</strong></h3><h2 id="_2-3-1-innodb存储引擎模式" tabindex="-1"><a class="header-anchor" href="#_2-3-1-innodb存储引擎模式" aria-hidden="true">#</a> <strong>2.3.1 InnoDB存储引擎模式</strong></h2><p><strong>1.</strong> <strong>表结构</strong></p><p>为了保存表结构，<code>InnoDB</code>在<code>数据目录</code>下对应的数据库子目录下创建了一个专门用于<code>描述表结构的文件</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>表名.frm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>表中数据和索引</strong></p><p><strong>① 系统表空间（system tablespace）</strong></p><p>默认情况下，InnoDB会在数据目录下创建一个名为<code>ibdata1</code>、大小为<code>12M</code>的<code>自拓展</code>文件，这个文件就是对应的<code>系统表空间</code>在文件系统上的表示。</p><p><strong>② 独立表空间(file-per-table tablespace)</strong></p><p>在MySQL5.6.6以及之后的版本中，InnoDB并不会默认的把各个表的数据存储到系统表空间中，而是为<code>每一个表建立一个独立表空间</code> ，也就是说我们创建了多少个表，就有多少个独立表空间。使用<code>独立表空间</code>来存储表数据的话，会在该表所属数据库对应的子目录下创建一个表示该独立表空间的文件，文件名和表名相同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>表名.ibd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>MySQL8.0中不再单独提供<code>表名.frm</code>，而是合并在<code>表名.ibd</code>文件中。</p></div><p><strong>③ 系统表空间与独立表空间的设置</strong></p><p>我们可以自己指定使用<code>系统表空间</code>还是<code>独立表空间</code>来存储数据，这个功能由启动参数<code>innodb_file_per_table</code>控制</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">server</span><span class="token punctuation">]</span></span> 
<span class="token key attr-name">innodb_file_per_table</span><span class="token punctuation">=</span><span class="token value attr-value">0 # 0：代表使用系统表空间； 1：代表使用独立表空间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>④ 其他类型的表空间</strong></p><p>随着MySQL的发展，除了上述两种老牌表空间之外，现在还新提出了一些不同类型的表空间，比如通用表空间（general tablespace）、临时表空间（temporary tablespace）等。</p><h2 id="_2-3-2-myisam存储引擎模式" tabindex="-1"><a class="header-anchor" href="#_2-3-2-myisam存储引擎模式" aria-hidden="true">#</a> <strong>2.3.2 MyISAM存储引擎模式</strong></h2><p><strong>1.</strong> <strong>表结构</strong></p><p>在存储表结构方面， MyISAM 和 InnoDB 一样，也是在<code>数据目录</code>下对应的数据库子目录下创建了一个专门用于描述表结构的文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>表名.frm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.</strong> <strong>表中数据和索引</strong></p><p>在MyISAM中的索引全部都是<code>二级索引</code>，该存储引擎的<code>数据和索引是分开存放</code> 的。所以在文件系统中也是使用不同的文件来存储数据文件和索引文件，同时表数据都存放在对应的数据库子目录下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test.frm 存储表结构 #MySQL8.0 改为了 b.xxx.sdi
test.MYD 存储数据 (MYData) 
test.MYI 存储索引 (MYIndex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),d=[r];function o(i,c){return a(),n("div",null,d)}const g=e(t,[["render",o],["__file","data-dir.html.vue"]]);export{g as default};
