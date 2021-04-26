module.exports = {
  title: "VuePress Demo",
  description: "VuePress Demo",
  dest: "dist/docs",
  base: "/vuepress/",
  head: [["link", { rel: "icon", href: "favicon.ico" }]],
  themeConfig: {
    nav: [
      {
        text: "Intro",
        link: "/"
      },
      {
        text: "ChangeLogs",
        link: "/changelogs/"
      }
    ]
  }
};
