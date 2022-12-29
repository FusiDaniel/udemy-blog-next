import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
    aspect-ratio: 16/9;
    position: relative;
  `}
`;
