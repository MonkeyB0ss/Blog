import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "Java",
        icon: "java",
        prefix: "/java/",
        children: [
            {
                text: "基础",
                children: [
                    {text: "Java基础", icon: "calculate", link: "java-basic/"},
                    {text: "JavaWEB", icon: "html", link: ""},
                ]
            },
            {
                text: "进阶",
                children: [
                    {text: "JavaEE框架", icon: "network", link: ""},
                    {text: "微服务核心生态", icon: "cache", link: ""},
                ]
            },
            {
                text: "其它",
                children: [
                    {text: "项目", icon: "operate", link: ""},
                    {text: "面试", icon: "proxy", link: ""},
                ]
            },
        ],
    },
    {
        text: "笔记",
        icon: "editor",
        prefix: "/note/",
        children: [

        ]
    }
]);
