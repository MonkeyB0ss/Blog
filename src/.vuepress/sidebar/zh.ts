import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/java/java-basic/": [
        "",
        {
            text: "Java基础编程",
            icon: "java",
            children: [
                "java-basic",
                "java-array",
                {
                    text: "面向对象 - 上",
                    link: "object/upper/class",
                },
                {
                    text: "面向对象 - 中",
                    link: "object/middle/class-extends",
                },
                {
                    text: "面向对象 - 下",
                    link: "object/lower/keyword-static",
                },
                "java-exception",
            ],
        },
        {
            text: "Java高级编程",
            icon: "creative",
            prefix: "BasicCore/",
            link: "BasicCore/",
            children: "structure",
        },
    ],
    "/java/java-basic/object/upper/": ["class", "class-structure", "class-method", "encapsulation", "class-constructor", "keyword-this", "keyword-import"],
    "/java/java-basic/object/middle/": ["class-extends", "override", "keyword-super", "instantiation", "polymorphic", "class-object", "class-wrapper"],
    "/java/java-basic/object/lower/": ["keyword-static", "class-main", "class-coder", "keyword-final", "keyword-abstract", "keyword-interface", "class-innerClass"],
    "/java/java-basic/design-patterns/": ["single", "agent", "factory"],
    "/about/": ["intro", "site"],
});
