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
                    {text: "JavaEE框架", icon: "network", link: "#javaee框架"},
                    {text: "微服务核心生态", icon: "cache", link: "#微服务核心生态"},
                    {text: "JVM", icon: "engine", link: "JVM/memory-garbageCollection/第1章-JVM与Java体系结构"},
                ]
            },
            {
                text: "源码",
                children: [
                    {text: "JDK", icon: "process", link: "source-code/jdk"},
                ]
            }
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
        text: "其他",
        icon: "geometry",
        prefix: "/other/",
        children: [
            {text: "ElasticSearch", link: "elasticsearch"},
            {text: "面试", icon: "back-stage", link: "audition/JUC/Volatile和JMM内存模型的可见性"},
        ]
    },
    {
        text: "笔记",
        icon: "editor",
        prefix: "/note/",
        children: [
            {
                text: "后端笔记",
                children: [
                    {text: "Spring", icon: "leaf", link: "backend/spring/validation"},
                ]
            },
            // {text: "前端笔记", icon: "calculate", link: ""},
            {text: "架构相关", icon: "condition", link: "schema/oss"},
        ]
    }
]);
