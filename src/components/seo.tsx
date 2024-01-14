/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface IProps {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
  location?: string;
}

export default function Seo(props: Readonly<IProps>): React.ReactElement {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          job
          siteUrl
        }
      }
    }
  `);

  const metaDescription = props.description ?? site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const meta = props.meta ?? [];

  return (
    <Helmet
      htmlAttributes={{ lang: props.lang }}
      title={props.title}
      titleTemplate={defaultTitle ? `${defaultTitle}` : ''}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: props.title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:url',
          content: `https://arnaudflaesch.github.io/${props.location}`
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords
        }
      ].concat(meta)}
    />
  );
}
