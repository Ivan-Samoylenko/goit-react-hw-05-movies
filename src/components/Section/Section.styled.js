import styled from 'styled-components';

export const Wraper = styled.section`
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    padding-top: ${p => p.theme.space[4]};
    padding-bottom: ${p => p.theme.space[4]};
  }
`;
