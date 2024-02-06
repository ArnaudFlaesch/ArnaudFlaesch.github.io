import './page-styles/index.scss';

import { Link, graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';

import Seo from '../components/Seo';
import Post from '../components/blog/post/Post';
import Layout from '../layout/Layout';
import { IPageProps } from '../model/IPageProps';
import { IPost } from '../model/IPost';
import { Button } from '@mui/material';

export default function Index(props: Readonly<IPageProps>): React.ReactElement {
  const description = props.data.site.siteMetadata.description;
  const posts = props.data.allMarkdownRemark.nodes;

  const [buttonClicked, setButtonClicked] = useState(false);

  const sneakyButtonId = 'sneaky-button';

  useEffect(() => {
    const button = document.getElementById(sneakyButtonId);
    button?.addEventListener('click', () => {
      moveButtonRandomly(button);
      if (!isMobile()) {
        button.removeEventListener('click', () => moveButtonRandomly);
        button.addEventListener('mouseover', () => moveButtonRandomly(button));
      }
      setTimeout(() => setButtonClicked(true), 250);
    }
    });
    return () => {
      button?.removeEventListener('click', () => moveButtonRandomly);
      button?.removeEventListener('mouseover', () => moveButtonRandomly);
    };
  }, []);

  function moveButtonRandomly(button: HTMLElement): void {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
  }

  function isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  return (
    <Layout location={props.location}>
      <div id="presentation">
        <h1>Bonjour !</h1>
        <div id="description">{description}</div>
      </div>

      <br />

      <div>
        <p>
          Je suis actuellement à l'écoute de nouvelles opportunités professionnelles. Si vous êtes une ESN et que vous
          souhaitez me contacter pour discuter d'un emploi, vous pouvez utiliser ce lien vers un formulaire de contact :
          <Link to={buttonClicked ? '404' : '#'}>
            <Button id={sneakyButtonId} variant={buttonClicked && 'contained'}>
              Contact
            </Button>
          </Link>
        </p>
        {buttonClicked && (
          <p>
            Pour les autres structures, vous pouvez utiliser le formulaire de contact en cliquant sur le lien en haut à
            droite de la page.
          </p>
        )}
      </div>

      <div id="site-content">
        <h3>Contenu du site :</h3>
        <ul>
          <li>
            <Link to="/cv/">Mon parcours détaillé et mon CV téléchargeable</Link>
          </li>
          <li>
            <Link to="/projets/">
              Les projets personnels sur lesquels je travaille occasionnellement, hébergés sur GitHub
            </Link>
          </li>
          <li>
            <Link to="/blog/">Des articles de blog (quand ils seront rédigés &#128521;)</Link>
          </li>
          <li>
            <Link to="/contact/">Un formulaire de contact pour m'envoyer un email</Link>
          </li>
        </ul>
      </div>

      <h2 id="blog-title">
        <a href="/blog">Articles récents</a>
      </h2>
      <ol>
        {posts.map((post: IPost) => (
          <Post key={post.frontmatter.title} {...post} />
        ))}
      </ol>
    </Layout>
  );
}

export const Head = () => <Seo location={''} />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
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
          image
        }
      }
    }
  }
`;
