const e=JSON.parse('{"key":"v-5af48dfd","path":"/note/backend/spring/validation.html","title":"SpringBoot字段验证器","lang":"zh-CN","frontmatter":{"date":"2023-03-08T00:00:00.000Z","category":"笔记","tag":["Spring"]},"headers":[{"level":2,"title":"添加POM坐标","slug":"添加pom坐标","link":"#添加pom坐标","children":[]},{"level":2,"title":"给Bean添加校验注解:javax.validation.constraints","slug":"给bean添加校验注解-javax-validation-constraints","link":"#给bean添加校验注解-javax-validation-constraints","children":[]},{"level":2,"title":"开启校验功能@Valid","slug":"开启校验功能-valid","link":"#开启校验功能-valid","children":[]},{"level":2,"title":"获取校验结果","slug":"获取校验结果","link":"#获取校验结果","children":[]},{"level":2,"title":"分组校验","slug":"分组校验","link":"#分组校验","children":[]},{"level":2,"title":"自定义校验","slug":"自定义校验","link":"#自定义校验","children":[]}],"git":{"createdTime":1678288363000,"updatedTime":1678288363000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":1.55,"words":465},"filePathRelative":"note/backend/spring/validation.md","localizedDate":"2023年3月8日","excerpt":"<h1> SpringBoot字段验证器</h1>\\n<h2> 添加POM坐标</h2>\\n<p>在SpringBoot2.3.0以后，我们需要给 pom.xml 加入下面的依赖项，SpringBoot 校验属性 @Valid 才会起作用</p>\\n<div class=\\"language-pom line-numbers-mode\\" data-ext=\\"pom\\"><pre class=\\"language-pom\\"><code>&lt;dependency&gt;\\n\\t&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\\n\\t&lt;artifactId&gt;spring-boot-starter-validation&lt;/artifactId&gt;\\n&lt;/dependency&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};