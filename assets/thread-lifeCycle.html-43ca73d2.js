import{_ as e,X as a,Y as t,a2 as r}from"./framework-a20dc394.js";const c="/assets/lifeCycle-bcde9997.png",i={},l=r('<h1 id="thread的生命周期" tabindex="-1"><a class="header-anchor" href="#thread的生命周期" aria-hidden="true">#</a> Thread的生命周期</h1><p><img src="'+c+'" alt="img.png"></p><ol><li><p>生命周期关注两个概念：<mark>状态</mark>、<mark>相应的方法</mark></p></li><li><p>关注：状态a➡️状态b:哪些方法执行了（回调方法）</p><p>某个方法主动调用：状态a➡️状态b</p></li><li><p>阻塞：临时状态，不可以作为最终状态</p><p>死亡：最终状态。</p></li></ol>',3),s=[l];function o(n,p){return a(),t("div",null,s)}const _=e(i,[["render",o],["__file","thread-lifeCycle.html.vue"]]);export{_ as default};
