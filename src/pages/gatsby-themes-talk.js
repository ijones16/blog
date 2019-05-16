import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import theme from '../../config/theme'
function Abstract({ data: { site, allMdx } }) {
  return (
    <Layout site={site} headerColor={theme.colors.primary_dark}>
      <Container>
        <h1>What is a Gatsby Theme?</h1>
        <p>
          Gatsby themes are a new abstraction that allow the you build a full
          blown Gatsby site with minimal configuration. We will go over what a
          Gatsby theme is, how themes are a different concept than themes from
          the past (Wordpress, Hugo, etc.). Then we will dive in and look at how
          you can use a theme today.
        </p>
      </Container>
    </Layout>
  )
}

export default Abstract

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`