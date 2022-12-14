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
                    {text: "Java基础", icon: "calculate", link: "java-basic/java-basic"},
                    {text: "JavaWEB", icon: "html", link: "https://heavy_code_industry.gitee.io/code_heavy_industry/pro001-javaweb/"},
                ]
            },
            {
                text: "进阶",
                children: [
                    {text: "JavaEE框架", icon: "network", link: ""},
                    {text: "微服务核心生态", icon: "cache", link: "https://www.yuque.com/atguigu/springboot"},
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
        text: "MySQL",
        icon: "mysql",
        prefix: "/mysql/",
        children: [
            {
                text: "基础",
                children: [
                    {text: "概述与安装", icon: "calculate", link: "mysql-basic/mysql-basic"},
                    {text: "SELECT使用", icon: "emmet", link: "mysql-basic/select"},
                    {text: "DDL、DML、DCL使用", icon: "enum", link: "mysql-basic/create"},
                    {text: "其它数据库对象", icon: "flex", link: "mysql-basic/view"},
                    {text: "MySQL8新特性", icon: "flower", link: "mysql-basic/new-features"},
                ]
            },
            {
                text: "进阶",
                children: [
                    {text: "MySQL架构", icon: "layout", link: "mysql-advanced/setup-linux"},
                    {text: "索引及调优", icon: "navigation", link: "mysql-advanced/index-create"},
                    {text: "事务", icon: "repair", link: "mysql-advanced/transaction-log"},
                    {text: "日志与备份", icon: "blog", link: "mysql-advanced/other-log"},
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
