import styled from 'styled-components';

export const Text = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const ErrorText = styled.span`
  padding: 2px;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.errorText};
`;
