import styled from 'styled-components';

export const PostersList = styled.ul`
  padding-right: ${p => p.theme.space[3]};
  padding-left: ${p => p.theme.space[3]};

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    padding-right: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[4]};

    gap: ${p => p.theme.space[4]};
  }
`;

export const PostersListItem = styled.li`
  width: 100%;

  background-color: ${p => p.theme.colors.bcg.bar};

  ${p => p.theme.mediaQueries.mobile} {
    width: calc((100% - (${p => p.theme.space[3]} * 1)) / 2);
  }

  ${p => p.theme.mediaQueries.tablet} {
    width: calc((100% - (${p => p.theme.space[4]} * 2)) / 3);
  }

  ${p => p.theme.mediaQueries.desktop} {
    width: calc((100% - (${p => p.theme.space[4]} * 3)) / 4);
  }
`;
