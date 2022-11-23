import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "Java",
        icon: "java",
        prefix: "/java/",
        children: [
            {
                text: "Java基础",
                icon: "form",
                link: "java-basic/"
            },
            {
                text: "JavaWEB",
                icon: "form",
                prefix: "BasicCore/",
                children: [
                    {text: "java基础", icon: "java", link: "java-basic/"},
                    {text: "苹果2", icon: "edit", link: "2"},
                ],
            },
            {
                text: "JavaEE框架",
                icon: "edit",
                prefix: "banana/",
                children: [
                    {
                        text: "香蕉 1",
                        icon: "edit",
                        link: "1",
                    },
                    {
                        text: "香蕉 2",
                        icon: "edit",
                        link: "2",
                    },
                    "3",
                    "4",
                ],
            },
            {text: "微服务核心生态", icon: "edit", link: "cherry"},
            {text: "项目", icon: "edit", link: "dragonfruit"},
            {text: "面试", icon: "edit", link: "dragonfruit"},
        ],
    },
    {
        text: "V2 文档",
        icon: "note",
        link: "https://vuepress-theme-hope.github.io/v2/",
    },
]);
