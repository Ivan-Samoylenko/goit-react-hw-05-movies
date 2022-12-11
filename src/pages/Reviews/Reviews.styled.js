import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding-top: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    padding-top: ${p => p.theme.space[4]};
  }
`;

export const ReviewsListItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    margin-bottom: ${p => p.theme.space[4]};

    display: flex;
    gap: ${p => p.theme.space[4]};
  }
`;

export const Author = styled.h3`
  margin-bottom: ${p => p.theme.space[2]};

  ${p => p.theme.mediaQueries.tablet} {
    width: 200px;
    margin-bottom: ${p => p.theme.space[0]};

    display: block;
  }
`;

export const Text = styled.p`
  ${p => p.theme.mediaQueries.tablet} {
    width: 100%;
  }
`;
