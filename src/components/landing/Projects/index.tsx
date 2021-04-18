import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme }  = useContext(ThemeContext);
  
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper className="container" id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <div className={"card " + theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <div className="titleWrap">
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === "light" ? "#000" : "#fff"} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {
                      node.languages.nodes.map(({ id, name }) => (
                        <span key={id}>
                          {name}
                        </span>
                      ))
                    }
                  </Languages>
                </Stats>
              </div>
            </div>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
