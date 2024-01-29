const n=JSON.parse('{"key":"v-ea99be22","path":"/note/schema/nacos.html","title":"docker下nacos的配置","lang":"zh-CN","frontmatter":{"date":"2024-01-14T00:00:00.000Z","category":"笔记","tag":["架构相关","Nacos","Docker"]},"headers":[],"git":{"createdTime":1705227945000,"updatedTime":1705733192000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":2}]},"readingTime":{"minutes":0.55,"words":165},"filePathRelative":"note/schema/nacos.md","localizedDate":"2024年1月14日","excerpt":"<h1> docker下nacos的配置</h1>\\n<p><a href=\\"https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></p>\\n<p>自定义compose</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"3.8\\"</span>\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">nacos</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> nacos/nacos<span class=\\"token punctuation\\">-</span>server<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> nacos\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> MODE=standalone\\n      <span class=\\"token punctuation\\">-</span> SPRING_DATASOURCE_PLATFORM=mysql\\n      <span class=\\"token punctuation\\">-</span> MYSQL_SERVICE_HOST=mysql<span class=\\"token punctuation\\">-</span>master\\n      <span class=\\"token punctuation\\">-</span> MYSQL_SERVICE_DB_NAME=nacos\\n      <span class=\\"token punctuation\\">-</span> MYSQL_SERVICE_PORT=3306\\n      <span class=\\"token punctuation\\">-</span> MYSQL_SERVICE_USER=nacos\\n      <span class=\\"token punctuation\\">-</span> MYSQL_SERVICE_PASSWORD=nacos\\n      <span class=\\"token comment\\"># MySQL8下需要此参数</span>\\n      <span class=\\"token punctuation\\">-</span> MYSQL_SERVICE_DB_PARAM=characterEncoding=utf8<span class=\\"token important\\">&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true</span>\\n      <span class=\\"token comment\\"># 开启nacos鉴权 官方说明：https://nacos.io/zh-cn/docs/v2/guide/user/auth.html</span>\\n      <span class=\\"token punctuation\\">-</span> NACOS_AUTH_ENABLE=true\\n      <span class=\\"token comment\\"># 2.2.1版本后无下列参数默认值，需手动配置</span>\\n      <span class=\\"token punctuation\\">-</span> NACOS_AUTH_TOKEN=<span class=\\"token comment\\">######</span>\\n      <span class=\\"token punctuation\\">-</span> NACOS_AUTH_IDENTITY_KEY=<span class=\\"token comment\\">######</span>\\n      <span class=\\"token punctuation\\">-</span> NACOS_AUTH_IDENTITY_VALUE=<span class=\\"token comment\\">######</span>\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /mnt/monkeyboss/MyCluster/Nacos/logs<span class=\\"token punctuation\\">:</span>/home/nacos/logs\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">\\"8848:8848\\"</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">\\"9848:9848\\"</span>\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> always\\n    <span class=\\"token key atrule\\">networks</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> monkeyboss<span class=\\"token punctuation\\">-</span>network\\n\\n<span class=\\"token comment\\"># 保持和MySQL同一个network否则连接不上数据库</span>\\n<span class=\\"token key atrule\\">networks</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">monkeyboss-network</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">external</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};