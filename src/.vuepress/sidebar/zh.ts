import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    /* Java */
    "/java/": [
        {
            text: "Java基础编程",
            icon: "java",
            prefix: "java-basic/",
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
            prefix: "java-advanced/",
            children: [
                {
                    text: "多线程",
                    link: "multi-thread/introduce",
                },
                {
                    text: "Java常用类",
                    link: "common-utils/String",
                },
                {
                    text: "枚举类和注解",
                    link: "enum/enum",
                },
                {
                    text: "Java集合",
                    link: "collection/array-collection",
                },
                {
                    text: "泛型",
                    link: "generic/generic",
                },
                {
                    text: "IO流",
                    link: "IOStream/file",
                },
                {
                    text: "网络编程",
                    link: "network/InetAddress",
                },
                {
                    text: "Java反射机制",
                    link: "reflection/reflection",
                },
                {
                    text: "Java8新特性",
                    link: "new-features/Lambda",
                },
            ],
        },
    ],
    "/java/java-basic/object/upper/": ["class", "class-structure", "class-method", "encapsulation", "class-constructor", "keyword-this", "keyword-import"],
    "/java/java-basic/object/middle/": ["class-extends", "override", "keyword-super", "instantiation", "polymorphic", "class-object", "class-wrapper"],
    "/java/java-basic/object/lower/": ["keyword-static", "class-main", "class-coder", "keyword-final", "keyword-abstract", "keyword-interface", "class-innerClass"],
    "/java/java-basic/design-patterns/": ["single", "agent", "factory"],

    "/java/java-advanced/multi-thread/": ["introduce", "concurrent", "thread", "thread-methods", "thread-lifeCycle", "thread-synchronization", "thread-notify", "thread-new"],
    "/java/java-advanced/common-utils/": ["String", "StringBufferAndStringBuilder", "date", "time", "comparator", "other"],
    "/java/java-advanced/enum/": ["enum", "annotation"],
    "/java/java-advanced/collection/": ["array-collection", "collection", "iterator", "list", "set", "map", "collections", "data-structure"],
    "/java/java-advanced/generic/": ["generic", "collection", "custom", "extends", "wildcard"],
    "/java/java-advanced/IOStream/": ["file", "IO", "file-reader", "buffered", "convert", "other", "object", "RandomAccessFile", "path"],
    "/java/java-advanced/network/": ["InetAddress", "TCP", "UDP", "URL"],
    "/java/java-advanced/reflection/": ["reflection", "Class", "ClassLoader", "apply1", "apply2", "apply3", "apply4"],
    "/java/java-advanced/new-features/": ["Lambda", "FunctionalInterface", "quote", "constructor", "StreamAPI", "Optional"],

    "/java/JVM/": [
        {
            text: "内存与垃圾回收篇",
            prefix: "memory-garbageCollection/",
            children: ["第1章-JVM与Java体系结构", "第2章-类加载子系统", "第3章-运行时数据区"],
        },
        {
            text: "字节码与类的加载篇",
            collapsible: true,
            prefix: "class-classLoader/",
            children: [],
        },
        {
            text: "性能监控与调优篇",
            collapsible: true,
            prefix: "monitoring-tuning/",
            children: [],
        },
    ],
    /* Java */

    /* MySQL */
    "/mysql/": [
        {
            text: "MySQL基础",
            icon: "mysql",
            prefix: "mysql-basic/",
            children: [
                {
                    text: "概述与安装",
                    collapsible: true,
                    children: [
                        "mysql-basic",
                        "env",
                    ],
                },
                {
                    text: "SELECT使用",
                    collapsible: true,
                    children: [
                        "select",
                        "operator",
                        "order",
                        "multi-table",
                        "single-line",
                        "polymerization",
                        "sub-query",
                    ],
                },
                {
                    text: "DDL、DML、DCL使用",
                    collapsible: true,
                    children: [
                        "create",
                        "crud",
                        "data-type",
                        "constraint",
                    ],
                },
                {
                    text: "其它数据库对象",
                    collapsible: true,
                    children: [
                        "view",
                        "procedure",
                        "variables",
                        "trigger",
                    ],
                },
                {
                    text: "MySQL8新特性",
                    collapsible: true,
                    children: [
                        "new-features"
                    ],
                },
            ],
        },
        {
            text: "MySQL高级",
            icon: "creative",
            prefix: "mysql-advanced/",
            children: [
                {
                    text: "MySQL架构",
                    collapsible: true,
                    children: [
                        "setup-linux",
                        "data-dir",
                        "user",
                        "logical-architecture",
                        "engines",
                        "indexes",
                        "InnoDB",
                    ],
                },
                {
                    text: "索引及调优",
                    collapsible: true,
                    children: [
                        "index-create",
                        "slow-query",
                        "optimize",
                        "NF",
                        "other",
                    ],
                },
                {
                    text: "事务",
                    collapsible: true,
                    children: [
                        "transaction",
                        "transaction-log",
                        "lock",
                        "MVCC",
                    ],
                },
                {
                    text: "日志与备份",
                    collapsible: true,
                    children: [
                        "other-log",
                        "MS-copy",
                        "backup",
                    ],
                },
            ],
        },
    ],
    /* MySQL */

    "/about/": ["intro", "site"],

    "/note/": [
        {
            text: "后端笔记",
            collapsible: true,
            prefix: "backend/",
            children: [
                {
                    text: "Spring相关",
                    icon: "leaf",
                    collapsible: true,
                    prefix: "Spring/",
                    children: [
                        "validation",
                        "exception-handling",
                    ],
                },
            ],
        },
        {
            text: "架构相关",
            collapsible: true,
            prefix: "schema/",
            children: [
                "oss",
            ],
        }
    ],
});
