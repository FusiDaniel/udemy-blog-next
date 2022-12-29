import { ImageContainer } from './styled';
import Image from 'next/image';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <ImageContainer>
      <Image priority src={coverUrl} alt={alt} fill={true} />
    </ImageContainer>
  );
};
