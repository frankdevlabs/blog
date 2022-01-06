export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff03b57a0d2368c0044ef7c',
                  title: 'Sanity Studio',
                  name: 'blog-studio-wmwv9ahv',
                  apiId: '44648c5d-face-4d9d-aecf-5bad9ca864a5',
                },
                {
                  buildHookId: '5ff03b571a2610087116d9e7',
                  title: 'Blog Website',
                  name: 'blog-web-nve75wuq',
                  apiId: '1494d3a1-9f34-49fa-8bcc-a64ea6763687',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frankdevlabs/blog',
            category: 'Code',
          },
          { title: 'Frontend', value: 'https://franksblog.nl', category: 'apps' },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' },
    },
  ],
}
