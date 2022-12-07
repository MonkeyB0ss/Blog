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
        text: "MySQL",
        icon: "mysql",
        prefix: "/mysql/",
        children: [
            {
                text: "基础",
                children: [
                    {text: "概述与安装", icon: "calculate", link: "mysql-basic/mysql-basic"},
                    {text: "SELECT使用", icon: "html", link: "mysql-basic/select"},
                    {text: "DDL、DML、DCL使用", icon: "html", link: "mysql-basic/create"},
                    {text: "其它数据库对象", icon: "html", link: ""},
                    {text: "MySQL8新特性", icon: "html", link: ""},
                ]
            },
            {
                text: "进阶",
                children: [
                    {text: "MySQL架构", icon: "network", link: ""},
                    {text: "索引及调优", icon: "cache", link: ""},
                    {text: "事务", icon: "cache", link: ""},
                    {text: "日志与备份", icon: "cache", link: ""},
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
