export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '606b392f087e2823d5ce8ce7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fkmjg668',
                  apiId: 'b75f422a-b69e-4db6-8a79-e7d85eb713e8'
                },
                {
                  buildHookId: '606b3930dda1b42640a03940',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1qz4sjy9',
                  apiId: '62f43c7d-bc47-4583-b2d4-e12fef2d3c24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kranti99/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1qz4sjy9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
