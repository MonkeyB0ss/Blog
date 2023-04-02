import{_ as a,X as e,Y as t,$ as n,a0 as s}from"./framework-a20dc394.js";const c={},l=n("h1",{id:"线程安全的单例模式-懒汉式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#线程安全的单例模式-懒汉式","aria-hidden":"true"},"#"),s(" 线程安全的单例模式(懒汉式)")],-1),o=n("p",null,[n("strong",null,"使用同步机制将单例模式中的懒汉式改写为线程安全的。")],-1),i=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{java:"",class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Bank"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"Bank"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"Bank"),s(" instance "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"Bank"),s(),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 方式一：效率稍差"),s(`
        `),n("span",{class:"token comment"},"// synchronized (Bank.class) {"),s(`
        `),n("span",{class:"token comment"},"// if(instance == null){"),s(`
            `),n("span",{class:"token comment"},"// instance = new Bank();"),s(`
        `),n("span",{class:"token comment"},"// }"),s(`
        `),n("span",{class:"token comment"},"// return instance;"),s(`
        `),n("span",{class:"token comment"},"// }"),s(`
        `),n("span",{class:"token comment"},"// 方式二：效率更高"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("instance "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"synchronized"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Bank"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("instance "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
                    instance `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bank"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" instance"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),p=[l,o,i];function u(r,k){return e(),t("div",null,p)}const m=a(c,[["render",u],["__file","single-threadsafety.html.vue"]]);export{m as default};
