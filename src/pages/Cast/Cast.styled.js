import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    gap: ${p => p.theme.space[4]};
  }
`;

export const CastListItem = styled.li`
  display: flex;
  gap: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    gap: ${p => p.theme.space[4]};
  }
`;

export const PhotoWraper = styled.div`
  width: 80px;

  ${p => p.theme.mediaQueries.tablet} {
    width: 150px;
  }
`;

export const Photo = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;

  ${p => p.theme.mediaQueries.tablet} {
    width: 150px;
    height: 225px;
  }
`;

export const Info = styled.div``;

export const Name = styled.h3``;

export const Character = styled.p``;
