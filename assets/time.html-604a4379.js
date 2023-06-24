const l=JSON.parse('{"key":"v-8c066f7c","path":"/java/java-advanced/common-utils/time.html","title":"JDK8中新日期时间API","lang":"zh-CN","frontmatter":{"date":"2022-11-29T00:00:00.000Z","category":"基础进阶","tag":["JAVA"]},"headers":[{"level":2,"title":"日期时间API的迭代","slug":"日期时间api的迭代","link":"#日期时间api的迭代","children":[]},{"level":2,"title":"前两代存在的问题举例","slug":"前两代存在的问题举例","link":"#前两代存在的问题举例","children":[]},{"level":2,"title":"java 8 中新的日期时间API涉及到的包","slug":"java-8-中新的日期时间api涉及到的包","link":"#java-8-中新的日期时间api涉及到的包","children":[]},{"level":2,"title":"本地日期、本地时间、本地日期时间的使用","slug":"本地日期、本地时间、本地日期时间的使用","link":"#本地日期、本地时间、本地日期时间的使用","children":[{"level":3,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":3,"title":"常用方法","slug":"常用方法","link":"#常用方法","children":[]}]},{"level":2,"title":"时间点","slug":"时间点","link":"#时间点","children":[{"level":3,"title":"说明","slug":"说明-1","link":"#说明-1","children":[]},{"level":3,"title":"常用方法","slug":"常用方法-1","link":"#常用方法-1","children":[]}]},{"level":2,"title":"日期时间格式化类","slug":"日期时间格式化类","link":"#日期时间格式化类","children":[{"level":3,"title":"说明","slug":"说明-2","link":"#说明-2","children":[]},{"level":3,"title":"常用方法","slug":"常用方法-2","link":"#常用方法-2","children":[]}]},{"level":2,"title":"其它API的使用","slug":"其它api的使用","link":"#其它api的使用","children":[{"level":3,"title":"带时区的日期时间","slug":"带时区的日期时间","link":"#带时区的日期时间","children":[]},{"level":3,"title":"时间间隔","slug":"时间间隔","link":"#时间间隔","children":[]},{"level":3,"title":"日期间隔","slug":"日期间隔","link":"#日期间隔","children":[]},{"level":3,"title":"日期时间校正器","slug":"日期时间校正器","link":"#日期时间校正器","children":[]}]}],"git":{"createdTime":1669734734000,"updatedTime":1669734734000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":2.9,"words":870},"filePathRelative":"java/java-advanced/common-utils/time.md","localizedDate":"2022年11月29日","excerpt":"<h1> JDK8中新日期时间API</h1>\\n<h2> 日期时间API的迭代</h2>\\n<ol>\\n<li>第一代：jdk 1.0 Date类</li>\\n<li>第二代：jdk 1.1 Calendar类，一定程度上替换Date类</li>\\n<li>第三代：jdk 1.8 提出了新的一套API</li>\\n</ol>\\n<h2> 前两代存在的问题举例</h2>\\n<ol>\\n<li>可变性：像日期和时间这样的类应该是不可变的。</li>\\n<li>偏移性：Date中的年份是从1900开始的，而月份都从0开始。</li>\\n<li>格式化：格式化只对Date用，Calendar则不行。</li>\\n</ol>"}');export{l as data};