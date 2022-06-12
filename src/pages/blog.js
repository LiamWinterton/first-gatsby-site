import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allFile.nodes.map(node => {
				return (
					<li key={node.name}>{node.name}</li>
				)
			})}
		</Layout>
	)
}

export const query = graphql`
	query {
		allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
			nodes {
				name
			}
		}
	}
`

export default BlogPage