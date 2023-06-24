import{_ as o,X as l,Y as p,$ as s,a0 as n,Z as t,a2 as a,C as i}from"./framework-a20dc394.js";const c="/Blog/assets/img-aba12956.png",r="/Blog/assets/img_2-909b613f.png",u="/Blog/assets/img_1-cdf125fb.png",d="/Blog/assets/img_4-2b026412.png",k="/Blog/assets/img_5-ec55c2bc.png",v="/Blog/assets/img_6-667daf45.png",m={},b=a('<h1 id="阿里云对象存储oss最佳实践" tabindex="-1"><a class="header-anchor" href="#阿里云对象存储oss最佳实践" aria-hidden="true">#</a> 阿里云对象存储OSS最佳实践</h1><p>本文主要介绍如何基于Post Policy的使用规则在服务端通过各种语言代码完成签名，然后通过表单直传数据到OSS。由于服务端签名直传无需将AccessKey暴露在前端页面，相比JavaScript客户端签名直传具有更高的安全性。</p><h2 id="流程和源码解析" tabindex="-1"><a class="header-anchor" href="#流程和源码解析" aria-hidden="true">#</a> 流程和源码解析</h2><p><img src="'+c+'" alt="img.png"></p>',4),g=a(`<li><p>用户向应用服务器请求上传Policy和回调。 将客户端源码中的upload.js文件的以下代码片段的变量serverUrl的值设置为应用服务器的URL。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// serverUrl是用户获取签名和Policy等信息的应用服务器的URL，请将下面的IP和Port配置为您自己的真实信息。
serverUrl = &#39;http://88.88.XX.XX:8888&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置完成后，客户端会向该serverUrl发送Get请求来获取需要的信息。</p><p>本场景为服务端签名后直传，不涉及上传回调。因此，您需要注释客户端源码中的upload.js文件内的&#39;callback&#39; :!q@# callbackbody字段，以关闭上传回调功能。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> key + <span class="token string">&quot;\${filename}&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> policyBase64<span class="token punctuation">,</span>
  <span class="token property">&quot;OSSAccessKeyId&quot;</span><span class="token operator">:</span> accessid<span class="token punctuation">,</span>
  <span class="token comment">// 设置服务端返回200状态码，默认返回204。</span>
  <span class="token property">&quot;success_action_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;callback&quot;</span><span class="token operator">:</span> callbackbody<span class="token punctuation">,</span>
  <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> signature
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),h=a(`<p>应用服务器返回上传Policy和签名给用户。</p><p>应用服务器侧的签名直传服务会处理客户端发送的Get请求消息，您可以设置对应的代码让应用服务器能够给客户端返回正确的消息。</p><p>以下是签名直传服务返回给客户端消息Body内容的示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token punctuation">{</span>
 <span class="token property">&quot;accessid&quot;</span><span class="token operator">:</span><span class="token string">&quot;LTAI5tBDFVar1hoq****&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;host&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://post-test.oss-cn-hangzhou.aliyuncs.com&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span><span class="token string">&quot;eyJleHBpcmF0aW9uIjoiMjAxNS0xMS0wNVQyMDoyMzoyM1oiLCJjxb25kaXRpb25zIjpbWyJjcb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDQ4NTc2MDAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInVzZXItZGlyXC8i****&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span><span class="token string">&quot;VsxOcOudx******z93CLaXPz+4s=&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;expire&quot;</span><span class="token operator">:</span><span class="token number">1446727949</span><span class="token punctuation">,</span>
 <span class="token property">&quot;dir&quot;</span><span class="token operator">:</span><span class="token string">&quot;user-dirs/&quot;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Body中的各字段说明</strong></p>`,5),y=s("thead",null,[s("tr",null,[s("th",null,"字段"),s("th",null,"描述")])],-1),_=s("tr",null,[s("td",null,"accessid"),s("td",null,"用户请求的AccessKey ID")],-1),x=s("tr",null,[s("td",null,"host"),s("td",null,"用户发送上传请求的域名")],-1),S=s("td",null,"policy",-1),f={href:"https://help.aliyun.com/document_detail/31988.htm?spm=a2c4g.11186623.0.0.160743b0wKePxr#section-d5z-1ww-wdb",target:"_blank",rel:"noopener noreferrer"},q=s("td",null,"signature",-1),j={href:"https://help.aliyun.com/document_detail/31988.htm?spm=a2c4g.11186623.0.0.160743b0wKePxr#section-wny-mww-wdb",target:"_blank",rel:"noopener noreferrer"},I=s("tr",null,[s("td",null,"expire"),s("td",null,"由服务器端指定的Policy过期时间，格式为Unix时间戳（自UTC时间1970年01月01号开始的秒数）")],-1),O=s("tr",null,[s("td",null,"dir"),s("td",null,"限制上传的文件前缀")],-1),w=a(`<li><p>用户使用Post方法向OSS发送文件上传请求</p><div class="hint-container info"><p class="hint-container-title">说明</p><ul><li>除file表单域外，包含key在内的其他所有表单域的大小均不能超过8 KB</li><li></li></ul><p>客户端上传默认同名覆盖，如果您不希望覆盖同名文件，可以在上传请求的header中携带参数x-oss-forbid-overwrite，并指定其值为true。当您上传的文件在OSS中存在同名文件时，该文件会上传失败，并返回FileAlreadyExists错误</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>new_multipart_params <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// key表示上传到Bucket内的Object的完整路径，例如exampledir/exampleobject.txtObject，完整路径中不能包含Bucket名称。</span>
  <span class="token comment">// filename表示待上传的本地文件名称。</span>
  <span class="token string-property property">&#39;key&#39;</span> <span class="token operator">:</span> key <span class="token operator">+</span> <span class="token string">&#39;\${filename}&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;policy&#39;</span><span class="token operator">:</span> policyBase64<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;OSSAccessKeyId&#39;</span><span class="token operator">:</span> accessid<span class="token punctuation">,</span>
  <span class="token comment">// 设置服务端返回状态码为200，不设置则默认返回状态码204。</span>
  <span class="token string-property property">&#39;success_action_status&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span>    
  <span class="token string-property property">&#39;signature&#39;</span><span class="token operator">:</span> signature<span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),B=s("h2",{id:"java代码示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#java代码示例","aria-hidden":"true"},"#"),n(" Java代码示例")],-1),K={href:"https://help.aliyun.com/document_detail/91868.htm?spm=a2c4g.11186623.0.0.1607bfcbZWAaJf#concept-ahk-rfz-2fb",target:"_blank",rel:"noopener noreferrer"},A=s("h2",{id:"aliyun-spring-boot-oss-示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#aliyun-spring-boot-oss-示例","aria-hidden":"true"},"#"),n(" Aliyun Spring Boot OSS 示例")],-1),C=s("h3",{id:"接入-oss",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#接入-oss","aria-hidden":"true"},"#"),n(" 接入 OSS")],-1),P=s("p",null,"在启动示例进行演示之前，我们先了解一下如何接入 OSS。",-1),R=s("p",null,[s("strong",null,"注意：本节只是为了便于您理解接入方式，本示例代码中已经完成接入工作，您只需修改 accessKey、secretKey、endpoint 即可。")],-1),E=a(`<li><p>修改 pom.xml 文件，引入 aliyun-oss-spring-boot-starter。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>aliyun-oss-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),N=a(`<p>在配置文件中配置 OSS 服务对应的 accessKey、secretKey 和 endpoint。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">//</span> <span class="token value attr-value">application.properties</span>
<span class="token key attr-name">alibaba.cloud.access-key</span><span class="token punctuation">=</span><span class="token value attr-value">your-ak</span>
<span class="token key attr-name">alibaba.cloud.secret-key</span><span class="token punctuation">=</span><span class="token value attr-value">your-sk</span>
<span class="token key attr-name">alibaba.cloud.oss.endpoint</span><span class="token punctuation">=</span><span class="token value attr-value">***</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以阿里云 accessKey、secretKey 为例，获取方式如下。</p>`,3),T={href:"https://usercenter.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},X=s("p",null,[s("img",{src:r,alt:"img.png"})],-1),U=s("p",null,"ii. 获取 accessKey、secretKey：",-1),L=s("p",null,[s("img",{src:u,alt:"img_1.png"})],-1),V=s("strong",null,"注意",-1),z={href:"https://help.aliyun.com/document_detail/28756.html",target:"_blank",rel:"noopener noreferrer"},J=a(`<li><p>注入 OSSClient 并进行文件上传下载等操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token annotation punctuation">@Service</span>
   <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YourService</span> <span class="token punctuation">{</span>
 	  <span class="token annotation punctuation">@Autowired</span>
 	  <span class="token keyword">private</span> <span class="token class-name">OSSClient</span> ossClient<span class="token punctuation">;</span>

 	  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 		  <span class="token comment">// download file to local</span>
 		  ossClient<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GetObjectRequest</span><span class="token punctuation">(</span>bucketName<span class="token punctuation">,</span> objectName<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;pathOfYourLocalFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 	  <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong>：直接注入OSSClient 方式通常用于大量文件对象操作的场景。如果仅仅是需要读取文件对象内容，OSS Starter 也支持以 Resource 方式读取文件，详情请参考<a href="#1">下文</a>。</p></li>`,1),M=a(`<h3 id="启动应用" tabindex="-1"><a class="header-anchor" href="#启动应用" aria-hidden="true">#</a> 启动应用</h3><ol><li><p>在应用的 /src/main/resources/application.properties 中添加基本配置信息和 OSS 配置。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token value attr-value">oss-example</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">18084</span>
<span class="token key attr-name">alibaba.cloud.access-key</span><span class="token punctuation">=</span><span class="token value attr-value">your-ak</span>
<span class="token key attr-name">alibaba.cloud.secret-key</span><span class="token punctuation">=</span><span class="token value attr-value">your-sk</span>
<span class="token key attr-name">alibaba.cloud.oss.endpoint</span><span class="token punctuation">=</span><span class="token value attr-value">***</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过 IDE 直接启动或者编译打包后启动应用。</p><ul><li>IDE直接启动：找到主类 <code>OSSApplication</code>，执行 main 方法启动应用。</li><li>打包编译后启动： <ol><li>执行 <code>mvn clean package</code> 将工程编译打包；</li><li>执行 <code>java -jar oss-example.jar</code>启动应用。</li></ol></li></ul></li></ol><p>应用启动后会自动在 OSS 上创建一个名为 <code>aliyun-spring-boot-test</code> 的 Bucket。</p><h3 id="上传或下载文件" tabindex="-1"><a class="header-anchor" href="#上传或下载文件" aria-hidden="true">#</a> 上传或下载文件</h3><h4 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h4><p>使用 curl 调用上传接口 upload。该接口会上传 classpath 下的的 oss-test.json 文件。文件内容是一段 json:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>curl http<span class="token operator">:</span><span class="token comment">//localhost:18084/upload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 如果配置正确，则输出
upload success
// 如果上传的过程中发生异常，则会输出 upload fail: fail reason。比如accessKeyId配置错误的时候，fail reason内容如下
upload fail: The OSS Access Key Id you provided does not exist in our records. [ErrorCode]: InvalidAccessKeyId [RequestId]: RequestId [HostId]: xxx.oss-cn-beijing.aliyuncs.com [ResponseError]: InvalidAccessKeyId The OSS Access Key Id you provided does not exist in our records. RequestId xxx.oss-cn-beijing.aliyuncs.com xxx-accessKeyId
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h4><p>使用 curl 调用下载接口 download。该接口会下载刚才用 upload 接口上传的 oss-test.json 文件，并打印文件内容到结果中:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>curl http<span class="token operator">:</span><span class="token comment">//localhost:18084/download</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 如果配置正确，则输出
download success, content: { &quot;name&quot;: &quot;oss-test&quot; }
// 下载的过程中如果发生异常，则会输出download fail: fail reason。比如accessKeyId配置错误，则fail reason内容如下
download fail: The OSS Access Key Id you provided does not exist in our records. [ErrorCode]: InvalidAccessKeyId [RequestId]: RequestId [HostId]: xxx.oss-cn-beijing.aliyuncs.com [ResponseError]: InvalidAccessKeyId The OSS Access Key Id you provided does not exist in our records. RequestId sxxx.oss-cn-beijing.aliyuncs.com xxx-accessKeyId
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-oss-上验证结果" tabindex="-1"><a class="header-anchor" href="#在-oss-上验证结果" aria-hidden="true">#</a> 在 OSS 上验证结果</h3><p>完成文件上传或者下载操作后，可以登录 OSS 控制台进行验证。</p>`,16),D={href:"https://oss.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},F=s("code",null,"aliyun-spring-boot-test",-1),W=s("p",null,[s("img",{src:d,alt:"img.png"})],-1),Z=s("li",null,[s("p",null,[n("单击"),s("code",null,"aliyun-spring-boot-test"),n(" Bucket，选择 "),s("code",null,"文件管理"),n(" 页签，发现上传的 oss-test 文件。上传的 objectName 为"),s("code",null,"oss-test.json"),n("。目录和文件以'/'符号分割。")]),s("p",null,[s("img",{src:k,alt:"img_1.png"})])],-1),G=a('<h2 id="查看-endpoint-信息" tabindex="-1"><a class="header-anchor" href="#查看-endpoint-信息" aria-hidden="true">#</a> 查看 Endpoint 信息</h2><p>Spring Boot 应用支持通过 Endpoint 来暴露相关信息，OSS Starter 也支持这一点。</p><p><strong>前提条件</strong>：</p><p>在 maven 中添加 <code>spring-boot-starter-actuator</code>依赖，并在配置中允许 Endpoints 的访问。</p><ul><li>Spring Boot1.x 中添加配置 <code>management.security.enabled=false</code></li><li>Spring Boot2.x 中添加配置 <code>management.endpoints.web.exposure.include=*</code></li></ul>',5),Y={href:"http://127.0.0.1:18084/oss",target:"_blank",rel:"noopener noreferrer"},H={href:"http://127.0.0.1:18084/actuator/oss",target:"_blank",rel:"noopener noreferrer"},$=a('<p>Endpoint 内部会显示所有的 OSSClient 配置信息，以及该 OSSClient 对应的 Bucket 列表。</p><p><img src="'+v+`" alt="img_6.png"></p><h3 id="以-resource-的形式读取文件" tabindex="-1"><a class="header-anchor" href="#以-resource-的形式读取文件" aria-hidden="true">#</a> 以 Resource 的形式读取文件</h3><p>OSS Starter 支持以 Resource 的形式得到文件对象。如果只需读取少量文件，您可以使用这种方式。</p><p><strong>使用方法</strong>：</p><p>只需配置 OSS 协议对应的 Resource 即可：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;oss://aliyun-spring-boot/oss-test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Resource</span> file<span class="token punctuation">;</span>

<span class="token comment">// 文件内容的读取</span>
<span class="token class-name">StreamUtils</span><span class="token punctuation">.</span><span class="token function">copyToString</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token class-name">CharEncoding</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function Q(ss,ns){const e=i("ExternalLinkIcon");return l(),p("div",null,[b,s("ol",null,[g,s("li",null,[h,s("table",null,[y,s("tbody",null,[_,x,s("tr",null,[S,s("td",null,[n("用户表单上传的策略（Policy），Policy为经过Base64编码过的字符串。详情请参见"),s("a",f,[n("Post Policy"),t(e)])])]),s("tr",null,[q,s("td",null,[n("对Policy签名后的字符串。详情请参见"),s("a",j,[n("Post Signature"),t(e)])])]),I,O])])]),w]),B,s("p",null,[s("a",K,[n("官方示例"),t(e)])]),A,C,P,R,s("ol",null,[E,s("li",null,[N,s("p",null,[n("i. 在阿里云控制台界面，单击右上角头像，选择 accesskeys，或者直接登录"),s("a",T,[n("用户信息管理界面"),t(e)]),n("：")]),X,U,L,s("p",null,[V,n("：如果您使用了阿里云 "),s("a",z,[n("STS服务"),t(e)]),n(" 进行短期访问权限管理，则除了 accessKey、secretKey、endpoint 以外，还需配置 securityToken。")])]),J]),M,s("ol",null,[s("li",null,[s("p",null,[n("登陆"),s("a",D,[n("OSS控制台"),t(e)]),n("，可以看到左侧 Bucket 列表新增一个名字为"),F,n("的 Bucket。")]),W]),Z]),G,s("p",null,[n("Spring Boot1.x 可以通过访问 "),s("a",Y,[n("http://127.0.0.1:18084/oss"),t(e)]),n(" 来查看 OSS Endpoint 的信息。")]),s("p",null,[n("Spring Boot2.x 可以通过访问 "),s("a",H,[n("http://127.0.0.1:18084/actuator/oss"),t(e)]),n(" 来访问。")]),$])}const es=o(m,[["render",Q],["__file","oss.html.vue"]]);export{es as default};