import { graphql, Link, Script } from 'gatsby';
import React from 'react';

import Layout from '../components/layout/layout';
import Seo from '../components/seo';

export default function Index(/*props: IPageProps*/): React.ReactElement {
  // const posts = props.data.allMarkdownRemark.nodes;

  return (
    <div>
      <Layout>
        <Seo title="Home" />
        <h1>Bonjour !</h1>
        {/*<ol>
          {posts.map((post: IPost) => (
            <Post key={post.frontmatter.title} {...post} />
          ))}
          </ol>*/}
        <br />
        <p>
          <Link to="/contact/">Contact</Link>
        </p>

        <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
      </Layout>
    </div>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
