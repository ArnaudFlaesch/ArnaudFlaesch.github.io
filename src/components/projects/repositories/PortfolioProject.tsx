import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { IRepository } from '../../../model/IRepository';
import RepositoryWidget from './RepositoryWidget';
import { StaticImage } from 'gatsby-plugin-image';
import { ICON_HEIGHT, ICON_WIDTH } from '../../../utils/Constants';
import TooltipIcon from '../../tooltip-icon/TooltipIcon';

export default function PortfolioProject(): React.ReactElement {
  const QUERY = graphql`
    {
      github {
        repository(name: "arnaudflaesch.github.io", owner: "ArnaudFlaesch") {
          createdAt
          description
          name
          owner {
            id
          }
          pushedAt
          url
          languages(first: 3) {
            edges {
              node {
                name
                color
              }
              size
            }
            totalSize
          }
        }
      }
    }
  `;

  const portfolioRepo: IRepository = useStaticQuery(QUERY).github.repository;
  const repositoryIcons = [
    <TooltipIcon
      key={'ReactJS'}
      tooltip="ReactJS"
      image={
        <StaticImage
          src="../../../images/icons/frontend/reactjs.png"
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
          alt="ReactJS"
        />
      }
    />
  ];

  return (
    <div>
      {<RepositoryWidget key={portfolioRepo.name} repoIcons={repositoryIcons} repositoryData={portfolioRepo} />}
    </div>
  );
}
