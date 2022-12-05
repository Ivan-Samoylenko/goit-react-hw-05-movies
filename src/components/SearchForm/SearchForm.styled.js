import styled from 'styled-components';

export const Form = styled.form`
  max-width: 480px;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: auto;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Field = styled.input`
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};

  flex-grow: 1;
`;

export const SearchBtn = styled.button`
  width: 40px;
  height: 27px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
