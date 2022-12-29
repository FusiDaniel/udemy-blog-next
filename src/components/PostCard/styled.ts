import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  .next-image-wrapper {
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: top;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
