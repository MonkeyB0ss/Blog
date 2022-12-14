import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar,enNavbar } from "./navbar";
import { zhSidebar,enSidebar } from "./sidebar";

export default hopeTheme({
  author: {
    name: "MonkeyBoss",
    url: "https://github.com/MonkeyB0ss",
  },

  iconAssets: "iconfont",

  logo: "/MonkeyBoss.png",

  repo: "MonkeyB0ss/Blog",

  docsDir: "src",

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,

      blog: {
        description: "自律进步，有始有终",
        intro: "/about/intro.html",
        medias: {
          Email: "mailto:1912290362@qq.com",
          Gmail: "mailto:erasmehou@gmail.com",
          GitHub: "https://github.com/MonkeyB0ss",
          Gitee: "https://gitee.com/MonkeyBoss",
          Discord: "https://discord.gg/HCBrTSN5MG",
        },
      },
    },

    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,

      blog: {
        description:
            "Self discipline and progress",
        intro: "/en/about/intro.html",
        medias: {
          Email: "mailto:1912290362@qq.com",
          Gmail: "mailto:erasmehou@gmail.com",
          GitHub: "https://github.com/MonkeyB0ss",
          Gitee: "https://gitee.com/MonkeyBoss",
          Discord: "https://discord.gg/HCBrTSN5MG",
        },
      },
    },
  },
  displayFooter: true,
  copyright: "MIT Licensed | Copyright © 2020-present MonkeyBoss",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "MonkeyB0ss/commit",
      repoId: "R_kgDOIef6_A",
      category: "Ideas",
      categoryId: "DIC_kwDOIef6_M4CSrn9",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
    },
  },
});
