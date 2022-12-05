import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PosterLink = styled(Link)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${p => p.theme.colors.text.poster};
  background-color: ${p => p.theme.colors.bcg.posterInfo};

  text-decoration: none;
  outline: none;

  box-shadow: ${p => p.theme.shadows.poster.main};
  transform: scale(1);

  transition: box-shadow ${p => p.theme.transition},
    transform ${p => p.theme.transition};

  :hover,
  :focus-visible {
    transform: scale(1.01);
    box-shadow: ${p => p.theme.shadows.poster.hover};
  }
`;

export const PosterImage = styled.img`
  object-fit: cover;
  flex-grow: 1;

  background-color: ${p => p.theme.colors.bcg.bar};
`;

export const PosterInfo = styled.div`
  padding: ${p => p.theme.space[2]};
`;

export const PosterTitle = styled.p`
  margin-bottom: ${p => p.theme.space[2]};

  font-weight: 700;
`;

export const PosterGanres = styled.p`
  font-style: italic;
`;
