import{_ as e,X as t,Y as c,$ as n,a0 as s,Z as o,a2 as l,C as i}from"./framework-a20dc394.js";const p={},u=n("h1",{id:"docker下nacos的配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker下nacos的配置","aria-hidden":"true"},"#"),s(" docker下nacos的配置")],-1),r={href:"https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html",target:"_blank",rel:"noopener noreferrer"},d=l(`<p>自定义compose</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nacos/nacos<span class="token punctuation">-</span>server<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nacos
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MODE=standalone
      <span class="token punctuation">-</span> SPRING_DATASOURCE_PLATFORM=mysql
      <span class="token punctuation">-</span> MYSQL_SERVICE_HOST=mysql<span class="token punctuation">-</span>master
      <span class="token punctuation">-</span> MYSQL_SERVICE_DB_NAME=nacos
      <span class="token punctuation">-</span> MYSQL_SERVICE_PORT=3306
      <span class="token punctuation">-</span> MYSQL_SERVICE_USER=nacos
      <span class="token punctuation">-</span> MYSQL_SERVICE_PASSWORD=nacos
      <span class="token comment"># MySQL8下需要此参数</span>
      <span class="token punctuation">-</span> MYSQL_SERVICE_DB_PARAM=characterEncoding=utf8<span class="token important">&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;allowPublicKeyRetrieval=true</span>
      <span class="token comment"># 开启nacos鉴权 官方说明：https://nacos.io/zh-cn/docs/v2/guide/user/auth.html</span>
      <span class="token punctuation">-</span> NACOS_AUTH_ENABLE=true
      <span class="token comment"># 2.2.1版本后无下列参数默认值，需手动配置</span>
      <span class="token punctuation">-</span> NACOS_AUTH_TOKEN=<span class="token comment">######</span>
      <span class="token punctuation">-</span> NACOS_AUTH_IDENTITY_KEY=<span class="token comment">######</span>
      <span class="token punctuation">-</span> NACOS_AUTH_IDENTITY_VALUE=<span class="token comment">######</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /mnt/monkeyboss/MyCluster/Nacos/logs<span class="token punctuation">:</span>/home/nacos/logs
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8848:8848&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9848:9848&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> monkeyboss<span class="token punctuation">-</span>network

<span class="token comment"># 保持和MySQL同一个network否则连接不上数据库</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">monkeyboss-network</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拉起镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-nacos.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function k(m,v){const a=i("ExternalLinkIcon");return t(),c("div",null,[u,n("p",null,[n("a",r,[s("官方文档"),o(a)])]),d])}const _=e(p,[["render",k],["__file","nacos.html.vue"]]);export{_ as default};
