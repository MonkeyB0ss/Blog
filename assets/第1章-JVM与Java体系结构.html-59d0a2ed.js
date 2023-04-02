const l=JSON.parse('{"key":"v-d4b45c94","path":"/java/JVM/memory-garbageCollection/%E7%AC%AC1%E7%AB%A0-JVM%E4%B8%8EJava%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.html","title":"第1章-JVM和Java体系架构","lang":"zh-CN","frontmatter":{"date":"2023-03-08T00:00:00.000Z","category":"JVM","tag":["JAVA"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"开发人员如何看待上层框架","slug":"开发人员如何看待上层框架","link":"#开发人员如何看待上层框架","children":[]},{"level":2,"title":"架构师每天都在思考什么？","slug":"架构师每天都在思考什么","link":"#架构师每天都在思考什么","children":[]},{"level":2,"title":"我们为什么要学习JVM","slug":"我们为什么要学习jvm","link":"#我们为什么要学习jvm","children":[]},{"level":2,"title":"Java VS C++","slug":"java-vs-c","link":"#java-vs-c","children":[]},{"level":2,"title":"什么人需要学JVM？","slug":"什么人需要学jvm","link":"#什么人需要学jvm","children":[]},{"level":2,"title":"推荐及参考书籍","slug":"推荐及参考书籍","link":"#推荐及参考书籍","children":[]},{"level":2,"title":"TIOBE排行榜","slug":"tiobe排行榜","link":"#tiobe排行榜","children":[]},{"level":2,"title":"Java生态圈","slug":"java生态圈","link":"#java生态圈","children":[]},{"level":2,"title":"Java-跨平台的语言","slug":"java-跨平台的语言","link":"#java-跨平台的语言","children":[]},{"level":2,"title":"JVM-跨语言的平台","slug":"jvm-跨语言的平台","link":"#jvm-跨语言的平台","children":[]},{"level":2,"title":"字节码","slug":"字节码","link":"#字节码","children":[]},{"level":2,"title":"多语言混合编程","slug":"多语言混合编程","link":"#多语言混合编程","children":[]},{"level":2,"title":"如何真正搞懂JVM？","slug":"如何真正搞懂jvm","link":"#如何真正搞懂jvm","children":[]},{"level":2,"title":"Java发展重大事件","slug":"java发展重大事件","link":"#java发展重大事件","children":[]},{"level":2,"title":"Open JDK和Oracle JDK","slug":"open-jdk和oracle-jdk","link":"#open-jdk和oracle-jdk","children":[]},{"level":2,"title":"虚拟机","slug":"虚拟机","link":"#虚拟机","children":[{"level":3,"title":"虚拟机概念","slug":"虚拟机概念","link":"#虚拟机概念","children":[]},{"level":3,"title":"Java虚拟机","slug":"java虚拟机","link":"#java虚拟机","children":[]}]},{"level":2,"title":"JVM的位置","slug":"jvm的位置","link":"#jvm的位置","children":[]},{"level":2,"title":"JVM的整体结构","slug":"jvm的整体结构","link":"#jvm的整体结构","children":[]},{"level":2,"title":"Java代码执行流程","slug":"java代码执行流程","link":"#java代码执行流程","children":[]},{"level":2,"title":"JVM的架构模型","slug":"jvm的架构模型","link":"#jvm的架构模型","children":[{"level":3,"title":"基于栈的指令集架构","slug":"基于栈的指令集架构","link":"#基于栈的指令集架构","children":[]},{"level":3,"title":"基于寄存器的指令级架构","slug":"基于寄存器的指令级架构","link":"#基于寄存器的指令级架构","children":[]},{"level":3,"title":"两种架构的举例","slug":"两种架构的举例","link":"#两种架构的举例","children":[]},{"level":3,"title":"JVM架构总结","slug":"jvm架构总结","link":"#jvm架构总结","children":[]}]},{"level":2,"title":"JVM的生命周期","slug":"jvm的生命周期","link":"#jvm的生命周期","children":[{"level":3,"title":"虚拟机的启动","slug":"虚拟机的启动","link":"#虚拟机的启动","children":[]},{"level":3,"title":"虚拟机的执行","slug":"虚拟机的执行","link":"#虚拟机的执行","children":[]},{"level":3,"title":"虚拟机的退出","slug":"虚拟机的退出","link":"#虚拟机的退出","children":[]}]},{"level":2,"title":"JVM发展历程","slug":"jvm发展历程","link":"#jvm发展历程","children":[{"level":3,"title":"Sun Classic VM","slug":"sun-classic-vm","link":"#sun-classic-vm","children":[]},{"level":3,"title":"Exact VM","slug":"exact-vm","link":"#exact-vm","children":[]},{"level":3,"title":"HotSpot VM（重点）","slug":"hotspot-vm-重点","link":"#hotspot-vm-重点","children":[]},{"level":3,"title":"JRockit（商用三大虚拟机之一）","slug":"jrockit-商用三大虚拟机之一","link":"#jrockit-商用三大虚拟机之一","children":[]},{"level":3,"title":"IBM的J9（商用三大虚拟机之一）","slug":"ibm的j9-商用三大虚拟机之一","link":"#ibm的j9-商用三大虚拟机之一","children":[]},{"level":3,"title":"KVM和CDC/CLDC Hotspot","slug":"kvm和cdc-cldc-hotspot","link":"#kvm和cdc-cldc-hotspot","children":[]},{"level":3,"title":"Azul VM","slug":"azul-vm","link":"#azul-vm","children":[]},{"level":3,"title":"Liquid VM","slug":"liquid-vm","link":"#liquid-vm","children":[]},{"level":3,"title":"Apache Marmony","slug":"apache-marmony","link":"#apache-marmony","children":[]},{"level":3,"title":"Micorsoft JVM","slug":"micorsoft-jvm","link":"#micorsoft-jvm","children":[]},{"level":3,"title":"Taobao JVM","slug":"taobao-jvm","link":"#taobao-jvm","children":[]},{"level":3,"title":"Dalvik VM","slug":"dalvik-vm","link":"#dalvik-vm","children":[]},{"level":3,"title":"Graal VM（未来虚拟机）","slug":"graal-vm-未来虚拟机","link":"#graal-vm-未来虚拟机","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1678375001000,"updatedTime":1678375001000,"contributors":[{"name":"MonkeyBoss","email":"1912290362@qq.com","commits":1}]},"readingTime":{"minutes":22.6,"words":6781},"filePathRelative":"java/JVM/memory-garbageCollection/第1章-JVM与Java体系结构.md","localizedDate":"2023年3月8日","excerpt":"<h1> 第1章-JVM和Java体系架构</h1>\\n<h2> 前言</h2>\\n<p>你是否也遇到过这些问题？</p>\\n<ol>\\n<li>运行着的线上系统突然卡死，系统无法访问，甚至直接OOM！</li>\\n<li>想解决线上JVM GC问题，但却无从下手。</li>\\n<li>新项目上线，对各种JVM参数设置一脸茫然，直接默认吧然后就JJ了。</li>\\n<li>每次面试之前都要重新背一遍JVM的一些原理概念性的东西，然而面试官却经常问你在实际项目中如何调优VM参数，如何解决GC、OOM等问题，一脸懵逼。</li>\\n</ol>\\n<p></p>\\n<p>大部分Java开发人员，除了会在项目中使用到与Java平台相关的各种高精尖技术，对于Java技术的核心Java虚拟机了解甚少。</p>"}');export{l as data};
