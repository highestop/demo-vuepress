module.exports = {
  title: 'VuePress Template',
  description: 'A Simple Vue-Press Demo Template',
  dest: 'dist/docs',
  base: '/vuepress-template/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    nav: [
      {
        text: 'Intro',
        link: '/',
      },
      {
        text: 'ChangeLog',
        link: '/change-log/',
      },
    ],
  },
};
