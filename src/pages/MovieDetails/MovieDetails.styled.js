import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.header`
  padding-right: ${p => p.theme.space[3]};
  padding-left: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    padding-right: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[4]};
  }
`;

export const GoBack = styled(Link)`
  margin-bottom: ${p => p.theme.space[3]};

  display: inline-block;

  font-weight: bold;

  color: ${p => p.theme.colors.text.poster};

  text-decoration: none;

  ${p => p.theme.mediaQueries.tablet} {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const Poster = styled.div`
  margin-bottom: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    margin-bottom: ${p => p.theme.space[4]};

    display: flex;
    flex-wrap: wrap;
    gap: ${p => p.theme.space[4]};
  }
`;

export const ImageWraper = styled.div`
  width: 300px;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[3]};
  margin-left: auto;

  ${p => p.theme.mediaQueries.tablet} {
    margin-bottom: ${p => p.theme.space[0]};
  }
`;

export const PosterImage = styled.img`
  object-fit: cover;
`;

export const PosterInfo = styled.div`
  ${p => p.theme.mediaQueries.tablet} {
    flex-grow: 1;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const Overview = styled.p`
  margin-bottom: ${p => p.theme.space[3]};

  font-weight: bold;

  ${p => p.theme.mediaQueries.tablet} {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const Genres = styled.p`
  margin-bottom: ${p => p.theme.space[3]};

  font-weight: bold;

  ${p => p.theme.mediaQueries.tablet} {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const AdditionalInfo = styled.ul`
  padding: ${p => p.theme.space[3]} ${p => p.theme.space[4]};

  display: flex;
  gap: ${p => p.theme.space[3]};

  border-top: ${p => p.theme.borders.AdditionalInfo};
  border-bottom: ${p => p.theme.borders.AdditionalInfo};
`;

export const InfoItem = styled.li``;

export const InfoLink = styled(NavLink)`
  color: ${p => p.theme.colors.text.poster};

  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;
