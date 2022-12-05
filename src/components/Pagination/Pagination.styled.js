import styled from 'styled-components';

export const Wraper = styled.div`
  padding-top: ${p => p.theme.space[3]};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]};

  ${p => p.theme.mediaQueries.tablet} {
    padding-top: ${p => p.theme.space[4]};
  }
`;

export const Btn = styled.button`
  min-width: 40px;
  height: 40px;
  border: ${p => p.theme.borders.transparent};
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  background-color: ${p =>
    p.isCurrent
      ? p.theme.colors.bcg.pagination.current
      : p.theme.colors.bcg.pagination.main};

  border-radius: ${p => p.theme.radii.btn};
  box-shadow: ${p => p.theme.shadows.pagination.main};

  transition: box-shadow ${p => p.theme.transition};

  :hover,
  :focus-visible {
    box-shadow: ${p => p.theme.shadows.pagination.hover};
  }

  :active {
    box-shadow: ${p => p.theme.shadows.pagination.active};
  }
`;

export const PagList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]};
`;

export const PagListItem = styled.li`
  display: flex;
  align-items: end;
  gap: ${p => p.theme.space[3]};

  font-size: 24px;
`;
