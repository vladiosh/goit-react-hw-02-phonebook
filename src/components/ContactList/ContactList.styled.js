import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 10px;
  :not(:last-child) {
    margin-right: 5px;
  }
`;
