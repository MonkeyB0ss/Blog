const e=JSON.parse('{"key":"v-2d4b817a","path":"/java/java-advanced/IOStream/RandomAccessFile.html","title":"RandomAccessFile的使用","lang":"zh-CN","frontmatter":{"date":"2022-12-03T00:00:00.000Z","category":"基础进阶","tag":["JAVA"]},"headers":[{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[]},{"level":2,"title":"典型代码1","slug":"典型代码1","link":"#典型代码1","children":[]},{"level":2,"title":"典型代码2","slug":"典型代码2","link":"#典型代码2","children":[]}],"git":{"createdTime":1670087861000,"updatedTime":1670087861000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":1.18,"words":355},"filePathRelative":"java/java-advanced/IOStream/RandomAccessFile.md","localizedDate":"2022年12月3日","excerpt":"<h1> RandomAccessFile的使用</h1>\\n<h2> 使用说明</h2>\\n<ol>\\n<li><code>RandomAccessFile</code>直接继承于java.lang.Object类，实现了DataInput和DataOutput接口</li>\\n<li><code>RandomAccessFile</code>既可以作为一个输入流，又可以作为一个输出流</li>\\n<li>如果RandomAccessFile作为输出流时，写出到的文件如果不存在，则在执行过程中自动创建。如果写出到的文件存在，则会对原文件内容进行覆盖。（默认情况下，从头覆盖）</li>\\n<li>可以通过相关的操作，实现RandomAccessFile\\"插入\\"数据的效果。<code>seek(int pos)</code></li>\\n</ol>"}');export{e as data};