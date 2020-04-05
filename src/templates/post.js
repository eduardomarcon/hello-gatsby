import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, date } = frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        date
        title
        path
      }
    }
  }
`

export default Post
