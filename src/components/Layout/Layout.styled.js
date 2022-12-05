import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;

  background-color: ${p => p.theme.colors.bcg.content};

  ${p => p.theme.mediaQueries.mobile} {
    width: 480px;
    margin-right: auto;
    margin-left: auto;
  }

  ${p => p.theme.mediaQueries.tablet} {
    width: 768px;
  }

  ${p => p.theme.mediaQueries.desktop} {
    width: 1280px;
  }
`;

export const Bar = styled.header`
  padding-right: ${p => p.theme.space[3]};
  padding-left: ${p => p.theme.space[3]};

  background-color: ${p => p.theme.colors.bcg.bar};

  ${p => p.theme.mediaQueries.tablet} {
    padding-right: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[4]};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]};
`;

export const NavigationLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.bar};
  line-height: 2;

  color: ${p => p.theme.colors.text.bar};

  text-decoration: none;

  &.active {
    font-weight: bold;

    color: ${p => p.theme.colors.text.barActive};
  }
`;
