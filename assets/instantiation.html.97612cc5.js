import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as e,e as i}from"./app.34241526.js";const n="/Blog/assets/instantiation1.3e0347b1.png",o="/Blog/assets/instantiation2.b1c59ce9.png",s={},c=i('<h1 id="子类对象实例化全过程" tabindex="-1"><a class="header-anchor" href="#子类对象实例化全过程" aria-hidden="true">#</a> 子类对象实例化全过程</h1><p>理解即可</p><ol><li><p>从结果上看：继承性</p><p>子类继承父类以后，就获取了父类中声明的属性或方法。</p><p>创建子类的对象，在堆空间中，就会加载所父类中声明的属性。</p></li><li><p>从过程上看： 当我们通过子类的构造器创建子类对象时，我们一定会直接或间接的调用其父类的构造器，进而调用父类的父类的构造器，...直到调用了<code>java.lang.Object</code> 类中空参的构造器为止。正因为加载过所的父类的结构，所以才可以看到内存中父类中的结构，子类对象才可以考虑进行调用。</p><p><img src="'+n+'" alt="图示" loading="lazy"></p></li><li><p>强调说明 虽然创建子类对象时，调用了父类的构造器，但是自始至终就创建过一个对象，即为<code>new</code>的子类对象。 <img src="'+o+'" alt="img.png" loading="lazy"></p></li></ol>',3),l=[c];function p(r,_){return a(),e("div",null,l)}const g=t(s,[["render",p],["__file","instantiation.html.vue"]]);export{g as default};