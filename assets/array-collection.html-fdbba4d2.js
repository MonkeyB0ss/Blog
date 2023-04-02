import{_ as e,X as a,Y as i,a2 as r}from"./framework-a20dc394.js";const c={},d=r('<h1 id="数组与集合" tabindex="-1"><a class="header-anchor" href="#数组与集合" aria-hidden="true">#</a> 数组与集合</h1><h2 id="集合与数组存储数据概述" tabindex="-1"><a class="header-anchor" href="#集合与数组存储数据概述" aria-hidden="true">#</a> 集合与数组存储数据概述</h2><p><code>集合</code>、<code>数组</code>都是对多个数据进行存储操作的结构，简称<code>Java容器</code>。</p><div class="hint-container info"><p class="hint-container-title">说明</p><p>此时的存储，主要指的是内存层面的存储，不涉及到持久化的存储（.txt,.jpg,.avi，数据库中)</p></div><h2 id="数组存储的特点" tabindex="-1"><a class="header-anchor" href="#数组存储的特点" aria-hidden="true">#</a> 数组存储的特点</h2><ol><li>一旦初始化以后，其长度就确定了。</li><li>数组一旦定义好，其元素的类型也就确定了。我们也就只能操作指定类型的数据了。 <ul><li>比如：<code>String[] arr</code>; <code>int[] arr1</code>; <code>Object[] arr2</code>;</li></ul></li></ol><h2 id="数组存储的弊端" tabindex="-1"><a class="header-anchor" href="#数组存储的弊端" aria-hidden="true">#</a> 数组存储的弊端</h2><ol><li>一旦初始化以后，其长度就不可修改。</li><li>数组中提供的方法非常限，对于添加、删除、插入数据等操作，非常不便，同时效率不高。</li><li>获取数组中实际元素的个数的需求，数组没有现成的属性或方法可用</li><li>数组存储数据的特点：有序、可重复。对于无序、不可重复的需求，不能满足。</li></ol><h2 id="集合存储的优点" tabindex="-1"><a class="header-anchor" href="#集合存储的优点" aria-hidden="true">#</a> 集合存储的优点</h2><p><strong>解决数组存储数据方面的弊端</strong></p>',10),o=[d];function t(l,n){return a(),i("div",null,o)}const s=e(c,[["render",t],["__file","array-collection.html.vue"]]);export{s as default};
