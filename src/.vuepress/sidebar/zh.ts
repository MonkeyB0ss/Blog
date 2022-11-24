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
                    text: "面向对象",
                    prefix: "object",
                    children: [
                        {
                            text: "面向对象 - 上",
                            link: "class",
                        },
                        {
                            text: "面向对象 - 中",
                            link: "class-extends",
                        },
                        {
                            text: "面向对象 - 下",
                            link: "class-static",
                        }
                    ],
                }
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
    "/java/java-basic/object/": ["class", "class-structure", "class-method", "encapsulation", "class-constructor", "this", "package-import"],
    "/java/java-basic/object/": ["class-extends", "override", "super", "instantiation", "polymorphic", "class-object", "class-wrapper"],
    "/java/java-basic/object/": ["class-static"],
    "/about/": ["intro", "site"],
});
