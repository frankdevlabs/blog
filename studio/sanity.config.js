// sanity.config.js
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { dashboardTool, projectUsersWidget, projectInfoWidget } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import { schemaTypes } from './schemas'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { codeInput } from '@sanity/code-input'

import { MdSettings, MdPerson, MdDescription, MdLocalOffer, MdFolder } from 'react-icons/md'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID
export const dataset = process.env.SANITY_STUDIO_DATASET

export default defineConfig({
  name: 'default',
  title: "Frank's Blog",
  projectId: projectId,
  dataset: dataset,
  basePath: '/production', // URL path to the studio when deployed
  plugins: [
    deskTool({
      name: 'desk',
      title: 'Desk',
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Settings')
              .icon(MdSettings)
              .child(
                S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings'),
              ),
            S.divider(),
            S.listItem()
              .title('Blog posts')
              .icon(MdDescription)
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog posts')),
            S.listItem()
              .title('Pages')
              .icon(MdFolder)
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
            S.listItem()
              .title('Authors')
              .icon(MdPerson)
              .schemaType('author')
              .child(S.documentTypeList('author').title('Authors')),
            S.listItem()
              .title('Categories')
              .icon(MdLocalOffer)
              .schemaType('category')
              .child(S.documentTypeList('category').title('Categories')),
            // `S.documentTypeListItems()` returns an array of all the document types
            // defined in schema.js. We filter out those that we have
            // defined the structure above.
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['category', 'author', 'post', 'page', 'siteSettings'].includes(listItem.getId()),
            ),
          ]),
    }),
    codeInput(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify sites',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: process.env.SANITY_STUDIO_ADMIN_SITE_ID,
              buildHookId: process.env.SANITY_STUDIO_ADMIN_BUILD_HOOK_ID,
              name: process.env.SANITY_STUDIO_ADMIN_NAME,
              url: process.env.SANITY_STUDIO_ADMIN_URL,
            },
            {
              title: 'Blog Website',
              apiId: process.env.SANITY_STUDIO_BLOG_SITE_ID,
              buildHookId: process.env.SANITY_STUDIO_BLOG_BUILD_HOOK_ID,
              name: process.env.SANITY_STUDIO_BLOG_NAME,
              url: process.env.SANITY_STUDIO_BLOG_URL,
            },
          ],
        }),
        documentListWidget({
          title: 'Recent blogs',
          order: '_updatedAt desc',
          types: ['post'],
        }),
        projectUsersWidget({ title: 'Project users' }),
        projectInfoWidget({ title: 'Project info' }),
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
