// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import page from './documents/page'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import internalLinkReference from './objects/internalLinkReference'
import externalLinkReference from './objects/externalLinkReference'
import Footnote from './objects/note'
import codeSnippet from './objects/codeSnippet'

export const schemaTypes = [
  siteSettings,
  post,
  page,
  category,
  author,
  mainImage,
  externalLinkReference,
  internalLinkReference,
  Footnote,
  authorReference,
  bodyPortableText,
  bioPortableText,
  excerptPortableText,
  codeSnippet,
]
