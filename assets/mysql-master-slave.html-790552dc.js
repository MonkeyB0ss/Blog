const n=JSON.parse(`{"key":"v-38526ef8","path":"/note/schema/mysql-master-slave.html","title":"MySQL主从配置","lang":"zh-CN","frontmatter":{"date":"2024-01-13T00:00:00.000Z","category":"笔记","tag":["架构相关"]},"headers":[{"level":2,"title":"创建 Docker Compose 文件","slug":"创建-docker-compose-文件","link":"#创建-docker-compose-文件","children":[]},{"level":2,"title":"启动容器","slug":"启动容器","link":"#启动容器","children":[]},{"level":2,"title":"配置主从关系","slug":"配置主从关系","link":"#配置主从关系","children":[]},{"level":2,"title":"配置从节点","slug":"配置从节点","link":"#配置从节点","children":[]},{"level":2,"title":"启动第二个从节点","slug":"启动第二个从节点","link":"#启动第二个从节点","children":[]}],"git":{"createdTime":1705132891000,"updatedTime":1705132891000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":2.59,"words":778},"filePathRelative":"note/schema/mysql-master-slave.md","localizedDate":"2024年1月13日","excerpt":"<h1> MySQL主从配置</h1>\\n<p>在 Docker 中实现 MySQL 主从（Master-Slave）的设置，可以使用 Docker Compose 来定义和管理多个 MySQL 容器，并配置它们之间的主从关系</p>\\n<h2> 创建 Docker Compose 文件</h2>\\n<p>创建一个名为 docker-compose.yml 的文件，并添加以下内容：</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'3.8'</span>\\n\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">mysql-master</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> mysql<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> mysql<span class=\\"token punctuation\\">-</span>master\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> always\\n    <span class=\\"token key atrule\\">privileged</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/master/log<span class=\\"token punctuation\\">:</span>/var/log/mysql  \\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/master/conf.d<span class=\\"token punctuation\\">:</span>/etc/mysql/conf.d\\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/master/data<span class=\\"token punctuation\\">:</span>/var/lib/mysql\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">MYSQL_ROOT_PASSWORD</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\">######</span>\\n      <span class=\\"token key atrule\\">MYSQL_USER</span><span class=\\"token punctuation\\">:</span> synchronize<span class=\\"token punctuation\\">-</span>user\\n      <span class=\\"token key atrule\\">MYSQL_PASSWORD</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\">######</span>\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">\\"3306:3306\\"</span>\\n    <span class=\\"token key atrule\\">networks</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> mysql<span class=\\"token punctuation\\">-</span>network\\n\\n  <span class=\\"token key atrule\\">mysql-slave1</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> mysql<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> mysql<span class=\\"token punctuation\\">-</span>slave1\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> always\\n    <span class=\\"token key atrule\\">privileged</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/slave1/log<span class=\\"token punctuation\\">:</span>/var/log/mysql  \\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/slave1/conf.d<span class=\\"token punctuation\\">:</span>/etc/mysql/conf.d\\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/slave1/data<span class=\\"token punctuation\\">:</span>/var/lib/mysql\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">MYSQL_ROOT_PASSWORD</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\">######</span>\\n    <span class=\\"token key atrule\\">networks</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> mysql<span class=\\"token punctuation\\">-</span>network\\n\\n  <span class=\\"token key atrule\\">mysql-slave2</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> mysql<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> mysql<span class=\\"token punctuation\\">-</span>slave2\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> always\\n    <span class=\\"token key atrule\\">privileged</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/slave2/log<span class=\\"token punctuation\\">:</span>/var/log/mysql  \\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/slave2/conf.d<span class=\\"token punctuation\\">:</span>/etc/mysql/conf.d\\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/Mysql/slave2/data<span class=\\"token punctuation\\">:</span>/var/lib/mysql\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">MYSQL_ROOT_PASSWORD</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\">######</span>\\n    <span class=\\"token key atrule\\">networks</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> mysql<span class=\\"token punctuation\\">-</span>network\\n\\n<span class=\\"token key atrule\\">networks</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">mysql-network</span><span class=\\"token punctuation\\">:</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
