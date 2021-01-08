import React from 'react'
import {graphql} from 'gatsby'
import {getBlogUrl, toPlainText} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import ThemeProvider from '../components/ThemeProvider'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      readingTimeInMinutes
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      mainImage {
        asset {
          fluid (maxWidth: 1160) {
            ...GatsbySanityImageFluid
          }
          fixed (width: 1200) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <ThemeProvider>
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {post && <SEO title={post.title || 'Untitled'}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage} type='article'
          path={getBlogUrl(post.publishedAt, post.slug.current)}
        />}

        {errors && (
          <div>
            <GraphQLErrorList errors={errors} />
          </div>
        )}
        {post && <BlogPost {...post} />}
      </Layout>
    </ThemeProvider>
  )
}

export default BlogPostTemplate
